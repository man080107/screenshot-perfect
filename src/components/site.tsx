import { useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { company, generalEnquiryMessage, whatsappHref } from "@/lib/business";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-1 px-5 py-2 text-xs sm:px-8 lg:px-10">
          <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" /> ACMV Duct Fabrication · Singapore</span>
          <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="inline-flex items-center gap-2 transition-colors hover:text-accent"><Phone size={13} /> {company.phone}</a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="GC Fabrication home" onClick={() => setMobileMenuOpen(false)}>
            <span className="flex size-10 shrink-0 items-center justify-center bg-accent text-accent-foreground"><span className="display-font text-lg font-extrabold">GC</span></span>
            <span className="min-w-0"><span className="display-font block truncate text-sm font-extrabold leading-tight">GC FABRICATION</span><span className="block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Pte. Ltd. · Singapore</span></span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} aria-current={location.pathname === item.to ? "page" : undefined} className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === item.to ? "text-accent" : "text-foreground"}`}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button asChild className="h-10 rounded-none bg-accent px-4 text-accent-foreground hover:bg-accent/90">
              <a href={whatsappHref(generalEnquiryMessage)} target="_blank" rel="noreferrer">Request a Quote <ArrowUpRight size={16} /></a>
            </Button>
          </div>
          <Button variant="outline" size="icon" className="size-10 shrink-0 rounded-none lg:hidden" aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setMobileMenuOpen((open) => !open)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {mobileMenuOpen && (
          <nav id="mobile-navigation" className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-1 sm:px-3">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} aria-current={location.pathname === item.to ? "page" : undefined} onClick={() => setMobileMenuOpen(false)} className={`flex min-h-11 items-center justify-between border-b border-border py-2 text-sm font-semibold ${location.pathname === item.to ? "text-accent" : "text-foreground"}`}>
                  {item.label}<ChevronRight size={16} />
                </Link>
              ))}
              <Button asChild className="mt-3 h-11 w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={whatsappHref(generalEnquiryMessage)} target="_blank" rel="noreferrer">Request a Quote <ArrowUpRight size={16} /></a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-16">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex size-10 items-center justify-center bg-accent text-accent-foreground"><span className="display-font text-lg font-extrabold">GC</span></span>
              <span className="display-font text-sm font-extrabold">GC FABRICATION PTE. LTD.</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/70">ACMV duct fabrication and related ductwork solutions for commercial and industrial applications in Singapore.</p>
          </div>
          <div>
            <p className="section-kicker">Explore</p>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-primary-foreground/75">
              {navItems.map((item) => <Link key={item.to} to={item.to} className="transition-colors hover:text-accent">{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="section-kicker">Services</p>
            <div className="mt-5 space-y-3 text-sm text-primary-foreground/75">
              <Link to="/services" className="block transition-colors hover:text-accent">Rectangular & round ductwork</Link>
              <Link to="/services" className="block transition-colors hover:text-accent">Transitions & fittings</Link>
              <Link to="/services" className="block transition-colors hover:text-accent">Volume control dampers</Link>
              <Link to="/services" className="block transition-colors hover:text-accent">Custom ductwork</Link>
            </div>
          </div>
          <div>
            <p className="section-kicker">Get in touch</p>
            <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="mt-5 block text-sm leading-6 text-primary-foreground/75 transition-colors hover:text-accent">{company.address}<ArrowUpRight className="ml-1 inline" size={14} /></a>
            <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="mt-3 block text-sm font-semibold transition-colors hover:text-accent">{company.phone}</a>
            <a href={whatsappHref(generalEnquiryMessage)} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent"><MessageCircle size={15} /> WhatsApp</a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-primary-foreground/55 sm:px-8 lg:px-10">
            <span>© {new Date().getFullYear()} GC FABRICATION PTE. LTD.</span>
            <span>Illustrative images are not representations of company projects.</span>
          </div>
        </div>
      </footer>

      <Button asChild size="icon" aria-label="Enquire on WhatsApp" className="fixed bottom-5 right-5 z-40 size-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90">
        <a href={whatsappHref(generalEnquiryMessage)} target="_blank" rel="noreferrer"><MessageCircle size={23} /></a>
      </Button>
    </div>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="industrial-grid border-b border-border bg-secondary/65">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <p className="section-kicker">{eyebrow}</p>
        <h1 className="display-font mt-4 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
        <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"><span>GC Fabrication</span><ChevronRight size={14} /><span>{eyebrow}</span></div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, className = "" }: { eyebrow: string; title: string; description?: string; className?: string }) {
  return <div className={className}><p className="section-kicker">{eyebrow}</p><h2 className="display-font mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>{description && <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{description}</p>}</div>;
}

export function WhatsAppButton({ message, children = "Request a Quote", className = "" }: { message?: string; children?: ReactNode; className?: string }) {
  return <Button asChild className={`min-h-12 rounded-none bg-accent px-5 text-accent-foreground hover:bg-accent/90 ${className}`}><a href={whatsappHref(message ?? generalEnquiryMessage)} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={17} /></a></Button>;
}

export function ContactBand() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-16">
        <div><p className="section-kicker">Start a conversation</p><h2 className="display-font mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">Have an ACMV fabrication requirement?</h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Get in touch to discuss your ductwork requirements and project specifications.</p></div>
        <div className="flex shrink-0 flex-wrap gap-3"><WhatsAppButton>WhatsApp Us</WhatsAppButton><Button asChild variant="outline" className="min-h-12 rounded-none border-primary/30 bg-background px-5"><Link to="/contact">Contact Us <ArrowRight size={16} /></Link></Button></div>
      </div>
    </section>
  );
}

export function ServiceCard({ title, description, image, alt, category }: { title: string; description: string; image: string; alt: string; category: string }) {
  return (
    <article className="group border border-border bg-card transition-colors hover:border-accent/60">
      <Link to="/services" className="block overflow-hidden" aria-label={`Learn more about ${title}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary"><img src={image} alt={alt} width={1024} height={1024} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" /><span className="absolute bottom-0 left-0 bg-primary px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground">Illustrative image</span></div>
      </Link>
      <div className="p-5 sm:p-6">
        <p className="section-kicker">{category}</p><h3 className="display-font mt-2 text-xl font-bold leading-snug">{title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">{description}</p>
        <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent">Learn more <ArrowRight size={16} /></Link>
      </div>
    </article>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-1 flex size-5 shrink-0 items-center justify-center bg-accent/15 text-accent"><Check size={13} /></span>{item}</li>)}</ul>;
}

export function ScrollCue() {
  return <a href="#company-introduction" aria-label="Scroll to company introduction" className="inline-flex size-11 items-center justify-center border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/10"><ArrowDown size={17} /></a>;
}

export function PhoneLink({ className = "" }: { className?: string }) {
  return <a href={`tel:${company.phone.replaceAll(" ", "")}`} className={`inline-flex items-center gap-2 ${className}`}><Phone size={17} />{company.phone}</a>;
}