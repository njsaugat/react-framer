import { motion } from "framer-motion";

const BounceKeyFrame = () => {
  return (
    <motion.div
      animate={{
        y: [-50, 50, -50],
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
    >
      Bounce
    </motion.div>
  );
};

export default BounceKeyFrame;
