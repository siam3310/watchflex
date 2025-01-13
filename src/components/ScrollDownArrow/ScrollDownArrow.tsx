import React from 'react'
import styles from './ScrollDownArrow.module.scss'
import { FaLongArrowAltDown } from "react-icons/fa";

type PropsType = {}

export const ScrollDownArrow: React.FC<PropsType> = ({}) => {
    return (
        <div className={styles.ScrollDownArrow}>
            <FaLongArrowAltDown className={styles.icon} />
        </div>
    )
}
