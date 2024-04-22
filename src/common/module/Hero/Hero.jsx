"use client";
import H1 from "@/common/component/element/H1";
import React from "react";
import dynamic from "next/dynamic";
import { GoArrowUpRight } from "react-icons/go";
import HeroText from "@/common/component/element/HeroText";
import Rails from "@/common/component/svg/Rails";
import Gradient, { Gradient2 } from "@/common/component/svg/Gradient";
import ButtonWarp from "@/common/component/element/ButtonWarp";
import Image from "@/common/component/element/Image";
import SliderTechLeader from "./components/SliderTechLeader";
import PreviewImage from "./components/PreviewImage";
import SearchButton from "./components/SearchButton";
import Link from "next/link";
import ButtonViewAll from "@/common/component/element/ButtonViewAll";

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-start  w-full mt-20 overflow-hidden ">
      <div className="w-full max-lg:mt-20 px-5 lg:px-10 z-[9] flex-col items-center flex justify-center ">
        <div className="w-full md:mt-24 mt-5 ">
          <HeroText
            texts="AI-Driven Pricing Optimization and Blockchain Security"
            className="!justify-center lg:!w-[70%] leading-[0.95em]  lg:!py-2"
          />
        </div>
        <H1
          delay={0.2}
          className="mt-5 w-full lg:!w-[60%] justify-center !text-lg text-center"
          title="Sourceblock emerges as a dual-component technology suite that merges the robust capabilities of AI-driven pricing optimization with the security and transparency of a blockchain-based marketplace."
          textColor="opacity"
        />
        <div className="w-full   py-5 flex justify-center items-center">
          {/* <SearchButton /> */}
          <Link href="https://app.sourceblock.software" className=" flex justify-end">
            <ButtonViewAll
              title="Marketplace"
              className="hover:!bg-[#EEEEEE]  transition-colors duration-300 overflow-hidden !bg-transparent outline outline-1 outline-[#EEEEEE] !text-[#EEEEEE] w-auto !py-2"
            />
          </Link>
        </div>
      </div>
      {/* <div className="w-full mt-5">
        <PreviewImage />
      </div> */}
      <div className="w-full lg:mt-10  px-5 lg:px-10">
        <SliderTechLeader />
      </div>
    </div>
  );
}
