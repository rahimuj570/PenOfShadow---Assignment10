import React, { useEffect, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.int";
import Loading from "./Loading";

const ResetPass = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const [click, setClick] = useState(false);
  useEffect(() => {
    if (error) {
      toast.error("User Not Found. Please Input Valid Email.");
      console.log(error.message);
    }
    if (sending) {
      toast.success("Loading...");
    }
    if (!error) {
      toast.success("Please Check Your Email");
    }
  }, [click]);

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
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">
            Reset Password
          </h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await sendPasswordResetEmail(e.target.email.value);
              setClick(!click);
            }}
          >
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
                  Confirm The Email Address.
                </label>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Reset Password
              </button>
            </div>
            <div className="mt-6 text-center">
              <Link to="/login" className="underline hover:text-red-500">
                Remember The Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
