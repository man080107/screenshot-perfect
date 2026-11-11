import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Box,
  Building,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cog,
  FileText,
  Headphones,
  Layers,
  MessageCircle,
  Paintbrush,
  Search,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Tool,
  Utensils,
  Wind,
  Wrench,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  assets,
  catalogProducts,
  company,
  featuredCarouselItems,
  pageHead,
  productCategories,
  quoteEnquiryMessage,
  whatsappHref,
} from "@/lib/business";
import { BottomCtaSection, SiteLayout } from "@/components/site";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  component: ProductsPage,
  head: () =>
    pageHead(
      "Quality Products for Every Project | GC Fabrication Singapore",
      "Explore GC Fabrication's complete range of HVAC ducting, ventilation components, insulation materials and custom fabrication solutions in Singapore.",
      "/products",
    ),
});

export function ProductsPage() {
  const searchParams = Route.useSearch();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.category || "all",
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<(typeof catalogProducts)[0] | null>(null);

  useEffect(() => {
    if (searchParams.category) {
      setSelectedCategory(searchParams.category);
      setSelectedSubcategory(null);
    }
  }, [searchParams.category]);

  // Carousel ref for featured products
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let list = catalogProducts.filter((p) => {
      // Category match
      if (selectedCategory !== "all" && p.categoryId !== selectedCategory) {
        return false;
      }
      // Subcategory match
      if (selectedSubcategory && p.subcategory !== selectedSubcategory) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(query);
        const matchDesc = p.description.toLowerCase().includes(query);
        const matchCategory = p.categoryName.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchCategory) return false;
      }
      return true;
    });

    if (sortBy === "az") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "za") {
      list = [...list].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "featured") {
      list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [selectedCategory, selectedSubcategory, sortBy, searchQuery]);

  // Current category info for dynamic heading
  const currentCategoryObj = productCategories.find((c) => c.id === selectedCategory);
  const currentCategoryName =
    selectedCategory === "all"
      ? "HVAC Ducting & Fittings"
      : (currentCategoryObj?.name ?? "Products Catalogue");

  return (
    <SiteLayout>
      {/* =========================================================================
          SECTION 1 — PRODUCT HERO (Wide Horizontal Banner matching Reference 3)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#F7F9FC] via-[#F7F9FC] to-[#EDF3FA] border-b border-[#DCE5EF]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12 min-h-[360px] lg:min-h-[400px]">
            {/* Left Content */}
            <div className="py-10 sm:py-14 lg:col-span-6 z-10 pr-0 lg:pr-8">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#0755A4]">
                PRODUCTS
              </p>
              <h1 className="display-font mt-2.5 text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#103766] leading-[1.2]">
                Quality Products for
                <br />
                Every Project
              </h1>
              <p className="mt-3.5 text-xs sm:text-sm lg:text-base leading-relaxed text-[#61738A] max-w-xl">
                Explore our comprehensive range of HVAC products, fabrication solutions and
                industrial supplies. We deliver reliable, high-performance products to meet the
                needs of commercial, residential and industrial projects.
              </p>
            </div>

            {/* Right Photo Column with Angle Mask */}
            <div className="relative lg:col-span-6 h-full min-h-[240px] sm:min-h-[300px] lg:min-h-[400px] w-full overflow-hidden flex items-center">
              <div
                className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
                style={{
                  background: "linear-gradient(110deg, #F7F9FC 0%, #F7F9FC 6%, transparent 20%)",
                }}
              />
              <div className="relative size-full overflow-hidden rounded-lg lg:rounded-none shadow-md lg:shadow-none my-3 lg:my-0">
                <img
                  src={assets.prodDuctsHero}
                  alt="Commercial HVAC ductwork, round and rectangular ventilation solutions"
                  width={1200}
                  height={600}
                  fetchPriority="high"
                  className="size-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — MAIN PRODUCT CATALOGUE (3-COLUMN LAYOUT)
          - Left: Category Navigation (~255px)
          - Center: Dynamic Product Grid
          - Right: Custom Fabrication Panel (~215px)
          ========================================================================= */}
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* -------------------------------------------------------------------
                LEFT SIDEBAR: Category Navigation Panel (~255px / 3 cols)
                ------------------------------------------------------------------- */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="rounded-lg border border-[#DCE5EF] bg-white p-3 shadow-xs">
                <h2 className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#61738A]">
                  Categories
                </h2>

                <nav className="space-y-1" aria-label="Category Filters">
                  {productCategories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    const isHvacDucting = cat.id === "hvac-ducting";

                    return (
                      <div key={cat.id} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setSelectedSubcategory(null);
                          }}
                          className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-[#0755A4] text-white"
                              : "text-[#103766] hover:bg-[#F7F9FC]"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {cat.id === "all" && <Layers size={14} />}
                            {cat.id === "hvac-ducting" && <Wind size={14} />}
                            {cat.id === "grilles-diffusers" && <Box size={14} />}
                            {cat.id === "kitchen-hood" && <Utensils size={14} />}
                            {cat.id === "insulation" && <Shield size={14} />}
                            {cat.id === "tapes" && <Layers size={14} />}
                            {cat.id === "hardware-tools" && <Wrench size={14} />}
                            {cat.id === "paints" && <Paintbrush size={14} />}
                            {cat.id === "safety" && <ShieldCheck size={14} />}
                            <span>{cat.name}</span>
                          </span>

                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                              isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-[#61738A]"
                            }`}
                          >
                            {cat.count}
                          </span>
                        </button>

                        {/* Expandable Subcategories for HVAC Ducting */}
                        {isHvacDucting &&
                          (selectedCategory === "hvac-ducting" || selectedCategory === "all") && (
                            <div className="ml-4 space-y-1 border-l-2 border-[#DCE5EF] pl-3 py-1">
                              {cat.subcategories?.map((sub) => {
                                const isSubActive = selectedSubcategory === sub;
                                return (
                                  <button
                                    key={sub}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCategory("hvac-ducting");
                                      setSelectedSubcategory(isSubActive ? null : sub);
                                    }}
                                    className={`block w-full text-left py-1 text-[11px] font-medium transition-colors cursor-pointer ${
                                      isSubActive
                                        ? "text-[#0755A4] font-bold"
                                        : "text-[#61738A] hover:text-[#0755A4]"
                                    }`}
                                  >
                                    {sub}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Promo Card: "Need a specific product or custom solution?" */}
              <div className="rounded-lg bg-[#082D55] p-5 text-white shadow-md space-y-3">
                <div className="flex size-9 items-center justify-center rounded-md bg-white/10 text-white">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-snug">
                    Need a specific product or custom solution?
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Our team is here to help you find the right product for your project.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full h-9 rounded-md bg-white text-[#082D55] hover:bg-slate-100 font-bold text-xs"
                >
                  <Link to="/quote">
                    <span>Request a Quote</span>
                    <ArrowRight size={13} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </aside>

            {/* -------------------------------------------------------------------
                CENTRE: Product Area (7 cols on Desktop)
                ------------------------------------------------------------------- */}
            <div className="lg:col-span-6 space-y-8">
              {/* Top Bar: Breadcrumb + Dynamic Heading + Sort by */}
              <div>
                {/* Breadcrumbs */}
                <div className="flex items-center gap-1.5 text-xs text-[#61738A]">
                  <Link to="/" className="hover:text-[#0755A4] transition-colors">
                    Home
                  </Link>
                  <ChevronRight size={12} />
                  <Link to="/products" className="hover:text-[#0755A4] transition-colors">
                    Products
                  </Link>
                  {selectedCategory !== "all" && (
                    <>
                      <ChevronRight size={12} />
                      <span className="text-[#0755A4] font-semibold">{currentCategoryName}</span>
                    </>
                  )}
                  {selectedSubcategory && (
                    <>
                      <ChevronRight size={12} />
                      <span className="text-[#0755A4] font-semibold">{selectedSubcategory}</span>
                    </>
                  )}
                </div>

                {/* Heading & Controls */}
                <div className="mt-2 flex flex-wrap items-end justify-between gap-4 border-b border-[#DCE5EF] pb-4">
                  <div>
                    <h2 className="display-font text-xl sm:text-2xl font-extrabold text-[#103766]">
                      {selectedSubcategory ?? currentCategoryName}
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-[#61738A]">
                      High-quality ducting solutions for efficient air distribution and ventilation
                      systems.
                    </p>
                  </div>

                  {/* Sort By Dropdown */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#61738A]">Sort by:</span>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="h-8 w-32 rounded-md border-[#DCE5EF] bg-white text-xs text-[#103766]">
                        <SelectValue placeholder="Sort" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="az">Name: A–Z</SelectItem>
                        <SelectItem value="za">Name: Z–A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Product Grid: 4 columns on large desktop, 2 on tablet, 1 on mobile */}
              {filteredProducts.length === 0 ? (
                <div className="rounded-lg border border-dashed border-[#DCE5EF] p-12 text-center">
                  <p className="text-sm font-semibold text-[#103766]">No products found</p>
                  <p className="mt-1 text-xs text-[#61738A]">
                    No products matched your criteria. Try resetting your filter.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedSubcategory(null);
                      setSearchQuery("");
                    }}
                    className="mt-4 text-xs font-semibold text-[#0755A4]"
                  >
                    View All Products
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  {filteredProducts.map((p) => (
                    <article
                      key={p.id}
                      className="group flex flex-col justify-between overflow-hidden rounded-lg border border-[#DCE5EF] bg-white p-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0755A4]/40 hover:shadow-md"
                    >
                      <div>
                        {/* Product Image */}
                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-md bg-[#F7F9FC] border border-[#DCE5EF]/40 flex items-center justify-center p-2">
                          <img
                            src={p.image}
                            alt={p.title}
                            width={300}
                            height={225}
                            loading="lazy"
                            className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        {/* Title & Description */}
                        <div className="mt-3">
                          <h3 className="display-font text-xs sm:text-sm font-bold text-[#103766] group-hover:text-[#0755A4] transition-colors leading-snug">
                            {p.title}
                          </h3>
                          <p className="mt-1.5 text-[11px] text-[#61738A] leading-relaxed line-clamp-3">
                            {p.description}
                          </p>
                        </div>
                      </div>

                      {/* View Details Link */}
                      <div className="mt-4 border-t border-[#DCE5EF]/60 pt-2.5">
                        <button
                          type="button"
                          onClick={() => setSelectedProduct(p)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#0755A4] hover:text-[#064789] transition-colors cursor-pointer"
                        >
                          <span>View Details</span>
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* -----------------------------------------------------------------
                  Featured Products Carousel Strip below the main grid
                  ----------------------------------------------------------------- */}
              <div className="border-t border-[#DCE5EF] pt-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="display-font text-base sm:text-lg font-bold text-[#103766]">
                      Featured Products
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to="/products"
                      className="text-xs font-semibold text-[#0755A4] hover:text-[#064789] mr-2"
                    >
                      View All Products →
                    </Link>
                    <button
                      type="button"
                      onClick={() => scrollCarousel("left")}
                      aria-label="Previous featured products"
                      className="flex size-7 items-center justify-center rounded-full border border-[#DCE5EF] bg-white text-[#103766] hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollCarousel("right")}
                      aria-label="Next featured products"
                      className="flex size-7 items-center justify-center rounded-full border border-[#DCE5EF] bg-white text-[#103766] hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Carousel container */}
                <div
                  ref={carouselRef}
                  className="flex gap-3 overflow-x-auto pb-2 scroll-smooth no-scrollbar"
                >
                  {featuredCarouselItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.href}
                      className="group shrink-0 w-36 sm:w-40 flex flex-col rounded-lg border border-[#DCE5EF] bg-white p-2.5 shadow-xs transition-all hover:border-[#0755A4]/40 hover:shadow-md"
                    >
                      <div className="h-20 sm:h-22 w-full overflow-hidden rounded-md bg-[#F7F9FC] p-1 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          width={160}
                          height={120}
                          loading="lazy"
                          className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-2 text-center text-xs font-semibold text-[#103766] group-hover:text-[#0755A4] transition-colors truncate">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------------
                RIGHT SIDEBAR: Custom Fabrication Panel (~215px / 3 cols)
                ------------------------------------------------------------------- */}
            <aside className="lg:col-span-3 space-y-5">
              <div className="overflow-hidden rounded-lg border border-[#DCE5EF] bg-white shadow-xs">
                {/* Image of actual duct bend/transition */}
                <div className="h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src={assets.prodCustomFabrication}
                    alt="Custom duct bend and precision offset fabrication"
                    width={400}
                    height={300}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <h3 className="display-font text-sm font-bold text-[#103766] leading-snug">
                    Custom Fabrication Available
                  </h3>
                  <p className="text-xs text-[#61738A] leading-relaxed">
                    Need a specific size or design? We offer customised fabrication solutions to
                    meet your project requirements.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-8 rounded-md border-[#DCE5EF] text-xs font-semibold text-[#0755A4] hover:bg-[#EAF2FA]"
                  >
                    <Link to="/services">
                      <span>Learn More</span>
                      <ArrowRight size={12} className="ml-1" />
                    </Link>
                  </Button>
                </div>

                {/* 3 Trust Indicators */}
                <div className="border-t border-[#DCE5EF] bg-[#F7F9FC]/60 p-4 space-y-3.5">
                  {/* Quality Assured */}
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-[#0755A4] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#103766]">Quality Assured</p>
                      <p className="text-[11px] text-[#61738A]">Reliable &amp; durable products</p>
                    </div>
                  </div>

                  {/* On-Time Delivery */}
                  <div className="flex items-start gap-2.5">
                    <Clock size={18} className="text-[#0755A4] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#103766]">On-Time Delivery</p>
                      <p className="text-[11px] text-[#61738A]">For your project schedule</p>
                    </div>
                  </div>

                  {/* Technical Support */}
                  <div className="flex items-start gap-2.5">
                    <Headphones size={18} className="text-[#0755A4] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#103766]">Technical Support</p>
                      <p className="text-[11px] text-[#61738A]">Our team is here to help</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Product Details Modal Dialog */}
      <Dialog
        open={selectedProduct !== null}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      >
        {selectedProduct && (
          <DialogContent className="max-w-lg rounded-xl border border-[#DCE5EF] bg-white p-6 shadow-2xl">
            <DialogHeader>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0755A4]">
                {selectedProduct.categoryName}
              </span>
              <DialogTitle className="display-font text-lg font-bold text-[#103766]">
                {selectedProduct.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4 my-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-50 border border-[#DCE5EF] flex items-center justify-center p-3">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  width={400}
                  height={250}
                  className="size-full object-contain"
                />
              </div>

              <p className="text-xs sm:text-sm text-[#172E49] leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="rounded-lg bg-[#EAF2FA]/70 p-3.5 space-y-2 border border-[#DCE5EF]">
                <p className="text-xs font-bold text-[#103766]">Singapore Project Supply:</p>
                <ul className="text-xs text-[#61738A] space-y-1">
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#0755A4]" />
                    <span>Fabricated to commercial HVAC and ACMV project specifications</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#0755A4]" />
                    <span>Direct supply from our Kaki Bukit workshop facility</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#0755A4]" />
                    <span>Custom dimensions and engineering drawings supported</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2.5 pt-2 border-t border-[#DCE5EF]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedProduct(null)}
                className="text-xs text-[#103766]"
              >
                Close
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-[#0755A4] hover:bg-[#064789] text-white text-xs font-semibold"
              >
                <Link to="/quote">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
              >
                <a
                  href={whatsappHref(quoteEnquiryMessage(selectedProduct.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1"
                >
                  <MessageCircle size={13} />
                  <span>WhatsApp Enquiry</span>
                </a>
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* =========================================================================
          SECTION 3 — BOTTOM DEEP NAVY CTA
          ========================================================================= */}
      <BottomCtaSection
        heading="Let's Build Your Project Together"
        description="Get in touch with our team for product enquiries, custom fabrication or quotation requests."
        buttonText="Request a Quote"
        buttonHref="/quote"
      />
    </SiteLayout>
  );
}
