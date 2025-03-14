import React, { useRef, useEffect } from "react";
import { useDrop } from "react-dnd";
import Plant from "./Plant";

interface PlantData {
  id: string;
  slot: number;
}

interface GardenSlotProps {
  index: number;
  plant?: PlantData;
  movePlant: (plantId: string, newSlot: number) => void;
}

const GardenSlot: React.FC<GardenSlotProps> = ({ index, plant, movePlant }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PLANT",
    drop: (item: { id: string }) => movePlant(item.id, index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const ref = useRef<HTMLDivElement>(null);

  // Aplica a função `drop` à referência do slot
  useEffect(() => {
    if (ref.current) {
      drop(ref.current);
    }
  }, [drop]);

  return (
    <div
      ref={ref}
      className={`w-32 h-32 flex items-center justify-center rounded-full ${
        isOver ? "bg-green-400/10" : "bg-green-700/10"
      }`}
    >
      {plant && <Plant id={plant.id} />}
    </div>
  );
};

export default GardenSlot;
