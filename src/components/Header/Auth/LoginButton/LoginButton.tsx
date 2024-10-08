'use client';

import React, { useEffect, useState } from 'react';
import styles from './LoginButton.module.scss';
import { RequestTokenViewModel } from '@/models';
import { useRouter, useSearchParams } from 'next/navigation';

type PropsType = {
	//setIsLoginPopupShow: (v: boolean) => void,
	//requestLogin: () => void,
};

export const LoginButton: React.FC<PropsType> = ({}) => {
	const [requestTokenData, setRequestTokenData] = useState<RequestTokenViewModel | null>(null);
	const [isTokenApproved, setIsTokenApproved] = useState<boolean>(false);

	const router = useRouter();
	const searchParams = useSearchParams();

	//get request token
	const handleClick = async () => {
		const response = await fetch('/api/auth', {
			method: 'GET',
		});

		const data: RequestTokenViewModel = await response.json();

		console.log(data);

		if(data.requestToken) {
			setRequestTokenData(data);
		}
	}

	//update localStorage
	useEffect(() => {
		localStorage.setItem('request_token_data', JSON.stringify(requestTokenData));
	}, [requestTokenData?.requestToken])

	//redirect user to approve page
	useEffect(() => {
		if(requestTokenData?.requestToken && !requestTokenData.approved) {
			router.push(`https://www.themoviedb.org/authenticate/${requestTokenData.requestToken}?redirect_to=http://${process.env.BASE_URL}`);
		}
	}, [requestTokenData?.requestToken]);

	console.log('search params', searchParams.toString(), searchParams.get('approved'));

	//set approved status
	useEffect(() => {
		const currTokenData = JSON.parse(localStorage.getItem('request_token_data') || '');

		if(searchParams.get('approved') && searchParams.get('request_token')) {
			setIsTokenApproved(true);
		}

		setRequestTokenData({
			...currTokenData, approved: true
		});
	}, [searchParams]);

	useEffect(() => {
		console.log('is token approved', isTokenApproved);
		if(isTokenApproved) {
			(async () => {
				const response = await fetch('/api/auth', {
					method: 'POST',
				});

				const json = response.json();

				console.log('json with session id', json);
			})()
		}
	}, [isTokenApproved])

	return (
		<button 
			className={styles.LoginButton} 
			onClick={handleClick}
		>
			Login
		</button> 
		/**onclick -> open login modal(local storage) */		
	)
}
