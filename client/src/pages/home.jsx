import React from "react";
import Header from "../components/Header";
import Steps from "../components/steps";
import Description from "../components/Description";
import Testimonial from "../components/Testimonial";
import GenerateBtn from "../components/GenerateBtn";

const home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonial />
      <GenerateBtn />
    </div>
  );
};

export default home;
