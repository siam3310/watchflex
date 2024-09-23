'use client'

import React, { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton/SearchButton';
import cn from 'classnames'

type PropsType = {};

export const Search: React.FC<PropsType> = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

		
	//manual focus on input, because box is bigger and has input appereance
	const handleClick = () => {
		console.log('click', inputRef.current);
		inputRef.current && inputRef.current.focus();
		inputRef.current && setIsInputFocused(true);
	}

	const inputFocusoutHandler = () => {
		setIsInputFocused(false);
	}

	inputRef.current?.addEventListener('focusout', inputFocusoutHandler);

	useEffect(() => {
		return () => {
			inputRef.current?.removeEventListener('focusout', inputFocusoutHandler);
		}
	}, [])

	return (
		<div className={cn(styles.Search, isInputFocused ? styles._focused : '')} onClick={handleClick}>
			<div className={styles.input}>
				<SearchInput ref={inputRef} />
			</div>
			<div className={styles.searchBtn}>
				<SearchButton />
			</div>
		</div>
	)
}
