
import React, { useEffect } from "react";
import logo from '../../app/assets/image.png'
import Image from "next/image";
import { scrollToSection } from "@/lib/utils";
import { animate } from "framer-motion";


const NavBar = ({
    servicesRef,
    galleryRef,
    contactRef,
    heroRef
}: {
    servicesRef: React.RefObject<HTMLInputElement | null>;
    galleryRef: React.RefObject<HTMLInputElement | null>;
    contactRef: React.RefObject<HTMLInputElement | null>;
    heroRef: React.RefObject<HTMLInputElement | null>;
    }) => {
    
    useEffect(() => {
        animate([
          ['.nav', { opacity: 1, y: 20}]
      ])  
    },[])
    return <>
        <div
            style={{
                opacity: 0,
                transform: 'translateY(-80px)'
            }}
            className="nav w-full z-50 fixed top-[1%] md:top-[3%] flex items-center justify-center ">

        <div className="min-w-80 w-[85%] sm:w-[70%] h-15 md:h-[68px] xl:w-[50%] bg-black/5 backdrop-blur-3xl px-4 py-3 flex md:gap-20 items-center justify-between rounded-lg border-[.5px] border-neutral-600/15">
            <Image
                onClick={() => scrollToSection(heroRef)}
                src={logo}
                alt="logo"
                height={40}
                className=""
            />
            <div className="w-full text-nowrap flex justify-center sm:justify-around md:text-lg font-bold "> 
                <button onClick={ () => scrollToSection(servicesRef)} className=" cursor-pointer hidden sm:block text-[#81b121] tracking-wide hover:text-neutral-600">
                    Services
                </button>
                <button onClick={ () => scrollToSection(galleryRef)} className=" cursor-pointer hidden md:block text-[#81b121] tracking-wide hover:text-neutral-600">
                    Gallery
                </button>
                <button onClick={ () => scrollToSection(contactRef)} className=" cursor-pointer text-[#81b121] tracking-wide hover:text-neutral-600">
                    Contact Us
                </button>
            </div>
    
        </div>  
        </div>
    </>
};

export default NavBar;
