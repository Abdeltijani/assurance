import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/testimonials/img.jpg";
import img2 from "../../assets/testimonials/img2.jpg";
import img3 from "../../assets/testimonials/img3.jpg";
import hand from "../../assets/vectors/handdrawn.svg";
import handDrawn from "../../assets/vectors/Hand-drawn arrow.svg";
import "./Testimonials.css";

const Testimonials = () => {
  const avatar1 = `url(${img1})`;
  const avatar2 = `url(${img2})`;
  const avatar3 = `url(${img3})`;
  const testimonials = [
    {
      name: "Abdel Karim TIJANI",
      company: "Maltem Africa.",
      image: `${img1}`,
      content: "WOW!!!.",
      stars: 4, // Number of stars
    },
    {
      name: "Lamyae Tijani",
      company: "Capgemini Inc.",
      image: `${img2}`,
      content: "The best platform ever!",
      stars: 5, // Number of stars
    },
    {
      name: "Rim Gh",
      company: "Sopra Inc.",
      image: `${img3}`,
      content: "WOW! I really love it",
      stars: 5, // Number of stars
    },
    {
      name: "John Doe",
      company: "ABC Inc.",
      image: `${img1}`,
      content: "Testimonial content goes here.",
      stars: 5, // Number of stars
    },
    // Add more testimonials in a similar format
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Show 1 slide at a time in tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide at a time in mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white-100 py-12">
      <div className="pt-20 text-center flex flex-col items-center">
        <h3 className="text-1xl font-bold mb-4">Hear from our customers</h3>
        <div className="w-[74px] h-[109px]">
          <img
            className="w-[50px] h-[111px]"
            alt="Hand drawn arrow"
            src={hand}
          />
        </div>

        {/* For larger screens */}
        <div className="hidden sm:flex sm:flex-col sm:items-center sm:gap-[20px] relative">
          <div className="flex flex-col items-center gap-[20px] relative">
            <div className="justify-center inline-flex items-center gap-[20px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] text-1xl sm:text-4xl font-bold text-gray-900 tracking-wide leading-tight">
                Join the Drive
              </div>

              <div
                className="rounded-[16px] relative w-[80px] h-[80px] bg-cover"
                style={{
                  backgroundImage: avatar3,
                  backgroundPosition: "50% 50%",
                }}
              />
              <div className="relative w-fit mt-[-1.00px] text-1xl sm:text-4xl font-bold text-gray-900 tracking-wide leading-tight">
                Over 5,000 Drivers
                <img
                  className=" w-[205px] h-[12px] top-0 left-0 ml-16"
                  alt="Hand drawn arrow"
                  src={handDrawn}
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[20px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] text-1xl sm:text-4xl font-bold text-gray-900 tracking-wide leading-tight">
                Empowered
              </div>
              <div
                className="rounded-[16px] relative w-[80px] h-[80px] bg-cover"
                style={{
                  backgroundImage: avatar1,
                  backgroundPosition: "50% 50%",
                }}
              />
              <div className="relative w-fit mt-[-1.00px] text-1xl sm:text-4xl font-bold text-gray-900 tracking-wide leading-tight">
                With Our Insurance.
              </div>
              <div
                className="rounded-[16px] relative w-[80px] h-[80px] bg-cover"
                style={{
                  backgroundImage: avatar2,
                  backgroundPosition: "50% 50%",
                }}
              />
            </div>
          </div>
        </div>

        {/* For mobile screens */}
        <div className="sm:hidden flex flex-col items-center gap-[10px] relative">
          <div className="inline-flex flex-col items-center justify-center gap-[10px] relative">
            <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide leading-tight">
                Join the
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[6px] overflow-hidden">
                <div
                  className="relative h-[80px] top-[-20px] bg-cover bg-[50%_50%]"
                  style={{
                    backgroundImage: avatar1,
                    backgroundPosition: "50% 50%",
                  }}
                />
              </div>
              <div className="relative w-fit mt-[-1.00px] text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide leading-tight">
                Drive
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide leading-tight">
                Over 5,000 Drivers
                <img
                  className=" w-[100px] h-[12px] top-0 left-0 ml-16"
                  alt="Hand drawn arrow"
                  src={handDrawn}
                />
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
            <div className="relative w-[40px] h-[40px] rounded-[6px] overflow-hidden">
              <div
                className="relative h-[80px] top-[-20px] bg-cover bg-[50%_50%]"
                style={{
                  backgroundImage: avatar2,
                  backgroundPosition: "50% 50%",
                }}
              />
            </div>
            <div className="relative w-fit mt-[-1.00px] text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide leading-tight">
              Empowered with
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide leading-tight">
              our Insurance.
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[6px] overflow-hidden">
              <div
                className="relative h-[80px] top-[-20px]  bg-cover bg-[50%_50%]"
                style={{
                  backgroundImage: avatar3,
                  backgroundPosition: "50% 50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  {[...Array(testimonial.stars)].map((star, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 fill-current text-yellow-500 mr-1"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2l2.12 6.47h6.75l-5.47 3.98 2.12 6.53L12 16.53l-5.39 3.45 2.12-6.53-5.47-3.98h6.75L12 2z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
