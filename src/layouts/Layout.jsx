import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";
import Footer from "../pages/Footer";
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="layout px-1 my-1 ">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
