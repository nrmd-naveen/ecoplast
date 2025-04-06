"use client";

import { motion } from "framer-motion";


type FeatureProps = {
  title: string;
  description: string;
};

export const FeatureCard: React.FC<FeatureProps> = ({ title, description, Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#8ce02c50] rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#8ce02c74] dark:hover:bg-gray-800"
    >
      {/* Icon Section */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-full border-2 border-[#80cb2abc] bg-[#8ce02c80] flex items-center justify-center shadow-md transform transition-all duration-300 hover:scale-110">
          <Icon className="w-6 h-6 text-[#4d8f1f] dark:text-[#b7e7b2]" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};
