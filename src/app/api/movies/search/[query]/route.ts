import { ErrorReturnType, MoviesDataType } from './../../../../../types/index';
import { MovieDataModel, RequestMoviesDataModel } from "@/models";
import { mapMovieData } from '@/utils/server/mapMovieData';
import { NextRequest, NextResponse } from "next/server"

type ReturnType = MoviesDataType | ErrorReturnType;

export const GET = async (req: NextRequest, context: any): Promise<NextResponse<ReturnType>> => {
	const { query } = context.params;
	const page = req.nextUrl.searchParams.get('page');

	const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=uk-UA&page=${page}`;
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
		}
	};

	const response = await fetch(url, options);
	const data: RequestMoviesDataModel = await response.json();

	console.log(data);

	const returnData: ReturnType = response.ok ? {
		results: mapMovieData(data.results || []),
		totalCount: data.total_results,
		totalPages: data.total_pages
	} : {
		error: true,
		message: 'some error occured'
	}

	return NextResponse.json(returnData, {status: response.status});
}