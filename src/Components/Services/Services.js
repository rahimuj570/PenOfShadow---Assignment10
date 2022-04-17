import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("FakeData/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div id="services" className="my-16">
      <div className="w-4/6 md:w-3/6 mx-auto">
        <h1 className="border-red-500 mx-auto rounded pb-1 border-b-4 font-exo text-4xl text-center">
          Services
        </h1>
        <p className="text-base mt-1 font-exo text-center">
          I'm a Ghost Writer, Who Write for Others But Always be Anonymous.
        </p>
      </div>
      <div className="mt-5 mx-20">
        <div className=" grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2  justify-center ">
          {data?.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
