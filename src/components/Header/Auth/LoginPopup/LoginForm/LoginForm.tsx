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
	const { register, handleSubmit } = useForm<FieldsType>();

	const formRef = useRef<HTMLFormElement>(null);

	const onSubmit: SubmitHandler<FieldsType> = async data => {
		console.log(formRef.current);
		if(formRef.current) {
			const formData = new FormData(formRef.current);
			let response = await fetch('/api/auth', {
				method: 'POST',
				body: formData,
			});
			response = await response.json()
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
					{...register('email')}
				/>
			</div>
			<div className={styles.inputWrap}>
				<input 
					placeholder='Пароль'
					className={styles.input}
					type='password'
					required
					{...register('password')}
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
