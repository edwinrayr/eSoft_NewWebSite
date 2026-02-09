import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({ children, className, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={twMerge(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-esoft-accent/30 transition-colors",
        className
      )}
    >
      {/* Efecto de degradado al hacer Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-esoft-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}