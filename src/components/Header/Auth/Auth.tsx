import React from 'react';
import styles from './Auth.module.scss';
import { LoginButton } from './LoginButton';
import { ProfileIcon } from './ProfileIcon';

type PropsType = {};

export const Auth: React.FC<PropsType> = () => {
	//TODO: get this from props
	let isAuthed = false;

	return (
		<div className={styles.Auth}>
			{isAuthed ? 
				<ProfileIcon />
			:  
				<LoginButton />
			}
		</div>
	)
}
