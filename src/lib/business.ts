import gcLogo from "@/assets/gc-logo.jpg";
import companyBanner from "@/assets/company-banner.jpg";
import fabricationWorkshop from "@/assets/fabrication-workshop.jpg";
import ductworkComponents from "@/assets/ductwork-components.jpg";
import roundDuctwork from "@/assets/round-ductwork.jpg";
import volumeControlDamper from "@/assets/volume-control-damper.jpg";
import ductFittingDetail from "@/assets/duct-fitting-detail.jpg";
import ductWorksCatalog from "@/assets/duct-works-catalog.jpg";
import dampersLouvresCatalog from "@/assets/dampers-louvres-catalog.jpg";
import accessoriesCatalog from "@/assets/accessories-catalog.jpg";
import pidAccessoriesCatalog from "@/assets/pid-accessories-catalog.jpg";
import insulationTapesCatalog from "@/assets/insulation-tapes-catalog.jpg";
import metalFabricationShowcase from "@/assets/metal-fabrication-showcase.jpg";
import perforatedSheetFlyer from "@/assets/perforated-sheet-flyer.jpg";
import ductSolutionsBanner from "@/assets/duct-solutions-banner.jpg";
import pidDuctsFlyer from "@/assets/pid-ducts-flyer.jpg";
import workshopFacility from "@/assets/workshop-facility.jpg";
import whyChooseGc from "@/assets/why-choose-gc.jpg";

export const company = {
  name: "GC FABRICATION PTE. LTD.",
  shortName: "GC Fabrication",
  industry: "Industrial Fabrication & Engineering Services",
  specialisation: "ACMV (Air-Conditioning and Mechanical Ventilation) Duct Fabrication",
  phone: "+65 8969 3747",
  whatsappNumber: "6589693747",
  email: "sales.gcfabrication@gmail.com",
  address: "8 Kaki Bukit Ave 4, #04-02 Premier @ Kaki Bukit, Singapore 415875",
  postalCode: "415875",
  country: "Singapore",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=8+Kaki+Bukit+Ave+4%2C+%2304-02+Premier+%40+Kaki+Bukit+Singapore+415875",
  hours: "Monday – Saturday: 8:00 AM – 6:00 PM (Direct Workshop Consultation)",
} as const;

export const whatsappHref = (message: string) =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const generalEnquiryMessage =
  "Hello GC FABRICATION PTE. LTD., I would like to enquire about your ACMV duct fabrication services in Singapore. Could you please share more information?";

export const quoteEnquiryMessage = (service: string) =>
  `Hello GC FABRICATION PTE. LTD., I would like to request a quotation for: ${service}. Please let me know how to submit project drawings and specifications.`;

