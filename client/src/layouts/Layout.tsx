import React from "react";
import { Outlet } from "react-router-dom";
import LinkButton from "../components/button/LinkButton";

const Layout = () => {
  return (
    <div>
      <LinkButton to="/" name="Home Page" className={"home-page text-xs z-40 "} />
      <main >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
