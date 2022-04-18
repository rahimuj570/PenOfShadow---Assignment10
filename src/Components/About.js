import React from "react";

const About = () => {
  return (
    <>
      <div className="mt-10 w-4/6 md:w-3/6 mx-auto">
        <h1 className="border-red-500 mx-auto rounded pb-1 border-b-4 font-exo text-4xl text-center">
          About Me
        </h1>
        <p className="text-base mt-1 font-exo text-center">
          My Goal of This Year.
        </p>
      </div>
      <div className="shadow-lg m-10 p-5">
        <div className=" w-3/6 sm:w-1/6 mx-auto  rounded-full overflow-hidden">
          <img className=" w-full" src="me.jpg" alt="" />
        </div>
        <div className="text-center mx-6 rounded p-2 mt-5 shadow font-exo text-base">
          <p className="m-1 font-bold text-xl">Md. Rahimujjaman Rahim</p>
          My Goal of 2022 is become an enough Good MERN developer. <br />
          Then I'll do a Job and bare my University fees and gift my Mom and Dad
          every month. <br />
          Then, if I'll get a chance to help poor peoples, I will help them if
          avail. <br />
          And at the end I'll always try to learn new thing as now.
        </div>
      </div>
    </>
  );
};

export default About;
