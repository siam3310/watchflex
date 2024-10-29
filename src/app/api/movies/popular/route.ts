import { RequestMoviesDataModel, MovieDataModel } from "@/models";
import { ErrorReturnType, MovieDataType } from "@/types";
import { parseSearchParams } from "@/utils/server/parseSearchParams";
import { NextRequest, NextResponse } from "next/server";

type ReturnType = 
	NextResponse<MovieDataType[]> | 
	NextResponse<ErrorReturnType>
;

const getMappedData = (data: MovieDataModel[]): MovieDataType[] => {
	return data.map(obj => ({
		adult: obj.adult,
		backdropPath: obj.backdrop_path,
		genreIds: obj.genre_ids,
		describtion: obj.overview,
		id: obj.id,
		originalLanguage: obj.original_language,
		originalTitle: obj.original_title,
		popularity: obj.popularity,
		posterUrl: obj.poster_path,
		rating: obj.vote_average,
		releaseDate: obj.release_date,
		title: obj.title,
		video: obj.video,
		voteCount: obj.vote_count
	}));
}

export const GET = async (req: NextRequest): Promise<ReturnType> => {
	const page = parseSearchParams(req.url).page;

	console.log('page', page);

	const url = `https://api.themoviedb.org/3/movie/popular?language=uk-UA&page=${page}`;
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
		}
	};

	const response = await fetch(url, options);
	const data: RequestMoviesDataModel = await response.json();

	console.log('movies data', data);

	if(response.ok) {
		return NextResponse.json(getMappedData(data.results.length > 0 ? data.results : []), {status: response.status});
	} else {
		return NextResponse.json({message: 'error', error: false}, {status: response.status})
	}
}