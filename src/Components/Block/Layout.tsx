import React from "react";
import Header from "./Header";
import Header1 from "./Header1";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header1 />
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Layout;
