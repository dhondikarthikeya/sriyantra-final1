"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "./page.css";

type InsightCategory =
  | "All"
  | "AI & Agentic Systems"
  | "Cloud & Infrastructure"
  | "Data Engineering"
  | "Product Engineering"
  | "Industrial Systems"
  | "Architecture & Strategy";

type Insight = {
  id: number;
  title: string;
  category: Exclude<InsightCategory, "All">;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
};

type RailMode = "normal" | "fixed" | "bottom";

const categories: InsightCategory[] = [
  "All",
  "AI & Agentic Systems",
  "Cloud & Infrastructure",
  "Data Engineering",
  "Product Engineering",
  "Industrial Systems",
  "Architecture & Strategy",
];

const insights: Insight[] = [
  {
    id: 1,
    title: "Designing Agentic AI Systems for Enterprise Workflows",
    category: "AI & Agentic Systems",
    excerpt:
      "How to move beyond isolated AI experiments and architect agentic systems that integrate into real enterprise operations, decision-making, and workflow execution.",
    readTime: "6 min read",
    date: "Jan 2026",
    image: "/insights/ai-systems.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Cloud-Native Architecture for High-Scale Systems",
    category: "Cloud & Infrastructure",
    excerpt:
      "A practical view of resilience, observability, containerization, and infrastructure patterns required to support modern digital platforms at scale.",
    readTime: "5 min read",
    date: "Jan 2026",
    image: "/insights/cloud-scale.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Building a Modern Data Platform for Real-Time Insight",
    category: "Data Engineering",
    excerpt:
      "Data is not a reporting layer alone. It is a core system capability that supports intelligence, automation, and faster strategic decisions.",
    readTime: "7 min read",
    date: "Dec 2025",
    image: "/insights/data-platform.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "From AI Pilots to Integrated Intelligence Systems",
    category: "AI & Agentic Systems",
    excerpt:
      "Why many AI initiatives stall and what architecture, governance, and workflow integration are required to make them operationally valuable.",
    readTime: "5 min read",
    date: "Dec 2025",
    image: "/insights/ai-pilots.jpg",
  },
  {
    id: 5,
    title: "Infrastructure as Code Beyond Automation",
    category: "Cloud & Infrastructure",
    excerpt:
      "IaC is not only about faster provisioning. It creates repeatability, policy control, and scalable infrastructure governance across environments.",
    readTime: "4 min read",
    date: "Dec 2025",
    image: "/insights/iac.jpg",
  },
  {
    id: 6,
    title: "Real-Time Data Pipelines at Scale",
    category: "Data Engineering",
    excerpt:
      "Key engineering patterns for building real-time pipelines that remain observable, fault-tolerant, and aligned with downstream business needs.",
    readTime: "6 min read",
    date: "Nov 2025",
    image: "/insights/data-pipelines.jpg",
  },
  {
    id: 7,
    title: "Scalable SaaS Architecture Patterns",
    category: "Product Engineering",
    excerpt:
      "Designing modular product systems with performance, extensibility, multi-tenancy, and long-term maintainability built into the architecture.",
    readTime: "6 min read",
    date: "Nov 2025",
    image: "/insights/saas-architecture.jpg",
  },
  {
    id: 8,
    title: "API-First Product Design for Modern Platforms",
    category: "Product Engineering",
    excerpt:
      "Why API-first thinking improves ecosystem readiness, integration velocity, and product consistency across digital services.",
    readTime: "4 min read",
    date: "Nov 2025",
    image: "/insights/api-first.jpg",
  },
  {
    id: 9,
    title: "Bridging Physical Systems with Digital Intelligence",
    category: "Industrial Systems",
    excerpt:
      "An engineering perspective on connecting industrial systems, telemetry, analytics, and automation into unified operational environments.",
    readTime: "7 min read",
    date: "Oct 2025",
    image: "/insights/physical-systems.jpg",
  },
  {
    id: 10,
    title: "Simulation-Driven Engineering Systems",
    category: "Industrial Systems",
    excerpt:
      "How simulation, modeling, and performance analysis support better design, validation, and optimization in industrial engineering contexts.",
    readTime: "5 min read",
    date: "Oct 2025",
    image: "/insights/simulation.jpg",
  },
  {
    id: 11,
    title: "Why Architecture Determines Scalability",
    category: "Architecture & Strategy",
    excerpt:
      "Scalability is rarely solved late. It is designed early through architecture decisions that define system boundaries, dependencies, and resilience.",
    readTime: "5 min read",
    date: "Oct 2025",
    image: "/insights/architecture-scale.jpg",
  },
  {
    id: 12,
    title: "From Tools to Systems: Enterprise Evolution",
    category: "Architecture & Strategy",
    excerpt:
      "Organizations do not scale through disconnected tools. They scale through integrated systems engineered around business outcomes and execution models.",
    readTime: "6 min read",
    date: "Sep 2025",
    image: "/insights/tools-to-systems.jpg",
  },
];

