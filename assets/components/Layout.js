import React from "react";

import Body from "../pages/Body";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Layout;
