import { Variants, motion } from "framer-motion";
const fruits = ["apple", "pear", "banana", "guava", "grapes"];
const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const Scroll = () => {
  return (
    <div>
      {fruits.map((fruit, index) => (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          transition={{
            duration: 2,
            type: "spring",
            // bounce: 0.7,
            // stiffness: 10,
            // damping: 1,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          key={fruit + index}
          className="relative my-20"
        >
          <div className="z-20 rotate-45 rounded-xl top-1/2 w-36 h-80 bg-gradient-to-t from-fuchsia-600 to-fuchsia-300"></div>
          <motion.div
            // initial="offscreen"
            // animate="onscreen"
            variants={cardVariants}
            className="absolute top-0 z-30 flex items-center justify-center uppercase bg-white shadow-2xl -rotate-12 w-36 h-80 rounded-2xl"
          >
            {fruit}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Scroll;
