import React from 'react'
import { Logo } from './Logo';
import styles from './Header.module.scss';
import { Auth } from './Auth';
import cn from 'classnames'
import { Search } from './Search';

type PropsType = {};

export const Header: React.FC<PropsType> = ({}) => {
	return (
		<header className={styles.Header}>
			<div className={cn(styles.container, "container")}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<div className={styles.search}>
					<Search />
				</div>
				<div className={styles.auth}>
					<Auth />
				</div>
			</div>
		</header>
	)
}
