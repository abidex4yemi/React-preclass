import React from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';

const MovieList = props => {
	const { user, moviesToWatch, movies } = props;

	return (
		<div>
			<h2>User: {user.name}</h2>
			<p>Movies To Watch: {moviesToWatch}</p>
			{movies.map(movie => <Movie movie={movie} />)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user: state.user,
		moviesToWatch: state.moviesToWatch,
		movies: state.movies
	};
};

export default connect(mapStateToProps, {})(MovieList);
