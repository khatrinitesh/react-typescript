import React, { useEffect, useRef } from "react";
import { BEAM_CONFIGS, BOXES } from "../constants/constants";
import { motion } from "framer-motion";
import gsap from "gsap";

const BeamsBackground: React.FC = () => {
  const boxRefs = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      gsap.to(box, {
        y: 30,
        repeat: -1,
        yoyo: true,
        duration: 2 + Math.random(),
        ease: "sine.inOut",
        delay: index * 0.3,
      });
    });
  }, []);
  return (
    <div className="fixed inset-0 z-[1] overflow-hidden bg-black">
      {BOXES.map((box, index) => (
        <motion.div
          key={box.id}
          ref={(el) => {
            if (el) boxRefs.current[index] = el;
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 1 }}
          style={{
            position: "absolute",
            top: box.top,
            left: box.left,
            width: box.size,
            height: box.size,
            backgroundColor: box.color,
            borderRadius: 12,
          }}
        />
      ))}
    </div>
  );
};

export default BeamsBackground;
