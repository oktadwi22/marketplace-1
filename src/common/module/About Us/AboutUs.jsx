import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import React from "react";
import ButtonArrow from "@/common/component/element/ButtonArrow";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="h-auto max-w-[1500px] relative flex  flex-col justify-center px-5 lg:px-10 pt-10 w-full">
      <div className="flex w-full gap-10 flex-col relative justify-start items-start">
        <div className="w-full px-5 py-10 gap-10 bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] flex flex-col justify-start items-start">
          <SectionText
            title="About Us"
            className="!w-auto rounded-full !justify-start !px-5  "
          />
          <H1
            title="Marketplace Name"
            className="!text-4xl  !text-start font-medium"
            textColor="normal"
          />
          <H1
            title="At the heart of our endeavor lies a vision that propels us forward to enable individuals and businesses alike with remarkable online journeys. We're not just about creating websites we're about crafting experiences that resonate deeply with users. Our unwavering commitment to innovation, creativity, and user-centric design serves as the cornerstone of our values."
            className="!text-sm md:!text-xl lg:!text-2xl  !text-start"
            textColor="opacity"
          />
          <div className="w-full px-2 ">
            <Link href='/features'>
            <ButtonArrow title="Contact Us"  />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
