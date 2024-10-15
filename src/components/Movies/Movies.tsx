import React from 'react';
import styles from './Movies.module.scss';

type PropsType = {};

const getMovies = async (page: number) => {
	const res = await fetch(`/api/movies/popular?page=${page}`);

	const json = await res.json();
	const data = JSON.parse(json);

	console.log(data);

	return data;
}

export const Movies: React.FC<PropsType> = async () => {
	const moviesData = await getMovies(1); 

	return (
		<div>Movies</div>
	)
}

