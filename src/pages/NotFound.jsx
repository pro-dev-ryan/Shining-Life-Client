import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="flex error flex-col justify-center items-center dark:bg-stone-600 h-[100vh]">
      <h2 className="text-8xl mb-8 text-rose-500 font-heading">
        {error.status}
      </h2>
      <h5 className="text-3xl mb-4 text-white font-textHead">
        <span className="5xl text-rose-500">Oops!</span> Broken Link
      </h5>
      <img src="/error.png" alt="" />
      <p className="text-xl mb-5 text-white font-textHead">
        {error.statusText || error.message}
      </p>
      <Link
        to="/"
        className="text-white transition-colors duration-200 bg-sky-700 px-6 py-2 hover:bg-sky-600"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
