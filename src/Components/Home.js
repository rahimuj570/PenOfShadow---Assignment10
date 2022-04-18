import React from "react";
import Contact from "./Contact";
import Carousel from "./Header/Carousel/Carousel";
import Services from "./Services/Services";
import { HashLink } from "react-router-hash-link";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "animate.css";
import { HideScroll } from "react-hide-on-scroll";

const Home = () => {
  return (
    <>
      <Carousel />
      <Services />
      <Contact />
      <HideScroll variant="down">
        <HashLink to="#top">
          <FaArrowAltCircleUp className="animate__animated animate__bounce animate__infinite animate__slower animate__delay-1s sticky bottom-12 float-right right-10 opacity-10 hover:opacity-100 duration-200 hover:text-red-500 text-5xl " />
        </HashLink>
      </HideScroll>
    </>
  );
};

export default Home;
