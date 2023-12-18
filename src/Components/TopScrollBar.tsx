import { motion, useScroll, useSpring } from "framer-motion";

const TopScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 z-50 w-full h-2 origin-left bg-red-500"
      style={{ scaleX }}
    />
  );
};

export default TopScrollBar;
