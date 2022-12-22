import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card({ course }) {
  const { courseName, rating, price, enrolled, courseThumb, mentor } = course;
  return (
    <>
      <div className="grid grid-cols-1 mt-3 lg:mx-3 lg:my-3 lg:w-[30%]">
        <Link to={`${course.id}`}>
          <div className="border">
            <div
              className="card-template glass backdrop-blur-sm bg-sky-100 dark:bg-stone-600 
      hover:shadow lg:shadow-stone-600  transition-shadow duration-500 z-50"
            >
              <img src={courseThumb} className="w-full" alt="/" />
              <div className="info">
                <h4 className="blogQue mt-2 font-textHead">{courseName}</h4>
                <div className="flex justify-between items-center px-1 ">
                  <div>
                    <p className="lg:mb-1 mb-3 font-text">Price :{price} $</p>
                    <p className="lg:mb-1 font-text ">{mentor?.mentorName}</p>
                  </div>
                  <div>
                    <p className="lg:mb-1 font-text ">Rating: {rating}</p>
                    <p className="lg:my-2 font-text ">Enrolled:{enrolled}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
