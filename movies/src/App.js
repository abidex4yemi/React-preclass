import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MovieList from './components/MovieList';
import './App.css';

const reducer = () => {
	return {
		user: {
			name: 'Yemi'
		},
		movies: ['Star wars', 'Lord of the ring', 'Harry Porter'],
		todoList: [
			{
				task: 'Learn Redux',
				id: 0,
				completed: false
			}
		],
		moviesToWatch: 13
	};
};

const store = createStore(reducer);

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
