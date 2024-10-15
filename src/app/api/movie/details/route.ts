
import { parseSearchParams } from "@/utils/server/parseSearchParams";
import { NextRequest, NextResponse } from "next/server";
import { TiArrowSync } from "react-icons/ti";

export const GET = async (req: NextRequest) => {
	const movie_id = parseSearchParams(req.url).movie_id;

	const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
		}
	};

	const response = await fetch(url, options);
	const data = await response.json();

	console.log('movieid', movie_id);

	if(response.status === 200) {
		return NextResponse.json(data, {status: response.status});
	} else {
		return NextResponse.json({message: 'Some error occurred'}, {status: response.status});
	}
}