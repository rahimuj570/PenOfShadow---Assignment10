import React from "react";
import img from "./NotFound404.png";
import "animate.css";

const NotFound404 = () => {
  return (
    <div className="text-center my-10 w-4/6 sm:w-3/6 md:w-2/6 mx-auto">
      <div className="mb-5 w-4/6 md:w-3/6 mx-auto">
        <h1 className="border-red-500 mx-auto rounded pb-1 border-b-4 font-exo text-4xl text-center">
          404
        </h1>
        <p className="text-base mt-1 font-exo text-center">
          Your Page is Not Found.
        </p>
      </div>
      <img className="w-full" src={img} alt="" />
      <button className="animate__animated animate__bounce animate__infinite animate__slower  bg-red-500 text-white hover:bg-white hover:shadow-md hover:text-red-500 duration-300 px-4 rounded text-base font-semibold mt-6 py-2">
        Go Back
      </button>
    </div>
  );
};

export default NotFound404;
