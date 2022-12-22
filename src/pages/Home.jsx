import React from "react";
import Speciality from "../components/sections/Speciality";

const Home = () => {
  return (
    <div className="w-full">
      <div className="hero">
        <div className="md:pt-40 md:mx-[2%]">
          <h3 className="lg:text-5xl md:text-3xl text-2xl text-white font-bold lg:py-60 md:py-52 py-40  mb-10 text-center lg:text-left">
            Welcome to Shine-Life.
          </h3>
        </div>
      </div>
      <h4 className="text-4xl font-semibold my-2 text-gray-300 font-heading text-center">
        Why Our Courses
      </h4>
      <div>
        <Speciality />
      </div>
    </div>
  );
};

export default Home;
