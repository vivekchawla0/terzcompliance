import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import MedicalDevicesImage from "@/assets/medical-devices.jpg";
import IvdImage from "@/assets/ivd.jpg";
import CosmeticsImage from "@/assets/cosmetics.jpg";
import LmpcImage from "@/assets/lmpc.jpg";
import MarketEntryImage from "@/assets/market-entry.jpg";

interface ServiceSlide {
  id: string;
  title: string;
  caption: string;
  image: string;
}

const serviceSlides: ServiceSlide[] = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    caption: "CDSCO & MDR approvals",
    image: MedicalDevicesImage,
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    caption: "IVD registrations & documentation",
    image: IvdImage,
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    caption: "Cosmetics registrations & labeling",
    image: CosmeticsImage,
  },
  {
    id: "legal-metrology",
    title: "Legal Metrology",
    caption: "LMPC & packaging compliance",
    image: LmpcImage,
  },
  {
    id: "other-services",
    title: "Other Services",
    caption: "EPR, WPC & more",
    image: MarketEntryImage,
  },
];

const SLIDE_DURATION = 2500; // 2.5 seconds per slide

export const HeroServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }

    const handleChange = (event: MediaQueryListEvent) => {
      setIsPlaying(!event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    goToSlide((currentIndex + 1) % serviceSlides.length);
  }, [currentIndex, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + serviceSlides.length) % serviceSlides.length);
  }, [currentIndex, goToSlide]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPlaying, goToNext]);

  return (
    <div
      className="relative w-full h-full min-h-[320px] lg:min-h-[420px]"
      role="region"
      aria-label="Service showcase carousel"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      {/* Main Carousel Container */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl border border-border/50 shadow-lg bg-card">
        <span className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 rounded-full bg-card/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary border border-primary/20 backdrop-blur-sm shadow-sm">
          Service preview
        </span>
        {/* Slides */}
        {serviceSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-all duration-500 ease-out",
              index === currentIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            )}
            id={`hero-service-slide-${slide.id}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${serviceSlides.length}: ${slide.title}`}
            aria-hidden={index !== currentIndex}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={`${slide.title} - ${slide.caption}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            
            {/* Gradient Overlay - lighter for light theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/40 to-transparent" />
            
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
              <div className={cn(
                "transition-all duration-500 delay-100",
                index === currentIndex 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-4 opacity-0"
              )}>
                <h3 className="text-lg lg:text-xl font-bold text-heading mb-1">
                  {slide.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground">
                  {slide.caption}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-foreground/80 hover:bg-card hover:text-foreground hover:shadow-md transition-all opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-foreground/80 hover:bg-card hover:text-foreground hover:shadow-md transition-all opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Play/Pause Control */}
        <button
          onClick={togglePlayPause}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-foreground/80 hover:bg-card hover:text-foreground hover:shadow-md transition-all"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          aria-pressed={!isPlaying}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Navigation Dots */}
      <div 
        className="flex items-center justify-center gap-2 mt-4"
        role="tablist"
        aria-label="Slide navigation"
      >
        {serviceSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to ${slide.title} slide`}
            aria-controls={`hero-service-slide-${slide.id}`}
            tabIndex={index === currentIndex ? 0 : -1}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30 rounded-b-2xl lg:rounded-b-3xl overflow-hidden z-20">
        <div 
          className={cn(
            "h-full bg-primary/80 transition-all",
            isPlaying ? "animate-progress" : ""
          )}
          style={{
            width: isPlaying ? "100%" : `${((currentIndex + 1) / serviceSlides.length) * 100}%`,
            animationDuration: `${SLIDE_DURATION}ms`,
          }}
        />
      </div>

      {/* CSS for progress animation */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress ${SLIDE_DURATION}ms linear infinite;
        }
      `}</style>
    </div>
  );
};
