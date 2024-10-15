import React from 'react';
import styles from './Preloader.module.scss';

type PropsType = {};

export const Preloader: React.FC<PropsType> = ({}) => {
	return (
		<div className={styles.Preloader}></div>
	)
}
