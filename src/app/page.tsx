import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Bot,
  Cloud,
  Download,
  Mail,
  RadioTower,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";

const projects = [
  {
    title: "PulangSehat AI Agent",
    status: "In progress",
    summary:
      "Applied AI workflow for health operation support, focusing on assistant-style automation for internal processes and service documentation.",
    tags: ["AI Agent", "Workflow Automation", "Health Tech"],
  },
  {
    title: "AI SOC Assistant",
    status: "Planned flagship",
    summary:
      "A security alert triage assistant that summarizes alerts, estimates severity, maps possible causes, and generates incident notes.",
    tags: ["LLM", "SOC", "Alert Triage", "Streamlit"],
  },
  {
    title: "Mini SOC Lab with Wazuh",
    status: "Planned lab",
    summary:
      "Home SOC lab for endpoint monitoring, SSH brute force detection, file integrity monitoring, and incident report practice.",
    tags: ["Wazuh", "Kibana", "Linux", "Incident Report"],
  },
  {
    title: "IBM X3620 M3 Server Virtualization",
    status: "Completed",
    summary:
      "Configured Windows Server, VMware vSphere, and Xen XCP-NG for virtualization practice and server optimization.",
    tags: ["Windows Server", "VMware", "Xen", "Virtualization"],
  },
  {
    title: "Compostify Smart Composting",
    status: "Completed",
    summary:
      "IoT monitoring system using ESP32, Firebase, Node.js, Azure, and ML prediction for compost maturity.",
    tags: ["IoT", "Firebase", "Azure", "Machine Learning"],
  },
  {
    title: "Calmate Mood Tracking App",
    status: "Completed",
    summary:
      "Mood tracking application using NLP and sentiment analysis to provide personalized emotional management recommendations.",
    tags: ["NLP", "Sentiment Analysis", "Python"],
  },
];

const skillGroups = [
  {
    name: "Network & Infrastructure",
    icon: RadioTower,
    skills: [
      "TCP/IP",
      "MikroTik RouterOS",
      "Cisco basics",
      "VLAN",
      "NAT",
      "VPN",
      "Linux",
      "Windows Server",
    ],
  },
  {
    name: "Security Operations",
    icon: ShieldCheck,
    skills: [
      "Wazuh",
      "Kibana",
      "Wireshark",
      "SIEM basics",
      "Alert triage",
      "Log analysis",
      "Incident reporting",
      "DDoS mitigation",
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "OCI",
      "Azure exposure",
      "Docker basics",
      "Git",
      "Vercel",
      "Firebase",
      "Cloud monitoring",
    ],
  },
  {
    name: "AI & Data",
    icon: Bot,
    skills: [
      "Python",
      "pandas",
      "scikit-learn",
      "TensorFlow",
      "NLP",
      "LLM exploration",
      "AI Agent",
      "Streamlit",
    ],
  },
];

const certifications = [
  "Fortinet Certified Fundamentals in Cybersecurity",
  "Cisco CyberOps Associate",
  "L1 SOC Analyst Batch 08",
  "MTCNA - MikroTik Certified Network Associate",
  "Become an AWS Cloud Engineer",
  "Oracle Cloud Infrastructure Foundations Associate",
  "Microsoft Security, Compliance, and Identity Fundamentals",
  "Alibaba Cloud Model Studio and Qwen",
];

