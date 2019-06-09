import React from 'react';
import { avengers } from '../data';
import { Link } from 'react-router-dom';

export const AvengersList = () => {
	return (
		<div className="characters-list-wrapper">
			{avengers.map(avenger => (
				<div className="character-card" key={avenger.id}>
					<img src={avenger.thumbnail} alt={avenger.name} />

					<Link to={`/avengers/${avenger.id}`}>
						<h2>{avenger.name}</h2>
					</Link>

					<p>({avenger.nickname})</p>
				</div>
			))}
		</div>
	);
};
