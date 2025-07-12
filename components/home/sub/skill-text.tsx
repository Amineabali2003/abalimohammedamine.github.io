"use client";


import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Cr&eacute;ation d&apos;applications avec des technologies modernes.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Ne manquez jamais une t&acirc;che, une &eacute;ch&eacute;ance ou une id&eacute;e.
      </motion.div>
    </div>
  );
};
