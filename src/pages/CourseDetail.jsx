import React from "react";
import { Link } from "react-router-dom";

const CourseDetail = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-heading font-bold">
        This is Course Detail Page
      </h2>
      <div>
        <img src="" alt="/" />
        <div>
          <h3 className="text-2xl font-textHead font-semibold">Course Name:</h3>
          <h4 className="text-xl font-textHead font-semibold">Short Desc:</h4>
          <div className="flex px-5 justify-between">
            <div>Mentor Name:</div>
            <div>Rating:</div>
          </div>
          <div>
            <h4 className="text-xl font-textHead font-semibold">
              Course Details:
            </h4>
            <p>...............</p>
          </div>
        </div>
        <Link
          className="px-8 py-3 my-8 bg-sky-500 text-white hover:bg-sky-700"
          to="/checkout"
        >
          Get Premium Access
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
