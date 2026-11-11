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

import { siteImages } from "@/lib/images";

// High-resolution showcase assets from central library
const heroWorkshop = siteImages.hero.home.webp;
const aboutFacility = siteImages.hero.about.webp;
const prodDuctsHero = siteImages.hero.products.webp;
const catHvacDucts = siteImages.categories.ducting.webp;
const catGrilles = siteImages.categories.grilles.webp;
const catFabrication = siteImages.categories.services.webp;
const catInsulation = siteImages.categories.insulation.webp;
const catIndustrial = siteImages.categories.supplies.webp;
const popGiDuct = siteImages.products.giRectangularDuct.webp;
const popFlexDuct = siteImages.products.flexibleDuct.webp;
const popPidDuct = siteImages.products.preInsulatedDuct.webp;
const popDiffuser = siteImages.products.grillesDiffusers.webp;
const popKitchenHood = siteImages.products.kitchenExhaustHood.webp;
const popFoilTape = siteImages.products.aluminiumFoilTape.webp;
const popDuctTape = siteImages.products.ductTape.webp;
const projCommercial = siteImages.industries.commercial.webp;
const projIndustrial = siteImages.industries.industrial.webp;
const projHospitality = siteImages.industries.hospitality.webp;
const projResidential = siteImages.industries.residential.webp;
const aboutWelder = siteImages.workshop.welder.webp;
const aboutCapDucting = siteImages.categories.ducting.webp;
const aboutCapHood = siteImages.products.kitchenExhaustHood.webp;
const aboutCapDiffuser = siteImages.products.grillesDiffusers.webp;
const aboutCapSupplies = siteImages.categories.supplies.webp;
const aboutIndHealthcare = siteImages.industries.healthcare.webp;
const prodCustomFabrication = siteImages.products.customFabrication.webp;
const prodGiDucts = siteImages.products.giRectangularDuct.webp;
const prodFlexDucts = siteImages.products.flexibleDuct.webp;
const prodPidDucts = siteImages.products.preInsulatedDuct.webp;
const prodGrilles = siteImages.products.grillesDiffusers.webp;
const prodKitchenHood = siteImages.products.kitchenExhaustHood.webp;
const prodDuctAccessories = siteImages.products.ductAccessories.webp;
const prodInsulation = siteImages.products.insulationMaterials.webp;
const prodTapes = siteImages.products.aluminiumFoilTape.webp;

export const assets = {
  gcLogo,
  companyBanner,
  fabricationWorkshop,
  ductworkComponents,
  roundDuctwork,
  volumeControlDamper,
  ductFittingDetail,
  ductWorksCatalog,
  dampersLouvresCatalog,
  accessoriesCatalog,
  pidAccessoriesCatalog,
  insulationTapesCatalog,
  metalFabricationShowcase,
  perforatedSheetFlyer,
  ductSolutionsBanner,
  pidDuctsFlyer,
  workshopFacility,
  whyChooseGc,
  // Showcase
  heroWorkshop,
  aboutFacility,
  prodDuctsHero,
  catHvacDucts,
  catGrilles,
  catFabrication,
  catInsulation,
  catIndustrial,
  popGiDuct,
  popFlexDuct,
  popPidDuct,
  popDiffuser,
  popKitchenHood,
  popFoilTape,
  popDuctTape,
  projCommercial,
  projIndustrial,
  projHospitality,
  projResidential,
  aboutWelder,
  aboutCapDucting,
  aboutCapHood,
  aboutCapDiffuser,
  aboutCapSupplies,
  aboutIndHealthcare,
  prodCustomFabrication,
  prodGiDucts,
  prodFlexDucts,
  prodPidDucts,
  prodGrilles,
  prodKitchenHood,
  prodDuctAccessories,
  prodInsulation,
  prodTapes,
};

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
    image: siteImages.products.giRectangularDuct.webp,
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
    title: "Round Spiral Ducts",
    category: "Spiral & Round",
    shortDescription:
      "Round spiral and seam-welded ducting solutions providing high airflow efficiency and low static pressure loss.",
    description:
      "Round duct systems fabricated for commercial venues, exposed architectural ceilings, and industrial air handling where aerodynamic performance and acoustic quietness are paramount.",
    application:
      "Exposed architectural ceilings, industrial exhaust, fume collection, and high-velocity systems.",
    image: siteImages.products.roundSpiralDuct.webp,
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
    image: siteImages.products.ductAccessories.webp,
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
    image: siteImages.products.grillesDiffusers.webp,
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
    image: siteImages.products.volumeControlDamper.webp,
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
    image: siteImages.workshop.facility.webp,
    alt: "Craftsman assembling bespoke ductwork components in fabrication workshop",
    features: [
      "Fabrication directly from client drawings, BOQ, and CAD plans",
      "Rapid turnaround for urgent on-site modification requirements",
      "Selection of Galvanized Iron, Stainless Steel, and PID boards",
      "Direct consultation with experienced fabrication specialists",
    ],
  },
] as const;

