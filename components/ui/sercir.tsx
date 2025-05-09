// "use client";

import { motion } from "framer-motion";
// type FeatureProps = {
//   title: string;
//   description: string;
// };

// export const CircleCard: React.FC<FeatureProps> = ({ title, description }) => {
//   return (
//     <div className="bg-gray-200 rounded-lg p-6 text-center shadow-md hover:bg-gray-300">
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-700">{description}</p>
//     </div>
//   );
// };

const CircleCard = ({ image, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0,  }}
      className="flex flex-col items-center">
      <div className="w-60 h-60 rounded-full overflow-hidden shadow-2xl border-2 border-gray-300">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <p className="mt-2 text-center font-semibold">{title}</p>
    </motion.div>
  );
};

export default CircleCard;
