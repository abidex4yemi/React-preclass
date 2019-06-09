import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { AvengersList } from './components/AvengersList';
import { AvengerPage } from './components/AvengerPage';
import { avengers } from './data';
import './App.css';

const routes = [
	{
		id: 1,
		path: '/',
		Component: Home
	},
	{
		id: 4,
		path: '/avengers',
		Component: AvengersList,
		fetchInitialData: avengers
	},
	{
		id: 3,
		path: '/avengers/:id',
		Component: AvengerPage
	}
];

function App() {
	return (
		<div className="App">
			<ul className="navbar">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/avengers">Avengers</Link>
				</li>
			</ul>
			{routes.map(({ path, Component, id, fetchInitialData }) => {
				return (
					<Route
						key={id}
						exact
						path={path}
						render={props => <Component {...props} fetchInitialData={fetchInitialData} />}
					/>
				);
			})}
		</div>
	);
}

export default App;