export const homeCategoryCards = [
  {
    id: "cat-ducting",
    title: "HVAC Ducting",
    description: "GI & PID Ducts, Fittings, Flexible, Pre-Insulated Ducts",
    image: catHvacDucts,
    href: "/products?category=hvac-ducting",
  },
  {
    id: "cat-grilles",
    title: "Grilles & Diffusers",
    description: "Air Grilles, Diffusers, Louvers, Dampers",
    image: catGrilles,
    href: "/products?category=grilles-diffusers",
  },
  {
    id: "cat-services",
    title: "Fabrication Services",
    description: "SS Fabrication, Kitchen Hood, Custom Fabrication",
    image: catFabrication,
    href: "/services",
  },
  {
    id: "cat-insulation",
    title: "Insulation & Accessories",
    description: "Insulation Materials, Tapes, Duct Accessories",
    image: catInsulation,
    href: "/products?category=insulation",
  },
  {
    id: "cat-supplies",
    title: "Industrial Supplies",
    description: "Hardware, Power Tools, Hand Tools, Paints, Safety Products",
    image: catIndustrial,
    href: "/products?category=hardware-tools",
  },
] as const;

export const popularProducts = [
  {
    id: "pop-gi-duct",
    name: "GI Duct & Fittings",
    image: popGiDuct,
    category: "hvac-ducting",
  },
  {
    id: "pop-flex-duct",
    name: "Flexible Duct",
    image: popFlexDuct,
    category: "hvac-ducting",
  },
  {
    id: "pop-pid-duct",
    name: "Pre-Insulated Duct",
    image: popPidDuct,
    category: "hvac-ducting",
  },
  {
    id: "pop-diffuser",
    name: "Grilles & Diffusers",
    image: popDiffuser,
    category: "grilles-diffusers",
  },
  {
    id: "pop-kitchen-hood",
    name: "Kitchen Hood",
    image: popKitchenHood,
    category: "kitchen-hood",
  },
  {
    id: "pop-foil-tape",
    name: "Aluminium Foil Tape",
    image: popFoilTape,
    category: "tapes",
  },
  {
    id: "pop-duct-tape",
    name: "Duct Tape",
    image: popDuctTape,
    category: "tapes",
  },
] as const;

export const productCategories = [
  { id: "all", name: "All Products", count: 96 },
  {
    id: "hvac-ducting",
    name: "HVAC Ducting & Fittings",
    count: 18,
    subcategories: [
      "GI & PID Ducts & Fittings",
      "Flexible Ducts",
      "Pre-Insulated Ducts",
      "Duct Accessories",
    ],
  },
  { id: "grilles-diffusers", name: "Grilles & Diffusers", count: 12 },
  { id: "kitchen-hood", name: "Kitchen Hood", count: 6 },
  { id: "insulation", name: "Insulation Materials", count: 8 },
  { id: "tapes", name: "Tapes", count: 10 },
  { id: "hardware-tools", name: "Hardware & Tools", count: 14 },
  { id: "paints", name: "Paints", count: 6 },
  { id: "safety", name: "Safety Products", count: 8 },
] as const;

