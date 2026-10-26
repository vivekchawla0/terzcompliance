import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  IndianRupee,
  Scale,
  BarChart3,
  ClipboardCheck,
  FileText,
  Bell,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Compliance Data ─── */
interface ComplianceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
}

const complianceData: ComplianceItem[] = [
  {
    icon: IndianRupee,
    title: "Regulatory Pricing Obligations",
    description:
      "Medical devices may be subject to pricing regulations under the DPCO, 2013. Understanding whether your products are scheduled or non-scheduled determines specific compliance requirements.",
    badge: "DPCO 2013",
  },
  {
    icon: Scale,
    title: "Ceiling Price Compliance",
    description:
      "Scheduled medical devices are subject to ceiling prices fixed by NPPA. Ensuring that the MRP does not exceed the applicable ceiling price is a fundamental compliance requirement.",
    badge: "Ceiling Limits",
  },
  {
    icon: BarChart3,
    title: "MRP Monitoring",
    description:
      "NPPA monitors the maximum retail prices of medical devices. For non-scheduled devices, the annual MRP increase is restricted under the applicable DPCO provision.",
    badge: "10% Annual Cap",
  },
  {
    icon: ClipboardCheck,
    title: "Product Information Accuracy",
    description:
      "Accurate and complete product and model information must be maintained on IPDMS 2.0, enabling NPPA to link pricing data to specific medical devices.",
    badge: "IPDMS 2.0 Data",
  },
  {
    icon: FileText,
    title: "Pricing Documentation",
    description:
      "Maintaining comprehensive pricing records, including price history, applicable duty structures, and supporting documentation, is essential for demonstrating compliance.",
    badge: "Audit Readiness",
  },
  {
    icon: Bell,
    title: "Regulatory Notifications",
    description:
      "NPPA regularly issues notifications, circulars, and amendments. Monitoring and responding to these communications in a timely manner is part of ongoing compliance.",
    badge: "Official Gazettes",
  },
];

