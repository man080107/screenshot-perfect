import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronRight, Factory, Ruler, Settings2, Workflow } from "lucide-react";

import fabricationWorkshop from "@/assets/fabrication-workshop.jpg";
import ductworkComponents from "@/assets/ductwork-components.jpg";
import ductFittingDetail from "@/assets/duct-fitting-detail.jpg";
import { Button } from "@/components/ui/button";
import { services, whatsappHref, generalEnquiryMessage } from "@/lib/business";
import { ContactBand, ScrollCue, SectionHeading, ServiceCard, SiteLayout, WhatsAppButton } from "@/components/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "GC Fabrication | ACMV Duct Fabrication Singapore" },
      { name: "description", content: "Professional ACMV duct fabrication and ductwork solutions for commercial and industrial applications in Singapore." },
      { property: "og:title", content: "GC Fabrication | ACMV Duct Fabrication Singapore" },
      { property: "og:description", content: "Professional ACMV duct fabrication and ductwork solutions in Singapore." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "GC FABRICATION PTE. LTD.",
        telephone: "+65 8969 3747",
        address: {
          "@type": "PostalAddress",
          streetAddress: "8 Kaki Bukit Ave 4, #04-02, Premier @ Kaki Bukit",
          addressLocality: "Singapore",
          postalCode: "415875",
          addressCountry: "SG",
        },
        areaServed: "Singapore",
        description: "ACMV duct fabrication and related ductwork solutions for commercial and industrial applications.",
      }),
    }],
  }),
});

const values = [
  { icon: Ruler, title: "Precision-focused fabrication", description: "Ductwork shaped around the details of each project requirement." },
  { icon: Workflow, title: "Project-oriented solutions", description: "Configurations considered with your drawings and application in mind." },
  { icon: Settings2, title: "Professional approach", description: "Clear discussions about the ductwork and components you need." },
  { icon: Factory, title: "Responsive communication", description: "Speak directly with the team about your fabrication enquiry." },
];

const galleryTeasers = [
  { title: "Fabrication in focus", image: fabricationWorkshop, alt: "Illustrative workshop scene with duct fabrication in progress" },
  { title: "Duct transitions", image: ductworkComponents, alt: "Illustrative fabricated rectangular duct transitions" },
  { title: "Fitting details", image: ductFittingDetail, alt: "Illustrative ventilation duct fittings on a workbench" },
];

function HomePage() {
  return (
    <SiteLayout>
      <section className="relative min-h-[620px] overflow-hidden bg-primary text-primary-foreground sm:min-h-[680px] lg:min-h-[700px]">
        <img src={fabricationWorkshop} alt="Illustrative industrial workshop showing ventilation duct fabrication" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 size-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/20" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center px-5 py-16 sm:min-h-[680px] sm:px-8 lg:min-h-[700px] lg:px-10">
          <div className="max-w-3xl reveal-up">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-accent"><span className="size-2 bg-accent" /> ACMV ductwork · Singapore</p>
            <h1 className="display-font mt-6 text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">Precision Ductwork.<br /><span className="text-accent">Built for Performance.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/85 sm:text-lg sm:leading-8">Professional ACMV duct fabrication and ductwork solutions for commercial and industrial applications in Singapore.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppButton>Request a Quote</WhatsAppButton>
              <Button asChild variant="outline" className="min-h-12 rounded-none border-primary-foreground/40 bg-primary/20 px-5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/services">Explore Our Services <ArrowRight size={16} /></Link></Button>
            </div>
            <p className="mt-5 text-xs text-primary-foreground/65">Illustrative workshop image. Not a representation of company projects.</p>
          </div>
          <div className="mt-14 flex items-end justify-between border-t border-primary-foreground/25 pt-4">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-primary-foreground/75">Fabrication solutions for your project</span>
            <ScrollCue />
          </div>
        </div>
      </section>

      <section id="company-introduction" className="scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden bg-secondary">
            <img src={ductworkComponents} alt="Illustrative rectangular ductwork products arranged in a fabrication workshop" width={1024} height={1024} loading="lazy" className="aspect-[4/3] size-full object-cover" />
            <span className="absolute bottom-0 left-0 bg-primary px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground">Illustrative product image</span>
            <div className="absolute right-0 top-0 bg-accent px-5 py-4 text-accent-foreground"><span className="display-font block text-lg font-extrabold">GC</span><span className="text-[0.58rem] font-semibold uppercase tracking-[0.12em]">Fabrication</span></div>
          </div>
          <div>
            <SectionHeading eyebrow="Company introduction" title="Engineering quality through precision fabrication" />
            <p className="mt-5 leading-7 text-muted-foreground">GC FABRICATION PTE. LTD. provides fabrication solutions for ACMV ductwork and related engineering applications. We focus on practical ductwork solutions shaped around project requirements.</p>
            <p className="mt-4 leading-7 text-muted-foreground">From standard duct configurations to project-specific components, start a conversation about the drawings, dimensions and requirements for your application.</p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent">Learn more about us <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/65">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="What we fabricate" title="Ductwork solutions for your application" description="A range of ACMV ductwork and related components. Tell us about your requirements to discuss what suits your project." /><Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">All services <ArrowRight size={16} /></Link></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((item) => <ServiceCard key={item.title} {...item} />)}</div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <SectionHeading eyebrow="How we work" title="A practical approach to fabrication" description="Our focus is on understanding the ductwork you need and communicating clearly about your enquiry." />
          <div className="mt-10 grid gap-px bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">{values.map(({ icon: Icon, title, description }, index) => <div key={title} className="min-h-48 bg-primary p-6 sm:p-7"><span className="flex size-11 items-center justify-center border border-primary-foreground/25 text-accent"><Icon size={22} /></span><span className="mt-6 block text-xs font-semibold text-primary-foreground/45">0{index + 1}</span><h3 className="display-font mt-2 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/65">{description}</p></div>)}</div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="Ductwork solutions" title="Components for ventilation systems" description="Browse common product categories or ask us about a project-specific requirement." /><Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">Browse products <ArrowRight size={16} /></Link></div>
          <div className="mt-9 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">{["Rectangular ducts", "Round ducts", "Transitions", "Fittings", "Volume control dampers", "Custom components"].map((item, index) => <Link to="/products" key={item} className="group flex min-h-32 flex-col justify-between bg-background p-4 transition-colors hover:bg-secondary sm:p-5"><span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span><span className="display-font text-sm font-bold leading-snug">{item}</span><ArrowUpRight size={16} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>)}</div>
        </div>
      </section>

      <section className="bg-secondary/65">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="Workshop & products" title="A closer look at ductwork" description="Illustrative industrial visuals show the kinds of duct components and fabrication environments relevant to our services." /><Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">View gallery <ArrowRight size={16} /></Link></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{galleryTeasers.map((item) => <Link to="/gallery" key={item.title} className="group relative overflow-hidden bg-primary"><img src={item.image} alt={item.alt} width={1024} height={1024} loading="lazy" className="aspect-[4/3] size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" /><span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-primary/95 to-primary/0 px-5 pb-4 pt-14 text-primary-foreground"><span><span className="block text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-accent">Illustrative image</span><span className="display-font mt-1 block font-bold">{item.title}</span></span><ChevronRight size={18} /></span></Link>)}</div>
        </div>
      </section>

      <ContactBand />
      <div className="sr-only"><a href={whatsappHref(generalEnquiryMessage)}>WhatsApp enquiry</a></div>
    </SiteLayout>
  );
}