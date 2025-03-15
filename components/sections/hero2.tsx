"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WrapButton from "@/components/ui/ButtonCTA";
import Image from "next/image"; // Only for Next.js; remove if using React

const words = ["Kitchen", "Bedroom", "Living Hall"];
const imageMap: Record<string, string> = {
  Kitchen: "/kitchen.png",
  Bedroom: "/bedroom.png",
  "Living Hall": "/living.png",
};

const Hero2 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Change word every 5 seconds
    const textInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 5000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-20 md:flex-row  items-center justify-between ">
      {/* Left Side */}
      <div className="flex flex-col justify-center md:items-start items-center space-y-6 text-center md:text-left w-full md:w-1/2 ">
        {/* Main Heading */}
        <h1 className="w-full text-3xl md:text-5xl font-bold leading-snug text-center">
          <span className="block">Craft your perfect</span>
          <span className="relative block">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-[#81b121] px-2 py-1 rounded-md font-extrabold tracking-wide"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
            <span className="  font-bold leading-snug"> Interiors</span>
          </span>
        </h1>

      <div className=" md:hidden bg-gray-300 rounded-3xl h-70 sm:h-80 md:h-120 max-w-[400px] w-full md:w-1/2 flex justify-center ">
        <Image
          src={imageMap[words[index]]}
          alt={words[index]}
          width= "500"
          height="500"
          className="w-full h-70 sm:h-80 md:h-120 object-cover rounded-3xl"
        />
      </div>
        {/* Button */}
        <div className="w-full mt-8 flex flex-col items-center justify-center ">
          <WrapButton >
            Enquire Now
          </WrapButton>
          <p className="text-neutral-500 font-semibold mt-4 md:mt-2 md:text-lg">Let's design your future !</p>
        </div>
      </div>

      {/* Right Side - Dynamic Image */}
      <div className=" hidden bg-gray-300 rounded-3xl h-70 sm:h-80 md:h-120 w-full md:w-1/2 md:flex justify-center">
        <Image
          src={imageMap[words[index]]}
          alt={words[index]}
          width= "500"
          height="500"
          className="w-full h-70 sm:h-80 md:h-120 object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero2;
