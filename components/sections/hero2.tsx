"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import WrapButton from "@/components/ui/ButtonCTA";
import Image from "next/image"; // Only for Next.js; remove if using React

const words = ["Kitchen", "Bedroom", "Living Hall"];
const imageMap: Record<string, string> = {
  Kitchen: "/kitchen.png",
  Bedroom: "/bedroom.png",
  "Living Hall": "/living.png",
};

const Hero2 = ({ heroRef }: {heroRef: React.RefObject<HTMLInputElement>}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {

    //animations
    animate([
      ['.headline', { opacity: 1, y: 0 }, { at: 0.4}],
      ['.btn', { opacity: 1, x: 0 }, { at: 0.8}],
      ['.img', { opacity: 1, y: -20 }, { at: 0.8}],
    ])

    // Change word every 5 seconds
    const textInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 5000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section id="hero" ref={heroRef} className=" mt-30 md:h-[60%] w-[80vw] flex flex-col gap-15 md:flex-row  items-center justify-between ">
      {/* Left Side */}
      
      <div className=" flex flex-col justify-center md:items-start items-center space-y-6 text-center md:text-left w-full md:w-1/2 h-full">
        {/* Main Heading */}
        <h1
          style={{
          opacity: 0,
        }}
          className="headline w-full leading-10 md:leading-16 text-nowrap py-[10%] md:py-2 text-center text-[33px] md:text-[40px] font-bold tracking-tight lg:text-5xl xl:text-6xl">
            <span className="bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text py-1 text-transparent">
              Craft your perfect{' '}
          </span>
          <br></br>
            <span className="w-fit bg-gradient-to-b from-[#6a9319]  to-[#b4e650]  bg-clip-text pr-1.5 text-center text-transparent md:mb-4">
              <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="px-2 py-1 rounded-md font-extrabold"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
            </span>
            <span className="bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text py-1 text-transparent">
              Interiors
            </span>
          </h1>
        {/* <h1 className="w-full text-3xl md:text-5xl font-bold leadin-leading-1.5g-snug text-center">
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
            <span className="  font-bold leadin-leading-1.5g-snug"> Interiors</span>
          </span>
        </h1> */}

        <div
          style={{
          opacity: 0,
          transform: 'translateY(20px)'
        }}
          className="img md:hidden rounded-3xl h-70 sm:h-80 md:h-120 max-w-[400px] w-full md:w-1/2 flex justify-center ">
          
        <Image
          src={imageMap[words[index]]}
          alt={words[index]}
          width= "500"
          height="500"
          className="w-full shadow-lg shadow-[#484848]/50  h-70 sm:h-80 md:h-120 object-cover rounded-3xl"
        />
      </div>
        {/* Button */}
        <div
          style={{
            opacity: 0,
          transform: 'translateX(-20px)'
        }}
          className="btn w-full mt-8 flex flex-col items-center justify-center ">
          <WrapButton >
            Enquire Now
          </WrapButton>
          <p className="text-neutral-500 font-semibold mt-4 md:mt-2 md:text-lg">Let's design your future !</p>
        </div>
      </div>

      {/* Right Side - Dynamic Image */}
      <div
        style={{
          opacity: 0,
          transform: 'translateY(20px)'
        }}
        className="img hidden rounded-3xl w-full md:w-1/2 md:flex justify-center">
  <div className="w-[500px] h-[400px] shadow-lg shadow-[#484848]/70 relative rounded-3xl overflow-hidden">
    <Image
      src={imageMap[words[index]]}
      alt={words[index]}
      layout="fill"
      objectFit="cover"
    />
  </div>
</div>

    </section>
  );
};

export default Hero2;