export const catalogProducts = [
  {
    id: "gi-ducts-fittings",
    title: "GI Ducts & Fittings",
    categoryId: "hvac-ducting",
    categoryName: "HVAC Ducting & Fittings",
    subcategory: "GI & PID Ducts & Fittings",
    description: "Durable and reliable galvanized iron ducting and fittings for HVAC systems.",
    image: prodGiDucts,
    featured: true,
  },
  {
    id: "flexible-ducts",
    title: "Flexible Ducts",
    categoryId: "hvac-ducting",
    categoryName: "HVAC Ducting & Fittings",
    subcategory: "Flexible Ducts",
    description: "Flexible and lightweight ducting solutions for various ventilation applications.",
    image: prodFlexDucts,
    featured: true,
  },
  {
    id: "pre-insulated-ducts",
    title: "Pre-Insulated Ducts",
    categoryId: "hvac-ducting",
    categoryName: "HVAC Ducting & Fittings",
    subcategory: "Pre-Insulated Ducts",
    description: "Energy-efficient ducting with superior thermal insulation properties.",
    image: prodPidDucts,
    featured: true,
  },
  {
    id: "grilles-diffusers-cat",
    title: "Grilles & Diffusers",
    categoryId: "grilles-diffusers",
    categoryName: "Grilles & Diffusers",
    description:
      "A wide range of air distribution grilles and diffusers for optimal airflow and comfort.",
    image: prodGrilles,
    featured: true,
  },
  {
    id: "kitchen-hood-cat",
    title: "Kitchen Hood",
    categoryId: "kitchen-hood",
    categoryName: "Kitchen Hood",
    description: "High-performance kitchen hoods for commercial and industrial kitchens.",
    image: prodKitchenHood,
    featured: true,
  },
  {
    id: "duct-accessories-cat",
    title: "Duct Accessories",
    categoryId: "hvac-ducting",
    categoryName: "HVAC Ducting & Fittings",
    subcategory: "Duct Accessories",
    description: "Essential accessories for a complete and efficient ducting system.",
    image: prodDuctAccessories,
    featured: false,
  },
  {
    id: "insulation-materials-cat",
    title: "Insulation Materials",
    categoryId: "insulation",
    categoryName: "Insulation Materials",
    description: "Thermal and acoustic insulation materials for better efficiency and performance.",
    image: prodInsulation,
    featured: false,
  },
  {
    id: "tapes-cat",
    title: "Tapes",
    categoryId: "tapes",
    categoryName: "Tapes",
    description: "High-quality tapes for sealing insulation and joint applications.",
    image: prodTapes,
    featured: true,
  },
  {
    id: "hardware-tools-cat",
    title: "Hardware & Installation Tools",
    categoryId: "hardware-tools",
    categoryName: "Hardware & Tools",
    description:
      "Heavy-duty unistrut channels, threaded rods, hanger brackets, drill bits and fasteners.",
    image: siteImages.products.hardwareTools.webp,
    featured: false,
  },
  {
    id: "paints-coatings-cat",
    title: "Industrial Paints & Sealants",
    categoryId: "paints",
    categoryName: "Paints",
    description:
      "Cold galvanizing zinc sprays, primers, and air-tight mastic sealants for duct joints.",
    image: catIndustrial,
    featured: false,
  },
  {
    id: "safety-gear-cat",
    title: "Safety Products & PPE",
    categoryId: "safety",
    categoryName: "Safety Products",
    description:
      "Certified safety helmets, anti-cut gloves, protective goggles, and site safety gear.",
    image: catIndustrial,
    featured: false,
  },
  {
    id: "volume-dampers-cat",
    title: "Volume Control Dampers",
    categoryId: "grilles-diffusers",
    categoryName: "Grilles & Diffusers",
    description:
      "Manual quadrant and motorized multi-blade dampers for precise branch airflow calibration.",
    image: siteImages.products.volumeControlDamper.webp,
    featured: true,
  },
];

export const featuredCarouselItems = [
  {
    id: "fc-round",
    name: "Round Duct",
    image: siteImages.products.roundSpiralDuct.webp,
    href: "/products?category=hvac-ducting",
  },
  {
    id: "fc-rect",
    name: "Rectangular Duct",
    image: siteImages.products.giRectangularDuct.webp,
    href: "/products?category=hvac-ducting",
  },
  {
    id: "fc-flex",
    name: "Flex Duct",
    image: popFlexDuct,
    href: "/products?category=hvac-ducting",
  },
  {
    id: "fc-diffuser",
    name: "Diffuser",
    image: popDiffuser,
    href: "/products?category=grilles-diffusers",
  },
  {
    id: "fc-hood",
    name: "Kitchen Hood",
    image: popKitchenHood,
    href: "/products?category=kitchen-hood",
  },
  {
    id: "fc-damper",
    name: "Volume Damper",
    image: siteImages.products.volumeControlDamper.webp,
    href: "/products?category=grilles-diffusers",
  },
  {
    id: "fc-foil",
    name: "Aluminium Foil Tape",
    image: popFoilTape,
    href: "/products?category=tapes",
  },
];

export const projectIndustries = [
  {
    id: "comm",
    name: "Commercial Buildings",
    description: "Commercial offices, shopping malls, and mixed-use complexes.",
    image: projCommercial,
  },
  {
    id: "ind",
    name: "Industrial Facilities",
    description: "Manufacturing plants, logistics hubs, and heavy engineering facilities.",
    image: projIndustrial,
  },
  {
    id: "hosp",
    name: "Hospitality & Restaurants",
    description: "Hotels, commercial kitchens, exhaust hood systems, and restaurants.",
    image: projHospitality,
  },
  {
    id: "res",
    name: "Residential Projects",
    description: "Condominiums, residential towers, and landed estate ventilation.",
    image: projResidential,
  },
  {
    id: "health",
    name: "Healthcare",
    description: "Hospitals, cleanrooms, medical laboratories, and pharmaceutical suites.",
    image: aboutIndHealthcare,
  },
] as const;

