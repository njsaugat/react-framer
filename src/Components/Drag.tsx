import { motion } from "framer-motion";
const Drag = () => {
  const { div: Div } = motion;
  return (
    <Div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600"
    ></Div>
  );
};

export default Drag;
