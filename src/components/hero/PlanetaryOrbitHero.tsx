import * as React from "react";
import { useEffect, useState } from "react";
import { Stethoscope, FlaskConical, Sparkles, Scale, FileCheck, Recycle } from "lucide-react";
import { OrbitingPlanet } from "./OrbitingPlanet";
import { useIsMobile } from "@/hooks/use-mobile";

// Import service images
import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";

const services = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    shortTitle: "MD",
    image: medicalDevicesImg,
    icon: Stethoscope,
    borderColor: "#3B82F6",
    glowColor: "#3B82F6",
    startAngle: 270,
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    shortTitle: "IVD",
    image: ivdImg,
    icon: FlaskConical,
    borderColor: "#14B8A6",
    glowColor: "#14B8A6",
    startAngle: 90,
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    shortTitle: "Cosmetics",
    image: cosmeticsImg,
    icon: Sparkles,
    borderColor: "#EC4899",
    glowColor: "#EC4899",
    startAngle: 330,
  },
  {
    id: "lmpc",
    title: "Legal Metrology",
    shortTitle: "LMPC",
    image: lmpcImg,
    icon: Scale,
    borderColor: "#F59E0B",
    glowColor: "#F59E0B",
    startAngle: 150,
  },
  {
    id: "iec",
    title: "Import Export Code",
    shortTitle: "IEC",
    image: iecImg,
    icon: FileCheck,
    borderColor: "#22C55E",
    glowColor: "#22C55E",
    startAngle: 30,
  },
  {
    id: "epr",
    title: "EPR Compliance",
    shortTitle: "EPR",
    image: eprImg,
    icon: Recycle,
    borderColor: "#6366F1",
    glowColor: "#6366F1",
    startAngle: 210,
  },
];

interface OrbitConfig {
  radiusX: number;
  radiusY: number;
  duration: number;
  planetSize: number;
}

const getOrbitConfig = (isMobile: boolean, isTablet: boolean): OrbitConfig => {
  if (isMobile) {
    return {
      radiusX: 130,
      radiusY: 70,
      duration: 30,
      planetSize: 50,
    };
  }
  if (isTablet) {
    return {
      radiusX: 200,
      radiusY: 110,
      duration: 26,
      planetSize: 65,
    };
  }
  return {
    radiusX: 300,
    radiusY: 160,
    duration: 24,
    planetSize: 80,
  };
};

export const PlanetaryOrbitHero: React.FC = () => {
  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = useState(false);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkTablet();
    window.addEventListener("resize", checkTablet);
    return () => window.removeEventListener("resize", checkTablet);
  }, []);
  
  const config = getOrbitConfig(isMobile, isTablet);
  
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
  
  // Calculate planet positions with occlusion
  const calculatePlanetProps = (startAngle: number) => {
    const { radiusX, radiusY, duration } = config;
    
    // Current angle based on time (clockwise)
    const currentAngle = startAngle - (time / duration) * 360;
    const angleRad = (currentAngle * Math.PI) / 180;
    
    // Position on ellipse
    const x = Math.cos(angleRad) * radiusX;
    const y = Math.sin(angleRad) * radiusY;
    
    // Normalized Y: -1 (top/back) to +1 (bottom/front)
    const normalizedY = y / radiusY;
    
    // Scale: front = larger (1.4x), back = smaller (0.6x)
    const scale = 0.6 + (normalizedY + 1) * 0.4;
    
    // Occlusion: planets behind (normalizedY < -0.3) should be hidden
    const isBehindEarth = normalizedY < -0.3;
    
    // Opacity: visible in front, fade out when going behind
    let opacity = 1;
    if (normalizedY < -0.3) {
      // Completely hidden behind Earth
      opacity = 0;
    } else if (normalizedY < 0) {
      // Transitioning behind - gradual fade
      opacity = (normalizedY + 0.3) / 0.3;
    }
    
    // Z-index: front planets ABOVE (60+), back planets BELOW (20-40)
    const zIndex = isBehindEarth 
      ? Math.round(20 + (normalizedY + 1) * 20)
      : Math.round(55 + normalizedY * 35);
    
    return { x, y, scale, opacity, zIndex };
  };
  
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{
        width: config.radiusX * 2 + config.planetSize * 2,
        height: config.radiusY * 2 + config.planetSize * 2,
        minHeight: isMobile ? 200 : 380,
      }}
    >
      {/* Subtle orbit path indicator */}
      <svg
        className="absolute pointer-events-none"
        style={{
          width: config.radiusX * 2 + 20,
          height: config.radiusY * 2 + 20,
          opacity: 0.2,
        }}
        viewBox={`0 0 ${config.radiusX * 2 + 20} ${config.radiusY * 2 + 20}`}
      >
        <ellipse
          cx={config.radiusX + 10}
          cy={config.radiusY + 10}
          rx={config.radiusX}
          ry={config.radiusY}
          fill="none"
          stroke="hsla(200, 80%, 60%, 0.5)"
          strokeWidth="1"
          strokeDasharray="8 4"
        />
      </svg>
      
      {/* Orbiting Service Planets */}
      {services.map((service) => {
        const props = calculatePlanetProps(service.startAngle);
        
        return (
          <OrbitingPlanet
            key={service.id}
            id={service.id}
            title={service.title}
            shortTitle={service.shortTitle}
            image={service.image}
            icon={service.icon}
            borderColor={service.borderColor}
            glowColor={service.glowColor}
            size={config.planetSize}
            {...props}
          />
        );
      })}
    </div>
  );
};
