'use client'

import React, { useEffect, useState } from 'react';
import styles from './CloseBtn.module.scss';
import cn from 'classnames'
import { useSearchStore } from '@/store/useSearchStore';

type PropsType = {};

export const CloseBtn: React.FC<PropsType> = ({}) => {
	const { isSearchInputShow, hide } = useSearchStore();

	const handleClick = () => {
		hide();
	};

	return (
		<button className={cn(styles.CloseBtn, isSearchInputShow ? styles._show : '')} onClick={handleClick}>
			x
		</button>
	)
}
