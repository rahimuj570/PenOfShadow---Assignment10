import React from "react";
import { FaUserLock } from "react-icons/fa";

const EmailNotVerify = () => {
  return (
    <div className="py-2 px-1 text-center shadow mx-auto w-4/6 h-screen flex items-center justify-center">
      <div className="">
        <FaUserLock className="mx-auto text-9xl text-red-400" />
        <h1 className="text-4xl font-extrabold font-exo ">
          Verification Email is Sent.
        </h1>
        <p className="text-xl font-bold"> Please Check Your Email.</p>
        <p className="mt-2 text-green-400 font-bold text-xl">
          After Verify, Reload The Page.
        </p>
      </div>
    </div>
  );
};

export default EmailNotVerify;
