const internationalActiveProjects = [
  { programme: "ERA-NET", duration: "1 Sep 2024 – 31 Aug 2027", title: "REACH", description: "Investigating molecular alterations for chemosensitization of pancreatic cancer.", pi: "Božena Smolková, PhD" },
  { programme: "COST Action CA24162", duration: "22 Oct 2025 – 21 Oct 2029", title: "AdResCanCER", description: "Adaptive and acquired resistance in gastrointestinal cancers—contemporary and emerging resolutions.", pi: "Božena Smolková, PhD" },
  { programme: "COST Action CA21116", duration: "11 Oct 2022 – 10 Oct 2026", title: "TRANSPAN", description: "Biological markers for prevention and translational medicine in pancreatic cancer.", pi: "Božena Smolková, PhD" },
  { programme: "COST Action CA21135", duration: "2 Nov 2022 – 1 Nov 2026", title: "ImmunoMODEL", description: "Modelling immunotherapy response and toxicity in cancer.", pi: "Božena Smolková, PhD" },
  { programme: "COST Action CA24112", duration: "21 Oct 2025 – 20 Oct 2029", title: "TEAR-Precision", description: "Implementation of Tear Fluid Biomarkers in Precision Medicine.", pi: "Viera Horváthová Kajabová, PhD" },
];

const internationalCompletedProjects = [
  { programme: "ERANET", duration: "1 Aug 2020 – 31 May 2024", title: "RESCUER", description: "Resistance under treatment in breast cancer.", url: "https://www.era-learn.eu/network-information/networks/eracosysmed/3rd-joint-transnational-call-for-european-research-projects-on-systems-medicine/resistance-under-treatment-in-breast-cancer" },
  { programme: "Horizon 2020", duration: "1 Oct 2019 – 30 Jun 2023", title: "VISION", description: "Strategies to strengthen scientific excellence and innovation capacity for early diagnosis of gastrointestinal cancer.", url: "http://vision.sav.sk/" },
  { programme: "ERANET", duration: "1 Sep 2019 – 31 Mar 2023", title: "NExT", description: "Establishing an algorithm for the early diagnosis and follow-up of patients with pancreatic neuroendocrine tumors.", url: "https://www.era-learn.eu/network-information/networks/transcan-2/4th-joint-transnational-call-jtc-2017/establishing-an-algorithm-for-the-early-diagnosis-and-follow-up-of-patients-with-pancreatic-neuroendocrine-tumors" },
  { programme: "Other", duration: "1 Apr 2018 – 31 Dec 2021", title: "iPAAC", description: "Innovative Partnership for Action Against Cancer.", url: "https://ipaac.uzis.cz/" },
  { programme: "ERANET / EURONANOMED", duration: "1 Jan 2017 – 30 Jun 2021", title: "INNOCENT", description: "Innovative Nanopharmaceuticals: Targeting Breast Cancer Stem Cells by a Novel Combination of Epigenetic and Anticancer Drugs with Gene Therapy.", url: "http://www.innocent.sav.sk/" },
];

const nationalActiveProjects = [
  { programme: "VEGA", duration: "1 Jan 2024 – 31 Dec 2027", title: "VEGA 2/0027/24", description: "DNA methylation biomarkers as a tool for the implementation of liquid biopsy in uveal melanoma.", pi: "Viera Horváthová Kajabová, PhD" },
];

