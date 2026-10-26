import { useEffect } from "react";
const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-[8vh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.06),transparent_50%)]" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Legal Documentation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
            
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-[10vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Section 1 */}
            <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold text-sm shrink-0">
                  01
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Acceptance of Terms</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the services of Terz Compliance, you agree to be bound by these Terms and 
                Conditions. If you do not agree to these terms, please do not use our services. Your continued use 
                of our services constitutes acceptance of any updates or modifications to these terms.
              </p>
            </div>

            {/* Section 2 */}
            <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold text-sm shrink-0">
                  02
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Services</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Terz Compliance provides regulatory compliance consulting services for medical devices, in-vitro 
                diagnostics, cosmetics, and other products entering the Indian market. Our services include but are 
                not limited to documentation preparation, filing assistance, regulatory guidance, compliance audits, 
                and ongoing regulatory support.
              </p>
            </div>

            {/* Section 3 */}
            <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold text-sm shrink-0">
                  03
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Client Responsibilities</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Clients are responsible for providing accurate, complete, and timely information about their products. 
                  This includes technical specifications, safety data, and all relevant documentation.
                </p>
                <p>
                  Clients must ensure their products comply with all applicable safety, quality, and performance standards 
                  before seeking regulatory approval. Terz Compliance provides guidance but does not guarantee regulatory 
                  approval outcomes.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold text-sm shrink-0">
                  04
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Fees and Payment</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Fees for our services are outlined in individual service agreements and may vary based on project 
                complexity and scope. Payment terms will be specified in the agreement, and clients are expected to 
                make payments as per the agreed schedule. Late payments may result in service delays or suspension.
              </p>
            </div>

            {/* Section 5 */}
            <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold text-sm shrink-0">
                  05
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  While we strive for excellence in all our services, Terz Compliance is not liable for regulatory 
                  decisions made by government authorities, delays caused by regulatory bodies, or outcomes beyond our 
                  direct control.
                </p>
                <p>
                  Our liability is limited to the fees paid for the specific service in question. We are not responsible 
                  for indirect, consequential, or incidental damages arising from the use of our services.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold text-sm shrink-0">
                  06
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Confidentiality</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We maintain strict confidentiality of all client information, proprietary data, and documents. We do not 
                disclose client information to third parties except as required by law, regulatory authorities, or with 
                explicit written client consent. All team members are bound by confidentiality agreements.
              </p>
            </div>

            {/* Section 7 */}
            <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold text-sm shrink-0">
                  07
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                All materials, documentation templates, and deliverables prepared by Terz Compliance remain our 
                intellectual property until full payment is received. Upon complete payment, clients receive a 
                non-exclusive license to use these materials specifically for their regulatory submissions and compliance 
                purposes.
              </p>
            </div>

            {/* Section 8 */}
            <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold text-sm shrink-0">
                  08
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Termination</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate a service agreement with written notice as specified in the service agreement. 
                Upon termination, clients are responsible for payment of services rendered up to the termination date. 
                Any applicable refunds or outstanding payments will be governed by the specific service agreement terms.
              </p>
            </div>

            {/* Section 9 */}
            <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold text-sm shrink-0">
                  09
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Governing Law</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with the laws of India. Any 
                disputes, claims, or legal proceedings arising from these terms shall be subject to the exclusive 
                jurisdiction of the courts in Bangalore, India.
              </p>
            </div>

            {/* Section 10 - Contact */}
            <div className="group rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold text-sm shrink-0">
                  10
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions, clarifications, or concerns regarding these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-foreground">Email:</span> info@terzcompliance.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-foreground">Phone:</span> +91 79838 58470
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>;
};
export default Terms;