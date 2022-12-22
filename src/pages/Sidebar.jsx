import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Sidebar = () => {
  const data = useLoaderData();
  return (
    <div className="dark:bg-stone-800 hidden lg:block">
      <h4 className="text-3xl tracking-wider w-fit border-b-2 border-stone-300 font-bold font-heading lg:ml-10">
        Classes We Offer
      </h4>
      <ul className="flex flex-col items-center courses lg:mt-6">
        {data.map((item) => (
          <Link to={`courses/${item.id}`} key={item?.id}>
            {item?.courseName}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
