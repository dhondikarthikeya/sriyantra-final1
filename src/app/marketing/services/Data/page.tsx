"use client";

import { useLayoutEffect } from "react";
import Image from "next/image";
import "./page.css";
import {
  Cpu,
  Database,
  ShieldCheck,
  BarChart3,
  Workflow,
  Sparkles,
  Network,
  Layers3,
  ArrowRight,
} from "lucide-react";

const challengeItems = [
  {
    title: "Fragmented data estates",
    text: "Critical data remains distributed across platforms, teams, and operational systems with limited integration discipline.",
  },
  {
    title: "Legacy delivery models",
    text: "Aging infrastructure and brittle transformation layers slow down reporting, analytics, and modernization efforts.",
  },
  {
    title: "Low trust in reporting",
    text: "Inconsistent standards, weak governance, and quality gaps make decision systems difficult to rely on.",
  },
  {
    title: "Analytics disconnected from action",
    text: "Insights often remain isolated from operations, automation, and enterprise execution workflows.",
  },
];

const capabilities = [
  {
    title: "Data Platform Engineering",
    text: "Design modern enterprise data platforms that unify ingestion, processing, storage, governance, and access across business environments.",
  },
  {
    title: "Pipeline & Integration Engineering",
    text: "Build robust ETL, ELT, API, and streaming pipelines that move and validate data with operational reliability.",
  },
  {
    title: "Warehouse & Lakehouse Architecture",
    text: "Architect scalable data foundations that support reporting, analytics, governance, and extensibility over time.",
  },
  {
    title: "Real-Time Data Systems",
    text: "Enable event-driven architectures and live intelligence systems for time-sensitive monitoring and decisions.",
  },
  {
    title: "Business Intelligence Delivery",
    text: "Create structured reporting, semantic layers, dashboards, and analytics environments tied to measurable business outcomes.",
  },
  {
    title: "Governance & Quality Engineering",
    text: "Establish data trust through lineage, access control, policy enforcement, validation, and quality frameworks.",
  },
];

const architectureLayers = [
  {
    label: "01",
    title: "Source Systems",
    text: "Applications, ERPs, CRMs, IoT devices, industrial systems, logs, files, and third-party feeds.",
  },
  {
    label: "02",
    title: "Ingestion & Orchestration",
    text: "Batch pipelines, APIs, streaming connectors, scheduling, workflow orchestration, and integration controls.",
  },
  {
    label: "03",
    title: "Storage Foundation",
    text: "Data lakes, warehouses, and lakehouse environments structured for scale, governance, and access efficiency.",
  },
  {
    label: "04",
    title: "Transformation & Modeling",
    text: "Cleansing, conformance, enrichment, semantic modeling, reusable logic, and analytics-ready structures.",
  },
  {
    label: "05",
    title: "Analytics & Intelligence Activation",
    text: "Dashboards, metrics, operational reporting, predictive workflows, automation triggers, and AI-ready data services.",
  },
];

const operatingSteps = [
  {
    step: "Assess",
    text: "Evaluate business priorities, data maturity, system constraints, and intelligence requirements.",
  },
  {
    step: "Architect",
    text: "Define platform structure, flow patterns, governance models, and integration decisions.",
  },
  {
    step: "Engineer",
    text: "Implement pipelines, storage layers, transformations, controls, and reusable services.",
  },
  {
    step: "Activate",
    text: "Deploy dashboards, reporting systems, decision layers, and business-aligned analytics capabilities.",
  },
  {
    step: "Optimize",
    text: "Improve observability, performance, quality, scalability, and future AI readiness.",
  },
];

const impactCards = [
  {
    tag: "Operations",
    title: "Real-Time Monitoring Dashboards",
    text: "Create live visibility across process performance, delivery operations, service metrics, and business execution.",
  },
  {
    tag: "Planning",
    title: "Predictive Decision Systems",
    text: "Support forecasting, optimization, and proactive decision-making through engineered data models and trusted pipelines.",
  },
  {
    tag: "Growth",
    title: "Customer Intelligence Platforms",
    text: "Integrate customer, product, and engagement data into systems that improve segmentation, service, and retention.",
  },
  {
    tag: "Industry",
    title: "Industrial Data Environments",
    text: "Connect machine, sensor, and plant data into structured monitoring and performance systems for engineering-led operations.",
  },
  {
    tag: "Automation",
    title: "Data-Driven Workflow Triggers",
    text: "Enable alerts, recommendations, and automated operational responses based on governed real-time data conditions.",
  },
];

const whyItems = [
  {
    icon: <Cpu size={28} />,
    text: "Architecture-led delivery across data, cloud, and AI environments",
  },
  {
    icon: <Database size={28} />,
    text: "Scalable platform design with long-term maintainability",
  },
  {
    icon: <ShieldCheck size={28} />,
    text: "Governed, reusable, and operationally reliable data pipelines",
  },
  {
    icon: <BarChart3 size={28} />,
    text: "Analytics systems aligned to execution, not isolated reporting",
  },
  {
    icon: <Workflow size={28} />,
    text: "AI-ready foundations built for future intelligence integration",
  },
];

