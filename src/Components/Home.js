import React from "react";
import { Carousel } from "react-responsive-carousel";
import Contact from "./Contact";

import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Carousel />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
