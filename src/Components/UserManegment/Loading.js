import React from "react";
import loading from "./loading-GG.gif";
const Loading = () => {
  return (
    <div className="my-10 bg-slate-50 rounded-full shadow-lg mx-auto sm:w-3/6 md:w-2/6 w-4/6">
      <img className="w-full" src={loading} alt="" />
    </div>
  );
};

export default Loading;
