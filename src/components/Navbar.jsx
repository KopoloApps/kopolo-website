import logo from "../assets/logo/kopolo2.png";
import React, { useState } from "react";
import {
	FaBars,
	FaTimes,
	FaFacebook,
	FaTwitch,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";

import GreenBtn from "./GreenBtn";

import { Link } from "react-scroll";
//import Contact from "../pages/Contact";

const Navbar = () => {
	const [navigation, setNavigation] = useState(false);
	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "services",
		},
		{
			id: 3,
			link: "about",
		},
		{
			id: 4,
			link: "partner",
		},
		{
			id: 5,
			link: "contact",
		},
	];

	return (
		<div className="w-screen h-20 z-20 fixed bg-gray-900 text-white">
			<div className="px-3 flex items-center justify-between w-full h-full">
				<div className="flex items-center">
					<h1 className="text-4xl font-bold"></h1>
					<div className="items-start">
						<img src={logo} alt="" width="200px" height="9px" />
					</div>
				</div>
				<div className="hidden md:flex">
					{/*} <ul className="hidden md:flex gap-6">

              <li><NavLink to="/" className="capitalize p-4 hover:text-lightColor hover:border-b duration-200" activeClassName="text-red-100">Home</NavLink></li>
              <li><NavLink to="about" className="capitalize p-4 hover:text-lightColor hover:border-b duration-200" >Who we are</NavLink></li>
              <li><NavLink to="service" className="capitalize p-4 hover:text-lightColor hover:border-b duration-200" >Services</NavLink></li>
              <li><NavLink to="partners" className="capitalize p-4 hover:text-lightColor hover:border-b duration-200" >Partners</NavLink></li>
            </ul> 
            */}

					<ul className="hidden md:flex">
						{links.map(({ id, link }) => (
							<li
								onClick={() => (window.location.href = "/")}
								key={id}
								className="capitalize cursor-pointer  hover:text-lightColor duration-200">
								<Link
									className="w-full h-full p-4"
									to={link}
									smooth
									duration={500}>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="hidden md:flex mr-4">
					{/* <GreenBtn title="Contact us" onClick={()=> window.location.href = '/contact'} 
            className="px-9 py-3"></GreenBtn>*/}
				</div>

				{/* burger icon  */}
				<div className="md:hidden">
					<div
						onClick={() => setNavigation(true)}
						className="cursor-pointer">
						<FaBars size={30} />
					</div>
				</div>
			</div>

			{/* mobile menu  */}
			<div
				className={
					navigation
						? "md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur"
						: ""
				}>
				<div
					className={
						navigation
							? "fixed left-0 top-0 w-4/5 h-full bg-gray-900 text-white p-10 ease-in duration-500"
							: "fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in"
					}>
					<div>
						<div className="flex w-full items-center justify-between">
							<h2
								onClick={() => setNavigation(false)}
								className="text-3xl font-bold capitalize cursor-pointer">
								<div className="items-start">
									<img
										src={logo}
										alt=""
										width="200px"
										height="9px"
									/>
								</div>
							</h2>
							<div
								onClick={() => setNavigation(false)}
								className="p-3 cursor-pointer">
								<FaTimes size={30} />
							</div>
						</div>
					</div>

					<div className="mt-24 flex flex-col h-fit gap-12">
						<GreenBtn
							className="px-9 py-3 capitalize"
							title="sign in"
						/>

						<ul className="capitalize">
							{links.map(({ id, link }) => (
								<li
									key={id}
									className=" py-4 text-2xl tracking-wider cursor-pointer">
									<Link
										onClick={() => setNavigation(false)}
										to={link}
										smooth
										duration={500}
										offset={-75}>
										{link}
									</Link>
								</li>
							))}
						</ul>

						<div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
							<div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
								<a href="https://www.linkedin.com/in/kopolo-limited-b62070248">
									{" "}
									<FaLinkedinIn size={35} />
								</a>
							</div>
							<div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
								<FaTwitter size={35} />
							</div>
							<div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
								<FaFacebook size={35} />
							</div>
							<div className="flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3 cursor-pointer">
								<FaTwitch size={35} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
