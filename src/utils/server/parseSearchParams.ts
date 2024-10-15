type SearchParamsType = {
	[key: string]: string,
}

export const parseSearchParams = (url: string): SearchParamsType => {
	const paramsObj: {[key: string]: string} = {};

	const [path, paramsString] = url.split('?');

	const arr = paramsString.split('=');
	for(let i = 1; i < arr.length; i+=2) {
		const value = arr[i];
		const param = arr[i-1];

		paramsObj[param] = value;
	}

	return paramsObj;
}