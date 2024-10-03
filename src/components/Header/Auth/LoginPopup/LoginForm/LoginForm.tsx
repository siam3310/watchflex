'use client'

import React, { useEffect, useRef, useState } from 'react';
import styles from './LoginForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RequestTokenViewModel } from '@/models';
import { useRouter } from 'next/navigation';

type PropsType = {};
type FieldsType = {
	email: string, 
	password: string,
};

export const LoginForm: React.FC<PropsType> = ({}) => {
	const { register, handleSubmit, formState: { errors } } = useForm<FieldsType>();

	const [requestToken, setRequestToken] = useState<string | null>(null);

	const formRef = useRef<HTMLFormElement>(null);

	const router = useRouter();

	const onSubmit: SubmitHandler<FieldsType> = async data => {
		if(formRef.current) {
			const response = await fetch('/api/auth', {
				method: 'GET',
			});

			const data: RequestTokenViewModel = await response.json();

			console.log(data);

			if(data.requestToken) {
				setRequestToken(data.requestToken);
			}
		}
	}

	useEffect(() => {
		console.log(requestToken);
		if(requestToken) {
			router.push(`https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${process.env.BASE_URL}`);
		}
	}, [requestToken])

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
