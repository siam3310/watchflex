import Image from 'next/image';
import React from 'react';
import styles from './LogoIcon.module.scss';

type PropsType = {};

export const LogoIcon: React.FC<PropsType> = ({}) => {
	return (
		<>
			<Image
				src={'/images/logo.png'}
				width={60}
				height={48}
				alt='logo'
				className={styles.LogoIcon}
			/>
		</>
	)
}
