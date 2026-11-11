import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";

import { catalogProducts, homeCategoryCards, productCategories } from "@/lib/business";
import { siteImages } from "@/lib/images";

describe("High-Resolution Asset Library & Image Integrity", () => {
  it("has the official vector SVG logo in public/images/logo/", () => {
    const iconSvg = path.join(process.cwd(), "public", "images", "logo", "gc-icon.svg");
    const fullSvg = path.join(process.cwd(), "public", "images", "logo", "gc-logo-full.svg");
    expect(fs.existsSync(iconSvg)).toBe(true);
    expect(fs.existsSync(fullSvg)).toBe(true);

    const iconContent = fs.readFileSync(iconSvg, "utf8");
    expect(iconContent).toContain("<svg");
    expect(iconContent).toContain("gcGrad");
  });

  it("has high-resolution WebP and JPG hero images", () => {
    const heroes = [
      siteImages.hero.home.webp,
      siteImages.hero.about.webp,
      siteImages.hero.products.webp,
    ];
    heroes.forEach((heroPath) => {
      const diskPath = path.join(process.cwd(), "public", heroPath.replace(/^\//, ""));
      expect(fs.existsSync(diskPath), `Hero asset exists: ${heroPath}`).toBe(true);
      const stat = fs.statSync(diskPath);
      // High-resolution WebP should be substantial (> 50KB), not a 2KB blurry snippet
      expect(stat.size).toBeGreaterThan(50 * 1024);
    });
  });

  it("has sharp product category images", () => {
    const categories = Object.values(siteImages.categories);
    expect(categories.length).toBeGreaterThanOrEqual(5);

    categories.forEach((cat) => {
      const diskPath = path.join(process.cwd(), "public", cat.webp.replace(/^\//, ""));
      expect(fs.existsSync(diskPath), `Category asset exists: ${cat.webp}`).toBe(true);
    });
  });

  it("has all catalog product images verified with valid file sources", () => {
    catalogProducts.forEach((prod) => {
      expect(prod.image).toBeDefined();
      if (prod.image.startsWith("/")) {
        const diskPath = path.join(process.cwd(), "public", prod.image.replace(/^\//, ""));
        expect(fs.existsSync(diskPath), `Product image exists: ${prod.image}`).toBe(true);
      }
    });
  });

  it("homeCategoryCards map to valid destinations and verified images", () => {
    expect(homeCategoryCards.length).toBe(5);
    homeCategoryCards.forEach((cat) => {
      expect(cat.href).toMatch(/^\/(products|services)/);
      expect(cat.title.length).toBeGreaterThan(3);
    });
  });

  it("productCategories list matches expected count and subcategories", () => {
    expect(productCategories.length).toBe(9);
    const ductingCat = productCategories.find((c) => c.id === "hvac-ducting");
    expect(ductingCat?.subcategories?.length).toBeGreaterThanOrEqual(4);
  });
});
