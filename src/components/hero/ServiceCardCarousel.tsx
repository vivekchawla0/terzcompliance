import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";
import wholesaleLicenseImg from "@/assets/wholesale-license.jpg";
import nppaImg from "@/assets/nppa-registration.jpg";

interface ServiceCard {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  image: string;
  link?: string;
}

const services: ServiceCard[] = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    tagline: "CDSCO registration for manufacturers & importers",
    badge: "CDSCO",
    image: medicalDevicesImg,
  },
  {
    id: "nppa-registration",
    title: "NPPA Registration",
    tagline: "Pricing compliance & IPDMS 2.0 registration",
    badge: "NPPA / IPDMS",
    image: nppaImg,
    link: "/services/nppa-registration-medical-devices",
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    tagline: "Performance evaluation & IVD import licensing",
    badge: "CDSCO",
    image: ivdImg,
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    tagline: "Product registration & safety compliance",
    badge: "CDSCO",
    image: cosmeticsImg,
  },
  {
    id: "lmpc",
    title: "Legal Metrology",
    tagline: "Model approval & packaging validation",
    badge: "Central-Level",
    image: lmpcImg,
  },
  {
    id: "iec",
    title: "Import Export Code",
    tagline: "IEC registration with lifetime validity",
    badge: "Lifetime Valid",
    image: iecImg,
  },
  {
    id: "epr",
    title: "EPR Compliance",
    tagline: "Extended producer responsibility & recycling",
    badge: "CPCB",
    image: eprImg,
  },
  {
    id: "wholesale-license",
    title: "Wholesale License",
    tagline: "20B/21B & MD42 drug wholesale licensing",
    badge: "State Drug License",
    image: wholesaleLicenseImg,
  },
];

export const ServiceCardCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Auto-advance every 4.5 seconds
  React.useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  // Track selected slide
  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full"
    >
      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden rounded-xl">
        <div className="flex">
          {services.map((service) => (
            <div key={service.id} className="flex-[0_0_100%] min-w-0 px-1">
              <Link to={service.link || `/services#${service.id}`} className="block" aria-label={`Learn more about ${service.title}`}>
                <div className="relative h-[260px] sm:h-[300px] lg:h-[360px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={`${service.title} – regulatory compliance service`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex rounded-md bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow">
                      {service.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base">
                      {service.tagline}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-5">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "bg-primary w-7"
                : "bg-muted-foreground/25 hover:bg-muted-foreground/40 w-2.5"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};
