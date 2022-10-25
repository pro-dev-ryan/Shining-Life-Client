import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

// import { AuthContext } from "../context/ContextAuth";
const Register = () => {
  // const { signUp, updateName, verifyMail, setLoader } = useContext(AuthContext);
  // const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-3 border border-sky-100 sm:p-10 bg-sky-50 text-stone-700">
        <div className="mb-8 text-center">
          <h1
            className="my-3 text-5xl font-bold font-heading
          "
          >
            Register
          </h1>
          <p className="text-base font-text text-stone-600">
            Create a new account
          </p>
        </div>
        <form onSubmit="" noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 font-text text-md">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border-b-2 bg-sky-50 border-b-stone-200 hover:border-b-zinc-500 transition-colors duration-150 focus:border-sky-900 outline-none text-stone-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="photo" className="block mb-2 font-text text-md">
                Profile Picture URL
              </label>
              <input
                type="url"
                name="photo"
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
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border-b-2 bg-sky-50 border-b-stone-200 hover:border-b-zinc-500 transition-colors duration-150 focus:border-sky-900 text-stone-900 outline-none"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="font-text text-md">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 border-b-2 bg-sky-50 border-b-stone-200 hover:border-b-zinc-500 transition-colors duration-150 md:focus:border-sky-900 text-stone-900 outline-none"
              />
            </div>
            <div>
              <input type="checkbox" id="policies" />
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
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 text-lg tracking-widest transition-colors duration-200 font-bold rounded-md bg-white hover:bg-sky-700 hover:text-white text-black ring-1 ring-sky-400 hover:ring-0 font-button"
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
          <button aria-label="Log in with Google" className="p-3">
            <FcGoogle size={30} />
          </button>
          <button
            aria-label="Log in with Facebook"
            className="p-3 text-sky-600"
          >
            <FaFacebook size={30} />
          </button>
        </div>
        <p className="px-6 text-sm text-center font-text text-gray-400">
          Have an account already?{" "}
          <Link
            to="/login"
            className="hover:underline font-button font-bold text-base text-gray-600"
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
