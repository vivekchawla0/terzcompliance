import { useCountUp } from "@/hooks/useCountUp";
import { Award, Users, TrendingUp, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon: Icon, value, suffix, label, delay }: StatItemProps) => {
  const { ref, count } = useCountUp({ end: value, duration: 2000, suffix });
  
  return (
    <div 
      ref={ref}
      className="flex flex-col items-center gap-2 text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {count}
      </span>
      <span className="text-sm text-white/80 font-medium">
        {label}
      </span>
    </div>
  );
};

const stats = [
  { icon: Award, value: 100, suffix: "k+", label: "Products Registered" },
  { icon: Users, value: 200, suffix: "+", label: "Global Clients" },
  { icon: TrendingUp, value: 100, suffix: "%", label: "Transparency" },
  { icon: Clock, value: 15, suffix: "+", label: "Years Experience" },
];

export const StatsBar = () => {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(162, 66%, 32%) 100%)",
        }}
      />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 -z-5 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
