import React, { useState } from "react";
import GardenSlot from "../components/GardenSlot";

const initialPlants = [
  { id: "plant1", slot: 0 },
  { id: "plant2", slot: 1 },
  { id: "plant3", slot: 2 },
];

const GardenGrid = () => {
  const [plants, setPlants] = useState(initialPlants);

  const movePlant = (plantId: string, newSlot: number) => {
    setPlants((prevPlants) =>
      prevPlants.map((p) =>
        p.id === plantId ? { ...p, slot: newSlot } : p
      )
    );
  };

  return (
    <div className="grid grid-cols-3 gap-8 p-4  rounded-lg">
      {Array.from({ length: 9 }).map((_, index) => (
        <GardenSlot
          key={index}
          index={index}
          plant={plants.find((p) => p.slot === index)}
          movePlant={movePlant}
        />
      ))}
    </div>
  );
};

export default GardenGrid;
