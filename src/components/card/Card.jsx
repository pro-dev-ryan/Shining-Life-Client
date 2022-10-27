import React from "react";
import { Link, useParams } from "react-router-dom";

function Card() {
  // const { courseId } = useParams();
  return (
    <div className="cards mt-3 lg:mx-3 lg:w-[100%]">
      <Link to="/:Id">
        <div>
          <div
            className="card-template glass backdrop-blur-sm bg-sky-100 dark:bg-stone-600 
      hover:shadow lg:shadow-stone-600 transition-shadow duration-500 z-50"
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
              <div className="flex justify-between items-center px-8 ">
                <div>
                  <p className="lg:mb-4 mb-3 font-text text-lg">
                    Duration : {}
                  </p>
                  <p className="lg:my-2 font-text text-lg">Mentor :</p>
                </div>
                <div>
                  <p className="lg:my-2 font-text text-lg">Rating:</p>
                  <p className="lg:my-2 font-text text-lg">Enrolled:</p>
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
