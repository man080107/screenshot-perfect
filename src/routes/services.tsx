import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageIntro, SectionHeading, SiteLayout, WhatsAppButton } from "@/components/site";
import { services, whatsappHref } from "@/lib/business";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => pageHead(
    "ACMV Duct Fabrication Services Singapore | GC Fabrication",
    "Explore rectangular and round duct fabrication, transitions, fittings, volume control dampers and custom ductwork enquiries in Singapore.",
    "/services",
  ),
});

function pageHead(title: string, description: string, path: string) {
  return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: path }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: path }] };
}

function ServicesPage() {
  return (
    <SiteLayout>
      <PageIntro eyebrow="Our services" title="ACMV ductwork fabrication for project requirements" description="Explore ductwork and related components for commercial and industrial ventilation applications. Enquiries are discussed against the details you share." />
      <section>
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
          <SectionHeading eyebrow="Fabrication services" title="A considered range of ductwork solutions" description="Share your drawings, dimensions or intended application so your enquiry can be discussed in context. Custom work is subject to company capabilities." />
          <div className="mt-10 divide-y divide-border border-y border-border">
            {services.map((service, index) => (
              <article key={service.title} className="grid gap-6 py-8 sm:py-10 md:grid-cols-[72px_0.8fr_1.2fr] md:gap-8 lg:gap-12">
                <span className="display-font text-3xl font-extrabold text-accent/70">0{index + 1}</span>
                <div><p className="section-kicker">{service.category}</p><h2 className="display-font mt-2 text-2xl font-bold leading-snug">{service.title}</h2><Button asChild variant="link" className="mt-4 h-auto px-0 text-foreground"><a href={whatsappHref(`Hello GC FABRICATION PTE. LTD., I would like to enquire about ${service.title}. Could we discuss my project requirements?`)} target="_blank" rel="noreferrer">Enquire about this service <ArrowUpRight size={15} /></a></Button></div>
                <div className="grid gap-5 sm:grid-cols-[1fr_0.8fr] sm:items-center"><div><p className="text-sm leading-6 text-muted-foreground">{service.description}</p><p className="mt-4 text-sm leading-6"><span className="font-semibold">Application: </span><span className="text-muted-foreground">{service.application}</span></p></div><div className="relative"><img src={service.image} alt={service.alt} width={1024} height={1024} loading="lazy" className="aspect-[16/10] w-full object-cover" /><span className="absolute bottom-0 left-0 bg-primary px-2 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-primary-foreground">Illustrative</span></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary/65"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-12 sm:px-8 lg:px-10"><div><p className="section-kicker">Have a project in mind?</p><h2 className="display-font mt-2 text-2xl font-bold">Tell us what your project requires.</h2></div><WhatsAppButton>Discuss your requirements</WhatsAppButton></div></section>
    </SiteLayout>
  );
}