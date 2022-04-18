import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, picture, price, name, about } = service;
  const navigate = useNavigate();
  return (
    <div className="my-3 rounded-lg shadow mx-2 hover:shadow-lg duration-300 p-2 ">
      <div className="w-6/6 h-60 mx-auto mt-2 mb-4">
        <img className=" w-full h-full  " src={picture} alt="" />
      </div>
      <div className="hover:scale-105 duration-300 shadow px-2 py-4 mx-1 my-2 flex justify-between flex-col">
        <div className="font-poppins">
          <p className="my-1">
            <span className="text-base font-semibold text-md ">Name:</span>{" "}
            {name}
          </p>
          <p className="my-1">
            <span className="text-base font-semibold text-md ">Price:</span> $
            {price + "/hr"}
          </p>
          <p className="my-2">
            <span className="text-base font-semibold text-md ">
              Short Description :
            </span>{" "}
            {about}
          </p>
        </div>
        <div className="mt-4">
          <button
            onClick={() => navigate(`/checkout/${_id}`)}
            className="bg-red-500 text-white rounded py-1 px-2 font-semibold font-exo text-lg hover:bg-white hover:text-red-500 hover:shadow duration-300"
          >
            Let's Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
