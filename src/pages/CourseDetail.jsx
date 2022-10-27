import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/ContextAuth";

const CourseDetail = () => {
  const detailInfo = useLoaderData();
  console.log(detailInfo);
  const { courseName, mentor, rating, courseDetails, courseThumb } = detailInfo;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="my-5">
      <h2 className="text-center text-4xl font-heading font-bold">
        {courseName}
      </h2>
      <div className="my-5">
        <img className="w-full h-[400px]" src={courseThumb} alt="/" />
        <div>
          <div className="flex px-5 justify-between">
            <div className="font-semibold text-lg font-text">
              {" "}
              <span className="font-semibold text-lg font-text">
                Mentor Name:
              </span>{" "}
              {mentor.mentorName}
            </div>
            <div className="font-semibold text-lg font-text">
              Rating: {rating}
            </div>
          </div>
          <div className="mb-8">
            <h4 className="text-xl font-textHead font-semibold">
              Course Details Description
            </h4>
            <p className="mb-4">
              {" "}
              <span className="font-semibold text-lg font-textHead">
                Requirements:
              </span>{" "}
              {courseDetails.Requirements}
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-semibold text-lg font-textHead">
                What You'll learn:
              </span>{" "}
              {courseDetails.learningTopics}
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-semibold text-lg font-textHead">
                Who this course is for:
              </span>{" "}
              {courseDetails.forWhom}
            </p>
          </div>
        </div>
        <Link
          onClick={
            user?.emailVerified
              ? navigate("/checkout/:id")
              : toast.error("Verifymail for Premium Access")
          }
          className="px-8 py-3 my-8 bg-sky-500 text-white hover:bg-sky-700"
        >
          Get Premium Access
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
