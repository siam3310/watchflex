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
				<Logo />
				<Search />
				<Auth isAuthed={false} />
			</div>
		</header>
	)
}