const experience = [
  {
    role: "Practicum Assistant",
    org: "Telecommunication Network Laboratory",
    period: "Aug 2024 - Present",
    detail:
      "Teaching and developing Python-based instructional materials for algorithm programming practicum, guiding 20+ students.",
  },
  {
    role: "Machine Learning Team",
    org: "Google Developer Groups on Campus TelU",
    period: "Dec 2024 - Apr 2025",
    detail:
      "Joined structured study groups on Git, feature engineering, preprocessing, supervised and unsupervised learning, TensorFlow, and model deployment.",
  },
  {
    role: "Web Developer Intern",
    org: "Starter Academy",
    period: "Jan 2025 - Mar 2025",
    detail:
      "Built responsive web layouts with Next.js and Tailwind CSS, managed code with Git, and deployed projects to Vercel.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#181914]">
      <nav className="sticky top-0 z-30 border-b border-[#d8d8cc] bg-[#f7f7f2]/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-sm font-semibold tracking-[0.22em]">
            NAUFAL ILMI
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#55584c] md:flex">
            <a href="#projects" className="hover:text-[#181914]">
              Projects
            </a>
            <a href="#skills" className="hover:text-[#181914]">
              Skills
            </a>
            <a href="#certifications" className="hover:text-[#181914]">
              Certifications
            </a>
            <a href="#contact" className="hover:text-[#181914]">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="border-b border-[#d8d8cc]">
        <div className="mx-auto grid min-h-[88vh] max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1fr_360px] md:items-center md:py-16">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8d8cc] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4f6f64]">
              <ShieldCheck size={14} />
              Cloud, Network Security, AI Automation
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Building secure infrastructure with a practical AI automation edge.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#55584c]">
              Telecommunications Technology student with a strong networking
              foundation, hands-on cloud and security exposure, and current
              exploration in AI agents for operational workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-[#181914] px-4 text-sm font-semibold text-white transition hover:bg-[#2d2f28]"
              >
                View projects
                <ArrowUpRight size={16} />
              </a>
              <a
                href="/CV_NAUFALILMI.pdf"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-[#b9baad] px-4 text-sm font-semibold transition hover:bg-white"
              >
                Download CV
                <Download size={16} />
              </a>
            </div>
            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["3.85", "GPA"],
                ["8+", "Relevant certs"],
                ["20+", "Students guided"],
                ["2026", "Job-ready target"],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-[#b9baad] pl-4">
                  <div className="text-2xl font-semibold">{value}</div>
                  <div className="mt-1 text-sm text-[#696c5f]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="self-end md:self-center">
            <div className="relative overflow-hidden rounded-lg border border-[#d8d8cc] bg-white p-4 shadow-sm">
              <Image
                src="/naufal-profile.jpg"
                alt="Naufal Ilmi profile photo"
                width={320}
                height={320}
                priority
                className="aspect-square w-full rounded-md object-cover"
              />
              <div className="mt-5">
                <p className="text-xl font-semibold">Naufal Ilmi</p>
                <p className="mt-2 text-sm leading-6 text-[#55584c]">
                  Bandung, Indonesia. Open to SOC L1, Junior Cloud Engineer,
                  Network Security, and AI Automation roles.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#d8d8cc] bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a6542f]">
              Career direction
            </p>
            <h2 className="mt-3 text-3xl font-semibold">From network roots to cloud security.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#55584c]">
            <p>
              My strongest base comes from Computer and Network Engineering and
              Telecommunications Technology. I am now turning that foundation
              into practical cloud security skills through SOC labs, monitoring,
              incident documentation, and AI-assisted automation.
            </p>
            <p>
              The focus is simple: secure infrastructure, readable evidence,
              clear incident notes, and automation that helps teams respond
              faster.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-[#d8d8cc]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4f6f64]">
                Featured work
              </p>
              <h2 className="mt-3 text-3xl font-semibold">Projects and labs</h2>
            </div>
            <a
              href="https://naufalilmi115.blogspot.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-[#b9baad] px-3 text-sm font-semibold hover:bg-white"
            >
              Technical notes
              <BookOpen size={16} />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex min-h-[270px] flex-col rounded-lg border border-[#d8d8cc] bg-white p-5 shadow-sm"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-7">{project.title}</h3>
                  <span className="shrink-0 rounded-full bg-[#f1eee1] px-3 py-1 text-xs font-semibold text-[#6c4d24]">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm leading-6 text-[#55584c]">{project.summary}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#d8d8cc] px-2 py-1 text-xs font-medium text-[#55584c]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-b border-[#d8d8cc] bg-[#22231d] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9cc8b7]">
            Technical stack
          </p>
          <h2 className="mt-3 text-3xl font-semibold">Skills that match the target roles</h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.name} className="rounded-lg border border-white/15 p-5">
                  <Icon className="mb-5 text-[#9cc8b7]" size={28} />
                  <h3 className="text-lg font-semibold">{group.name}</h3>
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-white/72">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="certifications" className="border-b border-[#d8d8cc] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a6542f]">
              Certifications
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Signals for cloud, network, and security readiness.</h2>
            <p className="mt-5 text-base leading-8 text-[#55584c]">
              These certifications support my transition from infrastructure
              fundamentals into SOC monitoring, cloud security, and AI-enabled
              operational tooling.
            </p>
          </div>
          <div className="grid gap-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-start gap-3 rounded-lg border border-[#d8d8cc] bg-[#fbfbf7] p-4"
              >
                <Award className="mt-0.5 shrink-0 text-[#4f6f64]" size={18} />
                <p className="text-sm font-medium leading-6">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8d8cc]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4f6f64]">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold">Hands-on learning and team practice</h2>
          <div className="mt-9 grid gap-4">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.org}`}
                className="grid gap-4 rounded-lg border border-[#d8d8cc] bg-white p-5 md:grid-cols-[240px_1fr]"
              >
                <div>
                  <p className="font-semibold">{item.role}</p>
                  <p className="mt-1 text-sm text-[#696c5f]">{item.period}</p>
                </div>
                <div>
                  <p className="font-medium">{item.org}</p>
                  <p className="mt-2 text-sm leading-6 text-[#55584c]">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f7f7f2]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a6542f]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Open for junior tech roles and project collaboration.</h2>
            <p className="mt-5 text-base leading-8 text-[#55584c]">
              Currently preparing for final defense and building portfolio proof
              around SOC monitoring, cloud security, and AI automation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:naufalilmi115@gmail.com"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#181914] px-4 text-sm font-semibold text-white hover:bg-[#2d2f28]"
            >
              Email
              <Mail size={16} />
            </a>
            <a
              href="https://linkedin.com/in/naufalilmi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#b9baad] bg-white px-4 text-sm font-semibold hover:bg-[#fbfbf7]"
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://naufalilmi115.blogspot.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#b9baad] bg-white px-4 text-sm font-semibold hover:bg-[#fbfbf7]"
            >
              Lab Notes
              <TerminalSquare size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#b9baad] bg-white px-4 text-sm font-semibold hover:bg-[#fbfbf7]"
            >
              GitHub soon
              <TerminalSquare size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
