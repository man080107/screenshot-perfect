/**
 * GC Fabrication Product Catalogue Image Extractor & Studio White Normalizer
 *
 * Extracts individual studio product tiles from high-resolution reference
 * poster sheets, normalizes off-white backgrounds to pure #FFFFFF, trims outer
 * margins, and outputs 600x450 WebP + JPEG pairs.
 *
 * Usage:
 *   node scripts/extract-fb-catalogue.cjs --input <dir> [--output <dir>]
 *   node scripts/extract-fb-catalogue.cjs <input-dir> [<output-dir>]
 *
 * Environment Variables:
 *   GC_CATALOGUE_REF_DIR   Source directory containing the reference poster JPEGs
 *   GC_CATALOGUE_OUT_DIR   Destination directory (defaults to public/images/products)
 *
 * Options:
 *   -i, --input <dir>      Source directory with reference poster images
 *   -o, --output <dir>     Output directory for WebP/JPEG assets
 *   -h, --help             Print this usage message
 */

const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const DEFAULT_OUT_DIR = path.resolve(__dirname, "..", "public", "images", "products");

const POSTERS = {
  p1: "WhatsApp Image 2026-11-11 at 2.06.21 PM (1).jpeg",
  p2: "WhatsApp Image 2026-11-11 at 2.06.21 PM (2).jpeg",
  p3: "WhatsApp Image 2026-11-11 at 2.06.22 PM.jpeg",
  p4: "WhatsApp Image 2026-11-11 at 2.06.22 PM (1).jpeg",
  p5: "WhatsApp Image 2026-11-11 at 2.06.22 PM (2).jpeg",
};

const GRID_SPECS = {
  p1: {
    cols: [
      [25, 296],
      [336, 620],
      [661, 946],
      [989, 1265],
    ],
    rows: [468, 705, 940, 1185, 1576],
    items: [
      ["pid-s-bend", "pid-butterfly", "pid-tiger-connector", "tiger-corner"],
      ["f-flange", "h-flange", "chair-flange", "pvc-angle"],
      ["zinc-coated-angle", "c-channel", "corner-protector", "bayonet-flange"],
      ["pid-glue", "scraper", "pid-tool-kit", "pvc-trunking"],
      ["hardware", "paints", "safety-shoes", "power-tools"],
    ],
  },
  p2: {
    cols: [
      [23, 297],
      [336, 621],
      [664, 949],
      [990, 1267],
    ],
    rows: [480, 728, 963, 1290, 1649],
    items: [
      ["pvc-flexible", "closed-cell-insulation", "fiberglass", "rockwool"],
      ["insulated-flexible-duct", "flexible-duct", "aluminium-foil", "k-flex-insulation"],
      ["flexible-connector", "gasket-tape", "insulation-pin", "bitumen"],
      ["duct-tape", "pid-tape", "aluminium-tape", "masking-tape"],
      ["pid-board", "pid-straight-duct-tile", "pid-reducer", "pid-elbow"],
    ],
  },
  p3: {
    cols: [
      [33, 304],
      [340, 625],
      [666, 948],
      [987, 1257],
    ],
    rows: [473, 708, 943, 1176, 1411, 1653],
    items: [
      ["access-door", "tdf-corner-piece", "tdf-clip", "s-clip"],
      ["c-clip", "u-channel", "l-channel", "flat-bar"],
      ["unistrut", "threaded-rod", "metal-c-channel", "angle-bar"],
      ["access-lock", "vcd-lock", "hose-clamp", "steel-band"],
      ["gi-sheet", "perforated-sheet", "wire-mesh", "mild-steel-plate"],
      ["bolt-and-nuts", "copper-fittings", "round-flange", "sealant-gun"],
    ],
  },
  p4: {
    cols: [
      [33, 309],
      [343, 626],
      [667, 945],
      [982, 1255],
    ],
    rows: [490, 837, 1076, 1315, 1662],
    items: [
      ["square-vcd", "round-vcd", "square-nrd", "round-nrd"],
      ["4-way-diffuser", "round-diffuser", "jet-diffuser", "pvg-egg-crate"],
      ["single-deflection", "double-deflection", "linear-diffuser", "square-diffuser"],
      [null, "external-louvre", "linear-grille", "bar-grille"],
      [
        "kitchen-hood-island",
        "kitchen-hood-wall-type",
        "kitchen-hood-wall-mounted",
        "kitchen-hood-filter",
      ],
    ],
  },
  p5: {
    cols: [
      [23, 300],
      [338, 625],
      [666, 955],
      [991, 1269],
    ],
    rows: [471, 708, 946, 1188, 1430, 1675],
    items: [
      ["gi-straight-duct", "gi-elbow", "gi-s-bend", "gi-reducer"],
      ["gi-tee", "r-duct", "gi-butterfly", "cross-wye"],
      ["round-to-square", "transition-flexible", "square-flexible", "round-flexible"],
      ["round-duct", "round-elbow", "round-s-bend", "round-reducer"],
      ["round-tee", "round-cross-tee", "round-wye", "round-collar"],
      ["plenum-box", "water-tray", "square-filter", "round-filter"],
    ],
  },
};

function printUsage() {
  console.log(
    [
      "Usage:",
      "  node scripts/extract-fb-catalogue.cjs --input <source-dir> [--output <target-dir>]",
      "  node scripts/extract-fb-catalogue.cjs <source-dir> [<target-dir>]",
      "",
      "Options:",
      "  -i, --input <dir>    Directory containing reference poster images (or GC_CATALOGUE_REF_DIR)",
      `  -o, --output <dir>   Output directory (default: ${DEFAULT_OUT_DIR} or GC_CATALOGUE_OUT_DIR)`,
      "  -h, --help           Show help message",
    ].join("\n"),
  );
}

