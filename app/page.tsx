
const internationalProjects = [
  { code: "ERA-NET · 2024–2027", title: "REACH", area: "Pancreatic cancer", text: "Investigating molecular alterations for chemosensitization of pancreatic cancer.", pi: "Božena Smolková, PhD" },
  { code: "CA24162 · 2025–2029", title: "AdResCanCER", area: "Gastrointestinal cancer", text: "Adaptive and acquired resistance in gastrointestinal cancers—contemporary and emerging resolutions.", pi: "Božena Smolková, PhD" },
  { code: "CA21116 · 2022–2026", title: "TRANSPAN", area: "Pancreatic cancer", text: "Biological markers for prevention and translational medicine in pancreatic cancer.", pi: "Božena Smolková, PhD" },
  { code: "CA21135 · 2022–2026", title: "ImmunoMODEL", area: "Immunotherapy", text: "Modelling immunotherapy response and toxicity in cancer.", pi: "Božena Smolková, PhD" },
  { code: "CA24112 · 2025–2029", title: "TEAR-Precision", area: "Tear fluid biomarkers", text: "Implementation of Tear Fluid Biomarkers in Precision Medicine.", pi: "Viera Horváthová Kajabová, PhD" },
];

const nationalProjects = [
  { code: "VEGA · 2024–2027", title: "VEGA 2/0027/24", area: "Uveal melanoma", text: "DNA methylation biomarkers as a tool for the implementation of liquid biopsy in uveal melanoma.", pi: "Viera Horváthová Kajabová, PhD" },
];

const publications = [
  {
    year: "2026",
    journal: "Drug Resistance Updates",
    title: "Molecular profiling of chemotherapy-resistant breast cancer reveals DNA methylation remodeling associated with the acquisition of paclitaxel resistance",
    doi: "https://doi.org/10.1016/j.drup.2026.101350",
  },
  {
    year: "2026",
    journal: "Clinical Epigenetics",
    title: "Epigenetic modulation to overcome immune suppression in pancreatic cancer",
    doi: "https://doi.org/10.1186/s13148-026-02081-5",
  },
  {
    year: "2025",
    journal: "Seminars in Cancer Biology",
    title: "Leveraging epigenetic alterations in pancreatic ductal adenocarcinoma for clinical applications",
    doi: "https://doi.org/10.1016/j.semcancer.2025.01.003",
  },
  {
    year: "2025",
    journal: "Cancer Letters",
    title: "Aurora kinase A inhibition as a synthetic lethality strategy in ARID1A-mutated gastroenteropancreatic neuroendocrine carcinoma",
    doi: "https://doi.org/10.1016/j.canlet.2025.218033",
  },
  {
    year: "2023",
    journal: "Clinical and Translational Medicine",
    title: "Uncovering accurate prognostic markers for high-risk uveal melanoma through DNA methylation profiling",
    doi: "https://doi.org/10.1002/ctm2.1317",
  },
];

type TeamMember = { name: string; role: string; focus: string; bio: string; email: string; orcid: string; supervisor?: string };

const seniorResearchers: TeamMember[] = [
  { name: "Verona Buociková, PhD", role: "Postdoctoral Researcher", focus: "Experimental oncology", bio: "Studies cancer progression, chemosensitization and mechanisms for overcoming multidrug resistance in solid tumours.", email: "verona.buocikova@savba.sk", orcid: "0000-0002-2466-9126" },
  { name: "Monika Buríková, PhD", role: "Senior Scientist", focus: "Histopathology", bio: "Investigates RNA regulatory alterations and molecular mechanisms that contribute to therapy resistance in cancer cells.", email: "monika.burikova@savba.sk", orcid: "0000-0002-4697-6389" },
  { name: "Andrea Čumová, PhD", role: "Postdoctoral Researcher", focus: "Tumorigenicity", bio: "Explores tumour-cell plasticity, microenvironment interactions and molecular adaptations under hypoxic stress.", email: "andrea.cumova@savba.sk", orcid: "0000-0003-2485-3895" },
  { name: "Viera Horváthová Kajabová, PhD", role: "Senior Scientist", focus: "Uveal melanoma", bio: "Focuses on cancer DNA methylation, epigenetic biomarker discovery and non-invasive liquid-biopsy strategies.", email: "viera.kajabova@savba.sk", orcid: "0000-0002-7081-0602" },
  { name: "Mária Pacalajová, PhD", role: "Postdoctoral Researcher", focus: "Pancreatic cancer therapeutics", bio: "Evaluates epigenetic drugs, chromatin dynamics and combination strategies in pancreatic ductal adenocarcinoma.", email: "maria.pacalajova@savba.sk", orcid: "0000-0003-0931-0032" },
  { name: "Lenka Trnková, PhD", role: "Postdoctoral Researcher", focus: "Breast cancer models", bio: "Develops bioinformatic pipelines and predictive models for multi-omic data in translational cancer research.", email: "lenka.trnkova@savba.sk", orcid: "0000-0003-3510-9914" },
];

