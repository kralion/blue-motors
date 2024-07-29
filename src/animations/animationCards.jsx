import React from 'react';
import { motion } from 'framer-motion';

const animationCard = ({  delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: delay }}
      style={{
        background: 'white',
        padding: '20px',
        margin: '10px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      
    </motion.div>
  );
};

export default animationCard;