"use client";
import React, { useState } from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { motion } from "framer-motion";
import ButtonArrow from "@/common/component/element/ButtonArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperCard({ item, className }) {
  return (
    <div className="w-screen  overflow-hidden flex justify-center  items-center pr-10 md:pr-20 py-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={false}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },

        }}
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-color": "#fff",
        }}
        className="z-[99]  relative  flex  md:overflow-x-scroll md:overflow-y-hidden no-scrollbar py-10"
      >
        {item.map((items, index) => (
          <SwiperSlide key={index} className="pb-10 lg:pb-20 overflow-hidden " >
            <ComponentTransition
              delay={index * 0.1}
              className="w-auto h-[800px] lg:h-[600px]  group flex  bg-gradient-to-b from-[#141414] to-[#141414]  border-[1px] border-[#262626]  relative group z-[9]  overflow-hidden rounded-3xl flex-col items-start justify-start text-start p-6"
            >
              <div className=" flex flex-col py-5  px-5">
                <div className="py-5">
                  <h1 className="text-2xl text-[#CCCCCC]">{items.title}</h1>
                </div>
                <div>

                <p className="text-base text-[#7A7A7A]">{items.desc}</p>
                </div>
                <div>
                {items.descArray && <div>{items.descArray}</div>}
                </div>
              </div>
            </ComponentTransition>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
