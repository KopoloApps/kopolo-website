import React from 'react';
import { data } from '../assets/partnerImages';
//import unga from '../assets/image/unga.png';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Partners = () => {
	const slideLeft = () => {
		var slider = document.getElementById('slider');
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const slideRight = () => {
		var slider = document.getElementById('slider');
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			<div id="partner" name="partner" className="">
				<div className="">
					<h1 className="mb-4 text-center">
						A growing list of people who believe in us.
					</h1>
					<p className="max-w-2xl py-8 mx-auto text-center">
						We have faith in the determination of our people to
						forge a society that is inclusive to everyone.
					</p>
				</div>
			</div>
			<div className=" mx-8">
				<h3 className="text-center">Partners</h3>

				<div className="relative flex items-center">
					<MdChevronLeft
						className="opacity-50 cursor-pointer hover:opacity-100"
						onClick={slideLeft}
						size={40}
					/>
					<div
						id="slider"
						className="w-full h-full overflow-x-scroll scroll-auto scroll whitespace-nowrap  scrollbar-hide">
						{data.map((item) => {
							return (
								<img
									key={item.id}
									className="w-[220px] rounded shadow-sm inline-block cursor-pointer p-4 hover:scale-105 ease-in-out duration-500"
									src={item.img}
									alt=""></img>
							);
						})}
					</div>
					<MdChevronRight
						className="opacity-50 cursor-pointer hover:opacity-100"
						onClick={slideRight}
						size={40}
					/>
				</div>
			</div>
		</>
	);
};

export default Partners;
