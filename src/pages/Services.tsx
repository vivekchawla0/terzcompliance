import { useEffect, useMemo, useState } from "react";
import MedicalDevicesContent from "@/components/services/MedicalDevicesContent";
import IVDContent from "@/components/services/IVDContent";
import CosmeticsContent from "@/components/services/CosmeticsContent";
import LegalMetrologyContent from "@/components/services/LegalMetrologyContent";
import IECContent from "@/components/services/IECContent";
import EPRContent from "@/components/services/EPRContent";
import WholesaleLicenseContent from "@/components/services/WholesaleLicenseContent";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import StepDetailCard from "@/components/StepDetailCard";
import FloatingElements from "@/components/FloatingElements";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Beaker,
  ChevronDown,
  FileText,
  Globe2,
  Layers,
  Leaf,
  Microscope,
  Package,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Target,
  Truck,
  UploadCloud,
  UserCheck,
  Factory,
  Building2 } from
"lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";

// Image imports
import medicalDevicesImg from "@/assets/medical-devices.jpg";
import ivdImg from "@/assets/ivd.jpg";
import cosmeticsImg from "@/assets/cosmetics.jpg";
import lmpcImg from "@/assets/lmpc.jpg";
import iecImg from "@/assets/iec.jpg";
import eprImg from "@/assets/epr.jpg";
import wholesaleLicenseImg from "@/assets/wholesale-license.jpg";
import nppaImg from "@/assets/nppa-registration.jpg";

type ProcedureStep = {
  title: string;
  description: string;
  icon: LucideIcon;
  phase: string;
  keyDocuments?: string[];
  typicalTimeline?: string;
  deliverables?: string[];
  tips?: string[];
};

type ServiceProcedure = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  manufacturerSteps: ProcedureStep[];
  importerSteps: ProcedureStep[];
};

