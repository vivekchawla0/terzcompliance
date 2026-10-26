import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  AlertTriangle,
  FileCheck,
  Building,
  Globe,
  Scale,
  Stethoscope,
  ChevronRight,
  Download,
  Info } from
"lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─── Reusable scroll-triggered wrapper ─── */
const RevealSection = ({
  children,
  className,
  delay = 0




}: {children: React.ReactNode;className?: string;delay?: number;}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      animate={
      isInView ?
      { opacity: 1, y: 0, filter: "blur(0px)" } :
      { opacity: 0, y: 60, filter: "blur(8px)" }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}>
      
      {children}
    </motion.div>);

};

/* ─── Animated counter pill ─── */
const StatPill = ({
  value,
  label,
  delay




}: {value: string;label: string;delay: number;}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.8, rotateX: 40 }}
      animate={
      isInView ?
      { opacity: 1, scale: 1, rotateX: 0 } :
      { opacity: 0, scale: 0.8, rotateX: 40 }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -4 }}>
      
      <span className="text-3xl lg:text-4xl font-bold text-primary">
        {value}
      </span>
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">
        {label}
      </span>
    </motion.div>);

};

/* ─── Risk class card ─── */
const ClassCard = ({
  letter,
  risk,
  color,
  examples,
  authority,
  delay







}: {letter: string;risk: string;color: string;examples: string[];authority: string;delay: number;}) => {
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
      isInView ?
      { opacity: 1, x: 0, rotateY: 0 } :
      { opacity: 0, x: -40, rotateY: -15 }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -6 }}>
      
      <motion.div
        className="absolute -right-4 -top-4 text-[80px] font-black opacity-10 leading-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: delay + 0.2 }}>
        
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
          {examples.map((ex, i) =>
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-primary" />
              {ex}
            </li>
          )}
        </ul>
        <div className="flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium text-primary w-fit">
          <Building className="h-3 w-3" />
          {authority}
        </div>
      </div>
    </motion.div>);

};

/* ─── License row for the table ─── */
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
  riskClass: "A & B",
  fees: "₹5,000 (plant) + ₹500/product",
  authority: "SLA"
},
{
  form: "MD 7",
  approval: "MD 9",
  riskClass: "C & D",
  fees: "₹50,000 (plant) + ₹1,000/product",
  authority: "CDSCO"
},
{
  form: "MD 14",
  approval: "MD 15",
  riskClass: "A (Import)",
  fees: "$1,000 (plant) + $50/product",
  authority: "CDSCO"
},
{
  form: "MD 14",
  approval: "MD 15",
  riskClass: "B (Import)",
  fees: "$2,000 (plant) + $1,000/product",
  authority: "CDSCO"
},
{
  form: "MD 14",
  approval: "MD 15",
  riskClass: "C & D (Import)",
  fees: "$3,000 (plant) + $1,500/product",
  authority: "CDSCO"
},
{
  form: "MD 12",
  approval: "MD 13",
  riskClass: "All (Test License)",
  fees: "₹500",
  authority: "Both"
},
{
  form: "MD 22",
  approval: "MD 23",
  riskClass: "All (Clinical Investigation)",
  fees: "₹1,00,000",
  authority: "CDSCO"
}];


/* ─── Timeline milestone ─── */
const timelineMilestones = [
{ year: "1989", event: "Disposable syringes, needles & perfusion sets regulated" },
{ year: "2002", event: "In-vitro diagnostic substances including blood grouping sera" },
{ year: "2005", event: "Cardiac stents, catheters, IOLs, heart valves, ortho implants" },
{ year: "2017", event: "Medical Devices Rules 2017  -  separate regulatory identity" },
{ year: "2020", event: "New definition expands to cover ALL medical devices" },
{ year: "2021", event: "Nebulizers, glucometers, CT/MRI/PET equipment, defibrillators" },
{ year: "2022", event: "MD 42 registration mandatory for wholesalers & stockists" }];


