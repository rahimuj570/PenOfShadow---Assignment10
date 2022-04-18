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
    if (!error) {
      toast.success("Please Check Your Email");
    }
  }, [click]);
  // if (sending) {
  //   toast.info("Loading...");
  // }
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
              <div className="relative">
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                />
                {sending && (
                  <svg
                    role="status"
                    className="absolute inset-y-1 right-0 mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                )}
              </div>
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
