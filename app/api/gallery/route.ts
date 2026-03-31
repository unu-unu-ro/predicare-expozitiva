import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

export async function GET() {
  const dir = path.join(process.cwd(), "public", "gallery");
  const files = fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .map((f) => ({ src: `/gallery/${f}`, alt: "Foto atelier CST" }));

  return NextResponse.json(files);
}
