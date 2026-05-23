"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "./page.css";
import type { IconType } from "react-icons";
import {
  FaCloud,
  FaRocket,
  FaShieldAlt,
  FaBrain,
  FaCogs,
  FaDatabase,
  FaNetworkWired,
  FaCodeBranch,
  FaServer,
  FaChartLine,
} from "react-icons/fa";
import { MdArchitecture, MdTrendingUp, MdInsights } from "react-icons/md";

type RailMode = "normal" | "fixed" | "bottom";

type PhilosophyCard = {
  label: string;
  title: string;
  text: string;
  image: string;
};

type MindsetCard = {
  title: string;
  text: string;
  icon: IconType;
};

type WorkApproachCard = {
  title: string;
  text: string;
  icon: IconType;
};

type IndustryCard = {
  title: string;
  // text: string;
  image: string;
};

const philosophyCards: PhilosophyCard[] = [
  {
    label: "Mission",
    title: "Engineer unified systems that create long-term business leverage",
    text: "Sri Yantra Tech helps organizations move beyond fragmented platforms and disconnected initiatives by designing integrated systems across digital, AI, cloud, data, and industrial environments.",
    image: "/hero/24.png",
  },
  {
    label: "Vision",
    title: "Build intelligent operating environments, not isolated implementations",
    text: "We believe the future belongs to organizations that connect architecture, workflows, intelligence, infrastructure, and operations into one scalable model.",
    image: "/hero/25.png",
  },
  {
    label: "Philosophy",
    title: "Architecture-first thinking creates durable transformation",
    text: "Technology delivers sustained value when systems are structured correctly from the start, with governance, resilience, integration, and adaptability built into the foundation.",
    image: "/hero/26.png",
  },
];

const mindsetCards: MindsetCard[] = [
  {
    title: "Architecture Before Acceleration",
    text: "We prioritize system structure, boundaries, scalability, and clarity before chasing implementation speed.",
    icon: MdArchitecture,
  },
  {
    title: "AI as a System Layer",
    text: "Intelligence should be embedded into workflows, decisions, and interfaces rather than sitting beside the operating model.",
    icon: FaBrain,
  },
  {
    title: "Data as Operational Infrastructure",
    text: "Reliable data foundations are required for context, automation, visibility, and enterprise responsiveness.",
    icon: FaDatabase,
  },
  {
    title: "Cloud Built for Resilience",
    text: "Infrastructure must support observability, security, repeatability, and long-term operational stability.",
    icon: FaCloud,
  },
  {
    title: "Engineering for Longevity",
    text: "We design systems for durability, maintainability, governance, and future evolution instead of short-lived delivery wins.",
    icon: FaShieldAlt,
  },
  {
    title: "Digital and Physical Integration",
    text: "Modern enterprises increasingly rely on connected digital platforms, industrial workflows, telemetry, and operational intelligence.",
    icon: FaNetworkWired,
  },
];

const workApproach: WorkApproachCard[] = [
  {
    title: "Strategy Aligned to System Design",
    text: "We translate business priorities into practical architecture decisions, ensuring systems are designed with purpose, not just assembled through tools.",
    icon: MdTrendingUp,
  },
  {
    title: "Execution with Structural Discipline",
    text: "Our work balances delivery momentum with architectural rigor so systems remain usable, secure, and scalable over time.",
    icon: FaCogs,
  },
  {
    title: "Business-Aware Engineering",
    text: "We engineer around workflows, operating realities, and organizational outcomes rather than treating technology as an isolated layer.",
    icon: MdInsights,
  },
  {
    title: "Long-Term Platform Thinking",
    text: "We help build foundations that can support future intelligence, integrations, growth, and operational complexity.",
    icon: FaRocket,
  },
];

const systemLayers = [
  {
    id: "01",
    title: "Experience Layer",
    text: "Customer journeys, dashboards, portals, operator interfaces, and product surfaces built for clarity, adoption, and action.",
    icon: FaChartLine,
  },
  {
    id: "02",
    title: "Workflow & Orchestration Layer",
    text: "Business logic, services, APIs, process flows, and automation paths that connect systems into one operating model.",
    icon: FaCodeBranch,
  },
  {
    id: "03",
    title: "AI / Intelligence Layer",
    text: "Copilots, decision support, agentic behavior, retrieval systems, and contextual automation embedded into real operations.",
    icon: FaBrain,
  },
  {
    id: "04",
    title: "Data & Event Layer",
    text: "Pipelines, telemetry, storage, streaming, governance, and data platform foundations that make intelligence dependable.",
    icon: FaDatabase,
  },
  {
    id: "05",
    title: "Cloud / Security / Operations Layer",
    text: "Infrastructure, observability, platform operations, security controls, and resilience mechanisms designed for sustained scale.",
    icon: FaServer,
  },
];

