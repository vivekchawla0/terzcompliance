import { SEO } from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy | Terz Compliance"
        description="Read the Privacy Policy of Terz Compliance regarding data collection, client privacy, security, and information handling practices."
        canonical="https://www.terzcompliance.com/privacy"
      />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p>
                  Terz Compliance collects information that you provide directly to us when you use our services, 
                  including when you fill out forms, request consultations, or communicate with us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our regulatory compliance 
                  services, to communicate with you, and to comply with legal obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell or rent your personal information to third parties. We may share your information 
                  with regulatory authorities as required for compliance purposes and with your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information. You may also have the 
                  right to object to or restrict certain processing of your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="list-none pl-0 space-y-2 mt-4">
                  <li>Email: info@terzcompliance.com</li>
                  <li>Phone: +91 79838 58470</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
