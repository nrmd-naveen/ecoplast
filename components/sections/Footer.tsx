
import Image from "next/image";
import { GmailF, InstagramF, LinkedInF } from "../../app/assets/Icons";
import logo from "../../app/assets/image.png";

const Footer = () => {
    return (
        <>
        <section id="footer" className="flex flex-col gap-8 justify-center items-center py-6 bg-gradient-to-b to-[#484848]  rounded-t-xl px-4 md:px-20 mt-40 text-nowrap">
          <div className="flex justify-around md:justify-between items-center w-full  md:px-20">
            <div className=" flex flex-col md:gap-5">
              <span  className=" md:scale-100 cursor-pointer md:pl-1 pt-4" >
              <Image
                        src={logo}
                        alt="logo"
                        height={50}
                        className=""
                    />
              </span>
              <span className=" text-white/100 opacity-0 md:opacity-100 text-xs md:text-base tracking-wider font-barlow">
                Designing Dreams, Building Realities
              </span>
            </div>
            <div className="flex flex-col gap-1 text-white/80 text-sm md:text-base tracking-wider font-sora">
              <span className="hover:text-white cursor-pointer" >Projects</span>
              <span className="hover:text-white cursor-pointer" >Services</span>
              <span className="hover:text-white cursor-pointer" >Contact Us</span>
            </div>
          </div>
          <div className="flex justify-between items-center w-full border-t-1 border-gray-txt/50 pt-4">
            <div className="flex justify-center items-end ">
            <span className="text-white/70 font-medium text-[11px] md:text-base tracking-wider font-sora">
              Website By <span className="md:pl-2 font-bold text-sm md:text-lg text-white/80 hover:text-white cursor-pointer">webzy studios</span>
            </span>
            </div>
            <div className="flex gap-1 md:gap-4">
              <a className="" href={"https://www.instagram.com/"}><InstagramF /></a>
              <a href=""><LinkedInF /></a>
              <a href={`http://mailto:ecoplastinterior2024@outlook.com`}><GmailF /></a>
            </div>
          </div>
        </section>  
        </>
  )
};

export default Footer;
