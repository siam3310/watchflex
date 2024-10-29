export type ActionStatusType = 'loading' | 'error' | 'success';

export type MovieDataType = {
	adult: boolean,
	backdropPath: string,
	genreIds: number[],
	id: number,
	originalLanguage: string,
	originalTitle: string,
	describtion: string,
	popularity: number,
	posterUrl: string,
	releaseDate: string,
	title: string,
	video: boolean,
	rating: number,
	voteCount: number,
}

export type ErrorReturnType = {
	message: string,
	error: boolean,
}