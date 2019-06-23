import React, { useState } from 'react';
import uuid from 'uuid';
import Movie from './Movie';

export const MovieList = props => {
	const [newMovie, setNewMovie] = useState('');

	const { movies, moviesToWatch, user, addMovie } = props;

	return (
		<div>
			<h2>User: {user.name}</h2>
			<p>Movies To Watch: {moviesToWatch}</p>

			{movies.map(movie => <Movie key={uuid()} movie={movie} />)}
			<input type="text" value={newMovie} onChange={evt => setNewMovie(evt.target.value)} />

			<button
				type="button"
				onClick={() => {
					addMovie(newMovie);
					setNewMovie('');
				}}
			>
				Add Movie
			</button>
		</div>
	);
};
