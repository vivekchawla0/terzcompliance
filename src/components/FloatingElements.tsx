import { useMouseParallax } from "@/hooks/useParallax";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  FileText,
  CheckCircle,
  Shield,
  Award,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";

type FloatingElementsProps = {
  variant?: "hero" | "services" | "minimal";
  className?: string;
};

const FloatingElements = ({
  variant = "hero",
  className,
}: FloatingElementsProps) => {
  const isMobile = useIsMobile();
  const { getElementStyle } = useMouseParallax({
    intensity: 0.015,
    disabled: isMobile,
  });

  if (isMobile) return null;

  const elements = {
    hero: [
      {
        icon: FileText,
        position: "top-20 left-[10%]",
        size: "w-12 h-12",
        delay: "0s",
        multiplier: 1.5,
      },
      {
        icon: CheckCircle,
        position: "top-32 right-[15%]",
        size: "w-10 h-10",
        delay: "0.5s",
        multiplier: 2,
      },
      {
        icon: Shield,
        position: "bottom-24 left-[20%]",
        size: "w-14 h-14",
        delay: "1s",
        multiplier: 1.2,
      },
      {
        icon: Award,
        position: "bottom-32 right-[10%]",
        size: "w-11 h-11",
        delay: "0.3s",
        multiplier: 1.8,
      },
      {
        icon: ClipboardCheck,
        position: "top-1/2 left-[5%]",
        size: "w-9 h-9",
        delay: "0.7s",
        multiplier: 2.2,
      },
      {
        icon: BadgeCheck,
        position: "top-1/3 right-[8%]",
        size: "w-10 h-10",
        delay: "1.2s",
        multiplier: 1.4,
      },
    ],
    services: [
      {
        icon: FileText,
        position: "top-16 left-[8%]",
        size: "w-10 h-10",
        delay: "0s",
        multiplier: 1.5,
      },
      {
        icon: Shield,
        position: "bottom-20 right-[12%]",
        size: "w-12 h-12",
        delay: "0.6s",
        multiplier: 1.8,
      },
      {
        icon: CheckCircle,
        position: "top-1/2 right-[6%]",
        size: "w-8 h-8",
        delay: "0.3s",
        multiplier: 2,
      },
    ],
    minimal: [
      {
        icon: CheckCircle,
        position: "top-20 right-[10%]",
        size: "w-10 h-10",
        delay: "0s",
        multiplier: 1.5,
      },
      {
        icon: Shield,
        position: "bottom-20 left-[15%]",
        size: "w-8 h-8",
        delay: "0.4s",
        multiplier: 1.8,
      },
    ],
  };

  const selectedElements = elements[variant];

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none z-0",
        className
      )}
    >
      {selectedElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <div
            key={index}
            className={cn(
              "absolute opacity-20 transition-transform duration-300 ease-out",
              element.position,
              element.size
            )}
            style={{
              ...getElementStyle(element.multiplier),
              animationDelay: element.delay,
            }}
          >
            <Icon
              className={cn(
                "w-full h-full text-white/60 animate-float-slow",
                "drop-shadow-lg"
              )}
              style={{ animationDelay: element.delay }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