export const galleryItems = [
  {
    id: "workshop-assembly",
    title: "Workshop Duct Assembly",
    category: "Workshop",
    caption: "Galvanized rectangular duct assembly on precision metal fabrication workbench.",
    image: siteImages.workshop.facility.webp,
    alt: "Technician assembling rectangular ductwork in GC Fabrication workshop",
  },
  {
    id: "rectangular-ductwork-staging",
    title: "Rectangular Duct Sections & Transitions",
    category: "Ductwork",
    caption: "Cleanly finished rectangular ducts with TDF flanges ready for transport.",
    image: siteImages.products.giRectangularDuct.webp,
    alt: "Finished rectangular duct sections and transition pieces",
  },
  {
    id: "round-spiral-ducts",
    title: "Round Spiral Ducts & Reducers",
    category: "Ductwork",
    caption: "Galvanized spiral ducts, segmented elbows, and concentric cone reducers.",
    image: siteImages.products.roundSpiralDuct.webp,
    alt: "Round spiral ducts and segmented elbow components in workshop",
  },
  {
    id: "volume-control-damper-detail",
    title: "Volume Control Damper Assembly",
    category: "Dampers",
    caption: "Multi-blade volume control damper with precision linkage and adjustment handle.",
    image: siteImages.products.volumeControlDamper.webp,
    alt: "Close-up of volume control damper and blade linkage mechanism",
  },
  {
    id: "duct-fitting-transitions",
    title: "Precision Transition Fittings",
    category: "Fittings",
    caption: "Offset and transition fittings manufactured for specialized building clearances.",
    image: siteImages.products.ductAccessories.webp,
    alt: "Close up of fabricated duct transitions and offset fittings",
  },
  {
    id: "duct-works-comprehensive",
    title: "Duct Works & Fittings Catalog",
    category: "Ductwork",
    caption: "Comprehensive fabrication lineup including elbows, tees, S-bends, and crosses.",
    image: siteImages.products.grillesDiffusers.webp,
    alt: "Catalog showing full range of duct works and geometric fittings",
  },
  {
    id: "pid-duct-system-overview",
    title: "Pre-Insulated Duct (PID) System",
    category: "PID Systems",
    caption: "PID lightweight pre-insulated ducting system and PIR board specifications.",
    image: siteImages.products.preInsulatedDuct.webp,
    alt: "PID duct system showing lightweight pre-insulated duct sections",
  },
  {
    id: "dampers-louvres-selection",
    title: "Dampers, Diffusers & Louvres Range",
    category: "Dampers",
    caption: "Air balancing dampers, diffusers, jet nozzles, and architectural louvres.",
    image: siteImages.products.grillesDiffusers.webp,
    alt: "Catalogue of dampers, grilles, diffusers and louvres",
  },
  {
    id: "accessories-hardware-lineup",
    title: "Fabrication Accessories & Hardware",
    category: "Accessories",
    caption: "TDF corners, access doors, unistrut, clips, and sheet metal hardware.",
    image: siteImages.products.ductAccessories.webp,
    alt: "Fabrication accessories including access doors and TDF corners",
  },
  {
    id: "pid-accessories-tools",
    title: "PID Accessories & Tooling",
    category: "PID Systems",
    caption: "PID flanges, tiger connectors, angles, adhesives, and installation toolkits.",
    image: siteImages.products.preInsulatedDuct.webp,
    alt: "PID accessories, flanges, adhesives, and tools",
  },
  {
    id: "insulation-and-tapes",
    title: "Insulation & Specialist Tapes",
    category: "Accessories",
    caption: "Flexible ducts, rockwool, closed cell insulation, and aluminium tapes.",
    image: siteImages.products.insulationMaterials.webp,
    alt: "Insulation materials and specialist tapes catalog",
  },
  {
    id: "perforated-sheets-showcase",
    title: "GI Perforated Sheets & Plates",
    category: "Sheet Metal",
    caption: "Perforated sheet patterns for acoustic, architectural, and ventilation uses.",
    image: siteImages.products.hardwareTools.webp,
    alt: "GI perforated sheet showing various hole patterns",
  },
  {
    id: "workshop-facility-floor",
    title: "Workshop Facility & Staging",
    category: "Workshop",
    caption: "Spacious workshop facility in Kaki Bukit for duct fabrication and QA staging.",
    image: siteImages.workshop.facility.webp,
    alt: "GC Fabrication workshop facility showing rows of fabricated ductwork",
  },
  {
    id: "metal-showcase-products",
    title: "Metal Fabrication & Tables",
    category: "Sheet Metal",
    caption: "Angle bars, duct staging, insulations, and heavy-duty fabrication work tables.",
    image: siteImages.products.customFabrication.webp,
    alt: "Metal fabrication showcase showing angle bars, ducts, and work tables",
  },
] as const;

// Backward-compatible products list export
export const products = catalogProducts.map((p) => ({
  id: p.id,
  name: p.title,
  category: p.categoryName,
  description: p.description,
  image: p.image,
  alt: p.title,
  highlights: ["ACMV Commercial Grade", "Singapore Project Ready", "Direct Workshop Supply"],
}));

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
