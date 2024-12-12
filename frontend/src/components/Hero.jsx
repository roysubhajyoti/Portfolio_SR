import { HERO_CONTENT } from "../constants/Info";
import heroMan from "../assets/heroMan.jpg";
import { motion } from "framer-motion";

const containter = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
});

export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 "
              variants={containter(0.3)}
              initial="hidden"
              animate="visible"
            >
              Subhajyoti Roy
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-200 bg-clip-text text-3xl tracking-tight text-transparent"
              variants={containter(0.3)}
              initial="hidden"
              animate="visible"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              variants={containter(0.2)}
              initial="hidden"
              animate="visible"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-lg w-3/4"
              src={heroMan}
              alt="SR shadow"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