export const services = [
  {
    id: "rectangular-ducts",
    title: "Rectangular Duct Fabrication",
    category: "Galvanized & PID",
    shortDescription:
      "Precision-fabricated rectangular ductwork for commercial and industrial ACMV systems, engineered to exact project dimensions.",
    description:
      "High-precision rectangular galvanized iron (GI) and pre-insulated duct (PID) fabrication. Fabricated with Pittsburgh locks, TDF/TDC flange connections, and stiffeners complying with Singapore ventilation standards.",
    application:
      "Central air conditioning, mechanical ventilation, exhaust air, and AHU ductwork runs.",
    image: ductworkComponents,
    alt: "Fabricated rectangular ductwork sections and assembly in GC Fabrication workshop",
    features: [
      "Galvanized Iron (GI) sheet gauges tailored to duct dimensions",
      "TDF integral flanges & corner pieces for rigid airtight joints",
      "Smooth internal airflow surface to minimize static pressure loss",
      "Custom sizes fabricated directly from engineering drawings",
    ],
  },
  {
    id: "round-ducts",
    title: "Round Duct Fabrication",
    category: "Spiral & Round",
    shortDescription:
      "Round spiral and seam-welded ducting solutions providing high airflow efficiency and low static pressure loss.",
    description:
      "Round duct systems fabricated for commercial venues, exposed architectural ceilings, and industrial air handling where aerodynamic performance and acoustic quietness are paramount.",
    application:
      "Exposed architectural ceilings, industrial exhaust, fume collection, and high-velocity systems.",
    image: roundDuctwork,
    alt: "Round galvanized ventilation ducts, reducers, and spiral elbows",
    features: [
      "Rigid spiral lockseam construction for superior burst strength",
      "Precision bell-and-spigot and flanged connections",
      "Optimal aerodynamic efficiency with minimal air friction",
      "Available in standard diameters and project-specific dimensions",
    ],
  },
  {
    id: "duct-transitions",
    title: "Duct Transitions",
    category: "Custom Geometry",
    shortDescription:
      "Custom offset, concentric, eccentric, and round-to-square transitions ensuring seamless ventilation path continuity.",
    description:
      "Engineering transitions that smoothly bridge different duct cross-sections, route around structural obstacles, and connect AHUs or fan coil units to main distribution ducts without turbulent backpressure.",
    application:
      "Equipment connections, shaft entries, beam clearances, and system size transitions.",
    image: ductFittingDetail,
    alt: "Fabricated rectangular to square duct transitions and offset fittings",
    features: [
      "Gradual taper angles to maintain laminar airflow velocity",
      "Round-to-square and square-to-round custom transitions",
      "Eccentric and concentric offset duct pieces",
      "Reinforced seams and flanged ends ready for site installation",
    ],
  },
  {
    id: "duct-fittings",
    title: "Duct Fittings",
    category: "Elbows & Tees",
    shortDescription:
      "Comprehensive catalog of bends, elbows, tees, wyes, reducers, and branches manufactured to exact site requirements.",
    description:
      "Full spectrum of ductwork fittings including 90° and 45° elbows with turning vanes, branch tees, pants/trouser pieces, cross tees, and boot transitions designed for efficient distribution and clean routing.",
    application:
      "Complex duct routing, branch take-offs, directional changes, and riser connections.",
    image: ductWorksCatalog,
    alt: "Complete duct works catalogue of fabricated fittings and components",
    features: [
      "Radius and square elbows with engineered turning vanes",
      "Equal and reducing tees, wyes, and cross branches",
      "S-bends for elevation and lateral structural clearance",
      "Standard and custom throat radius configurations",
    ],
  },
  {
    id: "volume-control-dampers",
    title: "Volume Control Dampers",
    category: "Airflow Balancing",
    shortDescription:
      "Aerodynamic manual and motorized volume control dampers (VCD) and non-return dampers (NRD) for airflow balancing.",
    description:
      "Heavy-duty rectangular and round dampers engineered to calibrate, balance, and isolate airflow across branches. Features opposed-blade or parallel-blade mechanisms with external quadrants and locking handles.",
    application:
      "Zone airflow balancing, AHU supply/return branch regulation, and mechanical isolation.",
    image: volumeControlDamper,
    alt: "Heavy duty volume control damper with multi-blade linkage mechanism",
    features: [
      "Extruded aerodynamic blades for low turbulence and quiet operation",
      "Heavy gauge casing matching rectangular and round duct sizes",
      "Smooth manual quadrant with clear open/close position indicator",
      "Compatible with manual balancing or motorized actuator brackets",
    ],
  },
  {
    id: "custom-ductwork",
    title: "Custom Ductwork Solutions",
    category: "Bespoke Engineering",
    shortDescription:
      "Bespoke sheet metal fabrication, heavy working tables, plenum boxes, and specialized architectural metalwork.",
    description:
      "Specialist fabrication enquiries built directly to client drawings, CAD submittals, or site dimensions. From custom plenum boxes and sound attenuator casings to heavy industrial fabrication.",
    application:
      "Unique architectural constraints, plant rooms, industrial exhaust, and retrofitting.",
    image: fabricationWorkshop,
    alt: "Craftsman assembling bespoke ductwork components in fabrication workshop",
    features: [
      "Fabrication directly from client drawings, BOQ, and CAD plans",
      "Rapid turnaround for urgent on-site modification requirements",
      "Selection of Galvanized Iron, Stainless Steel, and PID boards",
      "Direct consultation with experienced fabrication specialists",
    ],
  },
] as const;

