import * as React from "react";
import { motion } from "framer-motion";

interface EarthGlobeProps {
  size?: number;
}

export const EarthGlobe: React.FC<EarthGlobeProps> = ({ size = 700 }) => {
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ width: size, height: size, zIndex: 50 }}
    >
      {/* Outer atmosphere glow - Layer 7 */}
      <div 
        className="absolute rounded-full animate-atmosphere-pulse"
        style={{
          width: size * 1.25,
          height: size * 1.25,
          background: `radial-gradient(circle at 50% 50%,
            transparent 35%,
            hsla(200, 85%, 60%, 0.1) 40%,
            hsla(200, 80%, 55%, 0.25) 45%,
            hsla(210, 85%, 50%, 0.15) 52%,
            transparent 60%
          )`,
          filter: "blur(30px)",
        }}
      />
      
      {/* Main globe container */}
      <motion.div
        className="relative rounded-full overflow-hidden"
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          animation: "globe-spin 120s linear infinite",
        }}
      >
        {/* Layer 1: Core sphere with deep ocean gradient */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(circle at 65% 35%, 
                hsl(205, 85%, 50%) 0%, 
                hsl(208, 82%, 42%) 15%,
                hsl(212, 78%, 35%) 30%, 
                hsl(215, 75%, 28%) 45%, 
                hsl(218, 72%, 20%) 60%,
                hsl(222, 68%, 14%) 75%,
                hsl(225, 65%, 8%) 100%
              )
            `,
          }}
        />
        
        {/* Layer 2: Ocean specular reflections */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(ellipse 30% 20% at 55% 30%,
                hsla(200, 90%, 70%, 0.3) 0%,
                transparent 70%
              ),
              radial-gradient(ellipse 20% 15% at 70% 45%,
                hsla(195, 85%, 65%, 0.2) 0%,
                transparent 60%
              )
            `,
          }}
        />
        
        {/* Layer 3: Detailed continent patterns */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          style={{ opacity: 0.92 }}
        >
          <defs>
            {/* Continent gradient for 3D effect */}
            <radialGradient id="continentGradient" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="hsl(140, 55%, 45%)" />
              <stop offset="50%" stopColor="hsl(145, 50%, 35%)" />
              <stop offset="100%" stopColor="hsl(150, 45%, 25%)" />
            </radialGradient>
            <radialGradient id="desertGradient" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="hsl(35, 45%, 50%)" />
              <stop offset="100%" stopColor="hsl(30, 40%, 35%)" />
            </radialGradient>
          </defs>
          
          {/* North America */}
          <path
            d="M 18 22 Q 22 15 32 18 Q 42 20 45 28 Q 46 38 40 42 Q 32 48 25 44 Q 18 40 16 32 Q 15 26 18 22"
            fill="url(#continentGradient)"
          />
          <path
            d="M 20 35 Q 22 30 28 32 Q 34 35 32 42 Q 28 46 24 44 Q 20 42 20 35"
            fill="hsl(148, 48%, 38%)"
          />
          
          {/* Central America */}
          <path
            d="M 26 48 Q 30 46 33 50 Q 35 56 30 58 Q 26 56 26 48"
            fill="hsl(142, 50%, 36%)"
          />
          
          {/* South America */}
          <path
            d="M 30 58 Q 38 54 42 62 Q 46 72 40 82 Q 32 86 28 78 Q 24 68 28 60 Q 29 58 30 58"
            fill="url(#continentGradient)"
          />
          
          {/* Europe */}
          <path
            d="M 48 20 Q 54 16 62 18 Q 68 22 66 30 Q 62 36 55 34 Q 48 32 46 26 Q 45 22 48 20"
            fill="hsl(146, 48%, 40%)"
          />
          
          {/* Africa */}
          <path
            d="M 52 36 Q 62 32 72 38 Q 78 48 76 62 Q 72 76 62 80 Q 52 78 48 68 Q 44 55 48 44 Q 50 38 52 36"
            fill="url(#continentGradient)"
          />
          {/* Sahara Desert */}
          <path
            d="M 54 40 Q 64 36 70 42 Q 72 48 68 52 Q 60 54 54 50 Q 52 46 54 40"
            fill="url(#desertGradient)"
          />
          
          {/* Asia - Main landmass */}
          <path
            d="M 60 18 Q 72 12 85 16 Q 94 24 92 38 Q 88 48 78 52 Q 68 54 62 46 Q 56 38 58 28 Q 58 22 60 18"
            fill="url(#continentGradient)"
          />
          {/* Middle East */}
          <path
            d="M 70 36 Q 76 34 78 40 Q 78 46 74 48 Q 70 46 70 42 Q 70 38 70 36"
            fill="url(#desertGradient)"
          />
          
          {/* India */}
          <path
            d="M 76 52 Q 82 50 84 56 Q 85 64 80 68 Q 74 66 74 60 Q 74 54 76 52"
            fill="hsl(145, 52%, 38%)"
          />
          
          {/* Southeast Asia */}
          <path
            d="M 84 54 Q 90 52 92 58 Q 93 64 88 66 Q 84 64 84 58 Q 84 56 84 54"
            fill="hsl(148, 50%, 36%)"
          />
          
          {/* Australia */}
          <path
            d="M 80 68 Q 92 64 96 72 Q 98 82 90 88 Q 80 90 76 82 Q 74 74 80 68"
            fill="url(#desertGradient)"
          />
          
          {/* Greenland */}
          <ellipse cx="38" cy="12" rx="8" ry="5" fill="hsl(200, 20%, 85%)" opacity="0.9" />
          
          {/* Antarctica hint */}
          <ellipse cx="50" cy="96" rx="35" ry="6" fill="hsl(200, 15%, 90%)" opacity="0.5" />
          
          {/* Japan */}
          <ellipse cx="92" cy="32" rx="3" ry="6" fill="hsl(146, 48%, 38%)" />
          
          {/* UK */}
          <ellipse cx="48" cy="24" rx="2" ry="3" fill="hsl(144, 50%, 40%)" />
          
          {/* New Zealand */}
          <ellipse cx="96" cy="86" rx="2" ry="4" fill="hsl(148, 52%, 38%)" />
        </svg>
        
        {/* Layer 4: City lights on dark side */}
        <div 
          className="absolute inset-0 rounded-full animate-city-twinkle"
          style={{
            background: `
              radial-gradient(1.5px 1.5px at 18% 35%, hsla(35, 100%, 60%, 0.9) 50%, transparent 100%),
              radial-gradient(2px 2px at 22% 38%, hsla(40, 100%, 55%, 0.8) 50%, transparent 100%),
              radial-gradient(1px 1px at 25% 42%, hsla(30, 100%, 65%, 0.7) 50%, transparent 100%),
              radial-gradient(1.5px 1.5px at 20% 45%, hsla(35, 100%, 60%, 0.85) 50%, transparent 100%),
              radial-gradient(2px 2px at 15% 50%, hsla(40, 100%, 55%, 0.75) 50%, transparent 100%),
              radial-gradient(1px 1px at 28% 55%, hsla(35, 100%, 60%, 0.8) 50%, transparent 100%),
              radial-gradient(1.5px 1.5px at 24% 60%, hsla(30, 100%, 65%, 0.7) 50%, transparent 100%),
              radial-gradient(1px 1px at 32% 52%, hsla(40, 100%, 55%, 0.65) 50%, transparent 100%),
              radial-gradient(2px 2px at 35% 65%, hsla(35, 100%, 60%, 0.8) 50%, transparent 100%),
              radial-gradient(1.5px 1.5px at 30% 70%, hsla(30, 100%, 65%, 0.7) 50%, transparent 100%)
            `,
            opacity: 0.8,
            maskImage: `linear-gradient(135deg, 
              rgba(0,0,0,1) 0%, 
              rgba(0,0,0,0.8) 35%,
              rgba(0,0,0,0) 50%,
              rgba(0,0,0,0) 100%
            )`,
            WebkitMaskImage: `linear-gradient(135deg, 
              rgba(0,0,0,1) 0%, 
              rgba(0,0,0,0.8) 35%,
              rgba(0,0,0,0) 50%,
              rgba(0,0,0,0) 100%
            )`,
          }}
        />
        
        {/* Layer 5: Cloud layer with subtle animation */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            animation: "cloud-drift 60s linear infinite",
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            style={{ opacity: 0.25 }}
          >
            {/* Cloud formations */}
            <ellipse cx="25" cy="22" rx="18" ry="5" fill="white" />
            <ellipse cx="65" cy="18" rx="15" ry="4" fill="white" />
            <ellipse cx="80" cy="28" rx="12" ry="4" fill="white" />
            <ellipse cx="40" cy="35" rx="20" ry="6" fill="white" />
            <ellipse cx="55" cy="50" rx="22" ry="7" fill="white" />
            <ellipse cx="20" cy="55" rx="14" ry="5" fill="white" />
            <ellipse cx="75" cy="55" rx="16" ry="5" fill="white" />
            <ellipse cx="35" cy="70" rx="18" ry="5" fill="white" />
            <ellipse cx="70" cy="72" rx="15" ry="4" fill="white" />
            <ellipse cx="50" cy="80" rx="20" ry="5" fill="white" />
          </svg>
        </div>
        
        {/* Layer 6: Day/Night Terminator line */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `linear-gradient(135deg,
              transparent 0%,
              transparent 35%,
              hsla(220, 50%, 10%, 0.15) 42%,
              hsla(220, 50%, 8%, 0.35) 48%,
              hsla(225, 55%, 5%, 0.55) 55%,
              hsla(225, 60%, 3%, 0.75) 65%,
              hsla(230, 65%, 2%, 0.9) 80%
            )`,
          }}
        />
        
        {/* Specular highlight - strong sunlight */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 50% 40% at 65% 28%, 
                hsla(0, 0%, 100%, 0.55) 0%, 
                hsla(0, 0%, 100%, 0.25) 25%,
                hsla(0, 0%, 100%, 0.08) 50%,
                transparent 70%
              )
            `,
          }}
        />
        
        {/* Secondary highlight for depth */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 25% 18% at 78% 18%, 
                hsla(0, 0%, 100%, 0.2) 0%, 
                transparent 60%
              )
            `,
          }}
        />
        
        {/* Deep shadow on dark side */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 65% 55% at 20% 85%, 
                hsla(225, 50%, 3%, 0.6) 0%, 
                hsla(225, 45%, 5%, 0.3) 40%, 
                transparent 70%
              )
            `,
          }}
        />
        
        {/* Inner edge shadow for spherical depth */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: `
              inset -25px -25px 80px hsla(225, 50%, 5%, 0.5), 
              inset 15px 15px 50px hsla(200, 80%, 90%, 0.12)
            `,
          }}
        />
      </motion.div>
      
      {/* Inner atmosphere rim - Layer 6 */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 50% 50%,
            transparent 46%,
            hsla(200, 85%, 65%, 0.15) 48%,
            hsla(200, 80%, 60%, 0.35) 49.5%,
            hsla(210, 85%, 55%, 0.2) 51%,
            transparent 53%
          )`,
        }}
      />
      
      {/* Outer rim glow for dramatic effect */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size,
          height: size,
          boxShadow: `
            0 0 40px hsla(200, 80%, 60%, 0.4),
            0 0 80px hsla(200, 85%, 55%, 0.25),
            0 0 120px hsla(210, 80%, 50%, 0.15),
            0 0 180px hsla(210, 85%, 45%, 0.08)
          `,
        }}
      />
    </div>
  );
};
