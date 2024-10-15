import React from 'react';
import styles from './ActionStatus.module.scss';
import { Preloader } from '../Preloader';
import { MdError } from "react-icons/md"
import { IoCheckmarkSharp } from "react-icons/io5";
import { ActionStatusType } from '@/types';

type PropsType = {
	status: ActionStatusType,
	text?: string,
};

export const ActionStatus: React.FC<PropsType> = ({status, text}) => {
	return (
		<div className={styles.ActionStatus}>
			{
				status === 'loading' ? 
					<Preloader /> 
				:
				<div className={styles.body}>
					<div className={styles.icon}>
						{status === 'error' ? <MdError /> : <IoCheckmarkSharp />}
					</div>
					<p>{status === 'error' ? 'Сталася Помилка' : 'Успіх'}</p> 
				</div>
			}
		</div>
	)
}
