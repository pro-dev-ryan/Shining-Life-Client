import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";
import Footer from "../pages/Footer";
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="layout p-1 my-5 ">
        <div className="hidden lg:block">
          {" "}
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
