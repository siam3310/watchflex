'use client';

import React, { useState } from 'react';
import styles from './Auth.module.scss';
import { LoginButton } from './LoginButton';
import { ProfileIcon } from './ProfileIcon';
import { LoginPopup } from './LoginPopup';

type PropsType = {
	isAuthed: boolean,
};

export const Auth: React.FC<PropsType> = ({isAuthed}) => {
	const [isLoginPopupShow, setIsLoginPopupShow] = useState<boolean>(false);

	return (
		<div className={styles.Auth}>
			{isAuthed ? 
				<ProfileIcon />
			:  
				<LoginButton />
			}
			<LoginPopup 
				isShow={isLoginPopupShow} 
				setIsShow={setIsLoginPopupShow}
			/>
		</div>
	)
}
