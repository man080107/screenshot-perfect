import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  Layers,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import fabricationWorkshop from "@/assets/fabrication-workshop.jpg";
import ductworkComponents from "@/assets/ductwork-components.jpg";
import roundDuctwork from "@/assets/round-ductwork.jpg";
import volumeControlDamper from "@/assets/volume-control-damper.jpg";
import ductFittingDetail from "@/assets/duct-fitting-detail.jpg";
import metalFabricationShowcase from "@/assets/metal-fabrication-showcase.jpg";
import ductWorksCatalog from "@/assets/duct-works-catalog.jpg";
import pidDuctsFlyer from "@/assets/pid-ducts-flyer.jpg";
import dampersLouvresCatalog from "@/assets/dampers-louvres-catalog.jpg";
import accessoriesCatalog from "@/assets/accessories-catalog.jpg";
import workshopFacility from "@/assets/workshop-facility.jpg";

import { Button } from "@/components/ui/button";
import { company, generalEnquiryMessage, services, whatsappHref } from "@/lib/business";
import {
  ContactBand,
  SectionHeading,
  ServiceCard,
  SiteLayout,
  WhatsAppButton,
} from "@/components/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "GC Fabrication | ACMV Duct Fabrication Singapore" },
      {
        name: "description",
        content:
          "Professional ACMV duct fabrication and ductwork solutions for commercial and industrial applications in Singapore. Galvanized Iron (GI), Pre-Insulated Ducts (PID), volume control dampers and fittings.",
      },
      {
        property: "og:title",
        content: "GC Fabrication | ACMV Duct Fabrication Singapore",
      },
      {
        property: "og:description",
        content:
          "Precision ACMV ductwork fabrication, GI & PID ducts, volume control dampers, and custom engineering solutions in Singapore.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "GC FABRICATION PTE. LTD.",
          telephone: "+65 8969 3747",
          email: "sales.gcfabrication@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "8 Kaki Bukit Ave 4, #04-02 Premier @ Kaki Bukit",
            addressLocality: "Singapore",
            postalCode: "415875",
            addressCountry: "SG",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "1.3396",
            longitude: "103.9048",
          },
          url: "https://gcfabrication.sg",
          openingHours: "Mo-Sa 08:00-18:00",
          priceRange: "$$",
          areaServed: "Singapore",
          description:
            "ACMV duct fabrication, Galvanized Iron (GI) ductwork, Pre-Insulated Duct (PID) systems, Volume Control Dampers, and duct accessories for commercial and industrial installations in Singapore.",
        }),
      },
    ],
  }),
});

const valuePillars = [
  {
    icon: Ruler,
    num: "01",
    title: "Precision Dimensional Fabrication",
    description:
      "Fabricated strictly according to architectural CAD drawings, schedules, and site measurements for accurate on-site installation.",
  },
  {
    icon: Layers,
    num: "02",
    title: "GI & PID Material Expertise",
    description:
      "Comprehensive capabilities across Galvanized Iron (GI), lightweight Pre-Insulated Ducts (PID), and Stainless Steel (SS) systems.",
  },
  {
    icon: Factory,
    num: "03",
    title: "Dedicated Singapore Workshop",
    description:
      "In-house machinery and experienced sheet metal craftsmen at Kaki Bukit ensuring rapid fabrication turnarounds.",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Singapore Standards Compliance",
    description:
      "Duct construction, flange connections, and damper assemblies engineered to meet rigorous commercial ventilation standards.",
  },
];

