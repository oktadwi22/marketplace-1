"use client";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Link from "next/link";

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
            ==  As Featured On ==
            </h2>
          </div>
      <div className="grid grid-cols-2 px-2 lg:grid-cols-5 gap-5  w-full justify-center items-center">
        {partnerGroup.map((item, index) => (
          <ComponentTransition
            
            className="w-full"
            key={index}
          >
            <Link href={`${item.link}`}>
              <div className="ring-1 ring-slate-100 rounded-2xl bg-slate-500" >
                <img
                  className="w-full h-auto px-3 py-2 rounded-xl"
                  src={`/news/${item.logo}.png`}
                  alt="Fusion"
                  height={400}
                  width={400}
                />
              </div>
              </Link>
          </ComponentTransition>
        ))}
      </div>
    </div>
  );
}