/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
const MedicalDevicesContent = () => {
  return (
    <div className="space-y-20 lg:space-y-28">
      {/* ── Section 1: Definition ── */}
      <section>
        <RevealSection>
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10"
              whileHover={{ rotate: 10 }}>
              
              <Stethoscope className="h-6 w-6 text-primary" />
            </motion.div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Definition of
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Medical Devices
              </h2>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={0.1}>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              As per the notified definition under <strong className="text-foreground">Medical Device Rules 2017</strong>, a Medical Device means any instrument, apparatus, appliance, implant, material, software, or accessory  -  whether used alone or in combination  -  intended by its manufacturer to be used specifically for human beings or animals. The device must not achieve its primary intended action by pharmacological, immunological, or metabolic means, though it may be assisted by such means.
            </p>
            <p>
              Medical devices serve purposes including: <em>diagnosis, prevention, monitoring, treatment, or alleviation of disease; investigation, replacement, or modification of anatomy or physiological processes; supporting or sustaining life; disinfection of medical devices; and control of conception.</em>
            </p>
            <p>
              On <strong className="text-foreground">11th February 2020</strong>, the Ministry of Health and Family Welfare expanded the definition through <strong className="text-foreground">S.O. 648(E)</strong>, bringing ALL medical devices  -  not just the previously notified 37 categories  -  under regulatory oversight. This landmark notification means every medical device manufactured in or imported into India now requires appropriate registration and licensing under the Medical Device Rules 2017.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-5 flex gap-4">
            <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm mb-1">
                Why are Devices defined as Drugs?
              </p>
              <p className="text-sm text-muted-foreground">
                Medical devices in India are regulated under the Drugs and Cosmetics Act, 1940 (DCA). Devices are first notified as "drugs" to come under the DCA's purview, and then regulated specifically under the Medical Device Rules 2017. This legal framework ensures comprehensive quality and safety oversight.
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── Section 2: Key Stats ── */}
      <section>
        <RevealSection>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">
            Indian Medical Device Regulation at a Glance
          </h2>
        </RevealSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatPill value="2006" label="Regulation since" delay={0} />
          <StatPill value="37+" label="Device families" delay={0.1} />
          <StatPill value="4" label="Risk classes" delay={0.2} />
          <StatPill value="20+" label="License forms" delay={0.3} />
        </div>
      </section>

      {/* ── Section 3: Risk-Based Classification ── */}
      <section>
        <RevealSection>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Risk-Based Classification
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Classification in India
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              In line with the Global Harmonization Task Force (GHTF) framework, medical devices are classified into four risk-based categories  -  Class A through D  -  with increasing risk and regulatory scrutiny.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ClassCard
            letter="A"
            risk="Low Risk"
            color="border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/30"
            examples={["Tongue depressors", "Specimen containers", "Non-sterile bandages"]}
            authority="Self-regulated / SLA"
            delay={0} />
          
          <ClassCard
            letter="B"
            risk="Low-Moderate Risk"
            color="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/30"
            examples={["Surgical gloves", "CT equipment", "Dental fillings"]}
            authority="State Licensing Authority"
            delay={0.1} />
          
          <ClassCard
            letter="C"
            risk="Moderate-High Risk"
            color="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/30"
            examples={["Ventilators", "Bone cements", "Dialysis machines"]}
            authority="CDSCO"
            delay={0.2} />
          
          <ClassCard
            letter="D"
            risk="High Risk"
            color="border-rose-200 bg-rose-50/50 dark:border-rose-800 dark:bg-rose-950/30"
            examples={["Heart valves", "Cardiac stents", "Implantable defibrillators"]}
            authority="CDSCO"
            delay={0.3} />
          
        </div>
      </section>

      {/* ── Section 4: Regulatory Timeline ── */}
      <section>
        <RevealSection>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Evolution of Regulation
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Regulatory Timeline
            </h2>
          </div>
        </RevealSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

          <div className="space-y-8">
            {timelineMilestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <RevealSection key={milestone.year} delay={index * 0.08}>
                  <div
                    className={cn(
                      "relative flex items-start gap-4",
                      "lg:gap-0",
                      isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    )}>
                    
                    {/* Content */}
                    <div
                      className={cn(
                        "ml-14 lg:ml-0 lg:w-[calc(50%-2rem)]",
                        isLeft ? "lg:pr-8 lg:text-right" : "lg:pl-8 lg:text-left"
                      )}>
                      
                      <motion.div
                        className="rounded-xl border border-border bg-card p-4 shadow-sm"
                        whileHover={{ scale: 1.02, boxShadow: "0 8px 30px -12px hsl(var(--primary) / 0.2)" }}
                        transition={{ duration: 0.2 }}>
                        
                        <span className="text-2xl font-bold text-primary">
                          {milestone.year}
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                          {milestone.event}
                        </p>
                      </motion.div>
                    </div>

                    {/* Dot */}
                    <motion.div
                      className="absolute left-4 lg:left-1/2 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}>
                      
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </motion.div>
                  </div>
                </RevealSection>);

            })}
          </div>
        </div>
      </section>

      {/* ── Section 5: CDSCO vs SLA ── */}
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
              whileHover={{ y: -4 }}>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">CDSCO</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The <strong className="text-foreground">Central Drugs Standard Control Organisation</strong>, under the Directorate General of Health Services, Ministry of Health & Family Welfare, is the <strong className="text-foreground">Central Licensing Authority</strong> for:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                "Class C & D medical devices manufactured in India",
                "ALL classes (A–D) of imported medical devices",
                "Clinical investigation permissions",
                "New / non-predicate device approvals"].
                map((item, i) =>
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Shield className="h-3.5 w-3.5 mt-0.5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                )}
              </ul>
            </motion.div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <motion.div
              className="rounded-2xl border border-border bg-card p-6 h-full"
              whileHover={{ y: -4 }}>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <Building className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  State Licensing Authority (SLA)
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Medical Devices in <strong className="text-foreground">Class A & B manufactured in India</strong> are regulated by respective State Drug Controllers across all States and Union Territories. The SLA handles:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                "Manufacturing licenses for Class A & B devices",
                "Wholesale drug licenses (Form 20B/21B)",
                "MD 42 registration for retailers and stockists",
                "Enforcement and compliance inspections"].
                map((item, i) =>
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Scale className="h-3.5 w-3.5 mt-0.5 text-accent flex-shrink-0" />
                    {item}
                  </li>
                )}
              </ul>
              <div className="mt-4 rounded-lg bg-muted/50 p-3">
                <p className="text-xs text-muted-foreground italic">
                  <strong>Note:</strong> Class A non-sterile, non-measuring devices need not be licensed  -  they are self-regulated as per applicable standards.
                </p>
              </div>
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* ── Section 6: License & Fees Table ── */}
      <section>
        <RevealSection>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Overview of Various
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Licenses, Classes & Government Fees
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
                    Risk Class
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
                {licenseData.map((row, i) =>
                <motion.tr
                  key={i}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}>
                  
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
                        row.authority === "CDSCO" ?
                        "bg-primary/10 text-primary" :
                        row.authority === "SLA" ?
                        "bg-accent/10 text-accent" :
                        "bg-secondary text-secondary-foreground"
                      )}>
                      
                        {row.authority}
                      </span>
                    </td>
                  </motion.tr>
                )}
              </tbody>
            </table>
          </div>
        </RevealSection>
      </section>

      {/* ── Section 7: Import & Manufacturing ── */}
      <section>
        <RevealSection>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Approved Medical Devices
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
              whileHover={{ y: -4 }}>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Import of Medical Devices
                </h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  An overseas manufacturer <strong className="text-foreground">cannot directly submit</strong> a registration application to CDSCO. Appointing an Indian entity as the <strong className="text-foreground">Authorised Agent</strong> or license holder is mandatory. The agent must hold a valid stock and sale license (Form 20B/21B).
                </p>
                <p>
                  The import license application is filed in <strong className="text-foreground">Form MD-14</strong>, with approval granted in <strong className="text-foreground">Form MD-15</strong>. The agent submits this through the SUGAM online portal along with a Power of Attorney from the overseas manufacturer.
                </p>
                <p>
                  For test or demonstration purposes, an application in <strong className="text-foreground">Form MD-16</strong> can be submitted for a test license (<strong className="text-foreground">Form MD-17</strong>) to import small quantities.
                </p>
              </div>
            </motion.div>
          </RevealSection>

          {/* Manufacturing */}
          <RevealSection delay={0.15}>
            <motion.div
              className="rounded-2xl border border-border bg-gradient-to-br from-card to-accent/5 p-6 h-full"
              whileHover={{ y: -4 }}>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Manufacturing in India
                </h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Indian manufacturers submit applications through the <strong className="text-foreground">SUGAM portal</strong>. Class A & B devices are approved by the <strong className="text-foreground">State Licensing Authority</strong> using Form MD-3 → MD-5, while Class C & D devices require <strong className="text-foreground">CDSCO approval</strong> using Form MD-7 → MD-9.
                </p>
                <p>
                  Loan license manufacturing is also supported  -  manufacturers can apply using <strong className="text-foreground">Form MD-4</strong> (Class A/B) or <strong className="text-foreground">Form MD-8</strong> (Class C/D) to manufacture at a third-party's licensed facility.
                </p>
                <p>
                  For test license to manufacture for clinical investigation, training, or evaluation, <strong className="text-foreground">Form MD-12</strong> leads to permission in <strong className="text-foreground">Form MD-13</strong>.
                </p>
              </div>
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* ── Section 8: New & Investigational Devices ── */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevealSection delay={0}>
            <motion.div
              className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 h-full"
              whileHover={{ borderColor: "hsl(var(--primary))" }}>
              
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">
                  New Medical Devices (Without Predicate)
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Devices whose predicate or similar product is <strong className="text-foreground">not yet approved in India</strong> require a clinical investigation to demonstrate safety and efficacy for the Indian population. Once proven safe, an application for import or manufacture is submitted to CDSCO through the SUGAM portal. This involves <strong className="text-foreground">Form MD-26</strong> (application) and <strong className="text-foreground">Form MD-27</strong> (permission) with a fee of ₹50,000.
              </p>
            </motion.div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <motion.div
              className="rounded-2xl border-2 border-dashed border-accent/30 bg-accent/5 p-6 h-full"
              whileHover={{ borderColor: "hsl(var(--accent))" }}>
              
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-bold text-foreground">
                  Investigational Medical Devices
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Devices under research that have <strong className="text-foreground">never been approved by any regulatory authority worldwide</strong> require prior CDSCO permission to conduct clinical investigations. Application is filed using <strong className="text-foreground">Form MD-22</strong> with a fee of ₹1,00,000, and permission is granted in <strong className="text-foreground">Form MD-23</strong>. This is a critically important process requiring rigorous safety, efficacy, and performance assessment.
              </p>
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* ── Section 9: MD 42 Registration ── */}
      <section>
        <RevealSection>
          <motion.div
            className="rounded-2xl border border-border bg-card p-6 lg:p-8"
            whileHover={{ boxShadow: "0 12px 40px -12px hsl(var(--primary) / 0.15)" }}>
            
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  MD 42  -  Registration for Wholesalers, Retailers & Stockists
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  5th Amendment, G.S.R. 754(E)  -  Effective 30 September 2022
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                The Ministry of Health and Family Welfare published the 5th Amendment of Medical Device Rules, making it <strong className="text-foreground">mandatory for all retailers, wholesalers, and stockists</strong> to obtain a Registration Certificate from the State Licensing Authority on <strong className="text-foreground">Form MD-42</strong> to sell, stock, exhibit, or distribute medical devices including IVDs.
              </p>
              <p>
                <strong className="text-foreground">MD 41</strong> is the application form submitted by the retailer/wholesaler/stockist to the SLA. Upon approval, the SLA issues the <strong className="text-foreground">MD 42 Registration Certificate</strong>  -  the legal authorization to deal in medical devices.
              </p>
            </div>
          </motion.div>
        </RevealSection>
      </section>

      {/* ── Section 10: Medical Device Pricing & NPPA Registration ── */}
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
                  NPPA Registration &amp; Medical Device Pricing Compliance
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Beyond CDSCO licensing, all medical device manufacturers and importers must comply with National Pharmaceutical Pricing Authority (NPPA) regulations, price ceiling monitoring, and applicable IPDMS 2.0 portal filings under DPCO 2013.
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
              Need Help with Medical Device Registration?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Our regulatory experts have decades of experience navigating
              CDSCO and SLA approvals. Let us handle the complexity.
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

export default MedicalDevicesContent;
