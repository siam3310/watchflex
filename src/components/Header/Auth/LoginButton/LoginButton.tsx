import React from 'react';
import styles from './LoginButton.module.scss';

type PropsType = {};

export const LoginButton: React.FC<PropsType> = ({}) => {
	return (
		<button className={styles.LoginButton}>Login</button> /**onclick -> open login modal */		
	)
}
