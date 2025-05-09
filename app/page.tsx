"use client"

import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import { ParallaxScroll } from "@/components/ui/GalleryParallax";
import { Hero, HeroSlider } from "@/components/ui/HeroSlider";
import HoverExpand from "@/components/ui/hover-expand";
import NavBar from "@/components/ui/NavBar";
import Hero2 from "@/components/sections/hero2";
import FeatureCard from "@/components/sections/discsec";
import Services from "@/components/sections/services";
import ContactForm from "@/components/sections/Contact";
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
import Testimonials from "@/components/sections/Testimonials";
import { useRef } from "react";
import { features } from "process";
import ServicesNew from "@/components/sections/ServicesNew";

export default function Home() {

  const contactRef: React.RefObject<HTMLInputElement> = useRef(null);
  const heroRef: React.RefObject<HTMLInputElement> = useRef(null);
  const whyChooseUsRef: React.RefObject<HTMLInputElement> = useRef(null);
  const servicesRef: React.RefObject<HTMLInputElement> = useRef(null);
  const galleryRef: React.RefObject<HTMLInputElement> = useRef(null);
  const featuresRef: React.RefObject<HTMLInputElement> = useRef(null);
  const testimonialsRef: React.RefObject<HTMLInputElement> = useRef(null);

  return (
    <>
      {/* <LandingPage /> */}
      <div className=" bg-black/5 font-poppins ">
        <NavBar
          servicesRef={servicesRef}
          galleryRef={galleryRef}
          contactRef={contactRef}
          heroRef={heroRef}
        />
        <Spotlight
          fill="#beeb65"
          className="md:-top-130 -top-160 -left-60 md:-left-110 scale-150 md:scale-100"
        />

        <div className=" h-screen flex justify-center items-center">
          <Hero2 heroRef={heroRef} />
        </div>
        <div className="flex flex-col gap-52 md:gap-32 px-10 md:px-[10%] xl:px-[15%] ">
          {/* <Services servicesRef={servicesRef} /> */}
          <ServicesNew />
          <WhyChooseUs whyChooseUsRef={whyChooseUsRef} />
          <FeatureCard featuresRef={featuresRef} />
          <Gallery galleryRef={galleryRef} />
          <Testimonials testimonialsRef={testimonialsRef} />
          <ContactForm contactRef={contactRef} />
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
  );
}
