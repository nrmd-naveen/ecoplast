import { servicesData } from "@/lib/config"
import { ArrowRight } from "lucide-react"
import { Card } from "../ui/card"
import { ProgressiveBlur } from "../ui/progressive-blur"
import { useEffect, useState } from "react"
import Image from "next/image"



export default function ServicesNew() {
  return (
    <main className="min-h-screen  py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          {/* <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-none">Our Services</Badge> */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 text-center">
            Our Services
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-5xl w-full py-2">
            Transform your space with our premium interior design services tailored to your unique style and needs.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
                  
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
          {servicesData.map((card, index) => (
            <ModernCard
            key={index}
            image={card.image}
            title={card.title}
            icon={card.icon}
            description={card.description}
            index={index}
            />
        ))}
        </div>
        </div>
      </div>
    </main>
  )
}

function ModernCard({
    image,
    title,
    icon: Icon,
    description,
    index,
}: {
  image: string
  title: string
  icon: React.ElementType
  description: string
  index: number
}) {
    const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the user is on mobile or desktop
  useEffect(() => {
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Example breakpoint for mobile
    };

    checkIfMobile(); // Check on load
    window.addEventListener('resize', checkIfMobile); // Re-check on resize

    return () => {
      window.removeEventListener('resize', checkIfMobile); // Clean up the event listener
    };
  }, []);
  
  useEffect(() => {
    // Intersection Observer to track when the card comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false); // Keep the state `false` if the card is out of view (for mobile)
          }
        });
      },
      { threshold: 0.6 } // Trigger when 10% of the element is in view
    );

    const cardElement = document.getElementById(`card-${index}`);
    if (cardElement) observer.observe(cardElement);

    return () => {
      if (cardElement) observer.unobserve(cardElement);
    };
  }, [index]);

  return (
    <Card
      className={`max-w-[360px] w-full group relative overflow-hidden rounded-xl border-none shadow-lg transition-all duration-500 ${
        isMobile && isInView ? 'hover:shadow-2xl hover:-translate-y-1' : ''
      } bg-white dark:bg-gray-800`}
      style={{ animationDelay: `${index * 100}ms` }}
      id={`card-${index}`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${isMobile && isInView ? 'scale-110' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10">
          <ProgressiveBlur direction="bottom" blurLayers={10} blurIntensity={0.3} />
        </div>
      </div>

      <div className="relative h-[350px] p-6 flex flex-col justify-end">
        <div className="mb-auto">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 transform transition-transform duration-500 group-hover:rotate-12">
            <Icon className="w-6 h-6" />
          </div>
        </div>

        {/* For mobile, use animation on scroll into view */}
        <div
          className={`transform transition-transform duration-500 ${
            isMobile && isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          } group-hover:translate-y-0 group-hover:opacity-100`} // Keep group-hover for desktop
        >
          <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
        </div>

        <div className="flex items-end justify-between">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <div
            className={`w-8 h-8 rounded-full bg-primary flex items-center justify-center transform transition-transform duration-500 ${
              isMobile && isInView ? 'translate-x-0' : 'translate-x-10'
            } group-hover:translate-x-0`}
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </Card>
  )
}

