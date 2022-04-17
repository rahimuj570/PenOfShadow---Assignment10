import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 text-center">
      <p className="py-1 px-1 font-bold font-exo text-white bg-red-500">
        Pen of Shadow &copy; {new Date().getFullYear()} by Rahimuj570
      </p>
    </div>
  );
};

export default Footer;
