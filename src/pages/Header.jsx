import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <nav className="navBar flex items-center justify-between px-5">
        <Link to="/">
          {" "}
          <img src="/Movie site.png" alt="site-logo" className="w-48" />
        </Link>
        <div className="navLinks">
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/"> Movies</NavLink>
          <NavLink to="/"> Games</NavLink>
          <NavLink to="/"> Animation</NavLink>
          <NavLink to="/"> </NavLink>
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
