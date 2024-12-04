'use client'

import React, { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { SearchInput } from './SearchInput';
import { SearchButton } from '../../Movies/SearchButton/SearchButton';
import cn from 'classnames'
import { useSearchStore } from '@/store/useSearchStore';

type PropsType = {};

export const Search: React.FC<PropsType> = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
	const {isSearchInputShow, hide, show} = useSearchStore();



	//manual focus on input, because box is bigger and has input appereance
	const handleClick = () => {
		//TODO: change in localstorage
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
			<div className={cn(styles.input, isSearchInputShow ? styles._show : '')}>
				<SearchInput ref={inputRef} />
			</div>
			{/* added id for react portal in Movies.tsx */}
			<div className={styles.searchBtn} id='header_searchBtn'></div>
		</div>
	)
}
