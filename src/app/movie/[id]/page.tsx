import { MovieInfo } from "@/components/MovieInfo";
import { MoviePoster } from "@/components/MoviePoster";
import { axiosInstance } from "@/lib/axios";
import { MovieDataType } from "@/types";

const getDetails = async (id: string) => {
	const response = await axiosInstance.get(`/api/movie/${id}/details`);

	const data = response.data;

	return data;
}

export default async function Page({ params }: { params: {id: string} }) {
	const id = params.id;

	const details = await getDetails(id) as MovieDataType;

	return (
		<div>
			<MoviePoster 
				id={id} 
				// TODO: Get normal movie name
				movieName={details.title}
			/>
			<MovieInfo 
				details={details}
			/>
		</div>
	)
}