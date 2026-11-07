import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, FileText, ShieldCheck } from "lucide-react";

import fabricationWorkshop from "@/assets/fabrication-workshop.jpg";
import ductworkComponents from "@/assets/ductwork-components.jpg";
import { FeatureList, PageIntro, SectionHeading, SiteLayout, WhatsAppButton } from "@/components/site";
import { pageHead } from "@/lib/business";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => pageHead("About GC Fabrication | Singapore ACMV Ductwork", "Learn about GC FABRICATION PTE. LTD. and its focus on ACMV duct fabrication and project-oriented ductwork solutions in Singapore.", "/about"),
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageIntro eyebrow="About us" title="About GC FABRICATION PTE. LTD." description="A Singapore-based fabrication business focused on ACMV ductwork and related engineering fabrication solutions." />
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20 lg:px-10 lg:py-24">
          <div><SectionHeading eyebrow="Company overview" title="Ductwork solutions grounded in project requirements" /><p className="mt-5 leading-7 text-muted-foreground">GC FABRICATION PTE. LTD. provides fabrication solutions for ACMV ductwork and related engineering applications. The work starts with understanding what the project calls for, including the relevant drawings, dimensions and intended application.</p><p className="mt-4 leading-7 text-muted-foreground">The service range includes rectangular and round ductwork, transitions, fittings, volume control dampers and custom ductwork enquiries, subject to company capabilities.</p><div className="mt-8"><WhatsAppButton>Discuss a requirement</WhatsAppButton></div></div>
          <div className="relative"><img src={fabricationWorkshop} alt="Illustrative fabrication workshop scene showing ductwork being assembled" width={1536} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover" /><span className="absolute bottom-0 left-0 bg-primary px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground">Illustrative workshop image</span></div>
        </div>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10 lg:py-24">
          <div><p className="section-kicker">Our approach</p><h2 className="display-font mt-3 text-3xl font-bold leading-tight sm:text-4xl">Practical communication at every step</h2><p className="mt-5 leading-7 text-primary-foreground/70">Fabrication enquiries are considered in the context of the project details shared, with a focus on clear, direct communication.</p></div>
          <div className="grid gap-7 sm:grid-cols-3">{[
            { icon: FileText, title: "Requirements first", body: "Discuss drawings, dimensions and project details." },
            { icon: Compass, title: "Application-led", body: "Consider duct configuration in context of its intended use." },
            { icon: ShieldCheck, title: "Capabilities in mind", body: "Custom requests are reviewed subject to company capabilities." },
          ].map(({ icon: Icon, title, body }) => <div key={title} className="border-t border-primary-foreground/25 pt-5"><Icon size={22} className="text-accent" /><h3 className="display-font mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/65">{body}</p></div>)}</div>
        </div>
      </section>
      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div className="relative order-2 lg:order-1"><img src={ductworkComponents} alt="Illustrative rectangular ducts and transition components" width={1024} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover" /><span className="absolute bottom-0 left-0 bg-primary px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground">Illustrative product image</span></div>
          <div className="order-1 lg:order-2"><SectionHeading eyebrow="Fabrication capabilities" title="A range of ACMV ductwork and components" /><div className="mt-6"><FeatureList items={["Rectangular and round ductwork fabrication", "Duct transitions and associated fittings", "Volume control dampers for airflow regulation", "Custom ductwork enquiries considered against project requirements"]} /></div><a href="/services" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">Explore our services <ArrowRight size={16} /></a></div>
        </div>
      </section>
      <section className="border-t border-border bg-secondary/60"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10 sm:px-8 lg:px-10"><p className="max-w-xl text-sm leading-6 text-muted-foreground">For a direct discussion about your ductwork application, contact GC Fabrication in Singapore.</p><WhatsAppButton>Get in touch</WhatsAppButton></div></section>
    </SiteLayout>
  );
}