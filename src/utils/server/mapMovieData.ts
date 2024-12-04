import { MovieDataModel } from "@/models";
import { MovieDataType } from "@/types";

export const mapMovieData = (data: MovieDataModel[]): MovieDataType[] => {
	return data.map(obj => ({
		adult: obj.adult,
		backdropPath: obj.backdrop_path,
		genreIds: obj.genre_ids,
		describtion: obj.overview,
		id: obj.id,
		originalLanguage: obj.original_language,
		originalTitle: obj.original_title,
		popularity: obj.popularity,
		posterUrl: obj.poster_path,
		rating: obj.vote_average,
		releaseDate: obj.release_date,
		title: obj.title,
		video: obj.video,
		voteCount: obj.vote_count
	}));
}