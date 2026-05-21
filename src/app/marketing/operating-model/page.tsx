"use client";

import "./page.css";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  FaBullseye,
  FaBrain,
  FaChartLine,
  FaCloud,
  FaCogs,
  FaProjectDiagram,
  FaSyncAlt,
} from "react-icons/fa";
import {
  MdArchitecture,
  MdAutoGraph,
  MdInsights,
  MdOutlineHub,
  MdSecurity,
} from "react-icons/md";

type Phase = {
  number: string;
  title: string;
  icon: ReactNode;
  description: string;
  points: string[];
  outcome: string;
};

type CardItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

const lifecycle = [
  "Strategy",
  "Architecture",
  "Engineering",
  "Intelligence",
  "Optimization",
];

const pipelineSteps: CardItem[] = [
  {
    title: "Strategy",
    description: "Clarify priorities, risk, constraints, and opportunity.",
    icon: <MdInsights color="#2B4B9B" />,
  },
  {
    title: "Architecture",
    description: "Define application, data, cloud, and security structure.",
    icon: <MdArchitecture color="#2B4B9B" />,
  },
  {
    title: "Engineering",
    description: "Build modular systems with disciplined delivery practices.",
    icon: <FaCogs color="#2B4B9B" />,
  },
  {
    title: "Intelligence",
    description: "Embed AI, automation, and decision logic into operations.",
    icon: <FaBrain color="#2B4B9B" />,
  },
  {
    title: "Optimization",
    description: "Monitor, tune, scale, secure, and continuously improve.",
    icon: <MdAutoGraph color="#2B4B9B" />,
  },
];

const phases: Phase[] = [
  {
    number: "01",
    title: "Strategic Alignment",
    icon: <FaBullseye color="#2563EB" />,
    description:
      "We begin by aligning system direction to business priorities, technical realities, and execution risk before any build work begins.",
    points: [
      "Business objective mapping",
      "Technical constraint analysis",
      "Risk evaluation and mitigation planning",
      "AI opportunity identification",
      "System-level thinking before execution",
    ],
    outcome:
      "Clear alignment between business goals and system design direction.",
  },
  {
    number: "02",
    title: "Architecture & System Design",
    icon: <MdArchitecture color="#7C3AED" />,
    description:
      "We design the structural blueprint that connects applications, data, cloud, security, and operating requirements into one scalable model.",
    points: [
      "Application architecture blueprint",
      "Data flow and interaction modeling",
      "Cloud infrastructure design",
      "Security and compliance framework",
      "Modular and scalable system planning",
    ],
    outcome: "A structured architecture that enables long-term scalability.",
  },
  {
    number: "03",
    title: "Engineering Execution",
    icon: <FaCogs color="#F59E0B" />,
    description:
      "We translate architecture into production-ready systems through disciplined engineering, modular development, and delivery automation.",
    points: [
      "Agile and iterative delivery",
      "Modular system development",
      "API-first and microservices engineering",
      "CI/CD automation pipelines",
      "Performance engineering and benchmarking",
    ],
    outcome: "Reliable, high-performance system implementation.",
  },
  {
    number: "04",
    title: "Intelligence Integration",
    icon: <FaBrain color="#8B5CF6" />,
    description:
      "We embed intelligence into the operating layer so systems can automate workflows, assist decisions, and improve outcomes continuously.",
    points: [
      "AI agent deployment",
      "Workflow automation",
      "LLM and decision-system integration",
      "Data intelligence embedding",
      "Real-time orchestration logic",
    ],
    outcome: "Systems that can think, adapt, and optimize operations.",
  },
  {
    number: "05",
    title: "Continuous Optimization",
    icon: <FaChartLine color="#10B981" />,
    description:
      "We harden and evolve systems after deployment through observability, tuning, cost control, and predictive scaling.",
    points: [
      "Monitoring and observability systems",
      "Performance tuning and scaling",
      "Infrastructure hardening",
      "Cost optimization strategies",
      "Predictive scaling and system evolution",
    ],
    outcome: "Continuously improving systems with long-term resilience.",
  },
];

