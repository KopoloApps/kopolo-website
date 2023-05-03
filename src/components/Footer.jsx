import logo from "../assets/logo/kopolo2.png";
import Icons from "./Icons";
const Footer = () => {
	return (
		<>
			<div className="w-full mx-auto px-4 my-12">
				<div className="flex flex-col md:flex-row gap-y-7">
					<div className="flex flex-col w-full md:w-3/6">
						<img
							src={logo}
							alt="Logo"
							width="100px"
							height="10px"
						/>
						<p className="max-w-md pt-8"></p>
					</div>
					<div className="flex w-full md:w-2/6">
						<nav>
							<p className="text-xl font-bold">Pillars:</p>
							<ul className="flex flex-col pt-4 md:pt-8 gap-y-2">
								<li className="flex flex-col ">E-Transport</li>
								<li className="flex flex-col ">Educare</li>
								<li className="flex flex-col ">E-Health</li>
								<li className="flex flex-col ">E-Ecommerce</li>
								<li>Payment Integration Services</li>
							</ul>
						</nav>
					</div>
					<div className="flex max-w-max md:w-1/6">
						<nav>
							<p className="text-xl font-bold">Core values:</p>
							<ul className="flex flex-col pt-4 md:pt-8 gap-y-2">
								<li className="flex flex-col ">Quality.</li>
								<li className="flex flex-col ">Integrity.</li>
								<li className="flex flex-col ">Fairness.</li>
								<li className="flex flex-col ">
									Promise to Customers.
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<Icons></Icons>
		</>
	);
};

export default Footer;
