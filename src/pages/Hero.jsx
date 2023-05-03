import React from 'react';
import hero from '../assets/hero.jpg';
import GreenBtn from '../components/GreenBtn';
//import Services from "./Services";

const Hero = () => {
	return (
		<>
			<div
				name="home"
				className="flex flex-col justify-between w-full h-screen bg-gray-900 text-white text-center md:text-left">
				<div className="grid md:grid-cols-2 max-w-screen-xl m-auto px-3">
					<div className="flex flex-col justify-center md:items-start w-full px-2 py-9 mt-10">
						<p className="text-2xl text-gray-500">
							Using technology to link society
						</p>
						<h1 className="pt-1 pb-6 text-5xl md:text-7xl font-bold">
							<span className="text-lightColor">KOPOLO</span>{' '}
							Limited
						</h1>
						<p className="text-base font-light text-gray-500">
							We strive to create infinite opportunities in every
							sector in our community
						</p>
						{/* 
          <GreenBtn
            title="sign up"
            className="capitalize py-3 px-6 sm:w-8/12 my-8"
          />
          */}
					</div>

					<div className="flex items-center justify-center">
						<img
							src={hero}
							alt="hero"
							className="w-2/4 rounded-full"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
