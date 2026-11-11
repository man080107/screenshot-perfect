import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Box,
  Building2,
  Clock,
  Cog,
  Fan,
  Handshake,
  Layers,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
  Wind,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { assets, pageHead } from "@/lib/business";
import { BottomTrustStrip, SiteLayout } from "@/components/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    pageHead(
      "About Us | GC Fabrication - Your Trusted Partner in HVAC & Industrial Solutions",
      "Learn about GC Fabrication Pte. Ltd., a Singapore-based specialist in HVAC ducting, custom fabrication, and industrial supply solutions for commercial and industrial projects.",
      "/about",
    ),
});

export function AboutPage() {
  return (
    <SiteLayout>
      {/* =========================================================================
          SECTION 1 — INTRODUCTION HERO (Split Layout matching Reference 1)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#F7F9FC] via-[#F7F9FC] to-[#EDF3FA] border-b border-[#DCE5EF]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
            {/* Left Column: Heading, Description & 4 Trust Indicators */}
            <div className="py-12 sm:py-16 lg:py-20 lg:col-span-6 z-10 pr-0 lg:pr-8">
              {/* Eyebrow */}
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#0755A4]">
                ABOUT GC FABRICATION
              </p>

              {/* Main Heading */}
              <h1 className="display-font mt-3 text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#103766] leading-[1.18]">
                Your Trusted Partner in
                <br />
                HVAC &amp; Industrial Solutions
              </h1>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-[#61738A] max-w-xl">
                GC Fabrication Pte. Ltd. is a Singapore-based company specialising in HVAC ducting,
                fabrication and industrial supply solutions. We deliver high-quality products,
                precision fabrication and reliable service to support commercial, residential and
                industrial projects.
              </p>

              {/* 4 Icon-based Trust Indicators in a Row */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#DCE5EF] pt-6">
                {/* 1. Quality Products */}
                <div className="space-y-1">
                  <div className="flex size-8 items-center justify-center text-[#0755A4]">
                    <Shield size={24} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs font-bold text-[#103766]">Quality Products</h3>
                  <p className="text-[11px] text-[#61738A] leading-tight">Reliable &amp; durable</p>
                </div>

                {/* 2. Custom Fabrication */}
                <div className="space-y-1">
                  <div className="flex size-8 items-center justify-center text-[#0755A4]">
                    <Cog size={24} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs font-bold text-[#103766]">Custom Fabrication</h3>
                  <p className="text-[11px] text-[#61738A] leading-tight">Built to your needs</p>
                </div>

                {/* 3. On-Time Delivery */}
                <div className="space-y-1">
                  <div className="flex size-8 items-center justify-center text-[#0755A4]">
                    <Handshake size={24} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs font-bold text-[#103766]">On-Time Delivery</h3>
                  <p className="text-[11px] text-[#61738A] leading-tight">For your projects</p>
                </div>

                {/* 4. Customer Focus */}
                <div className="space-y-1">
                  <div className="flex size-8 items-center justify-center text-[#0755A4]">
                    <Users size={24} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs font-bold text-[#103766]">Customer Focus</h3>
                  <p className="text-[11px] text-[#61738A] leading-tight">Long-term partnerships</p>
                </div>
              </div>
            </div>

            {/* Right Column: Facility/Workshop Exterior with Geometric Angle */}
            <div className="relative lg:col-span-6 h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[500px] w-full overflow-hidden flex items-center">
              {/* Angled Divider Mask */}
              <div
                className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
                style={{
                  background: "linear-gradient(110deg, #F7F9FC 0%, #F7F9FC 6%, transparent 20%)",
                }}
              />

              <div className="relative size-full overflow-hidden rounded-lg lg:rounded-none shadow-md lg:shadow-none my-4 lg:my-0">
                <img
                  src={assets.aboutFacility}
                  alt="GC Fabrication industrial facility and workshop exterior with company signage in Singapore"
                  width={1200}
                  height={700}
                  fetchPriority="high"
                  className="size-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — OUR CAPABILITIES ("More Than Just Products" + 4 Cards)
          ========================================================================= */}
      <section className="bg-white py-14 sm:py-18 border-b border-[#DCE5EF]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 4 Cols: Description & CTA */}
            <div className="lg:col-span-4 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0755A4]">
                OUR CAPABILITIES
              </p>
              <h2 className="display-font text-2xl sm:text-3xl font-extrabold tracking-tight text-[#103766] leading-tight">
                More Than Just Products
              </h2>
              <p className="text-xs sm:text-sm text-[#61738A] leading-relaxed">
                We provide a complete range of HVAC products, fabrication services and industrial
                supplies. From standard solutions to custom requirements, our team is equipped to
                deliver solutions that meet your project needs.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  className="h-10 rounded-md bg-[#0755A4] px-5 font-semibold text-white shadow-xs hover:bg-[#064789]"
                >
                  <Link to="/products" className="inline-flex items-center gap-2">
                    <span>Explore Our Products</span>
                    <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right 8 Cols: 4 Image-based Horizontal Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. HVAC Ducting */}
                <div className="group flex flex-col overflow-hidden rounded-lg border border-[#DCE5EF] bg-white p-3.5 shadow-xs transition-all hover:border-[#0755A4]/40 hover:shadow-md">
                  <div className="h-28 w-full overflow-hidden rounded-md bg-slate-100">
                    <img
                      src={assets.aboutCapDucting}
                      alt="HVAC Ducting installations"
                      width={400}
                      height={250}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-start gap-2.5">
                    <div className="text-[#0755A4] mt-0.5 shrink-0">
                      <Wind size={18} className="stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#103766]">HVAC Ducting</h3>
                      <p className="mt-1 text-[11px] text-[#61738A] leading-snug">
                        GI &amp; PID ducts, fittings, flexible ducts, pre-insulated ducts and
                        accessories.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Fabrication Services */}
                <div className="group flex flex-col overflow-hidden rounded-lg border border-[#DCE5EF] bg-white p-3.5 shadow-xs transition-all hover:border-[#0755A4]/40 hover:shadow-md">
                  <div className="h-28 w-full overflow-hidden rounded-md bg-slate-100">
                    <img
                      src={assets.aboutCapHood}
                      alt="Fabrication Services and stainless kitchen hood"
                      width={400}
                      height={250}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-start gap-2.5">
                    <div className="text-[#0755A4] mt-0.5 shrink-0">
                      <Wrench size={18} className="stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#103766]">Fabrication Services</h3>
                      <p className="mt-1 text-[11px] text-[#61738A] leading-snug">
                        SS fabrication, kitchen hood fabrication and custom fabrication solutions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. HVAC Components */}
                <div className="group flex flex-col overflow-hidden rounded-lg border border-[#DCE5EF] bg-white p-3.5 shadow-xs transition-all hover:border-[#0755A4]/40 hover:shadow-md">
                  <div className="h-28 w-full overflow-hidden rounded-md bg-slate-100">
                    <img
                      src={assets.aboutCapDiffuser}
                      alt="HVAC Components grilles and diffusers"
                      width={400}
                      height={250}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-start gap-2.5">
                    <div className="text-[#0755A4] mt-0.5 shrink-0">
                      <Fan size={18} className="stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#103766]">HVAC Components</h3>
                      <p className="mt-1 text-[11px] text-[#61738A] leading-snug">
                        Grilles, diffusers, louvers, dampers and insulation materials.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Industrial Supplies */}
                <div className="group flex flex-col overflow-hidden rounded-lg border border-[#DCE5EF] bg-white p-3.5 shadow-xs transition-all hover:border-[#0755A4]/40 hover:shadow-md">
                  <div className="h-28 w-full overflow-hidden rounded-md bg-slate-100">
                    <img
                      src={assets.aboutCapSupplies}
                      alt="Industrial supplies, paints, tools and accessories"
                      width={400}
                      height={250}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-start gap-2.5">
                    <div className="text-[#0755A4] mt-0.5 shrink-0">
                      <Box size={18} className="stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#103766]">Industrial Supplies</h3>
                      <p className="mt-1 text-[11px] text-[#61738A] leading-snug">
                        Hardware, tools, paints, safety products and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — WHY CHOOSE US (Left Photo + Middle Text + Right Trust Blocks)
          ========================================================================= */}
      <section className="bg-[#F7F9FC] py-14 sm:py-18 border-b border-[#DCE5EF]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Photo: Welder with Sparks */}
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-lg border border-[#DCE5EF] bg-white shadow-sm h-48 sm:h-52 w-full">
                <img
                  src={assets.aboutWelder}
                  alt="Precision duct welding and sheet metal craftsmanship at GC Fabrication workshop"
                  width={500}
                  height={400}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </div>

            {/* Middle: Content */}
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0755A4]">
                WHY CHOOSE US
              </p>
              <h2 className="display-font text-2xl sm:text-3xl font-extrabold tracking-tight text-[#103766] leading-tight">
                Built on Quality,
                <br />
                Driven by Service
              </h2>
              <p className="text-xs sm:text-sm text-[#61738A] leading-relaxed">
                Our commitment to quality, precision and customer satisfaction has made us a trusted
                partner for businesses across Singapore and the region. We combine industry
                experience with a customer-focused approach to deliver reliable and cost-effective
                solutions.
              </p>
            </div>

            {/* Right: 4 Trust Blocks */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-4">
                {/* 1. Quality Assurance */}
                <div className="space-y-1">
                  <div className="flex size-7 items-center justify-center text-[#0755A4]">
                    <Award size={22} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs font-bold text-[#103766]">Quality Assurance</h3>
                  <p className="text-[11px] text-[#61738A] leading-snug">
                    High standards in products &amp; fabrication
                  </p>
                </div>

                {/* 2. Experienced Team */}
                <div className="space-y-1">
                  <div className="flex size-7 items-center justify-center text-[#0755A4]">
                    <Shield size={22} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs font-bold text-[#103766]">Experienced Team</h3>
                  <p className="text-[11px] text-[#61738A] leading-snug">
                    Skilled professionals with industry knowledge
                  </p>
                </div>

                {/* 3. On-Time Delivery */}
                <div className="space-y-1">
                  <div className="flex size-7 items-center justify-center text-[#0755A4]">
                    <Clock size={22} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs font-bold text-[#103766]">On-Time Delivery</h3>
                  <p className="text-[11px] text-[#61738A] leading-snug">
                    Keeping your projects on track
                  </p>
                </div>

                {/* 4. Long-Term Support */}
                <div className="space-y-1">
                  <div className="flex size-7 items-center justify-center text-[#0755A4]">
                    <Handshake size={22} className="stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs font-bold text-[#103766]">Long-Term Support</h3>
                  <p className="text-[11px] text-[#61738A] leading-snug">
                    We grow with your business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — INDUSTRIES WE SERVE (Full-Width Deep Navy Section)
          ========================================================================= */}
      <section className="bg-[#082D55] text-white py-14 sm:py-18">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side text */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
                INDUSTRIES WE SERVE
              </p>
              <h2 className="display-font text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Powering a Wide Range of Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our products and services are trusted by contractors, developers, facility managers
                and businesses across various industries.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="h-9 rounded-md border-white/30 bg-transparent text-xs font-semibold text-white hover:bg-white/10"
                >
                  <Link to="/gallery" className="inline-flex items-center gap-1.5">
                    <span>View Our Projects</span>
                    <ArrowRight size={13} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side 5 Industry Cards in a Row */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {/* 1. Commercial Buildings */}
                <div className="group overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-xs">
                  <div className="h-24 w-full overflow-hidden bg-slate-800">
                    <img
                      src={assets.projCommercial}
                      alt="Commercial Buildings applications"
                      width={300}
                      height={200}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2 bg-[#061F3B] text-center">
                    <p className="text-[11px] font-semibold text-slate-200 truncate">
                      Commercial Buildings
                    </p>
                  </div>
                </div>

                {/* 2. Industrial Facilities */}
                <div className="group overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-xs">
                  <div className="h-24 w-full overflow-hidden bg-slate-800">
                    <img
                      src={assets.projIndustrial}
                      alt="Industrial Facilities ACMV solutions"
                      width={300}
                      height={200}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2 bg-[#061F3B] text-center">
                    <p className="text-[11px] font-semibold text-slate-200 truncate">
                      Industrial Facilities
                    </p>
                  </div>
                </div>

                {/* 3. Residential Projects */}
                <div className="group overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-xs">
                  <div className="h-24 w-full overflow-hidden bg-slate-800">
                    <img
                      src={assets.projResidential}
                      alt="Residential Projects ventilation"
                      width={300}
                      height={200}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2 bg-[#061F3B] text-center">
                    <p className="text-[11px] font-semibold text-slate-200 truncate">
                      Residential Projects
                    </p>
                  </div>
                </div>

                {/* 4. Hospitality & Retail */}
                <div className="group overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-xs">
                  <div className="h-24 w-full overflow-hidden bg-slate-800">
                    <img
                      src={assets.projHospitality}
                      alt="Hospitality and Retail exhaust hoods and ducting"
                      width={300}
                      height={200}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2 bg-[#061F3B] text-center">
                    <p className="text-[11px] font-semibold text-slate-200 truncate">
                      Hospitality &amp; Retail
                    </p>
                  </div>
                </div>

                {/* 5. Healthcare */}
                <div className="group overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-xs">
                  <div className="h-24 w-full overflow-hidden bg-slate-800">
                    <img
                      src={assets.aboutIndHealthcare}
                      alt="Healthcare and cleanroom ventilation systems"
                      width={300}
                      height={200}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2 bg-[#061F3B] text-center">
                    <p className="text-[11px] font-semibold text-slate-200 truncate">Healthcare</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — BOTTOM TRUST STRIP (White Section matching Reference 1)
          ========================================================================= */}
      <BottomTrustStrip />
    </SiteLayout>
  );
}
