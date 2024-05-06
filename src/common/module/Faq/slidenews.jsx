"use client";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Link from "next/link";
import ButtonViewAll from "@/common/component/element/ButtonViewAll";
import { FaMedium } from "react-icons/fa6";

export default function News() {
  const partnerGroup = [
    {
      id: 1,
      link: "https://finance.yahoo.com/news/sourceblock-revolutionizing-way-developers-users-183000806.html",
      logo: "2",
      p: "py-0 w-[40%] lg:w-[85%]",
    },
    {
      id: 2,
      link: "https://www.digitaljournal.com/pr/news/accesswire/sourceblock-revolutionizing-developers-users-access-1186491100.html#google_vignette",
      logo: "3",
      p: "py-0 w-[40%] lg:w-[85%]",
    },
    {
      id: 3,
      link: "https://www.pr-inside.com/sourceblock-revolutionizing-the-way-developers-and-users-access-r5003607.html",
      logo: "prin",
      p: "py-0 w-[40%] lg:w-[85%]",
    },
    {
      id: 4,
      link: "https://www.benzinga.com/content/38479302/sourceblock-revolutionizing-the-way-developers-and-users-access-exchange-technology-solutions",
      logo: "4",
      p: "py-0 w-[40%] lg:w-[85%]",
    },
    {
      id: 5,
      link: "https://www.bignewsnetwork.com/news/274320486/sourceblock-revolutionizing-the-way-developers-and-users-access--exchange-technology-solutions",
      logo: "big",
      p: "py-0 w-[40%] lg:w-[85%]",
    },
  ];

  return (
  
    <div className="w-full relative">
        <div className="mx-auto mb-12 max-w-sm text-center">
            <h2 className="mb-6 text-center font-display text-2xl sm:text-4xl font-medium text-jacarta-700 dark:text-white">
            ==  Media News ==
            </h2>
          </div>
      <div className="grid grid-cols-2 px-2 lg:grid-cols-6 gap-5  w-full justify-center items-center">
        {partnerGroup.map((item, index) => (
          <ComponentTransition
            
            className="w-full px-3"
            key={index}
          >
            <Link href={`${item.link}`}>
              <div className="ring-1 ring-slate-100 rounded-2xl  bg-slate-500" >
                <img
                  className="w-64 lg:w-full lg:h-auto px-2 py-1 rounded-xl"
                  src={`/news/${item.logo}.png`}
                  alt="news"
                  height={200}
                  width={200}
                />
              </div>
              </Link>
              
          </ComponentTransition>
          
        ))}
        <Link href={'https://sourceblock.medium.com'}>
        <div className="ml-2 mr-3 lg:ml-0 rounded-2xl ring-1 ring-gray-50 lg:py-0 bg-black flex justify-center items-center">
         <img src="https://seekvectorlogo.com/wp-content/uploads/2021/12/medium-vector-logo-2021.png" className="invert w-32"/>
        </div>
       </Link>
      </div>
      <div className="w-full py-6 flex justify-center items-center">
        <Link href="/medianews" className=" flex justify-end">
          <ButtonViewAll
            title="MORE INFO"
            className="hover:!bg-[#EEEEEE] !w-auto !py-3 !px-10 transition-colors duration-300 overflow-hidden !bg-transparent ring-1 ring-slate-50 !text-[#EEEEEE]  "
          />
        </Link>
      </div>
    </div>
  );
}
