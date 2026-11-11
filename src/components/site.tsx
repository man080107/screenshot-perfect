import { useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  company,
  generalEnquiryMessage,
  productCategories,
  services,
  whatsappHref,
} from "@/lib/business";

export function SiteLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = searchTerm.trim()
    ? [
        ...productCategories
          .filter(
            (c) =>
              c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (c.subcategories &&
                c.subcategories.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))),
          )
          .map((c) => ({
            type: "Product Category",
            title: c.name,
            href: `/products?category=${c.id}`,
          })),
        ...services
          .filter(
            (s) =>
              s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              s.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((s) => ({
            type: "Fabrication Service",
            title: s.title,
            href: `/services#${s.id}`,
          })),
      ]
    : [];

  const isHomeActive = location.pathname === "/";
  const isAboutActive = location.pathname.startsWith("/about");
  const isProductsActive = location.pathname.startsWith("/products");
  const isServicesActive = location.pathname.startsWith("/services");
  const isGalleryActive = location.pathname.startsWith("/gallery");
  const isContactActive = location.pathname.startsWith("/contact");

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#172E49] antialiased selection:bg-[#0755A4] selection:text-white">
      {/* =========================================================================
          GLOBAL HEADER — Premium White Industrial Navigation matching Reference
          ========================================================================= */}
      <header className="sticky top-0 z-50 border-b border-[#DCE5EF] bg-white/95 backdrop-blur-md shadow-xs transition-all">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Left: Official GC Logo & Brand Lockup */}
          <Link
            to="/"
            className="flex items-center transition-opacity hover:opacity-95"
            aria-label="GC FABRICATION PTE. LTD. - Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main Navigation">
            {/* Home */}
            <Link
              to="/"
              className={`relative py-1 text-sm font-semibold transition-colors hover:text-[#0755A4] ${
                isHomeActive ? "text-[#0755A4]" : "text-[#103766]"
              }`}
            >
              Home
              {isHomeActive && (
                <span className="absolute inset-x-0 -bottom-[18px] h-[2px] bg-[#0755A4]" />
              )}
            </Link>

            {/* About Us */}
            <Link
              to="/about"
              className={`relative py-1 text-sm font-semibold transition-colors hover:text-[#0755A4] ${
                isAboutActive ? "text-[#0755A4]" : "text-[#103766]"
              }`}
            >
              About Us
              {isAboutActive && (
                <span className="absolute inset-x-0 -bottom-[18px] h-[2px] bg-[#0755A4]" />
              )}
            </Link>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={`group relative flex items-center gap-1 py-1 text-sm font-semibold transition-colors hover:text-[#0755A4] focus:outline-hidden cursor-pointer ${
                    isProductsActive ? "text-[#0755A4]" : "text-[#103766]"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-data-[state=open]:rotate-180 text-slate-500"
                  />
                  {isProductsActive && (
                    <span className="absolute inset-x-0 -bottom-[18px] h-[2px] bg-[#0755A4]" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-72 rounded-lg border border-[#DCE5EF] bg-white p-2 shadow-xl"
              >
                <DropdownMenuLabel className="px-2 py-1.5 text-xs font-bold uppercase tracking-wider text-[#61738A]">
                  Company Product Catalogue
                </DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link
                    to="/products"
                    className="flex items-center justify-between font-semibold text-[#103766] hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                  >
                    <span>All Products</span>
                    <span className="text-xs text-[#61738A]">96 Items</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 bg-[#DCE5EF]" />
                <DropdownMenuItem asChild>
                  <Link
                    to="/products"
                    search={{ category: "hvac-ducting" }}
                    className="flex flex-col items-start gap-0.5 hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                  >
                    <span className="font-medium text-[#103766]">HVAC Ducting & Fittings</span>
                    <span className="text-[11px] text-[#61738A]">
                      GI & PID Ducts, Flexible, Accessories
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/products"
                    search={{ category: "grilles-diffusers" }}
                    className="flex flex-col items-start gap-0.5 hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                  >
                    <span className="font-medium text-[#103766]">Grilles & Diffusers</span>
                    <span className="text-[11px] text-[#61738A]">
                      4-Way Diffusers, Louvers, VCD Dampers
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/products"
                    search={{ category: "kitchen-hood" }}
                    className="flex flex-col items-start gap-0.5 hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                  >
                    <span className="font-medium text-[#103766]">
                      Kitchen Hood & SS Fabrication
                    </span>
                    <span className="text-[11px] text-[#61738A]">
                      Commercial & Industrial Kitchen Solutions
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/products"
                    search={{ category: "insulation" }}
                    className="flex flex-col items-start gap-0.5 hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                  >
                    <span className="font-medium text-[#103766]">Insulation Materials</span>
                    <span className="text-[11px] text-[#61738A]">
                      Fiberglass, Rockwool & PIR Boards
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/products"
                    search={{ category: "tapes" }}
                    className="flex flex-col items-start gap-0.5 hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                  >
                    <span className="font-medium text-[#103766]">Tapes & Sealants</span>
                    <span className="text-[11px] text-[#61738A]">
                      Aluminium Foil Tape, Duct Tapes
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/products"
                    search={{ category: "hardware-tools" }}
                    className="flex flex-col items-start gap-0.5 hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                  >
                    <span className="font-medium text-[#103766]">
                      Hardware, Tools & Sheet Metal
                    </span>
                    <span className="text-[11px] text-[#61738A]">
                      Unistruts, Threaded Rods, Perforated Sheets
                    </span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Fabrication Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={`group relative flex items-center gap-1 py-1 text-sm font-semibold transition-colors hover:text-[#0755A4] focus:outline-hidden cursor-pointer ${
                    isServicesActive ? "text-[#0755A4]" : "text-[#103766]"
                  }`}
                >
                  <span>Fabrication Services</span>
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-data-[state=open]:rotate-180 text-slate-500"
                  />
                  {isServicesActive && (
                    <span className="absolute inset-x-0 -bottom-[18px] h-[2px] bg-[#0755A4]" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-80 rounded-lg border border-[#DCE5EF] bg-white p-2 shadow-xl"
              >
                <DropdownMenuLabel className="px-2 py-1.5 text-xs font-bold uppercase tracking-wider text-[#61738A]">
                  Engineering & Fabrication Capabilities
                </DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link
                    to="/services"
                    className="flex items-center justify-between font-semibold text-[#103766] hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                  >
                    <span>Overview of Services</span>
                    <ArrowRight size={14} className="text-[#0755A4]" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 bg-[#DCE5EF]" />
                {services.map((srv) => (
                  <DropdownMenuItem key={srv.id} asChild>
                    <a
                      href={`/services#${srv.id}`}
                      className="flex flex-col items-start gap-0.5 hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                    >
                      <span className="font-medium text-[#103766]">{srv.title}</span>
                      <span className="text-[11px] text-[#61738A]">{srv.shortDescription}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Projects / Gallery */}
            <Link
              to="/gallery"
              className={`relative py-1 text-sm font-semibold transition-colors hover:text-[#0755A4] ${
                isGalleryActive ? "text-[#0755A4]" : "text-[#103766]"
              }`}
            >
              Projects
              {isGalleryActive && (
                <span className="absolute inset-x-0 -bottom-[18px] h-[2px] bg-[#0755A4]" />
              )}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`relative py-1 text-sm font-semibold transition-colors hover:text-[#0755A4] ${
                isContactActive ? "text-[#0755A4]" : "text-[#103766]"
              }`}
            >
              Contact
              {isContactActive && (
                <span className="absolute inset-x-0 -bottom-[18px] h-[2px] bg-[#0755A4]" />
              )}
            </Link>
          </nav>

          {/* Far Right: Search Icon + Prominent Blue "Request a Quote" Button */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search catalogue and services"
              className="flex size-9 items-center justify-center rounded-full text-[#103766] transition-colors hover:bg-[#EAF2FA] hover:text-[#0755A4] focus:outline-hidden"
            >
              <Search size={18} />
            </button>

            {/* Request a Quote Button */}
            <Button
              asChild
              className="hidden sm:inline-flex h-9 rounded-md bg-[#0755A4] px-4 font-semibold text-white shadow-xs transition-colors hover:bg-[#064789]"
            >
              <Link to="/quote" className="inline-flex items-center gap-1.5">
                <span>Request a Quote</span>
                <ArrowRight size={15} />
              </Link>
            </Button>

            {/* Mobile Menu Hamburger */}
            <Button
              variant="outline"
              size="icon"
              className="size-9 shrink-0 lg:hidden border-[#DCE5EF] text-[#103766]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            className="border-b border-[#DCE5EF] bg-white px-4 py-4 shadow-xl lg:hidden max-h-[80vh] overflow-y-auto"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isHomeActive ? "bg-[#EAF2FA] text-[#0755A4]" : "text-[#103766] hover:bg-slate-50"
                }`}
              >
                <span>Home</span>
                <ChevronRight size={16} />
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isAboutActive ? "bg-[#EAF2FA] text-[#0755A4]" : "text-[#103766] hover:bg-slate-50"
                }`}
              >
                <span>About Us</span>
                <ChevronRight size={16} />
              </Link>

              {/* Products Submenu Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-semibold text-[#103766] hover:bg-slate-50"
                >
                  <span>Products</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileProductsOpen ? "rotate-180 text-[#0755A4]" : "text-slate-400"
                    }`}
                  />
                </button>
                {mobileProductsOpen && (
                  <div className="ml-3 my-1 space-y-1 border-l-2 border-[#0755A4]/30 pl-3">
                    <Link
                      to="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs font-semibold text-[#0755A4]"
                    >
                      View All Products (96 Items)
                    </Link>
                    <Link
                      to="/products"
                      search={{ category: "hvac-ducting" }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs text-[#172E49] hover:text-[#0755A4]"
                    >
                      HVAC Ducting & Fittings
                    </Link>
                    <Link
                      to="/products"
                      search={{ category: "grilles-diffusers" }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs text-[#172E49] hover:text-[#0755A4]"
                    >
                      Grilles & Diffusers
                    </Link>
                    <Link
                      to="/products"
                      search={{ category: "kitchen-hood" }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs text-[#172E49] hover:text-[#0755A4]"
                    >
                      Kitchen Hood & SS Fabrication
                    </Link>
                    <Link
                      to="/products"
                      search={{ category: "insulation" }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs text-[#172E49] hover:text-[#0755A4]"
                    >
                      Insulation Materials
                    </Link>
                    <Link
                      to="/products"
                      search={{ category: "tapes" }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs text-[#172E49] hover:text-[#0755A4]"
                    >
                      Tapes & Sealants
                    </Link>
                  </div>
                )}
              </div>

              {/* Fabrication Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-semibold text-[#103766] hover:bg-slate-50"
                >
                  <span>Fabrication Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-[#0755A4]" : "text-slate-400"
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-3 my-1 space-y-1 border-l-2 border-[#0755A4]/30 pl-3">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs font-semibold text-[#0755A4]"
                    >
                      All Fabrication Services Overview
                    </Link>
                    {services.map((srv) => (
                      <a
                        key={srv.id}
                        href={`/services#${srv.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-[#172E49] hover:text-[#0755A4]"
                      >
                        {srv.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isGalleryActive
                    ? "bg-[#EAF2FA] text-[#0755A4]"
                    : "text-[#103766] hover:bg-slate-50"
                }`}
              >
                <span>Projects</span>
                <ChevronRight size={16} />
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isContactActive
                    ? "bg-[#EAF2FA] text-[#0755A4]"
                    : "text-[#103766] hover:bg-slate-50"
                }`}
              >
                <span>Contact</span>
                <ChevronRight size={16} />
              </Link>

              {/* Action Buttons */}
              <div className="mt-4 grid gap-2 border-t border-[#DCE5EF] pt-4">
                <Button
                  asChild
                  className="h-10 w-full rounded-md bg-[#0755A4] font-semibold text-white hover:bg-[#064789]"
                >
                  <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                    Request a Quote <ArrowRight size={16} className="ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 w-full border-emerald-600/40 font-semibold text-emerald-700 bg-emerald-50/50 hover:bg-emerald-100"
                >
                  <a
                    href={whatsappHref(generalEnquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} className="text-emerald-600" />
                    <span>WhatsApp: {company.phone}</span>
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Quick Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="max-w-lg rounded-xl border border-[#DCE5EF] bg-white p-6 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-[#103766]">
              Search Products & Fabrication Services
            </DialogTitle>
            <DialogDescription className="text-xs text-[#61738A]">
              Type a duct product, material, or service to find verified information.
            </DialogDescription>
          </DialogHeader>

          <div className="relative mt-2">
            <Search size={18} className="absolute left-3 top-3 text-slate-400" />
            <Input
              type="text"
              placeholder="e.g. GI Ducts, Flexible, Dampers, Kitchen Hood..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-11 rounded-lg border-[#DCE5EF] pl-10 pr-3 text-sm focus:border-[#0755A4]"
              autoFocus
            />
          </div>

          <div className="mt-4 max-h-64 overflow-y-auto space-y-2">
            {searchTerm && searchResults.length === 0 && (
              <p className="py-6 text-center text-xs text-[#61738A]">
                No direct match found for &ldquo;{searchTerm}&rdquo;. Try browsing by product
                category.
              </p>
            )}

            {searchResults.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                onClick={() => setSearchOpen(false)}
                className="flex items-center justify-between rounded-lg border border-[#DCE5EF] p-3 text-sm transition-colors hover:border-[#0755A4] hover:bg-[#EAF2FA]"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0755A4]">
                    {item.type}
                  </span>
                  <p className="font-semibold text-[#103766]">{item.title}</p>
                </div>
                <ArrowRight size={15} className="text-[#0755A4]" />
              </Link>
            ))}

            {!searchTerm && (
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link
                  to="/products"
                  onClick={() => setSearchOpen(false)}
                  className="rounded-md bg-slate-50 p-2.5 font-medium text-[#103766] hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                >
                  Browse All Products
                </Link>
                <Link
                  to="/services"
                  onClick={() => setSearchOpen(false)}
                  className="rounded-md bg-slate-50 p-2.5 font-medium text-[#103766] hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                >
                  Explore Fabrication Services
                </Link>
                <Link
                  to="/gallery"
                  onClick={() => setSearchOpen(false)}
                  className="rounded-md bg-slate-50 p-2.5 font-medium text-[#103766] hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                >
                  View Workshop Portfolio
                </Link>
                <Link
                  to="/quote"
                  onClick={() => setSearchOpen(false)}
                  className="rounded-md bg-slate-50 p-2.5 font-medium text-[#103766] hover:bg-[#EAF2FA] hover:text-[#0755A4]"
                >
                  Submit Quote Request
                </Link>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Body */}
      <main className="flex-1">{children}</main>

      {/* =========================================================================
          GLOBAL CORPORATE FOOTER — Section 7
          ========================================================================= */}
      <footer className="border-t border-[#DCE5EF] bg-white text-[#172E49]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs sm:text-sm leading-relaxed text-[#61738A]">
              GC Fabrication Pte. Ltd. is a trusted Singapore specialist in ACMV duct fabrication,
              precision sheet metal solutions, and industrial ventilation components for commercial
              and industrial projects.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0755A4]">
              <ShieldCheck size={16} />
              <span>Singapore Registered Workshop</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#103766]">
              Navigation
            </p>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#61738A]">
              <li>
                <Link to="/" className="transition-colors hover:text-[#0755A4]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-[#0755A4]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="transition-colors hover:text-[#0755A4]">
                  Products Catalogue
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#0755A4]">
                  Fabrication Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition-colors hover:text-[#0755A4]">
                  Projects & Gallery
                </Link>
              </li>
              <li>
                <Link to="/quote" className="transition-colors hover:text-[#0755A4]">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-[#0755A4]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Fabrication Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#103766]">
              Fabrication Services
            </p>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#61738A]">
              <li>
                <Link to="/services" className="transition-colors hover:text-[#0755A4]">
                  Rectangular GI & PID Ducts
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#0755A4]">
                  Round Spiral Ducts & Reducers
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#0755A4]">
                  Duct Transitions & Offsets
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#0755A4]">
                  Duct Fittings (Elbows & Tees)
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#0755A4]">
                  Volume Control Dampers (VCD)
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#0755A4]">
                  Custom Engineering Ductwork
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Workshop */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#103766]">
              Contact & Workshop
            </p>
            <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#61738A]">
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 transition-colors hover:text-[#0755A4]"
              >
                <MapPin size={17} className="shrink-0 text-[#0755A4] mt-0.5" />
                <span className="leading-snug">
                  {company.address}
                  <span className="block text-[11px] font-semibold text-[#0755A4] group-hover:underline mt-0.5">
                    View on Google Maps →
                  </span>
                </span>
              </a>

              <a
                href={`tel:${company.phone.replaceAll(" ", "")}`}
                className="flex items-center gap-2.5 font-semibold text-[#103766] transition-colors hover:text-[#0755A4]"
              >
                <Phone size={16} className="text-[#0755A4]" />
                <span>{company.phone}</span>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-[#0755A4]"
              >
                <Mail size={16} className="text-[#0755A4]" />
                <span>{company.email}</span>
              </a>

              <div className="pt-1">
                <a
                  href={whatsappHref(generalEnquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle size={15} className="text-emerald-600" />
                  <span>WhatsApp: {company.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-[#DCE5EF] bg-[#F7F9FC] py-4">
          <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-4 text-xs text-[#61738A] sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} GC FABRICATION PTE. LTD. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <span>ACMV Ductwork · Singapore</span>
              <Link to="/privacy" className="hover:text-[#0755A4] transition-colors">
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
          className="group flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-hidden"
        >
          <MessageCircle size={26} className="fill-current" />
        </a>
      </div>
    </div>
  );
}

// Full-width Deep Navy Bottom CTA Section (Reference Standard)
export function BottomCtaSection({
  heading = "Let's Build Your Project Together",
  description = "Get in touch with our team for product enquiries, custom fabrication or quotation requests.",
  buttonText = "Request a Quote",
  buttonHref = "/quote",
}: {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#082D55] text-white py-12 sm:py-14">
      {/* Subtle industrial background texture */}
      <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-blue-900/30 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
            <Mail size={20} />
          </div>
          <div>
            <h2 className="display-font text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              {heading}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-2xl">{description}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <Button
            asChild
            className="h-10 rounded-md bg-white text-[#082D55] hover:bg-slate-100 font-bold px-6 shadow-sm"
          >
            <Link to={buttonHref} className="inline-flex items-center gap-2">
              <span>{buttonText}</span>
              <ArrowRight size={15} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// White Bottom Trust Strip (Reference 1 Standard)
export function BottomTrustStrip() {
  return (
    <section className="border-t border-[#DCE5EF] bg-white py-8">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="display-font text-sm sm:text-base font-bold text-[#103766]">
            Trusted by businesses. Built for the future.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-semibold text-[#103766]">
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-[#0755A4]" />
            <span>Quality Products</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench size={16} className="text-[#0755A4]" />
            <span>Custom & Standard Solutions</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-[#0755A4]" />
            <span>Reliable Service</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#0755A4]" />
            <span>Long-Term Partnerships</span>
          </div>
        </div>

        <Button
          asChild
          className="h-9 rounded-md bg-[#0755A4] px-5 font-semibold text-white shadow-xs hover:bg-[#064789]"
        >
          <Link to="/quote" className="inline-flex items-center gap-1.5">
            <span>Request a Quote</span>
            <ArrowRight size={14} />
          </Link>
        </Button>
      </div>
    </section>
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
    <section className="relative overflow-hidden border-b border-[#DCE5EF] bg-[#F7F9FC] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-sm bg-[#EAF2FA] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0755A4]">
            {eyebrow}
          </span>
          {badge && (
            <span className="rounded-sm border border-[#DCE5EF] bg-white px-2.5 py-1 text-xs font-semibold text-[#61738A]">
              {badge}
            </span>
          )}
        </div>
        <h1 className="display-font mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-[#103766] sm:text-4xl lg:text-5xl leading-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[#61738A]">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#61738A]">
          <Link to="/" className="hover:text-[#0755A4] transition-colors">
            GC Fabrication
          </Link>
          <ChevronRight size={13} />
          <span className="text-[#0755A4]">{eyebrow}</span>
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
      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0755A4]">
        {eyebrow}
      </span>
      <h2 className="display-font mt-1.5 text-2xl font-bold tracking-tight text-[#103766] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#61738A]">{description}</p>
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
      className={`h-10 rounded-md bg-[#0755A4] px-6 font-semibold text-white shadow-xs hover:bg-[#064789] ${className}`}
    >
      <a
        href={whatsappHref(message ?? generalEnquiryMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2"
      >
        <span>{children}</span>
        <ArrowUpRight size={16} />
      </a>
    </Button>
  );
}

export function ContactBand() {
  return <BottomCtaSection />;
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
    <article className="group flex flex-col overflow-hidden rounded-lg border border-[#DCE5EF] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0755A4]/40 hover:shadow-md">
      <Link to="/services" className="relative block aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={alt}
          width={800}
          height={500}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-2.5 left-2.5 rounded-sm bg-[#103766]/90 backdrop-blur-xs px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-white">
          {category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="display-font text-base sm:text-lg font-bold text-[#103766] leading-snug group-hover:text-[#0755A4] transition-colors">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-[#61738A]">
          {shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-[#DCE5EF] pt-3.5">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0755A4] hover:text-[#064789] transition-colors uppercase tracking-wider"
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
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172E49]">
          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#EAF2FA] text-[#0755A4]">
            <Check size={11} className="stroke-[3]" />
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
      <Phone size={15} className="text-[#0755A4]" />
      <span>{company.phone}</span>
    </a>
  );
}

export function ScrollCue() {
  return (
    <a
      href="#company-introduction"
      aria-label="Scroll to company introduction"
      className="inline-flex size-10 items-center justify-center rounded-md border border-[#DCE5EF] text-[#103766] transition-colors hover:bg-slate-50"
    >
      <ArrowDown size={16} />
    </a>
  );
}
