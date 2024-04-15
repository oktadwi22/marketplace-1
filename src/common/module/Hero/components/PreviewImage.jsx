import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import { PreviewImageItem } from "@/common/constant/PreviewImageItem";
import React from "react";

export default function PreviewImage() {
  return (
    <div className="w-full relative">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full justify-center items-center">
        {PreviewImageItem.map((item, index) => (
          <ComponentTransition delay={index * 0.1} className="w-full" key={index} >
            <Image
              className="w-full h-auto rounded-xl"
              src={item.src}
              alt="Fusion"
              height={400}
              width={400}
              priority
            />
          </ComponentTransition>
        ))}
      </div>
      <div className="w-full inset-0 bg-gradient-to-l from-[#181818] from-0% to-transparent lg:to-[500px] to-[150px] absolute"></div>
      <div className="w-full inset-0 bg-gradient-to-r from-[#181818] from-0% to-transparent lg:to-[500px] to-[150px] absolute"></div>
    </div>
  );
}
