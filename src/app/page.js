'use client'

import Image from "next/image";
import Link from "next/link";
import ClaimTimer from "./components/claimtimer";
import Intro from "./components/intro";
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  return (
    <div className=" w-full h-full">
      <div className=" w-full max-w-[500px] relative flex flex-col " >
        <Intro />
        <AnimatePresence mode="wait">
          <motion.div className="w-full flex justify-center pt-1 relative "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
              <div className="w-[90%] max-w-[500px] px-[3%] flex flex-col items-start aspect-[342/75] relative ">
                <div className=" w-full flex flex-col">
                  <p className="text-white text-[3.5vmin] sm:text-[2.5vmin] xs:text-[4.5vmin]">Welcome</p>
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
            
          </motion.div>
        </AnimatePresence>
        <ClaimTimer />
      </div>
    </div>
  );
}
