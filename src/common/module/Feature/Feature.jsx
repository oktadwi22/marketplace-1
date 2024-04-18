import React from "react";
import HeroText from "@/common/component/element/HeroText";
import Card from "@/common/component/element/Card";
import { FatureItem } from "@/common/constant/FeatureItem";

export default function Feature() {
  return (
    <div className="h-auto max-w-[1500px] px-5 lg:px-10 mt-20 flex flex-col justify-start  w-full overflow-hidden ">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <HeroText texts="Feature" />
          <div className="w-full mt-5">
            <Card item={FatureItem} className="grid md:grid-cols-2 lg:grid-cols-3 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
