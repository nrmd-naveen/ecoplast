import React from "react";
import { ParallaxScroll } from "@/components/ui/GalleryParallax";
import { GalleryImages } from "@/lib/config";
import Title from "../ui/Title";

const Gallery = ({galleryRef}: {galleryRef: React.RefObject<HTMLInputElement>}) => {
    return (
        <section id="gallery" ref={galleryRef} className="-mt-10 md:mt-10 flex flex-col space-y-8 justify-center items-center w-full">
            <Title>
                Our Recent Works
            </Title>
            <p className="text-sm pb-2 md:text-md font-medium text-neutral-500 w-full text-center max-w-4xl">
               Our gallery showcases a blend of artistic creativity and functional design. We transform ordinary spaces into extraordinary environments that inspire. <p className="hidden md:inline">Browse through our curated collection of recent projects and see how we bring your vision to life with craftsmanship and style.</p>
            </p>
            <div className="flex justify-center items-center py-5 w-full">
            <ParallaxScroll images={GalleryImages} />
            </div>
      </section>
  )
};

export default Gallery;
