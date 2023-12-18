import { motion } from "framer-motion";

const VariantsInherit = () => {
  return (
    <motion.div
      variants={{ open: { opacity: "50%" }, closed: { opacity: "0%" } }}
      initial="closed"
      animate="open"
    >
      <motion.h1 variants={{ open: { scale: 2 }, closed: { scale: 0 } }}>
        Inheriting parents' opacity
      </motion.h1>
    </motion.div>
  );
};

export default VariantsInherit;
