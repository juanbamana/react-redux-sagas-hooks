import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import {Home} from './pages/Home';
import {Results} from './pages/Results';
import { MovieDetail } from './pages/MovieDetail';

const App = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route  path="/" element={<Home/>} />
				<Route  path="/results" element={<Results/>} />
				<Route  path="/movie/:id" element={<MovieDetail/>} />

			</Routes>
		</BrowserRouter>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