const phdStudents: TeamMember[] = [
  { name: "Katarína Buranovská, MSc", role: "PhD Student", focus: "Liquid biopsy", bio: "Studies non-invasive liquid-biopsy markers and circulating DNA methylation for cancer diagnostics.", supervisor: "Božena Smolková, PhD", email: "katarina.buranovska@savba.sk", orcid: "0000-0001-5223-3461" },
  { name: "Laura Drnďáková, MSc", role: "PhD Student", focus: "Epigenetic biomarkers", bio: "Researches molecular epigenetic markers, cellular signalling and epi-drug responses in solid tumours.", supervisor: "Božena Smolková, PhD", email: "laura.drndakova@savba.sk", orcid: "0009-0007-5412-1982" },
  { name: "Ivana Hlavenová, MSc", role: "PhD Student", focus: "DNA methylation", bio: "Investigates DNA methylation, chromatin accessibility and combined therapeutic strategies in tumour models.", supervisor: "Verona Buociková, PhD", email: "ivana.hlavenova@savba.sk", orcid: "0009-0000-0533-4745" },
  { name: "Samuel Hollý, MSc", role: "PhD Student", focus: "Uveal melanoma", bio: "Develops clinically relevant preclinical models of uveal melanoma to assess therapeutic response and evaluate emerging treatment strategies.", supervisor: "Viera Horváthová Kajabová, PhD", email: "samuel.holly@savba.sk", orcid: "0009-0009-1004-0165" },
  { name: "Lucia Juhásiková, MSc", role: "PhD Student", focus: "Cancer epigenetics", bio: "Studies epigenetic regulatory mechanisms, chromatin dynamics and novel molecular targets in cancer.", supervisor: "Božena Smolková, PhD", email: "lucia.juhasikova@savba.sk", orcid: "0009-0003-8082-9029" },
];

