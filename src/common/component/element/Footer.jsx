import { NavigationItem } from "@/common/constant/NavigationItem";
import React from "react";
import LinkSlideHover from "./LinkSlideHover";
import {
  FollowusItem,
  InformationItem,
  ResourcesItem,
} from "@/common/constant/FooterItem";
import Logo from "../navbar/Logo";

export default function Footer() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <footer>
        <div className="container mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5 flex px-6 lg:justify-center ">
              <Logo />
            </div>

            <div className="mt-6 lg:mt-0 w-full ">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
                <div>
                  <h1 className="text-[#FFFFF7] font-semibold ">Follow Us</h1>
                  <div className="flex flex-col relative justify-start mt-1 gap-2 items-start w-full">
                    {FollowusItem.map((item, index) => (
                      <LinkSlideHover
                        className="text-sm text-[#aaaa9e]"
                        key={index}
                        href={item.src}
                        title={item.title}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="text-[#FFFFF7] font-semibold ">Information</h1>
                  <div className="flex flex-col relative justify-start mt-1 gap-2 items-start w-full">
                    {InformationItem.map((item, index) => (
                      <LinkSlideHover
                        className="text-sm text-[#aaaa9e]"
                        key={index}
                        href={item.src}
                        title={item.title}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="text-[#FFFFF7] font-semibold ">Feature</h1>
                  <div className="flex flex-col relative justify-start mt-1 gap-2 items-start w-full">
                    {ResourcesItem.map((item, index) => (
                      <LinkSlideHover
                        className="text-sm text-[#aaaa9e]"
                        key={index}
                        href={item.src}
                        title={item.title}
                      />
                    ))}
                  </div>
                </div>


              </div>
            </div>
          </div>

          {/* <div className="py-5 mt-20 w-full flex justify-center items-center">
            <p className="text-center text-[#FFFFF7]">
              © M Fahlevi 2024 - All rights reserved
            </p>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
