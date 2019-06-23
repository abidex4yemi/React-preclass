import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MovieListContainer from './components/MovieListContainer';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>Redux Movies</h1>
				<MovieListContainer />
			</div>
		</Provider>
	);
}

export default App;
