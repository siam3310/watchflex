'use client'

import React, { forwardRef, Ref, useEffect, useState } from 'react';
import styles from './SearchInput.module.scss';
import cn from 'classnames'

type PropsType = {};

export const SearchInput = forwardRef<HTMLInputElement, PropsType>(({}, ref) => {
	const [query, setQuery] = useState<string>('');

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setQuery(value);
	}

	//sync current input value with localStorage
	//for the access in Movies.tsx(where's SearchButton)
	useEffect(() => {
		localStorage.setItem('searchQuery', query);
		//TODO: nulling the localstorage value "searchQuery"
	}, [query])

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
