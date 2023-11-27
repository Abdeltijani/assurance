import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handDrawn from "../../assets/vectors/hand-drawn-vector.svg";
import Card from "../../layout/Card";

import num1 from "../../assets/vectors/num1.svg";
import num2 from "../../assets/vectors/num2.svg";
import num3 from "../../assets/vectors/num3.svg";

const cards = [
  {
    svg: num1,
    title: "Simulate Your Drive",
    description:
      "Start your journey by entering your estimated kilometers into our interactive simulation tool.",
  },
  {
    svg: num2,
    title: "Customize",
    description:
      "Adjust coverage options, limits, and features to match your unique driving needs. ",
  },
  {
    svg: num3,
    title: "Join the Revolution",
    description:
      "Join the kilometer-based insurance revolution. It's crafted for the modern driver.",
  },

  // Add more cards as needed
];

const HowItWorks = () => {
  return (
    <div>
      <div className="pt-12 flex flex-col items-center gap-8 px-4 sm:px-0 relative">
        <img className="w-36 h-9" alt="Hand drawn vector" src={handDrawn} />
        <p className="text-3xl font-bold text-gray-900  sm:order-none">
          Drive Smarter in 3 Steps
        </p>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:gap-12">
          <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap sm:gap-8 order-2 sm:order-none">
            <div className="bg-pink-200 px-4 py-2 rounded-lg">
              <p className="text-2xl font-bold text-gray-900">Simulate</p>
            </div>
            <div className="bg-[#ffeeda] px-4 py-2 rounded-lg">
              <p className="text-2xl font-bold text-gray-900">Customize</p>
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-lg">
              <p className="text-2xl font-bold text-gray-900">Join!</p>
            </div>
          </div>
        </div>
      </div>
      <Card cards={cards} />
    </div>
  );
};

export default HowItWorks;
