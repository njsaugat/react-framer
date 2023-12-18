import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";

const animateVariant: Variants = {
  start: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
  //   transition:
};
const AnimateDOM = () => {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div className="text-center">
      <button onClick={toggleVisibility} className="p-2 border-2 bg-slate-200">
        Animate Presence
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="start"
            animate="animate"
            exit="exit"
            variants={animateVariant}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Blackmail your present to ruin a beautiful future.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimateDOM;
