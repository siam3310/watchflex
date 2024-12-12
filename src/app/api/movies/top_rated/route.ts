import { RequestMoviesDataModel } from "@/models";
import { ErrorReturnType, MoviesDataType } from "@/types";
import { mapMovieData } from "@/utils/server/mapMovieData";
import { NextRequest, NextResponse } from "next/server";

type ReturnType = 
	NextResponse<MoviesDataType> | 
	NextResponse<ErrorReturnType>
;

export const GET = async (req: NextRequest): Promise<ReturnType> => {
	const page = req.nextUrl.searchParams.get('page');

	const url = `https://api.themoviedb.org/3/movie/top_rated?language=uk-UA&page=${page}`;
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzQ2NjRmMjU3ZDQzNzE2NDdiNTBjMWM5Y2FiNjI0MiIsIm5iZiI6MTcyNzgwNzY1My41ODA5NTcsInN1YiI6IjY2ZmMyMzFmNDk1NWI0YTIwNmYxOTE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1FC0r8I5Ktn58OrDlI-vAGHH9d0ysGlE-QIg1jkiRzw'
		}
	};

	const response = await fetch(url, options);
	const data: RequestMoviesDataModel = await response.json();

	console.log('response', response, data);

	if(response.ok) {
		return NextResponse.json({
			results: mapMovieData(data.results.length > 0 ? data.results : []),
			totalCount: data.total_results,
			totalPages: data.total_pages,
		}, {status: response.status});
	} else {
		return NextResponse.json({
			message: 'Some error occured',
			error: true
		}, {status: response.status});
	}
}