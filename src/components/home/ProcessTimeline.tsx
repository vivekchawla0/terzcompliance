import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Intake",
    description: "Align on product goals, timelines, and regulatory pathways.",
  },
  {
    number: 2,
    title: "Gap Assessment",
    description: "Audit documentation, testing, and labelling to surface gaps early.",
  },
  {
    number: 3,
    title: "Dossier Build",
    description: "Assemble regulator-ready files with technical, legal, and quality inputs.",
  },
  {
    number: 4,
    title: "Filing",
    description: "Submit applications and respond to authority interactions.",
  },
  {
    number: 5,
    title: "Query Management",
    description: "Handle clarifications, hearings, and supplemental evidence.",
  },
  {
    number: 6,
    title: "Approval & Beyond",
    description: "Onboard operations teams and monitor obligations post-approval.",
  },
];

export const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance through steps when visible
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-brand-50/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl font-bold text-heading lg:text-4xl">
            6-Step Compliance Timeline
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A proven framework that guides every launch from intake to post-market success.
          </p>
        </div>

        <div ref={containerRef}>
          {/* Desktop Timeline - Horizontal */}
          <div className="hidden lg:block">
            {/* Progress Line Container */}
            <div className="relative mx-auto max-w-5xl mb-12">
              <div className="absolute top-6 left-0 right-0 h-1 bg-border rounded-full" />
              
              {/* Animated Progress */}
              <motion.div
                className="absolute top-6 left-0 h-1 bg-primary rounded-full"
                initial={{ width: "0%" }}
                animate={isVisible ? { width: `${((activeStep + 1) / processSteps.length) * 100}%` } : { width: "0%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              
              {/* Step Circles */}
              <div className="relative flex justify-between">
                {processSteps.map((step, index) => (
                  <motion.button
                    key={step.number}
                    onClick={() => setActiveStep(index)}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className={cn(
                      "relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 cursor-pointer",
                      index <= activeStep
                        ? "border-primary bg-primary text-white shadow-lg"
                        : "border-border bg-card text-muted-foreground hover:border-primary/50"
                    )}
                  >
                    {index < activeStep ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-bold">
                        {step.number.toString().padStart(2, "0")}
                      </span>
                    )}
                    
                    {/* Pulse ring for active step */}
                    {index === activeStep && (
                      <span className="absolute inset-0 rounded-full animate-pulse-ring border-2 border-primary" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Step Details */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-2xl text-center rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {processSteps[activeStep].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {processSteps[activeStep].description}
              </p>
            </motion.div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="lg:hidden space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="relative flex gap-4"
              >
                {/* Vertical line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-[calc(100%-20px)] bg-border" />
                )}
                
                {/* Step Circle */}
                <div
                  className={cn(
                    "relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300",
                    index <= activeStep
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-card text-muted-foreground"
                  )}
                >
                  {index < activeStep ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-bold">
                      {step.number.toString().padStart(2, "0")}
                    </span>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation dots for desktop */}
        <div className="hidden lg:flex justify-center gap-2 mt-8">
          {processSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeStep
                  ? "w-6 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
