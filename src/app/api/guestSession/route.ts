import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
	const url = 'https://api.themoviedb.org/3/authentication/guest_session/new';
	const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
	}
	};

	const response = await fetch(url, options);
	const data = await response.json();

	console.log(data);

	if(data.success) {
		return NextResponse.json({session_id: data.guest_session_id, statusCode: 200})
	} else {
		return NextResponse.json({statusCode: 404});
	}
}