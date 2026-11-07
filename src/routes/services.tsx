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
import { PageIntro, SectionHeading, SiteLayout, WhatsAppButton } from "@/components/site";
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
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  className="grid gap-10 lg:grid-cols-12 lg:items-center scroll-mt-28 border-b border-slate-200 pb-16 last:border-b-0 last:pb-0"
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md aspect-[16/11]">
                      <img
                        src={service.image}
                        alt={service.alt}
                        width={900}
                        height={600}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 rounded-md bg-[#10243A]/90 backdrop-blur-xs px-3 py-1.5 text-white text-xs font-bold uppercase tracking-wider">
                        {service.category}
                      </div>
                      <div className="absolute bottom-3 right-3 rounded-md bg-white/95 px-3 py-1 text-xs font-mono font-bold text-[#10243A] shadow-xs">
                        0{index + 1} / 06
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E87932]">
                        {service.category}
                      </span>
                      <h2 className="display-font mt-1 text-2xl sm:text-3xl font-extrabold text-[#10243A]">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-base text-[#252B32] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-4 space-y-2.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Typical Application:
                      </p>
                      <p className="text-sm text-[#697586] leading-relaxed">
                        {service.application}
                      </p>
                    </div>

                    <div className="space-y-2 pt-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#10243A]">
                        Key Specifications & Features:
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#252B32]">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2">
                            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                              <Check size={11} className="stroke-[3]" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
                      <Button
                        asChild
                        className="h-10 bg-[#E87932] text-white hover:bg-[#d56b27] px-5 font-semibold text-xs sm:text-sm"
                      >
                        <Link to="/quote">
                          <span>Request Quote for {service.title}</span>
                          <ArrowRight size={14} className="ml-1.5" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="h-10 border-slate-300 font-semibold text-xs sm:text-sm text-slate-700 hover:bg-slate-50"
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
      <section className="bg-slate-50 border-t border-slate-200 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-2xl bg-[#10243A] p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E87932]">
                Custom Fabrication Enquiries
              </span>
              <h3 className="display-font text-2xl sm:text-3xl font-bold">
                Have Complex Drawings or Urgent Deadlines?
              </h3>
              <p className="text-sm text-slate-300">
                Share your architectural CAD drawings or BOQ for direct review by our workshop team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button
                asChild
                className="h-12 bg-[#E87932] text-white hover:bg-[#d56b27] px-6 font-semibold"
              >
                <Link to="/quote">Submit Drawings for Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 border-white/30 text-white bg-white/10 hover:bg-white/20 font-semibold px-5"
              >
                <a
                  href={whatsappHref(
                    "Hello GC FABRICATION, I have project drawings ready for an ACMV quotation review.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle size={18} className="text-emerald-400" />
                  <span>WhatsApp Drawings</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
