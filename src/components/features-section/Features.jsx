import React from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import star from "../../assets/vectors/star.svg";
import crown from "../../assets/vectors/crown.svg";
import crystal from "../../assets/vectors/crystal.svg";

const Features = () => {
  return (
    <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src={img1}
            alt=""
            className="max-w-full dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <img src={star} className="inline-block h-10 mr-23 mb-4" />
            <h3 className="text-3xl font-bold ">
              Tailored Freedom Behind the Wheel
            </h3>
            <div className="w-full lg:w-[624px] h-[128px]">
              <p className="my-6 dark:text-gray-400 break-words lg:my-6">
                Take control of your insurance like never before! Our
                kilometer-based model offers you the freedom to tailor your
                coverage on-the-go, ensuring your insurance matches your unique
                journey at every turn.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src={img2}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <img src={crystal} className="inline-block h-10 mr-23 mb-4" />
            <h3 className="text-3xl font-bold">
              We're not reinventing the wheel
            </h3>
            <div className="w-full lg:w-[624px] h-[128px]">
              <p className="my-6 dark:text-gray-400">
                Take control of your insurance like never before! Our
                kilometer-based model offers you the freedom to tailor your
                coverage on-the-go, ensuring your insurance matches your unique
                journey at every turn.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src={img3}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <img src={crown} className="inline-block h-10 mr-23 mb-4" />
            <h3 className="text-3xl font-bold">
              We're not reinventing the wheel
            </h3>
            <div className="w-full lg:w-[624px] h-[128px]">
              <p className="my-6 dark:text-gray-400">
                Take control of your insurance like never before! Our
                kilometer-based model offers you the freedom to tailor your
                coverage on-the-go, ensuring your insurance matches your unique
                journey at every turn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
