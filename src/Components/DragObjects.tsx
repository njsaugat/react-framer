import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";

type Dimension = {
  x: number;
  y: number;
};
const DragObjects = () => {
  const [dimensions, setDimensions] = useState<Dimension>({ x: 50, y: 50 });
  const changeDimension = (e: ChangeEvent<HTMLInputElement>) => {
    return setDimensions((prevDimension) => {
      if (e.target.id === "x") {
        return { ...prevDimension, x: Number(e?.target?.value) };
      }
      return { ...prevDimension, y: Number(e?.target?.value) };
    });
  };
  return (
    <>
      x:{dimensions.x}
      <input
        id="x"
        type="range"
        onChange={(e) => changeDimension(e)}
        defaultValue={50}
      />
      y:{dimensions.y}
      <input
        id="y"
        type="range"
        onChange={(e) => changeDimension(e)}
        defaultValue={50}
      />
      <div className="flex space-x-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          style={{ x: dimensions.x - 50, y: dimensions.y - 50 }}
          dragConstraints={{ left: -100, right: 100 }}
          className="w-20 h-20 bg-green-500 rounded-full cursor-pointer"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          style={{ x: dimensions.x - 50, y: dimensions.y - 50 }}
          dragConstraints={{ left: -100, right: 100 }}
          className="w-20 h-20 bg-green-500 rounded-full cursor-pointer"
        ></motion.div>
      </div>
    </>
  );
};

export default DragObjects;