const differentiators = [
  {
    id: "01",
    title: "Systems over Projects",
    text: "We do not think in disconnected deliverables. We design environments where technology layers work together coherently.",
  },
  {
    id: "02",
    title: "Architecture over Patchwork",
    text: "We reduce complexity by shaping the structure early, helping organizations avoid brittle, fragmented growth paths.",
  },
  {
    id: "03",
    title: "AI inside Operations",
    text: "We treat intelligence as part of the operating system, not as a separate experiment or isolated pilot initiative.",
  },
  {
    id: "04",
    title: "Built for Scale and Governance",
    text: "Security, resilience, visibility, and maintainability are designed into the system rather than added later.",
  },
];

const industries: IndustryCard[] = [
  {
    title: "Technology & SaaS",
    
    image: "/industries/saas.png",
  },
  {
    title: "Manufacturing & Industrial",
   
    image: "/industries/manufacturing.png",
  },
  {
    title: "Automotive & Mobility",
    image: "/industries/automotive.png",
  },
  {
    title: "Energy & Utilities",
    image: "/industries/energy.png",
  },
  {
    title: "Infrastructure & Construction",
    image: "/industries/infra.png",
  },
  {
    title: "Banking & Financial Services",
   
    image: "/industries/banking.png",
  },
  {
    title: "Retail & E-Commerce",
  
    image: "/industries/retail.png",
  },
  {
    title: "Media & Entertainment",
    
    image: "/hero/11.png",
  },
];

const identityCards = [
  {
    kicker: "Digital Engineering",
    title: "Platforms, interfaces, and connected product systems",
    text: "We engineer structured digital environments that support customer journeys, operational workflows, and ecosystem growth.",
    image: "/hero/20.png",
  },
  {
    kicker: "AI Systems",
    title: "Operational intelligence embedded into real execution paths",
    text: "We integrate AI into the way systems work, enabling contextual decisions, automation, and intelligence-led workflows.",
    image: "/hero/21.png",
  },
  {
    kicker: "Cloud & Data",
    title: "Foundations for resilience, observability, and scale",
    text: "Our work connects infrastructure, telemetry, governance, and data platforms into stable foundations for enterprise growth.",
    image: "/hero/22.png",
  },
  {
    kicker: "Industrial Integration",
    title: "Bridging physical operations with digital intelligence",
    text: "We help unify engineering, telemetry, industrial context, and digital systems into more capable operating environments.",
    image: "/hero/23.png",
  },
];

