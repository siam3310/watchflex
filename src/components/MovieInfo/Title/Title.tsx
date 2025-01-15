'use client'

import React, { useEffect, useRef } from 'react'
import styles from './Title.module.scss';
import { useMovieStore } from '@/store/useMovieStore';

type PropsType = {
    children: React.ReactNode,
};

export const Title: React.FC<PropsType> = ({children}) => {
    const setMovieTitleY = useMovieStore((state) => state.setMovieTitleY);

    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const refPosition = ref.current?.getBoundingClientRect().top || 0;

        console.log(refPosition, ref.current?.getBoundingClientRect())


        setMovieTitleY(refPosition);
    }, [])

    return (
        <h1 className={styles.Title} ref={ref}>{children}</h1>
    )
}
