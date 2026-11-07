import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageIntro, SiteLayout, WhatsAppButton } from "@/components/site";
import { company, generalEnquiryMessage, whatsappHref } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact GC Fabrication | ACMV Ductwork Singapore" },
      { name: "description", content: "Contact GC FABRICATION PTE. LTD. in Singapore by phone, WhatsApp, map directions or an enquiry opened in WhatsApp." },
      { property: "og:title", content: "Contact GC Fabrication | ACMV Ductwork Singapore" },
      { property: "og:description", content: "Get in touch about ACMV duct fabrication and project requirements in Singapore." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [whatsappMessage, setWhatsappMessage] = useState<string | null>(null);

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
      "Hello GC FABRICATION PTE. LTD., I would like to make an enquiry.",
      `Full Name: ${values.name}`,
      `Company Name: ${values.companyName}`,
      `Phone Number: ${values.phone}`,
      `Email Address: ${values.email}`,
      `Service Required: ${values.service}`,
      `Project Details: ${values.details}`,
    ].join("\n");
    setWhatsappMessage(message);
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <SiteLayout>
      <PageIntro eyebrow="Contact us" title="Let's discuss your ductwork requirements" description="Contact GC FABRICATION PTE. LTD. in Singapore about ACMV duct fabrication and project requirements." />
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10 lg:py-20">
          <aside>
            <p className="section-kicker">Get in touch</p><h2 className="display-font mt-3 text-3xl font-bold">GC FABRICATION PTE. LTD.</h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="flex gap-4 py-5 transition-colors hover:text-accent"><span className="flex size-10 shrink-0 items-center justify-center bg-secondary text-accent"><MapPin size={19} /></span><span><span className="block text-sm font-semibold">Address</span><span className="mt-1 block text-sm leading-6 text-muted-foreground">{company.address}</span><span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold">Google Maps directions <ArrowUpRight size={13} /></span></span></a>
              <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="flex items-center gap-4 py-5 transition-colors hover:text-accent"><span className="flex size-10 shrink-0 items-center justify-center bg-secondary text-accent"><Phone size={18} /></span><span><span className="block text-sm font-semibold">Phone</span><span className="mt-1 block text-sm text-muted-foreground">{company.phone}</span></span></a>
              <a href={whatsappHref(generalEnquiryMessage)} target="_blank" rel="noreferrer" className="flex items-center gap-4 py-5 transition-colors hover:text-accent"><span className="flex size-10 shrink-0 items-center justify-center bg-secondary text-accent"><MessageCircle size={18} /></span><span><span className="block text-sm font-semibold">WhatsApp</span><span className="mt-1 block text-sm text-muted-foreground">{company.phone}</span></span></a>
            </div>
            <div className="mt-6"><WhatsAppButton>WhatsApp Us</WhatsAppButton></div>
          </aside>
          <div className="border border-border bg-card p-5 sm:p-8">
            <p className="section-kicker">Project enquiry</p><h2 className="display-font mt-3 text-2xl font-bold">Tell us what you need</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Complete the form to open a prefilled WhatsApp message. Review the details and send the message in WhatsApp to deliver your enquiry.</p>
            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="name">Full Name <span aria-hidden="true">*</span></Label><Input id="name" name="name" required autoComplete="name" className="h-11 rounded-none" /></div>
                <div className="space-y-2"><Label htmlFor="companyName">Company Name <span aria-hidden="true">*</span></Label><Input id="companyName" name="companyName" required autoComplete="organization" className="h-11 rounded-none" /></div>
                <div className="space-y-2"><Label htmlFor="phone">Phone Number <span aria-hidden="true">*</span></Label><Input id="phone" name="phone" type="tel" required autoComplete="tel" className="h-11 rounded-none" /></div>
                <div className="space-y-2"><Label htmlFor="email">Email Address <span aria-hidden="true">*</span></Label><Input id="email" name="email" type="email" required autoComplete="email" className="h-11 rounded-none" /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="service">Service Required <span aria-hidden="true">*</span></Label><select id="service" name="service" required defaultValue="" className="flex h-11 w-full border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"><option value="" disabled>Select a service</option><option>Rectangular Duct Fabrication</option><option>Round Duct Fabrication</option><option>Duct Transitions and Fittings</option><option>Volume Control Dampers</option><option>Custom Ductwork Solutions</option><option>Other ACMV ductwork enquiry</option></select></div>
              <div className="space-y-2"><Label htmlFor="details">Project Details <span aria-hidden="true">*</span></Label><Textarea id="details" name="details" required minLength={8} rows={5} placeholder="Share the project requirements, dimensions or drawings you would like to discuss." className="min-h-32 rounded-none" /></div>
              <Button type="submit" className="min-h-12 w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90">Send Enquiry <ArrowUpRight size={17} /></Button>
              {whatsappMessage && <p role="status" className="border-l-2 border-accent bg-secondary p-4 text-sm leading-6">WhatsApp was opened with your enquiry details. Please review and send the message in WhatsApp. If it did not open, <a className="font-semibold underline underline-offset-4" href={whatsappHref(whatsappMessage)} target="_blank" rel="noreferrer">continue to WhatsApp here</a>.</p>}
              <p className="text-xs leading-5 text-muted-foreground">Your details are not submitted or stored on this website. The enquiry is delivered only if you choose to send it in WhatsApp.</p>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}