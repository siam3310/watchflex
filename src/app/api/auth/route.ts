import { RequestTokenResponseDataModel, SessionDataModel } from "@/models";
import { NextRequest, NextResponse } from "next/server"


//The movie db

//Creeate Request Token
export const GET = async () => {
	const url = 'https://api.themoviedb.org/3/authentication/token/new';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
		}
	};

	const res = await fetch(url, options);
	
	const data: RequestTokenResponseDataModel = await res.json();

	console.log('status', res.status);

	if(data.success) {
		return NextResponse.json({
			requestToken: data.request_token,
			expiresAt: data.expires_at,
			error: false,
		}, {status: 200});
	} else {
		return NextResponse.json({
			error: true,
		})
	}
}

export const POST = async () => {

}