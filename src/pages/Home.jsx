import React from 'react';
// import About from './About

import heroVid from '../assets/video.mp4';

const Home = () => {
	return (
		<div
			name="home"
			className="flex flex-col justify-between w-full h-screen  text-white text-center md:text-left">
			<video
				className="absolute object-cover w-full h-full -z-10"
				src={heroVid}
				autoPlay
				loop
				muted
			/>
			<div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
				<h1>Decentralized</h1>
				<h1 className="py-2">
					<span className="text-lightColor">Trading</span> Protocol
				</h1>
				<p className="py-4 text-xl">
					Creating a better and holistic life for many people with
					innovative technologies, products and designs
				</p>
				<div>
					<button className="m-2 duration-300 transition animate-bounce">
						Use Defi
					</button>
					<button className="m-2">FAQ</button>
				</div>
			</div>
			<div>
				<p className="text-2xl font-bold text-center text-white">
					Total Volume Secured: $42,104,783,662.47
				</p>
			</div>
			{/* <About></About> */}
		</div>
	);
};

export default Home;
