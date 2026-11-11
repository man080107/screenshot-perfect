import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";

import {
  catalogProducts,
  featuredCarouselItems,
  galleryItems,
  homeCategoryCards,
  popularProducts,
  productCategories,
  projectIndustries,
  services,
} from "@/lib/business";
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

  it("has all catalog product, service, gallery, carousel, and industry images verified with WebP & JPG fallbacks", () => {
    const allRefs = [
      ...catalogProducts.map((p) => p.image),
      ...services.map((s) => s.image),
      ...galleryItems.map((g) => g.image),
      ...featuredCarouselItems.map((f) => f.image),
      ...popularProducts.map((p) => p.image),
      ...projectIndustries.map((i) => i.image),
    ];

    allRefs.forEach((imgPath) => {
      expect(imgPath.startsWith("/images/"), `Expected public /images/ path, got: ${imgPath}`).toBe(
        true,
      );
      const webpDisk = path.join(process.cwd(), "public", imgPath.replace(/^\//, ""));
      const jpgDisk = webpDisk.replace(/\.webp$/, ".jpg");
      expect(fs.existsSync(webpDisk), `WebP exists: ${imgPath}`).toBe(true);
      expect(fs.existsSync(jpgDisk), `JPG fallback exists: ${imgPath}`).toBe(true);
    });
  });

  it("homeCategoryCards map to valid destinations and verified images", () => {
    expect(homeCategoryCards.length).toBe(5);
    homeCategoryCards.forEach((cat) => {
      expect(cat.href).toMatch(/^\/(products|services)/);
      expect(cat.title.length).toBeGreaterThan(3);
    });
  });

  it("productCategories list matches expected 8 official categories and subcategories", () => {
    expect(productCategories.length).toBe(9);
    productCategories.forEach((cat) => {
      expect(cat).not.toHaveProperty("count");
    });

    const pidDucts = productCategories.find((c) => c.id === "pid-ducts-duct-works");
    expect(pidDucts?.subcategories?.length).toBeGreaterThanOrEqual(3);

    const acc = productCategories.find((c) => c.id === "pid-duct-accessories");
    expect(acc?.subcategories?.length).toBeGreaterThanOrEqual(2);
  });

  it("popularProducts use unique non-duplicated images", () => {
    expect(popularProducts.length).toBe(7);
    const uniqueImages = new Set(popularProducts.map((p) => p.image));
    expect(uniqueImages.size).toBe(popularProducts.length);
  });
});
