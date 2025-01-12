import React from 'react'
import styles from './Describtion.module.scss';
import { TiStarFullOutline } from "react-icons/ti";
import Image from 'next/image';

type PropsType = {
    text: string,
    posterUrl: string,
    rating: number,
    genresNames: string[],
    budget: number,
}

export const Describtion: React.FC<PropsType> = ({text, posterUrl, rating, genresNames, budget}) => {
    console.log(text);

    return (
        <div className={styles.Describtion}>
            <div className={styles.mainInfo}>
                <p className={styles.text}>{text}</p>
                <ul className={styles.genres}>
                    {genresNames.map(name => (
                        <li className={styles.genre}>{name}</li>
                    ))}
                </ul>
                <p className={styles.budget}>Бюджет: {budget} $</p>
                <p className={styles.rating}>
                    {rating.toFixed(1)} 
                    <TiStarFullOutline className={styles.starIcon} />
                </p>
            </div>
            <div className={styles.poster}>
                <Image 
                    alt='Movie poster'
                    src={`https://image.tmdb.org/t/p/original/${posterUrl}`}
                    height={350}
                    width={240}
                />
            </div>
        </div>
    )
}