export const products = [
  {
    id: "gi-rectangular-ducts",
    name: "Galvanized Iron (GI) Ducts & Fittings",
    category: "GI Ducts",
    description:
      "Precision rectangular and spiral galvanized ductwork fabricated for commercial and industrial ventilation systems.",
    image: ductworkComponents,
    alt: "Galvanized iron rectangular ductwork and components",
    highlights: [
      "Lockseam & TDF construction",
      "Singapore ACMV standard compliance",
      "All standard & custom dimensions",
    ],
  },
  {
    id: "pid-duct-systems",
    name: "Pre-Insulated Duct (PID) Systems",
    category: "PID Ducts",
    description:
      "Lightweight, high-thermal-efficiency pre-insulated PIR ducting systems with embossed aluminium facings.",
    image: pidDuctsFlyer,
    alt: "Pre-insulated ducting system features and lightweight PIR board showcase",
    highlights: [
      "Superior thermal insulation",
      "Airtight & leak-proof joints",
      "Corrosion resistant & cleanroom suitable",
    ],
  },
  {
    id: "round-spiral-ductwork",
    name: "Round Spiral Ducts & Fittings",
    category: "Round Ducts",
    description:
      "High-velocity spiral lockseam round ducts, round elbows, reducers, and circular branch take-offs.",
    image: roundDuctwork,
    alt: "Round galvanized ventilation spiral ducts and reducers",
    highlights: [
      "High aerodynamic efficiency",
      "Minimal air friction & noise",
      "Ideal for exposed ceiling designs",
    ],
  },
  {
    id: "vcd-nrd-dampers",
    name: "Volume Control & Non-Return Dampers",
    category: "Dampers",
    description:
      "Square and round volume control dampers (VCD) and non-return dampers (NRD) for precise airflow balancing.",
    image: volumeControlDamper,
    alt: "Volume control damper mechanism for airflow regulation",
    highlights: [
      "Manual quadrant with lock",
      "Opposed blade aerodynamic design",
      "Motorised actuator mounting ready",
    ],
  },
  {
    id: "grilles-diffusers-louvres",
    name: "Grilles, Diffusers & Louvres",
    category: "Air Distribution",
    description:
      "4-way ceiling diffusers, round diffusers, linear slot diffusers, jet nozzles, and weather-proof external louvres.",
    image: dampersLouvresCatalog,
    alt: "Catalog of grilles, diffusers, louvres, and ventilation dampers",
    highlights: [
      "4-way & round diffusers",
      "Single & double deflection grilles",
      "Weatherproof external louvres",
    ],
  },
  {
    id: "acmv-accessories-hardware",
    name: "ACMV Accessories & Hardware",
    category: "Accessories",
    description:
      "Insulated access doors, TDF corner pieces, TDF clips, unistrut channels, threaded rods, and hardware fasteners.",
    image: accessoriesCatalog,
    alt: "Catalog of duct accessories including access doors, TDF corners, and hardware",
    highlights: [
      "Access doors for duct inspection",
      "TDF corners, clips & flanges",
      "Unistrut channels & support brackets",
    ],
  },
  {
    id: "insulation-flexible-ducts",
    name: "Insulation, Tapes & Flexible Ducts",
    category: "Insulation & Tapes",
    description:
      "Insulated flexible ducting, closed-cell rubber, fiberglass, rockwool slabs, aluminium foil, and duct sealing tapes.",
    image: insulationTapesCatalog,
    alt: "Catalog of duct insulation, flexible ducts, and industrial tapes",
    highlights: [
      "Insulated & uninsulated flexible ducts",
      "Rockwool & fiberglass insulation",
      "Aluminium & gasket sealing tapes",
    ],
  },
  {
    id: "perforated-sheets-plates",
    name: "GI Perforated Sheets & Plates",
    category: "Sheet Metal",
    description:
      "Galvanized perforated sheets, mild steel plates, wire mesh, and sound attenuator lining materials.",
    image: perforatedSheetFlyer,
    alt: "Galvanized perforated sheet flyer showing patterns and applications",
    highlights: [
      "High strength & corrosion resistant",
      "Acoustic & ventilation panels",
      "Custom cut-to-size sheets",
    ],
  },
] as const;

