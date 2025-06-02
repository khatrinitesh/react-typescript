import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VIDEOS } from '../constants/constants';

const VideoComp = () => {
    const [playingId, setPlayingId] = useState<number | null>(null);
  return (
    <>
      <div className="container">
      {VIDEOS.map(video => (
        <motion.div
          key={video.id}
          className="video-card"
          whileHover={{ scale: 1.05 }}
          onClick={() => setPlayingId(video.id === playingId ? null : video.id)}
          layout
        >
          {playingId === video.id ? (
            <AnimatePresence>
              <motion.video
                key="video"
                src={video.videoUrl}
                autoPlay
                controls
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              />
            </AnimatePresence>
          ) : (
            <>
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                style={{ width: '100%', display: 'block' }}
                loading="lazy"
              />
              <div className="video-title">{video.title}</div>
            </>
          )}
        </motion.div>
      ))}
    </div>
    </>
  );
}

export default VideoComp;
