import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  FileCheck,
  Building,
  Globe,
  Scale,
  ChevronRight,
  Download,
  Info,
  Sparkles,
  Tag,
  Paintbrush,
  Users,
  BookOpen,
  ClipboardList,
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

/* ─── Applicable rules data ─── */
const applicableRules = [
  { rule: "Rule 129", description: "Registration of cosmetics imported into India" },
  { rule: "Rule 129A", description: "Form and manner of application for Registration Certificate" },
  { rule: "Rule 129B", description: "Registration certificate for the import of cosmetics" },
  { rule: "Rule 129C", description: "Grant of Registration Certificate" },
  { rule: "Rule 129D", description: "Duration of Registration Certificate" },
  { rule: "Rule 129E", description: "Suspension and Cancellation of Registration Certificate" },
  { rule: "Rule 129F", description: "Prohibition of import of certain cosmetics" },
  { rule: "Rule 129G", description: "Standard for imported cosmetics" },
  { rule: "Rule 129H", description: "Registration of cosmetics imported into India" },
];

/* ─── Category data ─── */
const categories = [
  {
    group: "Skin Products",
    icon: Sparkles,
    count: 45,
    examples: ["Face care", "Eye contour", "Lip care", "Body care", "Sunscreen", "Foundation", "Mascara", "Lipstick"],
  },
  {
    group: "Hair & Scalp",
    icon: Paintbrush,
    count: 15,
    examples: ["Conditioner", "Anti-dandruff", "Hair colour", "Styling products", "Hair relaxer"],
  },
  {
    group: "Nail & Cuticle",
    icon: Tag,
    count: 12,
    examples: ["Nail varnish", "Nail remover", "Nail care", "Nail hardener", "Cuticle softener"],
  },
  {
    group: "Oral Hygiene",
    icon: Shield,
    count: 8,
    examples: ["Toothpaste", "Mouthwash", "Breath spray", "Tooth whiteners"],
  },
];

/* ─── Who can apply data ─── */
const applicants = [
  {
    title: "Manufacturer with Indian Office",
    description:
      "A person or entity who owns the trade name and manufactures the cosmetic product, having a registered office in India.",
  },
  {
    title: "Authorised Agent",
    description:
      "A person or entity in India authorised by the manufacturer, responsible for compliance to the Drugs & Cosmetics Act.",
  },
  {
    title: "Subsidiary in India",
    description: "An entity in India owned by the overseas manufacturer.",
  },
  {
    title: "Any Other Importer",
    description:
      "Any person or entity purporting to import cosmetic products other than the manufacturer, its authorised agent, or subsidiary.",
  },
];

/* ─── Fee structure ─── */
const feeStructure = [
  { item: "Per Category", fee: "USD 1,000", note: "~80 categories under CDSCO guidelines" },
  { item: "Per Variant", fee: "USD 50", note: "Each product variant within a category" },
  { item: "Per Manufacturing Site", fee: "USD 500", note: "Each overseas manufacturing facility" },
];

/* ─── Documents required ─── */
const importerDocs = ["Cover Letter", "Schedule D-III", "COS-1 Application Form", "Government Fees Payment Proof"];
const manufacturerDocs = [
  "Product Artworks",
  "Power of Attorney",
  "Free Sale Certificate",
  "GMP or Manufacturing License",
  "Ingredient List (INCI)",
  "Certificate of Analysis",
  "Non-Animal Testing Declaration",
  "Heavy Metal Declaration",
  "Testing Methods",
];

/* ─── COS-2 Registration Process ─── */
const cos2Steps = [
  "Primary Information & Draft Power of Attorney",
  "Processing of Apostille Documents",
  "Preparation of Secondary Documents",
  "SUGAM Account Setup",
  "Payment of Government Fees",
  "System Generated COS-1",
  "Submission to CDSCO",
  "Processing by CDSCO",
  "Grant of COS-2 Registration",
];

