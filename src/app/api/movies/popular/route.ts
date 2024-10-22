import { RequestMovieDataModel } from "@/models";
import { ErrorReturnType, MovieDataType } from "@/types";
import { parseSearchParams } from "@/utils/server/parseSearchParams";
import { NextRequest, NextResponse } from "next/server";

type ReturnType = 
	NextResponse<MovieDataType[]> | 
	NextResponse<ErrorReturnType>
;

const getMappedData = (data: RequestMovieDataModel[]): MovieDataType[] => {
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

	const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
	const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
	}
	};

	const response = await fetch(url, options);
	const data: RequestMovieDataModel[] = await response.json();

	if(data.length > 0) {
		return NextResponse.json(getMappedData(data), {status: response.status});
	} else {
		return NextResponse.json({message: 'no data'}, {status: response.status});
	}
}