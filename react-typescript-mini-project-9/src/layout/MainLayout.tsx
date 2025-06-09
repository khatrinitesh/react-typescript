import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mainContent">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
