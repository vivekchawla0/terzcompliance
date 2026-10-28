export interface SearchEntry {
  title: string;
  content: string;
  path: string;
  section?: string;
}

export const searchIndex: SearchEntry[] = [
  // Home
  {
    title: "Home",
    content:
      "Terz Compliance regulatory compliance services India medical devices IVD in vitro diagnostics cosmetics legal metrology import export EPR extended producer responsibility wholesale license CDSCO BIS FSSAI trusted by manufacturers importers distributors end to end regulatory support registration certification approval licensing quality management consulting",
    path: "/",
  },

  // Services overview
  {
    title: "Services Overview",
    content:
      "Regulatory compliance services overview medical devices IVD in vitro diagnostics cosmetics legal metrology import export code IEC EPR extended producer responsibility wholesale license registration certification approval process documentation consulting India CDSCO SLA BIS LMPC DGFT CPCB",
    path: "/services",
  },

  // Medical Devices
  {
    title: "Medical Devices",
    content:
      "Medical device registration India CDSCO SLA State Licensing Authority Class A B C D risk classification MDR 2017 Medical Device Rules import license manufacturing license Form 40 Form 41 MD-9 MD-14 MD-15 MD-42 clinical investigation notified body quality management system ISO 13485 regulatory approval new medical device investigational device approval process documentation requirements fees timeline risk based classification system Central Drugs Standard Control Organisation drug controller general technical committee subject expert committee site inspection product testing labelling requirements post market surveillance adverse event reporting",
    path: "/services#medical-devices",
    section: "Services",
  },

  // NPPA Registration
  {
    title: "NPPA Registration for Medical Devices",
    content:
      "NPPA Registration NPPA Medical Devices Medical Device Pricing Compliance DPCO 2013 IPDMS 2.0 NPPA Applicability NPPA Compliance India Medical Device Price Reporting National Pharmaceutical Pricing Authority Department of Pharmaceuticals scheduled non-scheduled medical devices ceiling price Form V Form II Form 20 annual MRP increase 10 percent monitoring price list submission medical device pricing regulations compliance consultancy",
    path: "/services/nppa-registration-medical-devices",
    section: "Services",
  },

  // IVD
  {
    title: "In-Vitro Diagnostics (IVD)",
    content:
      "IVD in vitro diagnostics registration India CDSCO SLA State Licensing Authority Class A B C D risk classification IVDR 2017 In Vitro Diagnostic Medical Device Rules import license manufacturing license notified IVD types blood grouping HIV HBsAg Hepatitis pregnancy test diagnostic kits reagents Form 40 Form 41 quality management system regulatory approval new diagnostic kit authorized Indian agent site inspection product testing labelling requirements clinical performance evaluation risk based classification Central Drugs Standard Control Organisation fees timeline documentation",
    path: "/services#ivd",
    section: "Services",
  },

  // Cosmetics
  {
    title: "Cosmetics",
    content:
      "Cosmetics registration India CDSCO import license manufacturing license COS-2 cosmetic rules 2020 drug and cosmetic act labelling requirements product categories skin care hair care perfume soap toothpaste deodorant make up nail polish shampoo cream lotion sunscreen cosmetic product registration process documentation requirements fees timeline import cosmetics Indian manufacturer testing analysis safety assessment ingredient declaration regulatory approval Central Drugs Standard Control Organisation state licensing authority",
    path: "/services#cosmetics",
    section: "Services",
  },

  // Legal Metrology
  {
    title: "Legal Metrology (LMPC)",
    content:
      "Legal metrology packaged commodity LMPC model approval weights measures Act 2009 Rules 2011 declarations labelling net quantity MRP maximum retail price manufacturer packer importer controller legal metrology department pre packaged commodities registration compliance product labelling requirements declarations mandatory information consumer protection measurement standards verification calibration inspection enforcement penalties non compliance",
    path: "/services#lmpc",
    section: "Services",
  },

  // IEC
  {
    title: "Import Export Code (IEC)",
    content:
      "Import export code IEC registration DGFT Directorate General of Foreign Trade customs clearance international trade export promotion import documentation PAN based Aayaat Niryaat form application process online registration required documents eligibility who needs IEC exemptions benefits foreign trade policy customs duty drawback export incentives import permit license",
    path: "/services#iec",
    section: "Services",
  },

  // EPR
  {
    title: "EPR Extended Producer Responsibility",
    content:
      "EPR extended producer responsibility CPCB Central Pollution Control Board plastic waste e-waste electronic waste battery waste registration compliance target collection recycling producer importer brand owner environmental compliance waste management rules plastic waste management e-waste management hazardous waste registration process annual returns filing compliance targets obligations categories framework",
    path: "/services#epr",
    section: "Services",
  },

  // Wholesale License
  {
    title: "Wholesale License",
    content:
      "Wholesale drug license Form 20B Form 21B drug and cosmetic act state drug controller wholesale distribution pharmaceutical drugs storage conditions qualified person premises inspection wholesale drug distribution license application process requirements documentation fees regulatory compliance pharmaceutical wholesale dealer license drug inspector approval",
    path: "/services#wholesale-license",
    section: "Services",
  },

  // Resources
  {
    title: "Resources",
    content:
      "Resources knowledge center news articles blog posts regulatory updates industry insights compliance guides latest developments medical device IVD cosmetics legal metrology import export EPR regulatory news updates guidelines notifications circulars gazette CDSCO BIS DGFT CPCB",
    path: "/resources",
  },

  // About
  {
    title: "About Us",
    content:
      "About Terz Compliance regulatory consultancy team experts mission vision values experience compliance consulting India manufacturers importers trusted partner client testimonials years of experience regulatory affairs professionals industry knowledge client success stories company history background founding team leadership",
    path: "/about",
  },

  // Contact
  {
    title: "Contact Us",
    content:
      "Contact Terz Compliance get in touch consultation regulatory services email phone WhatsApp schedule meeting enquiry support reach out free consultation regulatory guidance expert advice question query help assistance",
    path: "/contact",
  },

  // Privacy
  {
    title: "Privacy Policy",
    content:
      "Privacy policy data protection information collection personal data security rights cookies third party sharing GDPR compliance user data handling storage processing consent opt out data retention security measures",
    path: "/privacy",
  },

  // Terms
  {
    title: "Terms & Conditions",
    content:
      "Terms conditions service agreement client responsibilities fees payment liability confidentiality intellectual property termination governing law dispute resolution warranty disclaimer indemnification force majeure amendments modifications acceptance",
    path: "/terms",
  },
];
