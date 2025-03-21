import { FeatureCard } from "@/components/ui/discover";
import { features } from "@/lib/config";

const FeatureGrid = ({featuresRef}: {featuresRef: React.RefObject<HTMLInputElement>}) => {
  return (
    <>
      <section id="section" ref={featuresRef} className="space-y-15">
        <div className="text-center text-3xl font-bold">
          Discover What Sets Us Apart
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeatureGrid;
