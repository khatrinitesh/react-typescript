import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../assets/css/carousel.css';
// library
import { motion } from 'framer-motion';

const SliderComp:React.FC = () => {

    
  const [isDragging, setIsDragging] = useState(false);


  return (
    <div className="overflow-x-hidden">
      <div className={`transition-all duration-300 `}>
        <Swiper
        // spacebetween
          spaceBetween={30}
        //   slidesperview
          slidesPerView={2.5}
        //   loop
          loop={true}
        //   slidermove
          onSliderMove={() => setIsDragging(true)}
        //   touch end
          onTouchEnd={() => setIsDragging(true)}
        //   onmouseup
          onMouseUp={() => setIsDragging(true)}
        //   responsive
          breakpoints={{
            0: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 2.5,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={item}>
              <motion.div
                className="slide-card mx-8 neumorphic my-[20px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: item * 0.1 }}
              >
                Slide {item}
              </motion.div>
            </SwiperSlide>  
        ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SliderComp;
