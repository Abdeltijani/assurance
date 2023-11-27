import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";

import img1 from "../../assets/testimonials/img3.jpg";

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const image = `url(${img1})`;

  const handleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const faqs = [
    {
      question: "Do you guarantee this will help me grow?",
      answer: "Answer to question 1",
    },
    {
      question: "Do you guarantee this will help me grow?",
      answer: "Answer to question 2",
    },
    {
      question: "Do you guarantee this will help me grow?",
      answer: "Answer to question 2",
    },
    {
      question: "Do you guarantee this will help me grow?",
      answer: "Answer to question 2",
    },
    // Add more FAQ items here...
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-0 bg-transparent mt-8 mb-12">
      {/* Left Section (Card) */}
      <div className="flex flex-col w-full lg:w-1/3 items-center gap-4">
        <div className="lg:ml-13 w-[300px] h-[300px] bg-[#f1f458] rounded-[24px] overflow-hidden shadow-shadow-3xl flex flex-col items-center justify-center relative">
          {/* Your Avatar or Image */}
          {/* For example: */}
          <img
            className="shadow-shadow-lg relative rounded-full "
            style={{
              backgroundImage: image,
              backgroundSize: "cover",
              width: "80px",
              height: "80px",
            }}
          />
          <div className="flex flex-col items-center justify-center gap-4 mt-8">
            <p className="font-bold text-gray-900 text-3xl text-center">
              Get started with a free strategy!
            </p>
            <div className="inline-flex items-center justify-center gap-[10px] px-[30px] py-[15px] relative bg-gray-900 rounded-[999px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[15px] text-center tracking-[-0.33px] leading-[20px] whitespace-nowrap">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Accordion) */}
      <div className="w-full lg:w-2/3">
        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" p-4 rounded-lg flex justify-between items-center"
            >
              <p className="relative w-[458.41px] h-[32px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-900 text-[16px] tracking-[-0.47px] leading-[32px] whitespace-nowrap">
                {faq.question}
              </p>
              {openAccordion === index ? (
                <BsDash onClick={() => handleAccordion(index)} />
              ) : (
                <BsPlus
                  className="mr-8"
                  onClick={() => handleAccordion(index)}
                />
              )}
              {openAccordion === index && (
                <p className="text-black mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
