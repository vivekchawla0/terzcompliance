import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, Sparkles, Shield, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
const companyLinks = [{
  label: "Home",
  to: "/"
}, {
  label: "About",
  to: "/about"
}, {
  label: "Procedure",
  to: "/procedure"
}, {
  label: "Resources",
  to: "/resources"
}];
const serviceLinks = [{
  label: "Medical Devices",
  to: "/services#medical-devices"
}, {
  label: "NPPA Registration",
  to: "/services/nppa-registration-medical-devices"
}, {
  label: "In-Vitro Diagnostics",
  to: "/services#ivd"
}, {
  label: "Cosmetics",
  to: "/services#cosmetics"
}, {
  label: "Legal Metrology",
  to: "/services#lmpc"
}];
const insightLinks = [{
  label: "Newsroom",
  to: "/resources#news"
}, {
  label: "Knowledge Base",
  to: "/resources#guides"
}];
const contactMethods = [{
  icon: Mail,
  label: "Write to us",
  value: "info@terzcompliance.com",
  href: "mailto:info@terzcompliance.com"
}, {
  icon: Phone,
  label: "Call our experts",
  value: "+91 79838 58470",
  href: "tel:+917983858470"
}];
const Footer = () => {
  return <footer className="relative overflow-hidden border-t border-primary/20 bg-primary text-primary-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-accent/15 via-primary/30 to-transparent opacity-50 blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            

            <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  {companyLinks.map(link => <li key={link.to}>
                      <Link to={link.to} className="group inline-flex items-center gap-2 text-primary-foreground/80 transition-all duration-300 hover:text-accent">
                        <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                        {link.label}
                      </Link>
                    </li>)}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-3">
                  {serviceLinks.map(link => <li key={link.to}>
                      <Link to={link.to} className="group inline-flex items-center gap-2 text-primary-foreground/80 transition-all duration-300 hover:text-accent">
                        <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                        {link.label}
                      </Link>
                    </li>)}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
                  Insights
                </h3>
                <ul className="mt-4 space-y-3">
                  {insightLinks.map(link => <li key={link.to}>
                      <Link to={link.to} className="group inline-flex items-center gap-2 text-primary-foreground/80 transition-all duration-300 hover:text-accent">
                        <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                        {link.label}
                      </Link>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>

          <div className="h-full order-1 lg:order-2">
            <div className="relative h-full overflow-hidden rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary-foreground/30 hover:shadow-xl group">
              <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-3xl transition-all duration-500 group-hover:blur-[4rem]" />
              
              {/* Our Promise Section */}
              <div className="relative p-5 md:p-6 border-b border-primary-foreground/15">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5">
                  <Sparkles className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                    Our Promise
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  <span className="text-primary-foreground">
                    At Terz Compliance, we don&apos;t just meet timelines -{" "}
                  </span>
                  <span className="text-accent">
                    we redefine them.
                  </span>
                </h3>
              </div>

              {/* Contact Section */}
              <div className="relative p-4 md:p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
                  Contact
                </h3>
                <ul className="mt-4 space-y-5">
                  {contactMethods.map(({
                  icon: Icon,
                  label,
                  value,
                  href
                }) => <li key={value} className="group/item flex items-start gap-3">
                      <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/20 text-accent transition-transform duration-300 group-hover/item:-translate-y-1 group-hover/item:scale-110">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-primary-foreground/60">
                          {label}
                        </p>
                        <a href={href} className="text-sm font-medium text-primary-foreground transition-all duration-300 hover:text-accent">
                          {value}
                        </a>
                      </div>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 gap-6 border-t border-primary-foreground/15 pt-6 md:pt-8 text-sm text-primary-foreground/70 lg:grid-cols-[1.1fr,1fr]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Terz Compliance. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              
              <Link to="/terms" className="transition-colors duration-300 hover:text-accent">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="space-y-4">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="group flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/15 px-3 py-1.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-md">
                  <ShieldCheck className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    ISO 9001
                  </span>
                </div>
                <div className="group flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/15 px-3 py-1.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-md">
                  <ShieldCheck className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    ISO 10002
                  </span>
                </div>
                <div className="group flex items-center gap-2 rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-foreground/50 hover:shadow-md">
                  <Shield className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                    CDSCO Compliant
                  </span>
                </div>
              </div>
              {/* Additional Credentials */}
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
                <span className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-2.5 py-1 text-primary-foreground/80">Pan-India Experts</span>
                <span className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-2.5 py-1 text-primary-foreground/80">24h Response</span>
                <span className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-2.5 py-1 text-primary-foreground/80">Global Launchpad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-accent/30 bg-accent/15 p-5 text-center text-sm text-primary-foreground shadow-lg md:hidden">
          <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            Quick Connect
          </h4>
          <p className="mt-2 text-primary-foreground/80">
            Save time on mobile - tap below to reach us instantly.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href="tel:+917983858470" className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-4 text-primary-foreground transition-transform duration-300 hover:-translate-y-1 hover:border-accent/40">
              <Phone className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Call
              </span>
            </a>
            <a href="mailto:info@terzcompliance.com" className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-4 text-primary-foreground transition-transform duration-300 hover:-translate-y-1 hover:border-accent/40">
              <Mail className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Email
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;