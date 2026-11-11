const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function processImages() {
  console.log("--- Optimizing & Formatting Asset Library with Sharp ---");

  const configs = [
    // Heroes (1920 max width, 16:9 or banner ratio)
    { dir: "public/images/hero", width: 1920, height: 1000, fit: "cover" },
    // Category cards (1000x750, 4:3)
    { dir: "public/images/categories", width: 1000, height: 750, fit: "cover" },
    // Product items (1000x1000, 1:1 square, contain or cover based on type)
    { dir: "public/images/products", width: 1000, height: 1000, fit: "cover" },
    // Workshop (1400x900)
    { dir: "public/images/workshop", width: 1400, height: 900, fit: "cover" },
    // Fabrication (1200x800)
    { dir: "public/images/fabrication", width: 1200, height: 800, fit: "cover" },
    // Industries (1200x800)
    { dir: "public/images/industries", width: 1200, height: 800, fit: "cover" },
  ];

  for (const cfg of configs) {
    if (!fs.existsSync(cfg.dir)) continue;
    const files = fs.readdirSync(cfg.dir);
    for (const file of files) {
      if (file.endsWith(".webp")) continue; // Skip already converted webps
      const ext = path.extname(file).toLowerCase();
      if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

      const inputPath = path.join(cfg.dir, file);
      const baseName = path.basename(file, ext);
      const webpPath = path.join(cfg.dir, `${baseName}.webp`);
      const jpgPath = path.join(cfg.dir, `${baseName}.jpg`);

      try {
        const inputBuffer = fs.readFileSync(inputPath);

        // Generate high-quality WebP
        await sharp(inputBuffer)
          .resize(cfg.width, cfg.height, {
            fit: cfg.fit,
            position: sharp.strategy.attention,
            withoutEnlargement: false,
          })
          .webp({ quality: 86, effort: 6 })
          .toFile(webpPath);

        // Generate optimized JPEG (using temp or buffer)
        const jpgBuffer = await sharp(inputBuffer)
          .resize(cfg.width, cfg.height, {
            fit: cfg.fit,
            position: sharp.strategy.attention,
            withoutEnlargement: false,
          })
          .jpeg({ quality: 88, mozjpeg: true })
          .toBuffer();

        fs.writeFileSync(jpgPath, jpgBuffer);

        // If original was a huge PNG like pre-insulated-duct.png, remove it
        if (ext === ".png" && !file.includes("gc-icon")) {
          fs.unlinkSync(inputPath);
        }

        const sWebp = fs.statSync(webpPath);
        const sJpg = fs.statSync(jpgPath);
        console.log(
          `✓ ${cfg.dir}/${baseName}: WebP=${(sWebp.size / 1024).toFixed(1)}KB, JPG=${(sJpg.size / 1024).toFixed(1)}KB`,
        );
      } catch (err) {
        console.error(`Error processing ${inputPath}:`, err.message);
      }
    }
  }

  // Also generate crisp high-res raster logo from SVG for fallbacks
  if (fs.existsSync("public/images/logo/gc-icon.svg")) {
    await sharp("public/images/logo/gc-icon.svg")
      .resize(512, 512)
      .png()
      .toFile("public/images/logo/gc-icon.png");
    console.log("✓ Generated high-res public/images/logo/gc-icon.png");
  }

  if (fs.existsSync("public/images/logo/gc-logo-full.svg")) {
    await sharp("public/images/logo/gc-logo-full.svg")
      .resize(1140, 216)
      .png()
      .toFile("public/images/logo/gc-logo-full.png");
    console.log("✓ Generated high-res public/images/logo/gc-logo-full.png");
  }

  console.log("--- Optimization Complete ---");
}

processImages().catch(console.error);
