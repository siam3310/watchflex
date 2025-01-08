import React from 'react'
import styles from './MoviePoster.module.scss';
import { axiosInstance } from '@/lib/axios';

type PropsType = {
	id: string,
}

const getMovieImages = async (id: string) => {
	const data = await axiosInstance.get(`/api/movie/${id}/images`);

	return data;
}

export const MoviePoster: React.FC<PropsType> = async ({id}) => {


	const data = await getMovieImages(id);
	console.log(data);

	return (
		<div className={styles.MoviePoster}>
			MoviePoster
		</div>
	)
}
