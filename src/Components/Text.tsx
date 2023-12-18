import { AnimatePresence, Variants, motion } from "framer-motion";

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  hover: { opacity: 0 }, // If you want to add hover variant
  // transition: { duration: 3 },  // If you want to add a default transition
};

const Text = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover" // If you want to add hover behavior
        variants={variants}
      >
        This is a test for framer motion
      </motion.div>
    </AnimatePresence>
  );
};

export default Text;
