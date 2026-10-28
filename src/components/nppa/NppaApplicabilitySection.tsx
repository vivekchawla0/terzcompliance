import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Factory,
  Globe,
  Truck,
  Package,
  Building2,
  Users,
  Check,
  FileText,
  BarChart3,
  Gavel,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import nppaBgImg from "@/assets/nppa-applicability-bg.jpg";

/* ─── Applicability Card Interface ─── */
interface ApplicabilityCardData {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  desktopClass: string;
}

const applicabilityCards: ApplicabilityCardData[] = [
  {
    number: "01",
    icon: Factory,
    title: "Domestic Medical Device Manufacturers",
    description:
      "Manufacturers holding CDSCO or SLA licences for medical devices should assess whether their products attract NPPA pricing compliance obligations under the DPCO.",
    desktopClass: "top-[4%] left-[2%] xl:left-[4%]",
  },
  {
    number: "02",
    icon: Globe,
    title: "Medical Device Importers",
    description:
      "Entities importing medical devices under CDSCO import licences (Form MD-15) need to evaluate applicable NPPA requirements for their imported product portfolio.",
    desktopClass: "top-[4%] right-[2%] xl:right-[4%]",
  },
  {
    number: "03",
    icon: Truck,
    title: "Subsequent Importers",
    description:
      "Subsequent importers operating under the import licence route must independently assess and comply with applicable NPPA pricing obligations.",
    desktopClass: "top-[36%] left-[0%] xl:left-[1%]",
  },
  {
    number: "04",
    icon: Package,
    title: "Marketers and Brand Owners",
    description:
      "Entities marketing medical devices under their own brand, even if manufactured by others, should assess NPPA applicability based on their role in the supply chain.",
    desktopClass: "top-[36%] right-[0%] xl:right-[1%]",
  },
  {
    number: "05",
    icon: Building2,
    title: "Businesses Handling Multiple Categories",
    description:
      "Companies dealing in both scheduled and non-scheduled medical devices must separately evaluate NPPA applicability for each category.",
    desktopClass: "top-[68%] left-[4%] xl:left-[6%]",
  },
  {
    number: "06",
    icon: Users,
    title: "Other Stakeholders",
    description:
      "Distributors, wholesalers, and other supply chain participants should assess their obligations based on the specific provisions of the DPCO and their role in the market.",
    desktopClass: "top-[68%] right-[4%] xl:right-[6%]",
  },
];

