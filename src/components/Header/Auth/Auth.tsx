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
	const [isLoginPopupShow, setIsLoginPopupShow] = useState<boolean>(true);

	return (
		<div className={styles.Auth}>
			{isAuthed ? 
				<ProfileIcon />
			:  
				<LoginButton setIsLoginPopupShow={setIsLoginPopupShow} />
			}
			<LoginPopup 
				isShow={isLoginPopupShow} 
				setIsShow={setIsLoginPopupShow}
			/>
		</div>
	)
}