export const galleryItems = [
  {
    id: "workshop-assembly",
    title: "Workshop Duct Assembly",
    category: "Workshop",
    caption: "Galvanized rectangular duct assembly on precision metal fabrication workbench.",
    image: fabricationWorkshop,
    alt: "Technician assembling rectangular ductwork in GC Fabrication workshop",
  },
  {
    id: "rectangular-ductwork-staging",
    title: "Rectangular Duct Sections & Transitions",
    category: "Ductwork",
    caption: "Cleanly finished rectangular ducts with TDF flanges ready for transport.",
    image: ductworkComponents,
    alt: "Finished rectangular duct sections and transition pieces",
  },
  {
    id: "round-spiral-ducts",
    title: "Round Spiral Ducts & Reducers",
    category: "Ductwork",
    caption: "Galvanized spiral ducts, segmented elbows, and concentric cone reducers.",
    image: roundDuctwork,
    alt: "Round spiral ducts and segmented elbow components in workshop",
  },
  {
    id: "volume-control-damper-detail",
    title: "Volume Control Damper Assembly",
    category: "Dampers",
    caption: "Multi-blade volume control damper with precision linkage and adjustment handle.",
    image: volumeControlDamper,
    alt: "Close-up of volume control damper and blade linkage mechanism",
  },
  {
    id: "duct-fitting-transitions",
    title: "Precision Transition Fittings",
    category: "Fittings",
    caption: "Offset and transition fittings manufactured for specialized building clearances.",
    image: ductFittingDetail,
    alt: "Close up of fabricated duct transitions and offset fittings",
  },
  {
    id: "duct-works-comprehensive",
    title: "Duct Works & Fittings Catalog",
    category: "Catalog",
    caption: "Comprehensive fabrication lineup including elbows, tees, S-bends, and crosses.",
    image: ductWorksCatalog,
    alt: "Catalog showing full range of duct works and geometric fittings",
  },
  {
    id: "pid-duct-system-overview",
    title: "Pre-Insulated Duct (PID) System",
    category: "PID Systems",
    caption: "PID lightweight pre-insulated ducting system and PIR board specifications.",
    image: pidDuctsFlyer,
    alt: "PID duct system overview flyer showing lightweight pre-insulated duct box",
  },
  {
    id: "dampers-louvres-selection",
    title: "Dampers, Diffusers & Louvres Range",
    category: "Catalog",
    caption: "Air balancing dampers, diffusers, jet nozzles, and architectural louvres.",
    image: dampersLouvresCatalog,
    alt: "Catalogue of dampers, grilles, diffusers and louvres",
  },
  {
    id: "accessories-hardware-lineup",
    title: "Fabrication Accessories & Hardware",
    category: "Accessories",
    caption: "TDF corners, access doors, unistrut, clips, and sheet metal hardware.",
    image: accessoriesCatalog,
    alt: "Fabrication accessories including access doors and TDF corners",
  },
  {
    id: "pid-accessories-tools",
    title: "PID Accessories & Tooling",
    category: "PID Systems",
    caption: "PID flanges, tiger connectors, angles, adhesives, and installation toolkits.",
    image: pidAccessoriesCatalog,
    alt: "PID accessories, flanges, adhesives, and tools",
  },
  {
    id: "insulation-and-tapes",
    title: "Insulation & Specialist Tapes",
    category: "Accessories",
    caption: "Flexible ducts, rockwool, closed cell insulation, and aluminium tapes.",
    image: insulationTapesCatalog,
    alt: "Insulation materials and specialist tapes catalog",
  },
  {
    id: "perforated-sheets-showcase",
    title: "GI Perforated Sheets & Plates",
    category: "Sheet Metal",
    caption: "Perforated sheet patterns for acoustic, architectural, and ventilation uses.",
    image: perforatedSheetFlyer,
    alt: "GI perforated sheet flyer and features",
  },
  {
    id: "workshop-facility-floor",
    title: "Workshop Facility & Staging",
    category: "Workshop",
    caption: "Spacious workshop facility in Kaki Bukit for duct fabrication and QA staging.",
    image: workshopFacility,
    alt: "GC Fabrication workshop facility showing rows of fabricated ductwork",
  },
  {
    id: "metal-showcase-products",
    title: "Metal Fabrication & Tables",
    category: "Sheet Metal",
    caption: "Angle bars, duct staging, insulations, and heavy-duty fabrication work tables.",
    image: metalFabricationShowcase,
    alt: "Metal fabrication showcase showing angle bars, ducts, and work tables",
  },
] as const;

export function pageHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { property: "og:image", content: "/logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