export default function DataAnalyticsEngineeringPage() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const html = document.documentElement;
    const body = document.body;

    html.style.overflowX = "clip";
    body.style.overflowX = "clip";

    let frameTwo = 0;

    const forceStickyReflow = () => {
      document
        .querySelectorAll(".data-architecture-left-inner, .data-why-copy-inner")
        .forEach((element) => {
          const node = element as HTMLElement;
          node.style.position = "relative";
          void node.offsetHeight;
          node.style.position = "sticky";
        });

      window.dispatchEvent(new Event("resize"));
    };

    const frameOne = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      forceStickyReflow();

      frameTwo = window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        forceStickyReflow();
      });
    });

    const timer = window.setTimeout(forceStickyReflow, 350);

    return () => {
      window.cancelAnimationFrame(frameOne);
      window.cancelAnimationFrame(frameTwo);
      window.clearTimeout(timer);
      html.style.overflowX = "";
      body.style.overflowX = "";
    };
  }, []);

  return (
    <main className="data-page">
      <section className="data-hero">
        <Image
          src="/hero/bg11.png"
          alt=""
          fill
          priority
          quality={82}
          sizes="100vw"
          className="data-hero-bg"
          aria-hidden="true"
        />

        <div className="data-hero-overlay" />
        <div className="data-hero-grid-lines" />

        <div className="data-shell data-hero-layout">
          <div className="data-hero-copy">
            <h1 className="data-hero-title">
              Data &amp; Analytics Engineering
            </h1>

            <p className="data-hero-text">
              We design modern data platforms, scalable pipelines, analytics
              systems, and governance-ready architectures that transform
              enterprise data into operational visibility, decision support, and
              intelligence-ready infrastructure.
            </p>
          </div>

          <div className="data-hero-frame">
            <div className="data-hero-focus-card">
              <div className="data-hero-focus-top">
                <div className="data-hero-focus-badge">
                  <Sparkles size={16} />
                  <span>Engineering Focus</span>
                </div>
                <span className="data-hero-focus-chip">Enterprise-Ready</span>
              </div>

              <h3 className="data-hero-focus-title">
                Structured systems for data, analytics, and intelligence
              </h3>

              <p className="data-hero-focus-text">
                Architecture-first delivery across pipeline orchestration,
                governed storage, insight layers, and AI-ready systems.
              </p>

              <div className="data-hero-focus-grid">
                <div className="data-hero-focus-tile">
                  <Network size={18} />
                  <span>Pipelines</span>
                </div>
                <div className="data-hero-focus-tile">
                  <ShieldCheck size={18} />
                  <span>Governance</span>
                </div>
                <div className="data-hero-focus-tile">
                  <Layers3 size={18} />
                  <span>Warehousing</span>
                </div>
                <div className="data-hero-focus-tile">
                  <BarChart3 size={18} />
                  <span>BI & Analytics</span>
                </div>
              </div>

              <div className="data-hero-focus-footer">
                <span>Scalable by design</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="data-problem">
        <div className="data-shell">
          <div className="data-problem-layout">
            <div className="data-problem-copy">
              <p className="data-eyebrow">The Enterprise Challenge</p>
              <h2 className="data-section-title">
                Data Without Engineering Does Not Create Value
              </h2>

              <div className="data-problem-image">
                <Image
                  src="/hero/18.png"
                  alt="Enterprise data challenges"
                  width={760}
                  height={360}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  quality={75}
                  className="data-problem-img"
                />
              </div>

              <p className="data-section-text">
                Many organizations invest in dashboards and analytics before
                building the architecture required to support trust, speed, and
                operational reliability. Data only becomes strategic when it is
                engineered into a connected enterprise system.
              </p>
            </div>

            <div className="data-problem-right">
              <div className="data-problem-grid">
                {challengeItems.map((item) => (
                  <article key={item.title} className="data-problem-card">
                    <span className="data-problem-card-mark" />
                    <h3 className="data-problem-card-title">{item.title}</h3>
                    <p className="data-problem-card-text">{item.text}</p>
                  </article>
                ))}
              </div>

              <div className="data-problem-note">
                <h3 className="data-problem-note-title">
                  Data must operate as infrastructure
                </h3>
                <p className="data-problem-note-text">
                  The goal is not isolated reporting. The goal is a scalable
                  system where data supports execution, visibility, and
                  intelligence across the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="data-section data-section-soft">
        <div className="data-shell">
          <div className="data-section-head data-section-head-wide">
            <p className="data-eyebrow">Core Capabilities</p>
            <h2 className="data-section-title">
              Engineering Data Systems That Power Decisions
            </h2>
            <p className="data-section-text">
              We build connected data ecosystems that support enterprise
              reporting, operational visibility, governance, and long-term
              intelligence enablement.
            </p>
          </div>

          <div className="data-capability-grid">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className={`data-capability-card ${
                  index % 2 === 0 ? "data-capability-card-shift" : ""
                }`}
              >
                <div className="data-capability-top">
                  <span className="data-capability-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="data-card-title">{item.title}</h3>
                <p className="data-card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="data-section">
        <div className="data-shell">
          <div className="data-architecture-layout">
            <div className="data-architecture-left">
              <div className="data-architecture-left-inner">
                <div className="data-section-head data-section-head-wide">
                  <p className="data-eyebrow">Architecture Model</p>
                  <h2 className="data-section-title">
                    Modern Data Architecture
                  </h2>

                  <div className="data-architecture-top-image">
                    <Image
                      src="/hero/19.png"
                      alt="Modern data architecture overview"
                      width={820}
                      height={480}
                      sizes="(max-width: 1024px) 100vw, 44vw"
                      quality={75}
                      className="data-architecture-img"
                    />
                  </div>

                  <p className="data-section-text">
                    Effective analytics depends on more than dashboards. It
                    requires a well-structured ecosystem that governs how data
                    is sourced, integrated, stored, transformed, and activated
                    across business and operational systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="data-architecture-right">
              <div className="data-architecture-stack">
                {architectureLayers.map((item) => (
                  <article key={item.label} className="data-architecture-layer">
                    <div className="data-architecture-layer-side">
                      <span className="data-architecture-layer-label">
                        {item.label}
                      </span>
                    </div>

                    <div className="data-architecture-layer-body">
                      <h3 className="data-card-title">{item.title}</h3>
                      <p className="data-card-text">{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="data-section data-section-dark">
        <div className="data-shell">
          <div className="data-section-head-centered">
            <p className="data-eyebrow data-eyebrow-light">Operating Model</p>
            <h2 className="data-section-title data-section-title-light">
              From Data Strategy to Scalable Intelligence
            </h2>
            <p className="data-section-text data-section-text-light">
              Every engagement follows a defined operating sequence designed for
              architecture clarity, engineering discipline, and measurable
              business value.
            </p>
          </div>

          <div className="data-timeline">
            {operatingSteps.map((item, index) => (
              <article key={item.step} className="data-timeline-item">
                <div className="data-timeline-rail">
                  <span className="data-timeline-dot" />
                  {index < operatingSteps.length - 1 && (
                    <span className="data-timeline-line" />
                  )}
                </div>
                <div className="data-timeline-card">
                  <span className="data-timeline-step">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="data-card-title-1">{item.step}</h3>
                  <p className="data-card-text data-card-text-light">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="data-section data-section-soft">
        <div className="data-shell">
          <div className="data-impact-head">
            <div className="data-section-head">
              <p className="data-eyebrow">Impact</p>
              <h2 className="data-section-title">
                Turning Data into Operational Intelligence
              </h2>
              <p className="data-section-text">
                We design environments where data becomes an active part of
                execution, monitoring, forecasting, and decision support across
                the enterprise.
              </p>
            </div>
          </div>

          <div className="data-impact-grid">
            {impactCards.map((item, index) => (
              <article
                key={item.title}
                className={`data-impact-card ${
                  index === 0 ? "data-impact-card-large" : ""
                }`}
              >
                <span className="data-impact-tag">{item.tag}</span>
                <h3 className="data-impact-title">{item.title}</h3>
                <p className="data-impact-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="data-section">
        <div className="data-shell">
          <div className="data-why-wrap">
            <div className="data-why-copy">
              <div className="data-why-copy-inner">
                <p className="data-eyebrow">Why Sri Yantra Tech</p>
                <h2 className="data-section-title">
                  Engineering-First Approach to Data
                </h2>
                <p className="data-section-text">
                  We treat data as a systems discipline. That means scalable
                  architecture, reliable implementation, governed operations,
                  and long-term readiness for analytics and AI growth.
                </p>
              </div>
            </div>

            <div className="data-why-grid">
              {whyItems.map((item) => (
                <div key={item.text} className="data-why-card">
                  <span className="data-why-card-icon">{item.icon}</span>
                  <span className="data-why-card-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="data-cta-wrap">
        <div className="data-shell">
          <div className="data-cta">
            <div className="data-cta-copy">
              <p className="data-cta-eyebrow">Final CTA</p>
              <h2 className="data-cta-title">
                Build Data Systems That Drive Real Decisions
              </h2>
              <p className="data-cta-text">
                Architect scalable data foundations, analytics platforms, and
                intelligence-ready systems built for long-term business value.
              </p>
            </div>

            <div className="data-cta-action">
              <a href="/contact" className="data-btn data-btn-white">
                Start the Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}