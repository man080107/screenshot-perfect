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
import { PageIntro, SiteLayout } from "@/components/site";
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

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Verified Business Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="section-kicker">Direct Contact</span>
                <h2 className="display-font mt-2 text-2xl sm:text-3xl font-extrabold text-[#10243A]">
                  GC FABRICATION PTE. LTD.
                </h2>
                <p className="mt-2 text-sm text-[#697586] leading-relaxed">
                  We welcome ventilation contractors, project managers, and ACMV engineers to get in
                  touch or arrange consultations.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-5 transition-all hover:border-[#E87932] hover:bg-white hover:shadow-md"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#10243A] text-[#E87932]">
                    <MapPin size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Workshop Location
                    </span>
                    <p className="display-font text-sm font-bold text-[#10243A] mt-0.5 leading-snug">
                      {company.address}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#E87932] group-hover:underline">
                      <span>Open in Google Maps</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </a>

                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href={`tel:${company.phone.replaceAll(" ", "")}`}
                    className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/70 p-5 transition-all hover:border-[#E87932] hover:bg-white hover:shadow-md"
                  >
                    <span className="flex size-10 items-center justify-center rounded-lg bg-[#10243A] text-[#E87932] mb-3">
                      <Phone size={18} />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Phone Number
                    </span>
                    <span className="display-font text-sm font-bold text-[#10243A] mt-0.5">
                      {company.phone}
                    </span>
                    <span className="mt-2 text-[0.72rem] text-slate-500">Direct Workshop Call</span>
                  </a>

                  <a
                    href={whatsappHref(generalEnquiryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 transition-all hover:border-emerald-500 hover:bg-white hover:shadow-md"
                  >
                    <span className="flex size-10 items-center justify-center rounded-lg bg-[#25D366] text-white mb-3">
                      <MessageCircle size={18} />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      WhatsApp Chat
                    </span>
                    <span className="display-font text-sm font-bold text-[#10243A] mt-0.5">
                      {company.phone}
                    </span>
                    <span className="mt-2 text-[0.72rem] text-emerald-700">Quick Response</span>
                  </a>
                </div>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-5 transition-all hover:border-[#E87932] hover:bg-white hover:shadow-md"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#10243A] text-[#E87932]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Address
                    </span>
                    <p className="display-font text-sm font-bold text-[#10243A] mt-0.5">
                      {company.email}
                    </p>
                    <span className="text-xs text-slate-500">For drawing submissions & BOQ</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-4 text-xs text-slate-600">
                  <Clock size={18} className="text-[#E87932] shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">Operating Schedule:</p>
                    <p>Monday – Saturday: 8:00 AM – 6:00 PM (Singapore Time)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E87932]">
                    Enquiry Form
                  </span>
                  <h3 className="display-font text-xl sm:text-2xl font-bold text-[#10243A] mt-1">
                    Send Us an ACMV Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-[#697586] mt-1">
                    Fill out the fields below. Submitting will prepare your enquiry for one-touch
                    dispatch via WhatsApp or email.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contactName"
                        className="text-xs font-bold uppercase text-slate-700"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-3.5 text-slate-400" />
                        <Input
                          id="contactName"
                          name="name"
                          placeholder="e.g. Michael Chen"
                          required
                          className="h-11 pl-9 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contactCompany"
                        className="text-xs font-bold uppercase text-slate-700"
                      >
                        Company Name <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Building size={15} className="absolute left-3 top-3.5 text-slate-400" />
                        <Input
                          id="contactCompany"
                          name="companyName"
                          placeholder="e.g. Apex M&E Engineering"
                          required
                          className="h-11 pl-9 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contactPhone"
                        className="text-xs font-bold uppercase text-slate-700"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3 top-3.5 text-slate-400" />
                        <Input
                          id="contactPhone"
                          name="phone"
                          type="tel"
                          placeholder="e.g. +65 9876 5432"
                          required
                          className="h-11 pl-9 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contactEmail"
                        className="text-xs font-bold uppercase text-slate-700"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3 top-3.5 text-slate-400" />
                        <Input
                          id="contactEmail"
                          name="email"
                          type="email"
                          placeholder="e.g. project@apex-eng.com"
                          required
                          className="h-11 pl-9 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contactService"
                      className="text-xs font-bold uppercase text-slate-700"
                    >
                      Service Required <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="contactService"
                      name="service"
                      required
                      defaultValue=""
                      className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-hidden focus:ring-2 focus:ring-ring"
                    >
                      <option value="" disabled>
                        Select a fabrication category
                      </option>
                      <option>Rectangular Duct Fabrication (GI & PID)</option>
                      <option>Round Duct Fabrication (Spiral & Round)</option>
                      <option>Duct Transitions & Offsets</option>
                      <option>Duct Fittings (Elbows, Tees, S-Bends)</option>
                      <option>Volume Control Dampers (VCD & NRD)</option>
                      <option>Custom Ductwork & Engineering Tables</option>
                      <option>Other ACMV Accessories & Hardware</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contactDetails"
                      className="text-xs font-bold uppercase text-slate-700"
                    >
                      Project Details & Requirements <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="contactDetails"
                      name="details"
                      rows={4}
                      placeholder="Share dimensions, material requirements (GI, PID, SS), expected quantity, or delivery dates."
                      required
                      className="min-h-28 text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full bg-[#E87932] text-white hover:bg-[#d56b27] font-semibold text-base shadow-sm"
                  >
                    <span>Send Enquiry via WhatsApp</span>
                    <Send size={16} className="ml-2" />
                  </Button>

                  {whatsappSent && (
                    <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-xs text-emerald-900 space-y-1">
                      <p className="font-bold flex items-center gap-1 text-emerald-800">
                        <CheckCircle2 size={16} className="text-emerald-600" />
                        WhatsApp Message Prepared
                      </p>
                      <p>
                        We have opened WhatsApp with your enquiry details. If it did not open
                        automatically,{" "}
                        <a
                          href={whatsappHref(lastMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline text-emerald-950"
                        >
                          click here to proceed to WhatsApp
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  <div className="pt-2 text-center">
                    <p className="text-xs text-slate-500">
                      Need to submit engineering drawings, BOQ, or multi-item schedules?{" "}
                      <Link to="/quote" className="font-bold text-[#E87932] hover:underline">
                        Use our Detailed Quotation Wizard →
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
