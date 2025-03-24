
import Image from "next/image";
import { GmailF, InstagramF, LinkedInF } from "../../app/assets/Icons";
import logo from "../../app/assets/image.png";
import phone from "../../app/assets/icon/phone.png";
import whatsapp from "../../app/assets/icon/whatsapp.png";

const Footer = () => {
    return (
      <>
        <div className="mt-20">
          <div className="  flex justify-center items-center  lg:px-40">
            <FooterCard />

          </div>
        <section id="footer" className="flex flex-col gap-8 justify-center items-center pb-6 bg-gradient-to-b from-[#747474]/50 to-[#484848] px-4 md:px-20 text-nowrap">
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
              </div> */}
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
  </div>
        </>
  )
};

const FooterCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full rounded-t-4xl bg-gradient-to-t  to-[#96c8329c] from-[#747474]/10 p-5 py-10 md:p-15 gap-5 md:gap-0">
      <span className=" lg:pl-5 text-[#565656] opacity-100 text-3xl  lg:text-[40px] font-bold  font-barlow md:leading-12">
        Designing Dreams, <br></br> Building Realities
      </span>
      
      <div className="w-full h-full flex flex-col items-center justify-center md:w-1/2 md:flex-col "> 

      <span  className="pt-6 pb-3 md:pt-0 md:pb-5 md:scale-110 cursor-pointer " >
            <Image
            src={logo}
            alt="logo"
            height={70}
            className=""
            />
      </span>
        <div className="w-full max-w-108 flex font-semibold text-[#565656] justify-around gap-1 text-sm md:text-base  font-sora">
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
      </div>
    </div>
  )
}
export default Footer;
