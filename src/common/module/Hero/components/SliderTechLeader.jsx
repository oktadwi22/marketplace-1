import React from "react";
import TechImg from "./TechImg";
import H1 from "@/common/component/element/H1";

export default function SliderTechLeader() {
  return (
    <div className="lg:col-span-3 py-5 overflow-hidden  w-full items-center flex flex-col justify-center ">
    
      <div className="w-[1300px] overflow-hidden gap-20 flex justify-center items-center">
        <TechImg />
      </div>
    </div>
  );
}
