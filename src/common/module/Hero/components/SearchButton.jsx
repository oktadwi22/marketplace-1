"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchButton() {
  const [openSearchModal, setOpenSearchModal] = useState(false);

  return (
    <div className="w-auto ">
      <button
        onClick={() => setOpenSearchModal(!openSearchModal)}
        className="bg-[#262626] flex px-5 py-4 items-center gap-2 rounded-full"
      >
        <div>
          <CiSearch size={20} />
        </div>
        <div>
          <h1 className="text-[#fffff7b7]">Search product here...</h1>
        </div>
      </button>

      <AnimatePresence>
        {openSearchModal && (
          <div>
            <motion.div
              className="absolute bg-[#262626] rounded-full top-[150px] z-[9] overflow-hidden"
              initial={{
                translateY: 50,
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                translateY: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                translateY: 50,
                scale: 0.7,
                opacity: 0,
              }}
            >
              <div className="flex justify-center px-5 py-4 items-center gap-2 rounded-full">
                <div>
                  <CiSearch size={20} />
                </div>
                <div>
                  <input
                    className="text-[#fffff7b7] bg-transparent outline-none"
                    type="search"
                    name=""
                    id=""
                    placeholder="Search product here..."
                  />
                </div>
              </div>
            </motion.div>
            <div
              className="absolute inset-0 bg-[#181818d2]"
              onClick={() => setOpenSearchModal(!openSearchModal)}
            ></div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
