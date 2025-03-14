import React, { useRef, useEffect } from "react";
import { useDrag } from "react-dnd";

interface PlantProps {
  id: string;
}

const Plant: React.FC<PlantProps> = ({ id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PLANT",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const ref = useRef<HTMLDivElement>(null);

  // Aplica o drag ao elemento ref ao montar o componente
  useEffect(() => {
    if (ref.current) {
      drag(ref.current);
    }
  }, [drag]);

  return (
    <div
      ref={ref}
      className={`w-[100%] h-[100%] rounded-full flex items-center justify-center ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <img src="/broto.png" alt="" width={500} />
    </div>
  );
};

export default Plant;
