import React, { useState } from "react";
import type { AccordionItem } from "../interface";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  items: AccordionItem[];
}

const AccordionComp: React.FC<Props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div key={item.id} className="border rounded-md shadow-sm bg-white">
          <button
            className="w-full flex items-center justify-between p-4 font-semibold text-left"
            onClick={() => toggle(index)}
          >
            {item.title}
            {activeIndex === index ? (
              <FaChevronUp className="text-gray-600" />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </button>

          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden px-4 pb-4 text-gray-700"
              >
                <p>{item.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default AccordionComp;
