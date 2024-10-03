export type SessionDataModel = {
	success: boolean,
	guest_session_id: string,
	expires_at: string
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
}