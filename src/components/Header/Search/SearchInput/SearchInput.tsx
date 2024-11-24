'use client'

import React, { forwardRef, Ref, useEffect, useState } from 'react';
import styles from './SearchInput.module.scss';
import cn from 'classnames'
import { useSearchStore } from '@/store/useSearchStore';

type PropsType = {};

export const SearchInput = forwardRef<HTMLInputElement, PropsType>(({}, ref) => {
	const [query, setQuery] = useState<string>('');
	const { isSearchInputShow, hide, show } = useSearchStore(); 

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setQuery(value);
	}

	//sync current input value with localStorage
	//for the access in Movies.tsx(where's SearchButton)
	useEffect(() => {
		localStorage.setItem('searchQuery', query);
		//TODO: nulling the localstorage value "searchQuery"
	}, [query]);

	useEffect(() => {
		setQuery('');
	}, [isSearchInputShow])

	return (
		<input 
			placeholder='Шукайте тут'
			className={styles.SearchInput}
			ref={ref}
			value={query}
			onInput={handleInput}
		/>
	)
})
