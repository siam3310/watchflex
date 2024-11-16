'use client'

import React, { Suspense, useEffect, useState } from 'react';
import styles from './Movies.module.scss';
import { MoviesList } from '../MoviesList';
import { axiosInstance } from '@/lib/axios';
import { ErrorReturnType, MovieDataType, MoviesDataType } from '@/types';
import { Preloader } from '@/UI/Preloader';
import { Pagination } from './Pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { SearchButton } from './SearchButton/SearchButton';
import axios from 'axios';

type PropsType = {};

const getMovies = async (page: number): Promise<MoviesDataType | undefined> => {
	const res = await axiosInstance.get(`/api/movies/popular?page=${page}`);

	const data = res.data as MoviesDataType | undefined;

	return res.data.error ? undefined : data;
}

const getMoviesByQuery = async (query: string, page: number) => {
	const moviesData = await axios.get(`/api/movies/search/${query}?page=${page}`);

	return moviesData.data as MoviesDataType | ErrorReturnType;
}

type MoviesSourcesType = 'search' | 'popular';

export const Movies: React.FC<PropsType>  = ({}) => {
	const params = useSearchParams();
	const router = useRouter();

	const page = Number(params.get('page')) || 1;

	const isSearchInputShow = localStorage.getItem('isSearchInputShow') === 'true'; // true | false -> boolean
	const searchQuery = localStorage.getItem('searchQuery');

	const [moviesData, setMoviesData] = useState<MoviesDataType>();
	
	const [isFetching, setIsFetching] = useState<boolean>(false);
	//TODO: close search -> method - popular
	const [moviesSource, setMoviesSource] = useState<MoviesSourcesType>('popular');

	//modify the url search params
	const changePage = (page: number) => {
		router.push(`/?page=${page || 1}`);
	}

	//change the localstorage for access in Header
	const setIsInputShow = (value: boolean) => {
		//must put only 'true' or 'false' values
		localStorage.setItem('isSearchInputShow', value ? 'true' : 'false');
	}

	//general function for searching movies
	const searchMovies = async () => {
		const data = await getMoviesByQuery(searchQuery || '', page);
		console.log(data);
		//@ts-expect-error
		return data.error ? [] as MoviesDataType : data as MoviesDataType;
	}

	const handleSearchBtnClick = async () => {
		if(moviesSource !== 'search') {
			setMoviesSource('search');
		}
		changePage(1);
		const movies = await searchMovies();
		setMoviesData(movies);
	}
	

	useEffect(() => {
		console.log('request movies');
		(async () => {
			setIsFetching(true);
			const fetchedData = 
				moviesSource === 'popular' ? await getMovies(page) 
				: 
				await searchMovies();
			;

			setMoviesData(fetchedData);
			setIsFetching(false);
		})();
	}, [page]);

	console.log('movies data', moviesData);

	
	if(moviesData === undefined) {
		//show error
	}

	//TODO: add "not found" when searching movies

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

			{/* using portal to trigger requests form this file */}
			{createPortal(
				<SearchButton
					isInputShow={isSearchInputShow} 
					setIsInputShow={setIsInputShow}
					getMovies={handleSearchBtnClick}
				/>,
				document.getElementById('header_searchBtn') || document.body
			)}

			{isFetching && <Preloader />}
		</div>
	)
}
