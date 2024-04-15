"use client";
import Image from "@/common/component/element/Image";
import { useDekstop } from "@/common/hooks/useDekstop";
import { useParallax } from "@/common/hooks/useParallax";
import { motion, useScroll } from "framer-motion";
import React from "react";

export default function FusionApp() {
  const { scrollY } = useScroll();
  const { RotateX,RotateY,RotateZ,TranslateX,TranslateY,width} = useParallax(scrollY);
  const isDekstop = useDekstop()
  return (
    <div>
      <motion.div
        className=" overflow-hidden "
        style={{
          width: width,
          translateY: TranslateY,
          translateX: TranslateX,
          rotateX: RotateX,
          position: "relative",
          transformPerspective: 819,
          rotateZ: RotateZ,
          rotateY: RotateY,
        }}
      >
        <Image
          className="w-full h-auto "
          src="/FusionApp.png"
          alt="Fusion"
          height={400}
          width={400}
          priority
        />
      </motion.div>
    </div>
  );
}
