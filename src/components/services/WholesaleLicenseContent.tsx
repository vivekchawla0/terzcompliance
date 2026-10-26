import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  FileText,
  Building,
  Globe,
  Info,
  Package,
  Truck,
  Factory,
  Users,
  ClipboardCheck,
  Stethoscope,
  Pill,
  HeartPulse,
  CheckCircle2,
  AlertTriangle,
  Landmark,
  Store,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

/* ─── Two License Types ─── */
const licenseTypes = [
  {
    icon: Pill,
    title: "Form 20B / 21B",
    subtitle: "Drugs & Pharmaceuticals",
    borderColor: "border-primary/30",
    color: "from-primary/5 to-background",
    description: "Required for wholesale distribution of drugs, pharmaceuticals, biologicals, and medical devices. Form 20B is the application form, and Form 21B is the license issued by the State Drug Licensing Authority.",
    items: [
      "Allopathic drugs & pharmaceuticals",
      "Biological & biotechnology products",
      "Vaccines & sera",
      "Surgical dressings",
      "Medical devices (select categories)",
    ],
  },
  {
    icon: HeartPulse,
    title: "Form MD-42",
    subtitle: "Medical Devices Only",
    borderColor: "border-accent/30",
    color: "from-accent/5 to-background",
    description: "Specific wholesale license for entities dealing exclusively in medical devices. Introduced under the Medical Device Rules, 2017, this license is issued by the State Licensing Authority (SLA) for wholesale distribution of notified medical devices.",
    items: [
      "All classes of medical devices (A, B, C, D)",
      "In-vitro diagnostic devices",
      "Implants and surgical instruments",
      "Diagnostic equipment",
      "Device accessories and components",
    ],
  },
];

/* ─── Documents Required ─── */
const documentsRequired = [
  { icon: FileText, title: "Application Form", description: "Duly filled Form 19 (for 20B/21B) or Form MD-40 (for MD-42) with prescribed fee" },
  { icon: Building, title: "Premises Proof", description: "Proof of ownership/lease of premises with layout plan showing storage area" },
  { icon: Users, title: "Competent Person Details", description: "Qualification proof of competent person (B.Pharm/D.Pharm for drugs; B.Sc/B.Tech for MD)" },
  { icon: ClipboardCheck, title: "Drug Inspector Report", description: "Site inspection report by the Drug Inspector verifying storage conditions and cold chain facilities" },
  { icon: Shield, title: "Compliance Declarations", description: "Declaration of compliance with Good Storage Practices (GSP) and Good Distribution Practices (GDP)" },
  { icon: Landmark, title: "Government Fees", description: "Treasury challan/demand draft for applicable license fees as per state regulations" },
];

/* ─── License Fee Table ─── */
type LicenseRow = {
  form: string;
  type: string;
  validity: string;
  fees: string;
  authority: string;
};

const licenseData: LicenseRow[] = [
  { form: "Form 20B", type: "Application for Wholesale Drug License", validity: "5 Years", fees: "₹1,500 – ₹6,000*", authority: "State Drug Authority" },
  { form: "Form 21B", type: "Wholesale Drug License (Issued)", validity: "5 Years", fees: " - ", authority: "State Drug Authority" },
  { form: "Form 20B (Renewal)", type: "Renewal of Wholesale Drug License", validity: "5 Years", fees: "₹1,000 – ₹5,000*", authority: "State Drug Authority" },
  { form: "Form MD-40", type: "Application for Wholesale MD License", validity: "5 Years", fees: "₹3,000 – ₹10,000*", authority: "State Licensing Authority" },
  { form: "Form MD-42", type: "Wholesale Medical Device License (Issued)", validity: "5 Years", fees: " - ", authority: "State Licensing Authority" },
];

/* ─── Process Steps ─── */
const processSteps = [
  { title: "Preliminary Assessment", description: "Determine whether you need Form 20B/21B (drugs + devices) or Form MD-42 (devices only) based on the products you intend to distribute." },
  { title: "Premises & Infrastructure Setup", description: "Ensure the premises meet prescribed storage conditions: adequate space, proper shelving, cold chain (if required), pest control, and clean environment." },
  { title: "Appoint Competent Person", description: "Appoint a qualified person (registered pharmacist for drugs; B.Sc/B.Tech for medical devices) who will be responsible for storage and distribution." },
  { title: "Document Preparation", description: "Prepare all application forms, premises documentation, competent person certificates, site layout plan, and compliance declarations." },
  { title: "Application Filing", description: "Submit the application (Form 19 or Form MD-40) along with all documents and prescribed fees to the State Drug/Licensing Authority." },
  { title: "Drug Inspector Site Inspection", description: "The Drug Inspector inspects the premises to verify compliance with Good Storage Practices, infrastructure, equipment, and record-keeping systems." },
  { title: "License Issuance", description: "Upon satisfactory inspection, the licensing authority issues the wholesale license in Form 21B or Form MD-42 with a validity of 5 years." },
  { title: "Post-License Compliance", description: "Maintain records of purchases, sales, returns, and maintain storage conditions. Renew the license before expiry to avoid penalties." },
];

