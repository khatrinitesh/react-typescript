import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  LINE_COLOR,
  LINE_COUNT,
  LINE_SPACING,
  LINE_WIDTH,
} from "../constants/constants";
import { bgLineStore } from "../store/bgLinestore";
import gsap from "gsap";

const BgLine: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const show = bgLineStore((state) => state.showBackgroundLines);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {Array.from({ length: LINE_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: `${i * LINE_SPACING}px`,
            width: `${LINE_WIDTH}px`,
            height: "100%",
            backgroundColor: LINE_COLOR,
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
};

export default BgLine;
