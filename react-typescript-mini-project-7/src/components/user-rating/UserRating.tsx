import React, { useState } from "react";
import { motion } from 'framer-motion';
import { RATING_OPTIONS } from "../../constants/constants";

const UserRating: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
  };
  return (
    <>
      <div className="rating-container">
        <h2>Rate your experience</h2>
        <div className="stars">
          {RATING_OPTIONS.map(({ value }) => (
            <motion.span
              key={value}
              className={`star ${value <= (hovered || rating) ? "active" : ""}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClick(value)}
              onMouseEnter={() => setHovered(value)}
              onMouseLeave={() => setHovered(0)}
            >
              ★
            </motion.span>
          ))}
        </div>
        {rating > 0 && (
          <div className="rating-label">
            {RATING_OPTIONS.find((opt) => opt.value === rating)?.label}
          </div>
        )}
      </div>
    </>
  );
};

export default UserRating;
