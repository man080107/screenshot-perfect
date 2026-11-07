import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  Factory,
  FileText,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import fabricationWorkshop from "@/assets/fabrication-workshop.jpg";
import ductworkComponents from "@/assets/ductwork-components.jpg";
import workshopFacility from "@/assets/workshop-facility.jpg";
import metalFabricationShowcase from "@/assets/metal-fabrication-showcase.jpg";
import whyChooseGc from "@/assets/why-choose-gc.jpg";

import { Button } from "@/components/ui/button";
import {
  FeatureList,
  PageIntro,
  SectionHeading,
  SiteLayout,
  WhatsAppButton,
} from "@/components/site";
import { company, generalEnquiryMessage, pageHead, whatsappHref } from "@/lib/business";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    pageHead(
      "About GC Fabrication | ACMV Duct Fabrication Singapore",
      "Learn about GC FABRICATION PTE. LTD., a premier Singapore industrial fabrication business specialized in ACMV ductwork, GI & PID systems, and custom engineering.",
      "/about",
    ),
});

const capabilities = [
  "Rectangular duct fabrication in Galvanized Iron (GI) to Singapore specifications",
  "Pre-Insulated Duct (PID / PIR) systems for high thermal efficiency",
  "Round spiral ductwork and custom circular transition pieces",
  "Duct transitions, offset reducers, elbows, and turning vanes",
  "Volume control dampers (VCD) and non-return dampers (NRD)",
  "Bespoke engineering metalwork, working tables, and plenum boxes",
];

export function AboutPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="About Us"
        title="Engineering Precision Ductwork for Singapore"
        description="GC FABRICATION PTE. LTD. provides commercial and industrial ACMV duct fabrication, backed by dedicated workshop machinery and sheet metal craftsmanship in Kaki Bukit."
        badge="Singapore Workshop"
      />

      {/* Section 1: Company Profile */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="section-kicker">Company Overview</span>
              <h2 className="display-font text-3xl sm:text-4xl font-extrabold text-[#10243A] leading-tight">
                Dedicated to ACMV Fabrication & Sheet Metal Excellence
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-[#252B32]">
                Operating from Premier @ Kaki Bukit,{" "}
                <strong className="text-[#10243A]">GC FABRICATION PTE. LTD.</strong> is focused on
                providing reliable, accurately fabricated ducting solutions for Singapore’s
                mechanical ventilation contractors, ACMV installers, and engineering builders.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-[#697586]">
                Our fabrication team approaches every project through the lens of buildability and
                performance. Whether working from schematic engineer drawings, detailed BIM/CAD
                models, or site measurements, we ensure every duct piece, flange, and damper is
                manufactured with precision dimensional fidelity so on-site installation proceeds
                smoothly and without delays.
              </p>

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#E87932]">
                  Core Specializations
                </p>
                <FeatureList items={capabilities.slice(0, 4)} />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  asChild
                  className="h-11 bg-[#E87932] text-white hover:bg-[#d56b27] px-6 font-semibold"
                >
                  <Link to="/quote">Request a Project Quote</Link>
                </Button>
                <Button asChild variant="outline" className="h-11 border-slate-300 font-semibold">
                  <a
                    href={whatsappHref(generalEnquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle size={16} className="text-emerald-600" />
                    <span>WhatsApp Consultation</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Images */}
            <div className="lg:col-span-5 space-y-4">
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg bg-slate-100">
                <img
                  src={fabricationWorkshop}
                  alt="Technician assembling rectangular ductwork in GC Fabrication workshop"
                  width={800}
                  height={550}
                  className="size-full object-cover aspect-[4/3]"
                />
                <div className="p-4 bg-white border-t border-slate-100">
                  <p className="display-font text-sm font-bold text-[#10243A]">
                    In-House Fabrication Workshop
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    8 Kaki Bukit Ave 4, #04-02 Premier @ Kaki Bukit, Singapore 415875
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md bg-slate-100">
                <img
                  src={metalFabricationShowcase}
                  alt="GC Fabrication workshop metal showcase"
                  width={800}
                  height={400}
                  className="size-full object-cover aspect-[16/9]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How We Work — Practical Engineering Discipline */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#10243A] text-white relative overflow-hidden">
        <div className="industrial-grid-dark absolute inset-0 opacity-15 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#E87932] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
              Our Methodology
            </span>
            <h2 className="display-font mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
              Practical Engineering at Every Step
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Clear communication, accurate take-offs, and rigorous workshop fabrication ensure
              timely handover.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
              <span className="flex size-11 items-center justify-center rounded-lg bg-white/10 text-[#E87932] mb-5">
                <FileText size={22} />
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">STAGE 01</span>
              <h3 className="display-font text-lg font-bold text-white mt-1">
                Drawing & Specification Review
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                We review your CAD plans, BOQ schedules, and site requirements to establish accurate
                material specifications and duct routing geometry.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
              <span className="flex size-11 items-center justify-center rounded-lg bg-white/10 text-[#E87932] mb-5">
                <Wrench size={22} />
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">STAGE 02</span>
              <h3 className="display-font text-lg font-bold text-white mt-1">
                Precision Workshop Fabrication
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Using quality Galvanized Iron and PID duct board, our craftsmen shear, notch, fold,
                and assemble airtight ducts with TDF flanges.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs">
              <span className="flex size-11 items-center justify-center rounded-lg bg-white/10 text-[#E87932] mb-5">
                <ShieldCheck size={22} />
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">STAGE 03</span>
              <h3 className="display-font text-lg font-bold text-white mt-1">
                Staging & Site Handover
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                Completed ducts, transitions, and dampers are labeled and staged at our Kaki Bukit
                workshop ready for prompt collection or site delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Verified Workshop Information Card */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="section-kicker">Verified Singapore Business</span>
                <h3 className="display-font text-2xl sm:text-3xl font-bold text-[#10243A]">
                  GC FABRICATION PTE. LTD.
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#252B32] pt-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={18} className="text-[#E87932] shrink-0 mt-0.5" />
                    <span>
                      <strong>Address:</strong>
                      <br />
                      {company.address}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone size={18} className="text-[#E87932] shrink-0 mt-0.5" />
                    <span>
                      <strong>Phone / WhatsApp:</strong>
                      <br />
                      {company.phone}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock size={18} className="text-[#E87932] shrink-0 mt-0.5" />
                    <span>
                      <strong>Operating Hours:</strong>
                      <br />
                      Mon – Sat: 8:00 AM – 6:00 PM
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Factory size={18} className="text-[#E87932] shrink-0 mt-0.5" />
                    <span>
                      <strong>Facility Type:</strong>
                      <br />
                      Industrial ACMV Ductwork Workshop
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Button
                  asChild
                  className="h-11 bg-[#E87932] text-white hover:bg-[#d56b27] font-semibold"
                >
                  <Link to="/quote">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" className="h-11 border-slate-300 font-semibold">
                  <a
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Google Maps Directions</span>
                    <ArrowRight size={14} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
