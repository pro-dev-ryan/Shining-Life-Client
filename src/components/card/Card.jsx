import React from "react";
import { Link } from "react-router-dom";

function Card({ course }) {
  const { courseName, rating, price, enrolled, courseThumb } = course;
  return (
    <div className="cards mt-3 lg:mx-3 lg:w-[50%]">
      <Link to="/courses/Id">
        <div>
          <div
            className="card-template glass backdrop-blur-sm bg-sky-100 dark:bg-stone-600 
      hover:shadow lg:shadow-stone-600 transition-shadow duration-500 z-50"
          >
            <img src={courseThumb} className="w-[90%] lg:w-full" alt="/" />
            <div className="info">
              <h4 className="blogQue mt-2 text-lg font-textHead">
                {courseName}
              </h4>
              <div className="flex justify-between items-center px-8 ">
                <div>
                  <p className="lg:mb-4 mb-3 font-text text-lg">
                    Price :{price} $
                  </p>
                  <p className="lg:my-2 font-text text-lg">Mentor :</p>
                </div>
                <div>
                  <p className="lg:my-2 font-text text-lg">Rating: {rating}</p>
                  <p className="lg:my-2 font-text text-lg">
                    Enrolled:{enrolled}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
