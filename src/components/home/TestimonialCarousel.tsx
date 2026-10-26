import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Partner logos
import BeautyBarnLogo from "@/assets/clients/beauty-barn.png";
import BostonIvyLogo from "@/assets/clients/boston-ivy.png";
import MedikaBazaarLogo from "@/assets/clients/medika-bazaar.png";
import DerringerLogo from "@/assets/clients/derringer.png";
import SwarLogo from "@/assets/clients/swar-enterprises.png";
import GeuderLogo from "@/assets/clients/geuder-india.png";
import HotgenLogo from "@/assets/clients/hotgen-biotech.png";
import VisionSourceLogo from "@/assets/clients/vision-source.png";
import NeobiotechLogo from "@/assets/clients/neobiotech.png";
import IntracareLogo from "@/assets/clients/intracare.png";
import DrihaLogo from "@/assets/clients/driha-enterprises.png";
import JainsonsLogo from "@/assets/clients/jainsons-group.png";
import MaxvueLogo from "@/assets/clients/maxvue-vision.png";
import IvalensLogo from "@/assets/clients/ivalens.png";
import KataraLogo from "@/assets/clients/katara-dental.png";
import OrtechLogo from "@/assets/clients/ortech.png";
import KrishnaMicromedLogo from "@/assets/clients/krishna-micromed.png";
import MobilabLogo from "@/assets/clients/mobilab.png";
import PigeonLogo from "@/assets/clients/pigeon-india.png";
import PrudensLogo from "@/assets/clients/prudens.png";
import AP2RLogo from "@/assets/clients/ap2r-global.png";
import QuantumLogo from "@/assets/clients/quantum-medical.png";

const testimonials = [
  {
    quote: "Terz Compliance brought remarkable professionalism, expertise, and strategic insight from day one. They understood our business requirements quickly and delivered effective solutions ahead of schedule.",
    name: "Hemendra Dave",
    role: "Regulatory Head",
    company: "Envision Scientific",
  },
  {
    quote: "I highly recommend Terz Compliance for their outstanding expertise in medical device registration with Indian authorities. Their deep knowledge and proactive approach were instrumental in securing timely clearance.",
    name: "Andrew Tang",
    role: "Chief Executive Officer",
    company: "Mobilab, USA",
  },
  {
    quote: "Terz is meticulous and conscientious while preparing and vetting documents, leaving little room for errors, saving time and money for their clients. Professional and courteous, they are also a pleasure to deal with.",
    name: "Anil Kumar Nair",
    role: "Managing Director",
    company: "Geuder Asia Pacific",
  },
  {
    quote: "Had worked with Terz Compliance on medical device registration in India, a team with strong work ethics, extremely responsive and knows their field of work well. Their inputs had been a guiding light.",
    name: "Steven Choy",
    role: "Business Consultant",
    company: "SEED, Japan",
  },
  {
    quote: "Terz Compliance is super efficient in registration work. They helped with urgent paperwork ahead of deadlines and are ever ready to help even at odd hours. Truly appreciate their effort in going the extra mile.",
    name: "Toinali Chophi",
    role: "CEO",
    company: "Beautybarnindia",
  },
];

const partners = [
  { name: "Beauty Barn", logo: BeautyBarnLogo },
  { name: "Boston Ivy", logo: BostonIvyLogo },
  { name: "Medika Bazaar", logo: MedikaBazaarLogo },
  { name: "Derringer", logo: DerringerLogo },
  { name: "Swar Enterprises", logo: SwarLogo },
  { name: "Geuder India Ophthalmics", logo: GeuderLogo },
  { name: "Hotgen Biotech", logo: HotgenLogo },
  { name: "Vision Source", logo: VisionSourceLogo },
  { name: "Neobiotech", logo: NeobiotechLogo },
  { name: "Intracare", logo: IntracareLogo },
  { name: "Driha Enterprises", logo: DrihaLogo },
  { name: "Jainsons Group", logo: JainsonsLogo },
  { name: "Maxvue Vision", logo: MaxvueLogo },
  { name: "Ivalens", logo: IvalensLogo },
  { name: "Katara Dental", logo: KataraLogo },
  { name: "Ortech", logo: OrtechLogo },
  { name: "Krishna Micromed", logo: KrishnaMicromedLogo },
  { name: "Mobilab, USA", logo: MobilabLogo },
  { name: "Pigeon India", logo: PigeonLogo },
  { name: "Prudens Dermaceuticals", logo: PrudensLogo },
  { name: "AP2R Global", logo: AP2RLogo },
  { name: "Quantum Medical Technologies", logo: QuantumLogo },
];

const row1 = partners.slice(0, 11);
const row2 = partners.slice(11);

const ROTATION_INTERVAL = 5000;

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(goToNext, ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  return (
    <section className="relative py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-accent-100/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
            Trusted by market leaders
          </p>
          <h2 className="mt-4 text-3xl font-bold text-heading lg:text-4xl">
            Partners Count on Terz
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Over a decade of approvals for manufacturers, importers, and innovators expanding into India's regulated markets.
          </p>
        </div>

        {/* Partner Logos — Two-row infinite marquee */}
        <div className="mb-16 space-y-4 overflow-hidden">
          {/* Row 1 — scrolls left */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
            <div className="flex animate-marquee-left gap-6">
              {[...row1, ...row1].map((partner, i) => (
                <div
                  key={`r1-${i}`}
                  className="group flex h-32 w-56 shrink-0 items-center justify-center rounded-2xl border border-border/40 bg-card/80 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-full object-contain scale-[1.8]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
            <div className="flex animate-marquee-right gap-6">
              {[...row2, ...row2].map((partner, i) => (
                <div
                  key={`r2-${i}`}
                  className="group flex h-32 w-56 shrink-0 items-center justify-center rounded-2xl border border-border/40 bg-card/80 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-full object-contain scale-[1.8]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-2 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-2 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-8 lg:p-12"
              >
                <Quote className="h-10 w-10 text-primary/60 mb-6" />
                
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-primary font-medium mt-1">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
