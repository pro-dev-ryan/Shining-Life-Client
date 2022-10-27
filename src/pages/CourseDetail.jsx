import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/ContextAuth";

const CourseDetail = () => {
  const detailInfo = useLoaderData();
  console.log(detailInfo);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="my-5">
      <h2 className="text-center text-4xl font-heading font-bold">
        Course Detail Page
      </h2>
      <div>
        <img
          className="w-full h-[400px]"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          alt=""
        />
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
          onClick={user?.emailVerified ? navigate("/checkout/Id") : ""}
          className="px-8 py-3 my-8 bg-sky-500 text-white hover:bg-sky-700"
        >
          Get Premium Access
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
