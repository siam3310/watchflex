'use client'

import React, { useRef } from 'react';
import styles from './LoginForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';

type PropsType = {};
type FieldsType = {
	email: string, 
	password: string,
};

export const LoginForm: React.FC<PropsType> = ({}) => {
	const { register, handleSubmit, formState: { errors } } = useForm<FieldsType>();

	const formRef = useRef<HTMLFormElement>(null);

	const onSubmit: SubmitHandler<FieldsType> = async data => {
		console.log(formRef.current);
		if(formRef.current) {
			const response = await fetch('/api/guestSession', {
				method: 'GET',
			});

			//const data = JSON.parse(await response.json());

			//console.log('data', data);
		}
	}

	return (
		<form className={styles.LoginForm} onSubmit={handleSubmit(onSubmit)} ref={formRef}>
			<div className={styles.inputWrap}>
				<input 
					placeholder='Електронна пошта'
					className={styles.input}
					type='email'
					required
					{...register('email', {required: true})}
				/>
				{errors.email && <p className={styles.errorMessage}>{errors.email.message}</p> }
			</div>
			<div className={styles.inputWrap}>
				<input 
					placeholder='Пароль'
					className={styles.input}
					type='password'
					{...register('password', {
						required: "Це поле є обов'язковим",
						minLength: {value: 8, message: 'Мінімальна довжина паролю - 8 символів'},
						maxLength: {value: 24, message: 'Максимальна довжина паролю - 24 символи'},
						pattern: {
							value: /^(?=.*?[A-Z]|[А-Я])(?=.*?[a-z]|[а-я])(?=.*?[0-9]).{8,}$/,
							message: 'Пароль мусить містити хоча б 1 букву і цифру'
						}
					})}
				/>
			</div>
			{errors.password && <p className={styles.errorMessage}>{errors.password.message}</p> }

			<button
				className={styles.submitBtn}
			>
				Увійти
			</button>
		</form>
	)
}