function TeamCards({ members }: { members: TeamMember[] }) {
  return <div className="team-grid">{members.map((member) => (
    <article className="team-card" key={member.email}>
      <div className="team-card-top"><span>{member.focus}</span><i>{member.name.charAt(member.name.indexOf(" ") + 1)}</i></div>
      <h3>{member.name}</h3>
      <p className="team-role">{member.role}</p>
      <p className="team-bio">{member.bio}</p>
      {member.supervisor && <p className="team-supervisor"><span>Supervisor</span>{member.supervisor}</p>}
      <div className="team-links"><a href={`mailto:${member.email}`}>Email ↗</a><a href={`https://orcid.org/${member.orcid}`} target="_blank" rel="noreferrer">ORCID ↗</a></div>
    </article>
  ))}</div>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Cancer Epigenetics Research Group home">CE<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#team">Team</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="https://orcid.org/0000-0002-4906-5652" target="_blank" rel="noreferrer">ORCID ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit" aria-hidden="true"><i /><i /></div>
        <div className="hero-copy">
          <p className="eyebrow"><span>Cancer Epigenetics Research Group</span> · Bratislava, Slovakia</p>
          <h1>Reading the<br />epigenetic <em>code</em><br />of cancer.</h1>
          <p className="hero-intro">We investigate how DNA methylation and chromatin accessibility shape tumour progression, therapy resistance and clinically useful biomarkers.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">Explore our research <span>↓</span></a>
            <a className="button button-quiet" href="mailto:bozena.smolkova@savba.sk">Start a conversation ↗</a>
          </div>
        </div>
        <aside className="hero-aside">
          <div className="identity-card">
            <p className="card-kicker">Principal investigator</p>
            <h2>Božena<br />Smolková, PhD</h2>
            <p>Head of the Cancer Epigenetics Research Group at the Biomedical Research Center, Slovak Academy of Sciences.</p>
            <div className="identity-meta"><span>Genetics · PhD 2005</span><span>Comenius University</span><a href="https://orcid.org/0000-0002-4906-5652" target="_blank" rel="noreferrer">ORCID 0000-0002-4906-5652 ↗</a></div>
          </div>
          <div className="signal-row" aria-label="Research metrics">
            <a href="/publications" aria-label="View all 114 publications"><strong>114</strong><span>publications</span></a>
            <a href="#projects" aria-label="View 6 ongoing projects"><strong>6</strong><span>ongoing projects</span></a>
            <div><strong>5.8</strong><span>average journal IF</span></div>
          </div>
        </aside>
      </section>

      <section className="manifesto" id="research">
        <div className="section-label"><span>01</span> Research direction</div>
        <div className="manifesto-grid">
          <h2>From molecular alteration<br />to clinical <em>possibility.</em></h2>
          <div className="manifesto-copy">
            <p>Cancer is shaped not only by mutation, but by changes in how genes are switched on and off. Our work maps these dynamic alterations to reveal new diagnostic signals and therapeutic vulnerabilities.</p>
            <a href="https://bmc.sav.sk/en/" target="_blank" rel="noreferrer">Biomedical Research Center SAS ↗</a>
          </div>
        </div>
        <div className="focus-grid">
          <article><span>01</span><h3>DNA methylation</h3><p>Resolving methylation signatures that accompany tumour initiation, progression and treatment response.</p></article>
          <article><span>02</span><h3>Chromatin regulation</h3><p>Studying accessibility and regulatory states that enable cellular plasticity and resistance.</p></article>
          <article><span>03</span><h3>Liquid biopsy</h3><p>Translating epigenetic signals in circulating DNA and tear fluid into non-invasive biomarker strategies.</p></article>
          <article><span>04</span><h3>Precision oncology</h3><p>Connecting molecular profiles with actionable vulnerabilities in pancreatic cancer and uveal melanoma.</p></article>
        </div>
      </section>

      <section className="lab-story">
        <div className="lab-image"><img src="/research-group.jpg" alt="Cancer Epigenetics Research Group at BMC SAS" /></div>
        <div className="lab-copy">
          <div className="section-label"><span>02</span> The research group</div>
          <h2>Science is a<br /><em>collective practice.</em></h2>
          <p>Our interdisciplinary group brings together experimental oncology, molecular biology, histopathology and computational analysis to move discoveries across disciplinary boundaries.</p>
          <div className="lab-details"><span>Institute of Experimental Oncology</span><span>Dúbravská cesta 9, Bratislava</span></div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="team-heading">
          <div className="section-label"><span>03</span> Research team</div>
          <h2>Different expertise.<br />One shared <em>question.</em></h2>
          <p>Our group connects experimental oncology, molecular biology, histopathology and translational research across career stages.</p>
        </div>
        <div className="team-group"><div className="team-group-label"><h3>Postdoctoral &amp; senior researchers</h3><span>06 members</span></div><TeamCards members={seniorResearchers} /></div>
        <div className="team-group"><div className="team-group-label"><h3>PhD students</h3><span>05 members</span></div><TeamCards members={phdStudents} /></div>
      </section>

      <section className="projects" id="projects">
        <div className="section-head">
          <div className="section-label"><span>04</span> Ongoing projects</div>
          <p>International collaborations at the intersection of cancer biology, epigenetics and translational medicine.</p>
        </div>
        {[
          { title: "International projects", href: "/projects#international-ongoing", completedHref: "/projects#international-completed", items: internationalProjects },
          { title: "National projects", href: "/projects#national-ongoing", completedHref: "/projects#national-completed", items: nationalProjects },
        ].map((group) => <div className={`project-group${group.title === "National projects" ? " project-group-national" : ""}`} key={group.title}>
          <a className="project-group-heading" href={group.href}><h3>{group.title}</h3><span>View all →</span></a>
          <div className="project-list">
            {group.items.map((project, index) => (
              <article className="project" key={project.title}>
                <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                <div><p className="project-code">{project.code} · {project.area}</p><h3>{project.title}</h3></div>
                <div className="project-summary"><p>{project.text}</p><p className="project-main-pi"><span>PI:</span> {project.pi}</p></div>
                <span className="project-mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <a className="project-group-completed" href={group.completedHref}>Completed projects →</a>
        </div>)}
      </section>

      <section className="publications" id="publications">
        <div className="section-head">
          <div className="section-label"><span>05</span> Selected work</div>
          <a href="/publications">View all publications →</a>
        </div>
        <div className="publication-list">
          {publications.map((publication) => (
            <a className="publication" href={publication.doi} target="_blank" rel="noreferrer" key={publication.title}>
              <span>{publication.year}</span>
              <div><p>{publication.journal}</p><h3>{publication.title}</h3><span className="publication-doi">DOI: {publication.doi.replace("https://doi.org/", "")}</span></div>
              <span className="publication-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>


      <section className="contact" id="contact">
        <p className="eyebrow"><span>Collaborations · Doctoral research · Scientific exchange</span></p>
        <h2>Let’s investigate what<br />comes <em>next.</em></h2>
        <a className="contact-mail" href="mailto:bozena.smolkova@savba.sk">bozena.smolkova@savba.sk <span>↗</span></a>
      </section>

      <footer>
        <p>© 2026 Cancer Epigenetics Research Group</p>
        <div><a href="https://orcid.org/0000-0002-4906-5652" target="_blank" rel="noreferrer">ORCID</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
