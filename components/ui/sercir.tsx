"use client";

type FeatureProps = {
  title: string;
  description: string;
};

export const CircleCard: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-6 text-center shadow-md hover:bg-gray-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};