const systemLayers = [
  {
    id: "01",
    title: "Interface & Experience Layer",
    text: "Structured journeys, product surfaces, dashboards, and operational interfaces designed for clarity, adoption, and execution.",
  },
  {
    id: "02",
    title: "Workflow & Orchestration Layer",
    text: "Business logic, service coordination, automation paths, APIs, and orchestration flows that connect systems into one operating model.",
  },
  {
    id: "03",
    title: "AI / Agentic Intelligence Layer",
    text: "Decision support, copilots, agentic behavior, retrieval pipelines, and context-aware automation embedded into real workflows.",
  },
  {
    id: "04",
    title: "Data & Event Infrastructure Layer",
    text: "Pipelines, streaming events, telemetry, storage, and governance foundations that make intelligence reliable and scalable.",
  },
  {
    id: "05",
    title: "Cloud / Security / Operations Layer",
    text: "Cloud infrastructure, resilience patterns, observability, delivery operations, and security controls supporting long-term scale.",
  },
];

function chunkByFour(items: Insight[]) {
  const rows: Insight[][] = [];
  for (let i = 0; i < items.length; i += 4) {
    rows.push(items.slice(i, i + 4));
  }
  return rows;
}

function InsightCard({ item }: { item: Insight }) {
  return (
    <article className="insight-card">
      <div className="insight-card-image-wrap">
        <img
          src={item.image}
          alt={item.title}
          className="insight-card-image"
          loading="lazy"
        />
      </div>

      <div className="insight-card-body">
        <div className="insight-card-top">
          <span className="insight-tag">{item.category}</span>
          <span className="insight-date">{item.date}</span>
        </div>

        <h3 className="insight-card-title">{item.title}</h3>
        <p className="insight-card-text">{item.excerpt}</p>

        <div className="insight-card-footer">
          <span className="insight-readtime">{item.readTime}</span>
          <button className="insight-link" type="button">
            Read Insight <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  );
}

