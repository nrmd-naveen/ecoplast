import React from "react";
import { ParallaxScroll } from "@/components/ui/GalleryParallax";
import { GalleryImages } from "@/lib/config";

const Gallery = ({galleryRef}: {galleryRef: React.RefObject<HTMLInputElement>}) => {
    return (
        <section id="gallery" ref={galleryRef} className="flex flex-col gap-18 justify-center items-center">
            <h1 className="text-3xl font-bold ">
                Our Recent Works May impress You
            </h1>
            <div className="flex justify-center items-center">
            <ParallaxScroll images={GalleryImages} />
            </div>
      </section>
  )
};

export default Gallery;
