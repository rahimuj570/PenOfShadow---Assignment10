import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "animate.css";
import { HideScroll } from "react-hide-on-scroll";

const Footer = () => {
  return (
    <>
      <HideScroll variant="down">
        <HashLink to="#top">
          <FaArrowAltCircleUp className="animate__animated animate__bounce animate__infinite animate__slower animate__delay-1s sticky bottom-12 float-right right-10 opacity-10 hover:opacity-100 duration-200 hover:text-red-500 text-5xl " />
        </HashLink>
      </HideScroll>

      <div className="mt-20 text-center">
        <p className="py-1 px-1 font-bold font-exo text-white bg-red-500">
          Pen of Shadow &copy; {new Date().getFullYear()} by Rahimuj570
        </p>
      </div>
    </>
  );
};

export default Footer;
