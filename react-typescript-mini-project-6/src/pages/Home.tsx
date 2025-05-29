import React from "react";
import SliderComp from "../components/Slider";
import HeadTitle from "../components/HeadTitle";
import CardBox from "../components/CardBox";

const Home = () => {
  return (
    <div className="content ">
      <div className="!w-[100vw] w-full mx-auto ">
        <div className="container mx-auto px-[1rem]">
          <HeadTitle>Home</HeadTitle>
        </div>
        <CardBox/>
        <SliderComp />
      </div>
    </div>
  );
};

export default Home;
