import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Cog,
  FileText,
  Layers,
  Mail,
  Shield,
  Utensils,
  Wrench,
  Wind,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  company,
  homeCategoryCards,
  popularProducts,
  projectIndustries,
  assets,
} from "@/lib/business";
import { BottomCtaSection, SiteLayout } from "@/components/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "GC Fabrication | HVAC Ducting, Fabrication & ACMV Solutions Singapore" },
      {
        name: "description",
        content:
          "GC Fabrication provides reliable HVAC duct fabrication, precision sheet metal solutions, and industrial ventilation components for commercial and industrial projects in Singapore.",
      },
      {
        property: "og:title",
        content: "GC Fabrication | HVAC Ducting & Fabrication Singapore",
      },
      {
        property: "og:description",
        content:
          "High-precision HVAC duct fabrication, GI & PID ducts, volume control dampers, and industrial ventilation solutions in Singapore.",
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
          url: "https://gcfabrication.sg",
          description:
            "HVAC duct fabrication, Galvanized Iron (GI) ductwork, Pre-Insulated Duct (PID) systems, Volume Control Dampers, and ventilation accessories in Singapore.",
        }),
      },
    ],
  }),
});

export function HomePage() {
  return (
    <SiteLayout>
      {/* =========================================================================
          SECTION 1 — HERO BANNER (Split Layout with Geometric Photographic Transition)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#F7F9FC] via-[#F7F9FC] to-[#EDF3FA] border-b border-[#DCE5EF]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12 min-h-[440px] lg:min-h-[480px]">
            {/* Left Content Column */}
            <div className="py-12 sm:py-16 lg:py-20 lg:col-span-6 z-10 pr-0 lg:pr-8">
              {/* Eyebrow */}
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#0755A4] flex items-center gap-2">
                QUALITY PRODUCTS | CUSTOM FABRICATION | INDUSTRIAL SOLUTIONS
              </p>

              {/* Main Heading */}
              <h1 className="display-font mt-4 text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#103766] leading-[1.18]">
                HVAC Ducting, Fabrication &amp; Industrial Supply Solutions
              </h1>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#61738A] max-w-xl">
                We provide high-quality HVAC ducting products, fabrication services and a wide range
                of industrial supplies for commercial, residential and industrial projects in
                Singapore.
              </p>

              {/* Two CTA Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Button
                  asChild
                  className="h-11 rounded-md bg-[#0755A4] px-6 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#064789]"
                >
                  <Link to="/quote" className="inline-flex items-center gap-2">
                    <span>Request a Quote</span>
                    <ArrowRight size={15} />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-md border-[#DCE5EF] bg-white px-6 text-sm font-semibold text-[#103766] hover:bg-slate-50 transition-colors shadow-xs"
                >
                  <Link to="/products">Explore Products</Link>
                </Button>
              </div>
            </div>

            {/* Right Photo Column with Geometric Angle */}
            <div className="relative lg:col-span-6 h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[480px] w-full overflow-hidden flex items-center">
              {/* Angled Divider Mask on Desktop */}
              <div
                className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
                style={{
                  background: "linear-gradient(110deg, #F7F9FC 0%, #F7F9FC 7%, transparent 22%)",
                }}
              />

              <div className="relative size-full overflow-hidden rounded-lg lg:rounded-none shadow-md lg:shadow-none my-4 lg:my-0">
                <picture className="block size-full">
                  <source srcSet="/images/hero/home-hero-wide.webp" type="image/webp" />
                  <img
                    src="/images/hero/home-hero-wide.jpg"
                    alt="GC Fabrication workshop and industrial HVAC ductwork warehouse staging in Singapore"
                    width={1920}
                    height={1000}
                    fetchPriority="high"
                    className="size-full object-cover object-center lg:object-left"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — PRODUCT CATEGORY CARDS (5 Cards Horizontal Strip)
          ========================================================================= */}
      <section className="bg-white py-10 sm:py-12 border-b border-[#DCE5EF]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {homeCategoryCards.map((cat) => (
              <Link
                key={cat.id}
                to={cat.href}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-[#DCE5EF] bg-[#F7F9FC]/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0755A4]/40 hover:bg-white hover:shadow-md"
              >
                {/* Image */}
                <div className="relative h-32 sm:h-36 w-full overflow-hidden rounded-md bg-white border border-[#DCE5EF]/60">
                  <picture className="block size-full">
                    <source srcSet={cat.image} type="image/webp" />
                    <img
                      src={cat.image.replace(".webp", ".jpg")}
                      alt={cat.title}
                      width={600}
                      height={450}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </picture>
                </div>

                {/* Content */}
                <div className="mt-3 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="display-font text-sm font-bold text-[#103766] group-hover:text-[#0755A4] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#61738A] leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  {/* Circular Blue Arrow Icon */}
                  <div className="mt-4 flex justify-end">
                    <span className="flex size-7 items-center justify-center rounded-full bg-[#0755A4] text-white shadow-xs transition-colors duration-200 group-hover:bg-[#064789]">
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — POPULAR PRODUCTS (Horizontal Product Showcase)
          ========================================================================= */}
      <section className="bg-white py-12 sm:py-16 border-b border-[#DCE5EF]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          {/* Section Heading & View All link */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#0755A4]">
                FEATURED PRODUCTS
              </p>
              <h2 className="display-font mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#103766]">
                Popular Products
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0755A4] hover:text-[#064789] transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* 7 Horizontal Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5">
            {popularProducts.map((p) => (
              <Link
                key={p.id}
                to="/products"
                search={{ category: p.category }}
                className="group flex flex-col overflow-hidden rounded-lg border border-[#DCE5EF] bg-white p-3 transition-all duration-200 hover:-translate-y-1 hover:border-[#0755A4]/40 hover:shadow-md"
              >
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-md bg-[#F7F9FC] border border-[#DCE5EF]/40 flex items-center justify-center p-2">
                  <picture className="flex size-full items-center justify-center">
                    <source srcSet={p.image} type="image/webp" />
                    <img
                      src={p.image.replace(".webp", ".jpg")}
                      alt={p.name}
                      width={300}
                      height={300}
                      loading="lazy"
                      className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </picture>
                </div>

                {/* Footer with Title and Small Arrow */}
                <div className="mt-2.5 flex items-center justify-between gap-1">
                  <span className="text-xs font-semibold text-[#103766] group-hover:text-[#0755A4] transition-colors line-clamp-1">
                    {p.name}
                  </span>
                  <ArrowRight
                    size={13}
                    className="shrink-0 text-slate-400 group-hover:text-[#0755A4] transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — FABRICATION CAPABILITIES (Light Blue Background)
          ========================================================================= */}
      <section className="bg-[#EAF2FA]/70 py-14 sm:py-18 lg:py-20 border-b border-[#DCE5EF]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0755A4]">
                OUR CAPABILITIES
              </p>
              <h2 className="display-font text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#103766] leading-tight">
                Precision Fabrication.
                <br />
                Reliable Supply.
              </h2>
              <p className="text-sm leading-relaxed text-[#61738A]">
                With advanced fabrication facilities and a wide product range, GC Fabrication
                supports contractors and engineering teams with practical, project-specific ACMV
                solutions.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  className="h-10 rounded-md bg-[#0755A4] px-5 font-semibold text-white shadow-xs hover:bg-[#064789]"
                >
                  <Link to="/services" className="inline-flex items-center gap-2">
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Capability 2x2 Grid with Blue Outline Icons */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Duct Fabrication */}
                <div className="flex items-start gap-4 rounded-lg border border-[#DCE5EF] bg-white p-5 shadow-xs transition-colors hover:border-[#0755A4]/40">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FA] text-[#0755A4]">
                    <Wind size={22} className="stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#103766]">Duct Fabrication</h3>
                    <p className="mt-0.5 text-xs text-[#61738A]">GI / PID Ducts &amp; Fittings</p>
                  </div>
                </div>

                {/* 2. Stainless Steel Fabrication */}
                <div className="flex items-start gap-4 rounded-lg border border-[#DCE5EF] bg-white p-5 shadow-xs transition-colors hover:border-[#0755A4]/40">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FA] text-[#0755A4]">
                    <Layers size={22} className="stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#103766]">
                      Stainless Steel Fabrication
                    </h3>
                    <p className="mt-0.5 text-xs text-[#61738A]">Custom Metal Works</p>
                  </div>
                </div>

                {/* 3. Kitchen Hood Fabrication */}
                <div className="flex items-start gap-4 rounded-lg border border-[#DCE5EF] bg-white p-5 shadow-xs transition-colors hover:border-[#0755A4]/40">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FA] text-[#0755A4]">
                    <Utensils size={22} className="stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#103766]">Kitchen Hood Fabrication</h3>
                    <p className="mt-0.5 text-xs text-[#61738A]">Commercial &amp; Industrial</p>
                  </div>
                </div>

                {/* 4. Custom Fabrication */}
                <div className="flex items-start gap-4 rounded-lg border border-[#DCE5EF] bg-white p-5 shadow-xs transition-colors hover:border-[#0755A4]/40">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FA] text-[#0755A4]">
                    <Cog size={22} className="stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#103766]">Custom Fabrication</h3>
                    <p className="mt-0.5 text-xs text-[#61738A]">As per Project Requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — PROJECTS / INDUSTRIES
          ========================================================================= */}
      <section className="bg-white py-14 sm:py-18 border-b border-[#DCE5EF]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left side text */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0755A4]">
                OUR PROJECTS
              </p>
              <h2 className="display-font text-2xl sm:text-3xl font-extrabold tracking-tight text-[#103766]">
                Trusted Solutions Across Industries
              </h2>
              <p className="text-xs sm:text-sm text-[#61738A] leading-relaxed">
                From commercial buildings to industrial facilities, our fabrication and supply
                solutions support a wide range of projects and applications.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="h-9 rounded-md border-[#DCE5EF] text-xs font-semibold text-[#103766] hover:bg-slate-50"
                >
                  <Link to="/gallery" className="inline-flex items-center gap-1.5">
                    <span>View Projects</span>
                    <ArrowRight size={13} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side 4 project images */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {projectIndustries.slice(0, 4).map((proj) => (
                  <div
                    key={proj.id}
                    className="group overflow-hidden rounded-lg border border-[#DCE5EF] bg-white shadow-xs"
                  >
                    <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-100">
                      <picture className="block size-full">
                        <source srcSet={proj.image} type="image/webp" />
                        <img
                          src={proj.image.replace(".webp", ".jpg")}
                          alt={proj.name}
                          width={600}
                          height={400}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </picture>
                    </div>
                    <div className="p-2.5 bg-[#082D55] text-white">
                      <p className="text-[11px] font-semibold tracking-wide text-center truncate">
                        {proj.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — FINAL DEEP NAVY CTA
          ========================================================================= */}
      <BottomCtaSection
        heading="Need a specific product or custom solution?"
        description="Submit your requirement and our team will get back to you with a suitable quotation."
        buttonText="Request a Quote"
        buttonHref="/quote"
      />
    </SiteLayout>
  );
}
