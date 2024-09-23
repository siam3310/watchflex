'use client'

import React from 'react';
import styles from './CloseBtn.module.scss';
import { MdOutlineClose } from "react-icons/md";

type PropsType = {
	closePopup: () => void,
};

export const CloseBtn: React.FC<PropsType> = ({closePopup}) => {
	return (
		<button className={styles.CloseBtn} onClick={closePopup}>
			<MdOutlineClose />
		</button>
	)
}
