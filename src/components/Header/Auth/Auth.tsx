'use client';

import React, { useState } from 'react';
import styles from './Auth.module.scss';
import { LoginButton } from './LoginButton';
import { ProfileIcon } from './ProfileIcon';
import { LoginPopup } from './LoginPopup';
import { ActionStatus } from '@/UI/ActionStatus/ActionStatus';
import { ActionStatusType } from '@/types';

type PropsType = {
	isAuthed: boolean,
};

export const Auth: React.FC<PropsType> = ({isAuthed}) => {
	const [isLoginPopupShow, setIsLoginPopupShow] = useState<boolean>(false);
	//for informing user about actions and better ux
	const [actionStatus, setActionStatus] = useState<ActionStatusType | null>(null);

	console.log(setActionStatus);

	return (
		<div className={styles.Auth}>
			{!!actionStatus && <ActionStatus status={actionStatus} />}
			{isAuthed ? 
				<ProfileIcon />
			:  
				<LoginButton setActionStatus={setActionStatus} />
			}
			<LoginPopup 
				isShow={isLoginPopupShow} 
				setIsShow={setIsLoginPopupShow}
			/>
		</div>
	)
}
