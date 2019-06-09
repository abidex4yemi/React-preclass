import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AvengersList } from './components/AvengersList';
import './App.css';

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Home} />
			<Route exact path="/avengers" component={AvengersList} />
		</div>
	);
}

export default App;
