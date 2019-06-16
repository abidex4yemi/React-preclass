import { combineReducers } from 'redux';
import { movieReducer } from './moviesReducers';

export default combineReducers({
	movies: movieReducer
});
