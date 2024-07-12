import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const line1Variants = {
    closed: { d: "M4 6 L20 6", rotate: 0, y: 0 },
    open: { d: "M4 6 L20 18", rotate: 45, y: 6 },
  };

  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const line3Variants = {
    closed: { d: "M4 18 L20 18", rotate: 0, y: 0 },
    open: { d: "M4 18 L20 6", rotate: -45, y: -6 },
  };

  return (
    <div className='h-[150px]' onClick={toggleMenu} style={{ cursor: 'pointer', width: '24px', height: '24px' }}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
      >
        <motion.line
          x1="4"
          y1="6"
          x2="20"
          y2="6"
          stroke="white"
          strokeWidth="2"
          variants={line1Variants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          stroke="white"
          strokeWidth="2"
          variants={line2Variants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.line
          x1="4"
          y1="18"
          x2="20"
          y2="18"
          stroke="white"
          strokeWidth="2"
          variants={line3Variants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </motion.svg>
    </div>
  );
};

export default MenuToggle;
