"use client";
import React from "react";
import HamburgerMenu from "../../components/HamburgerMenu";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <HamburgerMenu />
      <b className="bg-black text-white rounded-2xl p-2">Logado</b>
    </div>
  );
};

export default Home;
