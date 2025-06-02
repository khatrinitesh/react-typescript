import React from 'react';
import './style.css';
import { CARDS } from '../../constants/constants';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 80 },
  }),
};

const ZoomHover:React.FC = () => {
  return (
    <>
      <div className="container">
      {CARDS.map((card, index) => (
        <motion.div
          key={card.id}
          className="card"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  );
}

export default ZoomHover;
