import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import { ParallaxScroll } from "@/components/ui/GalleryParallax";
import { Hero, HeroSlider } from "@/components/ui/HeroSlider";
import HoverExpand from "@/components/ui/hover-expand";
import NavBar from "@/components/ui/NavBar";
import { MaterialsCaptions, MaterialsImages, GalleryImages, HeroImages } from "@/lib/config";
import { motion } from "framer-motion";
import Footer from "@/components/sections/Footer";



export default function Home() {
  return (
    <>
      <div className="bg-white ">

      <NavBar />
        <Hero />
        <div className="flex flex-col pt-40 gap-52 md:gap-32 px-10 md:px-50 ">
        <WhyChooseUs />
        <Gallery />
        </div>
        <Footer />
      {/* <ParallaxScroll images={GalleryImages} />
      <HoverExpandCards /> */}
      </div>
    </>
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
  )
}
