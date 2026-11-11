import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BottomCtaSection, PageIntro, SiteLayout } from "@/components/site";
import { company, generalEnquiryMessage, pageHead, whatsappHref } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    pageHead(
      "Contact GC Fabrication | ACMV Ductwork Singapore",
      "Get in touch with GC FABRICATION PTE. LTD. at Premier @ Kaki Bukit, Singapore. Direct phone, WhatsApp chat, and quotation consultations for ACMV ductwork projects.",
      "/contact",
    ),
});

export function ContactPage() {
  const [whatsappSent, setWhatsappSent] = useState(false);
  const [lastMessage, setLastMessage] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      companyName: String(formData.get("companyName") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      details: String(formData.get("details") ?? "").trim(),
    };

    const message = [
      "Hello GC FABRICATION PTE. LTD., I would like to make an ACMV fabrication enquiry.",
      `• Contact Name: ${values.name}`,
      `• Company: ${values.companyName}`,
      `• Phone: ${values.phone}`,
      `• Email: ${values.email}`,
      `• Service Required: ${values.service}`,
      `• Project Details: ${values.details}`,
    ].join("\n");

    setLastMessage(message);
    setWhatsappSent(true);
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Contact Us"
        title="Let's Discuss Your Ductwork Requirements"
        description="Reach out directly to GC FABRICATION PTE. LTD. in Singapore. Discuss technical drawings, schedule workshop reviews, or request an immediate quotation."
        badge="Direct Workshop Line"
      />

      <section className="py-14 sm:py-18 lg:py-22 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Business Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0755A4]">
                  DIRECT CONTACT
                </p>
                <h2 className="display-font mt-1.5 text-2xl sm:text-3xl font-extrabold text-[#103766]">
                  GC FABRICATION PTE. LTD.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#61738A] leading-relaxed">
                  We welcome ventilation contractors, project managers, and ACMV engineers to get in
                  touch or arrange consultations at our Kaki Bukit workshop.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3.5">
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-lg border border-[#DCE5EF] bg-[#F7F9FC] p-4 transition-all hover:border-[#0755A4] hover:bg-white hover:shadow-xs"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FA] text-[#0755A4]">
                    <MapPin size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#61738A]">
                      Workshop Location
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#103766] mt-0.5 leading-snug">
                      {company.address}
                    </p>
                    <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#0755A4] group-hover:underline">
                      <span>Open in Google Maps</span>
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </a>

                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${company.phone.replaceAll(" ", "")}`}
                    className="flex flex-col rounded-lg border border-[#DCE5EF] bg-[#F7F9FC] p-4 transition-all hover:border-[#0755A4] hover:bg-white hover:shadow-xs"
                  >
                    <span className="flex size-9 items-center justify-center rounded-lg bg-[#EAF2FA] text-[#0755A4] mb-2.5">
                      <Phone size={17} />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#61738A]">
                      Phone Number
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#103766] mt-0.5">
                      {company.phone}
                    </span>
                    <span className="mt-1 text-[11px] text-[#61738A]">Direct Workshop Call</span>
                  </a>

                  <a
                    href={whatsappHref(generalEnquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col rounded-lg border border-emerald-200 bg-emerald-50/50 p-4 transition-all hover:border-emerald-500 hover:bg-white hover:shadow-xs"
                  >
                    <span className="flex size-9 items-center justify-center rounded-lg bg-[#25D366] text-white mb-2.5">
                      <MessageCircle size={17} />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                      WhatsApp Chat
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#103766] mt-0.5">
                      {company.phone}
                    </span>
                    <span className="mt-1 text-[11px] text-emerald-700">Quick Response</span>
                  </a>
                </div>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3.5 rounded-lg border border-[#DCE5EF] bg-[#F7F9FC] p-4 transition-all hover:border-[#0755A4] hover:bg-white hover:shadow-xs"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FA] text-[#0755A4]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#61738A]">
                      Email Address
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#103766] mt-0.5">
                      {company.email}
                    </p>
                    <span className="text-[11px] text-[#61738A]">Direct drawings submission</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 rounded-lg border border-[#DCE5EF] bg-[#F7F9FC] p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FA] text-[#0755A4]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#61738A]">
                      Workshop Consultation Hours
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#103766] mt-0.5">
                      {company.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-[#DCE5EF] bg-white p-6 sm:p-8 shadow-sm">
                <div className="border-b border-[#DCE5EF] pb-4 mb-6">
                  <h3 className="display-font text-lg sm:text-xl font-bold text-[#103766]">
                    Send Us an Enquiry
                  </h3>
                  <p className="mt-1 text-xs text-[#61738A]">
                    Fill in your details and requirements. Upon submission, you will be connected
                    directly to WhatsApp with your details prefilled for immediate assistance.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs font-semibold text-[#103766]">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. John Tan"
                        className="h-10 text-xs border-[#DCE5EF] focus:border-[#0755A4]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="companyName" className="text-xs font-semibold text-[#103766]">
                        Company / Contractor Name
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        placeholder="e.g. ACMV Engineering Pte Ltd"
                        className="h-10 text-xs border-[#DCE5EF] focus:border-[#0755A4]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-xs font-semibold text-[#103766]">
                        Contact Number / Mobile *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+65 9123 4567"
                        className="h-10 text-xs border-[#DCE5EF] focus:border-[#0755A4]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs font-semibold text-[#103766]">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="h-10 text-xs border-[#DCE5EF] focus:border-[#0755A4]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="service" className="text-xs font-semibold text-[#103766]">
                      Product or Fabrication Service Required
                    </Label>
                    <Input
                      id="service"
                      name="service"
                      placeholder="e.g. Rectangular GI Ducts, Volume Control Dampers, Custom SS Hood"
                      className="h-10 text-xs border-[#DCE5EF] focus:border-[#0755A4]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="details" className="text-xs font-semibold text-[#103766]">
                      Project Description &amp; Approximate Dimensions
                    </Label>
                    <Textarea
                      id="details"
                      name="details"
                      rows={4}
                      placeholder="Please describe your requirements, site location, timeline or CAD drawing details..."
                      className="text-xs border-[#DCE5EF] focus:border-[#0755A4]"
                    />
                  </div>

                  <div data-whatsapp-hide="true" className="pt-2">
                    <Button
                      type="submit"
                      className="w-full min-h-11 h-auto py-2.5 px-4 whitespace-normal text-center rounded-md bg-[#0755A4] hover:bg-[#064789] text-white font-semibold text-xs sm:text-sm shadow-xs cursor-pointer"
                    >
                      <Send size={15} className="mr-2 shrink-0" />
                      <span>Connect via WhatsApp with Prefilled Enquiry</span>
                    </Button>
                  </div>
                </form>

                {whatsappSent && (
                  <div className="mt-4 rounded-lg bg-emerald-50 border border-emerald-200 p-3.5 text-xs text-emerald-800 space-y-1">
                    <p className="font-bold flex items-center gap-1.5">
                      <CheckCircle2 size={15} className="text-emerald-600" />
                      <span>WhatsApp Opened with Enquiry Details</span>
                    </p>
                    <p className="text-[11px] text-emerald-700">
                      If the WhatsApp window didn't open automatically, you can also email your
                      enquiry directly to{" "}
                      <a
                        href={`mailto:${company.email}?body=${encodeURIComponent(lastMessage)}`}
                        className="underline font-bold"
                      >
                        {company.email}
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomCtaSection />
    </SiteLayout>
  );
}
