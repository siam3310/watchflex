import { RequestMoviesDataModel, MovieDataModel } from "@/models";
import { ErrorReturnType, MovieDataType, MoviesDataType } from "@/types";
import { mapMovieData } from "@/utils/server/mapMovieData";
import { parseSearchParams } from "@/utils/server/parseSearchParams";
import { NextRequest, NextResponse } from "next/server";

type ReturnType = 
	NextResponse<MoviesDataType> | 
	NextResponse<ErrorReturnType>
;

export const GET = async (req: NextRequest): Promise<ReturnType> => {
	const page = parseSearchParams(req.url).page;

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

	if(response.ok) {
		return NextResponse.json({
			results: mapMovieData(data.results.length > 0 ? data.results : []),
			totalCount: data.total_results,
			totalPages: data.total_pages

		}, {status: response.status});
	} else {
		return NextResponse.json({message: 'error', error: false}, {status: response.status})
	}
}