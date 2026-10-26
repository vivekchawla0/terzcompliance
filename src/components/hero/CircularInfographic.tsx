import { motion } from "framer-motion";
import { Stethoscope, FlaskConical, Sparkles, Scale, FileText, Recycle } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { icon: Stethoscope, label: "Medical Devices", angle: 0, isPrimary: true, color: "text-primary" },
  { icon: FlaskConical, label: "IVD", angle: 60, isPrimary: true, color: "text-primary" },
  { icon: Sparkles, label: "Cosmetics", angle: 120, isPrimary: false, color: "text-accent" },
  { icon: Scale, label: "Legal Metrology", angle: 180, isPrimary: false, color: "text-accent" },
  { icon: FileText, label: "IEC", angle: 240, isPrimary: false, color: "text-muted-foreground" },
  { icon: Recycle, label: "EPR", angle: 300, isPrimary: false, color: "text-muted-foreground" },
];

export const CircularInfographic = () => {
  const radius = 140; // Distance from center
  const centerSize = 80; // Size of center circle

  return (
    <div className="relative w-[340px] h-[340px] mx-auto">
      {/* Outer rotating ring (subtle) */}
      <motion.div
        className="absolute inset-0 rounded-full border border-dashed border-border/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 340">
        {services.map((service, index) => {
          const angleRad = (service.angle - 90) * (Math.PI / 180);
          const x = 170 + radius * Math.cos(angleRad);
          const y = 170 + radius * Math.sin(angleRad);
          
          return (
            <motion.line
              key={service.label}
              x1="170"
              y1="170"
              x2={x}
              y2={y}
              stroke={service.isPrimary ? "hsl(217, 91%, 60%)" : "hsl(var(--border))"}
              strokeWidth={service.isPrimary ? "2" : "1"}
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: service.isPrimary ? 0.6 : 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.1,
                ease: "easeOut"
              }}
            />
          );
        })}
      </svg>

      {/* Center Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div 
          className="flex items-center justify-center rounded-full bg-card border-2 border-primary/30 shadow-lg shadow-primary/20"
          style={{ width: centerSize, height: centerSize }}
        >
          <img src={logo} alt="Terz" className="w-12 h-12 object-contain" />
        </div>
      </motion.div>

      {/* Service Icons orbiting */}
      {services.map((service, index) => {
        const angleRad = (service.angle - 90) * (Math.PI / 180);
        const x = 170 + radius * Math.cos(angleRad);
        const y = 170 + radius * Math.sin(angleRad);
        const iconSize = service.isPrimary ? 48 : 40;
        
        return (
          <motion.div
            key={service.label}
            className="absolute"
            style={{
              left: x - iconSize / 2,
              top: y - iconSize / 2,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.4 + index * 0.1,
              type: "spring",
              stiffness: 200
            }}
          >
            <motion.div
              className={`flex items-center justify-center rounded-full bg-card border shadow-md transition-all hover:scale-110 hover:shadow-lg cursor-pointer ${
                service.isPrimary 
                  ? "border-primary/50 shadow-primary/20" 
                  : "border-border/60"
              }`}
              style={{ width: iconSize, height: iconSize }}
              whileHover={{ y: -4 }}
              animate={service.isPrimary ? {
                boxShadow: [
                  "0 4px 12px hsla(217, 91%, 60%, 0.2)",
                  "0 8px 24px hsla(217, 91%, 60%, 0.3)",
                  "0 4px 12px hsla(217, 91%, 60%, 0.2)",
                ]
              } : {}}
              transition={service.isPrimary ? {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              } : {}}
            >
              <service.icon 
                className={`${service.color} ${service.isPrimary ? "h-5 w-5" : "h-4 w-4"}`} 
              />
            </motion.div>
            
            {/* Label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.05 }}
              className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium ${
                service.isPrimary ? "text-foreground" : "text-muted-foreground"
              }`}
              style={{ 
                top: iconSize + 6,
              }}
            >
              {service.label}
            </motion.span>
          </motion.div>
        );
      })}

      {/* Ambient glow effects */}
      <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-accent/10 blur-3xl -z-10" />
    </div>
  );
};
