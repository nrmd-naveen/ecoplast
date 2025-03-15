import React from "react";
import logo from '../../app/assets/image.png'
import Image from "next/image";

const NavBar = () => {
    return <>
        <div className="w-full z-50 fixed top-9 flex items-center justify-center">

        <div className="w-[80%] h-15 md:h-[68px] md:w-[50%] bg-white/70 backdrop-blur-3xl px-4 py-3 flex items-center justify-between rounded-lg border-[.5px] border-neutral-600/15">
            <div className="flex max-w-[50%] items-center gap-4">
                    <Image
                        src={logo}
                        alt="logo"
                        height={40}
                        className=""
                    />
                <h1 className="md:text-xl font-bold"></h1>
            </div>
            <div className="min-w-[50%]  flex justify-end md:items-center md:gap-20 pr-5 md:pr-10 md:text-lg font-bold"> 
                <a href="#" className="hidden md:block text-[#81b121] tracking-wide hover:text-neutral-600">
                    Services
                </a>
                <a href="#" className="hidden md:block text-[#81b121] tracking-wide hover:text-neutral-600">
                    Gallery
                </a>
                <a href="#" className="text-[#81b121] tracking-wide hover:text-neutral-600">
                    Contact Us
                </a>
            </div>
    
        </div>  
        </div>
    </>
};

export default NavBar;
