import { parseSearchParams } from "@/utils/server/parseSearchParams";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
	const page = parseSearchParams(req.url).page;

	const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
	const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzQ2NjRmMjU3ZDQzNzE2NDdiNTBjMWM5Y2FiNjI0MiIsIm5iZiI6MTcyNzgwNzY1My41ODA5NTcsInN1YiI6IjY2ZmMyMzFmNDk1NWI0YTIwNmYxOTE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1FC0r8I5Ktn58OrDlI-vAGHH9d0ysGlE-QIg1jkiRzw'
	}
	};

	const response = await fetch(url, options);

	const data = await response.json();

	console.log(req);
	console.log('page', page);

	if(data.results.length > 0) {
		return NextResponse.json(data.results);
	} else {
		return NextResponse.json({message: 'no data'}, {status: response.status});
	}
}