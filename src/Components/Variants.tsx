import { Variants, motion } from "framer-motion";
import { useState } from "react";

const variant: Variants = {
  hidden: { opacity: 0, y: -100, x: -100 },
  visible: { opacity: 1, y: 0, x: 0 },
  hover: { scale: 1.5 },
  tap: { scale: 0.9 },
};
export const Variant = () => {
  const [count, setCount] = useState(0);
  const maxLimit = 5;
  return (
    <>
      {count}
      <motion.button
        className="border-2"
        onClick={() =>
          setCount((prevCount) =>
            prevCount != maxLimit ? prevCount + 1 : maxLimit
          )
        }
        // whileHover="hover"
        whileTap="tap"
        variants={variant}
        disabled={count === maxLimit}
      >
        Increase -- Variant
      </motion.button>
      <motion.div
        initial="hidden"
        animate={count === 5 && "visible"}
        variants={variant}
        whileHover="hover"
      >
        You have exceeded the counter limit.
      </motion.div>
    </>
  );
};
