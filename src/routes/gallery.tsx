import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MessageCircle,
  X,
  ZoomIn,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { BottomCtaSection, PageIntro, SiteLayout } from "@/components/site";
import { galleryItems, pageHead, quoteEnquiryMessage, whatsappHref } from "@/lib/business";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () =>
    pageHead(
      "Ductwork & Workshop Gallery | GC Fabrication Singapore",
      "Explore real photographs of GC FABRICATION's workshop facility, rectangular ductwork, round spiral ducts, volume control dampers, and technical flyers in Singapore.",
      "/gallery",
    ),
});

const categories = [
  "All Assets",
  "Workshop",
  "Ductwork",
  "Dampers",
  "Fittings",
  "PID Systems",
  "Accessories",
  "Sheet Metal",
] as const;

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Assets");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All Assets") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  function showNext() {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  }

  function showPrev() {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
  }

  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Visual Portfolio"
        title="Ductwork & Workshop Gallery"
        description="A visual showcase of GC Fabrication's workshop assembly, manufactured duct components, pre-insulated ducting systems, and technical product literature."
        badge="Real Workshop Assets"
      />

      <section className="py-14 sm:py-18 lg:py-22 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DCE5EF] pb-6 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0755A4]">
                Asset Collection
              </p>
              <h2 className="display-font text-2xl font-bold text-[#103766] mt-0.5">
                Fabrication Showcase ({filteredItems.length})
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Gallery categories">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    type="button"
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveCategory(cat);
                      setSelectedIndex(null);
                    }}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#0755A4] text-white shadow-xs"
                        : "bg-[#F7F9FC] text-[#61738A] hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Image Masonry Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-[#DCE5EF] bg-white text-left shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0755A4]/50 hover:shadow-md focus:outline-hidden cursor-pointer"
                aria-label={`View full image: ${item.title}`}
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-sm bg-[#103766]/90 backdrop-blur-xs px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 bg-[#103766]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="flex size-11 items-center justify-center rounded-full bg-white text-[#0755A4] shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn size={20} />
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="display-font text-sm sm:text-base font-bold text-[#103766] group-hover:text-[#0755A4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#61738A] line-clamp-2">{item.caption}</p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-bold uppercase tracking-wider text-[#0755A4]">
                    <span>Inspect Image</span>
                    <ArrowRight size={12} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog
        open={activeItem !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedIndex(null);
        }}
      >
        <DialogContent className="max-w-4xl rounded-xl border border-[#DCE5EF] bg-white p-6 shadow-2xl">
          {activeItem && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#DCE5EF] pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0755A4]">
                    {activeItem.category}
                  </span>
                  <DialogTitle className="display-font text-lg sm:text-xl font-bold text-[#103766]">
                    {activeItem.title}
                  </DialogTitle>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-black/5 aspect-16/10 flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  width={1200}
                  height={800}
                  className="max-h-[60vh] w-auto object-contain"
                />

                {/* Left/Right overlay controls */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous photograph"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-white/90 text-[#103766] shadow-md hover:bg-white transition-all cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next photograph"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-white/90 text-[#103766] shadow-md hover:bg-white transition-all cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <DialogDescription className="text-xs sm:text-sm text-[#172E49]">
                {activeItem.caption}
              </DialogDescription>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#DCE5EF] pt-3">
                <div className="text-xs text-[#61738A]">
                  Item {(selectedIndex ?? 0) + 1} of {filteredItems.length}
                </div>
                <div className="flex items-center gap-2">
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
                      href={whatsappHref(quoteEnquiryMessage(activeItem.title))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      <MessageCircle size={14} />
                      <span>WhatsApp Enquire</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Bottom CTA Band */}
      <BottomCtaSection
        heading="Discuss Your Project Requirements"
        description="Contact our Singapore workshop team for duct fabrication, dampers or site-specific modifications."
        buttonText="Request a Quote"
        buttonHref="/quote"
      />
    </SiteLayout>
  );
}
