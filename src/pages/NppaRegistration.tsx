import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedServiceCard from "@/components/AnimatedServiceCard";
import NppaComplianceSection from "@/components/nppa/NppaComplianceSection";
import { NppaApplicabilitySection } from "@/components/nppa/NppaApplicabilitySection";
import nppaHeroImg from "@/assets/nppa-registration.jpg";
import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import {
  Shield,
  FileText,
  Building,
  Globe,
  Scale,
  ChevronRight,
  ClipboardCheck,
  IndianRupee,
  AlertTriangle,
  Users,
  Factory,
  Truck,
  Package,
  BarChart3,
  Search,
  Bell,
  FileCheck,
  Monitor,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Clock,
  Award,
  Landmark,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  MessageSquare,
  Eye,
  type LucideIcon,
} from "lucide-react";

/* ─── Reusable scroll-triggered wrapper (same as MedicalDevicesContent) ─── */
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

/* ─── FAQ Accordion Item ─── */
const FAQItem = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <RevealSection delay={index * 0.05}>
      <motion.div
        className="rounded-2xl border border-border bg-card overflow-hidden"
        whileHover={{ boxShadow: "0 4px 20px -8px hsl(var(--primary) / 0.15)" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-6 py-5 text-left"
          aria-expanded={isOpen}
        >
          <span className="font-semibold text-foreground pr-4">{question}</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </button>
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
            {answer}
          </div>
        </motion.div>
      </motion.div>
    </RevealSection>
  );
};

/* ─── Service Info Card ─── */
const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6 h-full transition-shadow hover:shadow-xl"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};



/* ═══════════════════════════════════════════════════════════════
   FAQ DATA
   ═══════════════════════════════════════════════════════════════ */
