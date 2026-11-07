import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileCheck,
  Layers,
  MessageCircle,
  PackageCheck,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageIntro, SectionHeading, SiteLayout } from "@/components/site";
import { pageHead, products, whatsappHref } from "@/lib/business";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () =>
    pageHead(
      "Ductwork Products & Solutions Singapore | GC Fabrication",
      "Browse galvanized iron ducts, pre-insulated duct (PID) systems, spiral round ductwork, volume control dampers, diffusers, and ACMV hardware in Singapore.",
      "/products",
    ),
});

const categories = [
  "All Products",
  "GI Ducts",
  "PID Ducts",
  "Round Ducts",
  "Dampers",
  "Air Distribution",
  "Accessories",
  "Insulation & Tapes",
  "Sheet Metal",
] as const;

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All Products" || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Products & Catalogue"
        title="Ductwork Products & Engineering Components"
        description="Explore our range of ACMV ventilation ductwork, pre-insulated duct (PID) boards, volume control dampers, diffusers, and installation hardware."
        badge="Singapore Supply"
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Controls: Category Filter Tabs and Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-b border-slate-200 pb-8 mb-10">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    type="button"
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[#10243A] text-white shadow-xs"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search size={16} className="absolute left-3 top-3 text-slate-400" />
              <Input
                type="text"
                placeholder="Search products, materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 pl-9 pr-3 rounded-full text-xs"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
            <span>
              Showing {filteredProducts.length} product categor
              {filteredProducts.length === 1 ? "y" : "ies"}
            </span>
            <span className="font-medium text-[#10243A]">
              Standard & custom dimensions fabricated to order
            </span>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, idx) => (
                <article
                  key={product.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E87932]/60 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.alt}
                      width={800}
                      height={550}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded-sm bg-[#10243A]/90 backdrop-blur-xs px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white">
                      {product.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="display-font text-lg font-bold text-[#10243A] group-hover:text-[#E87932] transition-colors leading-snug">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-[#697586] leading-relaxed flex-1">
                      {product.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">
                        Highlights
                      </p>
                      <ul className="space-y-1 text-xs text-[#252B32]">
                        {product.highlights.map((item) => (
                          <li key={item} className="flex items-center gap-1.5">
                            <Check size={12} className="text-[#E87932] stroke-[3] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center gap-2 pt-3 border-t border-slate-100">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 h-9 bg-[#10243A] hover:bg-[#1b3a5d] text-white text-xs font-semibold"
                      >
                        <Link to="/quote">
                          <span>Request Quote</span>
                          <ArrowRight size={13} className="ml-1" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="h-9 border-emerald-600/40 text-emerald-700 bg-emerald-50/40 hover:bg-emerald-100 text-xs font-semibold px-3"
                      >
                        <a
                          href={whatsappHref(
                            `Hello GC FABRICATION, I would like to enquire about ${product.name} specifications and availability.`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1"
                        >
                          <MessageCircle size={14} className="text-emerald-600" />
                          <span>WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200">
              <PackageCheck size={36} className="mx-auto text-slate-400" />
              <p className="mt-3 text-base font-bold text-[#10243A]">
                No products matched your criteria
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Try clearing the search query or selecting &quot;All Products&quot;.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory("All Products");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Workshop Staging Callout */}
      <section className="bg-slate-50 border-t border-slate-200 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-xs">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E87932]">
                Custom Dimension Specifications
              </span>
              <h3 className="display-font text-xl sm:text-2xl font-bold text-[#10243A]">
                Need Non-Standard Dimensions or Site Transitions?
              </h3>
              <p className="text-sm text-[#697586]">
                Our workshop custom builds to your duct width, height, gauge thickness, and flange
                requirements.
              </p>
            </div>
            <Button
              asChild
              className="h-11 bg-[#E87932] text-white hover:bg-[#d56b27] px-6 font-semibold shrink-0"
            >
              <Link to="/quote">Submit Custom BOQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
