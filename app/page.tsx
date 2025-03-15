import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import { ParallaxScroll } from "@/components/ui/GalleryParallax";
import { Hero, HeroSlider } from "@/components/ui/HeroSlider";
import HoverExpand from "@/components/ui/hover-expand";
import NavBar from "@/components/ui/NavBar";
import Hero2 from "@/components/sections/hero2";
import FeatureCard from "@/components/sections/discsec";
import Services from "@/components/sections/services";
import {
  MaterialsCaptions,
  MaterialsImages,
  GalleryImages,
  HeroImages,
} from "@/lib/config";

import { motion } from "framer-motion";
import Footer from "@/components/sections/Footer";
import { BlurLine } from "./assets/Icons";
import { Spotlight } from "@/components/ui/SpotLight";

export default function Home() {
  return (
    <>
      {/* <LandingPage /> */}
      <div className=" bg-black/5 font-poppins ">
        <NavBar />
        <Spotlight fill="#beeb65" className="md:-top-130 -top-160 -left-60 md:-left-110 scale-150 md:scale-100" />
        
        <div className=" md:h-screen flex justify-center items-start ">

            <Hero2 />
          </div>
        <div className="flex flex-col pt-40 gap-52 md:gap-32 px-10 lg:px-50 ">
          <Services />
          <WhyChooseUs />
          <Gallery />
          <FeatureCard />
        </div>

        <Footer />
        {/* <ParallaxScroll images={GalleryImages} />
        <HoverExpandCards /> */}
      </div>
    </>
    // <>
    //   {/* <div className="bg-white font-poppins">
    //     <NavBar />{" "}
    //   </div>
    //   <div>
    //     <Hero2 />
    //   </div> */}
    //   <div className="bg-white font-poppins">
    //     <NavBar />
    //     <Hero2 />
    //     <div></div>{" "}
    //     <div className="flex flex-col pt-40 gap-52 md:gap-32 px-10 md:px-50 ">
    //       <WhyChooseUs />
    //       <Gallery />
    //       <FeatureCard />
    //     </div>
    //     <Footer />{" "}
    //     {/* <ParallaxScroll images={GalleryImages} />
    // //     <HoverExpandCards /> */}{" "}
    //   </div>
    // </>
  );
}

function HoverExpandCards() {
  return (
    <HoverExpand
      images={MaterialsImages}
      captions={MaterialsCaptions}
      initialSelectedIndex={0}
      thumbnailHeight={200}
      modalImageSize={400}
      maxThumbnails={11}
    />
  );
}
