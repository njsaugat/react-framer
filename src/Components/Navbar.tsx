import { useState } from "react";
import { motion } from "framer-motion";
const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 32px 32px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Toggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="fixed z-50 flex flex-col items-center justify-center leading-3 text-black rounded-full shadow-2xl cursor-pointer w-14 h-14"
    >
      <div>––</div>
      <div>––</div>
      <div>––</div>
    </button>
  );
};

const Items = () => {
  return (
    <div className=" -z-10 h-screen pt-20 border-2 w-[30vw] absolute   bg-gradient-to-b from-sky-400 to-sky-300">
      {new Array(5).fill(1).map((el, index) => (
        <div
          className="flex items-center justify-center my-4 space-x-5"
          key={`${el}${index}`}
        >
          <span className="w-8 h-8 border-2 rounded-full "></span>
          <div>
            <div className="w-16 h-4 mb-2 border-2 border-indigo-500"></div>
            <div className="w-16 h-4 border-2 border-indigo-500"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="absolute top-1 left-1">
        <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
        {
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="absolute -top-1 -left-1"
          >
            {/* <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} /> */}
            <Items />
          </motion.div>
        }
      </nav>
    </>
  );
};

export default Navbar;
