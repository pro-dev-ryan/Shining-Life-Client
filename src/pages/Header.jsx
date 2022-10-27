import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/ContextAuth";
import { BsMoon, BsSun } from "react-icons/Bs";
import "../styles/Header.module.css";

const Header = () => {
  const [dark, setDark] = useState(true);
  const { userSignOut, user } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut().then(() => {});
  };
  return (
    <>
      <nav className="navBar sticky top-0 border-b shadow-md dark:shadow-none border-slate-300 dark:border-stone-600 bg-slate-200 dark:bg-stone-800 flex items-center justify-between px-5 h-20">
        <Link to="/">
          {" "}
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
        <button
          onClick={() => {
            setDark(!dark);
          }}
        >
          {dark ? <BsSun /> : <BsMoon />}
        </button>
        <div className="cta">
          {user && user.uid ? (
            <>
              <div className="flex gap-2 items-center">
                <button onClick={handleSignOut}>SignOut</button>
                <span className="dark:text-stone-300">{user.displayName}</span>
                <span>
                  <div>
                    <img
                      className="rounded-full h-9"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                </span>
              </div>
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
