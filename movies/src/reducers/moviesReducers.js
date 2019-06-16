import { ADD_MOVIE } from '../actions';

const initialState = {
	user: {
		name: 'Yemi'
	},
	movies: ['Star wars', 'Lord of the ring', 'Harry Porter'],
	todoList: [
		{
			task: 'Learn Redux',
			id: 0,
			completed: false
		}
	],
	moviesToWatch: 13
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MOVIE:
			return {
				...state,
				movies: [...state.movies, action.payload]
			};
		default:
			return state;
	}
};
