import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import React from "react";
import ButtonArrow from "@/common/component/element/ButtonArrow";
import Link from "next/link";
import Card from "@/common/component/element/Card";
import { AboutItem, AboutItemBenefitsUsers, AboutItemBusinesModel, AboutItemSecurityandPrivacy, AboutItemTechnicalArchitecture, AboutItemTechnologyOverview } from "@/common/constant/AboutItem";
import SwiperCard from "./components/SwiperCard";

export default function AboutUs() {
  return (
    <div className="h-auto max-w-[1500px] py-10 px-5 lg:px-10  overflow-hidden flex-col flex justify-center  w-full ">
      <div className="flex w-full flex-col relative justify-start items-start">
        <div className="w-full px-5 py-10 gap-10 bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] flex flex-col justify-start items-start">
          <SectionText
            title="About Us"
            className="!w-auto rounded-full !justify-start !px-5  "
          />
          <H1
            title="SourceBlock"
            className="!text-4xl  !text-start font-medium"
            textColor="normal"
          />
          {/* <H1
            title="At the heart of our endeavor lies a vision that propels us forward to enable individuals and businesses alike with remarkable online journeys. We're not just about creating websites we're about crafting experiences that resonate deeply with users. Our unwavering commitment to innovation, creativity, and user-centric design serves as the cornerstone of our values."
            className="!text-sm md:!text-xl lg:!text-2xl  !text-start"
            textColor="opacity"
          /> */}
          <h1 className="text-sm md:text-base lg:!text-xl  !text-start">
            In the rapidly evolving digital economy, vendors and developers face
            the constant challenge of adapting to changing market demands and
            maintaining competitive edges. Sourceblock emerges as an innovative
            solution designed to address these challenges by harnessing the
            powers of artificial intelligence and blockchain technology. This
            documentation provides a detailed overview of Sourceblock’s
            functionalities, the technologies it employs, and the potential
            impact it aims to have on the digital marketplace.
          </h1>
          <div className="w-full px-2 ">
            <Link href="https://sourceblock.gitbook.io/sourceblock/community-and-support/social-media-links">
              <ButtonArrow title="Contact Us" />
            </Link>
          </div>
        </div>

          <div className=" mt-10 pt-10">
          <H1
            title="SourceBlock Objectives"
            className="!text-3xl lg:!text-4xl  !text-start font-medium"
            textColor="normal"
          />
            <Card item={AboutItem} className='grid lg:grid-cols-2 w-full' />
          </div>

          <div className=" mt-10 pt-10">
          <H1
            title="Business Model"
            className="!text-3xl lg:!text-4xl !text-start font-medium"
            textColor="normal"
          />
            <div className="w-full overflow-hidden">
            <SwiperCard item={AboutItemBusinesModel} />
            </div>
          </div>

          <div className=" ">
          <H1
            title="Technology Overview"
            className="!text-3xl lg:!text-4xl !text-start font-medium"
            textColor="normal"
          />
            <div className="w-full overflow-hidden">
            <SwiperCard item={AboutItemTechnologyOverview} />
            </div>
          </div>

          <div className=" ">
          <H1
            title="Technical Architecture"
            className="!text-3xl lg:!text-4xl !text-start font-medium"
            textColor="normal"
          />
            <div className="w-full overflow-hidden">
            <SwiperCard item={AboutItemTechnicalArchitecture} />
            </div>
          </div>


          <div className=" ">
          <H1
            title="Security and Privacy"
            className="!text-3xl lg:!text-4xl !text-start font-medium"
            textColor="normal"
          />
            <div className="w-full overflow-hidden">
            <SwiperCard item={AboutItemSecurityandPrivacy} />
            </div>
          </div>


      </div>
    </div>
  );
}
