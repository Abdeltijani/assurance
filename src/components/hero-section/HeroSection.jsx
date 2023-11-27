import React from "react";
import simulation from "../../assets/marginalia-autopilot-vehicle.gif";

import { Link } from "react-scroll";

import "./HeroSection.css";
import Button from "../../layout/Button";

const HeroSection = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" w-full md:w-3/4">
        <img src={simulation} alt="img" />
      </div>
      <div className="md:w-2/4 text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-7 ">
            <span className=" font-semibold text-3xl leading-tight">
              I Drive
            </span>
            <input className="bg-transparent  border-transparent focus:border-none text-2xl font-semibold leading-tight" />
            <span className="font-semibold text-3xl leading-tight">Km/an,</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-3xl leading-tight">I Pay</span>
            <input className="bg-transparent  border-transparent focus:border-none text-2xl font-semibold leading-tight" />
            <span className="font-semibold text-3xl leading-tight">MAD</span>
          </div>
        </div>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
