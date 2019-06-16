//action type
export const ADD_MOVIE = 'ADD_MOVIE';

// action creator
export const addMovie = movieTitle => {
	//action
	return {
		type: ADD_MOVIE,
		payload: movieTitle
	};
};
