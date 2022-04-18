import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.int";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";
import SocialSignin from "./SocialSignin";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [customError, setCustomError] = useState({});
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">Sign Up</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const userInfo = {
                name: e.target.name.value,
                password: e.target.password.value,
                email: e.target.email.value,
                confirmPassword: e.target.confirmPassword.value,
              };
              if (
                !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  userInfo.email
                )
              ) {
                setCustomError({ email: "* Please Input A Valid Email" });
                return;
              } else {
                setCustomError({ email: null });
              }
              if (
                !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
                  userInfo.password
                )
              ) {
                setCustomError({
                  password:
                    "* Password Must be Contain With Numeric, Special Symbol, Uppercase, Lowercase and Minimum 6 Characters.",
                });
                return;
              } else {
                setCustomError({ password: null });
              }
              if (userInfo.password !== userInfo.confirmPassword) {
                setCustomError({
                  confirmPassword: "* Confirm Password isn't Same.",
                });
              } else {
                setCustomError({ confirmPassword: null });
              }
              await createUserWithEmailAndPassword(
                userInfo.email,
                userInfo.password
              );
              if (error && errorUpdate) {
                toast.error("Something Went Wrong!");
                console.log(error?.code);
                console.log(errorUpdate?.code);
                return;
              }
              await updateProfile({ displayName: userInfo.name });
              toast.success("Your Account is Created");
              navigate("/checkout");
            }}
          >
            <div className="mb-4">
              <label className="block mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                required
                id="name"
                type="text"
                name="name"
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                required
                id="email"
                type="email"
                name="email"
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
              <p className="text-center text-red-500">
                {customError?.email && customError?.email}
              </p>
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">
                Password
              </label>
              <input
                required
                id="password"
                type={showPass ? "text" : "password"}
                name="password"
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
              <p className="text-center text-red-500">
                {customError?.password && customError?.password}
              </p>
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                required
                id="confirmPassword"
                type={showPass ? "text" : "password"}
                name="confirmPassword"
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
              <p className="text-center text-red-500">
                {customError?.confirmPassword && customError?.confirmPassword}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  onClick={() => setShowPass(!showPass)}
                  id="remember_me"
                  type="checkbox"
                  className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  {" "}
                  Show Password{" "}
                </label>
              </div>
              <Link to="/resetPass" className="text-sm">
                {" "}
                Forgot your password?
              </Link>
            </div>
            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Sign Up
              </button>
            </div>
            <div className="mt-6 text-center">
              <Link to="/login" className="underline hover:text-red-500">
                Already Have An Account?
              </Link>
            </div>
          </form>
        </div>
        <SocialSignin />
      </div>
    </>
  );
};

export default Signup;
