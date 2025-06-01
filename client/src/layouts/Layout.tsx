import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import DropdownButton from "../components/utils/DropdownButton";
import BackToTop from "../components/utils/BackToTop";

const Layout = () => {
  return (
    <div className="layout">
      <DropdownButton/>
      <main  className="font-mono">
        <Outlet />
      </main>
      <BackToTop/>
      <Footer />
    </div>
  );
};

export default Layout;
