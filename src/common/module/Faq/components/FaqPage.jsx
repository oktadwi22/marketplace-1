import H1 from "@/common/component/element/H1";
import HeroText from "@/common/component/element/HeroText";
import React from "react";
import FaqAccordian from "./FaqAcordian";
import { Faqitem } from "@/common/constant/Faq";
import { GrIntegration } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { RiRefund2Fill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import CardEndOffer from "@/common/component/element/CardEndOffer";

export default function FaqPage() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-center px-5 lg:px-10  w-full mt-20 overflow-hidden">
      <div className="w-full max-sm:mt-10 mt-10  z-[9] flex-col items-center flex justify-center ">
        <div className="w-full md:mt-16 mt-5 ">
          <HeroText texts="Frequently Asked" />
        </div>
        <H1
          className="md:mt-5 mt-10 w-[80%]  sm:!w-[70%] !justify-center text-lg lg:text-xl text-center "
          title="Have a question? Check out most asked questions from our users and community and find their answers"
          textColor="normal"
        />
      </div>
      <div className="w-full py-20 lg:px-36 flex flex-col justify-start items-start">
        <div className="flex gap-2 items-center pb-10">
          <GrIntegration size={30} />
          <h1 className="text-2xl font-semibold">
            Integration and Compatibility
          </h1>
        </div>
        <FaqAccordian Content={Faqitem} />
      </div>

      <div className="w-full py-20 lg:px-36 flex flex-col justify-start items-start">
        <div className="flex gap-2 items-center pb-10">
          <BiSupport size={30} />
          <h1 className="text-2xl font-semibold">
            Support and Assistance
          </h1>
        </div>
        <FaqAccordian Content={Faqitem} />
      </div>

      <div className="w-full py-20 lg:px-36 flex flex-col justify-start items-start">
        <div className="flex gap-2 items-center pb-10">
          <MdPayments size={30} />
          <h1 className="text-2xl font-semibold">
          Payment
          </h1>
        </div>
        <FaqAccordian Content={Faqitem} />
      </div>

      <div className="w-full py-20 lg:px-36 flex flex-col justify-start items-start">
        <div className="flex gap-2 items-center pb-10">
          <RiRefund2Fill size={30} />
          <h1 className="text-2xl font-semibold">
          Cancellation and Refunds
          </h1>
        </div>
        <FaqAccordian Content={Faqitem} />
      </div>


    <CardEndOffer className='!px-0' />

    </div>
  );
}
