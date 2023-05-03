import React from 'react';
//import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
//import { VscServerProcess } from 'react-icons/vsc';
import { aboutus } from '../constants/About';
const WhoWe = () => {
	return (
		<div className="w-full bg-slate-800 text-white text-center">
			<div className="max-w-[1240px] mx-auto px-4 py-16 ">
				<div>
					<h1 className="py-4">A Growing Protocol Ecosystem</h1>
					<p className="py-4 text-xl">
						We strive to create infinite opportunities in every
						sector in our community.
					</p>
					{/* Card Container */}
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{aboutus.map((about, i) => {
							return (
								<div key={i}>
									<div className="flex flex-col border text-left rounded-2xl py-12 px-8">
										<div>
											<div className="bg-[#00d8ff] inline-flex p-2 rounded-full">
												{about.icon}
											</div>
											<h3 className="text-xl font-bold py-4">
												{about.header}
											</h3>
											<p>{about.body}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhoWe;
