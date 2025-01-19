import { motion, useScroll } from "motion/react";

const ScrollHook = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className=" w-full h-4 fixed z-20 top-0 bg-green-400"
      ></motion.div>
    </div>
  );
};

export default ScrollHook;
