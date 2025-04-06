import { MaterialsCaptions, MaterialsImages } from "@/lib/config";
import React from "react";
import HoverExpand from "../ui/hover-expand";
import Title from "../ui/Title";

const WhyChooseUs = ( { whyChooseUsRef }: { whyChooseUsRef: React.RefObject<HTMLInputElement> }) => {
    return (
        <section id="whyChooseUs" ref={whyChooseUsRef} className="h-60 md:h-80  w-full  flex flex-col md:flex-row  items-center justify-center md:justify-between gap-4">
            <div className=" text-center md:text-left flex flex-col justify-around max-w-md">
                <Title>Why Choose Us?</Title>
                <div className="pt-8 pb-2 b">

                <p className="text-lg font-semibold">
                    Quality Material And Resources
                </p>
                <p className="text-sm py-3 md:text-md font-medium text-neutral-500 w-full text-center md:text-justify ">
                    We have access to a wide range of highquality materials, furnishing, and decor items. We source products from trusted suppliers to ensure durability, sustainability, and aesthetic appeaal.
                </p>
                </div>
            </div>
            <div className="flex mt-2"> 
                <HoverExpand
                      images={MaterialsImages}
                      captions={MaterialsCaptions}
                      initialSelectedIndex={0}
                      thumbnailHeight={200}
                      modalImageSize={400}
                      maxThumbnails={11}
                    />
            </div>
      </section>
  )
};

export default WhyChooseUs;
