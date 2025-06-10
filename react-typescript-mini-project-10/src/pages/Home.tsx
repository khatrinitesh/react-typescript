import React from "react";
import BentoItemComp from "../components/BentoItem";

const Home: React.FC = () => {
  return (
    <div className="content">
      <div className="container mx-auto px-[1rem]">
        <h2>Home</h2>
        <div
          style={{
            position: "relative",
            height: "100vh",
            backgroundColor: "#111",
          }}
        >
          <BentoItemComp />
        </div>
      </div>
    </div>
  );
};

export default Home;
