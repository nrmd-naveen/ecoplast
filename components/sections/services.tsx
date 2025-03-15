import CircleCard from "@/components/ui/sercir";
import { ServicesImage } from "@/lib/config";

const services = [
  { image: { ServicesImage }, title: "Modular Kitchen" },
  { image: "/images/office-interiors.jpg", title: "Office Interiors" },
  { image: "/images/wardrobes.jpg", title: "Wardrobes" },
  { image: "/images/loft-coverings.jpg", title: "Loft Coverings" },
];

const Services = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold mb-6"> Our Services</h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {services.map((service, index) => (
          <CircleCard key={index} image={service.image} title={service.title} />
        ))}
      </div>
    </section>
  );
};

export default Services;
