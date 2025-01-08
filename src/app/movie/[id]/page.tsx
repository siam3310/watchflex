import { MoviePoster } from "@/components/MoviePoster";
import { axiosInstance } from "@/lib/axios";



export default async function Page({ params }: { params: {id: string} }) {
	const id = params.id;

	console.log('hey');

	return (
		<div>
			<MoviePoster 
				id={id} 
				// TODO: Get normal movie name
				movieName={'hahahha'}
			/>
		</div>
	)
}