import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/card/Card";

const Classes = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="lg:h-[80vh]">
      <h3 className="text-3xl text-center">This is Course section</h3>
      <div className="flex  ">
        {courses.map((course) => (
          <Card key={course?.id} course={course}></Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;