export default function AboutPage() {
  const [railMode, setRailMode] = useState<RailMode>("normal");
  const industries1RowRef = useRef<HTMLDivElement | null>(null);

  const systemsSectionRef = useRef<HTMLDivElement | null>(null);
  const systemsBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const syncRail = () => {
      if (window.innerWidth <= 1199) {
        setRailMode("normal");
        return;
      }

      const sectionEl = systemsSectionRef.current;
      const boxEl = systemsBoxRef.current;

      if (!sectionEl || !boxEl) return;

      const fixedTop = 110;
      const sectionRect = sectionEl.getBoundingClientRect();
      const sectionTop = sectionRect.top + window.scrollY;
      const sectionBottom = sectionTop + sectionEl.offsetHeight;
      const boxHeight = boxEl.offsetHeight;
      const scrollY = window.scrollY;

      const fixedStart = sectionTop - fixedTop;
      const fixedEnd = sectionBottom - fixedTop - boxHeight;

      if (scrollY < fixedStart) {
        setRailMode("normal");
      } else if (scrollY >= fixedStart && scrollY < fixedEnd) {
        setRailMode("fixed");
      } else {
        setRailMode("bottom");
      }
    };

    syncRail();
    window.addEventListener("scroll", syncRail, { passive: true });
    window.addEventListener("resize", syncRail);

    return () => {
      window.removeEventListener("scroll", syncRail);
      window.removeEventListener("resize", syncRail);
    };
  }, []);

  const industries1Scroll = (direction: "left" | "right") => {
    const row = industries1RowRef.current;
    if (!row) return;

    const card = row.querySelector<HTMLElement>(".industries1-card");
    const amount = card ? card.offsetWidth + 24 : 360;

    row.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const industries1Cards = useMemo(() => industries, []);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="container">
          <div className="about-hero-inner">
            {/* <span className="eyebrow">About Sri Yantra Tech</span> */}

            <h1 className="about-title">
              Engineering Intelligent Systems for a Scalable Future
            </h1>

            <p className="about-subtitle">
              Sri Yantra Tech is an architecture-first engineering company that
              helps organizations build integrated digital, AI, cloud, data, and
              industrial systems designed for clarity, resilience, and long-term
              scale.
            </p>

            {/* <div className="about-hero-actions">
              <a href="/marketing/contact" className="btn btn-primary">
                Start a Strategic Discussion
              </a>
              <a href="/marketing/services" className="btn btn-secondary">
                Explore Capabilities
              </a>
            </div> */}
{/* 
            <div className="hero-metrics">
              <div className="hero-metric-card">
                <strong>Architecture-First</strong>
                <span>Structure before scale, clarity before complexity</span>
              </div>
              <div className="hero-metric-card">
                <strong>AI-Embedded</strong>
                <span>Intelligence integrated into real workflows and systems</span>
              </div>
              <div className="hero-metric-card">
                <strong>Scalable by Design</strong>
                <span>Built for resilience, governance, and future growth</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="who-we-are-section">
        <div className="container">
          <div className="about-split-grid">
            <div className="about-split-left">
              <p className="section-label">Who We Are</p>
              <h2 className="section-title">
                An engineering-led company focused on modern enterprise systems
              </h2>
            </div>

            <div className="about-split-right">
              <p className="about-body-copy">
                Sri Yantra Tech helps organizations design and evolve integrated
                environments across digital platforms, AI systems, cloud
                infrastructure, data ecosystems, and industrial operations.
              </p>
              <p className="about-body-copy">
                We are not built around isolated implementations. We are built around
                systems thinking. That means shaping architecture, workflows, data,
                intelligence, and operations into one coherent model that can scale
                with the business.
              </p>
            </div>
          </div>

          <div className="identity-grid">
            {identityCards.map((card) => (
              <article className="identity-card" key={card.kicker}>
                <div className="identity-image-wrap">
                  <img
                    src={card.image}
                    alt={card.kicker}
                    className="identity-image"
                  />
                </div>
                <div className="identity-body">
                  <span className="identity-kicker">{card.kicker}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-we-exist-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">Why We Exist</p>
              <h2 className="section-title">
                Too many organizations scale through disconnected systems
              </h2>
            </div>

            <p className="section-copy">
              AI remains trapped in pilots, data is fragmented across platforms,
              infrastructure struggles under growth, and operational workflows are
              often disconnected from the systems meant to support them.
            </p>
          </div>

          <div className="problem-solution-grid">
            <article className="problem-solution-card">
              <span className="problem-solution-tag">The Challenge</span>
              <h3>Fragmented tools create fragmented execution</h3>
              <p>
                When platforms, workflows, data, and infrastructure evolve
                separately, organizations inherit complexity, inconsistency, and
                limited scalability.
              </p>
            </article>

            <article className="problem-solution-card">
              <span className="problem-solution-tag">Our Response</span>
              <h3>Unified systems create durable enterprise value</h3>
              <p>
                Sri Yantra Tech exists to help organizations move toward
                integrated, intelligence-ready, architecture-led operating
                environments that support both present execution and future growth.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">Mission, Vision &amp; Philosophy</p>
              <h2 className="section-title">
                The principles behind how we build and why we build
              </h2>
            </div>

            <p className="section-copy">
              Our company direction is rooted in integrated systems thinking,
              intelligent infrastructure, and practical enterprise engineering.
            </p>
          </div>

          <div className="philosophy-grid">
            {philosophyCards.map((card) => (
              <article className="philosophy-card" key={card.label}>
                <div className="philosophy-image-wrap">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="philosophy-image"
                  />
                </div>
                <div className="philosophy-content">
                  <span className="philosophy-label">{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mindset-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">Our Engineering Mindset</p>
              <h2 className="section-title">
                A structured approach to transformation and system design
              </h2>
            </div>

            <p className="section-copy">
              We approach architecture, AI, data, cloud, and industrial contexts as
              connected layers of one larger operating model.
            </p>
          </div>

          <div className="mindset-grid">
            {mindsetCards.map((item) => {
              const Icon = item.icon;
              return (
                <article className="mindset-card" key={item.title}>
                  <div className="mindset-card-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <span className="mindset-card-kicker">Engineering Principle</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="how-we-work-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">How We Work</p>
              <h2 className="section-title">
                Strategy, architecture, and execution designed to move together
              </h2>
            </div>

            <p className="section-copy">
              We combine business-aware engineering with long-term systems thinking
              so technology decisions support real operational outcomes.
            </p>
          </div>

          <div className="work-grid">
            {workApproach.map((item) => {
              const Icon = item.icon;
              return (
                <article className="work-card" key={item.title}>
                  <div className="work-card-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="systems-section">
        <div className="container">
          <div className="systems-shell" ref={systemsSectionRef}>
            <div className="systems-left-rail">
              <div
                ref={systemsBoxRef}
                className={`systems-fixed-box systems-${railMode}`}
              >
                <p className="section-label">Systems Thinking</p>
                <h2>Modern enterprises scale through coordinated system layers</h2>
                <p className="systems-intro">
                  Sri Yantra Tech approaches transformation as the design of an
                  integrated operating environment where experience, workflows,
                  intelligence, data, cloud, and operations reinforce one another.
                </p>

                <a href="/marketing/contact" className="btn btn-dark">
                  Discuss Your Architecture
                </a>
              </div>
            </div>

            <div className="systems-right-stack">
              <div className="storyboard-track">
                {systemLayers.map((layer, index) => {
                  const Icon = layer.icon;
                  return (
                    <article className="storyboard-card" key={layer.id}>
                      <div className="storyboard-line" aria-hidden="true" />
                      <div className="storyboard-index">{layer.id}</div>

                      <div className="storyboard-content">
                        <div className="storyboard-icon" aria-hidden="true">
                          <Icon />
                        </div>
                        <span className="storyboard-kicker">Operating Layer</span>
                        <h3>{layer.title}</h3>
                        <p>{layer.text}</p>
                      </div>

                      <div className="storyboard-step">Layer {index + 1}</div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="differentiators-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">What Makes Us Different</p>
              <h2 className="section-title">
                Structured engineering over patchwork execution
              </h2>
            </div>

            <p className="section-copy">
              Our differentiation comes from connecting strategy, architecture,
              intelligence, and operational engineering into one disciplined model.
            </p>
          </div>

          <div className="differentiators-grid">
            {differentiators.map((item) => (
              <article className="differentiator-card" key={item.id}>
                <span className="differentiator-index">{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industries1-section">
  <div className="container">
    <div className="section-head">
      <div>
        <p className="section-label">Industry Context</p>
        <h2 className="section-title">
          Built to support complex digital and operational environments
        </h2>
      </div>

      <p className="section-copy">
        Our architecture-led approach is relevant across software-intensive,
        asset-intensive, and operationally complex sectors.
      </p>
    </div>

    <div className="industries1-shell">
      <div className="industries1-row" ref={industries1RowRef}>
        {industries1Cards.map((item) => (
          <article className="industries1-card" key={item.title}>
            <div className="industries1-media">
              <img
                src={item.image}
                alt={item.title}
                className="industries1-image"
              />
              <div className="industries1-image-overlay" />

              <div className="industries1-body">
                {/* <span className="industries1-kicker">Industry</span> */}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="industries1-actions">
        <button
          type="button"
          className="industries1-nav-button"
          onClick={() => industries1Scroll("left")}
          aria-label="Scroll industries left"
        >
          ←
        </button>
        <button
          type="button"
          className="industries1-nav-button"
          onClick={() => industries1Scroll("right")}
          aria-label="Scroll industries right"
        >
          →
        </button>
      </div>
    </div>
  </div>
</section>

      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <p className="section-label">Build Systems That Are Structured to Scale</p>
            <h2>
             Bring the Enterprise Intelligence Fabric
            </h2>
            <p>
              Sri Yantra Tech helps organizations engineer operating environments
              where architecture, execution, and intelligence are aligned from the
              ground up.
            </p>

            <div className="about-cta-actions">
              <a href="/marketing/contact" className="btn btn-primary">
                Start the Conversation
              </a>
              {/* <a href="/marketing/services" className="btn btn-secondary">
                Explore Services
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}