/* ─── 3D Medical Compliance Clipboard (Left Decorative Object) ─── */
const ComplianceClipboard3D = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-64 h-80 flex items-center justify-center select-none pointer-events-none perspective-[1200px]">
      {/* Outer Orbital Curve 1 */}
      <motion.svg
        viewBox="0 0 260 220"
        className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none"
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: [0, 360],
              }
        }
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <defs>
          <linearGradient id="clipOrbit1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <ellipse
          cx="130"
          cy="110"
          rx="110"
          ry="52"
          fill="none"
          stroke="url(#clipOrbit1)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          transform="rotate(-20 130 110)"
        />
        {/* Glowing satellite particle */}
        <circle cx="235" cy="92" r="3" fill="#3B82F6" opacity="0.85">
          <animate
            attributeName="opacity"
            values="0.4;0.95;0.4"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </motion.svg>

      {/* Outer Orbital Curve 2 */}
      <motion.svg
        viewBox="0 0 260 220"
        className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none"
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: [360, 0],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <ellipse
          cx="130"
          cy="110"
          rx="98"
          ry="45"
          fill="none"
          stroke="#3B82F6"
          strokeOpacity="0.25"
          strokeWidth="1"
          transform="rotate(30 130 110)"
        />
        <circle cx="45" cy="92" r="2.5" fill="#60A5FA" opacity="0.75" />
      </motion.svg>

      {/* Main 3D Floating Clipboard Entity */}
      <motion.div
        className="relative z-10 w-48 h-64 sm:w-52 sm:h-72"
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-8, 8, -8],
                rotateY: [-5, 5, -5],
                rotateX: [3, -3, 3],
                rotateZ: [-1.5, 1.5, -1.5],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Layer 1: Board Base with 3D drop shadow */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200/90 border border-slate-300 shadow-[0_16px_36px_-10px_rgba(59,130,246,0.22)]"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Subtle wooden/acrylic beveled rim */}
          <div className="absolute inset-0.5 rounded-[14px] border border-white/60 pointer-events-none" />
        </div>

        {/* Layer 2: Sheet of Medical Compliance Paper */}
        <div
          className="absolute inset-2.5 sm:inset-3 top-5 rounded-xl bg-white border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] p-3 flex flex-col justify-between"
          style={{ transform: "translateZ(8px)" }}
        >
          {/* Header Bar */}
          <div className="border-b border-slate-100 pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold tracking-wider text-slate-800 uppercase">
                  NPPA • DPCO 2013
                </span>
              </div>
              <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200/60">
                ACTIVE
              </span>
            </div>
            <div className="h-1 w-14 bg-primary/20 rounded-full mt-1.5" />
          </div>

          {/* Checklist Items (Simulated Medical Pricing Verification) */}
          <div className="space-y-2 py-1">
            {[
              { label: "IPDMS 2.0 Registration", ok: true },
              { label: "Ceiling Price Audit", ok: true },
              { label: "Form V Filing Check", ok: true },
              { label: "10% Annual MRP Review", ok: true },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="h-1.5 bg-slate-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Regulatory Stamp / Footer Badge */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full border border-primary/40 bg-primary/5 flex items-center justify-center">
                <span className="text-[8px] font-extrabold text-primary">₹</span>
              </div>
              <span className="text-[8px] font-medium text-slate-500">
                Sec. 20 Compliant
              </span>
            </div>
            <div className="text-[8px] font-mono text-slate-400">#N-2026</div>
          </div>
        </div>

        {/* Layer 3: Metallic Mechanical Spring Clip at Top */}
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-7 rounded-md bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 border border-slate-300 shadow-md flex items-center justify-center z-20"
          style={{ transform: "translateZ(18px)" }}
        >
          {/* Clip Rivet Details */}
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500/60 shadow-inner" />
            <div className="w-6 h-1 rounded-full bg-slate-500/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500/60 shadow-inner" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ─── Translucent Blue Compliance Shield (Right Decorative Object) ─── */
const ComplianceShield3D = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-64 h-80 flex items-center justify-center select-none pointer-events-none perspective-[1200px]">
      {/* Outer Orbital Curve 1 */}
      <motion.svg
        viewBox="0 0 260 220"
        className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none"
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: [360, 0],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <defs>
          <linearGradient id="shieldOrbit1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <ellipse
          cx="130"
          cy="110"
          rx="110"
          ry="52"
          fill="none"
          stroke="url(#shieldOrbit1)"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          transform="rotate(25 130 110)"
        />
        <circle cx="30" cy="130" r="3" fill="#60A5FA" opacity="0.85">
          <animate
            attributeName="opacity"
            values="0.3;0.95;0.3"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </circle>
      </motion.svg>

      {/* Outer Orbital Curve 2 */}
      <motion.svg
        viewBox="0 0 260 220"
        className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none"
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: [0, 360],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <ellipse
          cx="130"
          cy="110"
          rx="98"
          ry="45"
          fill="none"
          stroke="#60A5FA"
          strokeOpacity="0.25"
          strokeWidth="1"
          transform="rotate(-28 130 110)"
        />
        <circle cx="215" cy="120" r="2.5" fill="#3B82F6" opacity="0.75" />
      </motion.svg>

      {/* Main 3D Floating Translucent Shield */}
      <motion.div
        className="relative z-10 w-48 h-64 sm:w-52 sm:h-72 flex items-center justify-center"
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [8, -8, 8],
                rotateY: [5, -5, 5],
                rotateX: [-3, 3, -3],
                rotateZ: [1.5, -1.5, 1.5],
              }
        }
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Layer 1: Ambient Back Glow */}
        <div className="absolute w-36 h-48 rounded-full bg-primary/20 blur-2xl -z-10" />

        {/* Layer 2: Translucent Glass Shield SVG */}
        <svg
          viewBox="0 0 200 240"
          className="w-44 h-56 sm:w-48 sm:h-64 drop-shadow-[0_16px_32px_rgba(59,130,246,0.22)]"
          style={{ transform: "translateZ(8px)" }}
        >
          <defs>
            {/* Glass Face Gradient */}
            <linearGradient id="shieldGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#DBEAFE" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.45" />
            </linearGradient>
            {/* Glass Highlight Border */}
            <linearGradient id="shieldRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.4" />
            </linearGradient>
            {/* Checkmark Glow */}
            <filter id="checkGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Shield Shell */}
          <path
            d="M 100 12 C 145 12 182 32 182 78 C 182 145 138 198 100 226 C 62 198 18 145 18 78 C 18 32 55 12 100 12 Z"
            fill="url(#shieldGlass)"
            stroke="url(#shieldRim)"
            strokeWidth="2.5"
            className="backdrop-blur-md"
          />

          {/* Inner Decorative Contour */}
          <path
            d="M 100 24 C 137 24 168 40 168 80 C 168 136 130 182 100 208 C 70 182 32 136 32 80 C 32 40 63 24 100 24 Z"
            fill="none"
            stroke="#3B82F6"
            strokeOpacity="0.25"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />

          {/* Subtle Horizontal Medical Grid / Watermark */}
          <path
            d="M 60 95 L 140 95 M 65 115 L 135 115 M 75 135 L 125 135"
            stroke="#93C5FD"
            strokeOpacity="0.3"
            strokeWidth="1"
          />

          {/* Central Glowing Checkmark Emblem */}
          <g transform="translate(100, 105)" filter="url(#checkGlow)">
            {/* Glowing checkmark halo circle */}
            <circle cx="0" cy="0" r="28" fill="#3B82F6" fillOpacity="0.12" />
            <circle
              cx="0"
              cy="0"
              r="24"
              fill="#FFFFFF"
              fillOpacity="0.9"
              stroke="#3B82F6"
              strokeWidth="2"
            />
            {/* Dynamic pulsating Check Path */}
            <path
              d="M -10 -1 L -3 6 L 11 -8"
              fill="none"
              stroke="#2563EB"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>

        {/* Floating Verified Badge */}
        <div
          className="absolute bottom-2 rounded-full bg-white/95 border border-primary/30 px-3 py-1 shadow-lg backdrop-blur-sm flex items-center gap-1.5"
          style={{ transform: "translateZ(20px)" }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold text-primary tracking-wide">
            DPCO COMPLIANT
          </span>
        </div>
      </motion.div>
    </div>
  );
};

