import React from 'react';
import logo from '../assets/logo/kopolo2.png';
const Teams = () => {
	return (
		<div>
			<div className=" grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="cursor-pointer grayscale hover:grayscale-0">
					<img
						src={logo}
						alt=""
						width="100%"
						height="100%"
						// layout="responsive"
						// objectFit="contain"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src=""
						alt=""
						width="100%"
						height="100%"
						// layout="responsive"
						// objectFit="contain"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="my-auto ">
					<img
						src=""
						alt=""
						width="100%"
						height="100%"
						// layout="responsive"
						// objectFit="contain"
						className="object-cover w-full h-full"
					/>
					<h3 className="text-gray-50">Welcome</h3>
				</div>
			</div>
		</div>
	);
};
export default Teams;
