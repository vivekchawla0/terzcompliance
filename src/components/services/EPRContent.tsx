import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Leaf,
  FileText,
  Building,
  Shield,
  Info,
  Package,
  Truck,
  Factory,
  Recycle,
  Battery,
  Cpu,
  Trash2,
  Globe,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/* ─── Reusable scroll-triggered wrapper ─── */
const RevealSection = ({
  children,
  className,
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 60, filter: "blur(8px)" }
      }
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Animated stat pill ─── */
const StatPill = ({
  value,
  label,
  delay,
}: { value: string; label: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.8, rotateX: 40 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, rotateX: 0 }
          : { opacity: 0, scale: 0.8, rotateX: 40 }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <span className="text-3xl lg:text-4xl font-bold text-primary">{value}</span>
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">
        {label}
      </span>
    </motion.div>
  );
};

/* ─── Three EPR Categories ─── */
const eprCategories = [
  {
    icon: Cpu,
    title: "E-Waste (Electronic Waste)",
    color: "from-blue-500/10 to-background",
    borderColor: "border-blue-500/30",
    description: "E-Waste Management Rules, 2022 govern producers, manufacturers, and refurbishers of electrical & electronic equipment. Registration is mandatory on the CPCB EPR portal.",
    stakeholders: ["Manufacturer", "Producer", "Refurbisher", "Recycler"],
    authority: "CPCB",
  },
  {
    icon: Package,
    title: "Plastic Waste",
    color: "from-green-500/10 to-background",
    borderColor: "border-green-500/30",
    description: "Plastic Waste Management Rules, 2016 (amended 2022) mandate EPR authorization for producers, importers, and brand owners (PIBOs) dealing in plastic packaging.",
    stakeholders: ["Producer", "Importer", "Brand Owner"],
    authority: "CPCB",
  },
  {
    icon: Battery,
    title: "Battery Waste",
    color: "from-amber-500/10 to-background",
    borderColor: "border-amber-500/30",
    description: "Battery Waste Management Rules, 2022 place EPR obligation on producers (manufacturers & importers) to meet collection and recycling targets as per Schedule II.",
    stakeholders: ["Manufacturer", "Producer", "Importer", "Recycler"],
    authority: "CPCB",
  },
];

/* ─── EPR Registration Process ─── */
const processSteps = [
  { title: "Schedule a Consultation", description: "Discuss your business operations, product categories, and waste generation volumes with our EPR experts." },
  { title: "Business Evaluation & Categorization", description: "Determine the applicable EPR category (e-waste, plastic waste, or battery waste) and the specific obligations based on your business type." },
  { title: "Registration & Licensing Guidelines", description: "Receive a detailed checklist of documents, forms, and regulatory requirements specific to your EPR category." },
  { title: "Documentation & Paperwork", description: "Prepare and organize all required documents including company details, product information, waste quantities, and recycler agreements." },
  { title: "Portal Registration on CPCB", description: "File the application on the Central Pollution Control Board (CPCB) EPR portal with all supporting documentation." },
  { title: "License/Certificate Issuance", description: "Upon successful review, CPCB issues the EPR Registration Certificate with specific collection and recycling targets." },
  { title: "Annual Compliance & Returns", description: "File annual returns with CPCB, maintain toll-free number records, and ensure collection targets are met through recycler partnerships." },
];

/* ─── Key Obligations ─── */
const keyObligations = [
  { icon: Recycle, title: "Collection Targets", description: "Meet annual collection and recycling targets as specified by CPCB in the EPR certificate." },
  { icon: ClipboardCheck, title: "Annual Returns", description: "File annual returns with CPCB detailing waste collected, recycled, and disposed of during the financial year." },
  { icon: Globe, title: "Recycler Agreements", description: "Execute formal agreements with authorized recyclers/dismantlers registered with SPCB/PCC." },
  { icon: Shield, title: "EPR Plan Submission", description: "Submit a comprehensive EPR plan detailing collection mechanisms, awareness programs, and channelization strategy." },
];

