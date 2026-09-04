import React, { useState } from "react";

import assets from "../assets/assets";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign up");

  const [signUpDetails, setSignUpDetails] = useState({
    fullname: "",
    password: "",
    email: "",
    bio: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />

      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (currState === "Sign up" && !isSubmitted) {
            setIsSubmitted(true);

            return;
          }
        }}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}

          {isSubmitted && (
            <img
              src={assets.arrow_icon}
              alt=""
              className="w-5 cursor-pointer"
              onClick={() => {
                setIsSubmitted(false);
              }}
            />
          )}
        </h2>

        {currState === "Sign up" && !isSubmitted && (
          <input
            type="text"
            onChange={(e) => {
              setSignUpDetails({ ...signUpDetails, fullname: e.target.value });
            }}
            className="p-2 border border-gray-500 rounded-md focus:outline-none"
            placeholder="Full Name"
            required
          />
        )}

        {!isSubmitted && (
          <>
            <input
              type="email"
              onChange={(e) => {
                setSignUpDetails({ ...signUpDetails, email: e.target.value });
              }}
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email Address"
              required
            />

            <input
              type="password"
              onChange={(e) => {
                setSignUpDetails({
                  ...signUpDetails,
                  password: e.target.value,
                });
              }}
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
              required
            />
          </>
        )}

        {currState === "Sign up" && isSubmitted && (
          <textarea
            rows={4}
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Provide a shortbio"
            onChange={(e) => {
              setSignUpDetails({ ...signUpDetails, bio: e.target.value });
            }}
          ></textarea>
        )}

        <button
          className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer "
          type="submit"
        >
          {currState === "Sign up" ? "Create Account" : "Login Now"}
        </button>

        <div className="flex gap-2 items-center text-sm text-gray-500">
          <input type="checkbox" />

          <p>Agree to terms of use & privacy policy.</p>
        </div>

        <div className="flex flex-col gap-2">
          {currState === "Sign up" ? (
            <p className="text-sm text-gray-600">
              {" "}
              Already have an account ?{" "}
              <span
                className="font-medium text-violet-500 cursor-pointer"
                onClick={() => {
                  setCurrState("Login");

                  setIsSubmitted(false);
                }}
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              {" "}
              Create Account{" "}
              <span
                onClick={() => {
                  setCurrState("Sign up");
                }}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
