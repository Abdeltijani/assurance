import React from "react";
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import logo from "../../assets/vectors/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Footer Image */}
        <div className="lg:w-1/3 mb-6 lg:mb-0 text-center lg:text-left">
          <a href="/" className="inline-block">
            <img
              src={logo}
              alt="Footer Image"
              className="w-full lg:w-auto mx-auto lg:ml-10 lg:mx-0"
              style={{ maxWidth: "120px" }} // Adjust the maximum width here
            />
          </a>
        </div>

        {/* Footer Links */}
        <div className="w-full lg:w-2/3 lg:order-1 flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/2 lg:text-left text-center mb-4 lg:mb-0">
            <ul className="flex flex-wrap justify-center lg:justify-start">
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">
                  What we Do{" "}
                </a>
              </li>
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">
                  Testimonials
                </a>
              </li>
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">
                  How it Works
                </a>
              </li>
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="w-full lg:w-1/2 lg:text-right text-center ">
            <ul className="flex justify-center lg:justify-end">
              <li className="mx-2">
                <a href="#" className="text-xl hover:text-gray-400">
                  <FaYoutube />
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-xl hover:text-gray-400">
                  <FaTwitter />
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-xl hover:text-gray-400">
                  <FaFacebook />
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="text-xl hover:text-gray-400">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