/* ─── Chrome Specular Sphere ─── */
const ChromeSphere = ({
  size = 18,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={cn("rounded-full pointer-events-none select-none", className)}
    style={{
      width: size,
      height: size,
      background:
        "radial-gradient(circle at 30% 25%, #FFFFFF 0%, #E2EDF8 30%, #94B0CC 70%, #5B7B9E 100%)",
      boxShadow:
        "0 4px 10px rgba(91,123,158,0.35), inset 0 -2px 4px rgba(0,0,0,0.22), inset 0 2px 3px rgba(255,255,255,0.8)",
      ...style,
    }}
  />
);

/* ─── Blue Glass Sphere ─── */
const BlueGlassSphere = ({
  size = 16,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={cn("rounded-full pointer-events-none select-none", className)}
    style={{
      width: size,
      height: size,
      background:
        "radial-gradient(circle at 35% 30%, #7FE0FF 0%, #1677E8 55%, #0B4A94 100%)",
      boxShadow:
        "0 6px 14px rgba(22,119,232,0.45), 0 0 10px rgba(21,188,223,0.35), inset 0 2px 4px rgba(255,255,255,0.7)",
      ...style,
    }}
  />
);

/* ─── Floating Circular Coin Badge ─── */
const OrbitalCoinBadge = ({
  icon: Icon,
  className = "",
  style,
}: {
  icon: LucideIcon;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <motion.div
    className={cn(
      "flex items-center justify-center rounded-2xl bg-white/95 backdrop-blur-md border border-blue-200/90 shadow-[0_8px_20px_rgba(22,119,232,0.18)] p-2.5 z-20 pointer-events-auto cursor-pointer",
      className
    )}
    whileHover={{ scale: 1.15, y: -2, boxShadow: "0 12px 28px rgba(22,119,232,0.3)" }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    style={style}
  >
    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-[#EBF4FE] to-[#D9ECFE] text-[#1677E8]">
      <Icon className="h-4 w-4 stroke-[2.2]" />
    </div>
  </motion.div>
);

/* ─── 3D Blue Compliance Shield (Exact Match to Image 1) ─── */
const ComplianceShield3D = ({ className = "" }: { className?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("pointer-events-none select-none z-20", className)}
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, -6, 0],
              rotate: [-1, 2, -1],
            }
      }
      transition={{
        duration: 4.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-14 h-16 sm:w-16 sm:h-20 flex items-center justify-center">
        {/* Soft Ambient Shield Glow */}
        <div className="absolute inset-0 bg-[#1677E8]/40 blur-xl rounded-full" />

        {/* 3D Shield SVG */}
        <svg
          viewBox="0 0 64 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_12px_24px_rgba(22,119,232,0.45)]"
        >
          <defs>
            <linearGradient
              id="shieldGrad"
              x1="0"
              y1="0"
              x2="64"
              y2="74"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#48CAE4" />
              <stop offset="35%" stopColor="#1677E8" />
              <stop offset="100%" stopColor="#0B3C78" />
            </linearGradient>
            <linearGradient
              id="shieldBorder"
              x1="0"
              y1="0"
              x2="64"
              y2="74"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#64DFDF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1677E8" stopOpacity="0.4" />
            </linearGradient>
            <filter id="shieldBevel" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="1.5"
                floodColor="#000000"
                floodOpacity="0.25"
              />
            </filter>
          </defs>
          {/* Main Shield Body */}
          <path
            d="M32 3L60 14V36C60 54.5 48 67 32 72C16 67 4 54.5 4 36V14L32 3Z"
            fill="url(#shieldGrad)"
            stroke="url(#shieldBorder)"
            strokeWidth="2.5"
            filter="url(#shieldBevel)"
          />
          {/* Inner Highlight Outline */}
          <path
            d="M32 7L54 16.5V36C54 50.5 44.5 61.5 32 66.5C19.5 61.5 10 50.5 10 36V16.5L32 7Z"
            fill="none"
            stroke="white"
            strokeOpacity="0.32"
            strokeWidth="1.2"
          />
          {/* Top-Right Specular Light Streak */}
          <path
            d="M32 8L52 17V32C52 32 40 28 32 35C24 42 16 38 12 36V17L32 8Z"
            fill="white"
            fillOpacity="0.2"
          />
          {/* White Checkmark */}
          <path
            d="M23 37L29 43L43 28"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
          />
        </svg>
      </div>
    </motion.div>
  );
};

/* ─── 3D Magnifying Glass (Exact Match to Image 1) ─── */
const MagnifyingGlass3D = () => (
  <div className="relative w-20 h-20 sm:w-24 sm:h-24 pointer-events-none select-none">
    <svg
      viewBox="0 0 84 84"
      fill="none"
      className="w-full h-full overflow-visible drop-shadow-[0_14px_24px_rgba(22,119,232,0.42)]"
    >
      <defs>
        <radialGradient id="lensReflect" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#68D8FF" stopOpacity="0.45" />
          <stop offset="80%" stopColor="#1677E8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0A4EA3" stopOpacity="0.65" />
        </radialGradient>
        <linearGradient
          id="lensRimGrad"
          x1="0"
          y1="0"
          x2="60"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#BEE9E8" />
          <stop offset="25%" stopColor="#62B6CB" />
          <stop offset="70%" stopColor="#1B4965" />
          <stop offset="100%" stopColor="#1677E8" />
        </linearGradient>
        <linearGradient
          id="handleGrad"
          x1="46"
          y1="46"
          x2="78"
          y2="78"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#48CAE4" />
          <stop offset="30%" stopColor="#0077B6" />
          <stop offset="70%" stopColor="#023E8A" />
          <stop offset="100%" stopColor="#0077B6" />
        </linearGradient>
      </defs>
      {/* 45-degree Metallic Blue Handle */}
      <rect
        x="44"
        y="44"
        width="11"
        height="34"
        rx="5.5"
        transform="rotate(-45 44 44)"
        fill="url(#handleGrad)"
        stroke="#0077B6"
        strokeWidth="1.2"
        className="drop-shadow-[3px_5px_8px_rgba(0,0,0,0.3)]"
      />
      {/* Chrome Accent Collar */}
      <rect
        x="43"
        y="43"
        width="13"
        height="5"
        rx="2"
        transform="rotate(-45 43 43)"
        fill="#CAE9FF"
      />
      {/* Translucent Glass Lens */}
      <circle
        cx="34"
        cy="34"
        r="26"
        fill="url(#lensReflect)"
        stroke="url(#lensRimGrad)"
        strokeWidth="4.5"
      />
      {/* White Specular Reflection Arc */}
      <path
        d="M17 28 A 21 21 0 0 1 36 13"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeOpacity="0.9"
      />
    </svg>
  </div>
);

/* ─── Single Floating Applicability Card ─── */
const FloatingApplicabilityCard = ({
  card,
  index,
  className = "",
}: {
  card: ApplicabilityCardData;
  index: number;
  className?: string;
}) => {
  const Icon = card.icon;
  const shouldReduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={cn("w-full transition-all", className)}
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 25, scale: 0.95 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="group relative rounded-3xl bg-white/95 backdrop-blur-xl border border-blue-100/90 p-5 xl:p-6 transition-all duration-300"
        style={{
          boxShadow:
            "0 16px 40px rgba(22,119,232,0.07), 0 3px 12px rgba(0,0,0,0.03), inset 0 1px 2px rgba(255,255,255,0.95)",
        }}
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                y: -5,
                scale: 1.015,
                boxShadow:
                  "0 22px 55px rgba(22,119,232,0.18), 0 6px 18px rgba(21,188,223,0.15), inset 0 1px 2px rgba(255,255,255,1)",
              }
        }
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {/* Subtle Top Edge Illumination Highlight */}
        <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-blue-300/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card Header: Squircle Icon & Number Badge */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EBF4FE] to-[#D9ECFE] border border-blue-200/70 text-[#1677E8] shadow-sm group-hover:scale-105 group-hover:border-[#1677E8]/50 transition-all duration-300">
            <Icon className="h-5 w-5 stroke-[2.2]" />
          </div>

          <span className="text-xs font-bold text-[#1677E8] tracking-wider py-0.5 px-2.5 rounded-full bg-blue-50 border border-blue-100">
            {card.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm xl:text-base font-bold text-[#152443] leading-snug group-hover:text-[#1677E8] transition-colors duration-200">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-[11px] xl:text-xs text-[#64748B] leading-relaxed mt-1.5">
          {card.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

/* ─── Central Amphitheater Rig (Pedestal, Rings, Document, Shield, Badges) ─── */
const CentralAmphitheaterRig = () => {
  const shouldReduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className="relative w-[340px] sm:w-[420px] md:w-[480px] xl:w-[540px] h-[520px] sm:h-[560px] flex items-center justify-center select-none"
      style={{ perspective: "1200px" }}
    >
      {/* ── Rotating 3D Orbital Rings ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
        {/* Ring 1: Wide Outer Cyan Ellipse (Clockwise) */}
        <motion.div
          className="absolute w-[440px] sm:w-[560px] md:w-[680px] xl:w-[780px] h-[220px] sm:h-[260px] md:h-[300px] xl:h-[320px] rounded-[100%] border border-cyan-400/45"
          style={{
            transform: "rotateX(72deg) rotateZ(-10deg)",
            boxShadow:
              "0 0 35px rgba(21,188,223,0.22), inset 0 0 25px rgba(22,119,232,0.15)",
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  rotateZ: [-10, 350],
                }
          }
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Ring 2: Inner Dashed Blue Ellipse (Counter-Clockwise) */}
        <motion.div
          className="absolute w-[360px] sm:w-[460px] md:w-[540px] xl:w-[620px] h-[170px] sm:h-[210px] md:h-[240px] xl:h-[260px] rounded-[100%] border border-dashed border-[#1677E8]/40"
          style={{
            transform: "rotateX(70deg) rotateZ(18deg)",
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  rotateZ: [18, -342],
                }
          }
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Ring 3: Wide Base Ellipse */}
        <div
          className="absolute w-[500px] sm:w-[620px] md:w-[740px] xl:w-[840px] h-[200px] sm:h-[240px] rounded-[100%] border border-blue-200/50"
          style={{
            transform: "rotateX(76deg) translateY(75px)",
            boxShadow: "0 0 45px rgba(22,119,232,0.18)",
          }}
        />
      </div>

      {/* ── 3D Blue Compliance Shield (Right Orbital Flank) ── */}
      <div className="absolute top-[16%] right-[-10px] sm:right-[-25px] md:right-[-45px] xl:right-[-55px] z-30">
        <ComplianceShield3D />
      </div>

      {/* ── Orbital Badges (Document, Analytics, Legal) ── */}
      {/* File Document Badge (Upper Left) */}
      <motion.div
        className="absolute top-[22%] left-[-15px] sm:left-[-30px] md:left-[-50px] z-20"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <OrbitalCoinBadge icon={FileText} />
        </motion.div>
      </motion.div>

      {/* Bar Chart Badge (Lower Left) */}
      <motion.div
        className="absolute bottom-[28%] left-[-8px] sm:left-[-20px] md:left-[-35px] z-20"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <OrbitalCoinBadge icon={BarChart3} />
        </motion.div>
      </motion.div>

      {/* Gavel Badge (Lower Right) */}
      <motion.div
        className="absolute bottom-[26%] right-[-8px] sm:right-[-20px] md:right-[-35px] z-20"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <OrbitalCoinBadge icon={Gavel} />
        </motion.div>
      </motion.div>

      {/* ── Chrome & Blue Spheres along Orbital Paths ── */}
      <ChromeSphere size={14} className="absolute top-[18%] left-[12%] z-10" />
      <BlueGlassSphere size={16} className="absolute top-[12%] right-[16%] z-10" />
      <ChromeSphere size={20} className="absolute bottom-[22%] left-[18%] z-10" />
      <BlueGlassSphere size={14} className="absolute bottom-[20%] right-[16%] z-10" />
      <ChromeSphere size={16} className="absolute top-[48%] -right-8 z-10" />

      {/* ── Central Floating 3D NPPA Document ── */}
      <motion.div
        className="relative z-20 mb-[-20px]"
        initial={{ opacity: 0, y: 35, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 35, scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="relative"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -8, 0],
                  rotateY: [-2, 1, -2],
                  rotateX: [3, 0.5, 3],
                }
          }
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Document Body */}
          <div
            className="w-[230px] sm:w-[260px] md:w-[280px] rounded-3xl bg-gradient-to-b from-white via-white/95 to-blue-50/80 p-5 sm:p-6 border border-white/90 shadow-[0_25px_50px_rgba(22,119,232,0.20),_0_0_0_1px_rgba(21,188,223,0.3)] backdrop-blur-xl relative"
            style={{
              boxShadow:
                "0 22px 50px rgba(22,119,232,0.20), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 2px rgba(255,255,255,0.95), inset 0 -2px 6px rgba(22,119,232,0.06)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-blue-100/70">
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#1677E8]">
                  NPPA
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#152443] -mt-0.5">
                  Applicability
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#15BCDF]" />
                <span className="h-2 w-2 rounded-full bg-[#1677E8]" />
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3.5">
              {[
                { width: "w-28 sm:w-32" },
                { width: "w-32 sm:w-36" },
                { width: "w-24 sm:w-28" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-[#15BCDF] to-[#1677E8] flex items-center justify-center text-white shadow-sm shadow-blue-500/35"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 25,
                      delay: 0.5 + idx * 0.15,
                    }}
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </motion.div>
                  <div className="flex-1 pt-0.5">
                    <div
                      className={cn(
                        "h-2.5 rounded-full bg-gradient-to-r from-blue-200 to-blue-100 mb-1.5",
                        item.width
                      )}
                    />
                    <div className="h-2 w-16 rounded-full bg-blue-100/70" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Status Pill */}
            <div className="mt-5 pt-3 border-t border-blue-100/70 flex items-center justify-between text-[11px] font-semibold text-[#1677E8]">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1677E8]" />
                </span>
                Verified DPCO
              </span>
              <span className="text-muted-foreground text-[10px]">2026/27</span>
            </div>

            {/* ── 3D Magnifying Glass on Bottom Right of Document (Exact Placement) ── */}
            <div className="absolute -bottom-6 -right-7 sm:-bottom-7 sm:-right-8 z-30">
              <MagnifyingGlass3D />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Translucent Circular Pedestal Base ── */}
      <div className="absolute bottom-6 w-full flex flex-col items-center justify-center pointer-events-none -z-0">
        {/* Upper Platform Disc */}
        <div
          className="w-[220px] sm:w-[270px] md:w-[310px] h-[65px] sm:h-[75px] rounded-[100%] border border-cyan-300/70 shadow-[0_12px_32px_rgba(21,188,223,0.3)] relative"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.96) 0%, rgba(227,243,255,0.85) 45%, rgba(188,224,255,0.45) 100%)",
          }}
        >
          {/* Luminous Inner Radial Glow */}
          <div
            className="absolute inset-2 rounded-[100%]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(21,188,223,0.35) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Lower Stepped Platform Disc */}
        <div
          className="w-[280px] sm:w-[340px] md:w-[390px] h-[80px] sm:h-[95px] rounded-[100%] border border-blue-200/60 -mt-[52px] sm:-mt-[62px] shadow-[0_22px_55px_rgba(22,119,232,0.22)]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(235,245,255,0.75) 0%, rgba(206,230,255,0.5) 50%, rgba(180,215,255,0.2) 100%)",
          }}
        />

        {/* Ambient Ground Light Floor Bloom */}
        <div className="w-[360px] sm:w-[440px] md:w-[500px] h-[80px] rounded-[100%] bg-[#15BCDF]/25 blur-3xl -mt-[45px] pointer-events-none" />
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT: NPPA APPLICABILITY SECTION
   Pixel-Accurate Recreation of Reference Image 1
   ═══════════════════════════════════════════════════════════════ */
