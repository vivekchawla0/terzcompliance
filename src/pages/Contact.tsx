import { Mail, Phone, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 1 business day."
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-[3vh] lg:py-[4vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Talk to our regulatory experts
            </h1>
            <p className="text-lg text-muted-foreground">
              Share a few details and we'll get back to you within 1 business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-8 lg:py-12 container mx-auto px-4 sm:px-6 lg:px-8" id="contact-form">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="John Doe" required className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 79838 58470" required className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your Company Ltd." className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In *</Label>
                      <select id="service" required className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                        <option value="">Select a service</option>
                        <option value="medical-devices">Medical Devices</option>
                        <option value="ivd">In-Vitro Diagnostics</option>
                        <option value="cosmetics">Cosmetics</option>
                        <option value="lmpc">Legal Metrology</option>
                        <option value="iec">Import Export Code</option>
                        <option value="epr">EPR</option>
                        <option value="market-entry">India Market Entry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Tell us about your product, service and compliance needs..." required rows={6} className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="attachments">Attachments (optional)</Label>
                      <Input id="attachments" type="file" className="w-full" multiple />
                      <p className="text-sm text-muted-foreground">
                        You can upload relevant documents (PDF, DOCX, etc.).
                      </p>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We usually respond within 1 business day.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              {/* Card 1 - Call or email */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">Call or email us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have an urgent question? Reach out directly.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                      <a href="mailto:info@terzcompliance.com" className="text-sm text-foreground hover:text-primary transition-colors break-all">
                        info@terzcompliance.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <a href="tel:+917983858470" className="text-sm text-foreground hover:text-primary transition-colors">
                        +91 79838 58470
                      </a>
                    </div>
                    


                  </div>
                </CardContent>
              </Card>

              {/* Card 2 - WhatsApp */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">Chat on WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Start a WhatsApp chat with our team.
                    Available Mon – Fri, 9:00 AM – 6:00 PM IST.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://wa.me/917983858470" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Start WhatsApp chat
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Card 3 - Free consultation */}
              <Card className="hover:shadow-md transition-shadow">
                
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Answers to common questions about regulatory approvals, timelines and working with Terz Compliance.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Which approvals can Terz Compliance help with?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We support CDSCO approvals for medical devices and in-vitro diagnostics, cosmetics registration, Legal Metrology approvals, WPC/ETA, EPR and other Indian regulatory requirements. If you are unsure which approvals apply to your product, contact us and we will map the applicable regulations for you.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How long does the registration process typically take?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Timelines vary by product category and authority. In most cases, the process ranges from a few weeks to a few months. Timelines depend on the completeness of your documents and the workload at the regulatory authority. Our role is to plan the project carefully to avoid avoidable delays.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What information or documents do you need from us to get started?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We typically need product details and specifications, technical documents, test reports and certificates, company KYC details, and draft labels or artwork where applicable.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can you help if my application is already rejected or stuck?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes. We review your file and authority queries, identify gaps, prepare responses or corrective actions, and support re-submission where possible.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Do you offer support after product approval?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes. We help with renewals, post-approval changes, label and packaging updates, ongoing compliance checks and audits to ensure your product remains compliant.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Can you handle multiple product registrations or large portfolios?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes. We work with both single SKUs and large portfolios. We manage them as structured projects with clear timelines and regular updates.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Do you work with startups and first-time importers?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes. We work with early-stage companies and new importers, helping them understand which regulations apply and guiding them step-by-step through documentation and filing.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>
                  Is my product and company information kept confidential?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    All information is treated as strictly confidential. NDAs can be signed on request, and access to documents is restricted to the project team only.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;