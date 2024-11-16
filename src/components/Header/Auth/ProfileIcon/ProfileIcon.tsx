import React from 'react';
import styles from './ProfileIcon.module.scss';
import { CiUser } from "react-icons/ci";

type PropsType = {};

export const ProfileIcon: React.FC<PropsType> = ({}) => {
	return (
		<div className={styles.ProfileIcon}>
			<CiUser className={styles.icon} />
		</div>
	)
}
