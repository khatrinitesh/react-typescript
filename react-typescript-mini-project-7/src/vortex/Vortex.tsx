import React from 'react';
import { VORTEX_ITEMS } from '../constants/constants';
import { motion } from 'framer-motion';


const radius = 140; // radius of circle for vortex items

const Vortex:React.FC = () => {

    const angleStep = (2 * Math.PI) / VORTEX_ITEMS.length;
    
  return (
    <>
     <motion.div
      className="vortex-container"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
    >
      {VORTEX_ITEMS.map((item, index) => {
        const angle = index * angleStep;
        // Calculate position using polar to cartesian conversion
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.div
            key={item.id}
            className="vortex-item"
            style={{
              top: `calc(50% + ${y}px - 50px)`, // center + offset - half height
              left: `calc(50% + ${x}px - 50px)`, // center + offset - half width
              backgroundColor: item.color,
              color: '#fff',
              boxShadow: `0 8px 24px ${item.color}88`,
            }}
            whileHover={{ scale: 1.2, zIndex: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {item.label}
          </motion.div>
        );
      })}
    </motion.div> 
    </>
  );
}

export default Vortex;
