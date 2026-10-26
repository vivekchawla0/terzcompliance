import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
import FloatingElements from "@/components/FloatingElements";

// Image imports
import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";
import wholesaleLicenseImg from "@/assets/wholesale-license.jpg";
import heroRegulatoryImg from "@/assets/hero-regulatory.jpg";

type ServiceCardData = {
  id: string;
  title: string;
  tagline: string;
  image: string;
  badge?: string;
};

const servicesData: ServiceCardData[] = [
  {
    id: "medical-devices",
    title: "Medical Devices",
    tagline: "Smooth CDSCO registration for manufacturers and importers",
    image: medicalDevicesImg,
    badge: "CDSCO",
  },
  {
    id: "ivd",
    title: "In-Vitro Diagnostics",
    tagline: "Expert IVD compliance and regulatory support",
    image: ivdImg,
    badge: "CDSCO",
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    tagline: "Fast-track cosmetic product registration",
    image: cosmeticsImg,
    badge: "CDSCO",
  },
  {
    id: "lmpc",
    title: "Legal Metrology",
    tagline: "LMPC compliance made simple",
    image: lmpcImg,
    badge: "Central-Level",
  },
  {
    id: "iec",
    title: "Import Export Code",
    tagline: "IEC registration and comprehensive support",
    image: iecImg,
    badge: "Lifetime Valid",
  },
  {
    id: "epr",
    title: "EPR Compliance",
    tagline: "EPR compliance and sustainability solutions",
    image: eprImg,
    badge: "CPCB",
  },
  {
    id: "wholesale-license",
    title: "Wholesale License",
    tagline: "20B/21B & MD42 wholesale drug licensing",
    image: wholesaleLicenseImg,
    badge: "State Drug License",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Expert Guidance",
    description: "Seasoned regulatory professionals with deep domain expertise",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Streamlined processes to minimize your time-to-market",
  },
  {
    icon: Users,
    title: "Complete Support",
    description: "End-to-end assistance from application to approval",
  },
  {
    icon: Award,
    title: "Transparent Pricing",
    description: "Clear, upfront costs with no hidden fees",
  },
];

const ServicesOverview = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0">
          <motion.img
            src={heroRegulatoryImg}
            alt="Regulatory Services"
            className="w-full h-full object-cover brightness-[0.85]"
            initial={{ scale: 1.1 }}
            animate={heroVisible ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-accent/70 mix-blend-multiply" />
        </div>
        
        {/* Floating Elements */}
        <FloatingElements variant="hero" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-white/80"
              />
              Regulatory Excellence
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-6 text-4xl font-bold text-white lg:text-6xl"
            >
              Our Regulatory Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl lg:text-2xl text-white/90 mb-4"
            >
              Comprehensive compliance solutions for your business
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/80"
            >
              From medical devices to cosmetics, we provide end-to-end regulatory support
              to help you navigate India's compliance landscape with confidence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={gridRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={gridVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Explore Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select a service to view the complete regulatory roadmap, including step-by-step
            processes for both manufacturers and importers.
          </p>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.slice(0, 3).map((service, index) => (
            <AnimatedServiceCard
              key={service.id}
              {...service}
              index={index}
              isVisible={gridVisible}
            />
          ))}
        </div>
        {/* Second row: 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6 lg:mt-8">
          {servicesData.slice(3).map((service, index) => (
            <AnimatedServiceCard
              key={service.id}
              {...service}
              index={index + 3}
              isVisible={gridVisible}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyRef} className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={whyVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Terz Compliance?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine deep regulatory expertise with a client-first approach
              to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={
                  whyVisible
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.9 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 lg:py-24 bg-primary/5 relative overflow-hidden">
        <FloatingElements variant="minimal" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Compliance Journey?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us today for a free consultation. Our regulatory experts
              are ready to guide you through the process.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="min-w-[200px] animate-pulse-glow">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
