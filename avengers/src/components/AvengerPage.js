import React from 'react';

export const AvengerPage = props => {
	const { avengers } = props.location.state;

	const id = props.match.params.id;
	const avenger = avengers.find(avenger => `${avenger.id}` === id);

	if (avenger) {
		return (
			<div>
				<img className="character-image" src={avenger.img} alt={avenger.name} />
				<div className="character-info-wrapper">
					<h1>{avenger.name}</h1>
					<h4>({avenger.nickname})</h4>
					<p>{avenger.description}</p>
				</div>
			</div>
		);
	}

	return <div>Character with does not exist!</div>;
};
