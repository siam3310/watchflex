'use client'

import React, { Suspense, useEffect, useState } from 'react';
import styles from './Movies.module.scss';
import { MoviesList } from '../MoviesList';
import { axiosInstance } from '@/lib/axios';
import { MovieDataType, MoviesDataType } from '@/types';
import { Preloader } from '@/UI/Preloader';
import { Pagination } from './Pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import classNames from 'classnames';

type PropsType = {};

const getMovies = async (page: number): Promise<MoviesDataType | undefined> => {
	const res = await axiosInstance.get(`/api/movies/popular?page=${page}`);

	const data = res.data as MoviesDataType | undefined;

	return res.data.error ? undefined : data;
}

export const Movies: React.FC<PropsType>  = ({}) => {
	const params = useSearchParams();
	const router = useRouter();

	const page = Number(params.get('page'));

	console.log(params);

	const [moviesData, setMoviesData] = useState<MoviesDataType>();
	
	const [isFetching, setIsFetching] = useState<boolean>(false);

	const changePage = (page: number) => {
		router.push(`/?page=${page}`);
	}

	useEffect(() => {
		console.log('request movies');
		(async () => {
			setIsFetching(true);
			const fetchedData = await getMovies(page);

			setMoviesData(fetchedData);
			setIsFetching(false);
		})();
	}, [page])

	
	if(moviesData === undefined) {
		//show error
	}

	return (
		<div className={styles.Movies}>
			{moviesData?.results && moviesData.results.length > 0 ?
				<>
					<div className={styles.list}>
						<Suspense fallback={<Preloader />}>
							<MoviesList moviesData={moviesData.results}/>
						</Suspense>
					</div>
					<Pagination
						changePage={changePage}
						currPage={page}
						pagesNum={moviesData?.totalPages || 0}
					/>
				</>
			: 
				<p>No movies</p>
			}

			{isFetching && <Preloader />}
		</div>
	)
}
