import React from "react";
import { Link } from "react-router-dom";

function Card() {
  // const {} = card;
  return (
    <div className="cards mt-3 lg:mx-3 lg:w-[100%]">
      <div>
        <div
          className="card-template glass backdrop-blur-sm bg-sky-100 
      hover:shadow lg:shadow-stone-600 transition-shadow duration-500 lg:bg-opacity-50 z-50"
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            className="w-[90%] lg:w-full"
            alt=""
          />
          <div className="info">
            <h4 className="blogQue mt-2 text-lg font-textHead">
              {} Course Name
            </h4>
            <p className="lg:mb-4 mb-3 font-text">Duration: {}</p>
            <Link to={``} className="cardBtn">
              Take Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
