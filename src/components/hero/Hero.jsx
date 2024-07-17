import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';

function Hero() {
  return (
    <motion.div
      className="hero-container"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    >
      <img 
        src="https://media.istockphoto.com/id/1389848442/photo/shot-of-a-young-man-standing-in-front-of-solar-panel-on-a-farm.jpg?s=612x612&w=0&k=20&c=ucOgYeVLM0qHNPo4wpTQJsQggZBc-0VpemoJD-pHiXU=" 
        alt="Solar Panels" 
        className="hero-image"
      />
    </motion.div>
  );
}

export default Hero;
