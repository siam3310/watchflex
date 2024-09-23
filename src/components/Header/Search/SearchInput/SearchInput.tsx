'use client'

import React, { forwardRef, Ref } from 'react';
import styles from './SearchInput.module.scss';

type PropsType = {};

export const SearchInput = forwardRef<HTMLInputElement, PropsType>(({}, ref) => {
	return (
		
		<input 
			placeholder='Шукайте тут'
			className={styles.SearchInput}
			ref={ref}
		/>
	)
})
