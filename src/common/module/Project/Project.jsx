import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import React from "react";
import ProjectCards from "./components/ProjectCard";
import { ProjectItem } from "@/common/constant/ProjectItem";
import HeroText from "@/common/component/element/HeroText";

export default function Project() {
  return (
    <div className="h-auto max-w-[1500px] px-5 lg:px-10 mt-20 flex flex-col justify-start  w-full overflow-hidden ">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <HeroText texts="Projects" />
          <div className="w-full mt-5">
            <ProjectCards item={ProjectItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
