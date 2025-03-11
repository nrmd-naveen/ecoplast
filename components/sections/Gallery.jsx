import React from "react";
import { ParallaxScroll } from "@/components/ui/GalleryParallax";
import { GalleryImages } from "@/lib/config";

const Gallery = () => {
    return (
        <div className="flex flex-col gap-18 justify-center items-center">
            <h1 className="text-3xl font-bold ">
                Our Recent Works May impress You
            </h1>
            <div className="flex justify-center items-center">
            <ParallaxScroll images={GalleryImages} />
            </div>
      </div>
  )
};

export default Gallery;
