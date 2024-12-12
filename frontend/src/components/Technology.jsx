import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technology = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        className="my-20 text-center text-5xl text-violet-100 font-light"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        Technologies
      </motion.h1>
      <motion.div
        className="flex justify-center items-center flex-wrap gap-4"
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <IoLogoJavascript className="text-5xl text-jsColor" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        >
          <RiTailwindCssFill className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
        >
          <SiMongodb className="text-5xl text-americanGreen" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
        >
          <SiExpress className="text-5xl text-gray-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(8.5)}
          initial="initial"
          animate="animate"
        >
          <FaNodeJs className="text-5xl text-nodejsColor" />
        </motion.div>

        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(6.2)}
          initial="initial"
          animate="animate"
        >
          <SiMysql className="text-5xl text-mySqlLogo" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        >
          <FaGitAlt className="text-5xl text-gitColor" />
        </motion.div>
      </motion.div>
    </div>
  );
};
