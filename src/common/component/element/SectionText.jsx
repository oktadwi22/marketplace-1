import React from "react";
import ComponentTransition from "./ComponentTransition";
import clsx from "clsx";

export default function SectionText({icon, title, className= ''}) {
  return (
    <ComponentTransition className={clsx(className,`w-auto px-5 rounded-full flex justify-center text-xl font-semibold border-[#d2d0d4] border-[1px] text-[#d2d0d4] gap-2 items-center py-2 mb-2`)}>
      {icon}
      <h1>{title}</h1>
    </ComponentTransition>
  );
}
