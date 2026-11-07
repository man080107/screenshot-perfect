import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageIntro, SiteLayout } from "@/components/site";
import { products, whatsappHref } from "@/lib/business";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Ductwork Products & Solutions Singapore | GC Fabrication" },
      { name: "description", content: "Browse rectangular ducts, round ducts, transitions, fittings, volume control dampers and custom fabricated component enquiries." },
      { property: "og:title", content: "Ductwork Products & Solutions Singapore | GC Fabrication" },
      { property: "og:description", content: "Browse ACMV ductwork categories and enquire about project requirements." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

function ProductsPage() {
  return (
    <SiteLayout>
      <PageIntro eyebrow="Products & ductwork solutions" title="Ductwork components for your project" description="Explore common ductwork categories and enquire about the product or configuration you have in mind. Availability and suitability are discussed against project requirements." />
      <section>
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5"><div><p className="section-kicker">Product catalogue</p><h2 className="display-font mt-2 text-2xl font-bold">Ductwork categories</h2></div><span className="text-sm text-muted-foreground">Enquire for project details</span></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article key={product.name} className="group border border-border bg-card transition-colors hover:border-accent/60">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary"><img src={product.image} alt={product.alt} width={1024} height={1024} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" /><span className="absolute left-3 top-3 bg-primary px-2.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-primary-foreground">Illustrative</span><span className="absolute bottom-3 right-3 flex size-9 items-center justify-center bg-background/90 text-xs font-bold">0{index + 1}</span></div>
                <div className="p-5 sm:p-6"><h2 className="display-font text-xl font-bold">{product.name}</h2><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{product.description}</p><Button asChild className="mt-5 min-h-11 w-full justify-between rounded-none bg-primary px-4 text-primary-foreground hover:bg-primary/90"><a href={whatsappHref(`Hello GC FABRICATION PTE. LTD., I would like to enquire about ${product.name}. Could you please share more information?`)} target="_blank" rel="noreferrer">Enquire about this product <ArrowUpRight size={16} /></a></Button></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary/65"><div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10"><p className="text-sm leading-6 text-muted-foreground">Images are illustrative and do not represent confirmed GC Fabrication projects. No pricing or technical specifications are listed; please enquire about your requirements.</p></div></section>
    </SiteLayout>
  );
}