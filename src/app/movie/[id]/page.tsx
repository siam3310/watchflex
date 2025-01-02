import { MoviePoster } from "@/components/MoviePoster";
import { axiosInstance } from "@/lib/axios";



export default async function Page({ params }: { params: {id: string} }) {
	const id = params.id;

	return (
		<div>
			<MoviePoster id={id} />
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