"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import { useTextParallax } from "@/common/hooks/useParallax";

export default function HeroText({ className, texts,style, ...other }) {
  const TextAnim = {
    initial: {
      y: 147,
    },
    animate: {
      y: 0,
    },
  };


  return (
    <>
      {texts.split("  ").map((text, index) => (
        <motion.div
          key={index}
          initial="initial"
          whileInView="animate"
          className={`${style} flex justify-center items-center  overflow-hidden `}
          transition={{
            type: 'spring'
          }}
          viewport={{ once: true }}
        >
          <motion.h1
            className={`${className} inline-block text-[#FFFFF7] justify-start lg:justify-center text-4xl md:text-5xl lg:!text-7xl  font-bold  text-center overflow-hidden `}
            variants={TextAnim}
            transition={{
              type: "tween",
              delay: index * 0.1,
              ease: [0.8, 0.2, 0, 1],
              duration: 2,
            }}
          >
            {text}
          </motion.h1>
        </motion.div>
      ))}
    </>
  );
}
