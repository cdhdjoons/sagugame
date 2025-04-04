'use client'

import Image from "next/image";
import Link from "next/link";
import ClaimTimer from "./components/claimtimer";
import Intro from "./components/intro";
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  return (
    <div className=" w-full h-full">
      <div className=" w-full h-full max-w-[500px] relative flex flex-col gap-1 " >
        <Intro />
        <AnimatePresence mode="wait">
          <motion.div className="w-full flex justify-center pt-[3%] relative "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://x.com/PDG_official_X" target="_blank" rel="noopener noreferrer" className="w-[90%] block">
              <div className="w-full max-w-[450px] px-[3%] flex flex-col items-start aspect-[342/75] relative active:scale-95 transition-transform duration-100 ">
                <div className=" w-full flex flex-col">
                  <p className="text-black text-[3vmin] sm:text-[2vmin] xs:text-[4vmin]">Welcome</p>
                </div>
                <div className="w-[50vmin] sm:w-[40vmin] aspect-[306/59] relative">
                  <Image
                    src="/image/sagu_logo.png"
                    alt="main logo"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </a>
          </motion.div>
        </AnimatePresence>
        <ClaimTimer />
      </div>
    </div>
  );
}
