import { FiPhoneCall, FiMail, FiMapPin,FiUser } from "react-icons/fi";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div name="contact" className="w-full">
        <div className="flex items-center justify-start bg-gradient-to-b from-green-200 to-green-100 h-96">
          <div className="ml-[110px] px-1">
            <h1 className=" duration-300 transition  animate-bounce">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="flex  mx-auto md:mx-auto mb-12 max-w-[1240px] md:px-4">
          <div className="w-1/3 pt-10">
            <ul className="flex flex-col  gap-y-7">
              <li className="flex">
                <FiUser
                  className=" text-2xl duration-500 transition  "
                  size={30}
                />
                <p className=" text-lightColor">Steve Biko</p>
              </li>
              <li className="flex">
                <FiPhoneCall
                  className="mr-5 text-2xl duration-500 transition animate-ping "
                  size={30}
                />
                <p className=" text-lightColor">+254721249284</p>
              </li>
              <li className="flex">
                <FiMail
                  className="mr-4 text-2xl duration-500 "
                  size={30}
                />
                <p className="text-lightColor">info@kopololimited.com</p>
              </li>
              <li className="flex ">
                <FiMapPin
                  className="text-2xl duration-500 transition animate-ping"
                  size={30}
                />
                <p className="text-lightColor">Kisumu, Kenya</p>
              </li>
            </ul>
          </div>
          <div className="w-2/3 p-8 -mt-24 bg-white rounded shadow sm:p-12">
            <p className="text-3xl font-bold leading-7">Send us a message</p>
            <form action="" method="post">
              <div className="items-center mt-12 md:flex">
                <div className="flex flex-col w-full md:w-1/2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="p-3 text-gray-900 bg-gray-100 border border-gray-200 rounded mt-2leading-none focus:outline-none focus:border-blue-700"
                  />
                </div>
                <div className="flex flex-col w-full mt-4 md:w-1/2 md:ml-6 md:mt-0">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone
                  </label>
                  <input
                    type="email"
                    className="p-3 text-gray-900 bg-gray-100 border border-gray-200 rounded mt-2leading-none focus:outline-none focus:border-blue-700"
                  />
                </div>
              </div>
              <div className="items-center mt-8 md:flex">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="p-3 text-gray-900 bg-gray-100 border border-gray-200 rounded mt-2leading-none focus:outline-none focus:border-blue-700"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col w-full mt-8">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="h-40 p-3 leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded mt-2text-base focus:oultine-none focus:border-blue-700"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-start my-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <div className="w-full">
                <button
                  className=" leading-none
             duration-300 transition animate-bounce"
                >
                  Send message
                </button>
              </div>
            </form>
            <p className="mt-5">
            
            </p>
          </div>
        </div>
        <div className="mb-5  md:mt-32 max-w-[1240px] px-4 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429247.051564684!2d33.12663568824263!3d-0.36746020261097373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa437ad4ac81d%3A0x2012a439d6248dd2!2sKisumu!5e0!3m2!1sen!2ske!4v1657556785600!5m2!1sen!2ske"
            className="w-full h-full"
            style={{ border: 0, height: 300 }}
            //allowfullscreen=""
            loading="lazy"
            //referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
