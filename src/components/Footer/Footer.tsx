import React from 'react';
import styles from './Footer.module.scss';

type PropsType = {};

export const Footer: React.FC<PropsType> = () => {
	return (
		<footer className={styles.Footer}>
			<div className="container">
				All rights reserved @Andremaxico
			</div>
		</footer>
	)
}
