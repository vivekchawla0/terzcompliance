import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCardCarousel } from "./ServiceCardCarousel";
import heroBg from "@/assets/hero-bg.png";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ paddingTop: "clamp(60px, 8vw, 110px)", paddingBottom: "clamp(60px, 8vw, 110px)" }}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">

          {/* Left Column – Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge / Upper Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20">
                India's Trusted Regulatory Partner
              </span>
            </motion.div>

            {/* Main Heading (h1) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold tracking-tight leading-tight"
              style={{ color: "#212529" }}
            >
              Simplifying India's{" "}
              <span className="text-primary">Regulatory Compliance</span>
            </motion.h1>

            {/* Supporting Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg sm:text-xl lg:text-2xl font-medium"
              style={{ color: "#212529" }}
            >
              Expert guidance for medical devices, IVDs, cosmetics &amp; more
            </motion.p>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              From product classification and documentation through government approvals, our regulatory experts handle the complexity so you can focus on innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="text-base px-10 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-10 py-4 rounded-lg border-primary text-primary hover:bg-primary/5">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </motion.div>

            {/* Value Highlights – 3 items with icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-start gap-6 sm:gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#212529" }}>100% Transparency</p>
                  <p className="text-xs text-muted-foreground">No hidden costs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#212529" }}>200+ Clients</p>
                  <p className="text-xs text-muted-foreground">Globally trusted</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#212529" }}>15+ Years</p>
                  <p className="text-xs text-muted-foreground">Industry experience</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column – Service Card Carousel */}
          <div className="order-1 lg:order-2">
            <ServiceCardCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
