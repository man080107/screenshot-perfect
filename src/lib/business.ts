export const company = {
  name: "GC FABRICATION PTE. LTD.",
  phone: "+65 8969 3747",
  whatsappNumber: "6589693747",
  address: "8 Kaki Bukit Ave 4, #04-02, Premier @ Kaki Bukit, Singapore 415875",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=8+Kaki+Bukit+Ave+4%2C+%2304-02%2C+Singapore+415875",
} as const;

export const whatsappHref = (message: string) =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const generalEnquiryMessage =
  "Hello GC FABRICATION PTE. LTD., I would like to enquire about your ACMV duct fabrication services. Could you please share more information?";

export const services = [
  {
    title: "Rectangular Duct Fabrication",
    description:
      "Rectangular ductwork fabricated for ACMV applications, with configurations based on project requirements.",
    application: "For commercial and industrial ventilation systems.",
    image: "/assets/ductwork-components.jpg",
    alt: "Illustrative rectangular ductwork components in a fabrication workshop",
    category: "Rectangular Ducts",
  },
  {
    title: "Round Duct Fabrication",
    description:
      "Round ductwork solutions for suitable ventilation applications, discussed against your project needs.",
    application: "For ventilation applications suited to round ductwork.",
    image: "/assets/round-ductwork.jpg",
    alt: "Illustrative round ventilation duct sections and fittings",
    category: "Round Ducts",
  },
  {
    title: "Duct Transitions",
    description:
      "Fabricated transition components connecting different duct dimensions or configurations.",
    application: "For changes in duct dimensions or system configuration.",
    image: "/assets/duct-fitting-detail.jpg",
    alt: "Illustrative duct transition and offset fittings",
    category: "Transitions",
  },
  {
    title: "Duct Fittings",
    description:
      "Ductwork fittings and associated components for ventilation systems.",
    application: "For ductwork layouts and connected ventilation runs.",
    image: "/assets/duct-fitting-detail.jpg",
    alt: "Illustrative fabricated duct fittings arranged on a workbench",
    category: "Fittings",
  },
  {
    title: "Volume Control Dampers",
    description:
      "Ductwork components designed to help regulate airflow within a ventilation system.",
    application: "For ventilation systems requiring airflow regulation.",
    image: "/assets/volume-control-damper.jpg",
    alt: "Illustrative volume control damper in a rectangular duct",
    category: "Dampers",
  },
  {
    title: "Custom Ductwork Solutions",
    description:
      "Fabrication enquiries considered against customer drawings, dimensions and project requirements, subject to company capabilities.",
    application: "For project-specific ductwork requirements and drawings.",
    image: "/assets/fabrication-workshop.jpg",
    alt: "Illustrative worker fabricating ventilation ductwork in a workshop",
    category: "Custom",
  },
] as const;

export const products = [
  { name: "Rectangular Ducts", description: "Rectangular ductwork for ACMV applications.", image: services[0].image, alt: services[0].alt },
  { name: "Round Ducts", description: "Round ductwork for suitable ventilation applications.", image: services[1].image, alt: services[1].alt },
  { name: "Duct Transitions", description: "Components connecting different duct dimensions or configurations.", image: services[2].image, alt: services[2].alt },
  { name: "Duct Fittings", description: "Associated ductwork fittings and components.", image: services[3].image, alt: services[3].alt },
  { name: "Volume Control Dampers", description: "Ductwork components designed for airflow regulation.", image: services[4].image, alt: services[4].alt },
  { name: "Custom Fabricated Components", description: "Enquiries considered against drawings and project requirements.", image: services[5].image, alt: services[5].alt },
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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}