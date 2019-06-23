import { connect } from 'react-redux';
import { MovieList } from './MovieList';
import { addMovie } from '../actions';

const mapStateToProps = state => {
	return {
		user: state.movieReducer.user,
		moviesToWatch: state.movieReducer.moviesToWatch,
		movies: state.movieReducer.movies
	};
};

export default connect(mapStateToProps, { addMovie })(MovieList);
