export type SessionResponseDataModel = {
	success: boolean,
	session_id: string,
	expires_at: string
}

export type SessionDataViewModel = {
	success: boolean,
	id: string,
	expiresAt: string
}

export type RequestTokenResponseDataModel = {
	success: boolean,
	expires_at: string,
	request_token: string
}

export type RequestTokenViewModel = {
	requestToken?: string,
	expiresAt?: string,
	error: boolean,
	approved: boolean,
}