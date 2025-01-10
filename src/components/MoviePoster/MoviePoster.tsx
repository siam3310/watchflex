import React from 'react'
import styles from './MoviePoster.module.scss';
import { axiosInstance } from '@/lib/axios';
import Image from 'next/image';
import { ImagesDataType } from '@/types';

type PropsType = {
	id: string,
	movieName: string,
}

const getMovieImages = async (id: string) => {
	const res = await axiosInstance.get(`/api/movie/${id}/images`);

	return res.data;
}

export const MoviePoster: React.FC<PropsType> = async ({id, movieName}) => {
	const data = await getMovieImages(id) as unknown as ImagesDataType;

	const bestBackdrop = data.backdrops.sort((a, b) => a.vote_average > b.vote_average ? 1 : -1)[0];

	console.log('best poster', bestBackdrop);

	return (
		<div className={styles.MoviePoster}
			style={{
				backgroundImage: `url('http://image.tmdb.org/t/p/original/${bestBackdrop.file_path}')`,
			}}
		>
			{/* desktop cover */}
			
			{/* <Image 
				alt={movieName}
				src={`http://image.tmdb.org/t/p/w500${bestBackdrop.file_path}`}
				className={styles.image}
				//objectFit="cover"
          		fill
			/> */}
			{/* movile versio */}
		</div>
	)
}
