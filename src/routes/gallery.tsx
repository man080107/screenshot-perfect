import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
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
import { PageIntro, SiteLayout } from "@/components/site";
import { galleryItems, pageHead, whatsappHref } from "@/lib/business";

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
  "Catalog",
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
        description="A visual showcase of GC FABRICATION's workshop assembly, manufactured duct components, pre-insulated ducting systems, and technical product literature."
        badge="Real Company Assets"
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#E87932]">
                Asset Collection
              </p>
              <h2 className="display-font text-2xl font-bold text-[#10243A] mt-0.5">
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
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
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
          </div>

          {/* Image Masonry Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E87932]/70 hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[#E87932]"
                aria-label={`View full image: ${item.title}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-sm bg-[#10243A]/90 backdrop-blur-xs px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 bg-[#10243A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="flex size-11 items-center justify-center rounded-full bg-white text-[#10243A] shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn size={20} />
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="display-font text-base font-bold text-[#10243A] group-hover:text-[#E87932] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#697586] line-clamp-2">{item.caption}</p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-bold uppercase tracking-wider text-[#E87932]">
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
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl border border-slate-700 bg-[#10243A] text-white">
          {activeItem && (
            <div className="flex flex-col">
              {/* Image Preview Area */}
              <div className="relative flex items-center justify-center bg-black/40 min-h-[360px] max-h-[72vh] p-4">
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  width={1400}
                  height={1000}
                  className="max-h-[68vh] w-auto max-w-full object-contain rounded-md"
                />

                {/* Left/Right arrow controls */}
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#E87932] transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#E87932] transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Lightbox Footer Bar */}
              <div className="p-5 bg-[#0c1b2c] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-sm bg-[#E87932] px-2 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-white">
                      {activeItem.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {(selectedIndex ?? 0) + 1} of {filteredItems.length}
                    </span>
                  </div>
                  <DialogTitle className="display-font text-lg font-bold text-white">
                    {activeItem.title}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-slate-300">
                    {activeItem.caption}
                  </DialogDescription>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Button
                    asChild
                    size="sm"
                    className="h-9 bg-[#25D366] text-white hover:bg-[#20ba5a] font-semibold text-xs"
                  >
                    <a
                      href={whatsappHref(
                        `Hello GC FABRICATION, I saw "${activeItem.title}" in your gallery and would like to enquire about similar fabrication.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      <MessageCircle size={15} />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
