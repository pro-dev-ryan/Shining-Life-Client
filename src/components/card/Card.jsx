import React from "react";
import { Link } from "react-router-dom";

function Card() {
  // const {} = card;
  return (
    <div className="cards mb-3">
      <div
        className="card-template glass backdrop-blur-sm bg-gradient-to-tl from-gray-800 to-transparent 
      hover:shadow lg:shadow-stone-600 transition-shadow duration-500 lg:bg-opacity-50 z-50"
      >
        <img src="" className="w-[90%] lg:w-full" alt="" />
        <div className="info">
          <h4 className="blogQue mt-2  text-lg">{}</h4>
          <p className="lg:mb-4 mb-3  text-center text-orange-300 font-button">
            Total Quizes: {}
          </p>
          <Link to={``} className="cardBtn">
            Take Test
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
