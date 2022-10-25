import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <nav className="navBar sticky top-0 border-b shadow-md border-slate-300 bg-slate-200 flex items-center justify-between px-5 h-20">
        <Link to="/">
          {" "}
          {/* <img src="/Movie site.png" alt="site-logo" className="w-48" /> */}
          <h3 className="text-xl text-sky-700 font-bold uppercase font-textHead">
            Shining-Life
          </h3>
        </Link>
        <div className="navLinks">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/faq"> FAQ</NavLink>
          <NavLink to="/blog"> Blog</NavLink>
        </div>
        <div className="cta">
          <NavLink to="/login">Sign-Up</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
