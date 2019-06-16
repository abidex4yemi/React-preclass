import React, { useState } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import Movie from './Movie';
import { addMovie } from '../actions';

const MovieList = props => {
	const [newMovie, setNewMovie] = useState('');

	const { user, moviesToWatch, movies, addMovie } = props;

	return (
		<div>
			<h2>User: {user.name}</h2>
			<p>Movies To Watch: {moviesToWatch}</p>
			{movies.map(movie => <Movie key={uuid()} movie={movie} />)}
			<input type="text" value={newMovie} onChange={evt => setNewMovie(evt.target.value)} />
			<button type="button" onClick={() => addMovie(newMovie)}>
				Add Movie
			</button>
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

export default connect(mapStateToProps, { addMovie })(MovieList);
