"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Minimal hook for intersection observer
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.1, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const projects = [
  {
    name: "WatchUp V2",
    url: "https://v2.watchup.site",
    description: "Real-time error tracking & API monitoring. A Sentry alternative built for speed.",
    tech: ["Node.js", "React", "WebSocket"],
    status: "Building",
  },
  {
    name: "Verso",
    url: "https://verso.watchup.site",
    description: "Anonymous poetry platform. Minimalist sanctuary with 12k+ published poems.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    status: "Live",
  },
  {
    name: "BlockCred",
    url: null,
    description: "Decentralized credential verification on the Sui blockchain for academic and professional records.",
    tech: ["Sui", "React", "Web3"],
    status: "In Progress",
  },
  {
    name: "Ripplebids",
    url: "https://ripplebids.com",
    description: "Crypto-enabled bidding and marketplace for digital and physical assets.",
    tech: ["React Native", "Blockchain", "API"],
    status: "Live",
  },
  {
    name: "RippleVids",
    url: "https://ripplevids.com",
    description: "Short-form video platform with TikTok-style feed and real-time engagement.",
    tech: ["React Native", "FFmpeg", "AWS"],
    status: "Live",
  },
  {
    name: "MyTicketSeller",
    url: "https://myticketseller.com",
    description: "Event ticketing for nightlife events, exclusive parties, and gatherings.",
    tech: ["Django", "PostgreSQL", "Stripe"],
    status: "Live",
  },
];

