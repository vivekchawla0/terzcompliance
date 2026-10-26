import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { VerticalMarquee } from "./VerticalMarquee";
import { AuthoritiesBar } from "./AuthoritiesBar";

const highlights = [
  "Deep expertise in Medical Devices and IVDs",
  "360-degree regulatory and compliance support",
  "Proven track record with 100k+ products registered",
  "Pan-India presence with 24-hour response",
];

export const SubHeroSection = () => {

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-[5%] h-2 w-2 rounded-full bg-primary/50" />
      <div className="absolute bottom-32 right-[8%] h-3 w-3 rounded-full bg-accent/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Our Expertise
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
            Regulatory and Compliance Services in India
          </h2>
        </motion.div>

        {/* Two Column Content */}
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2"
        >
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              Terz specializes in providing comprehensive <strong className="text-foreground">360-degree regulatory and compliance services</strong> across India's complex regulatory landscape. Our deep domain expertise in <strong className="text-foreground">Medical Devices and In-Vitro Diagnostics</strong> positions us as the trusted partner for manufacturers and importers seeking market entry.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              From initial consultation to post-market surveillance, we handle every aspect of your regulatory journey—ensuring faster approvals, complete documentation, and ongoing compliance with evolving requirements.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 pt-2">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>

            {/* Read More Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 group"
              >
                Learn more about Terz
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Vertical Marquee */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md">
              <VerticalMarquee />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Authorities Bar */}
      <div className="mt-16 lg:mt-24">
        <AuthoritiesBar />
      </div>
    </section>
  );
};
