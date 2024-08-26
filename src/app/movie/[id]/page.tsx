import { GetStaticProps } from "next";


export default async function Page({ params }: { params: {id: string} }) {
	const url = `https://api.themoviedb.org/3/find/external_id?external_source=${params.id}`;
	const staticData = await fetch(url, { cache: 'force-cache' });
	console.log(staticData);
	const id = params.id;
	return (
		<div>
			Movie with id
			{id}
		</div>
	)
}


// export const generateStaticParams = async ({params}) => {
// 	const url = `https://api.themoviedb.org/3/find/external_id?external_source=${params}`;
// 	const options = {method: 'GET', headers: {accept: 'application/json'}};

// 	try {
// 		const res = await fetch(url, options);
// 		const data = await res.json();
// 		return {
// 			props: {
// 				data
// 			}
// 		}
// 	} catch(error) {
// 		return {
// 			props: {
// 				error
// 			}
// 		}
// 	}
// }