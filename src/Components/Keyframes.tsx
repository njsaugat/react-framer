import { motion } from "framer-motion";
const Keyframes = () => {
  return (
    <motion.div
      initial="initial"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ["20%", "20%", "50%", "50%", "20%", "100%"],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        },
      }}
      className="w-52 h-52 bg-amber-400"
    ></motion.div>
  );
};

export default Keyframes;
