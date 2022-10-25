import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>{error.status}</h2>
      <h5>Not Found</h5>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default NotFound;
