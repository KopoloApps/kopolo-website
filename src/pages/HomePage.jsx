import React from 'react';
import Navbar from '../components/Navbar';
// import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from '../components/Footer';
import Partners from './Partners';
import Hero from './Hero';

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<Hero></Hero>
			<Services />
			<About />
			<Partners />
			<Contact />
			<Footer />
		</div>
	);
};

export default HomePage;
