import { FeatureCard } from "@/components/ui/discover";
import { features } from "@/lib/config";
import Title from "../ui/Title";

const FeatureGrid = ({featuresRef}: {featuresRef: React.RefObject<HTMLInputElement>}) => {
  return (
    <>
      <section id="section" ref={featuresRef} className="">
        <Title>
          Discover What Sets Us Apart
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeatureGrid;
