import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  FileText,
  Building,
  Shield,
  ChevronRight,
  Info,
  Package,
  Truck,
  Factory,
  Users,
  ClipboardCheck,
  ArrowRight,
  Landmark,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Banknote,
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

/* ─── Documents Required ─── */
const documentsRequired = [
  { icon: CreditCard, title: "PAN Card", description: "PAN card of the applicant (individual or firm/company)" },
  { icon: Users, title: "Aadhaar / Voter ID", description: "Identity proof of the proprietor, partner, or director" },
  { icon: Building, title: "Address Proof", description: "Electricity bill, rent agreement, or sale deed of business premises" },
  { icon: Landmark, title: "Bank Certificate / Cancelled Cheque", description: "Pre-printed cancelled cheque or bank certificate with account details" },
  { icon: FileText, title: "Certificate of Incorporation", description: "For companies/LLPs  -  MOA, AOA, or LLP Agreement" },
  { icon: Globe, title: "Digital Photograph", description: "Passport-size photograph of the applicant" },
];

/* ─── Who needs IEC ─── */
const whoNeedsIEC = [
  { icon: Truck, title: "Importers", description: "Any person or entity importing goods into India for trade or commerce purposes." },
  { icon: Package, title: "Exporters", description: "Any person or entity exporting goods from India, including manufacturers and traders." },
  { icon: Factory, title: "Manufacturers", description: "Manufacturers who import raw materials or export finished goods." },
  { icon: Globe, title: "Service Providers", description: "Service providers receiving foreign exchange for services rendered to overseas clients." },
];

/* ─── Exemptions ─── */
const exemptions = [
  "Government departments and ministries",
  "Persons importing/exporting goods for personal use (not connected with trade)",
  "Persons importing/exporting goods from/to Nepal and Myanmar through Indo-Myanmar border (up to ₹25,000)",
  "Farmers exporting produce directly",
  "Persons notified by the Central Government",
];

/* ─── IEC Process Steps ─── */
const processSteps = [
  { title: "Gather Documents", description: "Collect PAN card, address proof, bank details, identity proof, and digital photograph of the applicant." },
  { title: "Register on DGFT Portal", description: "Create an account on the DGFT portal (dgft.gov.in) using the applicant's PAN and email address." },
  { title: "File Online Application (ANF-2A)", description: "Fill in the Aayaat Niryaat Form 2A with business details, bank account information, and upload required documents." },
  { title: "Pay Government Fee", description: "Pay the application fee of ₹500 online through net banking, debit card, or credit card on the DGFT portal." },
  { title: "Application Processing", description: "DGFT processes the application. If documents are satisfactory, the IEC is issued  -  typically within 1–3 working days." },
  { title: "IEC Issuance", description: "Upon approval, the 10-digit IEC number is allotted and available on the DGFT portal. No physical certificate is issued." },
];

/* ─── Key Benefits ─── */
const keyBenefits = [
  { icon: Globe, title: "Global Market Access", description: "Enables businesses to expand globally by importing and exporting goods and services." },
  { icon: Banknote, title: "Government Schemes", description: "Access export promotion schemes like MEIS, SEIS, Advance Authorization, and EPCG." },
  { icon: Shield, title: "Lifetime Validity", description: "IEC is valid for the lifetime of the entity  -  no renewal required (annual update on DGFT portal needed)." },
  { icon: CheckCircle2, title: "Easy & Quick Process", description: "Fully online process with minimal documentation. Typically issued within 1–3 working days." },
];

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "What is an Import Export Code (IEC)?",
    a: "IEC is a 10-digit alphanumeric code issued by the Directorate General of Foreign Trade (DGFT) under the Ministry of Commerce. It is mandatory for any person or entity engaged in import or export of goods and services.",
  },
  {
    q: "Is IEC mandatory for all imports and exports?",
    a: "Yes, IEC is mandatory for importing or exporting goods. However, certain exemptions exist for government departments, personal imports not connected to trade, and small-value trade with Nepal/Myanmar.",
  },
  {
    q: "What is the validity of IEC?",
    a: "IEC has lifetime validity. However, IEC holders must update their details on the DGFT portal annually between April and June each year. Failure to update may lead to deactivation.",
  },
  {
    q: "Can one entity hold multiple IECs?",
    a: "No, a single PAN can only be linked to one IEC. If a business needs to import/export through different branches, the same IEC is used across all branches.",
  },
  {
    q: "What is the government fee for IEC registration?",
    a: "The government fee for IEC registration is ₹500, payable online through the DGFT portal.",
  },
];

/* ═══════════════════════════════════════════════ */
const IECContent = () => {
  return (
    <div className="space-y-20 py-12">
      {/* ── Section 1: Definition ── */}
      <RevealSection className="max-w-4xl mx-auto text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          Definition
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          What is <span className="text-primary">Import Export Code (IEC)</span>?
        </h2>
        <blockquote className="border-l-4 border-primary/40 pl-6 text-left italic text-muted-foreground leading-relaxed">
          "Import Export Code (IEC) is a 10-digit alphanumeric code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industry, Government of India. It is a mandatory prerequisite for any person or entity looking to engage in the import or export of goods and services."
        </blockquote>
        <p className="text-sm text-muted-foreground mt-3">
           -  Foreign Trade (Development & Regulation) Act, 1992
        </p>
        <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl mx-auto">
          Without an IEC, no person shall make any import or export. Customs authorities will not allow import/export clearance without a valid IEC. It is also essential for businesses to avail benefits under various export promotion schemes offered by the Government of India.
        </p>
      </RevealSection>

      {/* ── Section 2: Stats ── */}
      <RevealSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <StatPill value="₹500" label="Government Fee" delay={0} />
          <StatPill value="1–3" label="Days Processing" delay={0.1} />
          <StatPill value="∞" label="Lifetime Validity" delay={0.2} />
          <StatPill value="10" label="Digit Code" delay={0.3} />
        </div>
      </RevealSection>

      {/* ── Section 3: Who Needs IEC ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Applicability
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Who Needs an IEC?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {whoNeedsIEC.map((item, idx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={idx}
                ref={ref}
                className="flex items-start gap-4 rounded-2xl border-2 border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20, rotateX: 15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 4: Exemptions ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Exemptions
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Who is Exempt from IEC?
          </h2>
        </div>

        <div className="space-y-3">
          {exemptions.map((item, idx) => {
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
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <AlertTriangle className="h-4 w-4 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">{item}</p>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 5: Documents Required ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Documentation
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Documents Required
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documentsRequired.map((doc, idx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={idx}
                ref={ref}
                className="rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-3">
                  <doc.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-bold text-sm text-foreground mb-1">{doc.title}</h4>
                <p className="text-xs text-muted-foreground">{doc.description}</p>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 6: Registration Process ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            IEC Registration Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step-by-step journey from document collection to IEC allotment on the DGFT portal.
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

      {/* ── Section 7: Key Benefits ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Benefits
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Key Benefits of IEC
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {keyBenefits.map((benefit, idx) => {
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
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground">{benefit.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 8: FAQ ── */}
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
          Need IEC Registration Assistance?
        </h3>
        <p className="text-muted-foreground mb-6">
          Our experts handle the entire DGFT registration process  -  from documentation to IEC issuance.
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

export default IECContent;