function parseArgs(argv) {
  let inputDir = process.env.GC_CATALOGUE_REF_DIR || "";
  let outputDir = process.env.GC_CATALOGUE_OUT_DIR || DEFAULT_OUT_DIR;
  let help = false;
  const positional = [];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "-h" || arg === "--help") {
      help = true;
    } else if (arg === "-i" || arg === "--input") {
      inputDir = argv[++i] || "";
    } else if (arg.startsWith("--input=")) {
      inputDir = arg.slice("--input=".length);
    } else if (arg === "-o" || arg === "--output") {
      outputDir = argv[++i] || DEFAULT_OUT_DIR;
    } else if (arg.startsWith("--output=")) {
      outputDir = arg.slice("--output=".length);
    } else if (!arg.startsWith("-")) {
      positional.push(arg);
    }
  }

  if (!inputDir && positional[0]) inputDir = positional[0];
  if (positional[1]) outputDir = positional[1];

  return {
    help,
    inputDir: inputDir ? path.resolve(inputDir) : "",
    outputDir: path.resolve(outputDir),
  };
}

/**
 * Normalizes pale off-white studio backgrounds (#ECEFF5..#FFFFFF) smoothly to pure #FFFFFF
 * and feathers 3px borders into pure #FFFFFF so zero seam boxes appear in UI cards.
 */
async function whitenStudioMatte(rawBuffer) {
  const { data, info } = await sharp(rawBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const minC = Math.min(r, g, b);
      const maxC = Math.max(r, g, b);
      const chroma = maxC - minC;
      const lum = (r + g + b) / 3;

      if (chroma <= 14 && lum >= 234) {
        const t = Math.min(1, (lum - 234) / 14);
        data[idx] = Math.round(r + (255 - r) * t);
        data[idx + 1] = Math.round(g + (255 - g) * t);
        data[idx + 2] = Math.round(b + (255 - b) * t);
      }

      const distEdge = Math.min(x, y, width - 1 - x, height - 1 - y);
      if (distEdge < 3) {
        const alpha = (3 - distEdge) / 3;
        data[idx] = Math.round(data[idx] + (255 - data[idx]) * alpha);
        data[idx + 1] = Math.round(data[idx + 1] + (255 - data[idx + 1]) * alpha);
        data[idx + 2] = Math.round(data[idx + 2] + (255 - data[idx + 2]) * alpha);
      }
    }
  }

  return sharp(data, { raw: { width, height, channels } }).png().toBuffer();
}

async function saveCleanStudioAsset(buffer, outBaseName, outDir) {
  const cleanBuf = await whitenStudioMatte(buffer);
  const trimmed = await sharp(cleanBuf).trim({ background: "#FFFFFF", threshold: 10 }).toBuffer();

  const pipeline = sharp(trimmed)
    .resize(560, 412, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
      kernel: sharp.kernel.lanczos3,
    })
    .extend({
      top: 19,
      bottom: 19,
      left: 20,
      right: 20,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .sharpen({ sigma: 0.65, m1: 0.4, m2: 1.15 });

  await pipeline
    .clone()
    .webp({ quality: 92, effort: 5 })
    .toFile(path.join(outDir, `${outBaseName}.webp`));
  await pipeline
    .clone()
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(outDir, `${outBaseName}.jpg`));
}

async function run() {
  const { help, inputDir, outputDir } = parseArgs(process.argv.slice(2));
  if (help) {
    printUsage();
    return;
  }

  if (!inputDir) {
    console.error("Error: No source directory provided (--input <dir> or GC_CATALOGUE_REF_DIR).");
    printUsage();
    process.exit(1);
  }

  if (!fs.existsSync(inputDir) || !fs.statSync(inputDir).isDirectory()) {
    console.error(`Error: Source directory does not exist or is not a directory: ${inputDir}`);
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });
  let count = 0;
  let skippedPosters = 0;

  for (const [key, spec] of Object.entries(GRID_SPECS)) {
    const srcPath = path.join(inputDir, POSTERS[key]);
    if (!fs.existsSync(srcPath)) {
      console.warn(`Warning: Missing poster image "${POSTERS[key]}" in ${inputDir}; skipping.`);
      skippedPosters++;
      continue;
    }

    const srcSharp = sharp(srcPath);
    for (let r = 0; r < spec.rows.length; r++) {
      const barTop = spec.rows[r];
      for (let c = 0; c < spec.cols.length; c++) {
        const id = spec.items[r][c];
        if (!id) continue;
        const [x0, x1] = spec.cols[c];
        const left = x0 + 5;
        const width = x1 - x0 - 9;

        let top = barTop - 156;
        let height = 150;
        if (id === "power-tools") {
          top = barTop - 132;
          height = 126;
        }

        const cropBuf = await srcSharp.clone().extract({ left, top, width, height }).toBuffer();
        await saveCleanStudioAsset(cropBuf, id, outputDir);
        count++;
      }
    }
  }

  if (count === 0) {
    console.error("Error: No poster images were found to extract.");
    process.exit(1);
  }

  console.log(
    `Extracted and white-normalized ${count} studio product assets (WebP + JPG) to ${outputDir}` +
      (skippedPosters > 0 ? ` (${skippedPosters} poster(s) skipped)` : ""),
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
