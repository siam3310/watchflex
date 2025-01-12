import React from 'react'
import styles from './Title.module.scss';

type PropsType = {
    children: React.ReactNode,
};

export const Title: React.FC<PropsType> = ({children}) => {
    return (
        <h1 className={styles.Title}>{children}</h1>
    )
}