/* ─── Conditions for License ─── */
const conditions = [
  "Adequate premises with proper ventilation, lighting, and cleanliness",
  "Separate storage area for Schedule H, H1, and X drugs (if applicable)",
  "Cold storage facilities for thermolabile products",
  "Appointment of a registered pharmacist or qualified person",
  "Maintenance of purchase and sale records for minimum 5 years",
  "Compliance with Good Storage Practices (GSP) and Good Distribution Practices (GDP)",
  "Display of license at a conspicuous place in the premises",
];

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "What is the difference between Form 20B/21B and Form MD-42?",
    a: "Form 20B/21B is the wholesale drug license covering drugs, pharmaceuticals, biologicals, and some medical devices under the Drugs & Cosmetics Act. Form MD-42 is specifically for entities dealing exclusively in medical devices under the Medical Device Rules, 2017.",
  },
  {
    q: "Who issues the wholesale license?",
    a: "The State Drug Licensing Authority (for Form 20B/21B) or the State Licensing Authority (for Form MD-42) issues the wholesale license. The authority varies by state.",
  },
  {
    q: "Is a wholesale license mandatory for importing medical devices?",
    a: "Yes, a wholesale license (either Form 21B or Form MD-42) is a mandatory prerequisite before applying for an import license for drugs or medical devices in India.",
  },
  {
    q: "What is the validity of a wholesale license?",
    a: "A wholesale license is valid for 5 years from the date of issue. It must be renewed before expiry by filing a renewal application with the prescribed fees.",
  },
  {
    q: "Can one entity hold both Form 21B and Form MD-42?",
    a: "Yes, an entity can hold both licenses if it distributes both drugs/pharmaceuticals and medical devices. However, Form 21B already covers certain medical device categories, so Form MD-42 is needed only for exclusive device distribution.",
  },
];

/* ═══════════════════════════════════════════════ */
const WholesaleLicenseContent = () => {
  return (
    <div className="space-y-20 py-12">
      {/* ── Section 1: Definition ── */}
      <RevealSection className="max-w-4xl mx-auto text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          Definition
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          What is a <span className="text-primary">Wholesale License</span>?
        </h2>
        <blockquote className="border-l-4 border-primary/40 pl-6 text-left italic text-muted-foreground leading-relaxed">
          "A wholesale drug license authorizes the holder to sell, stock, exhibit, or offer for sale, or distribute drugs by wholesale. It is a fundamental prerequisite for any entity engaged in the wholesale trade of drugs, pharmaceuticals, or medical devices in India."
        </blockquote>
        <p className="text-sm text-muted-foreground mt-3">
           -  Drugs and Cosmetics Act, 1940 & Medical Device Rules, 2017
        </p>
        <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl mx-auto">
          In India, any entity wishing to import, distribute, or sell drugs and medical devices in bulk must first obtain a wholesale license from the State Drug/Licensing Authority. This license is a mandatory prerequisite for obtaining import licenses (Form MD-14/15) or manufacturing licenses.
        </p>
      </RevealSection>

      {/* ── Section 2: Stats ── */}
      <RevealSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <StatPill value="2" label="License Types" delay={0} />
          <StatPill value="5 Yr" label="Validity" delay={0.1} />
          <StatPill value="SLA" label="Issuing Authority" delay={0.2} />
          <StatPill value="1940" label="Act Enacted" delay={0.3} />
        </div>
      </RevealSection>

      {/* ── Section 3: Two License Types ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            License Types
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Types of Wholesale Licenses
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {licenseTypes.map((type, idx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={idx}
                ref={ref}
                className={`rounded-2xl border-2 ${type.borderColor} bg-gradient-to-br ${type.color} p-6`}
                initial={{ opacity: 0, x: idx === 0 ? -40 : 40, rotateY: idx === 0 ? -10 : 10 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{type.title}</h3>
                    <p className="text-xs text-muted-foreground">{type.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {type.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Covers</p>
                  {type.items.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.06 }}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 4: Documents Required ── */}
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

      {/* ── Section 5: License Fee Table ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Fees
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            License Forms & Fees
          </h2>
          <p className="text-xs text-muted-foreground mt-2">* Fees vary by state</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/5">
                <TableHead className="font-bold text-foreground">Form</TableHead>
                <TableHead className="font-bold text-foreground">Type</TableHead>
                <TableHead className="font-bold text-foreground">Validity</TableHead>
                <TableHead className="font-bold text-foreground">Fees</TableHead>
                <TableHead className="font-bold text-foreground">Authority</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {licenseData.map((row, idx) => (
                <TableRow key={idx} className="hover:bg-primary/5 transition-colors">
                  <TableCell className="font-semibold text-primary text-sm">{row.form}</TableCell>
                  <TableCell className="text-sm">{row.type}</TableCell>
                  <TableCell className="text-sm">{row.validity}</TableCell>
                  <TableCell className="text-sm font-medium">{row.fees}</TableCell>
                  <TableCell className="text-sm">{row.authority}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </RevealSection>

      {/* ── Section 6: Process Steps ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Wholesale License Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step-by-step journey from assessment to license issuance and ongoing compliance.
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

      {/* ── Section 7: Conditions for License ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Requirements
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Conditions for License
          </h2>
        </div>

        <div className="space-y-3">
          {conditions.map((condition, idx) => {
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
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{condition}</p>
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
          Need a Wholesale License?
        </h3>
        <p className="text-muted-foreground mb-6">
          Whether it's Form 20B/21B for drugs or Form MD-42 for medical devices, our experts guide you through the entire licensing process.
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

export default WholesaleLicenseContent;
