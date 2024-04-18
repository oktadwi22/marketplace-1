import React from "react";
import Image from "./Image";
import clsx from "clsx";
import ComponentTransition from "./ComponentTransition";

export default function Card({ item, className }) {
  return (
    <div
      className={clsx(
        className,
        `w-full h-auto gap-5 pt-10 justify-center items-start`
      )}
    >
      {item.map((items, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          className={clsx(
            items.className,
            ` flex  h-full py-10 gap-5  bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] overflow-hidden`
          )}
        >
          {items.icon && (
            <>
            {item.icon}
            </>
          )}
          <div className="w-full py-5  px-5">
            <div className="py-5">
              <h1 className="text-2xl text-[#CCCCCC]">{items.title}</h1>
            </div>
            <p className="text-base text-[#7A7A7A]">{items.desc}</p>

            {items.descArray && <div>{items.descArray}</div>}
          </div>

        </ComponentTransition>
      ))}
    </div>
  );
}
