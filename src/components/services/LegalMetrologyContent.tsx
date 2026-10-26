import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  FileCheck,
  Building,
  Globe,
  Scale,
  ChevronRight,
  Info,
  Package,
  Ruler,
  Factory,
  Truck,
  Store,
  Wrench,
  Users,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

/* ─── Stakeholder data (Model Approval) ─── */
const modelApprovalStakeholders = [
  {
    icon: Factory,
    title: "Manufacturer",
    description:
      "Anyone who manufactures or assembles a weight or measure, or causes to be put any mark on a weight or measure claiming that it was manufactured by such person or firm.",
  },
  {
    icon: Truck,
    title: "Importer",
    description:
      "Any person or firm which carries on the business of bringing into India from a place outside India.",
  },
  {
    icon: Store,
    title: "Dealer",
    description:
      "Anyone involved in the buying, selling, supplying, or distributing of weights and measures directly or indirectly, including a manufacturer or importer.",
  },
  {
    icon: Wrench,
    title: "Repairer",
    description:
      "Anyone who repairs, adjusts, cleans, lubricates, or paints, or renders any other service to a weight or measure to ensure conformity to Legal Metrology Act standards.",
  },
];

/* ─── Stakeholder data (Packaged Commodity) ─── */
const packagedCommodityStakeholders = [
  {
    icon: Factory,
    title: "Manufacturer",
    description:
      "Anyone who manufactures a packaged commodity or causes to be put any mark on a packaged commodity claiming the commodity to be manufactured by such person or firm.",
  },
  {
    icon: Truck,
    title: "Importer",
    description:
      "Any person or firm which carries on the business of bringing into India from a place outside India.",
  },
  {
    icon: Package,
    title: "Packer",
    description:
      "Any person or firm which pre-packs any commodity whether in any bottle, tin, wrapper or otherwise in units suitable for sale, whether retail or wholesale.",
  },
];

/* ─── Model Approval Process Steps ─── */
const modelApprovalSteps = [
  { title: "Share Preliminary Information", description: "The Importer/Manufacturer shares technical specifications and user manuals with NKG experts." },
  { title: "Regulatory Document Review", description: "If the product falls under Legal Metrology (Model Approval) 2011, NKG team shares the necessary checklist." },
  { title: "Application Submission", description: "After receiving executed documents, NKG applies online and offline to Central Legal Metrology Department." },
  { title: "Sample Submission", description: "NKG team submits samples of models to designated laboratories for testing." },
  { title: "Test Report Issuance", description: "If the designated laboratory issues a satisfactory test report, NKG submits it to the Central Department." },
  { title: "Test Report to HQ", description: "The Central Legal Metrology Department assigns an officer to the case." },
  { title: "Application Processing", description: "The officer scrutinizes all submitted documents. Further clarification may be requested." },
  { title: "Grant of Approval", description: "If satisfied, the officer grants the Certificate of Model Approval under Model Approval Rules 2011." },
];

/* ─── Packaged Commodities Process Steps ─── */
const packagedCommoditySteps = [
  { title: "Share Preliminary Information", description: "The Importer/Manufacturer/Packer shares product details with NKG." },
  { title: "Regulatory Document Review", description: "If the product falls under Packaged Commodity Rules 2011, NKG shares the necessary checklist." },
  { title: "Application Submission", description: "After receiving executed documents, NKG applies online/offline to Central Legal Metrology Department." },
  { title: "Officer Assignment", description: "The Central Department assigns a processing officer to the case." },
  { title: "Application Processing", description: "The officer scrutinizes all submitted documents and may request further clarification." },
  { title: "Grant of Approval", description: "If satisfied, the officer grants the Certificate of Registration under Packaged Commodities Rules 2011." },
];

