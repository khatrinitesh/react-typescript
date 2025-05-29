import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className="appLayout grid auto-rows-[auto_1fr_auto] min-h-[100dvh]">
        <Header />
        <div className="mainLayout">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
