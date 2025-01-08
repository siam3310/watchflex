import React from 'react';
import styles from './not-found.module.scss';

export const NotFound = ({}) => {
	return (
		<div className={styles.NotFound}>
			<p className={styles.number}>404</p>
			<p className={styles.text}>Звиняйте, Ви полізли кудись не туди</p>
		</div>
	)
}

export default NotFound;
 