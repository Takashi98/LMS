import Footer from "@/components/educator/Footer";
import NavBar from "@/components/educator/NavBar";
import Sidebar from "@/components/educator/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Educator = () => {
  return (
    <div className="text-default min-h-screen bg-white">
      <NavBar />

      <div className="flex">
        <Sidebar />
        <div className="flex-1">{<Outlet />}</div>
      </div>
      <Footer/>
    </div>
  );
};

export default Educator;
