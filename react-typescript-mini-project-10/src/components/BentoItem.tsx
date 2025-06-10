import React, { useEffect, useRef } from "react";
import type { BentoItem } from "../interface";
import { motion } from "framer-motion";
import gsap from "gsap";
import { bentoItems } from "../constants/constants";

const BentoItemComp: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {bentoItems.map((item) => (
        <BentoItemCard key={item.id} item={item} useGSAP={false} />
      ))}
    </div>
  );
};

export default BentoItemComp;

interface Props {
  item: BentoItem;
  useGSAP?: boolean;
}

export const BentoItemCard: React.FC<Props> = ({ item, useGSAP }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (useGSAP && ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [useGSAP]);

  const framerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const sizeClass = {
    small: "w-32 h-32",
    medium: "w-48 h-48",
    large: "w-64 h-64",
  }[item.size || "small"];

  return useGSAP ? (
    <div
      ref={ref}
      className={`rounded-lg p-4 text-white ${sizeClass}`}
      style={{ backgroundColor: item.bgColor }}
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  ) : (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={framerVariants}
      className={`rounded-lg p-4 text-white ${sizeClass}`}
      style={{ backgroundColor: item.bgColor }}
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.div>
  );
};
