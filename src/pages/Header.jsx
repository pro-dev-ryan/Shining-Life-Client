import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { RiMenu5Fill } from "react-icons/ri/";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/ContextAuth";
import { TfiUser } from "react-icons/tfi";
import { BsMoon, BsSun } from "react-icons/Bs";

import "../styles/Header.module.css";

const Header = () => {
  const [dark, setDark] = useState(true);
  const [hide, setHide] = useState(false);
  const { userSignOut, user } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut().then(() => {});
  };
  return (
    <>
      <nav className="navBar sticky top-0 border-b shadow-md dark:shadow-none border-slate-300 dark:border-stone-600 bg-slate-200 dark:bg-stone-800 flex items-center justify-between px-5 h-20 z-50">
        <Link to="/">
          {" "}
          <h3 className="md:text-xl text-lg text-sky-700 dark:text-sky-400 font-bold uppercase font-textHead">
            Shining-Life
          </h3>
        </Link>
        <div
          onClick={() => setHide(!hide)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          {hide ? (
            <AiOutlineClose color="white" />
          ) : (
            <RiMenu5Fill color="white" />
          )}
        </div>
        <div
          className={`navLinks flex lg:flex-row flex-col md:pb-0 pb-12 absolute md:static md:z-auto -z-10  left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-white  ${
            hide ? "top-20 " : "top-[-490px]"
          }`}
        >
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/faq"> FAQ</NavLink>
          <NavLink to="/blog"> Blog</NavLink>
        </div>
        <button
          className="hidden"
          onClick={() => {
            setDark(!dark);
          }}
        >
          {dark ? <BsSun /> : <BsMoon />}
        </button>
        <div className="cta hidden lg:block">
          {user && user.uid ? (
            <>
              <div className="flex gap-2 items-center">
                <button onClick={handleSignOut}>SignOut</button>
                <span>
                  <div title={user?.displayName}>
                    {user.photoURL ? (
                      <img
                        className="rounded-full h-9"
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <TfiUser />
                    )}
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
