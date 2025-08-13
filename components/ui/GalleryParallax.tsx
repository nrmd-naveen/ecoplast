"use client";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const controlsFirst = useAnimation();
  const controlsSecond = useAnimation();
  const controlsThird = useAnimation();

  const third = Math.ceil(images.length / 3);

  // Duplicate images to create a seamless loop
 const firstPart = [...images.slice(0, third), ...images.slice(0, third)];
  const secondPart = [...images.slice(third, 2 * third), ...images.slice(third, 2 * third)];
  const thirdPart = [...images.slice(2 * third), ...images.slice(2 * third)];

  useEffect(() => {
    // console.log(firstPart, secondPart, thirdPart)
    // @typescript-eslint/no-explicit-any
    const animateScroll = async (controls: AnimationControls, direction: number) => {
      while (true) {
        await controls.start({
          y: [0, direction],
          transition: { duration: 100, ease: "linear" },
        });
        controls.set({ y: 0 }); // Reset position for infinite loop
      }
    };
    //@typescript-eslint/no-explicit-any
    const animateScrollMid = async (controls: AnimationControls, direction: number) => {
      while (true) {
        await controls.start({
          y: [direction, 0],
          transition: { duration: 190, ease: "linear" },
        });
        controls.set({ y: 0 }); // Reset position for infinite loop
      }
    };

    animateScroll(controlsFirst, -15000);
    animateScrollMid(controlsSecond, -15000);
    animateScroll(controlsThird, -15000);
  }, [controlsFirst, controlsSecond, controlsThird]);

  return (
    <div className={cn("flex relative h-[40rem] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]", className)}>
      {/* <div className="z-10 absolute top-0 h-20 w-full bg-gradient-to-b from-white"></div> 
      <div className="z-10 absolute bottom-0 h-20 w-full bg-gradient-to-t from-white"></div>  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  mx-auto gap-10 ">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div animate={controlsFirst} initial={{ y: 0 }} key={"grid-1" + idx}>
              <Image
                src={el}
                className="h-80 w-full max-w-md bg-neutral-200 object-cover object-left-top rounded-lg"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div animate={controlsSecond} initial={{ y: 0 }} key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-80 w-full max-w-md bg-neutral-200 object-cover object-left-top rounded-lg"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div animate={controlsThird} initial={{ y: 0 }} key={"grid-3" + idx}>
              <Image
                src={el}
                className="h-80 w-full max-w-md bg-neutral-200 object-cover object-left-top rounded-lg"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
