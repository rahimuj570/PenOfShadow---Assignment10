import React from "react";
import Contact from "./Contact";
import Carousel from "./Header/Carousel/Carousel";
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
