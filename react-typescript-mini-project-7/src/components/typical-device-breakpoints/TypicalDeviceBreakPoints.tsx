import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const TypicalDeviceBreakPoints = () => {
  return (
    <>
       <motion.div
      className="responsive-box"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2>Responsive Box</h2>
      <p>This box changes color at different device widths.</p>
    </motion.div> 
    </>
  );
}

export default TypicalDeviceBreakPoints;
