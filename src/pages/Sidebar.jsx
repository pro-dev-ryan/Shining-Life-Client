import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <h4 className="text-3xl tracking-wider w-fit border-b-2 border-stone-300 font-bold font-heading lg:ml-10">
        Classes We Offer
      </h4>
      <ul className="flex flex-col items-center courses  lg:mt-6">
        <Link>course-1</Link>
        <Link>course-2</Link>
        <Link>course-3</Link>
        <Link>course-4</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
