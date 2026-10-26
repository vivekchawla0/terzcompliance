import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface OrbitingPlanetProps {
  id: string;
  title: string;
  shortTitle: string;
  image: string;
  icon: LucideIcon;
  borderColor: string;
  glowColor: string;
  size: number;
  scale: number;
  opacity: number;
  zIndex: number;
  x: number;
  y: number;
}

export const OrbitingPlanet: React.FC<OrbitingPlanetProps> = ({
  title,
  shortTitle,
  image,
  icon: Icon,
  borderColor,
  glowColor,
  size,
  scale,
  opacity,
  zIndex,
  x,
  y,
}) => {
  const scaledSize = size * scale;
  
  return (
    <motion.div
      className="absolute flex flex-col items-center cursor-pointer group"
      style={{
        width: scaledSize,
        height: scaledSize + 30,
        left: "50%",
        top: "50%",
        x: x - scaledSize / 2,
        y: y - scaledSize / 2,
        zIndex,
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Planet sphere */}
      <div
        className="relative rounded-full overflow-hidden transition-all duration-300"
        style={{
          width: scaledSize,
          height: scaledSize,
          opacity,
          boxShadow: `0 0 ${20 * scale}px ${glowColor}40, 0 0 ${40 * scale}px ${glowColor}20`,
          border: `3px solid ${borderColor}`,
        }}
      >
        {/* Background image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark gradient overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          }}
        />
        
        {/* Icon at top */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2">
          <Icon 
            className="text-white drop-shadow-lg" 
            style={{ 
              width: scaledSize * 0.2, 
              height: scaledSize * 0.2,
              minWidth: 16,
              minHeight: 16,
            }} 
          />
        </div>
        
        {/* Text at bottom */}
        <div className="absolute bottom-2 left-0 right-0 text-center px-1">
          <p 
            className="text-white font-semibold leading-tight drop-shadow-lg"
            style={{ 
              fontSize: Math.max(10, scaledSize * 0.12),
            }}
          >
            {shortTitle}
          </p>
        </div>
        
        {/* Shine effect */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 30% at 30% 20%, rgba(255,255,255,0.3), transparent 60%)",
          }}
        />
      </div>
      
      {/* Full title on hover (visible for front planets) */}
      {scale > 1 && (
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-xs font-medium text-foreground/80 whitespace-nowrap bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-border/50"
        >
          {title}
        </motion.span>
      )}
    </motion.div>
  );
};
