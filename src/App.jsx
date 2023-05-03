// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
