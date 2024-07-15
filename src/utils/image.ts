import { JSDOM } from "jsdom";

export function extractImageUrl(content: string): string | null {
  const dom = new JSDOM(content);
  const doc = dom.window.document;
  const img = doc.querySelector("img");
  return img ? img.src : null;
}
