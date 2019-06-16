import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MovieList from './components/MovieList';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>Redux Movies</h1>
				<MovieList />
			</div>
		</Provider>
	);
}

export default App;
