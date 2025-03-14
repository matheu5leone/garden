"use client";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GardenGrid from "@/components/GardenGrid";
import HamburgerMenu from "../../components/HamburgerMenu";
import SideMenu from "@/components/SideMenu";
import BottomMenu from "@/components/BottomMenu";

const Home = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('/garden.png')] bg-cover bg-center">
        <HamburgerMenu />
        <SideMenu />
        <GardenGrid />
        <BottomMenu />
      </div>
    </DndProvider>
  );
};

export default Home;
