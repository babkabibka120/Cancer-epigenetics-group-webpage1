type OrcidSummary = {
  title?: { title?: { value?: string } };
  "publication-date"?: { year?: { value?: string } };
  "journal-title"?: { value?: string };
  "external-ids"?: {
    "external-id"?: Array<{
      "external-id-type"?: string;
      "external-id-value"?: string;
      "external-id-url"?: { value?: string };
    }>;
  };
  url?: { value?: string };
};

export async function GET() {
  const response = await fetch(
    "https://pub.orcid.org/v3.0/0000-0002-4906-5652/works",
    { headers: { Accept: "application/json" }, next: { revalidate: 3600 } },
  );

  if (!response.ok) {
    return Response.json(
      { error: "The publication archive is temporarily unavailable." },
      { status: 502 },
    );
  }

  const data = (await response.json()) as {
    group?: Array<{ "work-summary"?: OrcidSummary[] }>;
  };
  const works = (data.group || [])
    .flatMap((group) => group["work-summary"]?.slice(0, 1) || [])
    .map((work) => {
      const title = work.title?.title?.value || "Untitled publication";
      const externalIds = work["external-ids"]?.["external-id"] || [];
      const doi = externalIds.find(
        (item) => item["external-id-type"]?.toLowerCase() === "doi",
      )?.["external-id-value"];
      const externalUrl = externalIds.find(
        (item) => item["external-id-url"]?.value,
      )?.["external-id-url"]?.value;
      return {
        title,
        year: work["publication-date"]?.year?.value || "—",
        journal: work["journal-title"]?.value || "Research publication",
        url:
          (doi && `https://doi.org/${doi}`) ||
          work.url?.value ||
          externalUrl ||
          `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`,
        source: doi ? "DOI" : "Source",
      };
    })
    .sort((a, b) =>
      b.year.localeCompare(a.year) || a.title.localeCompare(b.title),
    );

  return Response.json(
    { works },
    { headers: { "Cache-Control": "public, s-maxage=3600" } },
  );
}
