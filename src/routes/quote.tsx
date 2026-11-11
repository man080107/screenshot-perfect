import { useState, type ChangeEvent, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building,
  Calendar,
  Check,
  CheckCircle2,
  FileCheck,
  FileText,
  FileUp,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  Trash2,
  Upload,
  User,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageIntro, SiteLayout } from "@/components/site";
import { company, pageHead, whatsappHref } from "@/lib/business";

export const Route = createFileRoute("/quote")({
  component: QuotePage,
  head: () =>
    pageHead(
      "Request a Quote | ACMV Duct Fabrication Singapore | GC Fabrication",
      "Request an ACMV ductwork fabrication quotation for commercial and industrial projects in Singapore. Submit project details, dimensions, and drawing specifications.",
      "/quote",
    ),
});

interface CustomerInfo {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
}

interface ProjectDetails {
  projectName: string;
  projectLocation: string;
  projectType: string;
  estimatedQuantity: string;
  dimensions: string;
  materialRequirements: string;
  expectedDate: string;
  projectDescription: string;
}

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  progress: number;
}

const availableServices = [
  "Rectangular Duct Fabrication",
  "Round Duct Fabrication",
  "Duct Transitions",
  "Duct Fittings",
  "Volume Control Dampers",
  "Custom Ductwork",
  "Other Requirements",
];

const materialOptions = [
  "Galvanized Iron (GI)",
  "Pre-Insulated Duct (PID / PIR)",
  "Stainless Steel (SS 304 / SS 316)",
  "Aluminum",
  "To Be Advised Based on Drawing",
];

const projectTypeOptions = [
  "Commercial Building / Office",
  "Industrial / Manufacturing Facility",
  "Data Center",
  "Healthcare / Hospital",
  "Food & Beverage / Exhaust",
  "Residential ACMV / Condominium",
  "Other ACMV Project",
];

const MAX_FILE_SIZE_MB = 20;
const ALLOWED_EXTENSIONS = ["pdf", "jpg", "jpeg", "png", "webp"];