export function HomePage() {
  return (
    <SiteLayout>
      {/* =========================================================================
          HERO SECTION — High-impact Industrial Editorial Composition
          ========================================================================= */}
      <section className="relative min-h-[640px] lg:min-h-[720px] overflow-hidden bg-[#10243A] text-white flex items-center">
        {/* Real Workshop Background Photo */}
        <img
          src={fabricationWorkshop}
          alt="Technician assembling precision rectangular ductwork in GC Fabrication workshop"
          width={1536}
          height={1024}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover object-center opacity-40 mix-blend-luminosity"
        />

        {/* Industrial Gradients & Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10243A] via-[#10243A]/90 to-[#10243A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10243A] via-transparent to-transparent" />
        <div className="industrial-grid-dark absolute inset-0 opacity-25 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-xs text-white">
                <span className="size-2 rounded-full bg-[#E87932] animate-pulse" />
                <span>GI & PID Duct Fabrication Specialist · Singapore</span>
              </div>

              {/* Headline */}
              <h1 className="display-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                Precision Ductwork.
                <br />
                <span className="text-[#E87932]">Built for Performance.</span>
              </h1>

              {/* Supporting Text */}
              <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
                Professional ACMV duct fabrication and ductwork solutions for commercial and
                industrial applications in Singapore.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="h-12 sm:h-14 bg-[#E87932] text-white hover:bg-[#d56b27] px-7 font-bold text-sm sm:text-base shadow-lg"
                >
                  <Link to="/quote" className="inline-flex items-center gap-2">
                    <span>REQUEST A QUOTE</span>
                    <ArrowRight size={18} />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 sm:h-14 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white px-6 font-semibold text-sm sm:text-base backdrop-blur-xs"
                >
                  <Link to="/services" className="inline-flex items-center gap-2">
                    <span>EXPLORE OUR SERVICES</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 sm:h-14 border-emerald-500/50 text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 hover:text-white px-5 font-semibold text-sm sm:text-base"
                >
                  <a
                    href={whatsappHref(generalEnquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle size={18} className="text-emerald-400" />
                    <span>WhatsApp Direct</span>
                  </a>
                </Button>
              </div>

              {/* Quick credential highlights */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E87932] shrink-0" />
                  <span>Galvanized & PID Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E87932] shrink-0" />
                  <span>Kaki Bukit Workshop</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={16} className="text-[#E87932] shrink-0" />
                  <span>Rapid Turnaround</span>
                </div>
              </div>
            </div>

            {/* Right Hero Card — Workshop Staging Snapshot */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="relative rounded-xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md shadow-2xl">
                <div className="overflow-hidden rounded-lg aspect-[4/3] relative">
                  <img
                    src={ductworkComponents}
                    alt="Rectangular ductwork with TDF flanges on workshop table"
                    width={600}
                    height={450}
                    className="size-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#E87932]">
                      Workshop Assembly
                    </span>
                    <p className="text-sm font-bold leading-tight">
                      Galvanized Rectangular Ducts with TDF Flanges
                    </p>
                  </div>
                </div>
                <div className="mt-3 px-2 pb-1 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin size={13} className="text-[#E87932]" />
                    Premier @ Kaki Bukit
                  </span>
                  <Link
                    to="/gallery"
                    className="font-semibold text-[#E87932] hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>View Gallery</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPANY INTRODUCTION — Editorial Layout with Genuine Workshop Assets
          ========================================================================= */}
      <section id="company-introduction" className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Visual Image Collage with Real Photographs */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[4/3]">
                <img
                  src={metalFabricationShowcase}
                  alt="GC Fabrication metal fabrication showcase featuring angle bars, ducts, insulation and work tables"
                  width={800}
                  height={600}
                  className="size-full object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-md bg-[#10243A]/90 backdrop-blur-xs px-3.5 py-2 text-white shadow-md">
                  <span className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#E87932]">
                    Fabrication Standards
                  </span>
                  <p className="display-font text-sm font-bold">GI, PID & Metal Engineering</p>
                </div>
              </div>

              {/* Floating secondary real asset */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 rounded-xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={roundDuctwork}
                  alt="Round spiral ducts"
                  width={400}
                  height={300}
                  className="aspect-[4/3] object-cover"
                />
                <div className="bg-[#10243A] p-2 text-center text-white text-xs font-bold">
                  Spiral Round Ducts
                </div>
              </div>
            </div>

            {/* Introduction Copy */}
            <div className="lg:col-span-6 lg:pl-6 space-y-6">
              <div>
                <span className="section-kicker">Company Introduction</span>
                <h2 className="display-font mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10243A] leading-tight">
                  Engineering Quality Through Precision Fabrication
                </h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[#252B32]">
                <strong className="text-[#10243A]">GC FABRICATION PTE. LTD.</strong> is a dedicated
                Singapore industrial fabrication workshop specializing in ACMV (Air-Conditioning and
                Mechanical Ventilation) duct systems and sheet metal engineering solutions.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-[#697586]">
                From commercial office developments and shopping malls to cleanrooms and industrial
                plants, our workshop fabricates high-specification rectangular GI ducts, round
                spiral duct runs, pre-insulated duct (PID) assemblies, and volume control dampers.
                Every component is engineered to tight dimensional tolerances, ensuring seamless
                on-site jointing and optimal aerodynamic airflow.
              </p>

              {/* Value list */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-200/80">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#E87932]">
                    GI & PID
                  </p>
                  <p className="display-font text-sm font-bold text-[#10243A] mt-0.5">
                    Dual Material Systems
                  </p>
                  <p className="text-xs text-[#697586] mt-1">
                    Galvanized iron & pre-insulated PIR foam duct boards.
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-200/80">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#E87932]">
                    Fast Turnaround
                  </p>
                  <p className="display-font text-sm font-bold text-[#10243A] mt-0.5">
                    Direct Workshop Output
                  </p>
                  <p className="text-xs text-[#697586] mt-1">
                    Urgent modifications and schedule-critical fabrications.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                <Button
                  asChild
                  className="h-11 bg-[#10243A] text-white hover:bg-[#1a3859] px-6 font-semibold"
                >
                  <Link to="/about" className="inline-flex items-center gap-2">
                    <span>Learn More About Us</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 border-slate-300 text-slate-800 hover:bg-slate-50 font-semibold"
                >
                  <Link to="/quote">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES SECTION — 6 Distinctive Service Cards with Real Assets
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Core Fabrication Services"
              title="Comprehensive ACMV Ductwork Solutions"
              description="Manufactured in our Singapore facility to exact client specifications, project schedules, and dimensional tolerances."
            />
            <Button
              asChild
              variant="outline"
              className="self-start md:self-end h-10 border-slate-300 font-semibold shrink-0"
            >
              <Link to="/services" className="inline-flex items-center gap-2">
                <span>View All Services</span>
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAPABILITIES & VALUE PILLARS — Engineering Discipline
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#10243A] text-white relative overflow-hidden">
        <div className="industrial-grid-dark absolute inset-0 opacity-15 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#E87932] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
              Why GC Fabrication
            </span>
            <h2 className="display-font mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              A Practical Approach to Industrial Engineering
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Every duct system we fabricate balances airtight performance, structural rigidity, and
              swift site installation.
            </p>
          </div>

          <div className="grid gap-px bg-slate-800 rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {valuePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="bg-[#10243A] p-7 sm:p-8 flex flex-col justify-between hover:bg-[#142c47] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="flex size-11 items-center justify-center rounded-lg bg-white/10 text-[#E87932]">
                        <Icon size={22} />
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {pillar.num}
                      </span>
                    </div>
                    <h3 className="display-font text-lg font-bold text-white leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRODUCT SHOWCASE PREVIEW — Real Product Catalogues
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Product Catalogue"
              title="Precision Components for Commercial Ventilation"
              description="Browse standard and project-specific components available for fabrication and supply."
            />
            <Button
              asChild
              className="self-start md:self-end h-10 bg-[#E87932] text-white hover:bg-[#d56b27] font-semibold shrink-0"
            >
              <Link to="/products" className="inline-flex items-center gap-2">
                <span>Browse Products</span>
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>

          {/* 4 Feature Cards with Real Catalog Sheets */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/products"
              className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#E87932] transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={ductWorksCatalog}
                  alt="Duct works and fittings catalog"
                  width={500}
                  height={375}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#E87932]">
                  Duct Works
                </span>
                <h3 className="display-font font-bold text-[#10243A] text-base mt-1 group-hover:text-[#E87932] transition-colors">
                  Fittings, Elbows & Tees
                </h3>
                <p className="text-xs text-[#697586] mt-1.5 leading-relaxed">
                  Straight ducts, elbows, reducers, tees, and cross fittings.
                </p>
              </div>
            </Link>

            <Link
              to="/products"
              className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#E87932] transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={pidDuctsFlyer}
                  alt="Pre-insulated ducting system showcase"
                  width={500}
                  height={375}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#E87932]">
                  PID Ducts
                </span>
                <h3 className="display-font font-bold text-[#10243A] text-base mt-1 group-hover:text-[#E87932] transition-colors">
                  Pre-Insulated Duct Systems
                </h3>
                <p className="text-xs text-[#697586] mt-1.5 leading-relaxed">
                  Lightweight PIR duct board, high thermal insulation and airtight joints.
                </p>
              </div>
            </Link>

            <Link
              to="/products"
              className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#E87932] transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={dampersLouvresCatalog}
                  alt="Dampers and grilles catalog"
                  width={500}
                  height={375}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#E87932]">
                  Air Distribution
                </span>
                <h3 className="display-font font-bold text-[#10243A] text-base mt-1 group-hover:text-[#E87932] transition-colors">
                  Dampers, Diffusers & Louvres
                </h3>
                <p className="text-xs text-[#697586] mt-1.5 leading-relaxed">
                  Square/round VCD & NRD, 4-way diffusers, and weather louvres.
                </p>
              </div>
            </Link>

            <Link
              to="/products"
              className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs hover:border-[#E87932] transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={accessoriesCatalog}
                  alt="ACMV accessories and hardware catalog"
                  width={500}
                  height={375}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#E87932]">
                  Hardware & Tapes
                </span>
                <h3 className="display-font font-bold text-[#10243A] text-base mt-1 group-hover:text-[#E87932] transition-colors">
                  ACMV Accessories & Doors
                </h3>
                <p className="text-xs text-[#697586] mt-1.5 leading-relaxed">
                  Access doors, TDF corners, unistrut, clips, and insulation tapes.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GALLERY PREVIEW SECTION — Real Workshop & Product Images
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Workshop In Action"
              title="Real Company Workshop & Fabrications"
              description="A closer look inside GC Fabrication's workshop facilities and fabricated components."
            />
            <Button
              asChild
              variant="outline"
              className="self-start md:self-end h-10 border-slate-300 font-semibold shrink-0"
            >
              <Link to="/gallery" className="inline-flex items-center gap-2">
                <span>Explore Full Gallery</span>
                <ArrowRight size={15} />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Link
              to="/gallery"
              className="group relative overflow-hidden rounded-xl bg-slate-900 aspect-[4/3] shadow-md"
            >
              <img
                src={workshopFacility}
                alt="GC Fabrication workshop floor"
                width={800}
                height={600}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#E87932]">
                  Facility
                </span>
                <p className="display-font text-base font-bold">Workshop Floor & Staging</p>
              </div>
            </Link>

            <Link
              to="/gallery"
              className="group relative overflow-hidden rounded-xl bg-slate-900 aspect-[4/3] shadow-md"
            >
              <img
                src={roundDuctwork}
                alt="Round spiral ducts and reducers"
                width={800}
                height={600}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#E87932]">
                  Spiral Ducts
                </span>
                <p className="display-font text-base font-bold">Round Duct Runs & Reducers</p>
              </div>
            </Link>

            <Link
              to="/gallery"
              className="group relative overflow-hidden rounded-xl bg-slate-900 aspect-[4/3] shadow-md"
            >
              <img
                src={volumeControlDamper}
                alt="Volume control damper detail"
                width={800}
                height={600}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#E87932]">
                  Airflow Control
                </span>
                <p className="display-font text-base font-bold">Volume Control Dampers (VCD)</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONVERSION SECTION — Direct Action Band
          ========================================================================= */}
      <ContactBand />
    </SiteLayout>
  );
}
