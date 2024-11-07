import React from 'react';
import styles from './MovieCard.module.scss';
import { MovieDataType } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

type PropsType = {
	data: MovieDataType,
};

export const MovieCard: React.FC<PropsType> = ({data}) => {
	return (
		<Link href='/' className={styles.MovieCard}>
			<div className={styles.poster}>
				<Image
					alt='Poster'
					src={`http://image.tmdb.org/t/p/w500${data.posterUrl}`}
					// ration 2:3
					width={200}
					height={280}
					className={styles.img}
				/>
			</div>

			<div className={styles.info}>
				<h4 className={styles.title}>{data.title}</h4>
				<div className={styles.rating}>{(+data.rating).toFixed(1)}</div>
				{/* <p className={styles.describtion}>{data.describtion}</p> */}
			</div>
		</Link>
	)
}
