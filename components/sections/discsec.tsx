import { FeatureCard } from "@/components/ui/discover";
import { features } from "@/lib/config";

const FeatureGrid: React.FC = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold mb-0">
        Discover What Sets Us Apart
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </>
  );
};

export default FeatureGrid;
