import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { AuthContext } from "../contexts/ContextAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    console.log(loader);
    return <Loader />;
  }
  if (user && user.displayName) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoutes;