const principles: CardItem[] = [
  {
    title: "Systems Over Silos",
    description:
      "We do not implement isolated tools. We architect connected layers across product, data, AI, infrastructure, and operations.",
    icon: <MdOutlineHub color="#2563EB" />,
  },
  {
    title: "Architecture Before Acceleration",
    description:
      "Speed only creates value when the structure underneath is coherent, secure, and designed for change.",
    icon: <MdArchitecture color="#7C3AED" />,
  },
  {
    title: "Intelligence Embedded by Design",
    description:
      "AI is built into workflows, decisions, and system behavior - not added as a disconnected feature later.",
    icon: <FaBrain color="#8B5CF6" />,
  },
  {
    title: "Optimization Never Ends",
    description:
      "Deployment is not the finish line. We continuously improve performance, resilience, scale, and efficiency.",
    icon: <MdAutoGraph color="#10B981" />,
  },
];

const differentiators: CardItem[] = [
  {
    title: "Architecture-First Delivery",
    description:
      "Execution is grounded in clear system design, not fragmented task delivery.",
    icon: <MdArchitecture color="#2563EB" />,
  },
  {
    title: "AI Embedded, Not Bolted On",
    description:
      "Intelligence is integrated into workflows and operations from the start.",
    icon: <FaBrain color="#8B5CF6" />,
  },
  {
    title: "Designed for Scale from Day One",
    description:
      "Systems are structured to support future growth, complexity, and performance demands.",
    icon: <FaCloud color="#06B6D4" />,
  },
  {
    title: "Integrated Digital + Physical Thinking",
    description:
      "We connect software, infrastructure, data, AI, and industrial realities into one operating model.",
    icon: <FaProjectDiagram color="#F59E0B" />,
  },
  {
    title: "Lifecycle Ownership",
    description:
      "We think beyond launch - into monitoring, hardening, evolution, and long-term value creation.",
    icon: <FaSyncAlt color="#10B981" />,
  },
  {
    title: "Security as a Structural Layer",
    description:
      "Security, resilience, and governance are built into architecture, not treated as an afterthought.",
    icon: <MdSecurity color="#EF4444" />,
  },
];