function FeaturedCard({
  item,
  large = false,
}: {
  item: Insight;
  large?: boolean;
}) {
  return (
    <article className={`featured-card ${large ? "featured-card-large" : ""}`}>
      <div className="featured-card-image-wrap">
        <img src={item.image} alt={item.title} className="featured-card-image" />
      </div>

      <div className="featured-card-content">
        <span className="insight-tag">{item.category}</span>
        <h3 className="featured-card-title">{item.title}</h3>
        <p className="featured-card-text">{item.excerpt}</p>
        <div className="featured-card-footer">
          <span>{item.readTime}</span>
          <span>{item.date}</span>
        </div>
      </div>
    </article>
  );
}

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<InsightCategory>("All");
  const [deepDiveMode, setDeepDiveMode] = useState<RailMode>("normal");

  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const deepDiveSectionRef = useRef<HTMLDivElement | null>(null);
  const deepDiveBoxRef = useRef<HTMLDivElement | null>(null);

  const featuredInsights = useMemo(
    () => insights.filter((item) => item.featured).slice(0, 3),
    []
  );

  const filteredInsights = useMemo(() => {
    if (activeCategory === "All") return insights;
    return insights.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const rows = useMemo(() => chunkByFour(filteredInsights), [filteredInsights]);

  useEffect(() => {
    const syncDeepDiveRail = () => {
      if (window.innerWidth <= 1199) {
        setDeepDiveMode("normal");
        return;
      }

      const sectionEl = deepDiveSectionRef.current;
      const boxEl = deepDiveBoxRef.current;

      if (!sectionEl || !boxEl) return;

      const sectionRect = sectionEl.getBoundingClientRect();
      const boxHeight = boxEl.offsetHeight;
      const fixedTop = 110;
      const viewportTrigger = fixedTop;

      const sectionTop = sectionRect.top + window.scrollY;
      const sectionBottom = sectionTop + sectionEl.offsetHeight;
      const scrollY = window.scrollY;

      const fixedStart = sectionTop - fixedTop;
      const fixedEnd = sectionBottom - fixedTop - boxHeight;

      if (scrollY < fixedStart) {
        setDeepDiveMode("normal");
      } else if (scrollY >= fixedStart && scrollY < fixedEnd) {
        setDeepDiveMode("fixed");
      } else {
        setDeepDiveMode("bottom");
      }
    };

    syncDeepDiveRail();
    window.addEventListener("scroll", syncDeepDiveRail, { passive: true });
    window.addEventListener("resize", syncDeepDiveRail);

    return () => {
      window.removeEventListener("scroll", syncDeepDiveRail);
      window.removeEventListener("resize", syncDeepDiveRail);
    };
  }, []);

  const scrollRow = (index: number, direction: "left" | "right") => {
    const row = rowRefs.current[index];
    if (!row) return;

    const card = row.querySelector<HTMLElement>(".insights-scroll-card");
    const amount = card ? card.offsetWidth + 20 : 360;

    row.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <main className="insights-page">
      <section className="insights-hero">
        <div className="insights-hero-overlay" />
        <div className="container">
          <div className="insights-hero-inner">
            <span className="eyebrow">Insights</span>

            <h1 className="insights-title">
              Engineering Insights on Digital, AI & Industrial Systems
            </h1>

            <p className="insights-subtitle">
              Perspectives on architecture, AI systems, data infrastructure,
              cloud engineering, and scalable digital ecosystems.
            </p>

            {/* <div className="insights-hero-actions">
              <a href="#featured-insights" className="btn btn-primary">
                Explore Insights
              </a>
              <a href="/marketing/contact" className="btn btn-secondary">
                Start a Strategic Discussion
              </a>
            </div> */}

            <div className="hero-metrics">
              <div className="hero-metric-card">
                <strong>Architecture-Led</strong>
                <span>Systems thinking over disconnected tools</span>
              </div>
              <div className="hero-metric-card">
                <strong>AI-Embedded</strong>
                <span>Practical intelligence for real operations</span>
              </div>
              <div className="hero-metric-card">
                <strong>Scalable by Design</strong>
                <span>Built for resilience, performance, and growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section" id="featured-insights">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">Featured Perspectives</p>
              <h2 className="section-title">Strategic Thinking for Modern Systems</h2>
            </div>

            <p className="section-copy">
              A curated set of perspectives on system architecture, enterprise AI,
              cloud foundations, and engineering execution.
            </p>
          </div>

          <div className="featured-grid">
            {featuredInsights.map((item, index) => (
              <FeaturedCard key={item.id} item={item} large={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="filters-section">
        <div className="container">
          <div className="section-head compact">
            <div>
              <p className="section-label">Categories</p>
              <h2 className="section-title">Explore by Domain</h2>
            </div>
          </div>

          <div className="filter-bar" role="tablist" aria-label="Insight categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`filter-chip ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="insights-grid-section">
        <div className="container">
          <div className="section-head compact with-border">
            <div>
              <p className="section-label">All Insights</p>
              <h2 className="section-title">
                {activeCategory === "All"
                  ? "Latest Engineering Perspectives"
                  : activeCategory}
              </h2>
            </div>

            <p className="results-count">
              {filteredInsights.length} insight{filteredInsights.length > 1 ? "s" : ""}
            </p>
          </div>

          {filteredInsights.length === 0 ? (
            <div className="empty-state">
              <h3>No insights found</h3>
              <p>Try a different domain filter to explore more engineering perspectives.</p>
            </div>
          ) : (
            <div className="scroll-rows-wrap">
              {rows.map((row, rowIndex) => (
                <div className="scroll-row-block" key={`row-${rowIndex}`}>
                  {/* <div className="scroll-row-head">
                    <span className="scroll-row-label">Row {rowIndex + 1}</span>

                    <div className="scroll-row-actions">
                      <button
                        type="button"
                        onClick={() => scrollRow(rowIndex, "left")}
                        aria-label={`Scroll row ${rowIndex + 1} left`}
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() => scrollRow(rowIndex, "right")}
                        aria-label={`Scroll row ${rowIndex + 1} right`}
                      >
                        →
                      </button>
                    </div>
                  </div> */}

                  <div
                    className="insights-scroll-row"
                    ref={(el) => {
                      rowRefs.current[rowIndex] = el;
                    }}
                  >
                    {row.map((item) => (
                      <div className="insights-scroll-card" key={item.id}>
                        <InsightCard item={item} />
                      </div>
                    ))}
                  </div>
                  <div className="scroll-row-head">
                    {/* <span className="scroll-row-label">Row {rowIndex + 1}</span> */}

                    <div className="scroll-row-actions">
                      <button
                        type="button"
                        onClick={() => scrollRow(rowIndex, "left")}
                        aria-label={`Scroll row ${rowIndex + 1} left`}
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() => scrollRow(rowIndex, "right")}
                        aria-label={`Scroll row ${rowIndex + 1} right`}
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="deep-dive-section">
        <div className="container">
          <div className="deep-dive-shell" ref={deepDiveSectionRef}>
            <div className="deep-dive-left-rail">
              <div
                ref={deepDiveBoxRef}
                className={`deep-dive-fixed-box deep-dive-${deepDiveMode}`}
              >
                <p className="section-label">Featured Deep Dive</p>
                <h2>The Future of AI-Native System Architecture</h2>
                <p className="deep-dive-intro">
                  AI-native systems require more than model integration. They require
                  orchestration layers, structured data foundations, governed workflows,
                  and infrastructure designed for continuous adaptation.
                </p>

                <a href="/marketing/contact" className="btn btn-dark">
                  Discuss Your Architecture
                </a>
              </div>
            </div>

            <div className="deep-dive-right-stack">
              <div className="storyboard-track">
                {systemLayers.map((layer, index) => (
                  <article className="storyboard-card" key={layer.id}>
                    <div className="storyboard-line" aria-hidden="true" />
                    <div className="storyboard-index">{layer.id}</div>

                    <div className="storyboard-content">
                      <span className="storyboard-kicker">System Layer</span>
                      <h3>{layer.title}</h3>
                      <p>{layer.text}</p>
                    </div>

                    <div className="storyboard-step">Step {index + 1}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insights-cta-section">
        <div className="container">
          <div className="insights-cta-card">
            <p className="section-label">Stay Ahead in Systems Engineering</p>
            <h2>Design systems that scale with intelligence, structure, and precision.</h2>
            <p>
              Explore how Sri Yantra Tech approaches AI, cloud, digital platforms,
              data systems, and industrial engineering through architecture-first thinking.
            </p>

            <div className="insights-cta-actions">
              <a href="/marketing/contact" className="btn btn-primary">
                Start the Conversation
              </a>
              <a href="/marketing/services/strategic" className="btn btn-secondary">
                Explore Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}