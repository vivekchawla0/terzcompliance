import { Shield, Clock, Users, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const values = [
  {
    icon: Shield,
    title: "Expert Guidance",
    description: "Seasoned regulatory professionals with deep domain expertise across CDSCO, LMPC, and beyond.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Streamlined processes and proactive query management to minimize your time-to-market.",
  },
  {
    icon: Users,
    title: "Complete Support",
    description: "End-to-end assistance from initial documentation through approval and post-market compliance.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear, upfront costs with government fees itemized. No hidden charges or surprises.",
  },
];

export const ValuePropositionGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-[5vh] lg:py-[8vh]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Why Terz
          </span>
          <h2 className="mt-4 text-3xl font-bold text-heading lg:text-4xl">
            Your Regulatory Partner of Choice
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We combine deep regulatory expertise with a client-first approach to deliver predictable, stress-free compliance outcomes.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm",
                "hover:border-primary/40 hover:shadow-lg transition-shadow duration-300"
              )}
            >
              {/* Background glow on hover */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <motion.div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <value.icon className="h-7 w-7 text-primary" />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionGrid;
