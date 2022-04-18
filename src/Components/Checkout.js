import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.int";
import EmailNotVerify from "./UserManegment/EmailNotVerify";
import Loading from "./UserManegment/Loading";

const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const navigate = useNavigate();

  if (error) {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
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
        {toast.error("Something Went Wrong. Please Try Again.")}
      </>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    console.log(id);
    return (
      <>
        {!user.emailVerified ? (
          <EmailNotVerify />
        ) : (
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
                  Welcome.
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    toast.success("I Will Contact You Soon.");
                    setTimeout(() => navigate("/"), 5000);
                  }}
                >
                  <div className="mb-4">
                    <label className="block mb-1" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      readOnly
                      value={user.displayName}
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
                      readOnly
                      value={user.email}
                      required
                      id="email"
                      type="email"
                      name="email"
                      className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1" htmlFor="name">
                      ID of Your Selected Service
                    </label>
                    <input
                      readOnly
                      value={id}
                      required
                      id="id"
                      type="text"
                      name="id"
                      className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1" htmlFor="Phone">
                      Phone
                    </label>
                    <input
                      required
                      id="Phone"
                      type="tel"
                      name="Phone"
                      className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1" htmlFor="address">
                      Current Address
                    </label>
                    <input
                      required
                      id="address"
                      type="text"
                      name="address"
                      className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                    />
                  </div>
                  <div className="mt-6">
                    <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                      Submit
                    </button>
                  </div>
                  <div className="mt-6 text-center"></div>
                </form>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
};

export default Checkout;
