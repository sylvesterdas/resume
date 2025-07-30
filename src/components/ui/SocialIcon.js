import { motion } from 'framer-motion';

export default function SocialIcon({ href, icon: IconComponent, tooltipText }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-14 h-14 flex items-center justify-center group"
    >
      {/* Rhombus background */}
      <div className="absolute w-full h-full border-2 border-accent transform rotate-45 transition-all duration-300 group-hover:border-opacity-60" />
      
      {/* Icon */}
      <IconComponent className="w-6 h-6 text-accent relative z-10 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-primary-dark text-text text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {tooltipText}
      </span>
    </a>
  );
}
