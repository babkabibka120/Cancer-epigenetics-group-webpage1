"use client";

import { useEffect, useMemo, useState } from "react";

type Work = { title: string; year: string; journal: string; url: string; source: string };

export default function PublicationsArchive() {
  const [works, setWorks] = useState<Work[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/publications").then(response => response.json()).then((data: { works?: Work[]; error?: string }) => {
      if (data.error) setError(data.error);
      else setWorks(data.works || []);
    }).catch(() => setError("The publication archive is temporarily unavailable."));
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return needle ? works.filter(work => `${work.title} ${work.journal} ${work.year}`.toLowerCase().includes(needle)) : works;
  }, [query, works]);

  return <main className="archive-page">
    <header className="archive-header"><a className="monogram" href="/" aria-label="Cancer Epigenetics Research Group home">CE<span>.</span></a><a href="/">← Back to research group</a></header>
    <section className="archive-hero">
      <div className="section-label"><span>Archive</span> Scientific output</div>
      <h1>All <em>publications.</em></h1>
      <div className="archive-tools"><p>Complete publication list synchronized with ORCID <a href="https://orcid.org/0000-0002-4906-5652" target="_blank" rel="noreferrer">0000-0002-4906-5652 ↗</a></p><label><span className="sr-only">Search publications</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search title, journal or year…" /></label></div>
    </section>
    <section className="archive-list" aria-live="polite">
      {error && <p className="archive-status">{error}</p>}
      {!error && !works.length && <p className="archive-status">Loading publications…</p>}
      {works.length > 0 && <div className="archive-count">{filtered.length} of {works.length} publications</div>}
      {filtered.map((work, index) => <a className="archive-work" href={work.url} target="_blank" rel="noreferrer" key={`${work.title}-${index}`}>
        <span>{work.year}</span><div><p>{work.journal}</p><h2>{work.title}</h2></div><span>{work.source} ↗</span>
      </a>)}
    </section>
    <footer><p>© 2026 Cancer Epigenetics Research Group</p><a href="/">Back to main page ↑</a></footer>
  </main>;
}
