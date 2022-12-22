import React from "react";
import Speciality from "../components/sections/Speciality";
import { Link } from "react-router-dom";
import HomeStyle from "../styles/Home.module.css";

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
      <div className={`${HomeStyle.bg} w-full`}>
        <div className="content mx-2 lg:mx-6 lg:pt-40">
          <h3 className="lg:text-4xl text-2xl font-semibold font-textHead text-sky-400">
            Start A New Journey <br /> with us
          </h3>
          <p className="text-gray-300 lg:mr-40 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            illo id minus quo impedit ut. Doloribus, similique? Ipsum, libero
            quia quo ex tempore neque facilis.
          </p>
          <div>
            <Link
              to="/courses"
              className="px-4 py-2 rounded-md cursor-pointer text-lg font-button font-semibold bg-sky-600 hover:bg-sky-700 transition-colors duration-100"
            >
              Browse All Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
