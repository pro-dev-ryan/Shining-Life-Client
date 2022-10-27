import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaFacebook, FaGithubAlt } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/ContextAuth";
import toast from "react-hot-toast";

const Register = () => {
  const [fname, setFname] = useState(false);
  const [mail, setMail] = useState(false);
  const [pass, setPass] = useState(false);
  const [show, setShow] = useState(false);
  const [enableSubmit, setEnableSubmit] = useState(true);
  const {
    handleEmailPass,
    signWithGoogle,
    verifyMail,
    updateUserProfile,
    setLoader,
    signWithGithub,
  } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!name) {
      setFname(true);
      return;
    }
    setFname(false);
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
    handleEmailPass(email, password).then((result) => {
      updateUserProfile(name, photo);
      verifyMail();
      toast.success("An Email Verification Sent, Please Verify!!!", {
        className: "text-rose-400 font-bold",
      });
    });
    console.log(name, photo);
    form.reset();
    setLoader(false);
  };
  const signIn = () => {
    signWithGoogle()
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  const githubSign = () => {
    signWithGithub()
      .then((res = {}))
      .catch((error) => {});
  };
  return (
    <div className="flex register justify-end items-center pr-8 lg:py-8 dark:bg-stone-700">
      <div className="flex flex-col max-w-md p-3 border dark:border-stone-600 border-sky-100 sm:p-10 bg-sky-50 dark:bg-stone-800  text-stone-700 dark:text-stone-300 shadow shadow-stone-500">
        <div className="mb-8 text-center">
          <h1
            className="my-3 text-5xl font-bold font-heading
          "
          >
            Register
          </h1>
          <p className="text-base font-text dark:text-stone-300 text-stone-600">
            Create a new account
          </p>
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
                Full Name
              </label>
              {fname && (
                <p style={{ color: "red", fontFamily: "Nunito" }}>
                  Namefield can not be empty
                </p>
              )}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border-b-2 bg-sky-50 border-b-stone-200 hover:border-b-zinc-500 transition-colors duration-150 focus:border-sky-900 outline-none text-stone-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div>
              <label htmlFor="photo" className="block mb-2 font-text text-md">
                Profile Picture URL
              </label>
              <input
                type="url"
                id="photo"
                placeholder="Paste Your Url Here"
                className="w-full px-3 py-2 border-b-2 bg-sky-50 border-b-stone-200 hover:border-b-zinc-500 transition-colors duration-150 focus:border-sky-900 outline-none text-stone-900"
                data-temp-mail-org="0"
              />
            </div>
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
                className="w-full px-3 py-2 border-b-2 bg-sky-50 border-b-stone-200 hover:border-b-zinc-500 transition-colors duration-150 focus:border-sky-900 text-stone-900 outline-none"
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
                  className="w-full px-3 py-2 border-b-2 bg-sky-50 border-b-stone-200 hover:border-b-zinc-500 transition-colors duration-150 md:focus:border-sky-900 text-stone-900 outline-none"
                />
                <button onClick={() => setShow(!show)} className="eyeBtn">
                  {show ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <input
                onChange={() => setEnableSubmit(!enableSubmit)}
                type="checkbox"
                id="policies"
              />
              <label htmlFor="policies" className="text-base pl-3 font-text">
                Agree with our{" "}
                <Link
                  to="/termsAndPolicies"
                  className="underline hover:text-sky-500"
                >
                  Terms and Policies
                </Link>
              </label>
            </div>
          </div>
          <p></p>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                disabled={enableSubmit}
                className="w-full px-8 py-3 text-lg tracking-widest transition-colors duration-200 font-bold rounded-md bg-white dark:bg-stone-700 dark:text-white hover:bg-sky-700 hover:text-white text-black ring-1 ring-sky-400 hover:ring-0 font-button disabled:bg-stone-500 disabled:hover:text-black"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="text-center pt-4 space-x-1">
          <p className="px-3 text-base font-text text-stone-400">
            Signup with social accounts
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={signIn}
            aria-label="Log in with Google"
            className="p-3"
          >
            <FcGoogle size={30} />
          </button>
          <button
            aria-label="Log in with Facebook"
            className="p-3 text-sky-600"
          >
            <FaFacebook size={30} />
          </button>
          <button
            onClick={githubSign}
            aria-label="Log in with GitHub"
            className="p-3 text-black"
          >
            <FaGithubAlt size={30} />
          </button>
        </div>
        <p className="px-6 text-sm text-center font-text text-gray-400">
          Have an account already?{" "}
          <Link
            to="/login"
            className="hover:underline font-button font-bold text-base text-stone-600 dark:text-sky-300"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
