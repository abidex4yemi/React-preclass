import React from 'react';
import { Link } from 'react-router-dom';

export const AvengersList = props => {
	const avengers = props.fetchInitialData;
	return (
		<div className="characters-list-wrapper">
			{avengers.map(avenger => (
				<div className="character-card" key={avenger.id}>
					<img src={avenger.thumbnail} alt={avenger.name} />

					<Link
						to={{
							pathname: `/avengers/${avenger.id}`,
							state: {
								avengers
							}
						}}
					>
						<h2>{avenger.name}</h2>
					</Link>

					<p>({avenger.nickname})</p>
				</div>
			))}
		</div>
	);
};