export default function OperatingModelPage() {
  const overviewSectionRef = useRef<HTMLDivElement | null>(null);
  const overviewBoxRef = useRef<HTMLDivElement | null>(null);
  const [overviewMode, setOverviewMode] = useState<
    "normal" | "fixed" | "bottom"
  >("normal");

  useEffect(() => {
    const handleScroll = () => {
      const section = overviewSectionRef.current;
      const box = overviewBoxRef.current;
      if (!section || !box) return;

      if (window.innerWidth <= 991) {
        setOverviewMode("normal");
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const boxHeight = box.offsetHeight;
      const topOffset = 110;

      const shouldFix = sectionRect.top <= topOffset;
      const shouldStop = sectionRect.bottom <= topOffset + boxHeight;

      if (!shouldFix) {
        setOverviewMode("normal");
      } else if (!shouldStop) {
        setOverviewMode("fixed");
      } else {
        setOverviewMode("bottom");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="wom-page">
      <section
        className="wom-hero-section"
        style={{
          backgroundImage: "url('/hero/strategy.png')",
        }}
      >
        <div className="wom-hero-overlay" />
        <div className="wom-container wom-hero-grid">
          <div className="wom-hero-content">
            {/* <p className="wom-hero-eyebrow">Sri Yantra Tech - Operating Model</p> */}
            <h1>Structured Execution for Scalable Systems</h1>
            <p className="wom-hero-subheadline">
              We follow a defined operating model that transforms strategy into
              engineered, intelligent, and scalable systems across digital, AI,
              cloud, data, and industrial domains.
            </p>
          </div>
        </div>
      </section>

      <section className="wom-section wom-section-intro">
        <div className="wom-container wom-two-column wom-intro-layout">
          <div className="wom-left-content">
            <p className="wom-section-label">Framework Overview</p>
            <h2>End-to-End System Execution Framework</h2>

            <img
              src="/industries/infra.png"
              alt="End-to-End System Execution Framework"
              className="wom-section-feature-image"
            />
          </div>

          <div className="wom-text-stack wom-intro-text">
            <p>
              Every engagement follows a structured lifecycle built to move from
              clarity to execution without disconnects between planning,
              engineering, and intelligence.
            </p>
            <p>
              Rather than treating strategy, architecture, delivery, and
              optimization as separate tracks, we connect them into one
              integrated operating model.
            </p>
            <p>
              This allows systems to be designed for long-term scalability,
              adaptability, resilience, and measurable performance from the very
              beginning.
            </p>
          </div>
        </div>
      </section>

      <section className="wom-section wom-pipeline-section">
        <div className="wom-container wom-pipeline-container">
          <div className="wom-section-heading wom-centered-heading wom-pipeline-heading">
            <p className="wom-section-label">Visual System Pipeline</p>
            <h2>How the Operating Model Moves Work Forward</h2>
          </div>

          <div className="wom-pipeline-shell">
            <div className="wom-pipeline-connector-line" />

            <div className="wom-pipeline-grid">
              {pipelineSteps.map((item, index) => (
                <article key={item.title} className="wom-pipeline-card">
                  <div className="wom-pipeline-card-inner">
                    <div className="wom-pipeline-icon-wrap">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  {index < pipelineSteps.length - 1 && (
                    <div className="wom-pipeline-arrow-bridge" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wom-section wom-section-alt wom-principles-section">
        <div className="wom-container">
          <div className="wom-section-heading">
            <p className="wom-section-label">Operating Principles</p>
            <h2>Systems Over Silos</h2>
          </div>

          <div className="wom-card-grid wom-two-col">
            {principles.map((item) => (
              <article
                key={item.title}
                className="wom-info-card wom-principle-card"
              >
                <div className="wom-principle-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wom-section wom-phases-section">
        <div className="wom-container">
          <div className="wom-phases-shell" ref={overviewSectionRef}>
            <div className="wom-phases-left-rail">
              <div
                ref={overviewBoxRef}
                className={`wom-phases-fixed-box wom-phases-${overviewMode}`}
              >
                <p className="wom-section-label">Execution Model</p>
                <h2>Five connected phases. One scalable system path.</h2>
                <p className="wom-phases-intro">
                  Each phase builds on the one before it, ensuring strategy,
                  architecture, engineering, intelligence, and optimization
                  operate as one continuous system.
                </p>

                <div className="wom-mini-flow">
                  {lifecycle.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <img
                  src="/industries/energy.png"
                  alt="Execution model"
                  className="wom-execution-model-image"
                />
              </div>
            </div>

            <div className="wom-phases-right-stack">
              {phases.map((item) => (
                <article key={item.title} className="wom-phase-card">
                  <div className="wom-phase-top">
                    <div className="wom-phase-meta">
                      <span className="wom-phase-number">{item.number}</span>
                      <div className="wom-phase-icon">{item.icon}</div>
                    </div>
                    <h3>{item.title}</h3>
                  </div>

                  <p className="wom-phase-description">{item.description}</p>

                  <div className="wom-phase-points">
                    {item.points.map((point) => (
                      <div key={point} className="wom-phase-point">
                        <span className="wom-phase-point-dot" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="wom-phase-outcome">
                    <span className="wom-outcome-label">Outcome</span>
                    <p>{item.outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wom-section wom-differentiation-section">
        <div className="wom-container">
          <div className="wom-section-heading">
            <p className="wom-section-label">Why This Model Works</p>
            <h2>Operating Model Advantages</h2>
          </div>

          <div className="wom-card-grid wom-three-col">
            {differentiators.map((item) => (
              <article
                key={item.title}
                className="wom-info-card wom-differentiator-card"
              >
                <div className="wom-differentiator-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wom-section wom-case-study-section">
        <div className="wom-container wom-two-column wom-case-layout">
          <div>
            <p className="wom-section-label wom-section-label-light">
              Execution Outcome
            </p>
            <h2>Built for Long-Term Scalability, Not One-Time Delivery</h2>
          </div>

          <div className="wom-case-study-card">
            <p className="wom-case-study-tag">Structured System Delivery</p>
            <p className="wom-case-study-description">
              By aligning objectives, architecture, engineering discipline,
              intelligence integration, and continuous optimization, teams move
              from fragmented implementation to coherent system execution.
            </p>

            <div className="wom-stats-grid">
              <div className="wom-stat-box">
                <h3>5</h3>
                <p>Connected operating phases</p>
              </div>
              <div className="wom-stat-box">
                <h3>1</h3>
                <p>Integrated execution model</p>
              </div>
              <div className="wom-stat-box">
                <h3>∞</h3>
                <p>Continuous improvement mindset</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wom-cta-wrapper">
        <div className="wom-container">
          <div className="wom-cta-box">
            <div className="wom-cta-content">
              <p className="wom-section-label wom-section-label-light">
                Final CTA
              </p>
              <h2>Build Systems That Scale with Structure</h2>
              <p>
                Move beyond fragmented execution. Engineer systems through a
                defined operating model built for clarity, scale, and long-term
                performance.
              </p>
            </div>

            <div className="wom-cta-action">
              <button className="wom-btn wom-btn-white">
                Start a Strategic Discussion
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}