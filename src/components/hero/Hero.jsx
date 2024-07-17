import React from 'react';
import { motion } from 'framer-motion';
import './hero.css';

function Hero() {
  return (
    <div className='hero-container'>
    <motion.div
      className=""
      whileTap={{ scale: 0.95 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    >
    </motion.div>
    <div className='text'>
    <span className='hero-text'>
    Powering Progress with Solar Innovation
    </span>
    <p>Embrace the revolution of renewable energy with Galo Energy. From robust solar power plants to efficient solar water pumps,
         we're turning sunlight into a sustainable powerhouse for your daily needs</p>
    </div>
    <button className="button-37" role="button">Get Started</button>
    </div>

  );
}

export default Hero;
