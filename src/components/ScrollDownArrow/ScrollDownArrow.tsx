'use client'

import React from 'react'
import styles from './ScrollDownArrow.module.scss'
import { FaLongArrowAltDown } from "react-icons/fa";
import { useMovieStore } from '@/store/useMovieStore';
import { useHeaderStore } from '@/store/useHeaderStore';

type PropsType = {}

export const ScrollDownArrow: React.FC<PropsType> = ({}) => {
    const titleYPosition = useMovieStore((store) => store.movieTitleY);
    const headerHeight = useHeaderStore(store => store.headerHeight);

    const handleClick = () => {
        window.scrollTo({
            top: titleYPosition - headerHeight - 20,
            behavior: 'smooth'
        })
    }

    return (
        <button className={styles.ScrollDownArrow} onClick={handleClick}>
            <FaLongArrowAltDown className={styles.icon} />
        </button>
    )
}
