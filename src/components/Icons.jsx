import React from "react";
import { FiLinkedin, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

function Icons() {
	return (
		<>
			<div className="flex bg-gray-900  justify-between mt-10 border-t pt-7 border-[#f0f0f0]">
				<div className="text-green-700 items-center font-extrabold">
					Copyright {new Date().getFullYear()} &copy; Kopolo Ltd.
				</div>
				<div className="flex gap-x-7">
					<div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
						<a href="https://www.linkedin.com/in/kopolo-limited-b62070248">
							{" "}
							<FiLinkedin className="icon" size={25} />{" "}
						</a>
					</div>
					<div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
						<a href="https://www.linkedin.com/in/kopolo-limited-b62070248">
							{" "}
							<FiTwitter className="icon" size={25} />{" "}
						</a>
						i
					</div>
					<div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
						<a href="https://www.linkedin.com/in/kopolo-limited-b62070248">
							{" "}
							<FiFacebook className="icon" size={25} />{" "}
						</a>
					</div>
					{/*  <FiInstagram  className='icon' size={30}/>       <FiFacebook  className='icon' size={30}/>*/}
				</div>
			</div>
		</>
	);
}

export default Icons;