/* ─── Key Rules ─── */
const keyRules = [
  "E-Waste (Management) Rules, 2022",
  "Plastic Waste Management Rules, 2016 (Amendment 2022)",
  "Battery Waste Management Rules, 2022",
  "Hazardous and Other Wastes (Management & Transboundary Movement) Rules, 2016",
  "Environment Protection Act, 1986",
];

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "What is Extended Producer Responsibility (EPR)?",
    a: "EPR is an environmental policy approach where a producer's responsibility for a product is extended to the post-consumer stage of a product's life cycle. Producers must manage the collection, recycling, and environmentally sound disposal of their products.",
  },
  {
    q: "Who needs EPR registration in India?",
    a: "Producers, importers, brand owners (for plastic waste), manufacturers, and recyclers dealing in e-waste, plastic waste packaging, or batteries must obtain EPR registration from CPCB.",
  },
  {
    q: "What is the role of CPCB in EPR?",
    a: "The Central Pollution Control Board (CPCB) is the national regulatory authority that grants EPR registrations, sets collection/recycling targets, monitors compliance, and enforces penalties for non-compliance.",
  },
  {
    q: "What are the penalties for non-compliance?",
    a: "Non-compliance with EPR obligations can result in environmental compensation, cancellation of registration, and prosecution under the Environment Protection Act, 1986. CPCB can impose fines and direct closure of operations.",
  },
  {
    q: "How often must EPR returns be filed?",
    a: "EPR annual returns must be filed with CPCB on an annual basis, typically before June 30 of the following financial year, detailing the waste collected, recycled, and targets achieved.",
  },
];

/* ═══════════════════════════════════════════════ */
const EPRContent = () => {
  return (
    <div className="space-y-20 py-12">
      {/* ── Section 1: Definition ── */}
      <RevealSection className="max-w-4xl mx-auto text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          Definition
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          What is <span className="text-primary">Extended Producer Responsibility (EPR)</span>?
        </h2>
        <blockquote className="border-l-4 border-primary/40 pl-6 text-left italic text-muted-foreground leading-relaxed">
          "Extended Producer Responsibility (EPR) is the responsibility of any producer of electrical or electronic equipment, plastic packaging, or batteries, for channelization of their end-of-life products to ensure environmentally sound management of such waste."
        </blockquote>
        <p className="text-sm text-muted-foreground mt-3">
           -  Environment Protection Act, 1986
        </p>
        <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl mx-auto">
          Under the Ministry of Environment, Forest and Climate Change (MoEFCC), the Central Pollution Control Board (CPCB) regulates EPR registrations across three major waste categories: Electronic Waste, Plastic Waste, and Battery Waste. All producers, importers, brand owners, and recyclers must register on the CPCB EPR portal.
        </p>
      </RevealSection>

      {/* ── Section 2: Stats ── */}
      <RevealSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <StatPill value="3" label="Waste Categories" delay={0} />
          <StatPill value="CPCB" label="Regulatory Body" delay={0.1} />
          <StatPill value="5 Yr" label="Validity Period" delay={0.2} />
          <StatPill value="Annual" label="Returns Filing" delay={0.3} />
        </div>
      </RevealSection>

      {/* ── Section 3: Three Pillars ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Categories
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            EPR Waste Categories
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {eprCategories.map((cat, idx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={idx}
                ref={ref}
                className={`rounded-2xl border-2 ${cat.borderColor} bg-gradient-to-br ${cat.color} p-6`}
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <cat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{cat.title}</h3>
                    <p className="text-xs text-muted-foreground">Authority: {cat.authority}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Stakeholders</p>
                  {cat.stakeholders.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 4: Key Rules ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Framework
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Regulatory Framework
          </h2>
        </div>

        <div className="space-y-3">
          {keyRules.map((rule, idx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={idx}
                ref={ref}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-md transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Leaf className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{rule}</p>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 5: Registration Process ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            EPR Registration Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step-by-step journey from consultation to CPCB EPR certificate issuance and ongoing compliance.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-4">
            {processSteps.map((step, idx) => {
              const ref = useRef<HTMLDivElement>(null);
              const isInView = useInView(ref, { once: true });

              return (
                <motion.div
                  key={idx}
                  ref={ref}
                  className="relative flex items-start gap-4 pl-14"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                >
                  <motion.div
                    className="absolute left-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg shadow-primary/25"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: idx * 0.08 + 0.1, type: "spring", stiffness: 200 }}
                  >
                    {idx + 1}
                  </motion.div>
                  <div className="rounded-xl border border-border bg-card px-5 py-3 hover:border-primary/40 transition-colors flex-1">
                    <h4 className="text-sm font-bold text-foreground">{step.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ── Section 6: Key Obligations ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Compliance
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Key EPR Obligations
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {keyObligations.map((item, idx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={idx}
                ref={ref}
                className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background p-5 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 7: FAQ ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={idx}
                ref={ref}
                className="rounded-2xl border-2 border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                <h4 className="font-bold text-foreground flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-primary flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                  {faq.a}
                </p>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── CTA ── */}
      <RevealSection className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Need EPR Registration Support?
        </h3>
        <p className="text-muted-foreground mb-6">
          From e-waste to plastic and battery waste  -  our experts handle the complete CPCB registration and annual compliance process.
        </p>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button asChild size="lg" className="shadow-lg shadow-primary/25">
            <Link to="/contact">Get Expert Assistance →</Link>
          </Button>
        </motion.div>
      </RevealSection>
    </div>
  );
};

export default EPRContent;
