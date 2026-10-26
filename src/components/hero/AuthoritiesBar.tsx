import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import heroRegulatoryBg from "@/assets/hero-regulatory.jpg";

export const AuthoritiesBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative w-full py-14 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroRegulatoryBg})` }} />

      <div className="absolute inset-0 bg-background/92 backdrop-blur-sm" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-5">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm uppercase tracking-[0.2em] font-medium text-destructive-foreground">

          Registered with
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary/10 border-2 border-primary/40 shadow-md hover:shadow-lg hover:border-primary/60 transition-all cursor-default">

          <Shield className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-primary tracking-wide">
            CDSCO
          </span>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            Central Drugs Standard Control Organization
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-2xl text-center text-sm leading-relaxed text-destructive-foreground">

          Terz is officially registered with India's Central Drugs Standard Control Organization (CDSCO)—the national regulatory body for pharmaceuticals, medical devices, and cosmetics. This ensures every submission we handle meets the highest standards of safety, quality, and compliance.
        </motion.p>
      </div>
    </motion.div>);

};