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
  Filter,
  Headphones,
  Layers,
  MessageCircle,
  Paintbrush,
  Search,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
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
    product: typeof search.product === "string" ? search.product : undefined,
  }),
  component: ProductsPage,
  head: () =>
    pageHead(
      "Quality Products for Every Project | GC Fabrication Singapore",
      "Explore GC Fabrication's complete range of PID ducts, GI duct works, dampers, grilles, diffusers, kitchen hoods, insulation, tapes, and accessories.",
      "/products",
    ),
});

export function ProductsPage() {
  const searchParams = Route.useSearch();
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.category || "all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<(typeof catalogProducts)[0] | null>(null);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  useEffect(() => {
    if (searchParams.category) {
      setSelectedCategory(searchParams.category);
      setSelectedSubcategory(null);
    } else if (searchParams.category === undefined) {
      setSelectedCategory("all");
      setSelectedSubcategory(null);
    }
  }, [searchParams.category]);

  useEffect(() => {
    if (searchParams.product) {
      const target = catalogProducts.find((item) => item.id === searchParams.product);
      if (target) {
        setSelectedCategory(target.categoryId);
        setSelectedSubcategory(null);
        setSelectedProduct(target);
      }
    }
  }, [searchParams.product]);

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
    let list = catalogProducts;

    // Filter by Category
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.categoryId === selectedCategory);
    }

    // Filter by Subcategory
    if (selectedSubcategory) {
      list = list.filter((p) => p.subcategory === selectedSubcategory);
    }

    // Filter by Search Query (title, category, subcategory, description, keywords)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q) ||
          p.keywords.some((kw) => kw.toLowerCase().includes(q)),
      );
    }

    // Sort
    if (sortBy === "az") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "za") {
      list = [...list].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "featured") {
      list = [...list].sort(
        (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.displayOrder - b.displayOrder,
      );
    }

    return list;
  }, [selectedCategory, selectedSubcategory, sortBy, searchQuery]);

  // Current category info for dynamic heading
  const currentCategoryObj = productCategories.find((c) => c.id === selectedCategory);
  const currentCategoryName =
    selectedCategory === "all"
      ? "All Products Catalogue"
      : (currentCategoryObj?.name ?? "Products");
  const currentCategorySummary =
    selectedCategory === "all"
      ? "Official GC Fabrication catalogue spanning PID ducts, GI duct works, flanges, dampers, grilles, diffusers, kitchen hoods, insulation, tapes, and project supplies."
      : ("summary" in (currentCategoryObj ?? {}) &&
          (currentCategoryObj as { summary?: string }).summary) ||
        "High-quality ACMV ducting solutions and fabrication components for commercial and industrial projects.";
  const currentCategoryDisclaimer =
    selectedCategory !== "all" && "disclaimer" in (currentCategoryObj ?? {})
      ? (currentCategoryObj as { disclaimer?: string }).disclaimer
      : undefined;

  const categoryIcon = (id: string) => {
    switch (id) {
      case "all":
        return <Layers size={14} />;
      case "pid-ducts-duct-works":
        return <Wind size={14} />;
      case "pid-duct-accessories":
        return <Wrench size={14} />;
      case "dampers":
        return <SlidersHorizontal size={14} />;
      case "grilles-diffusers-louvres":
        return <Box size={14} />;
      case "kitchen-hoods":
        return <Utensils size={14} />;
      case "insulation-accessories":
        return <Shield size={14} />;
      case "tapes":
        return <Layers size={14} />;
      case "other-industrial-items":
        return <ShieldCheck size={14} />;
      default:
        return <Box size={14} />;
    }
  };

  return (
    <SiteLayout>
      {/* =========================================================================
          SECTION 1 — PRODUCT HERO (Wide Horizontal Banner matching Reference 3)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#F7F9FC] via-[#F7F9FC] to-[#EDF3FA] border-b border-[#DCE5EF]">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12 min-h-[300px] sm:min-h-[360px] lg:min-h-[400px]">
            {/* Left Content */}
            <div className="py-7 sm:py-12 lg:col-span-6 z-10 pr-0 lg:pr-8">
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
            <div className="relative lg:col-span-6 h-full min-h-[200px] sm:min-h-[280px] lg:min-h-[400px] w-full overflow-hidden flex items-center">
              <div
                className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
                style={{
                  background: "linear-gradient(110deg, #F7F9FC 0%, #F7F9FC 6%, transparent 20%)",
                }}
              />
              <div className="relative size-full overflow-hidden rounded-lg lg:rounded-none shadow-md lg:shadow-none my-3 lg:my-0">
                <picture className="block size-full">
                  <source srcSet="/images/hero/products-hero-wide.webp" type="image/webp" />
                  <img
                    src="/images/hero/products-hero-wide.jpg"
                    alt="Commercial HVAC ductwork, round and rectangular ventilation solutions"
                    width={1920}
                    height={1000}
                    fetchPriority="high"
                    className="size-full object-cover object-center"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — MAIN PRODUCT CATALOGUE
          - Desktop (lg:block): 3-Column Layout (Left Sidebar, Centre Grid, Right Panel)
          - Tablet / Mobile (lg:hidden): Reorganized mobile-first structure
          ========================================================================= */}
      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          {/* MOBILE / TABLET TOP BAR CONTROLS (Hidden on Desktop) */}
          <div data-whatsapp-hide="true" className="lg:hidden mb-6 space-y-4">
            {/* Breadcrumb & Title */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#61738A]">
                <Link to="/" className="hover:text-[#0755A4]">
                  Home
                </Link>
                <ChevronRight size={12} />
                <span className="text-[#103766] font-medium">{currentCategoryName}</span>
              </div>
              <h2 className="display-font text-xl sm:text-2xl font-bold text-[#103766]">
                {currentCategoryName}
              </h2>
              <p className="text-xs leading-relaxed text-[#61738A]">{currentCategorySummary}</p>
              {currentCategoryDisclaimer && (
                <p className="rounded-md border border-amber-200 bg-amber-50/70 px-3 py-2 text-[11px] font-medium text-amber-900">
                  {currentCategoryDisclaimer}
                </p>
              )}
            </div>

            {/* Mobile Filter Button & Search */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
              <div className="relative sm:col-span-7">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search ducts, dampers, grilles, accessories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 rounded-md border border-[#DCE5EF] bg-slate-50/60 pl-9 pr-8 text-xs sm:text-sm text-[#103766] focus:bg-white focus:outline-hidden focus:border-[#0755A4]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 sm:col-span-5">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setMobileCategoryOpen(true)}
                  className="flex-1 h-11 border-[#DCE5EF] text-xs font-semibold text-[#103766] flex items-center justify-center gap-1.5 bg-white shadow-xs"
                >
                  <Filter size={14} className="text-[#0755A4]" />
                  <span>{selectedCategory === "all" ? "Categories" : currentCategoryName}</span>
                </Button>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32 h-11 rounded-md border border-[#DCE5EF] text-xs font-medium text-[#103766]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="az">Name: A to Z</SelectItem>
                    <SelectItem value="za">Name: Z to A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile Quick Category Pills (Touch Horizontal Scroll — no invented counts) */}
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar pt-0.5">
              {productCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSelectedSubcategory(null);
                    }}
                    className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? "bg-[#0755A4] text-white shadow-xs"
                        : "bg-[#F7F9FC] text-[#103766] border border-[#DCE5EF] hover:border-[#0755A4]/40"
                    }`}
                  >
                    {categoryIcon(cat.id)}
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Subcategory Filter Pills when active category has subcategories */}
            {"subcategories" in (currentCategoryObj ?? {}) &&
              (currentCategoryObj as { subcategories?: string[] }).subcategories && (
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                  <button
                    type="button"
                    onClick={() => setSelectedSubcategory(null)}
                    className={`shrink-0 rounded-md px-2.5 py-1.5 text-[11px] font-semibold border transition-colors ${
                      selectedSubcategory === null
                        ? "border-[#0755A4] bg-[#EAF2FA] text-[#0755A4]"
                        : "border-[#DCE5EF] bg-white text-[#61738A]"
                    }`}
                  >
                    All {currentCategoryName}
                  </button>
                  {(currentCategoryObj as { subcategories: string[] }).subcategories.map((sub) => (
                    <button
                      key={sub}
                      type="button"
                      onClick={() =>
                        setSelectedSubcategory(selectedSubcategory === sub ? null : sub)
                      }
                      className={`shrink-0 rounded-md px-2.5 py-1.5 text-[11px] font-semibold border transition-colors ${
                        selectedSubcategory === sub
                          ? "border-[#0755A4] bg-[#EAF2FA] text-[#0755A4]"
                          : "border-[#DCE5EF] bg-white text-[#61738A]"
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
          </div>

          {/* MAIN 3-COLUMN DESKTOP / RESPONSIVE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* -------------------------------------------------------------------
                LEFT SIDEBAR: Category Navigation Panel (Desktop only: lg:block)
                ------------------------------------------------------------------- */}
            <aside className="hidden lg:block lg:col-span-3 space-y-6">
              <div className="rounded-lg border border-[#DCE5EF] bg-white p-3 shadow-xs">
                <h2 className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#61738A]">
                  Categories
                </h2>

                <nav className="space-y-1" aria-label="Category Filters">
                  {productCategories.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    const subList =
                      "subcategories" in cat
                        ? (cat as { subcategories?: string[] }).subcategories
                        : undefined;

                    return (
                      <div key={cat.id} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setSelectedSubcategory(null);
                          }}
                          className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-xs font-semibold transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-[#0755A4] text-white"
                              : "text-[#103766] hover:bg-[#F7F9FC]"
                          }`}
                        >
                          <span className="flex items-center gap-2 min-w-0">
                            <span className="shrink-0">{categoryIcon(cat.id)}</span>
                            <span className="leading-snug">{cat.name}</span>
                          </span>
                          <ChevronRight
                            size={13}
                            className={`shrink-0 transition-transform ${
                              isSelected ? "text-white/80 translate-x-0.5" : "text-slate-400"
                            }`}
                          />
                        </button>

                        {/* Expandable Subcategories for active category */}
                        {subList && isSelected && (
                          <div className="ml-4 space-y-1 border-l-2 border-[#DCE5EF] pl-3 py-1">
                            {subList.map((sub) => {
                              const isSubActive = selectedSubcategory === sub;
                              return (
                                <button
                                  key={sub}
                                  type="button"
                                  onClick={() => setSelectedSubcategory(isSubActive ? null : sub)}
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
                CENTRE: Product Area (7 cols on Desktop, 12 on mobile/tablet)
                ------------------------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-8">
              {/* Desktop-only Top Bar: Breadcrumb + Dynamic Heading + Sort by */}
              <div className="hidden lg:block">
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
                      <span className="text-[#103766] font-medium">{currentCategoryName}</span>
                    </>
                  )}
                  {selectedSubcategory && (
                    <>
                      <ChevronRight size={12} />
                      <span className="text-[#0755A4] font-semibold">{selectedSubcategory}</span>
                    </>
                  )}
                </div>

                <div className="mt-2.5 flex flex-wrap items-end justify-between gap-4">
                  <div className="max-w-xl">
                    <h2 className="display-font text-2xl font-extrabold text-[#103766]">
                      {currentCategoryName}
                    </h2>
                    <p className="mt-1 text-xs leading-relaxed text-[#61738A]">
                      {currentCategorySummary}
                    </p>
                    {currentCategoryDisclaimer && (
                      <p className="mt-2 rounded-md border border-amber-200 bg-amber-50/70 px-3 py-1.5 text-[11px] font-medium text-amber-900">
                        {currentCategoryDisclaimer}
                      </p>
                    )}
                  </div>

                  {/* Desktop Search + Sort control */}
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-52">
                      <Search
                        size={14}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        type="text"
                        placeholder="Search catalogue..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="h-8 w-full rounded-md border border-[#DCE5EF] bg-[#F7F9FC] pl-8 pr-7 text-xs text-[#103766] focus:bg-white focus:border-[#0755A4] focus:outline-hidden"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          aria-label="Clear search"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          <X size={13} />
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#61738A]">Sort by:</span>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-32 h-8 rounded-md border border-[#DCE5EF] text-xs font-medium text-[#103766]">
                          <SelectValue placeholder="Featured" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="featured">Featured</SelectItem>
                          <SelectItem value="az">Name: A to Z</SelectItem>
                          <SelectItem value="za">Name: Z to A</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Cards Grid:
                  - Narrow mobile (<=430px): Single-column compact horizontal product cards
                  - Tablet (431px-1023px): 2–3 columns vertical cards
                  - Desktop (xl+): 4 columns vertical cards */}
              {filteredProducts.length === 0 ? (
                <div className="rounded-lg border border-dashed border-[#DCE5EF] p-12 text-center">
                  <p className="text-sm font-semibold text-[#103766]">
                    No products found matching your filter criteria.
                  </p>
                  <p className="mt-1 text-xs text-[#61738A]">
                    Try clearing your search or switching categories.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 border-[#0755A4] text-[#0755A4]"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedSubcategory(null);
                      setSearchQuery("");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <div
                  id="catalogue-cards-grid"
                  data-whatsapp-hide="true"
                  className="grid grid-cols-1 min-[431px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
                >
                  {filteredProducts.map((p) => (
                    <article
                      key={p.id}
                      onClick={() => setSelectedProduct(p)}
                      className="group flex flex-row min-[431px]:flex-col min-[431px]:justify-between items-center min-[431px]:items-stretch gap-3 min-[431px]:gap-0 overflow-hidden rounded-lg border border-[#DCE5EF] bg-white p-3 shadow-xs transition-all duration-300 hover:border-[#0755A4]/40 hover:shadow-md min-[431px]:hover:-translate-y-1 cursor-pointer"
                    >
                      {/* Clean Studio Product Thumbnail — Horizontal 104x104 on narrow mobile, 4:3 above */}
                      <div className="relative h-[104px] w-[104px] shrink-0 min-[431px]:h-auto min-[431px]:w-full min-[431px]:aspect-4/3 overflow-hidden rounded-md bg-white flex items-center justify-center">
                        <picture className="flex size-full items-center justify-center">
                          <source srcSet={p.image} type="image/webp" />
                          <img
                            src={p.fallbackImage || p.image.replace(".webp", ".jpg")}
                            alt={p.alt || p.title}
                            width={600}
                            height={450}
                            loading="lazy"
                            className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </picture>
                      </div>

                      {/* Text Content + View Details */}
                      <div className="min-w-0 flex-1 flex flex-col justify-between min-[431px]:mt-2.5">
                        <div>
                          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#0755A4]/90 min-[431px]:hidden">
                            {p.categoryName}
                          </span>
                          <h3 className="display-font text-sm min-[431px]:text-[13px] font-bold text-[#103766] group-hover:text-[#0755A4] transition-colors leading-snug">
                            {p.title}
                          </h3>
                          <p className="mt-1 text-xs min-[431px]:text-[11px] text-[#61738A] leading-relaxed line-clamp-3">
                            {p.description}
                          </p>
                        </div>

                        <div className="mt-2.5 min-[431px]:mt-3 min-[431px]:border-t min-[431px]:border-[#DCE5EF]/60 min-[431px]:pt-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProduct(p);
                            }}
                            className="inline-flex min-h-8 items-center gap-1 text-xs font-bold text-[#0755A4] hover:text-[#064789] transition-colors cursor-pointer"
                          >
                            <span>View Details</span>
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* -----------------------------------------------------------------
                  Featured Products Carousel Strip below the main grid
                  ----------------------------------------------------------------- */}
              <div
                id="featured-products-carousel"
                data-whatsapp-hide="true"
                className="border-t border-[#DCE5EF] pt-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="display-font text-base sm:text-lg font-bold text-[#103766]">
                      Featured Products
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
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
                        <picture className="flex size-full items-center justify-center">
                          <source srcSet={item.image} type="image/webp" />
                          <img
                            src={item.image.replace(".webp", ".jpg")}
                            alt={item.name}
                            width={160}
                            height={120}
                            loading="lazy"
                            className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </picture>
                      </div>
                      <span className="mt-2 text-center text-xs font-semibold text-[#103766] group-hover:text-[#0755A4] transition-colors line-clamp-1">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* MOBILE/TABLET CUSTOM FABRICATION BANNER (Renders below catalog on mobile/tablet) */}
              <div className="lg:hidden rounded-lg border border-[#DCE5EF] bg-[#F7F9FC]/70 overflow-hidden shadow-xs">
                <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                  <div className="sm:col-span-5 h-44 sm:h-full overflow-hidden">
                    <picture className="block size-full">
                      <source srcSet={assets.prodCustomFabrication} type="image/webp" />
                      <img
                        src={assets.prodCustomFabrication.replace(".webp", ".jpg")}
                        alt="Custom duct bend and precision offset fabrication"
                        width={400}
                        height={300}
                        loading="lazy"
                        className="size-full object-cover"
                      />
                    </picture>
                  </div>
                  <div className="p-5 sm:col-span-7 space-y-3">
                    <h3 className="display-font text-base font-bold text-[#103766]">
                      Custom Fabrication Available
                    </h3>
                    <p className="text-xs text-[#61738A] leading-relaxed">
                      Need a specific size or design? We offer customized fabrication solutions to
                      meet your project specifications.
                    </p>
                    <Button
                      asChild
                      className="h-9 rounded-md bg-[#0755A4] text-xs font-semibold text-white hover:bg-[#064789]"
                    >
                      <Link to="/services">
                        <span>Learn More</span>
                        <ArrowRight size={13} className="ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* 3 Trust Indicators Row */}
                <div className="border-t border-[#DCE5EF] bg-white p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#0755A4] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#103766]">Quality Assured</p>
                      <p className="text-[10px] text-[#61738A]">Reliable & durable</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#0755A4] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#103766]">On-Time Delivery</p>
                      <p className="text-[10px] text-[#61738A]">For project schedules</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Headphones size={16} className="text-[#0755A4] shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#103766]">Technical Support</p>
                      <p className="text-[10px] text-[#61738A]">Direct workshop help</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------------
                RIGHT SIDEBAR: Custom Fabrication Panel (Desktop only: lg:block)
                ------------------------------------------------------------------- */}
            <aside className="hidden lg:block lg:col-span-2 space-y-6">
              <div className="overflow-hidden rounded-lg border border-[#DCE5EF] bg-white shadow-xs">
                {/* Photo Header */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <picture className="block size-full">
                    <source srcSet={assets.prodCustomFabrication} type="image/webp" />
                    <img
                      src={assets.prodCustomFabrication.replace(".webp", ".jpg")}
                      alt="Custom duct bend and precision offset fabrication"
                      width={400}
                      height={300}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </picture>
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
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-[#0755A4] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#103766]">Quality Assured</p>
                      <p className="text-[11px] text-[#61738A]">Reliable &amp; durable products</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock size={18} className="text-[#0755A4] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#103766]">On-Time Delivery</p>
                      <p className="text-[11px] text-[#61738A]">For your project schedule</p>
                    </div>
                  </div>

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

      {/* Mobile Category Drawer Dialog */}
      <Dialog open={mobileCategoryOpen} onOpenChange={setMobileCategoryOpen}>
        <DialogContent className="max-w-sm rounded-xl border border-[#DCE5EF] bg-white p-5 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="display-font text-base font-bold text-[#103766] flex items-center gap-2">
              <Filter size={16} className="text-[#0755A4]" />
              <span>Select Product Category</span>
            </DialogTitle>
            <DialogDescription className="text-xs text-[#61738A]">
              Choose a category to filter the GC Fabrication catalogue.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-3 space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
            {productCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedSubcategory(null);
                    setMobileCategoryOpen(false);
                  }}
                  className={`w-full flex items-center justify-between rounded-lg p-3 text-xs font-semibold transition-colors ${
                    isSelected
                      ? "bg-[#0755A4] text-white"
                      : "bg-[#F7F9FC] text-[#103766] hover:bg-[#EAF2FA]"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {categoryIcon(cat.id)}
                    <span>{cat.name}</span>
                  </span>
                  <ChevronRight
                    size={14}
                    className={isSelected ? "text-white/80" : "text-slate-400"}
                  />
                </button>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>

      {/* Product Details Modal Dialog */}
      <Dialog
        open={selectedProduct !== null}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      >
        {selectedProduct && (
          <DialogContent className="max-w-lg rounded-xl border border-[#DCE5EF] bg-white p-6 shadow-2xl">
            <DialogHeader>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0755A4]">
                {selectedProduct.categoryName} · {selectedProduct.subcategory}
              </span>
              <DialogTitle className="display-font text-lg font-bold text-[#103766]">
                {selectedProduct.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4 my-2">
              <div className="relative aspect-4/3 max-h-[260px] w-full overflow-hidden rounded-lg bg-white border border-[#DCE5EF] flex items-center justify-center p-4">
                <picture className="flex size-full items-center justify-center">
                  <source srcSet={selectedProduct.image} type="image/webp" />
                  <img
                    src={
                      selectedProduct.fallbackImage ||
                      selectedProduct.image.replace(".webp", ".jpg")
                    }
                    alt={selectedProduct.alt || selectedProduct.title}
                    width={600}
                    height={450}
                    className="size-full object-contain"
                  />
                </picture>
              </div>

              <p className="text-xs sm:text-sm text-[#172E49] leading-relaxed">
                {selectedProduct.description}
              </p>

              {selectedProduct.confirmationNote && (
                <p className="rounded-md border border-amber-200 bg-amber-50/75 px-3 py-2 text-xs text-amber-900">
                  {selectedProduct.confirmationNote}
                </p>
              )}

              <div className="rounded-lg bg-[#EAF2FA]/70 p-3.5 space-y-2 border border-[#DCE5EF]">
                <p className="text-xs font-bold text-[#103766]">Workshop &amp; Supply Details:</p>
                <ul className="text-xs text-[#61738A] space-y-1">
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#0755A4] shrink-0" />
                    <span>Direct supply from our Kaki Bukit workshop, Singapore</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#0755A4] shrink-0" />
                    <span>Custom project dimensions and specifications supported on enquiry</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#0755A4] shrink-0" />
                    <span>Fast quotation via Request a Quote or WhatsApp</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-[#DCE5EF]">
              <Button
                asChild
                className="w-full sm:flex-1 h-10 rounded-md bg-[#0755A4] text-xs font-semibold text-white hover:bg-[#064789]"
              >
                <Link to="/quote">
                  <span>Request Quotation</span>
                  <ArrowRight size={13} className="ml-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto h-10 rounded-md border-emerald-600/40 bg-emerald-50 text-xs font-semibold text-emerald-700 hover:bg-emerald-100"
              >
                <a
                  href={whatsappHref(
                    `Hello GC FABRICATION, I would like to enquire about: ${selectedProduct.title} (${selectedProduct.categoryName}).`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Enquiry</span>
                </a>
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* SECTION 3 — BOTTOM CTA */}
      <BottomCtaSection />
    </SiteLayout>
  );
}
