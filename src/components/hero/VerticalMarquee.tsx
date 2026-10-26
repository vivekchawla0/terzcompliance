import { motion } from "framer-motion";
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  FileCheck, 
  FlaskConical, 
  Sparkles, 
  Scale,
  CheckCircle,
  Globe2
} from "lucide-react";

const infoCards = [
  { icon: Award, headline: "100k+ Products", description: "Successfully registered across India" },
  { icon: Users, headline: "200+ Clients", description: "Global manufacturers trust Terz" },
  { icon: Clock, headline: "24-Hour Response", description: "Pan-India expert availability" },
  { icon: Shield, headline: "15+ Years", description: "Deep regulatory experience" },
  { icon: FileCheck, headline: "CDSCO Expertise", description: "Medical Device specialists" },
  { icon: FlaskConical, headline: "IVD Focus", description: "In-Vitro Diagnostics mastery" },
  { icon: Sparkles, headline: "Cosmetics", description: "Complete registration support" },
  { icon: Scale, headline: "Legal Metrology", description: "Packaging compliance experts" },
  { icon: Globe2, headline: "Pan-India Network", description: "Offices in major cities" },
  { icon: CheckCircle, headline: "100% Transparency", description: "Clear pricing, no hidden fees" },
];

export const VerticalMarquee = () => {
  // Duplicate items for seamless loop
  const duplicatedCards = [...infoCards, ...infoCards];

  return (
    <div className="relative h-[400px] lg:h-[480px] overflow-hidden">
      {/* Gradient fade at top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling content */}
      <motion.div
        className="flex flex-col gap-4"
        animate={{
          y: ["0%", "-50%"],
        }}
        transition={{
          y: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedCards.map((card, index) => (
          <motion.div
            key={`${card.headline}-${index}`}
            className="flex items-center gap-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group cursor-default"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (index % infoCards.length) * 0.05 }}
            whileHover={{ scale: 1.02, x: 4 }}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <card.icon className="w-6 h-6 text-primary" />
            </div>
            
            {/* Text */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-foreground text-sm lg:text-base">
                {card.headline}
              </h4>
              <p className="text-xs lg:text-sm text-muted-foreground truncate">
                {card.description}
              </p>
            </div>
            
            {/* Decorative arrow */}
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg 
                className="w-4 h-4 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
