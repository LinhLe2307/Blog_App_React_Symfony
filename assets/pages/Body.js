import React from "react";
import { Outlet } from "react-router-dom";
import BlogCreate from "./BlogCreate";

const Body = () => {
  return (
    <main>
      <Outlet />
      {/* <BlogCreate /> */}
    </main>
  );
};

export default Body;