const faqData = [
  {
    question: "What is NPPA registration for medical devices?",
    answer:
      "NPPA registration refers to the process of registering company and medical device product information on the Integrated Pharmaceutical Database Management System (IPDMS 2.0) operated by the National Pharmaceutical Pricing Authority. This enables NPPA to monitor pricing compliance and collect relevant data under the Drugs (Prices Control) Order, 2013.",
  },
  {
    question: "What is the IPDMS 2.0 portal?",
    answer:
      "IPDMS 2.0 (Integrated Pharmaceutical Database Management System) is the official online platform of NPPA used for company registration, medical device and model information submissions, pricing data filing, and compliance-related communications. It replaced the earlier IPDMS 1.0 system.",
  },
  {
    question: "Is NPPA registration the same as CDSCO registration?",
    answer:
      "No. CDSCO (Central Drugs Standard Control Organisation) grants manufacturing and import licences for medical devices under the Drugs & Cosmetics Act, 1940 and Medical Devices Rules, 2017. NPPA, on the other hand, monitors and controls the pricing of medical devices under the DPCO, 2013. They are separate regulatory authorities with different functions, and compliance with one does not substitute for the other.",
  },
  {
    question: "Who needs to assess NPPA applicability?",
    answer:
      "Domestic manufacturers, importers (including subsequent importers), marketers, and brand owners of medical devices should assess whether NPPA pricing compliance requirements apply to their products. The specific obligations depend on the entity's role, the product classification, and applicable DPCO provisions.",
  },
  {
    question: "What documents are required?",
    answer:
      "Typical requirements include company incorporation documents, CIN/LLPIN, PAN, GSTIN, registered office details, contact information, authorisation letter or board resolution, applicable CDSCO licence information, medical device product list, brand and model details, current MRP and GST information, and relevant pricing history. Actual requirements should be verified against the current IPDMS 2.0 instructions.",
  },
  {
    question: "What are the applicable medical-device pricing requirements?",
    answer:
      "Medical devices listed in the National List of Essential Medicines (NLEM) schedule are subject to NPPA-notified ceiling prices. Non-scheduled medical devices are subject to the annual MRP increase restriction of not more than 10% under the applicable provision of the DPCO, 2013. Specific product notifications and amendments issued by NPPA must always be checked.",
  },
  {
    question:
      "What is the difference between scheduled and non-scheduled devices?",
    answer:
      "Scheduled medical devices are those included in the NLEM schedule and are subject to ceiling prices fixed by NPPA. Non-scheduled devices are not in the schedule but are still monitored — their MRP increase is restricted to not more than 10% per annum under the applicable DPCO provision. Both categories have distinct pricing compliance requirements.",
  },
  {
    question: "What is Form V under the IPDMS process?",
    answer:
      "Form V is one of the forms identified on the IPDMS 2.0 portal for medical device-related submissions. It is used for providing pricing and product information to NPPA. The specific applicability and filing requirements should be verified based on the entity's circumstances and the current portal instructions.",
  },
  {
    question: "Do importers need to comply with NPPA requirements?",
    answer:
      "Yes. Importers, including subsequent importers operating under the import licence (MD-15) route, are required to assess and comply with applicable NPPA pricing requirements. This includes IPDMS registration, product information filing, and relevant pricing compliance.",
  },
  {
    question: "Is there a government registration fee?",
    answer:
      "The IPDMS 2.0 registration page does not list a government registration fee at the time of this writing. However, this should be confirmed on the portal at the time of filing, as government fee structures may change. Professional consultancy fees for assistance with the process are separate.",
  },
  {
    question: "Does IPDMS registration require annual renewal?",
    answer:
      "NPPA has not published a specific expiry date or annual renewal cycle for IPDMS company registration. However, ongoing compliance obligations continue through updated price lists, periodic returns, and compliance with new notifications and amendments issued by NPPA.",
  },
  {
    question: "How can Terz Compliance assist with NPPA compliance?",
    answer:
      "Terz Compliance provides structured assistance across the entire NPPA compliance process — from initial applicability assessments and IPDMS 2.0 registration to product information filing, pricing classification, applicable form preparation, MRP compliance review, NPPA notice responses, and ongoing monitoring of regulatory updates and notifications.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */
const NppaRegistration = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: relatedRef, isVisible: relatedVisible } = useScrollAnimation();

  useEffect(() => {
    document.title =
      "NPPA Registration for Medical Devices in India | Terz Compliance";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Expert assistance with NPPA registration, IPDMS 2.0, medical device pricing compliance, applicable DPCO filings and ongoing regulatory support in India."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.terzcompliance.com/services/nppa-registration-medical-devices"
    );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO SECTION ── */}
      <section ref={heroRef} className="relative overflow-hidden py-20 lg:py-32">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={heroVisible ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={nppaHeroImg}
            alt="NPPA Registration for Medical Devices — Regulatory compliance dashboard with medical devices and official documentation"
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-accent/70 mix-blend-multiply" />
        </motion.div>

        <FloatingElements variant="services" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-white/80"
              />
              NPPA Registration & Pricing Compliance
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-6 text-4xl font-bold text-white lg:text-6xl"
            >
              NPPA Registration for Medical Devices in India
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl lg:text-2xl text-white/90 mb-4"
            >
              Simplifying Medical Device Pricing Compliance and IPDMS 2.0
              Registration
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/80 mb-8"
            >
              Navigate India's medical device pricing regulations with
              confidence. Terz Compliance provides structured assistance with
              NPPA applicability assessments, IPDMS 2.0 registration, product
              information, pricing documentation and ongoing compliance under
              applicable provisions of the Drugs (Prices Control) Order, 2013.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  className="shadow-lg shadow-primary/25 bg-white text-primary hover:bg-white/90"
                >
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT: SECTION 2 ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto pt-16 lg:pt-24 pb-8 lg:pb-12">
          {/* ── SECTION 2: INTRODUCTION ── */}
          <section>
            <RevealSection>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10"
                  whileHover={{ rotate: 10 }}
                >
                  <Landmark className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Introduction
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    Understanding NPPA Registration for Medical Devices
                  </h2>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.1}>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  The{" "}
                  <strong className="text-foreground">
                    National Pharmaceutical Pricing Authority (NPPA)
                  </strong>{" "}
                  is the government body under the{" "}
                  <strong className="text-foreground">
                    Department of Pharmaceuticals, Ministry of Chemicals and
                    Fertilizers
                  </strong>
                  , responsible for monitoring and regulating the prices of
                  pharmaceutical products — including medical devices — in India.
                  NPPA exercises its authority primarily through the{" "}
                  <strong className="text-foreground">
                    Drugs (Prices Control) Order, 2013 (DPCO, 2013)
                  </strong>
                  .
                </p>
                <p>
                  <strong className="text-foreground">IPDMS 2.0</strong>{" "}
                  (Integrated Pharmaceutical Database Management System) is
                  NPPA's official online platform for company registration,
                  medical device and model information submissions, pricing data
                  filing, and compliance-related communications. It serves as the
                  primary interface between regulated entities and NPPA.
                </p>
                <p>
                  Medical device manufacturers, importers, marketers, and brand
                  owners need to assess whether applicable pricing compliance
                  obligations under the DPCO, 2013 apply to their products.
                  Entities whose devices fall within the scope of NPPA
                  monitoring — whether scheduled or non-scheduled — may need to
                  register on IPDMS 2.0 and comply with relevant pricing
                  information and filing requirements.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-5 flex gap-4">
                <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">
                    NPPA ≠ CDSCO — Distinct Regulatory Functions
                  </p>
                  <p className="text-sm text-muted-foreground">
                    NPPA registration for pricing compliance is separate from
                    CDSCO product licensing. CDSCO grants manufacturing and
                    import licences under the Drugs & Cosmetics Act, 1940 and
                    Medical Devices Rules, 2017. NPPA monitors and controls
                    pricing under the DPCO, 2013. Compliance with one does not
                    substitute for the other — both must be independently
                    assessed.
                  </p>
                </div>
              </div>
            </RevealSection>
          </section>
        </div>
      </div>

      {/* ── SECTION 3: WHY NPPA COMPLIANCE MATTERS (FULL-WIDTH 100VW) ── */}
      <NppaComplianceSection />

      {/* ── SECTION 4: WHO SHOULD ASSESS NPPA APPLICABILITY (FULL-WIDTH 100VW) ── */}
      <NppaApplicabilitySection />

      {/* ── MAIN CONTENT: SECTIONS 5 - 14 ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20 lg:space-y-28 py-16 lg:py-24">

          {/* ── SECTION 5: SCHEDULED VS NON-SCHEDULED ── */}
          <section>
            <RevealSection>
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  Pricing Framework
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Understanding Medical Device Pricing Regulations
                </h2>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RevealSection delay={0}>
                <motion.div
                  className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5 p-6 h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      Scheduled / Price-Controlled Devices
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      Medical devices listed in the{" "}
                      <strong className="text-foreground">
                        National List of Essential Medicines (NLEM)
                      </strong>{" "}
                      schedule are subject to ceiling prices notified by NPPA.
                      Currently, devices such as{" "}
                      <strong className="text-foreground">
                        intrauterine devices, bare metal stents, drug-eluting
                        stents, and condoms
                      </strong>{" "}
                      are regulated as scheduled items. NPPA has also fixed
                      ceiling prices for knee implants through special orders.
                    </p>
                    <ul className="space-y-2 mt-3">
                      {[
                        "Applicable NPPA-notified ceiling prices must be observed",
                        "Compliance with relevant pricing notifications and amendments",
                        "Applicable MRP and documentation requirements under the DPCO",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </RevealSection>

              <RevealSection delay={0.15}>
                <motion.div
                  className="rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-card to-accent/5 p-6 h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      Non-Scheduled Devices
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      Non-scheduled medical devices, while not subject to
                      ceiling prices, are still monitored by NPPA under the{" "}
                      <strong className="text-foreground">
                        applicable provisions of Para 20 of the DPCO, 2013
                      </strong>
                      . The annual MRP increase for non-scheduled medical devices
                      is restricted to{" "}
                      <strong className="text-foreground">
                        not more than 10% in any twelve-month period
                      </strong>
                      .
                    </p>
                    <ul className="space-y-2 mt-3">
                      {[
                        "Annual MRP increase restricted to ≤10% under the applicable DPCO provision",
                        "Monitoring and reporting of pricing records to NPPA",
                        "Relevant pricing documentation and record maintenance obligations",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </RevealSection>
            </div>

            <RevealSection delay={0.2}>
              <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-5 flex gap-4">
                <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">
                    Important Note
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The 10% annual MRP increase restriction applies specifically
                    to non-scheduled medical devices under the relevant DPCO
                    provision. It is not a universal rule for every device.
                    Product-specific NPPA notifications and subsequent amendments
                    must always be checked for the most current requirements.
                  </p>
                </div>
              </div>
            </RevealSection>
          </section>

          {/* ── SECTION 6: OUR NPPA SERVICES ── */}
          <section>
            <RevealSection>
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  How We Help
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Our Comprehensive NPPA Compliance Services
                </h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  Structured, end-to-end assistance across every aspect of NPPA
                  compliance for medical devices.
                </p>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Search,
                  title: "NPPA Applicability Assessment",
                  description:
                    "Evaluate whether your medical device portfolio attracts NPPA pricing compliance obligations under the applicable DPCO provisions.",
                },
                {
                  icon: Monitor,
                  title: "IPDMS 2.0 Company Registration",
                  description:
                    "Assistance with the company registration process on the IPDMS 2.0 portal, including data preparation and submission.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Device & Model Information",
                  description:
                    "Organise and submit medical device product and model information on IPDMS 2.0 with accurate classifications and details.",
                },
                {
                  icon: Scale,
                  title: "Pricing Classification Assessment",
                  description:
                    "Determine whether your devices are scheduled or non-scheduled and identify the applicable pricing requirements.",
                },
                {
                  icon: FileCheck,
                  title: "Applicable Form Preparation & Filing",
                  description:
                    "Prepare and assist with relevant NPPA forms, including Form V or other applicable forms, for pricing information submissions.",
                },
                {
                  icon: IndianRupee,
                  title: "MRP & Pricing Compliance Review",
                  description:
                    "Review current MRP levels, pricing history, and applicable ceiling price compliance to identify and address potential issues.",
                },
                {
                  icon: MessageSquare,
                  title: "NPPA Notice & Query Assistance",
                  description:
                    "Assistance with responding to NPPA notices, information requests, and compliance communications within prescribed timelines.",
                },
                {
                  icon: Eye,
                  title: "Ongoing Compliance Monitoring",
                  description:
                    "Continuous monitoring of NPPA notifications, pricing amendments, and regulatory updates relevant to your medical device portfolio.",
                },
              ].map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.06}
                />
              ))}
            </div>
          </section>

          {/* ── SECTION 7: STEP-BY-STEP PROCESS (SIMPLIFIED HORIZONTAL TIMELINE) ── */}
          <section>
            <RevealSection>
              <div className="text-center mb-8 lg:mb-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  Registration Roadmap
                </span>
                <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-foreground">
                  How the NPPA Registration Process Works
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
                  A streamlined 4-step compliance pathway from portfolio review to IPDMS 2.0 filing and ongoing DPCO price monitoring.
                </p>
              </div>
            </RevealSection>

            {/* Horizontal Timeline Container */}
            <RevealSection delay={0.1}>
              <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-4 sm:p-6 lg:p-7 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                  {[
                    {
                      step: "01",
                      title: "Business & Product Review",
                      description:
                        "Audit corporate entity structure, CDSCO/SLA manufacturing or import licences, and medical device catalogues to define NPPA applicability.",
                      icon: Search,
                    },
                    {
                      step: "02",
                      title: "Regulatory Applicability",
                      description:
                        "Assess scheduled vs. non-scheduled classifications, verify applicable ceiling price limits, and evaluate DPCO 2013 compliance provisions.",
                      icon: Scale,
                    },
                    {
                      step: "03",
                      title: "Documentation Support",
                      description:
                        "Complete company registration on IPDMS 2.0, submit device & model specifications, and prepare Form II or Form V price disclosure filings.",
                      icon: FileText,
                    },
                    {
                      step: "04",
                      title: "Compliance Follow-Up",
                      description:
                        "Maintain MRP monitoring, review pricing obligations, respond to NPPA communications, and ensure ongoing regulatory audit readiness.",
                      icon: ShieldCheck,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.step} className="relative flex flex-col h-full">
                        <motion.div
                          className="h-full rounded-xl border border-border/60 bg-background/80 p-4 sm:p-5 flex flex-col justify-between transition-all hover:border-primary/40 hover:shadow-md"
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div>
                            {/* Step Header */}
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-sm">
                                <Icon className="h-5 w-5 stroke-[2.2]" />
                              </div>
                              <span className="text-xs font-bold text-primary tracking-wider py-0.5 px-2.5 rounded-full bg-primary/10 border border-primary/20">
                                Step {item.step}
                              </span>
                            </div>

                            {/* Step Title */}
                            <h4 className="text-sm sm:text-base font-bold text-foreground leading-snug">
                              {item.title}
                            </h4>

                            {/* Step Description */}
                            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>

                        {/* Chevron connector between steps on desktop */}
                        {index < 3 && (
                          <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center h-6 w-6 rounded-full bg-card border border-border text-primary/60 shadow-sm">
                            <ChevronRight className="h-3.5 w-3.5" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Processing Disclaimer */}
                <div className="mt-6 rounded-xl border border-border/60 bg-muted/30 p-3.5 flex items-start gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    NPPA does not publish fixed processing timelines. Processing duration depends on the completeness of documentation and government evaluation schedules.
                  </p>
                </div>
              </div>
            </RevealSection>
          </section>

          {/* ── SECTION 9: PRICING COMPLIANCE ── */}
          <section>
            <RevealSection>
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  Ongoing Compliance
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Stay Ahead of Medical Device Pricing Requirements
                </h2>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: BarChart3,
                  title: "Monitor Ceiling Prices",
                  description:
                    "Track applicable ceiling price notifications for scheduled medical devices and verify MRP compliance.",
                },
                {
                  icon: IndianRupee,
                  title: "Review Proposed MRP Changes",
                  description:
                    "Evaluate proposed MRP adjustments against the applicable annual increase restrictions.",
                },
                {
                  icon: FileText,
                  title: "Maintain Price History",
                  description:
                    "Keep comprehensive records of pricing changes, effective dates, and supporting calculations.",
                },
                {
                  icon: Bell,
                  title: "Monitor NPPA Notifications",
                  description:
                    "Stay informed about new notifications, circulars, and amendments issued by NPPA.",
                },
                {
                  icon: Monitor,
                  title: "Update IPDMS Records",
                  description:
                    "Ensure that company, product, and pricing information on IPDMS remains current and accurate.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Maintain Documentation",
                  description:
                    "Organise and preserve supporting pricing documentation, duty structures, and compliance records.",
                },
              ].map((item, index) => (
                <ServiceCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  delay={index * 0.08}
                />
              ))}
            </div>
          </section>

          {/* ── SECTION 10: CONSEQUENCES ── */}
          <section>
            <RevealSection>
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  Compliance Impact
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Why Accurate NPPA Compliance Matters
                </h2>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  Non-compliance with applicable DPCO provisions can have
                  significant consequences depending on the nature and extent of
                  the violation.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={0.1}>
              <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: IndianRupee,
                      text: "Recovery of overcharged amounts with applicable interest under the DPCO",
                    },
                    {
                      icon: AlertTriangle,
                      text: "Price correction and refund obligations where overcharging is established",
                    },
                    {
                      icon: FileText,
                      text: "Regulatory notices and requests for information from NPPA",
                    },
                    {
                      icon: Search,
                      text: "Inspection of relevant records and documentation by NPPA officials",
                    },
                    {
                      icon: Scale,
                      text: "Potential action under applicable provisions of the Essential Commodities Act, 1955",
                    },
                    {
                      icon: Building,
                      text: "Commercial and institutional procurement complications due to non-compliance status",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 rounded-xl bg-background/80 p-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </section>

          {/* ── SECTION 11: WHY CHOOSE TERZ ── */}
          <section className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-secondary/30">
            <RevealSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Why Choose Terz Compliance?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We combine deep regulatory expertise with a structured,
                  client-first approach to deliver practical compliance guidance.
                </p>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Regulatory Expertise",
                  description:
                    "Deep understanding of NPPA, DPCO, and IPDMS requirements for medical devices across product categories.",
                },
                {
                  icon: FileCheck,
                  title: "Structured Documentation",
                  description:
                    "Methodical preparation and organisation of all required documents, data, and pricing information.",
                },
                {
                  icon: MessageSquare,
                  title: "Transparent Communication",
                  description:
                    "Clear, honest guidance about applicable requirements, timelines, and compliance obligations.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Practical Compliance Guidance",
                  description:
                    "Actionable advice tailored to your specific business role, product portfolio, and regulatory circumstances.",
                },
                {
                  icon: Headphones,
                  title: "End-to-End Support",
                  description:
                    "Comprehensive assistance from initial assessment through registration, filing, and ongoing compliance monitoring.",
                },
                {
                  icon: Users,
                  title: "Dedicated Assistance",
                  description:
                    "Assigned team members who understand your business context and provide consistent, personalised support.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-shadow duration-300"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── SECTION 12: RELATED SERVICES ── */}
          <section ref={relatedRef}>
            <RevealSection>
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  Related Services
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Explore Related Regulatory Services
                </h2>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedServiceCard
                id="medical-devices"
                title="Medical Devices"
                tagline="CDSCO registration for manufacturers and importers"
                image={medicalDevicesImg}
                badge="CDSCO"
                index={0}
                isVisible={relatedVisible}
              />
              <AnimatedServiceCard
                id="ivd"
                title="In-Vitro Diagnostics"
                tagline="Expert IVD compliance and regulatory support"
                image={ivdImg}
                badge="CDSCO"
                index={1}
                isVisible={relatedVisible}
              />
              <AnimatedServiceCard
                id="lmpc"
                title="Legal Metrology"
                tagline="LMPC compliance made simple"
                image={lmpcImg}
                badge="Central-Level"
                index={2}
                isVisible={relatedVisible}
              />
              <AnimatedServiceCard
                id="iec"
                title="Import Export Code"
                tagline="IEC registration and comprehensive support"
                image={iecImg}
                badge="Lifetime Valid"
                index={3}
                isVisible={relatedVisible}
              />
            </div>
          </section>

          {/* ── SECTION 13: FAQ ── */}
          <section>
            <RevealSection>
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  Common Questions
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>
            </RevealSection>

            <div className="space-y-3 max-w-3xl mx-auto">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* ── SECTION 14: FINAL CTA ── */}
          <section>
            <RevealSection>
              <motion.div
                className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-8 lg:p-12 text-center"
                whileHover={{
                  boxShadow: "0 20px 60px -20px hsl(var(--primary) / 0.2)",
                }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Need Assistance with NPPA Registration?
                </h3>
                <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                  Let Terz Compliance help you navigate medical device pricing
                  requirements, IPDMS registration and applicable regulatory
                  obligations with confidence.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="shadow-lg shadow-primary/25"
                  >
                    <Link to="/contact">
                      Talk to Our Regulatory Experts →
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </RevealSection>
          </section>

          {/* ── REGULATORY DISCLAIMER ── */}
          <RevealSection>
            <div className="rounded-xl border border-border bg-muted/30 p-5">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Regulatory Disclaimer:
                </strong>{" "}
                The information provided on this page is intended for general
                guidance only and does not constitute legal or regulatory advice.
                NPPA requirements, including forms, filing processes, and pricing
                provisions, are subject to change through notifications and
                amendments issued by the Government of India. Actual compliance
                obligations depend on the specific product, the applicant's
                role, applicable DPCO provisions, and current NPPA
                notifications. Terz Compliance recommends that all entities
                verify current requirements through the official NPPA and IPDMS
                2.0 platforms and seek independent professional advice where
                necessary.
              </p>
            </div>
          </RevealSection>
        </div>
      </div>
    </div>
  );
};

export default NppaRegistration;
