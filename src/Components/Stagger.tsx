import { motion } from "framer-motion";
const Stagger = () => {
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.5 } },
  };
  const itemVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>Item 1</motion.div>
      <motion.div variants={itemVariants}>Item 2</motion.div>
      <motion.div variants={itemVariants}>Item 3</motion.div>
    </motion.div>
  );
};

export default Stagger;
