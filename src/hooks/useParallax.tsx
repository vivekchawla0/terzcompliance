import { useEffect, useState, useRef, useCallback } from "react";

type UseParallaxOptions = {
  speed?: number;
  direction?: "up" | "down";
  disabled?: boolean;
};

export const useParallax = ({
  speed = 0.3,
  direction = "up",
  disabled = false,
}: UseParallaxOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled || typeof window === "undefined") return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = windowHeight / 2 - elementCenter;

      const parallaxOffset = distanceFromCenter * speed * (direction === "up" ? 1 : -1);
      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction, disabled]);

  return { ref, offset, style: { transform: `translateY(${offset}px)` } };
};

type UseMouseParallaxOptions = {
  intensity?: number;
  disabled?: boolean;
};

export const useMouseParallax = ({
  intensity = 0.02,
  disabled = false,
}: UseMouseParallaxOptions = {}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled || typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * intensity;
      const y = (e.clientY - window.innerHeight / 2) * intensity;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity, disabled]);

  const getElementStyle = useCallback(
    (multiplier: number = 1) => ({
      transform: `translate(${position.x * multiplier}px, ${position.y * multiplier}px)`,
    }),
    [position]
  );

  return { position, getElementStyle };
};

export default useParallax;
