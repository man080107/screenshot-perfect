import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield } from "lucide-react";

import { PageIntro, SiteLayout } from "@/components/site";
import { company, pageHead } from "@/lib/business";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () =>
    pageHead(
      "Privacy Policy | GC FABRICATION PTE. LTD. Singapore",
      "Read the Privacy Policy of GC FABRICATION PTE. LTD. regarding data protection under the Singapore Personal Data Protection Act (PDPA).",
      "/privacy",
    ),
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Legal & Compliance"
        title="Privacy Policy"
        description="How GC FABRICATION PTE. LTD. protects and respects personal data in accordance with the Singapore Personal Data Protection Act (PDPA)."
        badge="PDPA Compliant"
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0755A4]">
                Effective Date: November 2026
              </p>
              <h2 className="display-font mt-2 text-xl sm:text-2xl font-bold text-[#103766]">
                1. Introduction
              </h2>
              <p className="mt-2">
                GC FABRICATION PTE. LTD. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;),
                registered at 8 Kaki Bukit Ave 4, #04-02 Premier @ Kaki Bukit, Singapore 415875, is
                committed to safeguarding personal information collected through our website and
                business operations. This Privacy Policy outlines our practices pursuant to the
                Singapore Personal Data Protection Act 2012 (&quot;PDPA&quot;).
              </p>
            </div>

            <div>
              <h2 className="display-font text-xl sm:text-2xl font-bold text-[#103766]">
                2. Information We Collect
              </h2>
              <p className="mt-2">
                When you request a quotation, contact us via WhatsApp, phone, or email, we may
                collect:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Your name, business organization name, and designation.</li>
                <li>Contact phone number, mobile number, and corporate email address.</li>
                <li>
                  Project site location, architectural drawings, BOQ documents, and fabrication
                  specifications.
                </li>
                <li>
                  Correspondence notes and enquiry history to facilitate commercial quotations.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="display-font text-xl sm:text-2xl font-bold text-[#103766]">
                3. Purpose of Data Collection
              </h2>
              <p className="mt-2">
                We use collected information solely for legitimate commercial and engineering
                purposes:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Evaluating ductwork drawings, material take-offs, and preparing formal quotations.
                </li>
                <li>
                  Communicating project fabrication lead times, deliveries, and technical
                  clarifications.
                </li>
                <li>
                  Complying with statutory accounting, tax, and regulatory obligations in Singapore.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="display-font text-xl sm:text-2xl font-bold text-[#103766]">
                4. Confidentiality of Technical Drawings & BOQ
              </h2>
              <p className="mt-2">
                Engineering drawings, CAD files, and bill of quantities uploaded or sent to GC
                FABRICATION are treated with strict industrial confidentiality. They are accessed
                exclusively by designated estimation and workshop personnel and are never sold or
                distributed to third parties.
              </p>
            </div>

            <div>
              <h2 className="display-font text-xl sm:text-2xl font-bold text-[#103766]">
                5. Third-Party Links & Messaging Channels
              </h2>
              <p className="mt-2">
                Our website provides links to external services including WhatsApp (Meta Platforms)
                and Google Maps (Alphabet Inc.). Communications conducted over WhatsApp are governed
                by WhatsApp&apos;s respective privacy terms and end-to-end encryption protocols.
              </p>
            </div>

            <div>
              <h2 className="display-font text-xl sm:text-2xl font-bold text-[#103766]">
                6. Data Protection Officer (DPO) Contact
              </h2>
              <p className="mt-2">
                For questions regarding this policy, requests to access or correct your personal
                data, or to withdraw consent, please contact our Data Protection Officer:
              </p>
              <div className="mt-4 rounded-lg border border-[#DCE5EF] bg-slate-50 p-4 text-xs sm:text-sm space-y-1">
                <p className="font-bold text-[#103766]">{company.name}</p>
                <p>Address: {company.address}</p>
                <p>Email: {company.email}</p>
                <p>Contact Phone: {company.phone}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#DCE5EF] flex justify-between items-center">
              <Button asChild variant="outline">
                <Link to="/" className="inline-flex items-center gap-1.5">
                  <ArrowLeft size={16} />
                  <span>Return to Home</span>
                </Link>
              </Button>
              <Button asChild className="bg-[#0755A4] text-white hover:bg-[#064789]">
                <Link to="/contact">Contact Our Office</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
