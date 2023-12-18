import { Variants, motion } from "framer-motion";

const transitionVariant: Variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
};
const Transition = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={transitionVariant}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 1,
        damping: 7,
        // // damping: 10,
        // opacity: { duration: 1, ease: "easeInOut" },
        // y: { duration: 3, ease: "easeOut" },
      }}
      className="p-5 border-2"
    >
      Stiff & damp
    </motion.div>
  );
};

export default Transition;
