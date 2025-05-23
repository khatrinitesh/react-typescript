import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Toaster } from "sonner";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="appLayout">
        <Header />
        <div className="mainContent">
          <Outlet />
        </div>
        <Footer />
      </div>
      <Toaster richColors position="top-center" />
    </>
  );
};

export default MainLayout;
