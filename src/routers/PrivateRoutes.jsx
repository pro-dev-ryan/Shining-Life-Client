import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  if (user && user.emailVerified) {
    return children;
  } else {
    <Navigate to="login" state={{ from: location }} replace />;
  }
};

export default PrivateRoutes;
