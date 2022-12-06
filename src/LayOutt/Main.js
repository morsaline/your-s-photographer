import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../sharedd/Footer";
import Header from "../sharedd/Header";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
