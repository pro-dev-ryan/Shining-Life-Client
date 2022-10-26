import React from "react";
import Card from "../components/card/Card";

const Classes = () => {
  return (
    <div className="lg:h-[80vh]">
      <h3 className="text-3xl text-center">This is Course section</h3>
      <div className="flex ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Classes;
