"use client";

import { motion } from "framer-motion";


type FeatureProps = {
  title: string;
  description: string;
};

export const FeatureCard: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}

      className="bg-gray-200 rounded-lg p-6 text-center shadow-md hover:bg-gray-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};
