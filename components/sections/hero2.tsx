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
    <div className="flex h-[550px] flex-col md:flex-row items-center justify-between px-10">
      {/* Left Side */}
      <div className="flex flex-col justify-center md:items-start items-center space-y-6 text-center md:text-left w-full md:w-1/2 mt-60 ">
        {/* Main Heading */}
        <h1 className="text-5xl font-bold leading-snug">
          <span className="block">Crafting your perfect</span>
          <span className="relative block">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-[#81b121] px-2 py-1 rounded-md font-serif text-6xl font-extrabold tracking-wide"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
            <span className="text-5xl font-bold leading-snug"> Interiors</span>
          </span>
        </h1>


        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <WrapButton text="Enquire Now" />
        </div>
      </div>

      {/* Right Side - Dynamic Image */}
      <div className="bg-gray-300 rounded-lg h-full w-full md:w-1/2 flex mt-85 justify-center ">
        <Image
          src={imageMap[words[index]]}
          alt={words[index]}
          width={500} // Adjust size as needed
          height={500}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero2;
