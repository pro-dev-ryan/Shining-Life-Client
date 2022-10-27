import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/ContextAuth";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [mail, setMail] = useState(false);
  const [pass, setPass] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const from = location.state.from.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (email === "") {
      setMail(true);
      return;
    }
    setMail(false);
    if (
      password === "" ||
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)
    ) {
      setPass(true);
      return;
    }
    setPass(false);
    console.log(email, password);
    signIn(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    useNavigate(from, { replace: true });
    form.reset();
  };
  return (
    <div className="login lg:h-[80vh]">
      <div className="flex justify-start pl-8 items-center pt-8">
        <div className="flex flex-col max-w-md p-3 border dark:border-stone-600 border-sky-100 sm:p-10 bg-sky-50 dark:bg-stone-800  text-stone-700 dark:text-stone-300 shadow shadow-stone-500 dark:bg-opacity-80">
          <div className="mb-8 text-center">
            <h1
              className="my-3 text-5xl dark:text-stone-300 font-bold font-heading
          "
            >
              Login
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-12"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 font-text text-md">
                  Email address
                </label>
                {mail && (
                  <p style={{ color: "red", fontFamily: "Nunito" }}>
                    Place a valid Mail
                  </p>
                )}

                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border-b-2 bg-sky-50 border-b-stone-200 dark:bg-stone-500 dark:text-stone-300 dark:border-b-zinc-500 hover:border-b-zinc-500 
                  dark:hover:border-b-zinc-300
                  transition-colors duration-150 focus:border-sky-900 text-stone-900 outline-none"
                  data-temp-mail-org="0"
                  required
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="font-text text-md">
                    Password
                  </label>
                  {pass && (
                    <p style={{ color: "red", fontFamily: "Nunito" }}>
                      password needs 1 upper 1 lower and minimum 8 chars long
                    </p>
                  )}
                </div>
                <div className="passWord">
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    placeholder="*******"
                    required
                    className="w-full px-3 py-2 border-b-2 bg-sky-50 border-b-stone-200 dark:bg-stone-500 dark:text-stone-300 dark:border-b-zinc-500 hover:border-b-zinc-500 
                  dark:hover:border-b-zinc-300
                  transition-colors duration-150 focus:border-sky-900 text-stone-900 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="eyeBtn"
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <input
                  type="submit"
                  value="Sign In"
                  className="w-full px-8 py-3 text-lg tracking-widest transition-colors duration-200 font-bold rounded-md bg-white dark:bg-stone-700 dark:text-white hover:bg-sky-700 hover:text-white text-black ring-1 ring-sky-400 hover:ring-0 font-button disabled:bg-stone-500 disabled:hover:text-black cursor-pointer"
                ></input>
              </div>
              <p>
                Do not have an account?{" "}
                <Link
                  className="dark:text-sky-300 text-sky-500 font-button font-bold "
                  to="/register"
                >
                  Sign Up
                </Link>{" "}
                here.{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
