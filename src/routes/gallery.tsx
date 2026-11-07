import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { PageIntro, SiteLayout } from "@/components/site";
import fabricationWorkshop from "@/assets/fabrication-workshop.jpg";
import ductworkComponents from "@/assets/ductwork-components.jpg";
import roundDuctwork from "@/assets/round-ductwork.jpg";
import volumeControlDamper from "@/assets/volume-control-damper.jpg";
import ductFittingDetail from "@/assets/duct-fitting-detail.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Ductwork Gallery | GC Fabrication Singapore" },
      { name: "description", content: "View illustrative workshop and ductwork images relevant to GC Fabrication's ACMV duct fabrication services." },
      { property: "og:title", content: "Ductwork Gallery | GC Fabrication Singapore" },
      { property: "og:description", content: "Illustrative visuals of HVAC ductwork products and fabrication environments." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const galleryItems = [
  { title: "Workshop fabrication", category: "Workshop", image: fabricationWorkshop, alt: "Illustrative workshop showing ventilation duct fabrication in progress" },
  { title: "Duct transitions", category: "Components", image: ductworkComponents, alt: "Illustrative rectangular duct sections and transitions" },
  { title: "Round ductwork", category: "Components", image: roundDuctwork, alt: "Illustrative round galvanized ventilation ducts and fittings" },
  { title: "Volume control damper", category: "Components", image: volumeControlDamper, alt: "Illustrative volume control damper with visible blades and linkage" },
  { title: "Duct fittings", category: "Components", image: ductFittingDetail, alt: "Illustrative fabricated duct fittings arranged on a workbench" },
];

const filters = ["All images", "Workshop", "Components"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All images");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[number] | null>(null);
  const visibleItems = useMemo(() => filter === "All images" ? galleryItems : galleryItems.filter((item) => item.category === filter), [filter]);

  return (
    <SiteLayout>
      <PageIntro eyebrow="Gallery" title="A closer look at ductwork" description="Illustrative industrial visuals of duct fabrication and components. These images are not presented as completed GC Fabrication projects." />
      <section>
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-border pb-5">
            <div><p className="section-kicker">Illustrative image gallery</p><p className="mt-2 text-sm text-muted-foreground">Select an image to view it larger.</p></div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery images">
              {filters.map((item) => <Button key={item} type="button" variant={filter === item ? "default" : "outline"} aria-pressed={filter === item} onClick={() => setFilter(item)} className="min-h-10 rounded-none">{item}</Button>)}
            </div>
          </div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, index) => (
              <button type="button" key={item.title} onClick={() => setSelectedImage(item)} aria-label={`Expand image: ${item.title}`} className={`group relative block w-full cursor-zoom-in overflow-hidden border border-border bg-secondary text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${index === 0 && filter === "All images" ? "sm:col-span-2 sm:row-span-2" : ""}`}>
                <img src={item.image} alt={item.alt} width={item.title === "Workshop fabrication" ? 1536 : 1024} height={1024} loading="lazy" className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${index === 0 && filter === "All images" ? "aspect-[4/3] h-full sm:aspect-auto sm:min-h-[400px]" : "aspect-[4/3]"}`} />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-primary/95 via-primary/50 to-transparent p-4 pt-12 text-primary-foreground"><span><span className="block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-accent">Illustrative · {item.category}</span><span className="display-font mt-1 block font-bold">{item.title}</span></span><span className="text-xs">View</span></span>
              </button>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-muted-foreground">All images on this page are illustrative and are not represented as photographs of GC Fabrication projects.</p>
        </div>
      </section>
      <Dialog open={selectedImage !== null} onOpenChange={(open) => { if (!open) setSelectedImage(null); }}>
        <DialogContent className="max-w-5xl rounded-none border-border p-3 sm:p-5">
          {selectedImage && <><DialogTitle className="display-font pr-8 text-xl font-bold">{selectedImage.title}</DialogTitle><DialogDescription>Illustrative image · {selectedImage.category}</DialogDescription><img src={selectedImage.image} alt={selectedImage.alt} width={selectedImage.title === "Workshop fabrication" ? 1536 : 1024} height={1024} className="max-h-[72vh] w-full object-contain" /></>}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}