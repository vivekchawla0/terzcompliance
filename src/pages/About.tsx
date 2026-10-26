import { Users, Award, DollarSign, Target, Lightbulb, Building2, Boxes, ShieldCheck, FileText, Eye, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutHeroImage from "@/assets/about-hero.png";
import ourStoryImage from "@/assets/our-story.png";
import timeline2019 from "@/assets/timeline-2019.jpg";
import timeline2020 from "@/assets/timeline-2020.jpg";
import timeline2022 from "@/assets/timeline-2022.jpg";
import timelineToday from "@/assets/timeline-today.jpg";
import missionDrivenBg from "@/assets/mission-driven-bg.jpg";
import qualityFirstBg from "@/assets/quality-first-bg.jpg";
import clientPartnershipBg from "@/assets/client-partnership-bg.jpg";
import transparentFairBg from "@/assets/transparent-fair-bg.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
const About = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Scroll animation refs
  const heroRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const timelineRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const feeRef = useScrollAnimation();
  const testimonialRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  // Count up hooks for statistics
  const productsCount = useCountUp({
    end: 100,
    suffix: "k+"
  });
  const clientsCount = useCountUp({
    end: 200,
    suffix: "+"
  });
  const transparencyCount = useCountUp({
    end: 100,
    suffix: "%"
  });
  const yearsCount = useCountUp({
    end: 15,
    suffix: "+"
  });
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    let scrollInterval: ReturnType<typeof setInterval>;
    let isHovered = false;
    const updateActiveTestimonial = () => {
      if (container) {
        const scrollLeft = container.scrollLeft;
        const cardWidth = 416; // 400px card + 16px gap
        const index = Math.round(scrollLeft / cardWidth);
        setActiveTestimonial(Math.min(index, 4));
      }
    };
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          const currentScroll = container.scrollLeft;
          if (currentScroll >= maxScroll) {
            container.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          } else {
            container.scrollBy({
              left: 420,
              behavior: "smooth"
            });
          }
        }
      }, 3000);
    };
    const handleMouseEnter = () => {
      isHovered = true;
    };
    const handleMouseLeave = () => {
      isHovered = false;
    };
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("scroll", updateActiveTestimonial);
    startAutoScroll();
    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("scroll", updateActiveTestimonial);
    };
  }, []);
  const scrollToTestimonial = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = 416;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
    }
  };
  const values = [{
    icon: Target,
    title: "Mission-Driven",
    description: "Empowering life science companies to bring products to market efficiently and ethically by simplifying regulatory compliance.",
    bgImage: missionDrivenBg
  }, {
    icon: Award,
    title: "Quality First",
    description: "We focus on first-pass approval with meticulous documentation that meets the highest regulatory standards.",
    bgImage: qualityFirstBg
  }, {
    icon: Users,
    title: "Client Partnership",
    description: "Your success is our success. We provide dedicated support as your single point of contact throughout the journey.",
    bgImage: clientPartnershipBg
  }, {
    icon: DollarSign,
    title: "Transparent & Fair",
    description: "Honest communication, predictable timelines, and cost-effective solutions with no hidden fees.",
    bgImage: transparentFairBg
  }];
  const timelineItems = [{
    year: "2019",
    title: "The Insight",
    description: "Working inside compliance and industry, we kept seeing good products delayed by unclear documentation and fragmented advice.",
    icon: Lightbulb,
    image: timeline2019
  }, {
    year: "2020",
    title: "Terz Compliance is founded",
    description: "We set up Terz Compliance with one goal: make India's approval process clearer, faster and more predictable for manufacturers and importers.",
    icon: Building2,
    image: timeline2020
  }, {
    year: "2022",
    title: "Scaling across categories",
    description: "Our work expanded from medical devices and IVDs into cosmetics, food, EPR and Legal Metrology, supported by a fully remote model serving clients across India and abroad.",
    icon: Boxes,
    image: timeline2022
  }, {
    year: "Today",
    title: "A predictable regulatory partner",
    description: "Today, we act as an extended regulatory team for companies of all sizes - bringing structured processes, honest timelines and documentation that stands up to scrutiny.",
    icon: ShieldCheck,
    image: timelineToday
  }];
  const feeFeatures = [{
    icon: FileText,
    title: "Detailed Breakdown",
    description: "Every quote separates regulatory fees from our service fees, so you see exactly where your investment goes."
  }, {
    icon: Eye,
    title: "No Hidden Costs",
    description: "We believe in transparent pricing. What we quote is what you pay - no surprises, no add-ons."
  }, {
    icon: CheckCircle,
    title: "First-Pass Focus",
    description: "Our meticulous approach aims for first-pass approval, saving you time and money on resubmissions."
  }];
  const testimonials = [{
    quote: "Terz Compliance brought remarkable professionalism, expertise, and strategic insight from day one. They understood our business requirements quickly and delivered effective solutions ahead of schedule. Their clear communication and ability to demystify complex compliance requirements made them a trusted advisor to our team.",
    name: "Hemendra Dave, PGDBM, MBA",
    role: "Regulatory Head",
    company: "Envision Scientific, Concept Medical",
    date: "April 6, 2025"
  }, {
    quote: "I highly recommend Terz Compliance for their outstanding expertise in medical device registration with Indian authorities. Their deep knowledge, proactive approach, and ability to navigate complex processes were instrumental in securing timely clearance. Their strong relationships with authorities ensured a smooth approval process.",
    name: "Andrew Tang",
    role: "Chief Executive Officer",
    company: "Mobilab, USA",
    date: "February 11, 2025"
  }, {
    quote: "As a consultant who handles the medical devices regulatory approvals, Terz is meticulous and conscientious while preparing and vetting documents, leaving little room for errors, saving time and money for their clients. Professional and courteous, they are also a pleasure to deal with.",
    name: "Anil Kumar Nair",
    role: "Managing Director",
    company: "Geuder Asia Pacific Pvt. Ltd, Singapore",
    date: "November 20, 2024"
  }, {
    quote: "Had worked with Terz Compliance on medical device registration in India, a team with strong work ethics, extremely responsive and knows their field of work well. Their inputs had been a guiding light in getting medical devices registered in India.",
    name: "Steven Choy",
    role: "Business Consultant",
    company: "SEED, Japan",
    date: "April 23, 2024"
  }, {
    quote: "Terz Compliance is super efficient in registration work. They helped with urgent paperwork ahead of deadlines and are ever ready to help even at odd hours. Truly appreciate their effort in going the extra mile for their clients.",
    name: "Toinali Chophi",
    role: "CEO",
    company: "Beautybarnindia",
    date: "May 24, 2023"
  }];
  return <div className="min-h-screen bg-background">
      {/* Header / Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef.ref} className="grid lg:grid-cols-2 gap-12 items-center min-h-[650px] lg:min-h-[80vh]">
            <div className="space-y-6 lg:space-y-8 max-w-3xl lg:pr-6">
              <div className="space-y-4">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight transition-all duration-500 ${heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  Regulatory approvals for India, done right the first time.
                </h1>
                <p className={`text-lg sm:text-xl text-muted-foreground leading-relaxed transition-all duration-500 delay-100 ${heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  Terz Compliance is a specialized regulatory partner for manufacturers, importers and innovators entering the Indian market.
                  We simplify approvals across medical devices, in-vitro diagnostics, cosmetics, food, EPR, Legal Metrology and more - so your team can launch faster with confidence.
                </p>
                <p className={`text-base text-foreground/70 font-medium transition-all duration-500 delay-150 ${heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  From first-time importers to global brands, we've helped teams navigate India's regulations without surprises or guesswork.
                </p>
              </div>
              <div className={`flex flex-wrap items-center gap-4 transition-all duration-500 delay-200 ${heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:-translate-y-0.5">
                  Book a consultation
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center text-base font-semibold text-primary underline-offset-4 hover:underline transition-all duration-300">
                  Explore our services
                </Link>
              </div>
            </div>

            <div className={`relative h-full flex items-center justify-center transition-all duration-700 delay-200 ${heroRef.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 -translate-x-6 translate-y-6 rounded-3xl bg-primary/10 blur-3xl" aria-hidden />
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-2xl">
                  <img src={aboutHeroImage} alt="Navigating India's Regulatory Maze - Your trusted partner in compliance strategy and solutions" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background lg:py-[70px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {/* Band A */}
          <div ref={storyRef.ref} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center bg-secondary/30 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg">
            <div className={`space-y-5 lg:space-y-6 transition-all duration-700 ${storyRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-semibold text-primary">
                <span>Our Story</span>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Terz Compliance was born from a simple observation: getting products approved in India is often slower and more confusing than it should be.
                Our founders spent years inside the regulatory ecosystem, watching innovative products get stuck in paperwork and unclear rules.
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Instead of accepting that as "just the way it is", we decided to build a partner that does things differently.
                </p>
                <p>
                  We started by mapping every major Indian approval pathway - CDSCO, Legal Metrology, FSSAI, EPR and more - and breaking them into clear, repeatable steps. Then we combined this with proactive communication, transparent fees and a completely remote model so clients anywhere in the world could work with us easily.
                </p>
                <p>
                  Today, Terz Compliance supports manufacturers, importers and distributors of all sizes. Whether you're launching a single SKU or an entire portfolio, our job is to make your regulatory journey predictable, documented and stress-free.
                </p>
              </div>
            </div>
            <div className={`relative h-full transition-all duration-700 delay-200 ${storyRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}>
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-primary/10 blur-3xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-primary/15 shadow-2xl">
                <img src={ourStoryImage} alt="Simplifying India's Regulatory Approvals - Terz Compliance" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          {/* Band B - Timeline */}
          <div ref={timelineRef.ref} className="bg-secondary/40 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8 mb-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  <span>How we've grown</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">From Uttarakhand to a pan-India partner</h3>
                <p className="text-muted-foreground">
                  From a small specialist team in Uttarakhand to a pan-India regulatory partner.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {timelineItems.map((item, index) => <div key={item.year} className={`relative h-full rounded-2xl border border-primary/15 bg-background/70 p-6 shadow-md shadow-primary/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 ${timelineRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{
              transitionDelay: timelineRef.isVisible ? `${index * 100}ms` : "0ms"
            }}>
                  <div className="mb-4 h-32 w-full rounded-lg overflow-hidden">
                    <img src={item.image} alt={`${item.year} - ${item.title}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center ring-1 ring-primary/20">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-primary font-semibold">{item.year}</p>
                      <p className="text-lg font-semibold text-foreground">{item.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  {index < 3 && <div className="hidden lg:block absolute top-10 -right-3 h-px w-6 bg-gradient-to-r from-primary/40 to-primary" aria-hidden />}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef.ref} className="py-16 lg:py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div ref={productsCount.ref} className={`text-center transition-all duration-500 ${statsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                {productsCount.count}
              </p>
              <p className="text-primary-foreground/80 font-medium">Products Registered</p>
            </div>
            <div ref={clientsCount.ref} className={`text-center transition-all duration-500 delay-100 ${statsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                {clientsCount.count}
              </p>
              <p className="text-primary-foreground/80 font-medium">Global Clients</p>
            </div>
            <div ref={transparencyCount.ref} className={`text-center transition-all duration-500 delay-200 ${statsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                {transparencyCount.count}
              </p>
              <p className="text-primary-foreground/80 font-medium">Transparency</p>
            </div>
            <div ref={yearsCount.ref} className={`text-center transition-all duration-500 delay-300 ${statsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                {yearsCount.count}
              </p>
              <p className="text-primary-foreground/80 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section ref={valuesRef.ref} className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center transition-all duration-500 ${valuesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Our Mission & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => <Card key={index} className={`overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 ${valuesRef.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{
              transitionDelay: valuesRef.isVisible ? `${index * 100}ms` : "0ms"
            }}>
                  <div className="relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20"
                      style={{ backgroundImage: `url(${value.bgImage})` }}
                    />
                    <CardContent className="pt-6 relative z-10">
                      <value.icon className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </div>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section ref={feeRef.ref} className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className={`text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center transition-all duration-500 ${feeRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Transparent Fee Structure
            </h2>
            <p className={`text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto transition-all duration-500 delay-100 ${feeRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              We believe in cost-effective solutions that deliver real value. Our goal is to save you money by avoiding delays and errors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {feeFeatures.map((feature, index) => <Card key={index} className={`transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 ${feeRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{
              transitionDelay: feeRef.isVisible ? `${(index + 2) * 100}ms` : "0ms"
            }}>
                  <CardContent className="pt-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>)}
            </div>
            
            <div className={`text-center transition-all duration-500 delay-500 ${feeRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Button asChild size="lg" className="rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialRef.ref} className={`py-16 lg:py-24 bg-secondary/30 transition-all duration-700 ${testimonialRef.isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Real experiences from industry professionals who trust Terz Compliance
            </p>
            <div className="relative">
              {/* Edge Fade - Left */}
              <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
              {/* Edge Fade - Right */}
              <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
              
              <div ref={scrollContainerRef} className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40">
                <div className="flex gap-4 min-w-max px-2">
                  {testimonials.map((testimonial, index) => <Card key={index} className="w-[400px] flex-shrink-0 transition-all duration-300 hover:shadow-md hover:border-primary/20">
                      <CardContent className="pt-6 h-full flex flex-col">
                        <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">
                          "{testimonial.quote}"
                        </p>
                        <div className="pt-4">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-primary font-medium mt-1">{testimonial.role}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                          <p className="text-xs text-muted-foreground mt-2">{testimonial.date}</p>
                        </div>
                      </CardContent>
                    </Card>)}
                </div>
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => <button key={index} onClick={() => scrollToTestimonial(index)} className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"}`} aria-label={`Go to testimonial ${index + 1}`} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef.ref} className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to simplify your India market entry?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Whether you're navigating CDSCO, FSSAI or any other regulatory pathway, we're here to make your journey predictable and stress-free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full text-base px-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
                <Link to="/contact">
                  Book a Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;