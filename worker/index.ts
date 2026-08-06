/** Cloudflare Worker entry point for the research portfolio. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  IMAGES: { input(stream: ReadableStream): { transform(options: Record<string, unknown>): { output(options: { format: string; quality: number }): Promise<{ response(): Response }> } } };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

type OrcidSummary = {
  title?: { title?: { value?: string } };
  "publication-date"?: { year?: { value?: string } };
  "journal-title"?: { value?: string };
  "external-ids"?: { "external-id"?: Array<{ "external-id-type"?: string; "external-id-value"?: string; "external-id-url"?: { value?: string } }> };
  url?: { value?: string };
};

async function publicationsArchive() {
  const response = await fetch("https://pub.orcid.org/v3.0/0000-0002-4906-5652/works", { headers: { Accept: "application/json" } });
  if (!response.ok) return new Response(JSON.stringify({ error: "The publication archive is temporarily unavailable." }), { status: 502, headers: { "Content-Type": "application/json" } });
  const data = await response.json() as { group?: Array<{ "work-summary"?: OrcidSummary[] }> };
  const works = (data.group || []).flatMap(group => group["work-summary"]?.slice(0, 1) || []).map(work => {
    const title = work.title?.title?.value || "Untitled publication";
    const externalIds = work["external-ids"]?.["external-id"] || [];
    const doi = externalIds.find(item => item["external-id-type"]?.toLowerCase() === "doi")?.["external-id-value"];
    const externalUrl = externalIds.find(item => item["external-id-url"]?.value)?.["external-id-url"]?.value;
    return { title, year: work["publication-date"]?.year?.value || "—", journal: work["journal-title"]?.value || "Research publication", url: doi ? `https://doi.org/${doi}` : work.url?.value || externalUrl || `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`, source: doi ? "DOI" : "Source" };
  }).sort((a, b) => b.year.localeCompare(a.year) || a.title.localeCompare(b.title));
  return new Response(JSON.stringify({ works }), { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=3600" } });
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/publications" && request.method === "GET") return publicationsArchive();
    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }
    return handler.fetch(request, env, ctx);
  },
};

export default worker;
