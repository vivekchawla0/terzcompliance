import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight, Star } from "lucide-react";

interface HeroServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  isPrimary?: boolean;
  size: "large" | "medium" | "standard";
  index: number;
  mousePosition?: { x: number; y: number };
}

const sizeClasses = {
  large: "h-[200px] lg:h-[220px]",
  medium: "h-[160px] lg:h-[180px]",
  standard: "h-[140px] lg:h-[160px]",
};

export const HeroServiceCard = ({
  id,
  title,
  description,
  image,
  badge,
  isPrimary = false,
  size,
  index,
  mousePosition,
}: HeroServiceCardProps) => {
  // Calculate parallax offset based on mouse position
  const parallaxX = mousePosition ? (mousePosition.x - 0.5) * (10 + index * 2) : 0;
  const parallaxY = mousePosition ? (mousePosition.y - 0.5) * (8 + index * 1.5) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 20 }}
      animate={{ 
        opacity: 1, 
        x: parallaxX, 
        y: parallaxY,
      }}
      transition={{
        opacity: { duration: 0.5, delay: 0.3 + index * 0.1 },
        x: { duration: 0.5, delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 },
        y: { duration: 0.5, delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 },
      }}
      whileHover={{ 
        scale: 1.03, 
        y: parallaxY - 8,
        transition: { duration: 0.3 }
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer",
        "border shadow-lg transition-shadow duration-300",
        "hover:shadow-2xl hover:shadow-primary/20",
        sizeClasses[size],
        isPrimary 
          ? "border-amber-400/60 ring-2 ring-amber-400/30" 
          : "border-border/60"
      )}
    >
      <Link to={`/services#${id}`} className="absolute inset-0 z-10" aria-label={title} />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
      </div>

      {/* Primary Badge */}
      {isPrimary && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
          className="absolute top-3 right-3 z-20 flex items-center gap-1 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg"
        >
          <Star className="h-3 w-3 fill-current" />
          Primary
        </motion.div>
      )}

      {/* Badge */}
      <div className="absolute top-3 left-3 z-20">
        <span className="inline-flex rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground shadow-md">
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
        <h3 className={cn(
          "font-bold text-primary-foreground leading-tight",
          size === "large" ? "text-lg lg:text-xl" : "text-sm lg:text-base"
        )}>
          {title}
        </h3>
        <p className={cn(
          "mt-1 text-primary-foreground/80 line-clamp-2",
          size === "large" ? "text-sm" : "text-xs"
        )}>
          {description}
        </p>
        
        {/* Hover Arrow */}
        <motion.div 
          className="mt-2 flex items-center gap-1 text-primary-foreground/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        >
          <span>Learn more</span>
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </motion.div>
      </div>

      {/* Floating Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      />
    </motion.div>
  );
};