/* ─── Ambient Particles & Light Movement ─── */
const AmbientAtmosphere = () => {
  const shouldReduceMotion = useReducedMotion();

  // Subtle floating particle coordinates
  const particles = React.useMemo(
    () => [
      { id: 1, x: "10%", y: "18%", size: 4, dur: 7, delay: 0 },
      { id: 2, x: "22%", y: "65%", size: 3, dur: 9, delay: 1.2 },
      { id: 3, x: "40%", y: "14%", size: 4, dur: 8, delay: 0.5 },
      { id: 4, x: "60%", y: "82%", size: 3, dur: 10, delay: 2.1 },
      { id: 5, x: "78%", y: "20%", size: 5, dur: 7.5, delay: 0.8 },
      { id: 6, x: "90%", y: "60%", size: 3, dur: 9.5, delay: 1.5 },
      { id: 7, x: "16%", y: "85%", size: 3, dur: 8.5, delay: 2.4 },
      { id: 8, x: "84%", y: "88%", size: 4, dur: 7, delay: 1.7 },
      { id: 9, x: "50%", y: "45%", size: 3, dur: 11, delay: 0.3 },
      { id: 10, x: "32%", y: "35%", size: 2.5, dur: 9, delay: 1.9 },
    ],
    []
  );

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10"
    >
      {/* Soft Pale Blue Ambient Glow Orbs - Preserving crisp light theme */}
      <motion.div
        className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-gradient-to-br from-primary/8 via-sky-200/20 to-transparent blur-3xl"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [-15, 15, -15],
                y: [-10, 10, -10],
                opacity: [0.4, 0.7, 0.4],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-primary/10 via-brand-100/30 to-transparent blur-3xl"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [15, -15, 15],
                y: [12, -12, 12],
                opacity: [0.35, 0.65, 0.35],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-100/25 blur-3xl rounded-full" />

      {/* Subtle Floating Micro-Particles */}
      {!shouldReduceMotion &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/30"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 8px rgba(59, 130, 246, 0.4)",
            }}
            animate={{
              y: [-12, 12, -12],
              x: [-6, 6, -6],
              opacity: [0.2, 0.65, 0.2],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
};

/* ─── Individual Compliance Card with Interactive Icon & Staggered Reveal ─── */
interface ComplianceCardProps {
  item: ComplianceItem;
  index: number;
  isInView: boolean;
}

const ComplianceCard = ({ item, index, isInView }: ComplianceCardProps) => {
  const Icon = item.icon;
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 35, scale: 0.96 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: shouldReduceMotion ? 0 : 35, scale: 0.96 }
      }
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? {} : { y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl border border-border/80 bg-card p-6 lg:p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.12)] hover:border-primary/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle Top-Corner Pale Blue Accent Glow on Card Hover */}
      <div
        className={cn(
          "absolute -top-12 -right-12 w-28 h-28 rounded-full bg-primary/10 blur-xl pointer-events-none transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />

      <div>
        {/* Card Header: Icon with Hover Scale & Glow + Pill Tag */}
        <div className="flex items-center justify-between mb-5">
          <motion.div
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/15 text-primary transition-all duration-300"
            animate={
              isHovered && !shouldReduceMotion
                ? {
                    scale: 1.12,
                    boxShadow: "0 0 24px -2px rgba(59, 130, 246, 0.4)",
                  }
                : {
                    scale: 1,
                    boxShadow: "0 0 0px 0px rgba(59, 130, 246, 0)",
                  }
            }
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <motion.div
              animate={
                isHovered && !shouldReduceMotion
                  ? { rotate: [0, -6, 6, 0] }
                  : { rotate: 0 }
              }
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Icon className="h-6 w-6 text-primary transition-colors" />
            </motion.div>
          </motion.div>

          <span className="text-[11px] font-semibold text-primary/80 bg-primary/[0.07] px-2.5 py-1 rounded-full border border-primary/15">
            {item.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors duration-200">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Bottom Subtle Indicator Line */}
      <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between">
        <span className="text-[11px] font-medium text-slate-400 group-hover:text-primary/70 transition-colors">
          Statutory Requirement
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors" />
      </div>
    </motion.div>
  );
};

/* ─── Main Transformed NppaComplianceSection Component ─── */
export const NppaComplianceSection = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={containerRef}
      className="w-full relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-primary/[0.02] via-primary/[0.04] to-transparent border-y border-primary/10 overflow-hidden"
    >
      {/* Atmospheric Ambient Light & Floating Particles */}
      <AmbientAtmosphere />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Upper Hero Grid: 3D Clipboard (Left) + Header Text (Center) + 3D Shield (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] xl:grid-cols-[320px_1fr_320px] items-center justify-between gap-6 xl:gap-8 mb-12 sm:mb-16">
          {/* Left Column: 3D Clipboard (Desktop / Laptop) */}
          <div className="hidden lg:flex items-center justify-center">
            <ComplianceClipboard3D />
          </div>

          {/* Center Column: Section Title & Subtitle */}
          <motion.div
            className="text-center max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: shouldReduceMotion ? 0 : 25 }
            }
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Regulatory Obligations
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight">
              Why Is NPPA Compliance Important for Medical Device Businesses?
            </h2>
            <p className="text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed">
              Understanding your pricing compliance obligations is essential for
              uninterrupted market access and regulatory standing.
            </p>
          </motion.div>

          {/* Right Column: 3D Shield (Desktop / Laptop) */}
          <div className="hidden lg:flex items-center justify-center">
            <ComplianceShield3D />
          </div>
        </div>

        {/* Mobile / Tablet Presentation of 3D Objects: Centered & Unclipped */}
        <div className="lg:hidden flex items-center justify-center gap-4 sm:gap-8 mb-10 w-full overflow-hidden">
          <div className="scale-[0.78] sm:scale-[0.88] origin-center">
            <ComplianceClipboard3D />
          </div>
          <div className="scale-[0.78] sm:scale-[0.88] origin-center">
            <ComplianceShield3D />
          </div>
        </div>

        {/* 6 Compliance Cards in a Balanced 3-Column, 2-Row Layout on Desktop */}
        <div className="max-w-5xl xl:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {complianceData.map((item, index) => (
            <ComplianceCard
              key={item.title}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NppaComplianceSection;
