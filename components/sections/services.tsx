import CircleCard from "@/components/ui/sercir";
import { ServicesImage } from "@/lib/config";

const services = [
  { image: { ServicesImage }, title: "Modular Kitchen" },
  { image: "/images/office-interiors.jpg", title: "Office Interiors" },
  { image: "/images/wardrobes.jpg", title: "Wardrobes" },
  { image: "/images/loft-coverings.jpg", title: "Loft Coverings" },
];

const Services = ({ servicesRef }: {servicesRef: React.RefObject<HTMLInputElement>}) => {
  return (
    <section id="services" ref={servicesRef} className="text-center pt-15 space-y-15">
        <h1 className="text-center text-3xl font-bold">
          Services we provide
        </h1>
      <div className="flex justify-center gap-20 flex-wrap">
        {ServicesImage.map((service, index) => (
          <CircleCard key={index} image={service.image} title={service.title} />
        ))}
      </div>
    </section>
  );
};

export default Services;