const stack = [
  { cat: "Backend", items: ["Node.js", "Python", "Django", "Flask", ".NET"] },
  { cat: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { cat: "Mobile", items: ["React Native", "Expo"] },
  { cat: "Blockchain", items: ["Solana", "Ethereum", "Sui", "WAXP"] },
  { cat: "Infra", items: ["AWS", "PostgreSQL", "MongoDB", "WebSocket"] },
];

const quotes = [
  "Code is poetry written in logic.",
  "The best debugging tool is still thinking, coupled with judicious print statements.",
  "Production systems don't care about your feelings, only your code quality.",
  "Blockchain isn't just technology, it's a paradigm shift in trust.",
  "Real-time systems teach you that milliseconds matter more than minutes.",
  "Clean code is not written by following a set of rules. It's written by someone who cares.",
  "The most expensive bug is the one that makes it to production.",
  "Scalability isn't about handling more users, it's about handling more complexity gracefully.",
  "Every line of code is a liability until it proves its worth in production.",
  "The difference between a developer and an engineer is production experience."
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    setTimeout(() => setMounted(true), 50);
    const handleScroll = () => {
      const sections = ["about", "projects", "stack", "quotes", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) { setActiveNav(id); break; }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-root">
      {/* NAV */}
      <nav className="nav">
        <span className="nav-mark">TR</span>
        <div className="nav-links">
          {["about", "projects", "stack", "quotes", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`nav-link ${activeNav === id ? "nav-link--active" : ""}`}
            >
              {id}
            </button>
          ))}
        </div>
      </nav>

     {/* HERO */}
<section className="hero">
  <div
    className="hero-inner"
    style={{
      opacity: mounted ? 1 : 0,
      transform: mounted ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
    }}
  >
    {/* LEFT — text */}
    <div className="hero-text">
      <p className="hero-eyebrow">Fullstack Engineer · Blockchain Developer</p>
      <h1 className="hero-name">Tomiwa<br />Raphael.</h1>
      <p className="hero-sub">
        Building production systems that scale.<br />
        Web, mobile, and blockchain infrastructure.
      </p>
      <div className="hero-cta">
        <button className="btn-primary" onClick={() => scrollTo("projects")}>
          View Work
        </button>
        <a href="mailto:devtomiwa9@gmail.com" className="btn-ghost">
          Get in touch
        </a>
      </div>
    </div>

    {/* RIGHT — image */}
    <div className="hero-image-wrap">
      <Image
        src="/profile.png"
        alt="Tomiwa Raphael"
        width={340}
        height={420}
        className="profile-image"
        priority
      />
    </div>
  </div>

  <div
    className="hero-scroll-hint"
    style={{
      opacity: mounted ? 1 : 0,
      transition: "opacity 1.2s ease 1.2s",
    }}
  >
    <span className="scroll-line" />
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="section">
        <FadeIn>
          <span className="section-label">/ about</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="about-text">
            I'm a software engineer with 8+ years shipping production systems across web, mobile, and blockchain.
            Based in Lagos, Nigeria. I care deeply about architecture, performance, and code that actually survives real-world usage.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="about-text about-text--muted">
            Currently building WatchUp V2 and BlockCred. Available for select freelance projects and collaborations.
          </p>
        </FadeIn>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <FadeIn>
          <span className="section-label">/ projects</span>
        </FadeIn>
        <div className="projects-list">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.07}>
              <ProjectRow project={p} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="section">
        <FadeIn>
          <span className="section-label">/ stack</span>
        </FadeIn>
        <div className="stack-grid">
          {stack.map((group, i) => (
            <FadeIn key={group.cat} delay={i * 0.08}>
              <div className="stack-group">
                <p className="stack-cat">{group.cat}</p>
                {group.items.map((item) => (
                  <p key={item} className="stack-item">{item}</p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* QUOTES */}
      <section id="quotes" className="section">
        <FadeIn>
          <span className="section-label">/ quotes</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="quotes-intro">My best quotes on programming systems.</p>
        </FadeIn>
        <div className="quotes-grid">
          {quotes.map((quote, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="quote-card">
                <p className="quote-text">"{quote}"</p>
                <p className="quote-author">— Tomiwa</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section--contact">
        <FadeIn>
          <span className="section-label">/ contact</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="contact-heading">Let's build something.</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="contact-links">
            <a href="mailto:devtomiwa9@gmail.com" className="contact-link">
              devtomiwa9@gmail.com
            </a>
            <a href="https://github.com/tomurashigaraki22" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
            <a href="https://wa.me/2347044831729" target="_blank" rel="noopener noreferrer" className="contact-link">
              WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Tomiwa Raphael</p>
        <p>Lagos, Nigeria</p>
      </footer>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .portfolio-root {
          min-height: 100vh;
          background: #111111;
          color: #EAEAEA;
          font-family: 'Geist', 'Inter', sans-serif;
        }

        /* NAV */
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 40px;
          background: rgba(17,17,17,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .nav-mark {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #B89A4A;
        }
        .nav-links {
          display: flex;
          gap: 32px;
        }
        .nav-link {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: #606060;
          text-transform: lowercase;
          transition: color 0.2s ease;
          font-family: inherit;
          padding: 0;
        }
        .nav-link:hover, .nav-link--active {
          color: #EAEAEA;
        }
        .nav-link--active {
          color: #B89A4A;
        }

        /* HERO */
        /* HERO */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 40px 80px;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.hero-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  width: 100%;
}
  .hero-text {
  flex: 1;
  min-width: 0;
}

.hero-image-wrap {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
        .hero-eyebrow {
          font-size: 12px;
          letter-spacing: 0.14em;
          color: #B89A4A;
          text-transform: uppercase;
          margin-bottom: 32px;
        }
        .hero-profile {
          margin-bottom: 32px;
        }
        .profile-image {
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  object-fit: cover;
  filter: grayscale(20%);
  transition: filter 0.4s ease, border-color 0.4s ease;
}

.profile-image:hover {
  filter: grayscale(0%);
  border-color: #B89A4A;
}
        .hero-name {
          font-size: clamp(52px, 9vw, 96px);
          font-weight: 300;
          line-height: 1.02;
          letter-spacing: -0.03em;
          color: #EAEAEA;
          margin-bottom: 28px;
        }
        .hero-sub {
          font-size: 16px;
          color: #686868;
          line-height: 1.7;
          margin-bottom: 48px;
          max-width: 420px;
        }
        .hero-cta {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .btn-primary {
          background: #B89A4A;
          color: #111111;
          border: none;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 12px 28px;
          font-family: inherit;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .btn-primary:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }
        .btn-ghost {
          font-size: 13px;
          color: #686868;
          text-decoration: none;
          letter-spacing: 0.04em;
          border-bottom: 1px solid transparent;
          transition: color 0.2s ease, border-color 0.2s ease;
          padding-bottom: 2px;
        }
        .btn-ghost:hover {
          color: #EAEAEA;
          border-color: #EAEAEA;
        }
        .hero-scroll-hint {
          position: absolute;
          bottom: 48px;
          left: 40px;
        }
        .scroll-line {
          display: block;
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, #B89A4A, transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* SECTIONS */
        .section {
          max-width: 900px;
          margin: 0 auto;
          padding: 100px 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .section--contact {
          padding-bottom: 120px;
        }
        .section-label {
          display: block;
          font-size: 11px;
          letter-spacing: 0.16em;
          color: #B89A4A;
          text-transform: uppercase;
          margin-bottom: 48px;
        }

        /* ABOUT */
        .about-text {
          font-size: 18px;
          color: #A0A0A0;
          line-height: 1.75;
          max-width: 620px;
          margin-bottom: 20px;
        }
        .about-text--muted {
          color: #606060;
          font-size: 15px;
        }

        /* PROJECTS */
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* PROJECT ROW */
        .project-row {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: start;
          padding: 28px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          transition: transform 0.25s ease;
        }
        .project-row:hover {
          transform: translateX(4px);
        }
        .project-row:hover .project-name {
          color: #B89A4A;
        }
        .project-name {
          font-size: 18px;
          font-weight: 400;
          color: #EAEAEA;
          margin-bottom: 6px;
          transition: color 0.2s ease;
          letter-spacing: -0.01em;
        }
        .project-desc {
          font-size: 13px;
          color: #686868;
          line-height: 1.6;
          max-width: 500px;
          margin-bottom: 12px;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tech-tag {
          font-size: 10px;
          letter-spacing: 0.08em;
          color: #505050;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.07);
          padding: 3px 8px;
        }
        .project-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }
        .project-status {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #505050;
        }
        .project-status--live { color: #4A7A5A; }
        .project-status--building { color: #B89A4A; }
        .project-status--progress { color: #6A7A9A; }
        .project-arrow {
          font-size: 14px;
          color: #404040;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .project-row:hover .project-arrow {
          color: #B89A4A;
          transform: translate(2px, -2px);
        }

        /* STACK */
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 40px 32px;
        }
        .stack-cat {
          font-size: 11px;
          letter-spacing: 0.12em;
          color: #B89A4A;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .stack-item {
          font-size: 14px;
          color: #686868;
          line-height: 2;
          transition: color 0.2s ease;
        }
        .stack-item:hover { color: #EAEAEA; }

        /* QUOTES */
        .quotes-intro {
          font-size: 16px;
          color: #A0A0A0;
          margin-bottom: 48px;
          font-style: italic;
        }
        .quotes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .quote-card {
          padding: 24px;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .quote-card:hover {
          border-color: rgba(184,154,74,0.3);
          transform: translateY(-2px);
        }
        .quote-text {
          font-size: 14px;
          color: #A0A0A0;
          line-height: 1.6;
          margin-bottom: 12px;
          font-style: italic;
        }
        .quote-author {
          font-size: 11px;
          color: #B89A4A;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* CONTACT */
        .contact-heading {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 300;
          letter-spacing: -0.03em;
          color: #EAEAEA;
          margin-bottom: 48px;
          line-height: 1.1;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-link {
          font-size: 16px;
          color: #686868;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          display: inline-block;
          width: fit-content;
          padding-bottom: 2px;
          transition: color 0.2s ease, border-color 0.2s ease;
          letter-spacing: 0.02em;
        }
        .contact-link:hover {
          color: #B89A4A;
          border-color: #B89A4A;
        }

        /* FOOTER */
        .footer {
          max-width: 900px;
          margin: 0 auto;
          padding: 32px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .footer p {
          font-size: 12px;
          color: #383838;
          letter-spacing: 0.04em;
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .nav { padding: 16px 24px; }
          .nav-links { gap: 20px; }
          .hero { padding: 100px 24px 60px; }
          .hero-inner {
            flex-direction: column-reverse;
            gap: 36px;
          }
          .hero-image-wrap {
            justify-content: flex-start;
          }
          .profile-image {
            width: 120px !important;
            height: 148px !important;
          }
          .section { padding: 80px 24px; }
          .footer { padding: 24px; flex-direction: column; gap: 8px; }
          .project-row { grid-template-columns: 1fr; }
          .project-meta { flex-direction: row; align-items: center; }
          .stack-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 24px; }
          .quotes-grid { grid-template-columns: 1fr; gap: 16px; }
          .quote-card { padding: 20px; }
        }
      `}</style>
    </div>
  );
}

function ProjectRow({ project }) {
  const statusClass =
    project.status === "Live" ? "project-status--live" :
    project.status === "Building" ? "project-status--building" :
    "project-status--progress";

  const inner = (
    <>
      <div>
        <p className="project-name">{project.name}</p>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
      <div className="project-meta">
        <span className={`project-status ${statusClass}`}>{project.status}</span>
        {project.url && <span className="project-arrow">↗</span>}
      </div>
    </>
  );

  if (project.url) {
    return (
      <a href={project.url} className="project-row" target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return <div className="project-row" style={{ cursor: "default" }}>{inner}</div>;
}