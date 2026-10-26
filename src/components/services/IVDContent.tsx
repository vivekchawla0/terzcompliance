import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  AlertTriangle,
  FileCheck,
  Building,
  Globe,
  Scale,
  Microscope,
  ChevronRight,
  Download,
  Info,
  Beaker,
  FlaskConical,
  TestTube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─── Reusable scroll-triggered wrapper ─── */
const RevealSection = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
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
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Animated counter pill ─── */
const StatPill = ({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) => {
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
      <span className="text-3xl lg:text-4xl font-bold text-primary">
        {value}
      </span>
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">
        {label}
      </span>
    </motion.div>
  );
};

/* ─── Risk class card ─── */
const ClassCard = ({
  letter,
  risk,
  color,
  examples,
  authority,
  delay,
}: {
  letter: string;
  risk: string;
  color: string;
  examples: string[];
  authority: string;
  delay: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-2xl border-2 p-6 transition-shadow hover:shadow-xl",
        color
      )}
      initial={{ opacity: 0, x: -40, rotateY: -15 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, rotateY: 0 }
          : { opacity: 0, x: -40, rotateY: -15 }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <motion.div
        className="absolute -right-4 -top-4 text-[80px] font-black opacity-10 leading-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        {letter}
      </motion.div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background font-bold text-lg shadow-sm">
            {letter}
          </span>
          <div>
            <h4 className="font-bold text-foreground">Class {letter}</h4>
            <p className="text-xs text-muted-foreground">{risk}</p>
          </div>
        </div>
        <ul className="space-y-1.5 mb-3">
          {examples.map((ex, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <ChevronRight className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-primary" />
              {ex}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium text-primary w-fit">
          <Building className="h-3 w-3" />
          {authority}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── License data for IVD ─── */
type LicenseRow = {
  form: string;
  approval: string;
  riskClass: string;
  fees: string;
  authority: "CDSCO" | "SLA" | "Both";
};

const licenseData: LicenseRow[] = [
  {
    form: "MD 3",
    approval: "MD 5",
    riskClass: "A & B (Mfg)",
    fees: "₹5,000 (plant) + ₹500/product",
    authority: "SLA",
  },
  {
    form: "MD 4",
    approval: "MD 6",
    riskClass: "A & B (Loan License)",
    fees: "₹5,000 (plant) + ₹500/product",
    authority: "SLA",
  },
  {
    form: "MD 7",
    approval: "MD 9",
    riskClass: "C & D (Mfg)",
    fees: "₹50,000 (plant) + ₹1,000/product",
    authority: "CDSCO",
  },
  {
    form: "MD 8",
    approval: "MD 10",
    riskClass: "C & D (Loan License)",
    fees: "₹50,000 (plant) + ₹1,000/product",
    authority: "CDSCO",
  },
  {
    form: "MD 14",
    approval: "MD 15",
    riskClass: "A & B (IVD Import)",
    fees: "$1,000 (plant) + $10/product",
    authority: "CDSCO",
  },
  {
    form: "MD 14",
    approval: "MD 15",
    riskClass: "C & D (IVD Import)",
    fees: "$3,000 (plant) + $500/product",
    authority: "CDSCO",
  },
  {
    form: "MD 12",
    approval: "MD 13",
    riskClass: "All (Test License – Mfg)",
    fees: "₹500",
    authority: "Both",
  },
  {
    form: "MD 16",
    approval: "MD 17",
    riskClass: "All (Test License – Import)",
    fees: "$100",
    authority: "CDSCO",
  },
  {
    form: "MD 24",
    approval: "MD 25",
    riskClass: "All (Clinical Perf. Eval.)",
    fees: "₹25,000",
    authority: "CDSCO",
  },
  {
    form: "MD 28",
    approval: "MD 29",
    riskClass: "All (New IVD Kit)",
    fees: "₹25,000",
    authority: "CDSCO",
  },
  {
    form: "MD 22",
    approval: "MD 23",
    riskClass: "All (Clinical Investigation)",
    fees: "₹1,00,000",
    authority: "CDSCO",
  },
];

/* ─── Notified IVD types ─── */
const notifiedIVDTypes = [
  "In vitro Diagnostics Devices for HIV, HBV and HCV",
  "In vitro Diagnostics Devices for HIV, HBV and HCV (Bulk)",
  "In vitro Blood Grouping Sera",
  "In vitro Blood Grouping Sera (Bulk)",
];

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
const IVDContent = () => {
  return (
    <div className="space-y-20 lg:space-y-28">
      {/* ── Section 1: Definition ── */}
      <section>
        <RevealSection>
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10"
              whileHover={{ rotate: 10 }}
            >
              <Microscope className="h-6 w-6 text-primary" />
            </motion.div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Definition of
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                In-Vitro Diagnostic Kits
              </h2>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={0.1}>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              In India, import, manufacturing, sale, and distribution of{" "}
              <strong className="text-foreground">
                In Vitro Diagnostic (IVD) Medical Devices / Reagents
              </strong>{" "}
              are regulated under the provisions of{" "}
              <strong className="text-foreground">
                Medical Device Rules 2017
              </strong>
              .
            </p>
            <p>
              In-Vitro Diagnostics (IVDs) are defined as substances intended to
              be used{" "}
              <em>
                outside the human or animal body for the diagnosis of disease or
                disorders
              </em>
              . IVDs are considered as "Drugs" under sub-clause (i) of clause
              (b) of Section 3 of the{" "}
              <strong className="text-foreground">
                Drugs and Cosmetics Act, 1940
              </strong>
              , and IVD Kits notified from time to time as a device under
              sub-clause (iv) of clause (b) of section 3 of the DCA.
            </p>
            <p>
              The government has been progressively including more diagnostic
              kits under regulation, helping direct control on quality products
              by manufacturers and exporters to India. The expansion of
              regulations to cover all diagnostic kits has made it{" "}
              <strong className="text-foreground">
                mandatory for registration of devices
              </strong>{" "}
              being sold in the country, ensuring Indian consumers are assured
              safe and quality healthcare products.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-5 flex gap-4">
            <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm mb-1">
                Why are IVDs classified as Drugs?
              </p>
              <p className="text-sm text-muted-foreground">
                IVDs in India are regulated under the Drugs and Cosmetics Act,
                1940. They are first notified as "drugs" to come under the DCA's
                purview, then regulated specifically under the Medical Device
                Rules 2017. This framework ensures comprehensive quality and
                safety oversight for all diagnostic kits used in the country.
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── Section 2: Key Stats ── */}
      <section>
        <RevealSection>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">
            IVD Regulation in India at a Glance
          </h2>
        </RevealSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatPill value="2017" label="Rules enacted" delay={0} />
          <StatPill value="4" label="Risk classes" delay={0.1} />
          <StatPill value="20+" label="License forms" delay={0.2} />
          <StatPill value="2018" label="Rules enforced" delay={0.3} />
        </div>
      </section>

      {/* ── Section 3: Risk-Based Classification ── */}
      <section>
        <RevealSection>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Diagnostic Kits Risk-Based
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Classification in India
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              In line with the Global Harmonization Task Force (GHTF) framework,
              IVD kits in India are classified into four risk-based categories  - 
              Class A through D  -  with risk increasing from A (Low) to D (High).
              Classification is governed by the intended use of respective IVDs.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ClassCard
            letter="A"
            risk="Low Risk"
            color="border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/30"
            examples={[
              "General lab reagents",
              "Clinical chemistry analyzers",
              "Specimen receptacles",
            ]}
            authority="SLA (Mfg) / CDSCO (Import)"
            delay={0}
          />
          <ClassCard
            letter="B"
            risk="Low-Moderate Risk"
            color="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/30"
            examples={[
              "Pregnancy test kits",
              "Blood glucose monitors",
              "Urine test strips",
            ]}
            authority="SLA (Mfg) / CDSCO (Import)"
            delay={0.1}
          />
          <ClassCard
            letter="C"
            risk="Moderate-High Risk"
            color="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/30"
            examples={[
              "Blood grouping sera",
              "HLA typing reagents",
              "Tumor marker assays",
            ]}
            authority="CDSCO"
            delay={0.2}
          />
          <ClassCard
            letter="D"
            risk="High Risk"
            color="border-rose-200 bg-rose-50/50 dark:border-rose-800 dark:bg-rose-950/30"
            examples={[
              "HIV diagnostic kits",
              "HBV / HCV test kits",
              "Blood screening reagents",
            ]}
            authority="CDSCO"
            delay={0.3}
          />
        </div>

        {/* Notified IVD types */}
        <RevealSection delay={0.15} className="mt-8">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <TestTube className="h-5 w-5 text-primary" />
              <h4 className="font-bold text-foreground">
                Notified IVD Kits under Medical Device Rules 2017
              </h4>
            </div>
            <ul className="space-y-2">
              {notifiedIVDTypes.map((type, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <ChevronRight className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-primary" />
                  {type}
                </motion.li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">
              If an IVD is meant to be used in combination with another IVD, the
              classification rules apply independently to each device.
              Accessories are classified separately.
            </p>
          </div>
        </RevealSection>
      </section>

      {/* ── Section 4: CDSCO vs SLA ── */}
      <section>
        <RevealSection>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Who Regulates What
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              CDSCO & State Licensing Authorities
            </h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevealSection delay={0}>
            <motion.div
              className="rounded-2xl border border-border bg-card p-6 h-full"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">CDSCO</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">CDSCO</strong> under the
                Directorate General of Health Services, Ministry of Health &
                Family Welfare, is the{" "}
                <strong className="text-foreground">
                  Central Licensing Authority
                </strong>{" "}
                for:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Class C & D IVD Kits manufactured in India",
                  "ALL classes (A–D) of imported IVD Kits",
                  "Clinical investigation & performance evaluation permissions",
                  "New / non-predicate IVD Kit approvals",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Shield className="h-3.5 w-3.5 mt-0.5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <motion.div
              className="rounded-2xl border border-border bg-card p-6 h-full"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <Building className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  State Licensing Authority (SLA)
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                IVD Kits in{" "}
                <strong className="text-foreground">
                  Class A & B manufactured in India
                </strong>{" "}
                are regulated by respective State Drug Controllers across all
                States/UT. The SLA handles:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Manufacturing licenses for Class A & B IVD kits",
                  "Loan licenses for Class A & B IVD kits",
                  "Enforcement, licensing & grant of permissions",
                  "Sale, manufacture & stock oversight",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Scale className="h-3.5 w-3.5 mt-0.5 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* ── Section 5: License & Fees Table ── */}
      <section>
        <RevealSection>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Overview of Various
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              IVD Licenses, Classes & Government Fees
            </h2>
          </div>
        </RevealSection>

        <RevealSection delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5 border-b border-border">
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Application
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Approval
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Risk Class / Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Fees
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Authority
                  </th>
                </tr>
              </thead>
              <tbody>
                {licenseData.map((row, i) => (
                  <motion.tr
                    key={i}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <td className="px-4 py-3 font-medium text-foreground">
                      {row.form}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {row.approval}
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        {row.riskClass}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {row.fees}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-1 text-xs font-medium",
                          row.authority === "CDSCO"
                            ? "bg-primary/10 text-primary"
                            : row.authority === "SLA"
                            ? "bg-accent/10 text-accent"
                            : "bg-secondary text-secondary-foreground"
                        )}
                      >
                        {row.authority}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealSection>
      </section>

      {/* ── Section 6: Import & Manufacturing ── */}
      <section>
        <RevealSection>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Approved IVD Kits with Predicate
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Import & Manufacturing Pathways
            </h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Import */}
          <RevealSection delay={0}>
            <motion.div
              className="rounded-2xl border border-border bg-gradient-to-br from-card to-primary/5 p-6 h-full"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Import of IVD Kits
                </h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Importers who wish to import IVD Kits of{" "}
                  <strong className="text-foreground">
                    any risk class (A–D)
                  </strong>{" "}
                  need to submit applications on the{" "}
                  <strong className="text-foreground">SUGAM Portal</strong> of
                  CDSCO, which is the Central Licensing Authority for such
                  products.
                </p>
                <p>
                  An overseas manufacturer{" "}
                  <strong className="text-foreground">
                    cannot directly submit
                  </strong>{" "}
                  an application. Appointing an Indian entity as the{" "}
                  <strong className="text-foreground">Authorised Agent</strong>{" "}
                  or license holder is mandatory. The agent must hold a valid
                  stock and sale license (Form 20B/21B).
                </p>
                <p>
                  The import license application is filed in{" "}
                  <strong className="text-foreground">Form MD-14</strong>, with
                  approval in{" "}
                  <strong className="text-foreground">Form MD-15</strong>. For
                  test or demonstration imports, use{" "}
                  <strong className="text-foreground">Form MD-16</strong> →{" "}
                  <strong className="text-foreground">MD-17</strong>.
                </p>
              </div>
            </motion.div>
          </RevealSection>

          {/* Manufacturing */}
          <RevealSection delay={0.15}>
            <motion.div
              className="rounded-2xl border border-border bg-gradient-to-br from-card to-accent/5 p-6 h-full"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Manufacturing of IVD Kits
                </h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Manufacturers of{" "}
                  <strong className="text-foreground">Class A & B</strong> IVD
                  Kits submit applications on the SUGAM Portal with approval
                  from the{" "}
                  <strong className="text-foreground">
                    State Licensing Authority
                  </strong>{" "}
                  (Form MD-3 → MD-5). Loan licenses use Form MD-4 → MD-6.
                </p>
                <p>
                  For{" "}
                  <strong className="text-foreground">Class C & D</strong> IVD
                  Kits, approval comes from{" "}
                  <strong className="text-foreground">CDSCO</strong> (Form MD-7
                  → MD-9). Loan license manufacturing uses Form MD-8 → MD-10.
                </p>
                <p>
                  For test licenses to manufacture small quantities for clinical
                  investigation, training, or evaluation,{" "}
                  <strong className="text-foreground">Form MD-12</strong> leads
                  to permission in{" "}
                  <strong className="text-foreground">Form MD-13</strong>.
                </p>
              </div>
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* ── Section 7: New IVD Kits ── */}
      <section>
        <RevealSection>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              New In-Vitro Diagnostic Kits
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Import & Manufacture of New IVD Kits
            </h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevealSection delay={0}>
            <motion.div
              className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 h-full"
              whileHover={{ borderColor: "hsl(var(--primary))" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">
                  Clinical Performance Evaluation
                </h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  New IVD Kits are diagnostic kits whose predicate or similar
                  product has{" "}
                  <strong className="text-foreground">
                    not yet been approved
                  </strong>{" "}
                  by CDSCO. A{" "}
                  <strong className="text-foreground">
                    Clinical Performance Evaluation
                  </strong>{" "}
                  must be conducted to assess safety and efficacy for the Indian
                  population.
                </p>
                <p>
                  Application is filed in{" "}
                  <strong className="text-foreground">Form MD-24</strong> and
                  approval is granted in{" "}
                  <strong className="text-foreground">Form MD-25</strong> with a
                  fee of ₹25,000.
                </p>
                <p className="italic text-xs">
                  For Class A new IVD Kits, clinical performance evaluation data
                  may not be necessary depending on the nature of the kit.
                </p>
              </div>
            </motion.div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <motion.div
              className="rounded-2xl border-2 border-dashed border-accent/30 bg-accent/5 p-6 h-full"
              whileHover={{ borderColor: "hsl(var(--accent))" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-bold text-foreground">
                  Permission to Manufacture or Import New IVD Kit
                </h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Once the Clinical Performance Evaluation proves the IVD Kit is
                  safe for the Indian population, a manufacturer or importer can
                  submit an application for permission in{" "}
                  <strong className="text-foreground">Form MD-28</strong> with
                  approval in{" "}
                  <strong className="text-foreground">Form MD-29</strong> and a
                  fee of ₹25,000.
                </p>
                <p>
                  For{" "}
                  <strong className="text-foreground">
                    investigational IVD devices
                  </strong>{" "}
                  never approved worldwide, prior CDSCO permission is required
                  via{" "}
                  <strong className="text-foreground">Form MD-22</strong>{" "}
                  (₹1,00,000) with approval in{" "}
                  <strong className="text-foreground">Form MD-23</strong>.
                </p>
              </div>
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* ── Section 8: Authorised Agent ── */}
      <section>
        <RevealSection>
          <motion.div
            className="rounded-2xl border border-border bg-card p-6 lg:p-8"
            whileHover={{
              boxShadow:
                "0 12px 40px -12px hsl(var(--primary) / 0.15)",
            }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                <Beaker className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Authorised Agent / Indian Representation
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Mandatory for all overseas IVD manufacturers
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                An overseas manufacturer{" "}
                <strong className="text-foreground">
                  cannot submit an application directly
                </strong>{" "}
                to CDSCO. Appointing an Indian entity as the Authorised Agent or
                license holder is mandatory. The appointed agent must hold a
                valid{" "}
                <strong className="text-foreground">
                  stock and sale license (Form 20B & 21B)
                </strong>{" "}
                for sale and distribution under Medical Device Rules 2017,
                before applying for an import license on behalf of the overseas
                manufacturer.
              </p>
              <p>
                The agent submits the application through the{" "}
                <strong className="text-foreground">SUGAM online portal</strong>{" "}
                along with a Power of Attorney from the overseas manufacturer.
                This ensures regulatory compliance and accountability for all
                imported IVD products in the Indian market.
              </p>
            </div>
          </motion.div>
        </RevealSection>
      </section>

      {/* ── Section 9: IVD Pricing & NPPA Registration ── */}
      <section>
        <RevealSection>
          <motion.div
            className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-card to-primary/5 p-6 lg:p-8"
            whileHover={{ boxShadow: "0 12px 40px -12px hsl(var(--primary) / 0.15)" }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Scale className="h-3.5 w-3.5" />
                  Pricing Compliance &amp; IPDMS 2.0
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  NPPA Registration &amp; IVD Pricing Compliance
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In-Vitro Diagnostic kits and reagents are regulated under India's Drugs (Prices Control) Order, 2013. Manufacturers and importers must ensure NPPA applicability reviews, annual MRP tracking, and statutory IPDMS 2.0 filings.
                </p>
              </div>
              <Button asChild className="flex-shrink-0 shadow-md shadow-primary/20">
                <Link to="/services/nppa-registration-medical-devices" className="flex items-center gap-2">
                  Explore NPPA Service <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </RevealSection>
      </section>

      {/* ── Final CTA ── */}
      <section>
        <RevealSection>
          <motion.div
            className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-8 lg:p-12 text-center"
            whileHover={{
              boxShadow: "0 20px 60px -20px hsl(var(--primary) / 0.2)",
            }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Need Help with IVD Registration?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Our regulatory experts have decades of experience navigating
              CDSCO and SLA approvals for diagnostic kits. Let us handle the
              complexity while you focus on innovation.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="shadow-lg shadow-primary/25"
              >
                <Link to="/contact">Get Expert Assistance →</Link>
              </Button>
            </motion.div>
          </motion.div>
        </RevealSection>
      </section>
    </div>
  );
};

export default IVDContent;
