import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>welcome to checkout Page</h2>
    </div>
  );
};

export default Checkout;
