import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Layers,
  MessageCircle,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BottomCtaSection, PageIntro, SectionHeading, SiteLayout } from "@/components/site";
import { company, pageHead, services, whatsappHref } from "@/lib/business";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () =>
    pageHead(
      "ACMV Duct Fabrication Services Singapore | GC Fabrication",
      "Specialized ACMV ductwork fabrication in Singapore: Rectangular GI ducts, round spiral ducting, transitions, volume control dampers, and bespoke sheet metal engineering.",
      "/services",
    ),
});

export function ServicesPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Fabrication Services"
        title="ACMV Duct Fabrication Services in Singapore"
        description="Comprehensive sheet metal ductwork manufactured to precision engineering tolerances for commercial, industrial, and institutional ventilation systems."
        badge="Singapore Workshop"
      />

      {/* Services List Section */}
      <section className="py-14 sm:py-18 lg:py-22 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialist Capabilities"
            title="Engineered for Airtight Performance & Swift Installation"
            description="Our Kaki Bukit workshop fabricates the complete spectrum of mechanical ventilation ductwork to meet building ventilation requirements and contractor schedules."
            className="mb-14"
          />

          <div className="space-y-16 lg:space-y-20">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="grid gap-10 lg:grid-cols-12 lg:items-center scroll-mt-28 border-b border-[#DCE5EF] pb-16 last:border-b-0 last:pb-0"
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="group relative overflow-hidden rounded-xl border border-[#DCE5EF] bg-slate-100 shadow-sm aspect-16/11">
                      <picture className="block size-full">
                        <source srcSet={service.image} type="image/webp" />
                        <img
                          src={service.image.replace(".webp", ".jpg")}
                          alt={service.alt}
                          width={900}
                          height={600}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </picture>
                      <div className="absolute top-3 left-3 rounded-md bg-[#103766]/90 backdrop-blur-xs px-3 py-1 text-white text-xs font-bold uppercase tracking-wider">
                        {service.category}
                      </div>
                      <div className="absolute bottom-3 right-3 rounded-md bg-white/95 px-3 py-1 text-xs font-mono font-bold text-[#103766] shadow-xs">
                        0{index + 1} / 06
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0755A4]">
                        {service.category}
                      </span>
                      <h2 className="display-font mt-1 text-2xl sm:text-3xl font-extrabold text-[#103766]">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#172E49] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="rounded-lg bg-[#F7F9FC] border border-[#DCE5EF] p-4 space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#103766]">
                        Typical Application:
                      </p>
                      <p className="text-xs sm:text-sm text-[#61738A] leading-relaxed">
                        {service.application}
                      </p>
                    </div>

                    <div className="space-y-2 pt-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#103766]">
                        Key Specifications &amp; Features:
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#172E49]">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2">
                            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#EAF2FA] text-[#0755A4]">
                              <Check size={11} className="stroke-[3]" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#DCE5EF]">
                      <Button
                        asChild
                        className="h-10 rounded-md bg-[#0755A4] text-white hover:bg-[#064789] px-5 font-semibold text-xs sm:text-sm shadow-xs"
                      >
                        <Link to="/quote">
                          <span>Request Quote for {service.title}</span>
                          <ArrowRight size={14} className="ml-1.5" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="h-10 rounded-md border-[#DCE5EF] font-semibold text-xs sm:text-sm text-[#103766] hover:bg-slate-50"
                      >
                        <a
                          href={whatsappHref(
                            `Hello GC FABRICATION, I would like to enquire about ${service.title} for our project.`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5"
                        >
                          <MessageCircle size={15} className="text-emerald-600" />
                          <span>WhatsApp Enquire</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <BottomCtaSection
        heading="Have Complex Drawings or Urgent Deadlines?"
        description="Share your architectural CAD drawings or BOQ for direct review by our workshop engineering team in Kaki Bukit."
        buttonText="Submit Drawings for Quote"
        buttonHref="/quote"
      />
    </SiteLayout>
  );
}
