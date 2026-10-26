import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type RoadmapTimelineProps = {
  totalSteps: number;
  activeStep: number;
  onStepClick: (index: number) => void;
  stepTitles?: string[];
};

const RoadmapTimeline = ({
  totalSteps,
  activeStep,
  onStepClick,
  stepTitles = [],
}: RoadmapTimelineProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="w-full py-6">
      {/* Desktop horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative flex items-center justify-between">
          {/* Progress line background */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-muted rounded-full"
          />

          {/* Active progress line with glow */}
          <motion.div
            className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.7))",
              boxShadow: "0 0 12px hsl(var(--primary) / 0.4)",
            }}
            initial={{ width: "0%" }}
            animate={{
              width: isVisible ? `${(activeStep / (totalSteps - 1)) * 100}%` : "0%",
            }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          />

          {/* Step circles */}
          {Array.from({ length: totalSteps }).map((_, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;
            const isUpcoming = index > activeStep;

            return (
              <motion.button
                key={index}
                onClick={() => onStepClick(index)}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-semibold transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  isCompleted &&
                    "bg-primary/80 text-primary-foreground hover:bg-primary",
                  isActive &&
                    "bg-primary text-primary-foreground shadow-lg",
                  isUpcoming &&
                    "bg-muted border-2 border-muted-foreground/30 text-muted-foreground hover:border-primary/50 hover:text-primary"
                )}
                aria-label={`Step ${index + 1}${stepTitles[index] ? `: ${stepTitles[index]}` : ""}`}
              >
                {/* Active step pulse ring */}
                {isActive && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}

                <AnimatePresence mode="wait">
                  {isCompleted ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.span
                      key="number"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {index + 1}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* Step labels */}
        {stepTitles.length > 0 && (
          <div className="relative mt-3 flex justify-between">
            {stepTitles.map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
                className={cn(
                  "flex-1 text-center text-[11px] leading-tight transition-colors duration-300 px-1",
                  index === activeStep
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                <span className="block">
                  {title}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile vertical timeline */}
      <div className="md:hidden">
        <div className="relative flex flex-col gap-4 pl-6">
          {/* Vertical progress line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-muted"
          />
          <motion.div
            className="absolute left-[11px] top-0 w-0.5"
            style={{
              background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary) / 0.7))",
              boxShadow: "0 0 8px hsl(var(--primary) / 0.3)",
            }}
            initial={{ height: "0%" }}
            animate={{
              height: isVisible ? `${(activeStep / (totalSteps - 1)) * 100}%` : "0%",
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          />

          {/* Step items */}
          {Array.from({ length: totalSteps }).map((_, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;
            const isUpcoming = index > activeStep;

            return (
              <motion.button
                key={index}
                onClick={() => onStepClick(index)}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isVisible
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ delay: index * 0.08 + 0.15, duration: 0.4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative flex items-center gap-3 text-left transition-all duration-300",
                  "focus:outline-none"
                )}
              >
                <motion.div
                  className={cn(
                    "absolute -left-6 flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300",
                    isCompleted && "bg-primary/80 text-primary-foreground",
                    isActive && "bg-primary text-primary-foreground shadow-lg",
                    isUpcoming &&
                      "bg-muted border border-muted-foreground/30 text-muted-foreground"
                  )}
                  animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                  transition={{ duration: 0.6, repeat: isActive ? Infinity : 0, repeatDelay: 1 }}
                >
                  {/* Active pulse */}
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-primary/40"
                      animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  
                  {isCompleted ? (
                    <CheckCircle className="h-3.5 w-3.5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </motion.div>
                {stepTitles[index] && (
                  <span
                    className={cn(
                      "text-sm transition-colors duration-300",
                      isActive ? "text-primary font-medium" : "text-muted-foreground"
                    )}
                  >
                    {stepTitles[index]}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
