import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type AnimatedServiceCardProps = {
  id: string;
  title: string;
  tagline: string;
  image: string;
  badge?: string;
  index: number;
  isVisible: boolean;
  link?: string;
};

const AnimatedServiceCard = ({
  id,
  title,
  tagline,
  image,
  badge,
  index,
  isVisible,
  link,
}: AnimatedServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.95 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card"
    >
      {/* Image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        {badge && (
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            className="absolute top-4 right-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm"
          >
            <span className="relative">
              {badge}
              <motion.span
                className="absolute inset-0 rounded-full bg-white/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </motion.span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {tagline}
        </p>
        <Button
          asChild
          variant="outline"
          className="w-full group/btn border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 overflow-hidden relative"
        >
          <Link to={link || `/services#${id}`}>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Process
              <motion.span
                className="inline-block"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </span>
            <motion.span
              className="absolute inset-0 bg-primary/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default AnimatedServiceCard;
