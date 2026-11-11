/**
 * Central Image Asset Library for GC Fabrication
 * High-resolution, optimized WebP & JPEG assets
 */

export interface ImageAsset {
  src: string;
  webp: string;
  fallback: string;
  alt: string;
  width: number;
  height: number;
}

export const siteImages = {
  logo: {
    iconSvg: "/images/logo/gc-icon.svg",
    iconPng: "/images/logo/gc-icon.png",
    fullSvg: "/images/logo/gc-logo-full.svg",
    fullPng: "/images/logo/gc-logo-full.png",
    alt: "GC FABRICATION PTE. LTD. Logo",
  },
  hero: {
    home: {
      webp: "/images/hero/home-hero-wide.webp",
      fallback: "/images/hero/home-hero-wide.jpg",
      alt: "GC Fabrication HVAC ductwork manufacturing workshop and facility in Singapore",
      width: 1920,
      height: 1000,
    },
    about: {
      webp: "/images/hero/about-hero-facility.webp",
      fallback: "/images/hero/about-hero-facility.jpg",
      alt: "GC Fabrication industrial engineering facility and staging area",
      width: 1920,
      height: 1000,
    },
    products: {
      webp: "/images/hero/products-hero-wide.webp",
      fallback: "/images/hero/products-hero-wide.jpg",
      alt: "Commercial HVAC exposed ductwork and ventilation installation",
      width: 1920,
      height: 1000,
    },
  },
  categories: {
    ducting: {
      webp: "/images/categories/cat-hvac-ducting.webp",
      fallback: "/images/categories/cat-hvac-ducting.jpg",
      alt: "Galvanized iron and pre-insulated HVAC ducting sections and fittings",
      width: 1000,
      height: 750,
    },
    grilles: {
      webp: "/images/categories/cat-grilles-diffusers.webp",
      fallback: "/images/categories/cat-grilles-diffusers.jpg",
      alt: "HVAC air grilles, 4-way square ceiling diffusers, and louvers",
      width: 1000,
      height: 750,
    },
    services: {
      webp: "/images/categories/cat-fabrication-services.webp",
      fallback: "/images/categories/cat-fabrication-services.jpg",
      alt: "Custom stainless steel sheet metal welding and fabrication",
      width: 1000,
      height: 750,
    },
    insulation: {
      webp: "/images/categories/cat-insulation-accessories.webp",
      fallback: "/images/categories/cat-insulation-accessories.jpg",
      alt: "Thermal insulation materials, glasswool, and specialized duct tapes",
      width: 1000,
      height: 750,
    },
    supplies: {
      webp: "/images/categories/cat-industrial-supplies.webp",
      fallback: "/images/categories/cat-industrial-supplies.jpg",
      alt: "Industrial hardware, sheet metal fasteners, power tools, and supplies",
      width: 1000,
      height: 750,
    },
  },
  products: {
    giRectangularDuct: {
      webp: "/images/products/gi-rectangular-duct.webp",
      fallback: "/images/products/gi-rectangular-duct.jpg",
      alt: "Fabricated rectangular Galvanized Iron (GI) ductwork with TDF flanges",
      width: 1000,
      height: 1000,
    },
    roundSpiralDuct: {
      webp: "/images/products/round-spiral-duct.webp",
      fallback: "/images/products/round-spiral-duct.jpg",
      alt: "Round spiral lockseam ducts, reducers, and segmented elbows",
      width: 1000,
      height: 1000,
    },
    flexibleDuct: {
      webp: "/images/products/flexible-duct.webp",
      fallback: "/images/products/flexible-duct.jpg",
      alt: "Insulated flexible aluminium duct with steel wire helix",
      width: 1000,
      height: 1000,
    },
    preInsulatedDuct: {
      webp: "/images/products/pre-insulated-duct.webp",
      fallback: "/images/products/pre-insulated-duct.jpg",
      alt: "High-performance Pre-Insulated Duct (PID) polyurethane panels",
      width: 1000,
      height: 1000,
    },
    grillesDiffusers: {
      webp: "/images/products/grilles-diffusers.webp",
      fallback: "/images/products/grilles-diffusers.jpg",
      alt: "4-way ceiling supply air diffusers and return air grilles",
      width: 1000,
      height: 1000,
    },
    kitchenExhaustHood: {
      webp: "/images/products/kitchen-exhaust-hood.webp",
      fallback: "/images/products/kitchen-exhaust-hood.jpg",
      alt: "Commercial stainless steel kitchen exhaust canopy hood with grease filters",
      width: 1000,
      height: 1000,
    },
    volumeControlDamper: {
      webp: "/images/products/volume-control-damper.webp",
      fallback: "/images/products/volume-control-damper.jpg",
      alt: "Multi-blade volume control damper with manual quadrant adjustment",
      width: 1000,
      height: 1000,
    },
    ductAccessories: {
      webp: "/images/products/duct-accessories.webp",
      fallback: "/images/products/duct-accessories.jpg",
      alt: "Ductwork installation accessories, TDF corners, cleats, and hardware",
      width: 1000,
      height: 1000,
    },
    insulationMaterials: {
      webp: "/images/products/insulation-materials.webp",
      fallback: "/images/products/insulation-materials.jpg",
      alt: "Thermal and acoustic glasswool and elastomeric insulation blankets",
      width: 1000,
      height: 1000,
    },
    aluminiumFoilTape: {
      webp: "/images/products/aluminium-foil-tape.webp",
      fallback: "/images/products/aluminium-foil-tape.jpg",
      alt: "Reinforced aluminium foil tape roll for airtight duct seam sealing",
      width: 1000,
      height: 1000,
    },
    ductTape: {
      webp: "/images/products/duct-tape.webp",
      fallback: "/images/products/duct-tape.jpg",
      alt: "Heavy duty industrial grade silver cloth duct tape roll",
      width: 1000,
      height: 1000,
    },
    hardwareTools: {
      webp: "/images/products/hardware-tools.webp",
      fallback: "/images/products/hardware-tools.jpg",
      alt: "Industrial duct installation power tools, fasteners, and hardware",
      width: 1000,
      height: 1000,
    },
    customFabrication: {
      webp: "/images/fabrication/custom-fabrication.webp",
      fallback: "/images/fabrication/custom-fabrication.jpg",
      alt: "Bespoke stainless steel and sheet metal fabrication works",
      width: 1200,
      height: 800,
    },
  },
  workshop: {
    facility: {
      webp: "/images/workshop/workshop-facility.webp",
      fallback: "/images/workshop/workshop-facility.jpg",
      alt: "GC Fabrication workshop floor in Kaki Bukit Singapore",
      width: 1400,
      height: 900,
    },
    welder: {
      webp: "/images/workshop/workshop-welder.webp",
      fallback: "/images/workshop/workshop-welder.jpg",
      alt: "Skilled fabrication technician welding custom ductwork in workshop",
      width: 1400,
      height: 900,
    },
  },
  industries: {
    commercial: {
      webp: "/images/industries/ind-commercial.webp",
      fallback: "/images/industries/ind-commercial.jpg",
      alt: "Modern commercial office buildings with central ACMV systems",
      width: 1200,
      height: 800,
    },
    industrial: {
      webp: "/images/industries/ind-industrial.webp",
      fallback: "/images/industries/ind-industrial.jpg",
      alt: "Industrial manufacturing plants and mechanical ventilation facilities",
      width: 1200,
      height: 800,
    },
    residential: {
      webp: "/images/industries/ind-residential.webp",
      fallback: "/images/industries/ind-residential.jpg",
      alt: "High-density residential and condominium developments",
      width: 1200,
      height: 800,
    },
    hospitality: {
      webp: "/images/industries/ind-hospitality.webp",
      fallback: "/images/industries/ind-hospitality.jpg",
      alt: "Hospitality, hotels, and commercial dining venues",
      width: 1200,
      height: 800,
    },
    healthcare: {
      webp: "/images/industries/ind-healthcare.webp",
      fallback: "/images/industries/ind-healthcare.jpg",
      alt: "Healthcare, cleanroom, and pharmaceutical laboratory ventilation",
      width: 1200,
      height: 800,
    },
  },
} as const;
