import React from 'react';
import styles from './SearchButton.module.scss';
import { CiSearch } from "react-icons/ci";

type PropsType = {};
  
export const SearchButton: React.FC<PropsType> = ({}) => {
	return (
		//on typing -> show predictions
		//on click -> page with founded movies (/search/[movieName])
		<button className={styles.SearchButton}>
			<CiSearch className={styles.icon} />
		</button>
	)
}
