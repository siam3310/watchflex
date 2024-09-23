import React, { useEffect, useState } from 'react';
import styles from './LoginPopup.module.scss';
import cn from 'classnames'
import { CloseBtn } from './CloseBtn';
import { LoginForm } from './LoginForm';

type PropsType = {
	setIsShow: (v: boolean) => void,
	isShow: boolean,
};

export const LoginPopup: React.FC<PropsType> = ({isShow, setIsShow}) => {
	const closePopup = () => {
		setIsShow(false);
	}

	return (
		<section className={cn(styles.LoginPopup, isShow ? styles._show : '')}>
			<div className={styles.body}>
				<div className={styles.title}>Вхід</div>
				<div className={styles.closeBtnWrap}>
					<CloseBtn closePopup={closePopup} />
				</div>
				<LoginForm />
			</div>
		</section>
	)
}