export const NppaApplicabilitySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const headerRef = React.useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section
      id="nppa-applicability-section"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F7FAFE] to-[#FFFFFF] py-14 sm:py-18 lg:py-20"
    >
      {/* ── SUPPLIED OFFICIAL BACKGROUND IMAGE (Direct Match to Change One) ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <img
          src={nppaBgImg}
          alt="NPPA Applicability Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle translucent overlay to ensure text readability and blend with adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 pointer-events-none" />
      </div>

      {/* ── SECTION CONTENT CONTAINER ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── HEADER ── */}
        <motion.div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Eyebrow Label with flanking horizontal rules */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-blue-300" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#1677E8]">
              APPLICABILITY
            </p>
            <span className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-300" />
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#152443] tracking-tight leading-tight">
            Who Should Assess{" "}
            <span className="text-[#1677E8] drop-shadow-sm">
              NPPA Applicability?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Applicability and filing responsibilities depend on the entity's
            actual role, product classification, and relevant DPCO provisions.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            DESKTOP MASTER COMPOSITION (lg and xl screens)
            Exact pixel-accurate reproduction of Reference Image 1
           ═══════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block relative w-full h-[720px] xl:h-[760px]">
          {/* ── CENTER: 3D PEDESTAL, ORBITAL RINGS, NPPA DOCUMENT & SHIELD ── */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <CentralAmphitheaterRig />
          </div>

          {/* ── THE SIX FLOATING CARDS (ORBITAL ARRANGEMENT AROUND CENTER) ── */}
          {applicabilityCards.map((card, idx) => (
            <div
              key={card.number}
              className={cn(
                "absolute w-[310px] xl:w-[350px] z-20",
                card.desktopClass
              )}
            >
              <FloatingApplicabilityCard card={card} index={idx} />
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            TABLET & MOBILE COMPOSITION (< lg screens)
            Central Document first, then clean responsive cards below
           ═══════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden flex flex-col items-center gap-10">
          {/* Scaled Central Visual */}
          <div className="w-full flex justify-center py-4">
            <CentralAmphitheaterRig />
          </div>

          {/* 6 Cards Grid (1 col on mobile, 2 cols on tablet) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {applicabilityCards.map((card, idx) => (
              <FloatingApplicabilityCard
                key={card.number}
                card={card}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default NppaApplicabilitySection;
