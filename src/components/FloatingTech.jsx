import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingTech = () => {
  const technologies = [
    { name: 'Java', color: 'text-orange-400', delay: 0, x: 10, y: 15 },
    { name: 'React', color: 'text-cyan-400', delay: 0.5, x: 80, y: 20 },
    { name: 'Spring', color: 'text-green-400', delay: 1, x: 20, y: 60 },
    { name: 'Vue.js', color: 'text-emerald-400', delay: 1.5, x: 70, y: 70 },
    { name: 'Docker', color: 'text-blue-400', delay: 2, x: 40, y: 30 },
    { name: 'PostgreSQL', color: 'text-blue-500', delay: 2.5, x: 60, y: 50 },
    { name: 'TypeScript', color: 'text-blue-400', delay: 3, x: 30, y: 80 },
    { name: 'Linux', color: 'text-green-500', delay: 3.5, x: 85, y: 40 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`absolute ${tech.color} font-bold text-2xl md:text-3xl`}
          style={{
            left: `${tech.x}%`,
            top: `${tech.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: tech.delay,
          }}
        >
          {tech.name}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTech;
