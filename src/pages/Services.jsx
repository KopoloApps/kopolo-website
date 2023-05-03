import React from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';

const Services = () => {
	const services = [
		{
			id: 1,
			title: 'Kopolo Transport',
			subtitle: `Transportation is one of the most crucial facets of an organization's economic activities.
      By moving goods from the places where they are sourced to the places where they are needed, transportation serves the crucial purpose of linking a business to its suppliers and consumers.
      This establishes a connection between the business and its clients and suppliers. `,
		},
		{
			id: 2,
			title: 'Swara E-Health',
			subtitle: `The goal of Swara's e-health strategy plan is to connect the provision of medical care with the possibilities of information technology. `,
		},
		{
			id: 3,
			title: 'Mzalendo Educare',
			subtitle: `Creating a safer environment for children, young people, and adults by providing affordable education loans.`,
		},
		{
			id: 4,
			title: 'Kopolo Ecommerce',
			subtitle: `Future of E-Commerce and Technology`,
		},
		{
			id: 5,
			title: 'Payment Integration Services',
			subtitle: `Everything has changed according to customer payment choices. 
      Acknowledging credit/debit cards as well as mobile payments, prepaid cards, 
      and  PayPal payments is now not only an option but a requirement for every 
      type of business, both in the business-to-consumer (B2C) ,consumer-to-business(C2B) 
      and business-to-business (B2B) sectors. This is because customers today expect to be able to pay in a variety of ways.Digitalizing payment methods will improve cash flow, decrease labor expenses, and reduce human error.`,
		},
	];

	return (
		<div>
			<div
				name="services"
				className="w-full h-fit py-6 md:h-fit bg-slate-300">
				<div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-0">
					<h2 className="text-5xl font-bold text-center">Services</h2>

					<p className="text-xl py-8 text-gray-800 text-center">
						Creating a better and holistic life for many people with
						innovative technologies, products and design
					</p>

					<div className="grid sm:grid-cols-2 gap-4 pt-4">
						{services.map(({ id, title, subtitle }) => (
							<div
								key={id}
								className="flex items-start p-4 bg-gray-900 text-white font-light rounded-md">
								<div>
									<FaChevronCircleRight
										size={20}
										className="mt-3 mr-4 text-lightColor"
									/>
								</div>
								<div>
									<h3 className="font-bold text-lg text-lightColor pt-2 pb-4 capitalize">
										{title}
									</h3>
									<p className="text-lg">{subtitle}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