function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Customer Information
  const [customer, setCustomer] = useState<CustomerInfo>({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
  });

  // Step 2: Services Required
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Step 3: Project Details
  const [project, setProject] = useState<ProjectDetails>({
    projectName: "",
    projectLocation: "",
    projectType: "Commercial Building / Office",
    estimatedQuantity: "",
    dimensions: "",
    materialRequirements: "Galvanized Iron (GI)",
    expectedDate: "",
    projectDescription: "",
  });

  // Step 4: Documents Uploaded
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Submission State
  const [submitted, setSubmitted] = useState(false);
  const [compiledSummary, setCompiledSummary] = useState<string>("");

  // Step navigation validation
  const canProceedStep1 =
    customer.fullName.trim() !== "" &&
    customer.companyName.trim() !== "" &&
    customer.phone.trim() !== "" &&
    customer.email.trim() !== "";

  const canProceedStep2 = selectedServices.length > 0;

  const canProceedStep3 =
    project.projectName.trim() !== "" &&
    project.projectLocation.trim() !== "" &&
    project.projectDescription.trim() !== "";

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    );
  }

  function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
    setUploadError(null);
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newFiles: UploadedFile[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const extension = file.name.split(".").pop()?.toLowerCase() || "";

      if (!ALLOWED_EXTENSIONS.includes(extension)) {
        setUploadError(
          `Invalid file type "${file.name}". Supported formats: PDF, JPG, JPEG, PNG, WEBP.`,
        );
        return;
      }

      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setUploadError(`File "${file.name}" exceeds the ${MAX_FILE_SIZE_MB}MB limit.`);
        return;
      }

      newFiles.push({
        name: file.name,
        size: file.size,
        type: file.type || extension.toUpperCase(),
        progress: 100,
      });
    }

    setUploadedFiles((prev) => [...prev, ...newFiles]);
    e.target.value = "";
  }

  function removeFile(index: number) {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function buildQuotationSummary() {
    const fileListText =
      uploadedFiles.length > 0
        ? uploadedFiles
            .map((f) => `- ${f.name} (${(f.size / 1024 / 1024).toFixed(2)} MB)`)
            .join("\n")
        : "None (Drawings will be sent via chat/email)";

    return [
      "========================================",
      "GC FABRICATION — QUOTATION REQUEST",
      "========================================",
      `• Contact Name: ${customer.fullName}`,
      `• Company: ${customer.companyName}`,
      `• Phone: ${customer.phone}`,
      `• Email: ${customer.email}`,
      "----------------------------------------",
      `• Services Required: ${selectedServices.join(", ")}`,
      `• Project Name: ${project.projectName}`,
      `• Project Location: ${project.projectLocation}`,
      `• Project Type: ${project.projectType}`,
      `• Material: ${project.materialRequirements}`,
      `• Dimensions: ${project.dimensions || "Per drawings"}`,
      `• Estimated Quantity: ${project.estimatedQuantity || "Per BOQ"}`,
      `• Target Delivery: ${project.expectedDate || "Standard workshop schedule"}`,
      "----------------------------------------",
      "• Project Requirements & Scope:",
      project.projectDescription,
      "----------------------------------------",
      "• Uploaded Technical Files:",
      fileListText,
      "========================================",
    ].join("\n");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const summary = buildQuotationSummary();
    setCompiledSummary(summary);
    setSubmitted(true);
    // WhatsApp honest fallback dispatch
    window.open(whatsappHref(summary), "_blank", "noopener,noreferrer");
  }

  const steps = [
    { num: 1, title: "Customer Info" },
    { num: 2, title: "Services" },
    { num: 3, title: "Project Scope" },
    { num: 4, title: "Drawings & Files" },
    { num: 5, title: "Review" },
  ];

  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Commercial Quotation"
        title="Request an ACMV Duct Fabrication Quote"
        description="Submit your ductwork requirements, dimensions, and engineering drawings for prompt evaluation by GC FABRICATION PTE. LTD. in Singapore."
        badge="Singapore ACMV Specialist"
      />

      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Multi-step progress indicator */}
          {!submitted && (
            <div className="mb-10">
              <div className="hidden sm:grid grid-cols-5 gap-2">
                {steps.map((s) => {
                  const isCompleted = currentStep > s.num;
                  const isCurrent = currentStep === s.num;
                  return (
                    <div
                      key={s.num}
                      className={`flex flex-col border-t-4 pt-3 transition-colors ${
                        isCompleted
                          ? "border-emerald-600 text-emerald-800"
                          : isCurrent
                            ? "border-[#0755A4] text-[#103766]"
                            : "border-[#DCE5EF] text-slate-400"
                      }`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        {isCompleted ? (
                          <Check size={14} className="text-emerald-600 stroke-[3]" />
                        ) : (
                          `Step ${s.num}`
                        )}
                      </span>
                      <span className="text-sm font-semibold mt-0.5">{s.title}</span>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Step Bar */}
              <div className="sm:hidden flex items-center justify-between bg-white p-4 rounded-lg border border-[#DCE5EF] shadow-xs">
                <div>
                  <span className="text-xs font-bold text-[#0755A4] uppercase tracking-wider">
                    Step {currentStep} of 5
                  </span>
                  <p className="text-base font-bold text-[#103766]">
                    {steps[currentStep - 1]?.title}
                  </p>
                </div>
                <div className="flex gap-1.5">
                  {steps.map((s) => (
                    <span
                      key={s.num}
                      className={`h-2.5 w-6 rounded-full ${
                        s.num <= currentStep ? "bg-[#0755A4]" : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Form Container */}
          <div className="rounded-xl border border-[#DCE5EF] bg-white p-6 shadow-sm sm:p-10">
            {submitted ? (
              /* Success / Confirmation State */
              <div className="space-y-6 text-center py-6">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <span className="inline-block rounded-sm bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Quotation Request Prepared
                  </span>
                  <h2 className="display-font text-2xl sm:text-3xl font-bold text-[#103766]">
                    Thank You, {customer.fullName}!
                  </h2>
                  <p className="max-w-xl mx-auto text-sm text-[#697586] leading-relaxed">
                    Your project details have been organized. We have opened WhatsApp with your
                    complete specification summary. Please review and hit send in WhatsApp to
                    deliver it directly to our fabrication desk.
                  </p>
                </div>

                {/* Direct Action Links */}
                <div className="max-w-md mx-auto space-y-3 pt-2">
                  <Button
                    asChild
                    className="h-12 w-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-semibold text-base shadow-sm"
                  >
                    <a
                      href={whatsappHref(compiledSummary)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} />
                      <span>Send via WhatsApp (+65 8969 3747)</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 w-full border-slate-300 text-slate-800 hover:bg-slate-50 font-semibold"
                  >
                    <a
                      href={`mailto:${company.email}?subject=${encodeURIComponent(
                        `Quotation Request: ${project.projectName} (${customer.companyName})`,
                      )}&body=${encodeURIComponent(compiledSummary)}`}
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <Mail size={18} />
                      <span>Email to sales.gcfabrication@gmail.com</span>
                    </a>
                  </Button>
                </div>

                {/* Technical Drawings Attachment Note */}
                {uploadedFiles.length > 0 && (
                  <div className="rounded-lg bg-[#EAF2FA] border border-orange-200 p-4 text-left max-w-lg mx-auto text-xs text-blue-950 space-y-1">
                    <p className="font-bold flex items-center gap-1.5 text-blue-900">
                      <FileCheck size={16} /> Technical Drawings Attachment:
                    </p>
                    <p className="leading-relaxed">
                      You indicated {uploadedFiles.length} file(s) for this request. Please attach
                      these PDF/image files directly in your WhatsApp chat or email response so our
                      engineers can perform take-off calculations.
                    </p>
                  </div>
                )}

                <div className="border-t border-slate-100 pt-6">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setSubmitted(false);
                      setCurrentStep(1);
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800"
                  >
                    ← Submit another quotation request
                  </Button>
                </div>
              </div>
            ) : (
              /* Multi-step Form Wizard */
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* STEP 1: Customer Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0755A4]">
                        Step 1 of 5
                      </span>
                      <h2 className="display-font mt-1 text-2xl font-bold text-[#103766]">
                        Customer & Company Information
                      </h2>
                      <p className="text-sm text-[#697586]">
                        Provide your commercial contact information so our engineering team can
                        follow up with your quotation.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label
                          htmlFor="fullName"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <User size={16} className="absolute left-3 top-3.5 text-slate-400" />
                          <Input
                            id="fullName"
                            placeholder="e.g. David Tan"
                            required
                            value={customer.fullName}
                            onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                            className="h-11 pl-9"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="companyName"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Company Name <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Building size={16} className="absolute left-3 top-3.5 text-slate-400" />
                          <Input
                            id="companyName"
                            placeholder="e.g. Precision Engineering Pte Ltd"
                            required
                            value={customer.companyName}
                            onChange={(e) =>
                              setCustomer({ ...customer, companyName: e.target.value })
                            }
                            className="h-11 pl-9"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Phone Number (Singapore) <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-3 top-3.5 text-slate-400" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="e.g. +65 9123 4567"
                            required
                            value={customer.phone}
                            onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                            className="h-11 pl-9"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Business Email Address <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-3 top-3.5 text-slate-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="e.g. procurement@company.com.sg"
                            required
                            value={customer.email}
                            onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                            className="h-11 pl-9"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-slate-100">
                      <Button
                        type="button"
                        disabled={!canProceedStep1}
                        onClick={() => setCurrentStep(2)}
                        className="h-11 bg-[#0755A4] text-white hover:bg-[#064789] px-6 font-semibold"
                      >
                        <span>Next: Select Services</span>
                        <ArrowRight size={16} className="ml-1.5" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Services Required */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0755A4]">
                        Step 2 of 5
                      </span>
                      <h2 className="display-font mt-1 text-2xl font-bold text-[#103766]">
                        Services Required
                      </h2>
                      <p className="text-sm text-[#697586]">
                        Select all fabrication categories that apply to your project.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {availableServices.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`flex items-center justify-between rounded-lg border p-4 text-left font-medium transition-all ${
                              isSelected
                                ? "border-[#0755A4] bg-[#EAF2FA]/70 text-[#103766] shadow-xs"
                                : "border-[#DCE5EF] bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <span className="text-sm font-semibold">{service}</span>
                            <div
                              className={`flex size-5 items-center justify-center rounded-sm border ${
                                isSelected
                                  ? "border-[#0755A4] bg-[#0755A4] text-white"
                                  : "border-slate-300 bg-white"
                              }`}
                            >
                              {isSelected && <Check size={14} className="stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                        className="h-11 px-5"
                      >
                        <ArrowLeft size={16} className="mr-1.5" />
                        <span>Back</span>
                      </Button>
                      <Button
                        type="button"
                        disabled={!canProceedStep2}
                        onClick={() => setCurrentStep(3)}
                        className="h-11 bg-[#0755A4] text-white hover:bg-[#064789] px-6 font-semibold"
                      >
                        <span>Next: Project Scope</span>
                        <ArrowRight size={16} className="ml-1.5" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Project Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0755A4]">
                        Step 3 of 5
                      </span>
                      <h2 className="display-font mt-1 text-2xl font-bold text-[#103766]">
                        Project Details & Specifications
                      </h2>
                      <p className="text-sm text-[#697586]">
                        Provide project parameters to help us estimate material take-offs and
                        workshop schedules.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label
                          htmlFor="projectName"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Project Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="projectName"
                          placeholder="e.g. Changi North Commercial Complex ACMV"
                          required
                          value={project.projectName}
                          onChange={(e) => setProject({ ...project, projectName: e.target.value })}
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="projectLocation"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Site / Installation Location <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <MapPin size={16} className="absolute left-3 top-3.5 text-slate-400" />
                          <Input
                            id="projectLocation"
                            placeholder="e.g. Tuas South / Jurong East"
                            required
                            value={project.projectLocation}
                            onChange={(e) =>
                              setProject({ ...project, projectLocation: e.target.value })
                            }
                            className="h-11 pl-9"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="projectType"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Project Type
                        </Label>
                        <select
                          id="projectType"
                          value={project.projectType}
                          onChange={(e) => setProject({ ...project, projectType: e.target.value })}
                          className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-hidden focus:ring-2 focus:ring-ring"
                        >
                          {projectTypeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="material"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Material Requirements
                        </Label>
                        <select
                          id="material"
                          value={project.materialRequirements}
                          onChange={(e) =>
                            setProject({ ...project, materialRequirements: e.target.value })
                          }
                          className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-hidden focus:ring-2 focus:ring-ring"
                        >
                          {materialOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="quantity"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Estimated Quantity / Scope
                        </Label>
                        <Input
                          id="quantity"
                          placeholder="e.g. Approx 1,200 sq meters or 85 pieces"
                          value={project.estimatedQuantity}
                          onChange={(e) =>
                            setProject({ ...project, estimatedQuantity: e.target.value })
                          }
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="dimensions"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Duct Dimensions / Sizes
                        </Label>
                        <div className="relative">
                          <Ruler size={16} className="absolute left-3 top-3.5 text-slate-400" />
                          <Input
                            id="dimensions"
                            placeholder="e.g. 600x400mm, 450dia, or per BOQ"
                            value={project.dimensions}
                            onChange={(e) => setProject({ ...project, dimensions: e.target.value })}
                            className="h-11 pl-9"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 sm:col-span-2">
                        <Label
                          htmlFor="expectedDate"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Expected Delivery / Completion Date
                        </Label>
                        <div className="relative">
                          <Calendar size={16} className="absolute left-3 top-3.5 text-slate-400" />
                          <Input
                            id="expectedDate"
                            type="text"
                            placeholder="e.g. Within 2 weeks / End of month"
                            value={project.expectedDate}
                            onChange={(e) =>
                              setProject({ ...project, expectedDate: e.target.value })
                            }
                            className="h-11 pl-9"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 sm:col-span-2">
                        <Label
                          htmlFor="description"
                          className="text-xs font-bold uppercase text-slate-700"
                        >
                          Project Description & Specifications{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="description"
                          rows={4}
                          placeholder="Describe the scope, pressure class, insulation thickness, accessories (e.g., VCD dampers, access doors), or any on-site fabrication constraints."
                          required
                          value={project.projectDescription}
                          onChange={(e) =>
                            setProject({ ...project, projectDescription: e.target.value })
                          }
                          className="min-h-28"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(2)}
                        className="h-11 px-5"
                      >
                        <ArrowLeft size={16} className="mr-1.5" />
                        <span>Back</span>
                      </Button>
                      <Button
                        type="button"
                        disabled={!canProceedStep3}
                        onClick={() => setCurrentStep(4)}
                        className="h-11 bg-[#0755A4] text-white hover:bg-[#064789] px-6 font-semibold"
                      >
                        <span>Next: Document Uploads</span>
                        <ArrowRight size={16} className="ml-1.5" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 4: Document Uploads */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0755A4]">
                        Step 4 of 5
                      </span>
                      <h2 className="display-font mt-1 text-2xl font-bold text-[#103766]">
                        Engineering Drawings & BOQ Uploads
                      </h2>
                      <p className="text-sm text-[#697586]">
                        Upload engineering drawings, duct layout plans, BOQ schedules, or reference
                        photos. Supported formats: PDF, JPG, JPEG, PNG, WEBP (Max {MAX_FILE_SIZE_MB}
                        MB each).
                      </p>
                    </div>

                    {/* Upload Dropzone */}
                    <div className="relative rounded-xl border-2 border-dashed border-slate-300 p-8 text-center hover:border-[#0755A4] transition-colors bg-slate-50/50">
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.webp"
                        onChange={handleFileUpload}
                        className="absolute inset-0 size-full cursor-pointer opacity-0"
                        id="drawingUpload"
                        aria-label="Upload drawing documents"
                      />
                      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-orange-100 text-[#0755A4]">
                        <Upload size={24} />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-[#103766]">
                        Click or drag files here to upload
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        PDF drawings, CAD exports, BOQ spreadsheets, or site photos
                      </p>
                      <span className="mt-3 inline-block rounded-sm bg-white border border-[#DCE5EF] px-2.5 py-1 text-[0.7rem] font-mono text-slate-600">
                        Limit: {MAX_FILE_SIZE_MB}MB per file
                      </span>
                    </div>

                    {uploadError && (
                      <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700 border border-red-200">
                        <AlertCircle size={16} className="shrink-0" />
                        <span>{uploadError}</span>
                      </div>
                    )}

                    {/* Uploaded File List */}
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          Selected Documents ({uploadedFiles.length})
                        </p>
                        <div className="divide-y divide-slate-100 rounded-lg border border-[#DCE5EF] bg-white">
                          {uploadedFiles.map((file, idx) => (
                            <div
                              key={`${file.name}-${idx}`}
                              className="flex items-center justify-between p-3 text-sm"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <FileText size={20} className="shrink-0 text-[#0755A4]" />
                                <div className="min-w-0">
                                  <p className="font-semibold truncate text-[#103766] text-xs sm:text-sm">
                                    {file.name}
                                  </p>
                                  <span className="text-[0.68rem] text-slate-500">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB · Ready
                                  </span>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(idx)}
                                className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                                aria-label={`Remove ${file.name}`}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="rounded-lg bg-slate-100 p-4 text-xs text-slate-600">
                      <p className="font-semibold text-slate-800">Note on Document Privacy:</p>
                      <p className="mt-0.5">
                        Client drawings and BOQ specifications are handled confidentially and
                        evaluated strictly for quotation calculations.
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(3)}
                        className="h-11 px-5"
                      >
                        <ArrowLeft size={16} className="mr-1.5" />
                        <span>Back</span>
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(5)}
                        className="h-11 bg-[#0755A4] text-white hover:bg-[#064789] px-6 font-semibold"
                      >
                        <span>Next: Review & Submit</span>
                        <ArrowRight size={16} className="ml-1.5" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 5: Review & Confirm */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0755A4]">
                        Step 5 of 5
                      </span>
                      <h2 className="display-font mt-1 text-2xl font-bold text-[#103766]">
                        Review Your Quotation Request
                      </h2>
                      <p className="text-sm text-[#697586]">
                        Please verify the details below before submitting.
                      </p>
                    </div>

                    {/* Review Section 1 */}
                    <div className="rounded-lg border border-[#DCE5EF] p-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#103766]">
                          1. Customer Information
                        </span>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="text-xs font-semibold text-[#0755A4] hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                        <div>
                          <span className="text-slate-500">Contact:</span>{" "}
                          <span className="font-medium text-slate-900">{customer.fullName}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Company:</span>{" "}
                          <span className="font-medium text-slate-900">{customer.companyName}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Phone:</span>{" "}
                          <span className="font-medium text-slate-900">{customer.phone}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Email:</span>{" "}
                          <span className="font-medium text-slate-900">{customer.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Review Section 2 */}
                    <div className="rounded-lg border border-[#DCE5EF] p-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#103766]">
                          2. Services Selected
                        </span>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="text-xs font-semibold text-[#0755A4] hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedServices.map((s) => (
                          <span
                            key={s}
                            className="rounded-sm bg-[#EAF2FA] border border-orange-200 px-2.5 py-1 text-xs font-medium text-blue-950"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Review Section 3 */}
                    <div className="rounded-lg border border-[#DCE5EF] p-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#103766]">
                          3. Project Scope & Specifications
                        </span>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="text-xs font-semibold text-[#0755A4] hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                        <div>
                          <span className="text-slate-500">Project:</span>{" "}
                          <span className="font-medium text-slate-900">{project.projectName}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Location:</span>{" "}
                          <span className="font-medium text-slate-900">
                            {project.projectLocation}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500">Type:</span>{" "}
                          <span className="font-medium text-slate-900">{project.projectType}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Material:</span>{" "}
                          <span className="font-medium text-slate-900">
                            {project.materialRequirements}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500">Quantity:</span>{" "}
                          <span className="font-medium text-slate-900">
                            {project.estimatedQuantity || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500">Target Date:</span>{" "}
                          <span className="font-medium text-slate-900">
                            {project.expectedDate || "N/A"}
                          </span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-slate-50 text-xs text-slate-700">
                        <span className="font-bold text-slate-900">Description:</span>
                        <p className="mt-1 text-slate-600 whitespace-pre-line">
                          {project.projectDescription}
                        </p>
                      </div>
                    </div>

                    {/* Review Section 4 */}
                    <div className="rounded-lg border border-[#DCE5EF] p-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#103766]">
                          4. Documents & Drawings
                        </span>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(4)}
                          className="text-xs font-semibold text-[#0755A4] hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                      {uploadedFiles.length > 0 ? (
                        <ul className="text-xs space-y-1 text-slate-700">
                          {uploadedFiles.map((f, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <FileCheck size={14} className="text-emerald-600" />
                              <span>{f.name}</span>
                              <span className="text-slate-400">
                                ({(f.size / 1024 / 1024).toFixed(2)} MB)
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs text-slate-500">
                          No files attached. You can provide drawings via WhatsApp or email.
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(4)}
                        className="h-11 px-5"
                      >
                        <ArrowLeft size={16} className="mr-1.5" />
                        <span>Back</span>
                      </Button>
                      <Button
                        type="submit"
                        className="h-12 bg-[#0755A4] text-white hover:bg-[#064789] px-8 font-semibold text-base shadow-sm"
                      >
                        <span>Submit Quotation Request</span>
                        <ArrowRight size={17} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
