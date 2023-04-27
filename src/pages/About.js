import React from "react";

const About = () => {
  const details = [
    {
      id: 1,
      title: "24/7",
      subtitle: "Infinite Technology",
    },
    {
      id: 2,
      title: "100%",
      subtitle: "services digitalization",
    },
    
  ];

  return (
    <div
      name="about"
      className="w-full h-fit md:h-screen bg-gray-900 text-white"
    >
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
           <span className="text-lightColor">KOPOLO</span> {" "}
            <span className="text-white">Mission</span>
          </h2>
          <p className="text-xl px-4 font-light text-gray-100 py-2">
          Our mission is to create a better and holistic life for many people with innovative technologies, products and design
          </p>
          <h2 className="text-4xl font-bold">
           <span className="text-white">KOPOLO</span> {" "}
            <span className="text-lightColor">Vision</span>
          </h2>
          <p className="text-xl py-4 text-gray-100 font-light text-center">
          We strive to create  infinite opportunities in every sector in our community
        </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-2 w-full">
          {details.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="flex items-center justify-center odd:skew-x-12 even:-skew-x-12 hover:skew-x-0 duration-300"
            >
              <div className="flex flex-col items-center justify-center w-60 h-60 py-6 rounded-full shadow-lg shadow-lightColor">
                <p className="text-5xl font-bold text-lightColor">{title}</p>
                <p className="text-gray-400 mt-2 capitalize">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </div>
  );
};

export default About;