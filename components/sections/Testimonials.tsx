import { GoogleLogo, StarSVG } from "@/app/assets/Icons";
import { Reviews } from "@/lib/config";
import React from "react";
import Title from "../ui/Title";
import { motion } from "framer-motion";

const Testimonials = ({ testimonialsRef }: { testimonialsRef: React.RefObject<HTMLInputElement> }) => {
    return (
        <section id="testimonials" ref={testimonialsRef} className="w-full space-y-15">
            <Title>
                    What our customers say ?
            </Title>
                
            <div className="flex justify-center flex-wrap gap-10 w-full mt-10">
                { Reviews.map( review => <TestiCard data = {review} />)}  
            </div>
        </section>
  )
};

const TestiCard = ({ data }: {
    data: {
        id: number;
        name: string;
        image: string;
        review: string;
        posted: string;
        link: string;
    }
} )  => {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/50 hover:bg-white/10 border-1 border-black/15 rounded-2xl shadow-xl min-w-80 w-100 md:w-120 p-4 space-y-4"
        >
            <div className=" ">
                <FiveStars />
            </div>
            <p className="mt-2 text-sm text-gray-700">{data.review}</p>
            <div className="w-full flex justify-between">
                <div className="flex items-center">
                    <img src={data.image} alt="testimonial" className="w-8 h-8 rounded-full mr-2 md:mr-3" />
                    <p className="text-sm md:text-md font-semibold text-gray-900">{data.name}</p>
                </div>
                <div className=" flex gap-2 md:gap-3 items-center">
                    <p className="text-xs md:text-sm font-medium text-gray-500">{data.posted}</p>
                    <a href={data.link || "https://maps.app.goo.gl/ontwjb7Ra2cuFaNE8"}>
                        <GoogleLogo />
                    </a>
                </div>
            </div>

        </motion.div>
    );
}

const FiveStars = () => {
    return (
        <div className="flex items-center">
            <StarSVG />
            <StarSVG />
            <StarSVG />
            <StarSVG />
            <StarSVG />
        </div>
    )
}

export default Testimonials;

