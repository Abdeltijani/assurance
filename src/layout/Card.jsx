import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="w-3.3/4 pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-4">
            {/* Your Card Component */}
            <div className="bg-blue-500 rounded-lg shadow-lg p-6">
              {/* SVG Image */}
              <img
                src={card.svg}
                alt="SVG Image"
                className="w-24 h-24 mb-4 mx-auto"
              />
              {/* Card Content */}
              <h1 className="text-white text-3xl font-bold">{card.title}</h1>
              <p className="pt-2 text-white text-1xl font-normal">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
