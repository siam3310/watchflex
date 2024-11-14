import React from 'react';
import styles from './SearchButton.module.scss';
import { CiSearch } from "react-icons/ci";

type PropsType = {
	isInputShow: boolean,
	setIsInputShow: (value: boolean) => void,
};
  
export const SearchButton: React.FC<PropsType> = ({isInputShow, setIsInputShow}) => {
	const handleClick = () => {
		if(!isInputShow) {
			console.log('set is input show true');
			setIsInputShow(true);
		} else {
			//on click -> page with founded movies (/search/[movieName])
		}
	}


	return (
		//on typing -> show predictions
		<button className={styles.SearchButton} onClick={handleClick}>
			<CiSearch className={styles.icon} />
		</button>
	)
}