const serviceCatalog: ServiceProcedure[] = [
{
  id: "medical-devices",
  title: "Medical Devices (CDSCO)",
  tagline: "Smooth CDSCO registration for manufacturers and importers",
  description:
  "Navigate India's medical device regulatory landscape with confidence. The Central Drugs Standard Control Organisation (CDSCO) governs the manufacturing, import, sale, and distribution of medical devices under the Drugs & Cosmetics Act, 1940 and Rules, 1945. We provide end-to-end registration support — from device classification and technical file preparation to CDSCO approval and post-market compliance — for all risk classes (A through D).",
  image: medicalDevicesImg,
  badge: "CDSCO",
  manufacturerSteps: [
  {
    title: "Determine Device Classification",
    description:
    "Medical devices in India are classified into four risk-based categories under the Medical Devices Rules, 2017 — Class A (low risk), Class B (low-moderate risk), Class C (moderate-high risk), and Class D (high risk). This classification is based on the device's invasiveness, duration of contact, and intended use, in line with the Global Harmonization Task Force (GHTF) framework. Accurate classification is the foundation of your entire regulatory strategy, as it determines the applicable licensing authority (State Licensing Authority for Class A/B, CDSCO for Class C/D), the required documentation, government fees, and approval timelines. Our experts analyse your device's intended use, risk profile, and predicate status to assign the correct risk class and map the optimal regulatory pathway.",
    icon: Layers,
    phase: "Assessment",
    keyDocuments: ["Risk analysis report", "Intended use statement", "Device description"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Classification determination letter", "Risk class assignment (A/B/C/D)"],
    tips: ["Class A devices are low-risk (e.g., thermometers); Class D are high-risk (e.g., heart valves, implantable devices)"]
  },
  {
    title: "Technical File Preparation",
    description:
    "The technical file is the backbone of your CDSCO submission, comprising the Device Master File (DMF) and Plant Master File (PMF). The DMF must include comprehensive details about the device's design, manufacturing process, materials used, biocompatibility data, performance testing results, and intended clinical application. The PMF documents your manufacturing facility's capabilities, equipment, quality control processes, and environmental controls. For devices without a predicate in India, additional clinical investigation data may be required. Our regulatory team structures your technical file to meet CDSCO's Common Submission Dossier Template (CSDT) format, ensuring completeness and reducing the risk of queries or rejection.",
    icon: FileText,
    phase: "Preparation",
    keyDocuments: ["Device Master File (DMF)", "Plant Master File (PMF)", "Design specifications", "Quality testing reports"],
    typicalTimeline: "4–8 weeks",
    deliverables: ["Complete DMF dossier", "PMF documentation"],
    tips: ["Include all manufacturing details, materials used, clinical trial data, and target audience in the DMF"]
  },
  {
    title: "ISO 13485 Certification Support",
    description:
    "ISO 13485 certification is the internationally recognized quality management system standard specific to medical device manufacturers. Under MDR 2017, ISO 13485 compliance is mandatory for manufacturers of Class B, C, and D devices — without it, your application cannot proceed. The certification process involves establishing documented procedures for design control, production, installation, servicing, risk management, and corrective and preventive actions (CAPA). Our team assists you in preparing your QMS manual, conducting internal audits, addressing non-conformities, and coordinating with notified certification bodies to achieve or maintain your ISO 13485 certificate.",
    icon: ShieldCheck,
    phase: "Preparation",
    keyDocuments: ["QMS manual", "Process validation records", "Internal audit reports"],
    typicalTimeline: "8–12 weeks (if not already certified)",
    deliverables: ["ISO 13485 certificate", "QMS compliance report"],
    tips: ["ISO 13485 is mandatory for Class B, C, and D devices; start early as this is often the longest step"]
  },
  {
    title: "Submit Application via OSMD Portal",
    description:
    "All medical device registration applications must be submitted electronically through CDSCO's SUGAM/OSMD (Online Submission of Medical Devices) portal. The submission requires uploading the complete technical dossier, proof of fee payment via TR-6 challan, and duly signed application forms — Form 40 for Registration Certificate or Form 10 for Import License. Government fees are structured based on risk class: approximately USD 1,500 per manufacturing site plus USD 1,000 per product for Class C/D devices. Our team manages the entire online submission process, ensures all documents are correctly formatted and uploaded, and tracks the application status through to acknowledgement.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["Form 40 (Registration Certificate)", "Form 10 (Import License)", "Fee payment challan (TR-6)"],
    typicalTimeline: "2–4 weeks for submission",
    deliverables: ["Application acknowledgement", "Submission receipt with reference number"],
    tips: ["Registration fee is approximately USD 1,500 per manufacturing site plus USD 1,000 per device; submit at CDSCO HQ, New Delhi"]
  },
  {
    title: "Clinical Evaluation Assistance",
    description:
    "Clinical evaluation is a critical regulatory requirement for higher-risk medical devices (Class C and D) that demonstrates the safety, performance, and clinical benefit of your device when used on the Indian population. This may involve a comprehensive literature review of existing clinical data, analysis of post-market surveillance data from other markets, or in some cases, a formal clinical investigation conducted at approved Indian clinical sites. The Drug Controller General of India (DCGI) may also request a technical presentation before the Medical Devices Technical Advisory Board. We assist in preparing your clinical evaluation report, coordinating with clinical investigation sites, and responding to DCGI queries to ensure a smooth evaluation process.",
    icon: Microscope,
    phase: "Review",
    keyDocuments: ["Clinical evaluation report", "Literature review", "Clinical investigation data (for Class C/D)"],
    typicalTimeline: "4–12 weeks depending on risk class",
    deliverables: ["Clinical evaluation report", "DCGI response to enquiry letter"],
    tips: ["DCGI may request a technical presentation; be prepared with comprehensive clinical data summaries"]
  },
  {
    title: "Registration Certificate Obtainment",
    description:
    "Upon successful review and approval by CDSCO, the manufacturer or authorized agent receives a Registration Certificate that grants legal authorization to market the medical device in India. This certificate is valid for five years from the date of issue and covers the specific device models and manufacturing sites listed in the application. The certificate must be renewed at least six months before its expiry to avoid any disruption in market access. Our team handles the final stages of approval, coordinates with CDSCO for certificate issuance, and sets up proactive renewal management to ensure your device remains continuously authorized for sale in India.",
    icon: Globe2,
    phase: "Approval",
    keyDocuments: ["Approval letter from DCGI", "Registration certificate"],
    typicalTimeline: "2–6 months (total process end)",
    deliverables: ["CDSCO Registration Certificate (valid 5 years)", "Market authorization"],
    tips: ["Certificate is valid for 5 years; plan renewal at least 6 months before expiry"]
  }],

  importerSteps: [
  {
    title: "Appoint Indian Authorized Agent",
    description:
    "Under Indian regulations, an overseas manufacturer cannot directly submit a registration application to CDSCO. It is mandatory to appoint an Indian entity as the Authorized Agent (AA) or license holder who will act as the local representative and hold the import license on the manufacturer's behalf. The appointment requires a formal Power of Attorney, an agent appointment deed, and the agent must possess a valid wholesale drug license in Form 20B/21B for stocking and selling medical devices. Our team can serve as your Authorized Agent in India or assist you in identifying and appointing a suitable local partner, ensuring all legal formalities are completed correctly.",
    icon: UserCheck,
    phase: "Assessment",
    keyDocuments: ["Authorization letter", "Agent appointment deed", "Power of attorney"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Signed agent agreement", "IAA appointment confirmation"],
    tips: ["The authorized agent acts as your local representative and license holder with CDSCO"]
  },
  {
    title: "Import License Documentation",
    description:
    "The import license application requires a comprehensive dossier submitted in Form MD-14, leading to the grant of an import license in Form MD-15. The documentation package must include a Free Sale Certificate (FSC) from the country of origin, certificate of conformance, device master file, test reports, labeling samples, and authorization from the foreign manufacturer. All foreign documents must be notarized and apostilled or authenticated by the Indian Embassy in the country of origin. Government fees vary by risk class — ranging from USD 1,000 (Class A) to USD 3,000 (Class C/D) per manufacturing site, plus per-product fees. Our experts compile and review your complete dossier, ensuring every document meets CDSCO's requirements before submission.",
    icon: FileText,
    phase: "Preparation",
    keyDocuments: ["Form MD 14 / MD 15", "Free Sale Certificate (FSC) from country of origin", "Certificate of conformance"],
    typicalTimeline: "3–6 weeks",
    deliverables: ["Complete import license application dossier"],
    tips: ["Ensure all foreign documents are notarized and apostilled"]
  },
  {
    title: "Quality Management System Verification",
    description:
    "CDSCO requires verification that the foreign manufacturing facility operates under a robust Quality Management System compliant with ISO 13485 or equivalent standards. This verification may involve a desk review of submitted QMS documentation or, in certain cases, a physical or virtual site audit of the overseas manufacturing facility conducted by CDSCO-appointed auditors. The audit fee is approximately USD 6,000 as prescribed under MDR 2017. Our team prepares your facility for audit readiness, ensures all QMS documentation is current and comprehensive, and coordinates the logistics of any remote or on-site inspections.",
    icon: ShieldCheck,
    phase: "Preparation",
    keyDocuments: ["ISO 13485 certificate", "Factory inspection report", "Quality manual"],
    typicalTimeline: "4–8 weeks",
    deliverables: ["QMS compliance verification report"],
    tips: ["CDSCO may conduct a virtual or physical site audit of the foreign manufacturing facility"]
  },
  {
    title: "CDSCO Application Filing",
    description:
    "Once all documentation is compiled and verified, the import registration application is filed electronically through the SUGAM portal. The submission includes completed application forms, the entire technical dossier, proof of fee payment, agent authorization documents, and the foreign manufacturer's QMS certificates. All documents must be in English or accompanied by officially certified translations. Our team manages the end-to-end filing process, tracks the application through CDSCO's review pipeline, and promptly responds to any queries or requests for additional information from the regulatory authority.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["Completed application forms", "Technical documentation", "Fee payment proof"],
    typicalTimeline: "2–4 weeks",
    deliverables: ["Application reference number", "Filing confirmation"],
    tips: ["Submit through the OSMD portal; ensure all documents are in English or officially translated"]
  },
  {
    title: "Post-Market Surveillance Setup",
    description:
    "Post-market surveillance (PMS) is a mandatory ongoing obligation for all medical device importers in India. It involves establishing formal systems for monitoring adverse events, reporting device malfunctions, tracking product complaints, and submitting periodic safety update reports to CDSCO. The PMS framework must include Standard Operating Procedures for vigilance reporting, field safety corrective actions, and a designated person responsible for regulatory communications. We help you design and implement a comprehensive PMS framework that meets CDSCO's requirements, including adverse event reporting templates, timelines for mandatory reporting, and periodic review mechanisms.",
    icon: Activity,
    phase: "Review",
    keyDocuments: ["Vigilance reporting SOP", "Adverse event monitoring plan", "Periodic safety update reports"],
    typicalTimeline: "2–4 weeks",
    deliverables: ["PMS framework document", "Reporting procedures manual"],
    tips: ["Establish adverse event reporting systems before receiving the import license"]
  },
  {
    title: "Renewal Management",
    description:
    "Medical device import licenses are valid for five years from the date of issuance, after which they must be renewed to continue importing. The renewal process requires submission of updated compliance records, post-market surveillance reports, and evidence of continued conformity with MDR 2017 requirements. Late renewal applications can result in suspension of the import license, disrupting your supply chain and market presence in India. Our team proactively tracks your license validity, initiates renewal applications at least six months before expiry, and ensures all updated documentation is compiled and submitted on time to maintain uninterrupted market access.",
    icon: RefreshCcw,
    phase: "Approval",
    keyDocuments: ["Renewal application", "Updated compliance records", "Post-market surveillance reports"],
    typicalTimeline: "Begin 6 months before expiry",
    deliverables: ["Renewed registration/import license"],
    tips: ["Licenses are valid for 5 years; late renewal may result in import suspension"]
  }]

},
{
  id: "nppa-registration",
  title: "NPPA Registration",
  tagline: "Medical device pricing compliance & IPDMS 2.0 registration",
  description:
    "Navigate India's medical device pricing regulations with confidence. Terz Compliance provides structured assistance with NPPA applicability assessments, IPDMS 2.0 registration, product information, pricing documentation and ongoing compliance under applicable provisions of the Drugs (Prices Control) Order, 2013.",
  image: nppaImg,
  badge: "NPPA / IPDMS",
  manufacturerSteps: [
    {
      title: "NPPA Applicability & Classification",
      description:
        "Determine applicable DPCO 2013 provisions for your medical devices. We assess whether products fall under scheduled price-capped categories or non-scheduled categories subject to the 10% annual MRP increase restriction, verifying applicable official NPPA notifications.",
      icon: Scale,
      phase: "Assessment",
      keyDocuments: ["Product technical file", "Intended use statement", "Current MRP structure"],
      typicalTimeline: "1–2 weeks",
      deliverables: ["Applicability assessment memo", "Pricing category determination"],
      tips: ["Ceiling prices apply to notified scheduled devices; non-scheduled devices follow Para 20 annual increase caps"]
    },
    {
      title: "IPDMS 2.0 Portal Registration",
      description:
        "Set up and verify your corporate account on the official Integrated Pharmaceutical Database Management System (IPDMS 2.0) portal. We guide corporate KYC, board authorization, and portal onboarding.",
      icon: Globe2,
      phase: "Preparation",
      keyDocuments: ["Certificate of Incorporation", "PAN & GSTIN", "Board resolution / authorization letter"],
      typicalTimeline: "1–2 weeks",
      deliverables: ["IPDMS 2.0 credentials", "Verified corporate profile"],
      tips: ["Ensure corporate contact details match registered statutory filings"]
    },
    {
      title: "Model Collation & Price Documentation",
      description:
        "Compile comprehensive product master data including brand names, catalogue/model numbers, CDSCO manufacturing license numbers, and unit MRP breakdown including GST components.",
      icon: FileText,
      phase: "Preparation",
      keyDocuments: ["CDSCO manufacturing license (MD-5 / MD-9)", "SKU / Model catalogue", "Current and historical price lists"],
      typicalTimeline: "2–3 weeks",
      deliverables: ["Validated pricing dossier", "Model-wise price schedule"],
      tips: ["Keep detailed records of price history and distributor margins"]
    },
    {
      title: "Applicable Form Filing (Form V / Form III / VI)",
      description:
        "Prepare, validate, and electronically file required pricing declarations on IPDMS 2.0. This includes Form V submissions where applicable, product information sheets, and official notifications.",
      icon: UploadCloud,
      phase: "Submission",
      keyDocuments: ["Completed Form V / Form III / VI data", "Authorized digital signature", "Pricing calculations"],
      typicalTimeline: "1–2 weeks",
      deliverables: ["Official IPDMS filing acknowledgments", "Submitted Form copies"],
      tips: ["Form submissions must be consistent with CDSCO approved labels and packaging"]
    },
    {
      title: "Ongoing Monitoring & Compliance",
      description:
        "Monitor annual price adjustments under Para 20 DPCO 2013, track newly notified ceiling price gazettes, maintain historical pricing records, and manage responses to regulatory queries.",
      icon: ShieldCheck,
      phase: "Approval",
      keyDocuments: ["Annual price revision notices", "Audited price logs", "NPPA query responses"],
      typicalTimeline: "Ongoing annual support",
      deliverables: ["Compliance audit reports", "Timely query resolution"],
      tips: ["Always verify latest NPPA S.O. notifications before implementing annual MRP changes"]
    }
  ],
  importerSteps: [
    {
      title: "Importer Verification & Portfolio Review",
      description:
        "Review your CDSCO import licenses (Form MD-15 / MD-14), product portfolio, and foreign manufacturer authorizations to determine importer pricing compliance requirements under DPCO 2013.",
      icon: UserCheck,
      phase: "Assessment",
      keyDocuments: ["CDSCO import license (MD-15)", "Authorized Indian Agent agreement", "Device classification list"],
      typicalTimeline: "1–2 weeks",
      deliverables: ["Importer applicability report", "Pricing compliance checklist"],
      tips: ["Importers must account for landed cost, customs duties, and distribution margins"]
    },
    {
      title: "IPDMS 2.0 Importer Onboarding",
      description:
        "Complete official company registration as an authorized importer on IPDMS 2.0. We manage organization profile setup, statutory uploads, and authorized signatory credentials.",
      icon: Globe2,
      phase: "Preparation",
      keyDocuments: ["IEC certificate", "CDSCO import license", "Company PAN & GSTIN", "Authorisation letter"],
      typicalTimeline: "1–2 weeks",
      deliverables: ["IPDMS importer account", "Portal authorization certificate"],
      tips: ["Ensure company details match DGFT IEC records precisely"]
    },
    {
      title: "Landed Cost & MRP Dossier",
      description:
        "Structure landed cost breakdown, import pricing documentation, packaging artwork showing bilingual labeling and printed MRP, and trade margin calculations.",
      icon: FileText,
      phase: "Preparation",
      keyDocuments: ["Bill of entry samples", "Packaging artwork / label copies", "Import invoice samples"],
      typicalTimeline: "2–3 weeks",
      deliverables: ["Comprehensive pricing dossier", "Approved artwork records"],
      tips: ["Printed MRP on imported units must comply with Legal Metrology and DPCO requirements"]
    },
    {
      title: "Filing Declarations on IPDMS",
      description:
        "Prepare and submit requisite pricing forms and declarations on the IPDMS portal for all imported medical device models and packs.",
      icon: UploadCloud,
      phase: "Submission",
      keyDocuments: ["Form submissions", "CDSCO import license copy", "Statutory declarations"],
      typicalTimeline: "1–2 weeks",
      deliverables: ["Submission confirmation receipts", "Portal filing repository"],
      tips: ["Keep electronic copies of all submitted forms for audit readiness"]
    },
    {
      title: "Ceiling Price Tracking & Revision Audits",
      description:
        "Ensure imported products strictly adhere to applicable ceiling prices or annual 10% maximum MRP increase caps for non-scheduled devices, with ongoing assistance for notices.",
      icon: ShieldCheck,
      phase: "Approval",
      keyDocuments: ["Revised price notifications", "Annual MRP tracking sheets", "Regulatory correspondence"],
      typicalTimeline: "Ongoing annual support",
      deliverables: ["Annual compliance certification", "Regulatory notice defense"],
      tips: ["Overcharging even inadvertently can lead to recovery notices with interest"]
    }
  ]
},
{
  id: "ivd",
  title: "In-Vitro Diagnostics (CDSCO)",
  tagline: "Expert IVD compliance and regulatory support",
  description:
  "In-vitro diagnostic (IVD) devices are regulated under the Medical Devices Rules, 2017 (effective January 2018). CDSCO classifies IVDs into four risk-based categories (A through D) — from simple glucose strips to high-risk HIV/cancer test kits. We provide end-to-end IVD registration support for both domestic manufacturers and importers, covering classification, performance evaluation, technical dossier compilation, and CDSCO approval.",
  image: ivdImg,
  badge: "CDSCO",
  manufacturerSteps: [
  {
    title: "IVD Classification Analysis",
    description:
    "In-vitro diagnostic devices in India are classified under the Medical Devices Rules, 2017 into four risk-based categories following the GHTF framework. Class A covers low-risk IVDs such as specimen containers and general laboratory equipment, Class B includes self-testing blood glucose monitors, Class C covers clinical chemistry analysers, and Class D encompasses high-risk IVDs used for detecting HIV, HCV, HBV, and blood grouping. The classification determines whether your IVD requires a manufacturing license from the State Licensing Authority (Class A/B) or a Central License from CDSCO (Class C/D), as well as the applicable government fees and documentation requirements. Our experts evaluate your IVD's intended use, analyte, and risk profile to determine the correct classification and regulatory pathway.",
    icon: Layers,
    phase: "Assessment",
    keyDocuments: ["IVD intended use statement", "Risk analysis report", "Device description per MDR 2017"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Classification determination (A/B/C/D)", "Regulatory pathway recommendation"],
    tips: ["Class D includes HIV, HCV, blood grouping kits; Class A covers specimen containers and general lab equipment"]
  },
  {
    title: "Performance Evaluation Documentation",
    description:
    "Performance evaluation is a critical component of IVD registration, requiring comprehensive analytical and clinical evidence demonstrating your diagnostic product's sensitivity, specificity, accuracy, precision, and reproducibility. For Class C and D IVDs, CDSCO may require clinical performance evaluation conducted on Indian population samples to validate the product's effectiveness in the local clinical setting. The analytical performance data must cover the device's measuring range, limit of detection, linearity, and interference studies. Our team assists in designing performance evaluation protocols, compiling clinical evidence summaries, and preparing the complete performance evaluation report in the format required by CDSCO.",
    icon: Activity,
    phase: "Preparation",
    keyDocuments: ["Analytical performance data", "Clinical performance evaluation", "Sensitivity/specificity reports"],
    typicalTimeline: "4–8 weeks",
    deliverables: ["Performance evaluation report", "Clinical evidence summary"],
    tips: ["For Class C/D IVDs, clinical performance evaluation on Indian population samples may be required by CDSCO"]
  },
  {
    title: "Quality System Compliance",
    description:
    "ISO 13485 certification is mandatory for manufacturers of Class B, C, and D IVD devices, while Class A manufacturers may use a self-declaration of conformity. The quality management system must cover all aspects of IVD manufacturing including design control, purchasing controls, production and process controls, corrective and preventive actions, and management review. For IVD manufacturers, specific attention must be given to validation of analytical methods, reference material traceability, and stability testing protocols. Our team guides you through QMS implementation, internal audit preparation, and coordination with notified bodies for certification.",
    icon: ShieldCheck,
    phase: "Preparation",
    keyDocuments: ["ISO 13485 certificate", "QMS manual", "Process validation records"],
    typicalTimeline: "8–12 weeks (if not certified)",
    deliverables: ["ISO 13485 certificate", "QMS compliance report"],
    tips: ["Mandatory for Class B, C, and D IVDs; Class A may use self-declaration of conformity"]
  },
  {
    title: "Technical Dossier Compilation",
    description:
    "The technical dossier for IVD registration must follow the Common Submission Dossier Template (CSDT) format specified in Schedule 5 of MDR 2017. It includes the Device Master File with detailed manufacturing process descriptions, raw material specifications, quality control procedures, stability data demonstrating shelf life claims, and labeling artwork showing compliance with Chapter VI requirements. For notified IVD kits (HIV, HBV, HCV, blood grouping sera), additional batch testing and lot release data may be required. Our regulatory team compiles your complete technical dossier, ensures it meets the CSDT structure, and cross-references all supporting documents for consistency and completeness.",
    icon: FileText,
    phase: "Preparation",
    keyDocuments: ["Device Master File (DMF)", "Manufacturing process details", "Stability data", "Labeling artwork"],
    typicalTimeline: "4–6 weeks",
    deliverables: ["Complete technical dossier", "Common Submission Dossier Template (CSDT)"],
    tips: ["Follow the CSDT format specified in MDR 2017 Schedule 5 for organized submissions"]
  },
  {
    title: "CDSCO Submission and Tracking",
    description:
    "The submission pathway for IVD manufacturers depends on the device's risk classification. Class A and B IVDs require submission to the State Licensing Authority using Form MD-3 (application) for grant of license in Form MD-5. Class C and D IVDs must be submitted to CDSCO using Form MD-7 (application) for grant of license in Form MD-9. Government fees range from Rs. 5,000 for plant registration (Class A/B) to Rs. 50,000 (Class C/D), plus per-product fees. All applications are filed through the SUGAM online portal. Our team manages the complete submission process, monitors application progress, and coordinates responses to any regulatory queries.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["Form MD-7/MD-9 (Manufacturer)", "Form MD-3/MD-5 (Class A/B)", "Fee payment challan"],
    typicalTimeline: "2–4 weeks for filing",
    deliverables: ["Submission acknowledgement", "Application tracking number"],
    tips: ["Manufacturing license for Class A/B is granted by State Licensing Authority; Class C/D requires Central License from CDSCO"]
  }],

  importerSteps: [
  {
    title: "Import Authorization",
    description:
    "Overseas IVD manufacturers must appoint an Indian Authorized Agent (IAA) to submit import license applications on their behalf. The IAA must hold a valid wholesale drug license in Form 20B and 21B, enabling them to stock and sell the imported IVD products in India. Under recent regulatory amendments, multiple importers can now import the same IVD product from the same overseas manufacturer, provided each holds a separate import license. The appointment is formalized through a Power of Attorney and agent appointment deed. Our team facilitates the entire authorization process, from agent selection to execution of legal documents.",
    icon: UserCheck,
    phase: "Assessment",
    keyDocuments: ["Authorization letter from foreign manufacturer", "Indian Authorized Agent appointment deed", "Power of attorney"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["IAA agreement", "Authorization confirmation"],
    tips: ["The Indian Authorized Agent acts as the local license holder; multiple importers can now import the same IVD product"]
  },
  {
    title: "Product Registration",
    description:
    "Import registration of IVD kits requires submission of Form MD-14 to CDSCO for the grant of an import license in Form MD-15. The application dossier must include the Device Master File, performance evaluation data (analytical and clinical), Free Sale Certificate from the country of origin, and authorization from the foreign manufacturer. Each IVD product requires a separate application, and government fees range from USD 1,000 per plant plus USD 10 per product (Class A/B) to USD 3,000 per plant plus USD 500 per product (Class C/D). All foreign documents must be notarized and apostilled. Our team prepares and reviews the complete import license dossier to ensure compliance with CDSCO's requirements.",
    icon: FileText,
    phase: "Preparation",
    keyDocuments: ["Form MD-14 (Application)", "Free Sale Certificate from country of origin", "Device Master File", "Performance evaluation data"],
    typicalTimeline: "4–8 weeks",
    deliverables: ["Complete import license application dossier"],
    tips: ["Ensure FSC is notarized/apostilled; each IVD product requires a separate application"]
  },
  {
    title: "Label Compliance Review",
    description:
    "Product labeling for IVD devices imported into India must comply with Chapter VI of the Medical Devices Rules, 2017. Labels must include the IVD symbol, product name, intended use, storage conditions, lot/batch number, manufacturing and expiry dates, manufacturer name and address, and Indian Authorized Agent details — all printed in English. Instructions for Use (IFU) and package inserts must provide comprehensive details on specimen requirements, test procedure, result interpretation, limitations, and safety precautions. Our team conducts a thorough label compliance review, identifies gaps, and works with your design team to create fully compliant label artwork and documentation.",
    icon: Package,
    phase: "Review",
    keyDocuments: ["Product labels per MDR 2017 Chapter VI", "Instructions for use (IFU)", "Package insert"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["Compliant label artwork", "IFU document"],
    tips: ["Labels must include IVD symbol, storage conditions, lot number, expiry date, and manufacturer details in English"]
  },
  {
    title: "Distribution License Support",
    description:
    "Commercial distribution of imported IVD products in India requires a valid wholesale drug license. This license, issued by the State Licensing Authority in Form 20B/21B (for drugs and devices) or Form MD42 (for medical devices only), is a prerequisite for holding stock and selling IVD products to hospitals, laboratories, and distributors. The wholesale license application requires designated premises with adequate storage, a qualified pharmacist, and compliance with Good Storage Practices. Our team supports the entire distribution license process, from premises assessment and documentation to application filing and inspection coordination.",
    icon: Truck,
    phase: "Review",
    keyDocuments: ["Import license (Form MD-15)", "State wholesale license", "Distribution agreement"],
    typicalTimeline: "3–6 weeks",
    deliverables: ["Distribution license", "Wholesale license (20B/21B or MD42)"],
    tips: ["A wholesale drug license is often a prerequisite for commercial distribution of imported IVDs"]
  },
  {
    title: "Post-Import Compliance",
    description:
    "Importers of IVD devices have ongoing post-market obligations under MDR 2017, including adverse event monitoring, vigilance reporting, and submission of periodic safety update reports to CDSCO. Any serious adverse event or device malfunction must be reported within the prescribed timelines. Annual compliance filings are required to maintain the import license in good standing. Additionally, any changes to the device design, manufacturing process, or labeling after approval require prior notification to CDSCO. Our team establishes your post-market surveillance framework, trains your team on reporting requirements, and manages annual compliance submissions.",
    icon: RefreshCcw,
    phase: "Approval",
    keyDocuments: ["Vigilance reporting SOP", "Adverse event monitoring plan", "Annual compliance reports"],
    typicalTimeline: "Ongoing",
    deliverables: ["PMS framework", "Annual compliance filings"],
    tips: ["Submit periodic safety update reports to CDSCO; adverse events must be reported within prescribed timelines"]
  }]

},
{
  id: "cosmetics",
  title: "Cosmetics (CDSCO)",
  tagline: "Fast-track cosmetic product registration",
  description:
  "Cosmetic products imported into India must be registered with CDSCO under the Cosmetics Rules, 2020. The process involves submitting Form COS-1 for product and manufacturing site registration, leading to the grant of an Import Registration Certificate in Form COS-2. We handle the entire registration journey — from formulation compliance and safety assessment to SUGAM portal filing and label verification.",
  image: cosmeticsImg,
  badge: "CDSCO",
  manufacturerSteps: [
  {
    title: "Product Formulation Review",
    description:
    "Every cosmetic product sold in India — whether manufactured domestically or imported — must comply with ingredient specifications and safety standards prescribed in the Drugs and Cosmetics Act, 1940 and the Cosmetics Rules, 2020. The formulation review involves verifying that all ingredients are on the CDSCO permitted list, checking concentrations against maximum allowable limits, and ensuring compliance with BIS (Bureau of Indian Standards) specifications listed in the Ninth Schedule. Certain categories such as hair dyes, sunscreens, and products with active ingredients face additional scrutiny. Our experts conduct a thorough ingredient-by-ingredient review, flagging any restricted or prohibited substances and recommending compliant alternatives.",
    icon: Beaker,
    phase: "Assessment",
    keyDocuments: ["Ingredient list with concentrations and CAS numbers", "BIS specification compliance (Ninth Schedule)", "Non-animal testing undertaking"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["Formulation compliance report", "Ingredient safety assessment"],
    tips: ["Verify all ingredients are on the CDSCO permitted list; check BIS standards in the Ninth Schedule of Cosmetics Rules 2020"]
  },
  {
    title: "Safety Assessment Coordination",
    description:
    "The safety assessment is a mandatory requirement under the Cosmetics Rules, 2020, encompassing toxicological evaluation of all ingredients, heavy metal testing (lead, arsenic, mercury, cadmium), microbiological testing, and stability studies to validate shelf-life claims. Products must also include an undertaking for non-animal testing as mandated by Indian regulations. For certain product categories like perfumes, BIS compliance certificates may be additionally required. Our team coordinates testing with CDSCO-approved laboratories, compiles the complete safety dossier, and ensures all test reports meet the regulatory format and acceptance criteria.",
    icon: ShieldCheck,
    phase: "Assessment",
    keyDocuments: ["Toxicological assessment report", "Heavy metal testing report", "Stability data"],
    typicalTimeline: "3–6 weeks",
    deliverables: ["Complete safety dossier", "BIS compliance certificate for perfumes"],
    tips: ["Submit undertaking for non-animal testing and heavy metal testing as mandated by Cosmetics Rules 2020"]
  },
  {
    title: "Manufacturing License Assistance",
    description:
    "Cosmetics manufactured in India are regulated by the respective State Licensing Authority (SLA). A manufacturing license in Form COS-8 (or COS-8A for loan license manufacturing) must be obtained from the SLA of the state where the manufacturing facility is located. The application requires GMP certification, detailed site layout plans, equipment lists, quality control laboratory capabilities, and proof of qualified technical personnel. The facility must demonstrate adequate manufacturing practices including proper ventilation, contamination controls, and batch record maintenance. Our team assists in GMP audit preparation, application compilation, and coordination with the State Drug Authority through to license grant.",
    icon: FileText,
    phase: "Preparation",
    keyDocuments: ["GMP certificate", "Manufacturing license from State Drug Authority", "Site layout and facility documents"],
    typicalTimeline: "4–8 weeks",
    deliverables: ["Manufacturing license", "GMP compliance report"],
    tips: ["Required only for domestic manufacturing; imported cosmetics go through the COS-1/COS-2 route instead"]
  },
  {
    title: "Product Registration Filing",
    description:
    "Product registration is submitted online through the CDSCO SUGAM portal using Form COS-1. The application requires detailed product information including brand name, product description, category classification, complete formulation with ingredient concentrations and CAS numbers, safety assessment reports, and label artwork. Government fees are structured as USD 1,000 per product category, USD 500 per manufacturing site, and USD 50 per variant. The SUGAM portal assigns each application a unique reference number for tracking. Our team manages the complete online filing process, ensures all mandatory fields are accurately completed, and monitors the application through CDSCO's review process.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["Form COS-1 application", "Fee challan (USD 1,000 per category + USD 500 per site + USD 50 per variant)", "Product description and brand details"],
    typicalTimeline: "2–4 weeks for submission",
    deliverables: ["SUGAM portal submission receipt", "Application reference number"],
    tips: ["Fee is USD 1,000 per category, USD 500 per manufacturing site, and USD 50 per variant; submit via CDSCO SUGAM portal"]
  },
  {
    title: "Label Compliance Verification",
    description:
    "Cosmetic product labels in India must comply with dual regulatory requirements — the labeling provisions under Chapter VI of the Cosmetics Rules, 2020 and the mandatory declarations under the Legal Metrology (Packaged Commodities) Rules, 2011. Required label elements include product name, ingredient declaration in descending order, manufacturing/expiry dates, batch number, net content, MRP (inclusive of all taxes), manufacturer/importer name and address, and country of origin. Any discrepancy in spelling, address details, or product names between the label and registration documents can result in rejection. Our team reviews your label artwork against both regulatory frameworks, ensuring full compliance before submission.",
    icon: Package,
    phase: "Review",
    keyDocuments: ["Label artwork per Chapter VI of Cosmetics Rules 2020", "Pack inserts", "Ingredient declaration"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Compliant label approval", "Final packaging artwork"],
    tips: ["Ensure product names, manufacturer/importer details, and addresses are consistent across all documents; any spelling discrepancy can cause rejection"]
  }],

  importerSteps: [
  {
    title: "Import Permit Acquisition",
    description:
    "Importing cosmetics into India requires prior registration with CDSCO, which has been mandatory since 1 April 2013 under Rule 21 of the Drugs and Cosmetics Rules, 1945. The importer must first obtain formal authorization from the overseas manufacturer, authenticated by the Indian Embassy, a Magistrate of First Class, or via apostille in the country of origin as prescribed in the First Schedule of the Cosmetics Rules, 2020. This authorization establishes the legal relationship between the foreign manufacturer and the Indian importer, granting permission to register and import the products. Our team guides importers through the authentication process, ensuring all documentation meets CDSCO's strict verification requirements.",
    icon: UserCheck,
    phase: "Assessment",
    keyDocuments: ["Authorization from manufacturer (First Schedule, Cosmetics Rules 2020)", "Apostilled/notarized foreign documents"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["Authenticated authorization letter", "Importer eligibility confirmation"],
    tips: ["Authorization must be authenticated by Indian Embassy or Magistrate of First Class or via apostille in the country of origin"]
  },
  {
    title: "Foreign Manufacturer Documentation",
    description:
    "The import registration dossier requires comprehensive documentation from the foreign manufacturer, including a valid manufacturing license from the country of origin, a Free Sale Certificate (FSC) issued by the National Regulatory Authority, and a GMP certificate or equivalent quality system documentation. If the FSC is issued by a chamber of commerce rather than a national regulatory authority, it requires additional attestation from the Indian Embassy or apostillation. All foreign documents must be current, properly notarized, and translated into English if originally in another language. Our team works directly with foreign manufacturers to compile, verify, and authenticate the complete manufacturer dossier.",
    icon: FileText,
    phase: "Preparation",
    keyDocuments: ["Manufacturing license from country of origin", "Free Sale Certificate (FSC) from National Regulatory Authority", "GMP certificate"],
    typicalTimeline: "3–6 weeks",
    deliverables: ["Complete manufacturer dossier", "Authenticated FSC"],
    tips: ["If FSC is from a chamber of commerce (not regulatory authority), it requires additional attestation from Indian Embassy or apostillation"]
  },
  {
    title: "Product Testing Coordination",
    description:
    "For certain cosmetic categories, CDSCO may require product testing at approved Indian laboratories to verify compliance with BIS specifications, heavy metal limits, and microbiological standards. The testing covers parameters such as pH, viscosity, specific gravity, heavy metal content (lead, arsenic, mercury, cadmium), and microbiological contamination limits. Test reports must be from laboratories recognized by CDSCO or accredited by NABL (National Accreditation Board for Testing and Calibration Laboratories). Our team identifies the applicable testing requirements for your product category, coordinates sample submission to approved laboratories, and ensures test reports are in the format accepted by CDSCO.",
    icon: Beaker,
    phase: "Preparation",
    keyDocuments: ["Product test reports from approved Indian labs", "BIS compliance reports", "Stability data"],
    typicalTimeline: "4–6 weeks",
    deliverables: ["Test certificates", "Compliance verification report"],
    tips: ["Testing must be conducted at CDSCO-approved laboratories in India for certain categories"]
  },
  {
    title: "Registration with CDSCO",
    description:
    "The import registration application is submitted online through the CDSCO SUGAM portal using Form COS-1, along with all supporting documents per the Second Schedule of the Cosmetics Rules, 2020. Upon successful review and approval, CDSCO issues the Import Registration Certificate in Form COS-2, which authorizes the import of the registered cosmetic products into India. The typical timeline for COS-2 approval is approximately 90 days from complete submission. Imported cosmetics are classified under roughly 80 product categories, with government fees of USD 2,000 per category and USD 50 per variant. Our team manages the complete SUGAM filing, tracks review progress, and responds to any CDSCO queries.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["Form COS-1 (complete)", "Fee payment receipt", "All supporting documents per Second Schedule"],
    typicalTimeline: "2–4 weeks for submission",
    deliverables: ["Form COS-2 (Import Registration Certificate)", "SUGAM portal approval"],
    tips: ["Timeline to receive COS-2 approval is approximately 90 days from complete submission"]
  },
  {
    title: "Customs Clearance Support",
    description:
    "Once the COS-2 Import Registration Certificate is obtained, cosmetic products can be imported through any designated port in India. Each shipment requires proper customs documentation including the valid COS-2 certificate, commercial invoice, packing list, bill of lading, and certificate of origin. The COS-2 is valid for five years from the date of issue and covers all variants registered under the approved categories. Customs authorities verify the COS-2 validity and product details against the shipment before granting port release. Our team provides ongoing customs clearance support, ensuring documentation is complete for each consignment and resolving any port-level queries or holds.",
    icon: Truck,
    phase: "Approval",
    keyDocuments: ["Valid Form COS-2", "Bill of entry", "Import documentation"],
    typicalTimeline: "1–2 weeks per shipment",
    deliverables: ["Customs clearance certificate", "Port release order"],
    tips: ["With a valid COS-2, cosmetics can be imported through any designated port in India; certificate is valid for 5 years"]
  }]

},
{
  id: "lmpc",
  title: "Legal Metrology (LMPC)",
  tagline: "LMPC compliance made simple",
  description:
  "The Legal Metrology Department, functioning under the Department of Consumer Affairs, regulates the manufacturing and import of weighing/measuring instruments and packaged commodities under the Legal Metrology Act, 2009 and Rules 2011, 2017, 2020, 2021, 2022. We provide full-spectrum services including registration, licensing, product model approval, stamping, verification, and label compliance.",
  image: lmpcImg,
  badge: "Central-Level",
  manufacturerSteps: [
  {
    title: "Packaging Compliance Audit",
    description:
    "The Legal Metrology (Packaged Commodities) Rules, 2011 define a pre-packaged commodity as any product placed in a package of any nature, sealed or unsealed, with a pre-determined quantity, without the purchaser being present. Any manufacturer, packer, or marketer of such pre-packaged commodities must ensure their packaging carries all mandatory declarations prescribed under these rules. Compliance requirements are enforced both at the central level by the Directorate of Legal Metrology and at the state level by respective State Legal Metrology Departments. Our team conducts a comprehensive audit of your current packaging against both central and state-specific requirements, identifying gaps and providing a detailed remediation plan.",
    icon: Package,
    phase: "Assessment",
    keyDocuments: ["Current packaging samples", "Legal Metrology (Packaged Commodities) Rules 2011", "Product specifications"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Compliance gap report", "Remediation checklist"],
    tips: ["Review against both central and state-level requirements as state departments regulate affairs of their respective jurisdictions"]
  },
  {
    title: "Label Design Review",
    description:
    "Labels on packaged commodities must carry mandatory declarations including the product name, net quantity in standard metric units, Maximum Retail Price (MRP) inclusive of all taxes, month and year of manufacture or packing, name and address of the manufacturer or packer or importer, country of origin (for imported goods), consumer care details, and common or generic name of the commodity. For products that also fall under other regulations (such as cosmetics under CDSCO or food under FSSAI), the labels must satisfy the requirements of all applicable laws simultaneously. Our team reviews your label artwork against the complete checklist of mandatory declarations, provides mark-up corrections, and ensures compliance across all applicable regulatory frameworks.",
    icon: FileText,
    phase: "Preparation",
    keyDocuments: ["Label artwork drafts", "MRP declaration", "Net quantity details", "Manufacturer/importer address", "Country of origin"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["Compliant label design", "Declaration verification report"],
    tips: ["Labels must include: product name, net quantity, MRP (inclusive of all taxes), manufacturer/packer details, month/year of manufacture, and consumer care details"]
  },
  {
    title: "LMPC Registration Filing",
    description:
    "Registration under the Legal Metrology Act varies depending on the stakeholder type — manufacturers require a Manufacturing License (Form LM-1), importers need an Importer Registration, dealers require a Dealer License, and repairers need a Repair License under the Legal Metrology (General) Rules, 2011. Each state has its own Legal Metrology portal and application process, and requirements may vary by state. The application requires submission of company registration documents, proof of premises, trade license, and prescribed government fees. Our team identifies the applicable registration type for your business, prepares the complete application dossier, and files it with the concerned State Legal Metrology Department.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["Application Form LM-1 (Manufacturer License)", "Company registration documents", "Proof of premises (lease/ownership)", "Trade license"],
    typicalTimeline: "2–4 weeks",
    deliverables: ["Application acknowledgement", "Registration reference number"],
    tips: ["Each state has its own Legal Metrology portal; registration requirements may vary by state"]
  },
  {
    title: "Declaration Verification",
    description:
    "All packaged commodities must carry accurate net quantity declarations that comply with the prescribed tolerances and measurement standards. For manufacturers or importers of weighing and measuring instruments, model or pattern approval from the Central Legal Metrology Department is required under the Legal Metrology (Approval of Models) Rules, 2011, ensuring compliance with OIML (International Organization of Legal Metrology) standards. The verification process includes submission of instrument samples to designated testing laboratories, issuance of satisfactory test reports, and final scrutiny by the Central Legal Metrology Department. Our team coordinates the entire declaration verification and model approval process, from sample submission to certificate issuance.",
    icon: Scale,
    phase: "Review",
    keyDocuments: ["Net quantity declarations", "MRP compliance documents", "Consumer information labels", "OIML standard compliance (for instruments)"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["Verified declaration certificate", "Compliance confirmation"],
    tips: ["For weighing/measuring instruments, ensure model/pattern approval complies with OIML (International Organization of Legal Metrology) standards"]
  },
  {
    title: "Ongoing Compliance Monitoring",
    description:
    "Legal Metrology licenses and registrations require ongoing compliance including timely renewal (filed at least 3 months before expiry), periodic stamping and verification of approved instruments by the State Legal Metrology Office, and maintenance of accurate records of all transactions involving packaged commodities or measuring instruments. Non-compliance can result in penalties, seizure of non-conforming goods, and prosecution under the Legal Metrology Act. State-level enforcement officers conduct periodic inspections to verify continued compliance with labeling, quantity declarations, and measurement accuracy. Our team provides ongoing compliance monitoring, proactive renewal management, and support during inspections or audits.",
    icon: RefreshCcw,
    phase: "Approval",
    keyDocuments: ["License renewal application (Form LM-2)", "Updated compliance records", "Stamping and verification certificates"],
    typicalTimeline: "Ongoing; renew 3 months before expiry",
    deliverables: ["Renewed license (Form LM-3)", "Compliance audit report"],
    tips: ["License renewal must be filed at least 3 months before expiry; stamping and verification by State Legal Metrology Office is mandatory for all approved instruments"]
  }],

  importerSteps: [
  {
    title: "Import Compliance Assessment",
    description:
    "Any person or firm importing pre-packaged commodities or weighing and measuring instruments into India must register under Rule 19 of the Legal Metrology (General) Rules, 2011 and ensure all imported products comply with Indian labeling and measurement standards. This includes verifying that foreign product packaging carries all mandatory Indian declarations, quantities are expressed in standard metric units, and MRP is displayed in Indian Rupees inclusive of all applicable duties and taxes. Our team conducts a comprehensive assessment of your imported product packaging, identifies all non-compliant elements, and provides a detailed list of required modifications for Indian market entry.",
    icon: Target,
    phase: "Assessment",
    keyDocuments: ["Foreign product packaging details", "Indian labeling requirements checklist", "Bill of entry samples"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Compliance assessment report", "Required modifications list"],
    tips: ["Importer registration under Rule 19 of Legal Metrology (General) Rules 2011 requires a valid Trade License"]
  },
  {
    title: "Package Modification Guidance",
    description:
    "Imported goods often require significant packaging modifications to comply with Indian Legal Metrology requirements. All mandatory declarations must be in both Hindi and English as specified by the rules. For imported products, sticker labels are acceptable with prior approval from the Controller of Legal Metrology, but the stickers must be affixed before the goods enter the retail market. The modifications must include the importer's name and complete address, country of origin, MRP in Indian Rupees, net quantity in metric units, and other mandatory declarations. Our team provides detailed packaging modification specifications, creates compliant label templates, and coordinates with your packaging suppliers to ensure seamless implementation.",
    icon: Package,
    phase: "Preparation",
    keyDocuments: ["Current foreign packaging", "Required Indian declarations", "Translation documents"],
    typicalTimeline: "2–4 weeks",
    deliverables: ["Modified packaging specifications", "Compliant label templates"],
    tips: ["All declarations must be in Hindi and English as specified; sticker labels are acceptable for imported goods with prior approval"]
  },
  {
    title: "Registration for Importers",
    description:
    "Importer registration under the Legal Metrology Act requires submission of an application to the concerned State Legal Metrology Department along with supporting documents including address proof of the business premises (lease agreement, sales deed, electricity bill, NOC from property owner), identity proof of all directors or partners, valid trade license, and prescribed government fees. Each state has its own registration portal and processing timeline. The registration certificate is issued after verification of all submitted documents and may include conditions specific to the product categories being imported. Our team prepares the complete registration application, manages portal submissions, and coordinates with state authorities through to certificate issuance.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["Importer registration application", "Address proof (lease agreement, electricity bill, NOC from property owner)", "ID proof of directors"],
    typicalTimeline: "2–4 weeks",
    deliverables: ["Importer registration certificate", "Portal login credentials"],
    tips: ["Address proof documents include lease agreement, sales deed, electricity bill, and NOC from property owner"]
  },
  {
    title: "Custom Label Requirements",
    description:
    "Imported packaged goods must prominently display specific information mandated for cross-border products: the country of origin, importer's full name and address in India, MRP in Indian Rupees inclusive of all duties and taxes, net quantity in standard metric units, and all other mandatory declarations applicable to the product category. The information must be printed or affixed on the product in a way that is easily readable and not easily removable. For goods imported in bulk and repackaged in India, the repacker must also register as a packer under the Packaged Commodities Rules. Our team ensures your import labels meet all customs and retail requirements, providing customs-ready documentation that facilitates smooth port clearance.",
    icon: FileText,
    phase: "Review",
    keyDocuments: ["Country of origin declaration", "Importer name and address", "MRP in Indian Rupees", "Net quantity in metric units"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Final approved import labels", "Customs-ready documentation"],
    tips: ["Imported packaged goods must display the importer's name, address, and country of origin prominently; MRP must include all duties and taxes"]
  },
  {
    title: "Import Documentation",
    description:
    "Maintaining comprehensive import documentation is essential for ongoing compliance with Legal Metrology requirements. This includes keeping copies of registration certificates, import invoices, bills of entry, label approval records, and correspondence with the Legal Metrology Department. Wholesalers and distributors do not require separate Packer registration, but manufacturers, packers, importers, and marketers of pre-packaged commodities must register as applicable. State-level enforcement officers may inspect imported goods at any point in the distribution chain to verify compliance. Our team helps establish a document management system, ensures all import records are maintained properly, and provides support during any compliance inspections or audits.",
    icon: Globe2,
    phase: "Approval",
    keyDocuments: ["Registration certificate copy", "Import invoices", "Bill of entry", "Packer registration (if applicable)"],
    typicalTimeline: "Ongoing",
    deliverables: ["Complete import compliance file", "Periodic audit reports"],
    tips: ["Wholesalers/distributors do not require Packer registration, but manufacturers, packers, importers, and marketers of pre-packaged commodities do"]
  }]

},
{
  id: "iec",
  title: "Import Export Code (IEC)",
  tagline: "IEC registration and comprehensive support",
  description:
  "The Import Export Code (IEC) is a 10-digit registration issued by the Directorate General of Foreign Trade (DGFT) — mandatory for any business engaged in importing or exporting goods from India. The IEC is valid for a lifetime with no renewal requirement, though annual updates on the DGFT portal are required. We provide end-to-end IEC registration, modification, and compliance support.",
  image: iecImg,
  badge: "Lifetime Valid",
  manufacturerSteps: [
  {
    title: "IEC Application Preparation",
    description:
    "The Import Export Code (IEC) is a mandatory 10-digit registration issued by the Directorate General of Foreign Trade (DGFT), required for any business entity engaged in importing or exporting goods from India. All types of business entities are eligible — proprietorships, partnerships, LLPs, private limited companies, public limited companies, and even trusts and societies engaged in trade. The application requires a valid PAN card linked to the business entity, Aadhaar of the applicant, GST registration or Certificate of Incorporation (CIN), and an active bank account in the entity's name. Our team verifies your eligibility, checks all prerequisites are in order, and prepares a comprehensive readiness checklist before proceeding with the application.",
    icon: Target,
    phase: "Assessment",
    keyDocuments: ["PAN card of entity", "Aadhaar of applicant", "Business registration certificate (GST/CIN)", "Bank account details"],
    typicalTimeline: "1 week",
    deliverables: ["Eligibility confirmation", "Application readiness checklist"],
    tips: ["Proprietorships, partnerships, LLPs, and companies are all eligible; ensure PAN is linked to the business entity"]
  },
  {
    title: "Documentation Compilation",
    description:
    "The IEC application documentation must include a bank certificate or cancelled cheque confirming the entity's bank account details, address proof of the principal business premises, identity and address proof of all directors or partners, passport-size photographs, and a Digital Signature Certificate (DSC) for authorized online signing. The bank certificate must be on the bank's official letterhead clearly showing the account number, IFSC code, and account holder's name matching the PAN card. For companies and LLPs, a board resolution authorizing the signatory may also be required. Our team compiles and verifies all documents against DGFT's checklist, ensuring completeness before submission.",
    icon: FileText,
    phase: "Preparation",
    keyDocuments: ["Bank certificate or cancelled cheque", "Address proof of business premises", "ID and address proof of all directors/partners", "Digital signature certificate"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Complete document set", "Digitally signed authorization"],
    tips: ["Bank certificate must be on the bank's letterhead with account details; passport-size photographs of the applicant are also required"]
  },
  {
    title: "DGFT Portal Filing",
    description:
    "The IEC application is filed online through the DGFT portal (dgft.gov.in) using the prescribed Aayaat Niryaat Form (ANF) 2A. The submission must be digitally signed using the applicant's DSC, and the government fee of INR 500 is payable online through the portal. The application includes details of the business entity, authorized signatories, bank accounts, and the principal place of business. Incomplete applications or those with discrepancies between submitted documents are likely to be returned or delayed. Our team manages the complete online filing process, ensures all fields are accurately populated, digitally signs the application, and tracks the status through to approval.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["Online application form (ANF 2A)", "DSC-signed submission", "Payment receipt (INR 500 government fee)"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["DGFT portal submission confirmation", "Application reference number"],
    tips: ["Register on the DGFT portal (dgft.gov.in); the application fee is INR 500 payable online"]
  },
  {
    title: "Certificate Obtainment",
    description:
    "Upon successful processing of the application, DGFT allots the 10-digit IEC code typically within 3 to 7 working days. The IEC is valid for a lifetime and does not require renewal, making it a one-time registration. However, the DGFT requires all IEC holders to update their profile annually on the portal, confirming or modifying business details such as addresses, directors, and bank accounts. Failure to file the annual update by June 30 each year can result in deactivation of the IEC. Our team ensures you receive your IEC certificate promptly and sets up reminders for the mandatory annual update process.",
    icon: Globe2,
    phase: "Approval",
    keyDocuments: ["IEC certificate (10-digit code)", "DGFT approval letter"],
    typicalTimeline: "3–7 working days after filing",
    deliverables: ["IEC certificate (lifetime validity)", "DGFT registration confirmation"],
    tips: ["IEC is allotted within 3–7 working days; no renewal needed but annual update of details on DGFT portal is mandatory"]
  },
  {
    title: "Modification Support",
    description:
    "Post-registration modifications to the IEC are required whenever there are changes to the business entity's details — such as a change of address, addition or removal of directors or partners, change of bank account, change in business constitution (e.g., proprietorship to partnership), or any other amendments to the registered information. Modifications are filed through the DGFT portal using an amendment application, supported by relevant documentation such as board resolutions, updated address proofs, or partnership deed amendments. Our team handles all IEC modifications, ensuring the updated certificate accurately reflects your current business details and remains in good standing with DGFT.",
    icon: RefreshCcw,
    phase: "Approval",
    keyDocuments: ["Amendment application", "Updated business documents", "Board resolution (for company changes)"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Updated IEC certificate", "DGFT amendment confirmation"],
    tips: ["Modifications needed for: change of address, addition/removal of directors/partners, change of bank details, or change of business constitution"]
  }],

  importerSteps: [
  {
    title: "IEC Code Registration",
    description:
    "For any business looking to import goods into India, obtaining an IEC is the first and most fundamental regulatory requirement. Without a valid IEC, Indian customs will not process any import consignment, and banks will not handle foreign exchange transactions related to trade. The IEC code is linked to your PAN and is used across all import-related documentation including bills of entry, customs declarations, and foreign exchange remittances. Our team initiates your IEC registration process with a thorough eligibility assessment, mapping out the complete registration roadmap tailored to your business structure and import plans.",
    icon: Target,
    phase: "Assessment",
    keyDocuments: ["PAN card", "Business registration", "Aadhaar", "Bank account details"],
    typicalTimeline: "1 week",
    deliverables: ["IEC eligibility assessment", "Registration roadmap"],
    tips: ["IEC is mandatory before clearing any import consignment through Indian customs"]
  },
  {
    title: "Import Eligibility Verification",
    description:
    "Before importing any product into India, it is essential to verify the product's classification under the Indian Trade Classification (Harmonized System) and check whether the product falls under the 'Free,' 'Restricted,' or 'Prohibited' category as per DGFT's ITC (HS) schedule. Restricted items require an additional import license or authorization from DGFT, while prohibited items cannot be imported regardless of having a valid IEC. The correct HS code classification also determines the applicable customs duty rates, any anti-dumping duties, and product-specific regulatory requirements. Our team conducts a comprehensive import eligibility verification, assigns the correct HS codes, and advises on any additional licenses or permits required.",
    icon: ShieldCheck,
    phase: "Preparation",
    keyDocuments: ["Product classification (HS code)", "DGFT ITC (HS) classification", "Restricted/prohibited item check"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Import eligibility report", "HS code classification"],
    tips: ["Restricted items require additional DGFT approval; prohibited items cannot be imported regardless of IEC"]
  },
  {
    title: "Customs Documentation",
    description:
    "Importing goods into India requires a comprehensive set of customs documentation that must be filed electronically through ICEGATE (Indian Customs Electronic Gateway). The primary documents include the bill of entry, commercial invoice, packing list, bill of lading or airway bill, certificate of origin, insurance certificate, and the IEC reference. The bill of entry must accurately declare the product description, quantity, value, HS code classification, and applicable duty rates. Any discrepancies between the declared and actual goods can result in customs holds, penalties, or confiscation. Our team prepares your complete customs documentation package, ensuring accuracy and compliance with all declaration requirements.",
    icon: FileText,
    phase: "Submission",
    keyDocuments: ["Bill of entry", "Commercial invoice", "Packing list", "Certificate of origin", "IEC reference"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["Complete customs documentation package", "Import compliance checklist"],
    tips: ["Link IEC to ICEGATE (Indian Customs Electronic Gateway) for smooth electronic filing of bills of entry"]
  },
  {
    title: "License Activation",
    description:
    "After obtaining the IEC, importers must register on ICEGATE to enable electronic filing of import declarations and customs clearances. This involves creating an ICEGATE user account, linking the IEC to the portal, appointing a licensed customs broker who will handle day-to-day clearance operations at the port, and setting up bank authorization for duty payment through electronic debit. First-time importers should also familiarize themselves with the Authorized Economic Operator (AEO) program, which offers faster clearances and reduced examination for trusted traders. Our team manages your ICEGATE registration, customs broker appointment, and initial license activation to ensure your import operations begin smoothly.",
    icon: Globe2,
    phase: "Review",
    keyDocuments: ["ICEGATE registration", "Customs broker appointment", "Bank authorization for duty payment"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Active IEC with customs", "ICEGATE registration confirmation"],
    tips: ["First-time importers should register on ICEGATE and appoint a licensed customs broker for clearance"]
  },
  {
    title: "Annual Compliance",
    description:
    "All IEC holders are required to file an annual update on the DGFT portal by June 30 each year, regardless of whether any import or export activity was conducted during the year. The annual update involves confirming or updating business details including entity name, address, constitution, partners or directors, bank accounts, and Aadhaar linkages. Failure to file the annual update results in deactivation of the IEC, which blocks all import and export operations until the update is completed and the IEC is reactivated. If there are any pending export obligations from import licenses or authorizations, these must also be monitored and discharged within the prescribed timelines. Our team provides annual compliance management, ensuring your IEC remains active and all obligations are met on time.",
    icon: RefreshCcw,
    phase: "Approval",
    keyDocuments: ["Annual update on DGFT portal", "Updated KYC documents", "Export obligation discharge (if applicable)"],
    typicalTimeline: "Annual; update by June 30 each year",
    deliverables: ["Updated IEC status", "Compliance certificate"],
    tips: ["Failure to file annual update may result in IEC deactivation; update is mandatory even if no import/export activity occurred"]
  }]

},
{
  id: "epr",
  title: "Extended Producer Responsibility (EPR)",
  tagline: "EPR compliance and sustainability solutions",
  description:
  "The Central Pollution Control Board (CPCB) mandates Extended Producer Responsibility (EPR) authorization for all producers, importers, and brand owners dealing in plastic packaging, e-waste, or batteries. EPR authorization ensures responsible end-of-life management of products and packaging. We handle the complete EPR registration process — from applicability assessment and CPCB portal filing to target compliance tracking and annual return submissions.",
  image: eprImg,
  badge: "CPCB",
  manufacturerSteps: [
  {
    title: "EPR Assessment and Planning",
    description:
    "Extended Producer Responsibility (EPR) is an environmental policy approach that shifts the responsibility for end-of-life management of products and packaging from municipalities to the producers, importers, and brand owners (PIBOs) who introduce these materials into the market. In India, EPR is mandated by the Central Pollution Control Board (CPCB) under three separate regulatory frameworks — the Plastic Waste Management Rules for plastic packaging, the E-Waste Management Rules for electrical and electronic equipment, and the Battery Waste Management Rules for all battery types. Each framework has distinct registration forms, compliance targets, and reporting requirements. Our team evaluates your product portfolio and packaging materials to determine which EPR categories apply, classifies waste types, and develops a comprehensive compliance roadmap.",
    icon: Leaf,
    phase: "Assessment",
    keyDocuments: ["Product/packaging details", "Plastic waste category identification", "Business registration (PAN, GST, CIN)"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["EPR applicability report", "Waste category classification"],
    tips: ["EPR applies to three categories: plastic packaging waste, e-waste (electrical/electronic equipment), and battery waste — each has different rules and forms"]
  },
  {
    title: "Registration with CPCB",
    description:
    "EPR registration is submitted through the CPCB online portal using category-specific application forms — Form I for plastic packaging waste, Form V for e-waste, and Form VI/VII for battery waste. The application requires detailed information about the applicant entity, product types and quantities placed on the market, proposed waste collection and channelization mechanisms, agreements with registered recyclers and dismantlers, and an Environmental Protection Plan outlining how collection and recycling targets will be met. For importers, a valid IEC certificate must also be submitted. Our team prepares the complete application dossier, ensures all mandatory fields are accurately populated, and manages the submission and follow-up process with CPCB.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["EPR application form (Form I/V/VI/VII depending on category)", "Environmental Protection Plan", "Proof of legal entity", "IEC certificate (for importers)"],
    typicalTimeline: "4–6 weeks",
    deliverables: ["CPCB application acknowledgement", "Application reference number"],
    tips: ["Submit through the CPCB online portal; plastic waste EPR uses Form I, e-waste uses Form V, battery waste uses Form VI/VII"]
  },
  {
    title: "Annual Return Filing",
    description:
    "All PIBOs with EPR authorization must submit annual returns to CPCB before the prescribed deadline, reporting on the quantity of products or packaging placed on the market, waste collected, and waste recycled or processed during the reporting period. The annual return must be supported by documentary evidence including waste processing certificates from registered recyclers, collection data from waste collection agencies, and financial records of EPR compliance expenditure. Late or non-filing of annual returns can result in penalties, suspension of EPR authorization, and regulatory action under the applicable waste management rules. Our team compiles your annual return data, coordinates with recyclers for processing certificates, and files the completed returns with CPCB on time.",
    icon: FileText,
    phase: "Submission",
    keyDocuments: ["Annual return form", "Collection and recycling data", "Waste processing certificates", "Producer/brand owner details"],
    typicalTimeline: "2–4 weeks per filing",
    deliverables: ["Filed annual return", "CPCB acknowledgement"],
    tips: ["Annual returns must be submitted before the CPCB deadline to avoid penalties; PIBOs (Producers, Importers, Brand Owners) face action for late filing"]
  },
  {
    title: "Target Compliance Tracking",
    description:
    "CPCB sets year-on-year collection and recycling targets for each EPR authorization holder, with targets increasing progressively to achieve higher rates of waste recovery and recycling. For plastic packaging, targets are based on the quantity of plastic introduced into the market. For e-waste, targets are set for collection and channelization to authorized recyclers. Falling short of targets can result in financial penalties, requirement to purchase EPR certificates from the market, or suspension of authorization. Maintaining agreements with CPCB/SPCB-registered recyclers and waste processors is essential for meeting these targets. Our team establishes a target tracking dashboard, monitors compliance progress throughout the year, and proactively addresses any shortfalls.",
    icon: Target,
    phase: "Review",
    keyDocuments: ["Collection target data", "Recycling/processing certificates", "Waste management agreements with recyclers"],
    typicalTimeline: "Ongoing",
    deliverables: ["Target achievement report", "Compliance dashboard"],
    tips: ["Collection and recycling targets increase year-on-year as per CPCB guidelines; maintain agreements with registered recyclers and waste processors"]
  },
  {
    title: "Certificate Management",
    description:
    "EPR authorization validity varies by waste category — plastic waste EPR authorization is valid for a lifetime with no renewal requirement, while e-waste and battery waste EPR certificates are valid for five years and must be renewed before expiry. Any changes to business details, product categories, or waste management plans after authorization require prior intimation to CPCB. Additionally, the EPR authorization certificate must be produced upon request during customs clearance of imported goods or during SPCB inspections. Our team maintains your EPR certificate records, tracks validity periods, initiates timely renewals for e-waste and battery categories, and ensures your authorization remains current and compliant.",
    icon: Globe2,
    phase: "Approval",
    keyDocuments: ["EPR authorization certificate", "Renewal application (for e-waste and battery categories)", "Updated compliance records"],
    typicalTimeline: "Plastic: lifetime; E-waste/Battery: renew every 5 years",
    deliverables: ["EPR authorization certificate", "Renewal confirmation"],
    tips: ["Plastic waste EPR is lifetime valid; e-waste and battery EPR certificates are valid for 5 years and must be renewed before expiry"]
  }],

  importerSteps: [
  {
    title: "Import EPR Obligations",
    description:
    "Any importer bringing products with plastic packaging, electronic or electrical equipment, or batteries into India is required to obtain EPR authorization from CPCB before or concurrent with their import operations. The EPR obligation is triggered by the act of introducing waste-generating materials into the Indian market, regardless of whether the importer is the brand owner or a distributor. The assessment involves analyzing the bill of materials for each imported product, identifying all components that fall under EPR-regulated waste categories, and quantifying the annual volumes placed on the market. Our team conducts a thorough analysis of your import portfolio to determine all applicable EPR obligations and waste category classifications.",
    icon: Leaf,
    phase: "Assessment",
    keyDocuments: ["Import product details", "Packaging material analysis", "IEC certificate", "Bill of materials"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["EPR obligation assessment", "Applicable waste categories"],
    tips: ["Importers of any product with plastic packaging, or of electronic/electrical equipment or batteries, are required to obtain EPR authorization"]
  },
  {
    title: "Producer Responsibility Setup",
    description:
    "Meeting EPR collection and recycling targets requires establishing a robust waste management infrastructure. Importers can either set up their own collection and channelization mechanisms or engage a registered Producer Responsibility Organization (PRO) to manage compliance on their behalf. PROs are entities registered with CPCB that aggregate the EPR obligations of multiple producers and manage waste collection, segregation, and channelization to authorized recyclers at scale. The choice between self-management and PRO engagement depends on the volume of materials, geographic distribution, and cost considerations. Our team advises on the optimal compliance approach, facilitates PRO agreements, and ensures the collection mechanism plan meets CPCB's requirements.",
    icon: UserCheck,
    phase: "Preparation",
    keyDocuments: ["Authorized person details (Aadhaar, PAN)", "Company documents (CIN, GST)", "Partnership deed (if applicable)"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["PRO (Producer Responsibility Organization) agreement", "Collection mechanism plan"],
    tips: ["Consider engaging a registered PRO to manage collection and channelization of waste on your behalf"]
  },
  {
    title: "Waste Management Planning",
    description:
    "A comprehensive waste management plan is a mandatory component of the EPR application, demonstrating how the importer will ensure responsible end-of-life management of the waste generated from their products and packaging. The plan must include details of waste collection mechanisms across relevant geographies, agreements with CPCB or SPCB-registered recyclers and dismantlers, processing targets aligned with CPCB guidelines, and a timeline for achieving full compliance. Having pre-existing agreements with registered recyclers significantly strengthens the application. Our team develops your complete waste management plan, identifies and onboards suitable recycler partners, and structures the documentation to demonstrate a credible and achievable compliance pathway.",
    icon: RefreshCcw,
    phase: "Preparation",
    keyDocuments: ["Waste collection plan", "Recycler/dismantler agreements", "Processing targets", "Environmental impact assessment"],
    typicalTimeline: "2–4 weeks",
    deliverables: ["Comprehensive waste management plan", "Recycler network documentation"],
    tips: ["Establish agreements with CPCB/SPCB-registered recyclers before applying; this strengthens your application"]
  },
  {
    title: "CPCB Compliance",
    description:
    "The CPCB application for EPR authorization requires submission of the completed application form with all supporting documents including company registration (CIN, GST, PAN), authorized person details (Aadhaar, PAN), waste management plan, recycler agreements, and a covering letter explaining the scope of operations. The typical processing timeline is 2 to 3 months from complete submission, though this can vary based on the volume of applications and any queries raised by CPCB during review. Government charges vary by case and waste category. Our team manages the entire application process, from document compilation to submission and follow-up with CPCB, ensuring a smooth path to authorization.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["Completed application form", "All supporting documents", "DIC registration (if applicable)", "Covering letter"],
    typicalTimeline: "2–3 months for approval",
    deliverables: ["EPR authorization certificate from CPCB"],
    tips: ["Government charges vary by case; typical timeline is 2–3 months from complete submission"]
  },
  {
    title: "Reporting and Renewals",
    description:
    "Ongoing compliance with EPR authorization requires annual reporting to CPCB on waste collection and recycling performance, updated agreements with recyclers, and for e-waste and battery categories, timely renewal of the EPR certificate at least six months before its five-year expiry. CPCB has strict timelines for annual reporting, and late or inaccurate submissions can result in show-cause notices, suspension of authorization, or environmental compensation orders. Importers must also update CPCB about any changes to their product portfolio, import volumes, or waste management arrangements. Our team provides comprehensive annual compliance management, including data compilation, report preparation, timely filing, and proactive renewal management.",
    icon: Globe2,
    phase: "Approval",
    keyDocuments: ["Annual compliance reports", "Updated collection/recycling data", "Renewal application (for e-waste/battery)"],
    typicalTimeline: "Annual reporting; renewal 6 months before expiry",
    deliverables: ["Annual compliance certificate", "Renewed EPR authorization"],
    tips: ["CPCB has strict timelines for annual reporting; late submissions can result in suspension of EPR authorization"]
  }]

},
{
  id: "wholesale-license",
  title: "Wholesale License (20B/21B & MD42)",
  tagline: "Wholesale drug license for pharma & medical device businesses",
  description:
  "A wholesale drug license is issued by the State Licensing Authority (SLA) under the Drugs and Cosmetics Rules, permitting the sale, stocking, and distribution of drugs, biologicals, medical devices, and IVDs at wholesale level. Form 20B/21B covers drugs and medical devices, while Form MD42 is for medical devices only. The license is valid for lifetime with a retention fee every 5 years. We provide end-to-end support from premises setup to license obtainment and renewal management.",
  image: wholesaleLicenseImg,
  badge: "State Drug License",
  manufacturerSteps: [
  {
    title: "Determine License Type",
    description:
    "The wholesale drug license in India comes in two primary forms under the Drugs and Cosmetics Rules. Form 20B/21B is a comprehensive wholesale license covering pharmaceuticals, drugs, biologicals, and medical devices, while Form MD42 is specifically for retailers, wholesalers, or stockists dealing exclusively in medical devices including IVD devices. The 5th Amendment to the Medical Device Rules published via G.S.R. 754(E) on 30 September 2022 made the MD42 registration certificate mandatory for any entity stocking, selling, exhibiting, or distributing medical devices. The choice between 20B/21B and MD42 depends on your product portfolio and business model. Our team assesses your specific requirements and recommends the appropriate license type and regulatory pathway.",
    icon: Layers,
    phase: "Assessment",
    keyDocuments: ["Product portfolio assessment", "Form 20B/21B vs MD42 comparison", "Business registration documents"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["License type recommendation", "Regulatory pathway document"],
    tips: ["Form 20B/21B covers pharmaceuticals, drugs, biologicals, and medical devices; Form MD42 is exclusively for medical devices"]
  },
  {
    title: "Premises & Infrastructure Setup",
    description:
    "The wholesale drug license requires dedicated premises that meet specific infrastructure standards set by the State Drug Licensing Authority. The storage area must be a minimum of 10 square meters, located in a commercial zone as per the State Master Development Plan, and equipped with adequate ventilation, temperature control (air conditioning or refrigeration for cold-chain products), and protection from direct sunlight, moisture, and pest infestation. The premises must have a separate area for receiving and dispatching goods, and proper shelving or racking for organized storage. A qualified pharmacist must be available on-site during business hours. Our team conducts a premises assessment, identifies any infrastructure gaps, and provides detailed specifications to bring your facility into compliance.",
    icon: Building2,
    phase: "Preparation",
    keyDocuments: ["Premises layout plan (minimum 10 sq. meters)", "Ventilation and temperature control records", "Refrigerator/AC invoices", "Ownership/lease documents"],
    typicalTimeline: "2–4 weeks",
    deliverables: ["Premises compliance report", "Infrastructure readiness certificate"],
    tips: ["Facility must meet State Master Development Plan criteria; minimum 10 sq. meters area with proper ventilation and temperature control"]
  },
  {
    title: "Documentation Compilation",
    description:
    "The wholesale license application requires an extensive set of documents including identity proofs of all directors or partners (Aadhaar, PAN, passport), qualification certificate of the registered pharmacist (minimum B.Pharm degree with one year of experience in dealing with drugs, or alternatively, SSLC qualification with four years of experience), proof of premises (ownership deed or registered lease agreement), recent electricity bill, trade license, and system-generated application forms with affidavits. The pharmacist must be registered with the State Pharmacy Council and must sign an undertaking to be present at the licensed premises during business hours. Our team compiles the complete application dossier, verifies all documents against the state-specific requirements, and ensures pharmacist qualifications are properly documented.",
    icon: FileText,
    phase: "Preparation",
    keyDocuments: ["Director ID proofs (Aadhaar, PAN, passport)", "Registered pharmacist qualification certificate (B.Pharm + 1 year experience)", "Proof of premises ownership", "Electricity bill", "System-generated forms and affidavits"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["Complete application dossier", "Pharmacist appointment letter"],
    tips: ["The registered pharmacist must have a graduate degree (B.Pharm) and minimum 1 year experience in dealing with drugs; alternatively, SSLC with 4 years experience"]
  },
  {
    title: "Application Filing with State Drug Authority",
    description:
    "The wholesale license application is submitted to the State Drug Licensing Authority through the respective state portal — xlnIndia for Delhi, NiveshMitra for Uttar Pradesh, InvestHaryana for Haryana, and similar portals for other states. The application requires both online submission and physical submission of hard copies with original documents to the SLA office. Government fees are INR 1,500 per license. Each state may have additional requirements or processing procedures beyond the central guidelines. Our team manages the dual online-offline submission process, ensures all forms are correctly completed for the specific state, and obtains the application reference number and fee receipt for tracking.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["Completed application form (Form 20B/21B or MD42)", "Government fee (INR 1,500 per license)", "Hard copy submission to SLA"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["Application reference number", "Fee receipt", "Filing confirmation"],
    tips: ["Each state has its own portal (e.g., xlnIndia for Delhi, NiveshMitra for UP, InvestHaryana for Haryana); submit both online and hard copy"]
  },
  {
    title: "Premises Inspection",
    description:
    "After the application is filed, the State Drug Licensing Authority assigns a Drug Inspector to conduct a physical inspection of the premises. The inspector verifies compliance with all prescribed conditions including adequate storage space, proper ventilation and temperature control, availability of the qualified pharmacist on-site, maintenance of required registers and records, and overall compliance with Good Storage Practices. Any deficiencies identified during the inspection must be rectified, and a re-inspection may be required. Our team prepares your premises and staff for the inspection, ensures all compliance documentation is readily available, and coordinates any post-inspection rectification if required.",
    icon: ShieldCheck,
    phase: "Review",
    keyDocuments: ["Site prepared for Drug Inspector visit", "Storage compliance documentation", "Temperature/cold chain records"],
    typicalTimeline: "2–4 weeks after filing",
    deliverables: ["Inspection report", "Compliance verification"],
    tips: ["Drug Inspector will verify premises for adequate storage, ventilation, temperature control, and availability of qualified pharmacist on-site"]
  },
  {
    title: "License Grant & Renewal Management",
    description:
    "Upon satisfactory inspection, the State Drug Licensing Authority issues the wholesale drug license in the prescribed form, typically within 21 working days (Form 19 process). The license is valid for a lifetime, but a retention fee of INR 1,500 must be submitted every five years to maintain the license in active status. Any change in the constitution of the business (such as addition or removal of partners), change of premises, or change of qualified person requires a fresh application or amendment. Wholesale license holders are authorized to sell drugs only at the wholesale level and cannot conduct retail sales. Our team manages the license issuance process, sets up retention fee reminders, and provides ongoing compliance support for any amendments or changes.",
    icon: RefreshCcw,
    phase: "Approval",
    keyDocuments: ["Inspection clearance", "Approval letter from SLA"],
    typicalTimeline: "21 working days (Form 19)",
    deliverables: ["Wholesale drug license (lifetime validity)", "Retention fee schedule"],
    tips: ["License is valid for lifetime but retention fee of INR 1,500 must be submitted every 5 years; any change in constitution or premises requires a new application"]
  }],

  importerSteps: [
  {
    title: "Assess Wholesale License Requirement",
    description:
    "For importers holding a CDSCO import license for medical devices, drugs, or IVDs, obtaining a wholesale drug license from the State Licensing Authority is a mandatory prerequisite before commencing commercial distribution. The wholesale license authorizes the holder to stock, sell, and distribute the imported products within India. The same wholesale license covers drugs, biologicals, medical devices, and IVD products, eliminating the need for separate licenses for each product category. Without a valid wholesale license, the import license cannot be effectively utilized as the importer would not be legally permitted to stock or sell the imported products. Our team evaluates your import license conditions and product portfolio to determine the exact wholesale license requirement.",
    icon: Target,
    phase: "Assessment",
    keyDocuments: ["Import license details", "Product classification (drugs vs devices)", "CDSCO registration certificate"],
    typicalTimeline: "1–2 weeks",
    deliverables: ["Requirement assessment report", "License type recommendation"],
    tips: ["Wholesale license is a mandatory prerequisite for most import license holders; same license covers drugs, biologicals, and medical devices"]
  },
  {
    title: "Appoint Qualified Person",
    description:
    "Every wholesale drug license requires the appointment of a qualified person who is responsible for ensuring that all products are stored, handled, and distributed in compliance with applicable regulations. The primary qualification requirement is a registered pharmacist with a Bachelor of Pharmacy (B.Pharm) degree and minimum one year of experience in dealing with drugs. In cases where a B.Pharm graduate is not available, a person who has passed SSLC (Secondary School Leaving Certificate) or equivalent examination and has at least four years of experience in dealing with drugs may be appointed as a competent person. The qualified person must be registered with the State Pharmacy Council and must be physically present at the licensed premises during business hours. Our team assists in identifying, verifying, and formally appointing the qualified person with all necessary documentation.",
    icon: UserCheck,
    phase: "Preparation",
    keyDocuments: ["Registered pharmacist certificate", "B.Pharm degree + 1 year experience", "Employment agreement"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["Pharmacist appointment confirmation", "Qualification verification"],
    tips: ["If no B.Pharm graduate available, a person with SSLC + 4 years drug dealing experience can serve as competent person"]
  },
  {
    title: "Prepare Premises Documentation",
    description:
    "The premises documentation for a wholesale license must comprehensively demonstrate that the storage facility meets all regulatory requirements. This includes the lease agreement or ownership proof (registered with the sub-registrar), a detailed facility layout showing minimum 10 square meters of storage area, cold chain infrastructure documentation (for products requiring temperature-controlled storage), recent electricity bill in the name of the applicant or premises owner, and compliance with Good Storage Practices. For premises in DDA-allotted areas in Delhi, an MCD conversion charge receipt is additionally required. Our team reviews your premises documentation, identifies any gaps, and ensures the dossier comprehensively addresses all state-specific requirements.",
    icon: FileText,
    phase: "Preparation",
    keyDocuments: ["Lease agreement/ownership proof", "Facility layout (min. 10 sq. meters)", "Cold chain capability proof (if applicable)", "Electricity bill"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["Complete premises dossier", "Good Storage Practices compliance report"],
    tips: ["Electric bill of the premises is mandatory; for DDA-allotted premises in Delhi, MCD conversion charge receipt is required"]
  },
  {
    title: "Submit Application to State Authority",
    description:
    "The wholesale license application for importers follows the same submission process as for other applicants — dual filing through the state online portal and physical submission of hard copies to the State Drug Licensing Authority. The application must include the completed application form, a copy of the CDSCO import license, government fee of INR 1,500, premises documentation, pharmacist appointment details, and all required affidavits. The state portal generates an application reference number upon successful online submission. Our team manages the complete dual-channel submission process, ensures all importer-specific documents (such as the import license copy) are included, and tracks the application through to inspection scheduling.",
    icon: UploadCloud,
    phase: "Submission",
    keyDocuments: ["Application form", "Import license copy", "Government fee (INR 1,500)", "Hard copy submission"],
    typicalTimeline: "2–3 weeks",
    deliverables: ["Filing confirmation", "Application tracking number"],
    tips: ["Submit on the respective state portal and as hard copy to the State Licensing Authority simultaneously"]
  },
  {
    title: "Inspection & Compliance Verification",
    description:
    "The Drug Inspector's premises inspection for importers follows the same protocol as for other wholesale license applicants, verifying adequate storage conditions, temperature control, pharmacist availability, and record-keeping systems. However, for importers, the inspector may also verify the cold chain requirements specific to the imported products and the adequacy of quarantine storage for goods pending quality clearance. The qualified pharmacist must be physically present during the inspection and must demonstrate knowledge of the products being stocked and the applicable storage requirements. Our team prepares your facility and staff for the inspection, conducts a pre-inspection readiness check, and provides on-ground support during the Drug Inspector's visit.",
    icon: ShieldCheck,
    phase: "Review",
    keyDocuments: ["Premises ready for inspection", "Storage conditions documentation", "Pharmacist availability confirmation"],
    typicalTimeline: "2–4 weeks after filing",
    deliverables: ["Drug Inspector's inspection report", "Compliance clearance"],
    tips: ["Ensure the qualified person/pharmacist is present during inspection; all storage conditions must be demonstrably maintained"]
  },
  {
    title: "License Issuance & Ongoing Compliance",
    description:
    "Upon satisfactory inspection, the wholesale drug license is issued by the SLA, typically within 21 working days under the Form 19 process. The license is valid for a lifetime with a retention fee of INR 1,500 due every five years. Importers holding a wholesale license must maintain detailed records of all wholesale transactions including purchase invoices, sales records, stock registers, and batch-wise inventory tracking. Wholesale license holders are strictly prohibited from conducting retail sales — all sales must be to other licensed wholesalers, retailers, hospitals, or institutions. Our team assists with license issuance, establishes transaction record-keeping systems, and provides ongoing compliance management including retention fee reminders and amendment support.",
    icon: Globe2,
    phase: "Approval",
    keyDocuments: ["Approval from SLA", "Transaction record-keeping system"],
    typicalTimeline: "21 working days for Form 19",
    deliverables: ["Wholesale license (lifetime)", "Transaction record template"],
    tips: ["Maintain records of all wholesale transactions; wholesale license holders cannot sell drugs at retail level; retention fee due every 5 years"]
  }]

}];


import ServicesOverview from "@/components/ServicesOverview";

const Services = () => {
  const location = useLocation();
  const hash = location.hash.replace("#", "");

  // If no hash, show overview page
  if (!hash) {
    return <ServicesOverview />;
  }

  // If hash present, render the detail view
  return <ServiceDetail initialServiceId={hash} />;
};

type ServiceDetailProps = {
  initialServiceId: string;
};

const ServiceDetail = ({ initialServiceId }: ServiceDetailProps) => {
  const location = useLocation();
  const [activeServiceId, setActiveServiceId] = useState(
    serviceCatalog.some((s) => s.id === initialServiceId) ?
    initialServiceId :
    serviceCatalog[0]?.id ?? ""
  );
  const [selectedRole, setSelectedRole] = useState<"manufacturer" | "importer">("manufacturer");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const isMobile = useIsMobile();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  // Handle URL hash changes for direct service linking
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && serviceCatalog.some((s) => s.id === hash)) {
      setActiveServiceId(hash);
      setActiveStepIndex(0);
    }
  }, [location.hash]);

  // Services that support both manufacturer and importer roles
  const dualRoleServices = ["medical-devices", "nppa-registration", "ivd", "cosmetics"];

  const activeService = useMemo(
    () =>
    serviceCatalog.find((service) => service.id === activeServiceId) ??
    serviceCatalog[0],
    [activeServiceId]
  );

  // Check if current service supports both roles
  const hasDualRoles = dualRoleServices.includes(activeServiceId);

  // For non-dual-role services, always use manufacturer steps
  const effectiveRole = hasDualRoles ? selectedRole : "manufacturer";

  const activeSteps =
  effectiveRole === "manufacturer" ?
  activeService?.manufacturerSteps :
  activeService?.importerSteps;

  const activeStep = activeSteps?.[activeStepIndex] ?? activeSteps?.[0];

  const handleServiceChange = (value: string) => {
    setActiveServiceId(value);
    setActiveStepIndex(0);
    // Reset to manufacturer when switching to a single-role service
    if (!dualRoleServices.includes(value)) {
      setSelectedRole("manufacturer");
    }
    // Update URL hash for shareability
    window.history.replaceState(null, "", `#${value}`);
  };

  const handleRoleChange = (role: "manufacturer" | "importer") => {
    setSelectedRole(role);
    setActiveStepIndex(0);
  };

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index);
  };

  const handlePrevious = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeSteps && activeStepIndex < activeSteps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dynamic Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden py-20 lg:py-32">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService?.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}>
            
            <img
              src={activeService?.image}
              alt={activeService?.title}
              className="w-full h-full object-cover brightness-[0.85]" />
            
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-accent/70 mix-blend-multiply" />
          </motion.div>
        </AnimatePresence>
        
        {/* Floating Elements */}
        <FloatingElements variant="services" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}>
            
            <AnimatePresence mode="wait">
              {activeService?.badge &&
              <motion.span
                key={activeService.badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                
                  <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-white/80" />
                
                  {activeService.badge}
                </motion.span>
              }
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeService?.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="mb-6 text-4xl font-bold text-white lg:text-6xl">
                
                {activeService?.title}
              </motion.h1>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.p
                key={activeService?.tagline}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-xl lg:text-2xl text-white/90 mb-4">
                
                {activeService?.tagline}
              </motion.p>
            </AnimatePresence>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/80">
              
              {activeService?.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Desktop: Pill tabs */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-8">
          {serviceCatalog.map((service) =>
          <button
            key={service.id}
            onClick={() => handleServiceChange(service.id)}
            className={cn(
              "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
              activeServiceId === service.id ?
              "bg-primary text-primary-foreground shadow-lg shadow-primary/25" :
              "bg-secondary/50 text-muted-foreground border border-border hover:border-primary/40 hover:text-primary"
            )}>
            
              {service.title.split(" (")[0]}
              {service.badge &&
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded-full",
                activeServiceId === service.id ?
                "bg-primary-foreground/20 text-primary-foreground" :
                "bg-primary/10 text-primary"
              )}>
              
                  {service.badge}
                </span>
            }
            </button>
          )}
        </div>

        {/* Mobile: Dropdown */}
        <div className="md:hidden mb-8">
          <Select value={activeServiceId} onValueChange={handleServiceChange}>
            <SelectTrigger className="w-full bg-card border-border">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {serviceCatalog.map((service) =>
              <SelectItem
                key={service.id}
                value={service.id}
                className="cursor-pointer">
                
                  <div className="flex items-center gap-2">
                    {service.title}
                    {service.badge &&
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {service.badge}
                      </span>
                  }
                  </div>
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

      </section>

      {/* Deep-dive knowledge base content + Roadmap for dual-role services */}
      <section className="container mx-auto sm:px-6 lg:px-8 pb-16 px-[50px]">
        <div className="max-w-5xl mx-auto">
          {activeServiceId === "medical-devices" && <div className="mt-[2vh]"><MedicalDevicesContent /></div>}
          {activeServiceId === "nppa-registration" && (
            <div className="mt-[2vh]">
              <div className="rounded-3xl border border-border bg-card p-8 lg:p-12 shadow-lg">
                <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 items-center">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                      NPPA &amp; IPDMS 2.0 Registration
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      NPPA Registration
                    </h2>
                    <p className="text-muted-foreground text-base lg:text-lg mb-6 leading-relaxed">
                      Medical device pricing compliance, IPDMS 2.0 registration and applicable NPPA filing assistance.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button asChild size="lg" className="shadow-lg shadow-primary/25">
                        <Link to="/services/nppa-registration-medical-devices">
                          Explore Service →
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link to="/contact">
                          Book Consultation
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-square">
                    <img
                      src={nppaImg}
                      alt="NPPA Registration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="text-xs uppercase tracking-wider text-white/80 font-semibold mb-1">Dedicated Service Page</p>
                      <p className="text-sm font-medium">Access detailed DPCO provisions, Form requirements, document checklists, and FAQs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeServiceId === "ivd" && <div className="mt-[2vh]"><IVDContent /></div>}
          {activeServiceId === "cosmetics" && <div className="mt-[2vh]"><CosmeticsContent /></div>}
          {activeServiceId === "lmpc" && <div className="mt-[2vh]"><LegalMetrologyContent /></div>}
          {activeServiceId === "iec" && <div className="mt-[2vh]"><IECContent /></div>}
          {activeServiceId === "epr" && <div className="mt-[2vh]"><EPRContent /></div>}
          {activeServiceId === "wholesale-license" && <div className="mt-[2vh]"><WholesaleLicenseContent /></div>}

          {/* Role Toggle + Roadmap - only for Medical Devices, IVD, Cosmetics */}
          {hasDualRoles && activeSteps && activeStep && (
            <div className="mt-16 pt-12 border-t border-border">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Choose Your Role
                </h2>
                <p className="text-muted-foreground">
                  Select whether you're a manufacturer or importer to see the specific process
                </p>
              </div>

              <div className="flex justify-center gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant={selectedRole === "manufacturer" ? "default" : "outline"}
                    onClick={() => handleRoleChange("manufacturer")}
                    size="lg"
                    className={cn(
                      "min-w-[160px] gap-2 transition-all duration-300",
                      selectedRole === "manufacturer" && "shadow-lg shadow-primary/25"
                    )}>
                    <motion.span
                      animate={selectedRole === "manufacturer" ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}>
                      <Factory className="h-4 w-4" />
                    </motion.span>
                    Manufacturer
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant={selectedRole === "importer" ? "default" : "outline"}
                    onClick={() => handleRoleChange("importer")}
                    size="lg"
                    className={cn(
                      "min-w-[160px] gap-2 transition-all duration-300",
                      selectedRole === "importer" && "shadow-lg shadow-primary/25"
                    )}>
                    <motion.span
                      animate={selectedRole === "importer" ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}>
                      <Building2 className="h-4 w-4" />
                    </motion.span>
                    Importer
                  </Button>
                </motion.div>
              </div>

              <RoadmapTimeline
                totalSteps={activeSteps.length}
                activeStep={activeStepIndex}
                onStepClick={handleStepClick}
                stepTitles={activeSteps.map((s) => s.title)} />

              <div className="mt-10">
                <StepDetailCard
                  stepNumber={activeStepIndex + 1}
                  totalSteps={activeSteps.length}
                  title={activeStep.title}
                  description={activeStep.description}
                  icon={activeStep.icon}
                  serviceName={activeService?.title.split(" (")[0] ?? ""}
                  serviceLink="/contact"
                  keyDocuments={activeStep.keyDocuments}
                  typicalTimeline={activeStep.typicalTimeline}
                  deliverables={activeStep.deliverables}
                  tips={activeStep.tips}
                  onPrevious={handlePrevious}
                  onNext={handleNext} />
              </div>
            </div>
          )}
        </div>
      </section>

    </div>);

};

export default Services;