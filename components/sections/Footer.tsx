
import Image from "next/image";
import { GmailF, InstagramF, LinkedInF } from "../../app/assets/Icons";
import logo from "../../app/assets/image.png";
import phone from "../../app/assets/icon/phone.png";
import whatsapp from "../../app/assets/icon/whatsapp.png";
import linkedin from "../../app/assets/icon/linkedin.png";
import youtube from "../../app/assets/icon/youtube.png";
import instagram from "../../app/assets/icon/instagram.png";
import facebook from "../../app/assets/icon/facebook.png";


const Footer = () => {
    return (
      <>
        <div className="mt-30">
          <div className="  flex justify-center items-center  xl:px-40">
            <FooterCard />

          </div>
        {/* <section id="footer" className="flex flex-col gap-8 justify-center items-center pb-6 bg-gradient-to-b from-[#747474]/50 to-[#484848] px-4 md:px-20  border-t-1 border-neutral-400/90 text-nowrap h-full overflow-y-hidden">
          {/* <div className="flex justify-around md:justify-between items-center w-full  md:px-20">
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
          </section>   */}
  </div>
        </>
  )
};

const FooterCard = () => {
  return (
    <div className="w-full rounded-t-4xl bg-gradient-to-t  to-[#96c8329c] from-[#747474]/10 p-5 pt-12 space-y-7">

    <div className="flex flex-col md:flex-row justify-between items-center w-full  gap-5 md:gap-0">
      <span className=" lg:pl-5 text-[#565656] opacity-100 text-[clamp(1.5rem,_8vw,_2.5rem)] lg:text-[40px] font-bold  font-barlow md:leading-12">
        Designing Dreams, <br></br> Building Realities
      </span>
      
      <div className="w-full h-full flex flex-col items-center justify-center md:w-1/2 md:flex-col "> 

        <span  className="pt-6 pb-5 md:pt-0 md:pb-5 md:scale-110 xl:scale-124 cursor-pointer " >
              <Image
              src={logo}
              alt="logo"
              height={70}
              className=""
              />
        </span>
          <div className="w-full max-w-108 flex font-semibold text-[#565656] justify-around gap-1 text-sm md:text-base  font-sora ">
            <a href="whatsapp://send?text=Hi, I'd like to inquire about interior design.&phone=+918015057532">

            <span className="hover:text-neutral-700 cursor-pointer flex justify-center items-center" >
            <Image
              src={whatsapp}
              alt="whatsapp"
              height={25}
              className="h-5 w-5 mr-1 md:mr-2"
              />
                +91 80150 57532</span>
            </a>
            <a href="tel:8015057532">
            <span className="hover:text-neutral-700 cursor-pointer flex" >
              <Image
              src={phone}
              alt="phone"
              height={25}
              className="w-5 h-5 mr-1 md:mr-2" 
              />
              +91 80150 57532</span>
            </a>
          {/* <span className="hover:text-white cursor-pointer" >Contact Us</span> */}
          </div>
          <div className="w-full flex justify-around pb-2 max-w-114 pt-10 md:pt-5 md:pb-2">
            <a className="" href={"https://www.instagram.com/ecoplastinteriors?igsh=MTZzbmk3ZHVsaXVwaA=="}>
              <Image
              src={instagram}
              alt="instagram"
              height={25}
              className="h-8.5 w-8.5 mr-1 md:mr-2 hover:scale-105"
              /></a>
            <a className="" href={"https://www.facebook.com/share/1A8qt72yv9/"}>
              <Image
              src={facebook}
              alt="facebook"
              height={25}
              className="h-8.5 w-8.5 mr-1 md:mr-2 hover:scale-105"
              /></a>
            <a className="" href={"https://youtube.com/@ecoplastinteriors?si=_VYiYLbzGbjyS5ul"}>
              <Image
              src={youtube}
              alt="youtube"
              height={25}
              className="h-8.5 w-8.5 mr-1 md:mr-2 hover:scale-105"
              /></a>
            <a className="" href={"https://www.instagram.com/"}>
              <Image
              src={linkedin}
              alt="linkedin"
              height={25}
              className="h-8.5 w-8.5 mr-1 md:mr-2 hover:scale-105"
              /></a>
              {/* <a href=""><LinkedInF /></a>
              <a href={`http://mailto:ecoplastinterior2024@outlook.com`}><GmailF /></a> */}
            </div> 
      </div>
      </div>
      <div className="flex justify-between md:justify-around items-center w-full pt-4 text-nowrap text-neutral-600/50 border-t-1 border-neutral-400/90 text-xs md:text-base tracking-wider font-sora">
        
        <div className="flex justify-center items-end">
          <span className=" font-medium text-[11px] md:text-base tracking-wider font-sora hover:text-neutral-600/70 ">
            Website By <span className="md:pl-2 font-bold text-sm md:text-lg text-neutral-800/55 hover:text-neutral-800/80 cursor-pointer">webzy studios</span>
          </span>
        </div>

        <div className="flex justify-center ">
          <span className="font-medium text-[11px] md:text-base tracking-wider font-sora hover:text-neutral-600/70 ">
            © 2025 Ecoplast. <span className="hidden md:inline"> All Rights Reserved.</span>
          </span>
        </div>
      </div>
      {/* <div <div className="flex justify-center items-end ">
            <span className="text-white/70 font-medium text-[11px] md:text-base tracking-wider font-sora">
              Website By <span className="md:pl-2 font-bold text-sm md:text-lg text-white/80 hover:text-white cursor-pointer">webzy studios</span>
            </span>
            </div>className="flex justify-between items-center w-full pt-4">
            
            <div className="flex gap-1 md:gap-4">
              <a className="" href={"https://www.instagram.com/"}><InstagramF /></a>
              <a href=""><LinkedInF /></a>
              <a href={`http://mailto:ecoplastinterior2024@outlook.com`}><GmailF /></a>
            </div>
          </div> */}
    </div>
    
  )
}
export default Footer;
