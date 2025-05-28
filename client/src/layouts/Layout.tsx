import React from "react";
import { Outlet } from "react-router-dom";
import LinkButton from "../components/button/LinkButton";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <div>
      <LinkButton to="/" name="Home Page" className={"home-page text-xs z-40"} />
      <main  className="font-mono">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
