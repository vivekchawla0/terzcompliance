import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import { Stethoscope, FlaskConical, Sparkles, Scale, FileCheck, Recycle, LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Import service images
import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";

interface Service {
  id: string;
  title: string;
  shortTitle: string;
  image: string;
  icon: LucideIcon;
  borderColor: string;
  glowColor: string;
}

const services: Service[] = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    shortTitle: "MD",
    image: medicalDevicesImg,
    icon: Stethoscope,
    borderColor: "#3B82F6",
    glowColor: "#3B82F6",
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    shortTitle: "IVD",
    image: ivdImg,
    icon: FlaskConical,
    borderColor: "#14B8A6",
    glowColor: "#14B8A6",
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    shortTitle: "Cosmetics",
    image: cosmeticsImg,
    icon: Sparkles,
    borderColor: "#EC4899",
    glowColor: "#EC4899",
  },
  {
    id: "lmpc",
    title: "Legal Metrology",
    shortTitle: "LMPC",
    image: lmpcImg,
    icon: Scale,
    borderColor: "#F59E0B",
    glowColor: "#F59E0B",
  },
  {
    id: "iec",
    title: "Import Export Code",
    shortTitle: "IEC",
    image: iecImg,
    icon: FileCheck,
    borderColor: "#22C55E",
    glowColor: "#22C55E",
  },
  {
    id: "epr",
    title: "EPR Compliance",
    shortTitle: "EPR",
    image: eprImg,
    icon: Recycle,
    borderColor: "#6366F1",
    glowColor: "#6366F1",
  },
];

interface ArcOrbitSystemProps {
  earthVisibleHeight: string; // Height of visible Earth portion (e.g., "55vh")
}

