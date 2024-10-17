import { parseSearchParams } from "@/utils/server/parseSearchParams";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, context: any) => {
	const { movieId } = context.params;

	const url = `https://api.themoviedb.org/3/movie/${movieId}/images`;
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
		}
	};

	const response = await fetch(url, options);
	const data = await response.json();

	if(response.ok) {
		return NextResponse.json(data, { status: response.status });
	} else {
		return NextResponse.json({message: 'Some error occurred'}, {status: response.status});
	}

}