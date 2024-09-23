import React from 'react';
import styles from './LoginForm.module.scss';

type PropsType = {};

export const LoginForm: React.FC<PropsType> = ({}) => {
	return (
		<form className={styles.LoginForm}>
			<div className={styles.inputWrap}>
				<input 
					placeholder='Електронна пошта'
					className={styles.input}
					type='email'
					required
				/>
			</div>
			<div className={styles.inputWrap}>
				<input 
					placeholder='Пароль'
					className={styles.input}
					type='password'
					required
				/>
			</div>

			<button
				className={styles.submitBtn}
			>
				Увійти
			</button>
		</form>
	)
}
