const fs = require("fs");
const path = require("path");
const https = require("https");

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
        }
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on("finish", () => {
          stream.close();
          resolve();
        });
      })
      .on("error", reject);
  });
}

async function run() {
  console.log("--- Setting up High-Resolution Asset Library ---");

  // Copy existing verified high-res assets (1024x1024 & 1536x1024)
  const localCopies = [
    { src: "src/assets/fabrication-workshop.jpg", dest: "public/images/hero/home-hero-wide.jpg" },
    {
      src: "src/assets/fabrication-workshop.jpg",
      dest: "public/images/hero/about-hero-facility.jpg",
    },
    {
      src: "src/assets/fabrication-workshop.jpg",
      dest: "public/images/workshop/workshop-facility.jpg",
    },
    {
      src: "src/assets/ductwork-components.jpg",
      dest: "public/images/products/gi-rectangular-duct.jpg",
    },
    {
      src: "src/assets/ductwork-components.jpg",
      dest: "public/images/categories/cat-hvac-ducting.jpg",
    },
    { src: "src/assets/round-ductwork.jpg", dest: "public/images/products/round-spiral-duct.jpg" },
    {
      src: "src/assets/duct-fitting-detail.jpg",
      dest: "public/images/products/duct-accessories.jpg",
    },
    {
      src: "src/assets/volume-control-damper.jpg",
      dest: "public/images/products/volume-control-damper.jpg",
    },
  ];

  for (const { src, dest } of localCopies) {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${src} -> ${dest}`);
    }
  }

  // High-res professional photography matching exact categories
  const downloads = [
    // Hero wide ductwork installation (1920x1080)
    {
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=1920&auto=format&fit=crop",
      dest: "public/images/hero/products-hero-wide.jpg",
    },
    // Welder / Sheet Metal Fabrication
    {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=85&w=1400&auto=format&fit=crop",
      dest: "public/images/workshop/workshop-welder.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/categories/cat-fabrication-services.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/fabrication/custom-fabrication.jpg",
    },
    // Diffusers & Grilles
    {
      url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=85&w=1000&auto=format&fit=crop",
      dest: "public/images/products/grilles-diffusers.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=85&w=1000&auto=format&fit=crop",
      dest: "public/images/categories/cat-grilles-diffusers.jpg",
    },
    // Flexible Duct
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/OC_Fairground_ductwork.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      dest: "public/images/products/flexible-duct.jpg",
    },
    // Pre-Insulated Duct (PID)
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Pantex_Plant_Building_12-44-1_Air_Ducts.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      dest: "public/images/products/pre-insulated-duct.jpg",
    },
    // Kitchen Commercial Hood / Stainless Canopy
    {
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/products/kitchen-exhaust-hood.jpg",
    },
    // Insulation materials
    {
      url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/products/insulation-materials.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/categories/cat-insulation-accessories.jpg",
    },
    // Aluminium foil tape & duct tape
    {
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=85&w=1000&auto=format&fit=crop",
      dest: "public/images/products/aluminium-foil-tape.jpg",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Duct-tape.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
      dest: "public/images/products/duct-tape.jpg",
    },
    // Hardware & tools
    {
      url: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/products/hardware-tools.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/categories/cat-industrial-supplies.jpg",
    },
    // Industries
    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/industries/ind-commercial.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/industries/ind-industrial.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/industries/ind-residential.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/industries/ind-hospitality.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=85&w=1200&auto=format&fit=crop",
      dest: "public/images/industries/ind-healthcare.jpg",
    },
  ];

  for (const item of downloads) {
    try {
      console.log(`Downloading ${item.dest}...`);
      await download(item.url, item.dest);
      const stat = fs.statSync(item.dest);
      console.log(`✓ Saved ${item.dest} (${(stat.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.dest}:`, err.message);
    }
  }

  console.log("--- Image Library Setup Finished ---");
}

run();
