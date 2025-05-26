import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="min-h-dvh flex flex-col">
        <Header />
        <main className="flex-grow mt-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
