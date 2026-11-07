import { useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { company, generalEnquiryMessage, whatsappHref } from "@/lib/business";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Request a Quote", to: "/quote" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-white">
      {/* Top Bar with verified Singapore business credentials */}
      <div className="border-b border-primary/20 bg-[#10243A] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="size-2 rounded-full bg-[#E87932] animate-pulse" />
              ACMV Duct Fabrication & Accessories Specialist · Singapore
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock size={12} className="text-[#E87932]" />
              Mon – Sat: 8:00 AM – 6:00 PM
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-300">
            <a
              href={`mailto:${company.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 transition-colors hover:text-[#E87932]"
            >
              <Mail size={13} className="text-[#E87932]" />
              <span>{company.email}</span>
            </a>
            <a
              href={`tel:${company.phone.replaceAll(" ", "")}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#E87932]"
            >
              <Phone size={13} className="text-[#E87932]" />
              <span>{company.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="GC FABRICATION PTE. LTD. - Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1 text-sm font-semibold transition-colors hover:text-[#E87932] ${
                    isActive ? "text-[#E87932]" : "text-[#10243A]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-3.5 h-0.5 bg-[#E87932] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-9 border-emerald-600/40 text-emerald-700 bg-emerald-50/50 hover:bg-emerald-100 hover:text-emerald-800 font-semibold"
            >
              <a
                href={whatsappHref(generalEnquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <MessageCircle size={15} className="text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="h-9 bg-[#E87932] text-white hover:bg-[#d56b27] font-semibold shadow-xs"
            >
              <Link to="/quote" className="inline-flex items-center gap-1.5">
                <span>Request a Quote</span>
                <ArrowRight size={14} />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <Button
            variant="outline"
            size="icon"
            className="size-10 shrink-0 lg:hidden text-[#10243A]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav
            className="border-b border-border bg-white px-4 py-4 shadow-lg lg:hidden"
            aria-label="Mobile Navigation"
          >
            <div className="mx-auto flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-md px-3 py-2.5 text-base font-semibold transition-colors ${
                      isActive ? "bg-orange-50 text-[#E87932]" : "text-[#10243A] hover:bg-slate-100"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      size={16}
                      className={isActive ? "text-[#E87932]" : "text-slate-400"}
                    />
                  </Link>
                );
              })}

              <div className="mt-4 grid gap-2 border-t border-slate-200 pt-4">
                <Button
                  asChild
                  className="h-11 w-full bg-[#E87932] text-white hover:bg-[#d56b27] font-semibold"
                >
                  <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                    Request a Quote <ArrowRight size={16} className="ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 w-full border-emerald-600/40 text-emerald-700 bg-emerald-50/50 hover:bg-emerald-100 font-semibold"
                >
                  <a
                    href={whatsappHref(generalEnquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={17} className="text-emerald-600" />
                    <span>WhatsApp Direct: {company.phone}</span>
                  </a>
                </Button>
              </div>

              <div className="mt-3 rounded-lg bg-slate-50 p-3 text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">Workshop Address:</p>
                <p>{company.address}</p>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#E87932] hover:underline"
                >
                  Open in Google Maps <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Main Body */}
      <main className="flex-1">{children}</main>

      {/* Primary Footer */}
      <footer className="border-t border-slate-800 bg-[#10243A] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <BrandLogo variant="dark" size="md" />
            <p className="text-sm leading-6 text-slate-300">
              Singapore specialist in ACMV (Air-Conditioning & Mechanical Ventilation) duct
              fabrication, pre-insulated duct (PID) systems, dampers, and custom engineering sheet
              metal solutions.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <ShieldCheck size={16} className="text-[#E87932]" />
              <span>Singapore Registered Business</span>
            </div>
            <div className="pt-2">
              <span className="inline-block rounded-sm bg-white/10 px-2.5 py-1 text-xs font-mono text-slate-300">
                8 Kaki Bukit Ave 4, #04-02 Premier
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E87932]">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-[#E87932] inline-flex items-center gap-1.5"
                  >
                    <ChevronRight size={14} className="text-slate-500" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="transition-colors hover:text-[#E87932] inline-flex items-center gap-1.5"
                >
                  <ChevronRight size={14} className="text-slate-500" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E87932]">
              Fabrication Services
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/services" className="transition-colors hover:text-[#E87932]">
                  Rectangular Duct Fabrication (GI & PID)
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#E87932]">
                  Round Spiral Ducts & Reducers
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#E87932]">
                  Duct Transitions & Offsets
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#E87932]">
                  Duct Fittings (Elbows, Tees, S-Bends)
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#E87932]">
                  Volume Control Dampers (VCD & NRD)
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#E87932]">
                  Custom Engineering Ductwork & Tables
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Workshop */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E87932]">
              Workshop & Contact
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 transition-colors hover:text-white"
              >
                <MapPin size={18} className="shrink-0 text-[#E87932] mt-0.5" />
                <span className="leading-snug">
                  {company.address}
                  <span className="block text-xs font-semibold text-[#E87932] group-hover:underline mt-1">
                    View on Google Maps →
                  </span>
                </span>
              </a>

              <a
                href={`tel:${company.phone.replaceAll(" ", "")}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white font-semibold"
              >
                <Phone size={16} className="text-[#E87932]" />
                <span>{company.phone}</span>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail size={16} className="text-[#E87932]" />
                <span>{company.email}</span>
              </a>

              <a
                href={whatsappHref(generalEnquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600/20 px-3 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-600/30 transition-colors"
              >
                <MessageCircle size={15} className="text-emerald-400" />
                <span>Chat on WhatsApp ({company.phone})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-slate-800 bg-[#0c1b2c] py-5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-xs text-slate-400 sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} GC FABRICATION PTE. LTD. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>ACMV Ductwork · Singapore</span>
              <Link to="/privacy" className="hover:text-slate-200 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick-Contact Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <a
          href={whatsappHref(generalEnquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with GC Fabrication on WhatsApp"
          className="group flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-hidden focus:ring-4 focus:ring-emerald-400/50"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          <MessageCircle size={28} className="fill-current" />
        </a>
      </div>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  badge,
}: {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[#10243A] text-white py-16 sm:py-20 lg:py-24">
      <div className="industrial-grid-dark absolute inset-0 opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#E87932] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {eyebrow}
          </span>
          {badge && (
            <span className="rounded-sm bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-300">
              {badge}
            </span>
          )}
        </div>
        <h1 className="display-font mt-4 max-w-4xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">
            GC Fabrication
          </Link>
          <ChevronRight size={13} />
          <span className="text-[#E87932]">{eyebrow}</span>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-3xl ${className}`}>
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="display-font mt-2 text-2xl font-bold tracking-tight text-[#10243A] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-base leading-relaxed text-[#697586] sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export function WhatsAppButton({
  message,
  children = "Request a Quote",
  className = "",
}: {
  message?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Button
      asChild
      className={`h-11 rounded-md bg-[#E87932] px-6 font-semibold text-white shadow-xs hover:bg-[#d56b27] ${className}`}
    >
      <a
        href={whatsappHref(message ?? generalEnquiryMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2"
      >
        <span>{children}</span>
        <ArrowUpRight size={17} />
      </a>
    </Button>
  );
}

export function ContactBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#10243A] to-[#18314e] text-white py-16 sm:py-20">
      <div className="industrial-grid-dark absolute inset-0 opacity-15 pointer-events-none" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#E87932] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
            Ready to Build
          </span>
          <h2 className="display-font mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl leading-tight">
            Ready to Discuss Your Next Project?
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Send us your fabrication drawings, BOQ, or project specifications for a prompt review
            and discussion.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className="h-12 bg-[#E87932] text-white hover:bg-[#d56b27] font-semibold shadow-md px-6"
          >
            <Link to="/quote" className="inline-flex items-center gap-2">
              <span>Request a Quote</span>
              <ArrowRight size={17} />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-emerald-500/60 text-emerald-300 bg-emerald-950/30 hover:bg-emerald-900/50 hover:text-white font-semibold px-6"
          >
            <a
              href={whatsappHref(generalEnquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle size={18} className="text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({
  title,
  shortDescription,
  image,
  alt,
  category,
}: {
  id?: string;
  title: string;
  shortDescription: string;
  image: string;
  alt: string;
  category: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E87932]/50 hover:shadow-lg">
      <Link to="/services" className="relative block aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={alt}
          width={800}
          height={500}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-2.5 left-2.5 rounded-sm bg-[#10243A]/90 backdrop-blur-xs px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-white">
          {category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="display-font text-lg font-bold text-[#10243A] leading-snug group-hover:text-[#E87932] transition-colors">
          {title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#697586]">{shortDescription}</p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10243A] hover:text-[#E87932] transition-colors uppercase tracking-wider"
          >
            <span>Service Details</span>
            <ArrowRight size={14} />
          </Link>
          <a
            href={whatsappHref(`Hello GC FABRICATION, I would like to enquire about ${title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
          >
            <MessageCircle size={13} />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function FeatureList({ items }: { items: readonly string[] | string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-[#252B32]">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <Check size={13} className="stroke-[2.5]" />
          </span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${company.phone.replaceAll(" ", "")}`}
      className={`inline-flex items-center gap-2 font-semibold ${className}`}
    >
      <Phone size={16} className="text-[#E87932]" />
      <span>{company.phone}</span>
    </a>
  );
}

export function ScrollCue() {
  return (
    <a
      href="#company-introduction"
      aria-label="Scroll to company introduction"
      className="inline-flex size-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 hover:border-white/40"
    >
      <ArrowDown size={17} />
    </a>
  );
}
