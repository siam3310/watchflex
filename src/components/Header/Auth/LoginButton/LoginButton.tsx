'use client';

import React from 'react';
import styles from './LoginButton.module.scss';

type PropsType = {
	setIsLoginPopupShow: (v: boolean) => void
};

export const LoginButton: React.FC<PropsType> = ({setIsLoginPopupShow}) => {
	const handleClick = () => {
		setIsLoginPopupShow(true);
	}

	return (
		<button 
			className={styles.LoginButton} 
			onClick={handleClick}
		>
			Login
		</button> 
		/**onclick -> open login modal(local storage) */		
	)
}
