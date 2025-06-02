import React, { useEffect, useState } from 'react';
import './style.css';
import { TYPEWRITER_MESSAGES } from '../../constants/constants';

const Typewriter = () => {
     const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  const current = TYPEWRITER_MESSAGES[currentIndex];

   useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < current.text.length) {
        setDisplayText(prev => prev + current.text.charAt(charIndex));
        setCharIndex(i => i + 1);
      } else {
        // Wait a bit and move to next message
        setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % TYPEWRITER_MESSAGES.length);
          setCharIndex(0);
          setDisplayText('');
        }, 2000);
      }
    }, current.speed);

    return () => clearTimeout(timeout);
  }, [charIndex, current.text, current.speed, currentIndex]);

  return (
    <>
       <div className="typewriter-container">
      {displayText}
      <span className="cursor">|</span>
    </div>
    </>
  );
}

export default Typewriter;