/* ═══════════════════════════════════════════════ */
const CosmeticsContent = () => {
  return (
    <div className="space-y-20 py-12">
      {/* ── Section 1: Definition ── */}
      <RevealSection className="max-w-4xl mx-auto text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          Definition
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          What is a <span className="text-primary">Cosmetic</span>?
        </h2>
        <blockquote className="border-l-4 border-primary/40 pl-6 text-left italic text-muted-foreground leading-relaxed">
          "Cosmetic means any article that can be rubbed, poured, sprinkled or sprayed, or inserted into, or otherwise applied to, the human body or any part thereof for cleaning, beautifying, enhancing attractiveness, or altering appearance, and includes any article intended for use as a cosmetic ingredient."
        </blockquote>
        <p className="text-sm text-muted-foreground mt-3">
           -  Drugs & Cosmetics Act, 1940
        </p>
      </RevealSection>

      {/* ── Section 2: Stats ── */}
      <RevealSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <StatPill value="2013" label="Mandatory Registration" delay={0} />
          <StatPill value="80+" label="Product Categories" delay={0.1} />
          <StatPill value="COS-1" label="Application Form" delay={0.2} />
        </div>
      </RevealSection>

      {/* ── Section 3: Regulatory Framework (Import vs Manufacture) ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Regulatory Framework
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            How Cosmetics Are Regulated in India
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Imported */}
          {[
            {
              icon: Globe,
              title: "Imported Cosmetics",
              authority: "CDSCO, New Delhi",
              description:
                "Cosmetics imported into India are regulated by CDSCO under the Directorate General of Health Services, Ministry of Health & Family Welfare. All imported cosmetics must be registered via COS-2 certificate since April 1, 2013.",
              form: "COS-2 Registration",
              highlight: "border-primary/30 bg-gradient-to-br from-primary/5 to-background",
            },
            {
              icon: Building,
              title: "Manufactured in India",
              authority: "State Licensing Authorities (SLA)",
              description:
                "Cosmetics manufactured in India are regulated by respective State Licensing Authorities (SLA) across all States/UTs. SLAs grant licenses under COS-8 and COS-8A for manufacturing, sale, and distribution of cosmetics.",
              form: "COS-8 / COS-8A License",
              highlight: "border-accent/30 bg-gradient-to-br from-accent/5 to-background",
            },
          ].map((item, idx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={idx}
                ref={ref}
                className={cn(
                  "rounded-2xl border-2 p-6 transition-shadow hover:shadow-xl",
                  item.highlight
                )}
                initial={{ opacity: 0, x: idx === 0 ? -40 : 40, rotateY: idx === 0 ? -10 : 10 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, rotateY: 0 }
                    : { opacity: 0, x: idx === 0 ? -40 : 40, rotateY: idx === 0 ? -10 : 10 }
                }
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.authority}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium text-primary w-fit border border-primary/20">
                  <FileCheck className="h-3.5 w-3.5" />
                  {item.form}
                </div>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 4: Product Categories ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Categorisation
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Product Family Classification
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Under Column 3 of the CDSCO "Guidelines to Registration of Imported Cosmetics," products are classified under ~80 product families across 4 major groups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((cat, idx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={cat.group}
                ref={ref}
                className="rounded-2xl border-2 border-border p-6 hover:shadow-lg transition-shadow bg-card"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 30, scale: 0.95 }
                }
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <cat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">{cat.group}</h3>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {cat.count} types
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.examples.map((ex, i) => (
                    <motion.span
                      key={i}
                      className="rounded-full bg-secondary/60 px-3 py-1 text-xs text-muted-foreground border border-border"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.04 }}
                    >
                      {ex}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 5: Government Fees ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Government Fees
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Fee Structure for Import Registration
          </h2>
        </div>

        <div className="rounded-2xl border-2 border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5 border-b border-border">
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Item</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Fee</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Note</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    className="border-b border-border last:border-0 hover:bg-primary/5 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">{row.item}</td>
                    <td className="px-6 py-4 font-bold text-primary">{row.fee}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.note}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </RevealSection>

      {/* ── Section 6: Applicable Rules ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Rules of the Game
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Applicable Rules for Imported Cosmetics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As per Drugs and Cosmetics Act 1940, all cosmetics must be registered by CDSCO under Rule 21 from 1st April 2013.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {applicableRules.map((rule, idx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={rule.rule}
                ref={ref}
                className="rounded-xl border border-border p-4 hover:border-primary/40 hover:shadow-md transition-all bg-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                    <Scale className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{rule.rule}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{rule.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 7: Who Can Apply ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Eligibility
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Who Can Apply for Registration?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {applicants.map((app, idx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={idx}
                ref={ref}
                className="rounded-2xl border-2 border-border p-6 hover:shadow-lg transition-shadow bg-card"
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, rotateY: 0 }
                    : { opacity: 0, scale: 0.9, rotateY: -10 }
                }
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{app.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {app.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 8: Documents Required ── */}
      <RevealSection className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Documentation
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Documents Required for Regulatory Dossier
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "From Importer", icon: ClipboardList, docs: importerDocs, color: "border-primary/30" },
            { title: "From Brand / Manufacturer", icon: BookOpen, docs: manufacturerDocs, color: "border-accent/30" },
          ].map((section, sIdx) => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={sIdx}
                ref={ref}
                className={cn(
                  "rounded-2xl border-2 p-6 bg-card",
                  section.color
                )}
                initial={{ opacity: 0, x: sIdx === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: sIdx * 0.15 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{section.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {section.docs.map((doc, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
                      {doc}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </RevealSection>

      {/* ── Section 9: COS-2 Registration Process ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            COS-2 Registration Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step-by-step journey from initial documentation to grant of registration certificate.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-4">
            {cos2Steps.map((step, idx) => {
              const ref = useRef<HTMLDivElement>(null);
              const isInView = useInView(ref, { once: true });

              return (
                <motion.div
                  key={idx}
                  ref={ref}
                  className="relative flex items-center gap-4 pl-14"
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
                    <p className="text-sm font-medium text-foreground">{step}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ── Section 10: Labelling Guidelines ── */}
      <RevealSection className="max-w-4xl mx-auto">
        <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Info className="h-6 w-6 text-primary" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Rule 148
              </span>
              <h3 className="text-xl font-bold text-foreground mt-1">
                Labelling Guidelines
              </h3>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Under the Drugs & Cosmetics Act, strict guidelines are laid out for overseas brands and importers to follow on product packaging. Labels and regulatory artworks must be submitted to CDSCO as part of the application for grant of approval.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cosmetic products must comply with mandatory declarations under both the Drugs & Cosmetics Act and the Legal Metrology (Packaged Commodities) Rules 2011. Strict enforcement of labelling compliance is routinely done during dossier processing, customs clearance, and marketplace inspections by CDSCO enforcement teams.
          </p>
          <div className="flex items-center gap-2 text-sm text-primary font-medium">
            <Shield className="h-4 w-4" />
            Dual compliance: D&C Act + Legal Metrology Rules
          </div>
        </div>
      </RevealSection>

      {/* ── CTA ── */}
      <RevealSection className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Ready to Register Your Cosmetics in India?
        </h3>
        <p className="text-muted-foreground mb-6">
          Our experts have registered thousands of beauty brands. Let us handle the regulatory complexity.
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

export default CosmeticsContent;
