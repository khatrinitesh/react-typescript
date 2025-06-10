import React from "react";
import { AURORA_LAYERS } from "../constants/constants";
import { motion } from "framer-motion";
import { useAuroraStore } from "../store/useAuroraStore";

const AuroraBg: React.FC = () => {
  const toggleAurora = useAuroraStore((state) => state.toggleAurora);
  return (
    <>
      <div className="relative min-h-screen bg-black text-white">
        <AuroraComp />
        <div className="z-10 relative p-10">
          <h1 className="text-4xl font-bold">Aurora Background Example</h1>
          <button
            onClick={toggleAurora}
            className="mt-6 px-4 py-2 bg-white text-black rounded "
          >
            Toggle Aurora
          </button>
        </div>
      </div>
    </>
  );
};

export default AuroraBg;

function AuroraComp() {
  const { showAurora } = useAuroraStore();

  if (!showAurora) return null;
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {AURORA_LAYERS.map((layer, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5,
          }}
          style={{
            position: "absolute",
            top: layer.top,
            left: layer.left,
            width: layer.size,
            height: layer.size,
            background: `radial-gradient(circle at center, ${layer.color1}, ${layer.color2})`,
            filter: `blur(${layer.blur}px)`,
            borderRadius: "50%",
            opacity: 0.4,
            zIndex: -1,
          }}
        />
      ))}
    </div>
  );
}
