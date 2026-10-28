import * as React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { HeroSection } from "@/components/hero/HeroSection";
import { SubHeroSection } from "@/components/hero/SubHeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { ValuePropositionGrid } from "@/components/home/ValuePropositionGrid";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

// Service data for the showcase grid
import MedicalDevicesImage from "@/assets/medical-devices.jpg";
import IvdImage from "@/assets/ivd.jpg";
import CosmeticsImage from "@/assets/cosmetics.jpg";
import LmpcImage from "@/assets/lmpc.jpg";
import IecImage from "@/assets/iec.jpg";
import EprImage from "@/assets/epr.jpg";
import WholesaleLicenseImage from "@/assets/wholesale-license.jpg";
import NppaImage from "@/assets/nppa-registration.jpg";

const services = [
{
  id: "medical-devices",
  title: "Medical Devices",
  tagline: "CDSCO submissions prepared end-to-end with risk-based documentation reviews.",
  image: MedicalDevicesImage,
  badge: "CDSCO"
},
{
  id: "nppa-registration",
  title: "NPPA Registration",
  tagline: "Medical device pricing compliance, IPDMS 2.0 registration and DPCO filings.",
  image: NppaImage,
  badge: "NPPA / IPDMS",
  link: "/services/nppa-registration-medical-devices"
},
{
  id: "ivd",
  title: "In-Vitro Diagnostics",
  tagline: "Performance evaluation oversight and IVD import licensing support.",
  image: IvdImage,
  badge: "CDSCO"
},
{
  id: "cosmetics",
  title: "Cosmetics",
  tagline: "Product registration, safety dossiers, and artwork compliance.",
  image: CosmeticsImage,
  badge: "CDSCO"
},
{
  id: "legal-metrology",
  title: "Legal Metrology",
  tagline: "Model approval, packaging validation, and audit-ready reports.",
  image: LmpcImage,
  badge: "Central-Level"
},
{
  id: "iec",
  title: "Import Export Code",
  tagline: "IEC registration, renewals, and supply chain partner onboarding.",
  image: IecImage,
  badge: "Lifetime Valid"
},
{
  id: "epr",
  title: "EPR Compliance",
  tagline: "Annual returns, recycling partner management, and evidence tracking.",
  image: EprImage,
  badge: "CPCB"
},
{
  id: "wholesale-license",
  title: "Wholesale License",
  tagline: "20B/21B & MD42 wholesale drug licenses for importers and manufacturers.",
  image: WholesaleLicenseImage,
  badge: "State Drug License"
}];


import { SEO } from "@/components/SEO";

const glassPanel = "border border-border/60 bg-card shadow-surface";

const Home = () => {
  const navigate = useNavigate();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  const handleLeadFormSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate("/contact");
    },
    [navigate]
  );

  return (
    <div className="min-h-screen">
      <SEO
        title="Terz Compliance | Regulatory Compliance Services in India"
        description="Terz Compliance helps manufacturers, importers, and distributors navigate CDSCO medical device licensing, NPPA pricing compliance, IVD, cosmetics, and EPR in India."
        canonical="https://www.terzcompliance.com"
      />
      {/* ========== SECTION 1: New Hero Section with Floating Cards ========== */}
      <HeroSection />

      {/* ========== SECTION 2: Sub-Hero with Circular Infographic ========== */}
      <SubHeroSection />

      {/* ========== SECTION 3: Animated Stats Bar ========== */}
      <StatsBar />

      {/* ========== SECTION 3: Services Showcase ========== */}
      <section className="relative py-16 lg:py-[40px]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/30 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Our Services
            </span>
            <h2 className="mt-4 text-3xl font-bold text-heading lg:text-4xl">
              Comprehensive Regulatory Support
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              End-to-end compliance solutions across India's key regulatory frameworks.
            </p>
          </div>

          <div ref={servicesRef}>
            {/* First row: 4 cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.slice(0, 4).map((service, index) => (
                <AnimatedServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  tagline={service.tagline}
                  image={service.image}
                  badge={service.badge}
                  link={service.link}
                  index={index}
                  isVisible={servicesVisible}
                />
              ))}
            </div>
            {/* Second row: 4 cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
              {services.slice(4).map((service, index) => (
                <AnimatedServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  tagline={service.tagline}
                  image={service.image}
                  badge={service.badge}
                  link={service.link}
                  index={index + 4}
                  isVisible={servicesVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Value Proposition Grid ========== */}
      <ValuePropositionGrid />

      {/* ========== SECTION 5: Process Timeline ========== */}
      <ProcessTimeline />

      {/* ========== SECTION 6: Testimonials & Social Proof ========== */}
      <TestimonialCarousel />

      {/* ========== SECTION 7: Final CTA with Form ========== */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-brand-50/40 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl p-8 shadow-lg lg:p-12",
              glassPanel
            )}>

            {/* Background elements */}
            <div className="absolute -left-24 top-10 h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-accent/6 blur-3xl" />
            
            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-start">
              {/* Left Column - Copy */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}>

                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Start your compliance roadmap
                </span>
                <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
                  Book a 30-minute assessment with a regulatory specialist
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                  Share your product category and launch goals. We'll assess requirements, outline documentation, and send a custom timeline within one business day.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> No obligation discovery call
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Tailored checklist for your regulatory pathway
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Transparent pricing and next steps
                  </li>
                </ul>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}>

                <form onSubmit={handleLeadFormSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="lead-name">Full name</Label>
                    <Input
                      id="lead-name"
                      name="name"
                      placeholder="Priya Mehta"
                      required
                      autoComplete="name" />

                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lead-email">Work email</Label>
                    <Input
                      id="lead-email"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      autoComplete="email" />

                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lead-company">Company</Label>
                    <Input
                      id="lead-company"
                      name="company"
                      placeholder="Your organisation"
                      autoComplete="organization" />

                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lead-notes">Product or compliance goals</Label>
                    <Textarea
                      id="lead-notes"
                      name="notes"
                      placeholder="Tell us about your device, cosmetic line, or expansion plans."
                      rows={4} />

                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary shadow-lg hover:bg-primary/90 relative overflow-hidden group">

                    <span className="relative z-10">Schedule my assessment</span>
                    {/* Pulse glow effect */}
                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to our{" "}
                    <Link to="/privacy" className="underline hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default Home;