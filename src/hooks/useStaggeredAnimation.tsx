import { useCallback, useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";

type UseStaggeredAnimationOptions = {
  itemCount: number;
  baseDelay?: number;
  staggerDelay?: number;
};

export const useStaggeredAnimation = ({
  itemCount,
  baseDelay = 100,
  staggerDelay = 80,
}: UseStaggeredAnimationOptions) => {
  const { ref, isVisible } = useScrollAnimation();

  const getItemDelay = useCallback(
    (index: number) => {
      return baseDelay + index * staggerDelay;
    },
    [baseDelay, staggerDelay]
  );

  const getItemStyle = useCallback(
    (index: number) => ({
      animationDelay: `${getItemDelay(index)}ms`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
      transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${getItemDelay(index)}ms`,
    }),
    [getItemDelay, isVisible]
  );

  return {
    containerRef: ref,
    isVisible,
    getItemDelay,
    getItemStyle,
  };
};

export default useStaggeredAnimation;
