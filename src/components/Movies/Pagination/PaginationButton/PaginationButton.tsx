import React, { ReactNode } from 'react';
import styles from './PaginationButton.module.scss';
import cn from 'classnames'

type PropsType = {
	children: ReactNode,
	active?: boolean,
	changePage: (page: number) => void,
	currPage: number,
};

export const PaginationButton: React.FC<PropsType> = ({children, active, changePage, currPage}) => {
	const handleClick = () => {
		changePage(currPage);
	}


	return (
		<button
			className={cn(styles.PaginationButton, active ? styles._active : '')}
			onClick={handleClick}
		>
			<span className={styles.text}>
				{children}
			</span>
		</button>
	)
}
