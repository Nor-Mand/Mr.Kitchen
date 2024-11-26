import React from "react";
import Footer from "./Footer";
import Modalmeal from "./Modalmeal";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      {/* <Modalmeal /> */}
    </>
  );
};

export default Layout;
