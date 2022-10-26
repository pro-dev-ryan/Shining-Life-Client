import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/ContextAuth";
import "../styles/Header.module.css";

const Header = () => {
  const { userSignOut, user } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut().then(() => {});
  };
  return (
    <>
      <nav className="navBar sticky top-0 border-b shadow-md dark:shadow-none border-slate-300 dark:border-stone-600 bg-slate-200 dark:bg-stone-800 flex items-center justify-between px-5 h-20">
        <Link to="/">
          {" "}
          {/* <img src="/Movie site.png" alt="site-logo" className="w-48" /> */}
          <h3 className="text-xl text-sky-700 dark:text-sky-400 font-bold uppercase font-textHead">
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
          {user.uid ? (
            <>
              <button onClick={handleSignOut}>SignOut</button>
              <p>{user.displayName}</p>
            </>
          ) : (
            <>
              <NavLink to="/login">Sign-In</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