export const ArcOrbitSystem: React.FC<ArcOrbitSystemProps> = ({ 
  earthVisibleHeight 
}) => {
  const isMobile = useIsMobile();
  const [time, setTime] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Calculate dimensions from viewport
  useEffect(() => {
    const updateDimensions = () => {
      const vh = parseInt(earthVisibleHeight);
      setDimensions({
        width: window.innerWidth,
        height: (vh / 100) * window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [earthVisibleHeight]);

  // Configuration based on viewport - recalculates on resize
  const config = useMemo(() => {
    const vw = dimensions.width;
    const isSmall = vw < 640;
    const isMedium = vw >= 640 && vw < 1024;
    
    // Responsive orbit dimensions
    let orbitWidth: number;
    let orbitHeight: number;
    let planetSize: number;
    
    if (isSmall) {
      // Mobile - 50% larger icons, higher orbit
      orbitWidth = vw * 0.65;
      orbitHeight = 100; // Moved higher (was 50)
      planetSize = 75;   // 50% larger (was 50)
    } else if (isMedium) {
      // Tablet - 50% larger icons, higher orbit
      orbitWidth = vw * 0.5;
      orbitHeight = 140; // Moved higher (was 70)
      planetSize = 105;  // 50% larger (was 70)
    } else {
      // Desktop - 50% larger icons, higher orbit
      orbitWidth = vw * 0.4;
      orbitHeight = 180; // Moved higher (was 90)
      planetSize = 128;  // 50% larger (was 85)
    }
    
    return {
      orbitWidth,
      orbitHeight,
      planetSize,
      arcStartAngle: 165,
      arcEndAngle: 15,
      rotationSpeed: 5,
    };
  }, [dimensions.width]);

  // Animation loop
  useEffect(() => {
    let animationId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      setTime(elapsed);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const containerHeight = dimensions.height;
  
  // Position where Earth curve starts
  
  // Calculate planet positions - moving LEFT to RIGHT along the arc
  const getPlanetPosition = (index: number) => {
    const totalPlanets = services.length;
    
    // Full arc span in degrees
    const arcSpan = config.arcStartAngle - config.arcEndAngle; // 160 degrees
    
    // Spacing between planets
    const planetSpacing = 45; // degrees between each planet
    
    // Total animation cycle
    const fullCycleAngle = totalPlanets * planetSpacing;
    
    // Each planet starts at a different offset
    const startOffset = index * planetSpacing;
    
    // Animated position - moves from LEFT to RIGHT
    const animatedProgress = (time * config.rotationSpeed) % fullCycleAngle;
    
    // Calculate current angle on the arc
    const rawAngle = config.arcStartAngle - ((startOffset + animatedProgress) % fullCycleAngle);
    
    // Normalize angle to handle wrapping
    let positionAngle = rawAngle;
    if (positionAngle < config.arcEndAngle - 30) {
      positionAngle += fullCycleAngle;
    }
    
    // Calculate x, y - elliptical arc
    const angleRad = (positionAngle * Math.PI) / 180;
    const x = Math.cos(angleRad) * config.orbitWidth;
    const y = -Math.sin(angleRad) * config.orbitHeight;
    
    // Visibility: fade in from left edge, fade out at right edge
    let opacity = 1;
    let visible = true;
    const fadeZone = 20;
    
    if (positionAngle > config.arcStartAngle) {
      const overshoot = positionAngle - config.arcStartAngle;
      opacity = Math.max(0, 1 - overshoot / fadeZone);
      if (opacity <= 0) visible = false;
    } else if (positionAngle < config.arcEndAngle) {
      const overshoot = config.arcEndAngle - positionAngle;
      opacity = Math.max(0, 1 - overshoot / fadeZone);
      if (opacity <= 0) visible = false;
    }
    
    // Scale: planets in center appear larger (closer)
    const distanceFromCenter = Math.abs(positionAngle - 90);
    const scale = 1 + (1 - distanceFromCenter / 90) * 0.3; // 1.0 to 1.3
    
    // Z-index: planets at center of arc (90°) are in front
    const zIndex = visible ? Math.round(50 - distanceFromCenter / 3) : 20;
    
    return { x, y, opacity, zIndex, visible, scale, angle: positionAngle };
  };

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-visible"
      style={{ zIndex: 40 }}
    >
      {/* Orbit path indicator (subtle dashed arc) */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          bottom: 0,
          width: config.orbitWidth * 2 + 100,
          height: config.orbitHeight + containerHeight,
          transform: "translateX(-50%)",
          opacity: 0.15,
        }}
        viewBox={`0 0 ${config.orbitWidth * 2 + 100} ${config.orbitHeight + containerHeight}`}
      >
        <ellipse
          cx={config.orbitWidth + 50}
          cy={config.orbitHeight + containerHeight}
          rx={config.orbitWidth}
          ry={config.orbitHeight}
          fill="none"
          stroke="hsla(200, 80%, 60%, 0.6)"
          strokeWidth="1.5"
          strokeDasharray="12 6"
        />
      </svg>

      {/* Orbiting service planets */}
      {services.map((service, index) => {
        const pos = getPlanetPosition(index);
        const Icon = service.icon;
        const scaledSize = config.planetSize * pos.scale;
        
        if (!pos.visible && pos.opacity <= 0) return null;

        return (
          <div
            key={service.id}
            className="absolute pointer-events-auto cursor-pointer group"
            style={{
              bottom: containerHeight - pos.y - scaledSize / 2,
              left: `calc(50% + ${pos.x}px - ${scaledSize / 2}px)`,
              width: scaledSize,
              height: scaledSize,
              opacity: pos.opacity,
              zIndex: pos.zIndex,
              transition: "opacity 0.2s ease-out",
            }}
          >
            {/* Planet sphere */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110"
              style={{
                boxShadow: `0 0 20px ${service.glowColor}50, 0 0 40px ${service.glowColor}30`,
                border: `3px solid ${service.borderColor}`,
              }}
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                }}
              />

              {/* Icon at top */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2">
                <Icon
                  className="text-white drop-shadow-lg"
                  style={{
                    width: config.planetSize * 0.24,
                    height: config.planetSize * 0.24,
                    minWidth: 14,
                    minHeight: 14,
                  }}
                />
              </div>

              {/* Text at bottom */}
              <div className="absolute bottom-1.5 left-0 right-0 text-center px-1">
                <p
                  className="text-white font-semibold leading-tight drop-shadow-lg"
                  style={{
                    fontSize: Math.max(9, config.planetSize * 0.14),
                  }}
                >
                  {service.shortTitle}
                </p>
              </div>

              {/* Shine effect */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 50% 30% at 30% 20%, rgba(255,255,255,0.35), transparent 60%)",
                }}
              />
            </div>

            {/* Title tooltip on hover */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
              <span className="text-xs font-medium text-white bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-lg">
                {service.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