const nationalCompletedProjects = [
  { programme: "NextGenerationEU · 09I01-03-V04-00073", duration: "1 Sep 2024 – 30 Jun 2026", title: "PDAID", description: "Innovative approaches to the diagnosis and treatment of pancreatic ductal adenocarcinoma.", pi: "Božena Smolková, PhD" },
  { programme: "SRDA · APVV-21-0197", duration: "1 Jul 2022 – 30 Jun 2026", title: "HeatMe", description: "Reprogramming pancreatic ductal adenocarcinoma microenvironment towards immunotherapy.", pi: "Božena Smolková, PhD" },
  { programme: "SRDA · APVV-20-0143", duration: "1 Jul 2021 – 30 Jun 2025", title: "ExoTreat", description: "Suicide gene therapy mediated by mesenchymal stromal and pancreatic tumor cell-excreted extracellular vesicles in the treatment of pancreatic ductal adenocarcinoma.", pi: "Verona Buociková, PhD · Marína Cihová, PhD" },
  { programme: "VEGA", duration: "1 Jan 2021 – 31 Dec 2024", title: "VEGA 1/0395/21", description: "Development of patient-derived xenograft models and their utilization for personalized treatment of uveal melanoma.", pi: "Lucia Demková, PhD" },
  { programme: "SRDA · APVV-17-0369", duration: "1 Aug 2018 – 31 Dec 2022", title: "TANDEM", description: "TArgetiNg Dna mEthylation by epigenetic editing and its implementation into personalised diagnostics and therapy of uveal Melanoma.", pi: "Božena Smolková, PhD" },
  { programme: "VEGA", duration: "1 Jan 2018 – 31 Dec 2021", title: "VEGA 2/0052/18", description: "The dynamics of inflammation-induced epigenetic changes during epithelial-to-mesenchymal transition and their role in human pancreatic ductal adenocarcinoma progression.", pi: "Božena Smolková, PhD · Soňa Čierniková, PhD" },
  { programme: "VEGA", duration: "1 Jan 2014 – 31 Dec 2016", title: "VEGA 2/0169/14", description: "Implementation of methods for analysis of epigenetic changes in genes involved in epithelial-mesenchymal transition in breast cancer.", pi: "Božena Smolková, PhD" },
];

type Project = { programme: string; duration: string; title: string; description?: string; url?: string; pi?: string };

function ProjectRows({ projects, status }: { projects: Project[]; status: string }) {
  return <div className="project-archive-list">{projects.map((project, index) => <article className="project-archive-row" key={project.title}>
    <span>{String(index + 1).padStart(2, "0")}</span>
    <div><p>{project.programme} · {project.duration}</p><h2>{project.title}</h2>{project.description && <div>{project.description}</div>}{project.pi && <p className="project-pi"><span>PI:</span><strong>{project.pi}</strong></p>}{project.url && <a className="project-source-link" href={project.url} target="_blank" rel="noreferrer">Project website ↗</a>}</div>
    <span>{status}</span>
  </article>)}</div>;
}

export default function ProjectsArchive() {
  return <main className="archive-page">
    <header className="archive-header"><a className="monogram" href="/" aria-label="Cancer Epigenetics Research Group home">CE<span>.</span></a><a href="/#projects">← Back to active projects</a></header>
    <section className="archive-hero project-archive-hero">
      <div className="section-label"><span>Archive</span> Research programmes</div>
      <h1>All <em>projects.</em></h1>
      <p>National and international research programmes spanning cancer epigenetics, liquid biopsy, precision oncology and therapeutic response.</p>
    </section>
    <section className="project-family"><div className="project-family-title"><div className="section-label"><span>01</span> International portfolio</div><h2>International <em>projects.</em></h2></div>
      <div className="project-archive-section" id="international-ongoing"><div className="project-archive-heading"><h3>Active collaborations</h3><span>{internationalActiveProjects.length.toString().padStart(2, "0")}</span></div><ProjectRows projects={internationalActiveProjects} status="Active" /></div>
      <div className="project-archive-section completed-subsection" id="international-completed"><div className="project-archive-heading"><h3>Completed collaborations</h3><span>{internationalCompletedProjects.length.toString().padStart(2, "0")}</span></div><ProjectRows projects={internationalCompletedProjects} status="Completed" /></div>
    </section>
    <section className="project-family national-family"><div className="project-family-title"><div className="section-label"><span>02</span> National portfolio</div><h2>National <em>projects.</em></h2></div>
      <div className="project-archive-section" id="national-ongoing"><div className="project-archive-heading"><h3>Active grants</h3><span>{nationalActiveProjects.length.toString().padStart(2, "0")}</span></div><ProjectRows projects={nationalActiveProjects} status="Active" /></div>
      <div className="project-archive-section completed-subsection" id="national-completed"><div className="project-archive-heading"><h3>Completed grants</h3><span>{nationalCompletedProjects.length.toString().padStart(2, "0")}</span></div><ProjectRows projects={nationalCompletedProjects} status="Completed" /></div>
    </section>
    <footer><p>© 2026 Cancer Epigenetics Research Group</p><a href="/">Back to main page ↑</a></footer>
  </main>;
}