/* ─── Key Laws ─── */
const keyLaws = [
  "The Legal Metrology Act, 2009",
  "The Legal Metrology (Packaged Commodities) Rules, 2011",
  "The Legal Metrology (General) Rules, 2011",
  "The Legal Metrology (Approval of Models) Rules, 2011",
  "The Legal Metrology (National Standards) Rules, 2011",
  "The Legal Metrology (Numeration) Rules, 2011",
  "The Indian Institute of Legal Metrology Rules, 2011",
];

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "What are W & M laws?",
    a: "They ensure uniform enforcement of Standards in Weights & Measures throughout India, governed by The Legal Metrology Act, 2009 and its associated rules.",
  },
  {
    q: "Is there any license to manufacture, sell or repair Weights & Measures?",
    a: "Yes, the Department issues licences to the manufacturer, dealer and repairer of Weights & Measures. For dealing in weighing & measuring instruments, the licence is a must.",
  },
  {
    q: "Who is the competent authority to grant licence?",
    a: "Controller, Legal Metrology is the competent authority to grant the licence. Applications can be submitted to the Inspectorate Office of the concerned district.",
  },
  {
    q: "What is a pre-packed commodity?",
    a: "A commodity placed in a package without the purchaser being present, so that the product contained therein has a pre-determined value, whether sealed or opened.",
  },
];

/* ═══════════════════════════════════════════════ */
const LegalMetrologyContent = () => {
  return (
    <div className="space-y-20 py-12">
      {/* ── Section 1: Definition ── */}
      <RevealSection className="max-w-4xl mx-auto text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          Definition
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          What is <span className="text-primary">Legal Metrology</span>?
        </h2>
        <blockquote className="border-l-4 border-primary/40 pl-6 text-left italic text-muted-foreground leading-relaxed">
          "Legal Metrology is an ACT to establish and enforce standards of weights and measures, regulate trade and commerce in weight, measures and other goods which are sold or distributed by weights, measure or number."
        </blockquote>
        <p className="text-sm text-muted-foreground mt-3">
           -  The Legal Metrology Act, 2009
        </p>
        <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl mx-auto">
          Under the Department of Consumer Affairs, Food & Public Distribution, the Directorate of Legal Metrology is constituted as a separate wing in India. Rules, compliances, and standards are enforced through the central HQ in New Delhi, and delegated to respective states for ensuring effective and ongoing compliance.
        </p>
      </RevealSection>

      {/* ── Section 2: Stats ── */}
      <RevealSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <StatPill value="2009" label="Act Enacted" delay={0} />
          <StatPill value="7" label="Key Rules" delay={0.1} />
          <StatPill value="5000+" label="Brands Registered" delay={0.2} />
          <StatPill value="100%" label="Transparency" delay={0.3} />
        </div>
      </RevealSection>

      {/* ── Section 3: Key Laws ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Framework
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Key Legislative Framework
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {keyLaws.map((law, idx) => {
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
                  <Scale className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{law}</p>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 4: Two Pillars ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Two Pillars
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Who Needs Legal Metrology Registration?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Model Approval */}
          {(() => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background p-6"
                initial={{ opacity: 0, x: -40, rotateY: -10 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Ruler className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Model Approval Rules, 2011</h3>
                    <p className="text-xs text-muted-foreground">Weighing & Measuring Equipment</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Manufacturers and importers of weighing and measuring equipment prescribed under the Legal Metrology Act, 2009 are required to take approval of the Government of India before manufacturing or import.
                </p>

                <div className="space-y-3">
                  {modelApprovalStakeholders.map((s, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.08 }}
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                        <s.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{s.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })()}

          {/* Packaged Commodity */}
          {(() => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                className="rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-background p-6"
                initial={{ opacity: 0, x: 40, rotateY: 10 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Packaged Commodity Rules, 2011</h3>
                    <p className="text-xs text-muted-foreground">Pre-packed Commodities</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  A 'pre-packaged commodity' is defined as a commodity placed in a package without the purchaser being present, so that the product contained therein has a pre-determined quantity.
                </p>

                <div className="space-y-3">
                  {packagedCommodityStakeholders.map((s, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.08 }}
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                        <s.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{s.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })()}
        </div>
      </RevealSection>

      {/* ── Section 5: Model Approval Process ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Model Approval Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step-by-step journey from preliminary information to grant of Certificate of Model Approval.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-4">
            {modelApprovalSteps.map((step, idx) => {
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

      {/* ── Section 6: Packaged Commodities Process ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Packaged Commodities Registration Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step-by-step journey from product details to grant of Certificate of Registration.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-4">
            {packagedCommoditySteps.map((step, idx) => {
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
          Need Legal Metrology Compliance?
        </h3>
        <p className="text-muted-foreground mb-6">
          From model approval to packaged commodity certification, our experts handle the entire process.
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

export default LegalMetrologyContent;
