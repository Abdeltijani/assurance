import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 px-5 md:px-32 ">
        <div>
          <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer">
            ProjectX
          </Link>
        </div>

        <nav className="hidden md:flex gap-16 font-medium p-1 text-lg mr-18rem">
          <Link
            to="/whatwedo"
            spy={true}
            smooth={true}
            duration={500}
            className=" transition-all cursor-pointer"
          >
            What we Do
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            className=" transition-all cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            to="howitworks"
            spy={true}
            smooth={true}
            duration={500}
            className=" transition-all cursor-pointer"
          >
            How it Works
          </Link>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            duration={500}
            className=" transition-all cursor-pointer"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute  left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-6 w-full h-fit transition-transform duration-300 bg-white `}
      >
        <Link
          to="whatwedo"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
          onClick={closeMenu}
        >
          What we Do
        </Link>
        <Link
          to="testimonials"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Testimonials
        </Link>
        <Link
          to="howitworks"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
          onClick={closeMenu}
        >
          How it Works
        </Link>
        <Link
          to="faq"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
          onClick={closeMenu}
        >
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
