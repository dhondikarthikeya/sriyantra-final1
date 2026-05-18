"use client";

import React, { useEffect, useMemo, useState } from "react";
import "./page.css";
import Link from "next/link";

const operatingModel = [
  {
    title: "Strategy",
    image: "/operating/strategy.png",
  },
  {
    title: "Architecture",
    image: "/operating/architecture.jpg",
  },
  {
    title: "Engineering",
    image: "/operating/engineering.png",
  },
  {
    title: "Intelligence",
    image: "/operating/intel.png",
  },
  {
    title: "Optimization",
    image: "/operating/optimization.png",
  },
];

const slides = [
  {
    eyebrow: "Architecture-First Engineering",
    title: "Engineering Intelligent Digital & Industrial Systems",
    description:
      "Scalable digital platforms, AI-driven systems, modern data infrastructure, cloud-native environments, and advanced engineering solutions built for long-term performance.",
    image: "/hero/architecture.png",
  },
  {
    eyebrow: "AI & Agentic Systems",
    title: "AI Systems Designed for Enterprise Execution",
    description:
      "AI agents, conversational systems, workflow automation, LLM integrations, and predictive intelligence engineered for measurable operational value.",
    image: "/hero/ai.png",
  },
  {
    eyebrow: "Cloud & Infrastructure",
    title: "Cloud-Native Infrastructure Built to Scale",
    description:
      "Architecture design, AWS/Azure/GCP migration, Infrastructure as Code, containerization, observability, and secure environments for modern workloads.",
    image: "/hero/cloud.png",
  },
  {
    eyebrow: "Data & Intelligence",
    title: "Modern Data Ecosystems That Power Better Decisions",
    description:
      "Data pipelines, ETL, warehousing, analytics platforms, BI dashboards, and real-time intelligence systems that turn information into action.",
    image: "/hero/data.png",
  },
  {
    eyebrow: "Integrated Systems Thinking",
    title: "Bridging AI, Cloud & Industrial Engineering",
    description:
      "We engineer connected systems across digital and physical domains—designed for scalability, resilience, optimization, and measurable performance.",
    image: "/hero/integration.png",
  },
];

const growthChallenges = [
  {
    title: "Fragmented digital tools",
    description:
      "Disjointed and incompatible solutions lead to inefficiencies.",
    icon: "/icons/1.png",
  },
  {
    title: "Manual operational workflows",
    description:
      "Relying on human-driven processes slows down growth.",
    icon: "/icons/2.png",
  },
  {
    title: "Isolated AI experiments",
    description:
      "AI initiatives that operate independently cannot drive real value.",
    icon: "/icons/3.png",
  },
  {
    title: "Underutilized data",
    description:
      "Vast amounts of data collected but not effectively harnessed.",
    icon: "/icons/underutilized-data.png",
  },
  {
    title: "Infrastructure not built for scale",
    description:
      "Legacy systems and architecture can't handle rapid expansion.",
    icon: "/icons/infrastructure-scale.png",
  },
  {
    title: "Physical systems disconnected from digital intelligence",
    description:
      "Machines and processes lack integration with digital insights.",
    icon: "/icons/physical-systems.png",
  },
];

const positioningItems = [
  {
    title: "Architecture-First Approach",
    description:
      "We start with system design instead of disconnected features, so every capability fits within a coherent long-term structure.",
    image: "/hero/architecture.png",
  },
  {
    title: "Integrated AI, Data, Cloud & Industrial Engineering",
    description:
      "We connect intelligence, infrastructure, data systems, and engineering workflows into one unified execution model.",
    image: "/hero/cloud.png",
  },
  {
    title: "Designed for Scalability and Long-Term Performance",
    description:
      "Every system is built for resilience, maintainability, and measurable performance as your organization grows.",
    image: "/hero/integration.png",
  },
];
const capabilities = [
  {
    title: "Strategic Technology Consulting",
    image: "/hero/architecture.png",
    href: "/marketing/services/strategic",
  },
  {
    title: "Product & Digital Engineering",
    image: "/hero/data.png",
    href: "/marketing/services/product",
  },
  {
    title: "AI & Agentic Systems",
    image: "/hero/ai.png",
    href: "/marketing/services/ai",
  },
  {
    title: "Data & Analytics Engineering",
    image: "/hero/data.png",
    href: "/marketing/services/data-analytics",
  },
  {
    title: "Cloud & Infrastructure Engineering",
    image: "/hero/cloud.png",
    href: "/marketing/services/cloud-infrastructure",
  },
  {
    title: "Experience & Interface Design",
    image: "/hero/integration.png",
    href: "/marketing/services/experience-design",
  },
  {
    title: "Industrial & Physical Systems Engineering",
    image: "/hero/architecture.png",
    href: "/marketing/services/industrial-systems",
  },

  // New technologies
  {
    title: "Edge AI & IoT Systems",
    image: "/hero/iot.png",
    href: "/marketing/services/edge-ai-iot",
  },
  {
    title: "Cybersecurity Engineering",
    image: "/hero/security.png",
    href: "/marketing/services/cybersecurity",
  },
];
const systemsLayers = [
  {
    title: "Integrated system layers",
    image: "/images/system1.jpg",
  },
  {
    title: "Embedded AI workflows",
    image: "/images/system2.jpg",
  },
  {
    title: "Structured data ecosystems",
    image: "/images/system3.jpg",
  },
  {
    title: "Cloud-native infrastructure",
    image: "/images/system4.jpg",
  },
  {
    title: "Performance-driven engineering frameworks",
    image: "/hero/architecture.png",
  },
  {
    title: "Security & governance architecture",
    image: "/hero/cloud.png",
  },
];

// const operatingModel = [
//   "Strategy",
//   "Architecture",
//   "Engineering",
//   "Intelligence",
//   "Optimization",
// ];
const industries = [
  {
    title: "Technology & SaaS",
    image: "/industries/saas.png",
  },
  {
    title: "Manufacturing & Industrial Operations",
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
    image: "/industries/media.png",
  },
];

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => window.clearInterval(id);
  }, [totalSlides]);

  const current = useMemo(() => slides[currentSlide], [currentSlide]);

  return (
    <>
      <section className="page" aria-label="Sri Yantra Tech hero section">
        <div className="hero-gradient" aria-hidden="true" />

        <div className="overlay">
          <main className="main">
            <div className="content">
              <p key={`eyebrow-${currentSlide}`} className="eyebrow fade">
                {current.eyebrow}
              </p>

              <h1 key={`title-${currentSlide}`} className="fade">
                {current.title}
              </h1>

              <div className="image-section mobile-image">
                <img
                  key={`mobile-image-${currentSlide}`}
                  src={current.image}
                  alt={current.title}
                  className="hero-image fade"
                  loading="eager"
                />
              </div>

              <p key={`desc-${currentSlide}`} className="description fade">
                {current.description}
              </p>

              <div className="buttons">
                <button className="primary-btn">
                  Start a Strategic Discussion
                </button>
                <button className="secondary-btn">
                  Explore Our Capabilities
                </button>
              </div>

              <div
                className="slider-dots"
                role="tablist"
                aria-label="Hero slides"
              >
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={`dot ${currentSlide === index ? "active" : ""}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                    aria-selected={currentSlide === index}
                    role="tab"
                  />
                ))}
              </div>
            </div>

            <div className="image-section desktop-image">
              <img
                key={`desktop-image-${currentSlide}`}
                src={current.image}
                alt={current.title}
                className="hero-image fade"
                loading="eager"
              />
            </div>
          </main>
        </div>
      </section>

      <section className="growth-section">
        <div className="section-shell">
          <div className="section-heading growth-heading growth-heading-left">
            <p className="section-eyebrow">Why It Matters</p>
            <h2>Modern Growth Requires Engineered Systems</h2>
            <p className="section-description">
              Most organizations do not struggle from lack of ambition. They
              struggle because systems evolve in silos, intelligence remains
              disconnected, and infrastructure is not designed for sustained
              scale.
            </p>
          </div>

          <div className="challenge-grid challenge-grid-reference">
            {growthChallenges.map((item) => (
              <article
                key={item.title}
                className="challenge-card challenge-card-reference challenge-card-boxed"
              >
                <div className="challenge-icon-panel" aria-hidden="true">
                  <img
                    src={item.icon}
                    alt=""
                    className="challenge-illustration-box"
                    loading="lazy"
                  />
                </div>

                <div className="challenge-copy challenge-copy-left">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="positioning-section">
        <div className="section-shell">
          <div className="section-heading">
            <p className="section-eyebrow">Our Positioning</p>
            <h2>
              We engineer unified systems across digital and physical domains.
            </h2>
            <p className="section-description">
              Our approach brings architecture, intelligence, infrastructure,
              and engineering together into one scalable operating foundation.
            </p>
          </div>

          <div className="positioning-grid">
            {positioningItems.map((item, index) => (
              <article
                key={item.title}
                className={`positioning-card ${index === 0 ? "featured" : ""}`}
              >
                <div className="positioning-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="positioning-image"
                    loading="lazy"
                  />
                </div>

                <div className="positioning-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     <section className="capabilities-section">
  <div className="section-shell">
    <div className="section-heading">
      <p className="section-eyebrow">Core Capabilities</p>
      <h2>Cross-functional engineering for modern enterprises</h2>
      <p className="section-description">
        Our capabilities help organizations design, build, integrate, and
        scale intelligent systems end to end.
      </p>
    </div>

    <div className="capabilities-grid">
      {capabilities.map((item) => {
        const card = (
          <article key={item.title} className="capability-card">
            <div className="capability-image-wrap">
              <img
                src={item.image}
                alt={item.title}
                className="capability-image"
                loading="lazy"
              />
            </div>

            <div className="capability-card-content">
              <h3>{item.title}</h3>
            </div>

            <div className="capability-arrow">→</div>
          </article>
        );

        return item.href ? (
          <Link key={item.title} href={item.href} className="capability-link">
            {card}
          </Link>
        ) : (
          <div key={item.title}>{card}</div>
        );
      })}
    </div>
  </div>
</section>

      <section className="systems-section">
  <div className="section-shell">

    <div className="section-heading">
      <p className="section-eyebrow">Systems Over Silos</p>
      <h2>Integrated system design creates stronger outcomes</h2>
      <p className="section-description">
        We do not treat AI, infrastructure, data, and engineering as separate
        tracks. We design them as interconnected layers that reinforce one
        another.
      </p>
    </div>

    <div className="systems-grid">
      {systemsLayers.map((item) => (
        <article key={item.title} className="system-card">

          <div className="system-card-image">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
            />
          </div>

          <div className="system-card-content">
            <span className="system-accent"></span>
            <h3>{item.title}</h3>
          </div>

        </article>
      ))}
    </div>

  </div>
</section>

      <section className="operating-section">
  <div className="section-shell">
    <div className="section-heading">
      <p className="section-eyebrow">Operating Model Overview</p>
      <h2>Strategy to optimization through structured execution</h2>
      <p className="section-description">
        Our delivery model creates a clear path from direction to
        deployment, with every phase aligned around scalability,
        resilience, and performance.
      </p>
    </div>

    <div className="operating-flow" aria-label="Operating model flow">
      {operatingModel.map((step, index) => (
        <React.Fragment key={step.title}>
          <article className="flow-card">
            <img
              src={step.image}
              alt={step.title}
              className="flow-card-image"
              loading="lazy"
            />

            <div className="flow-card-overlay" />

            <div className="flow-card-content">
              <span className="flow-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
            </div>
          </article>

          {index < operatingModel.length - 1 && (
  <span className="flow-arrow" aria-hidden="true">
    <svg
      viewBox="0 0 64 40"
      xmlns="http://www.w3.org/2000/svg"
      className="flow-arrow-svg"
    >
      <path
        d="M4 6 C30 6, 28 34, 52 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M45 27 L52 34 L44 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>



          )}
        </React.Fragment>
      ))}
    </div>

   <div className="execution-highlight">
  <div className="execution-text">
    <h3>
      <span>Structured execution</span><br />
      <span>framework focused on</span>
    </h3>
  </div>

  <div className="execution-features">
    <div className="feature">
      <div className="icon-box">📈</div>
      <p>Scalability</p>
    </div>

    <div className="divider"></div>

    <div className="feature">
      <div className="icon-box">🛡️</div>
      <p>Resilience</p>
    </div>

    <div className="divider"></div>

    <div className="feature">
      <div className="icon-box">⚡</div>
      <p>Performance</p>
    </div>
  </div>
</div>
  </div>
</section>

      <section className="industries-section">
  <div className="section-shell">
    <div className="section-heading">
      <p className="section-eyebrow">Industries Served</p>
      <h2>Built for complex environments across sectors</h2>
      <p className="section-description">
        Our engineering approach is designed to adapt across digital,
        industrial, operational, and infrastructure-heavy industries.
      </p>
    </div>

    <div className="industries-scroll-wrap">
      <div className="industries-scroll" id="industriesScroll">
        {industries.map((industry) => (
          <article key={industry.title} className="industry-card">
            <div className="industry-image-wrap">
              <img
                src={industry.image}
                alt={industry.title}
                className="industry-image"
                loading="lazy"
              />
            </div>

            <div className="industry-card-content">
              <h3>{industry.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="industries-arrows">
        <button
          className="industry-arrow"
          onClick={() =>
            document
              .getElementById("industriesScroll")
              .scrollBy({ left: -340, behavior: "smooth" })
          }
        >
          ←
        </button>

        <button
          className="industry-arrow"
          onClick={() =>
            document
              .getElementById("industriesScroll")
              .scrollBy({ left: 340, behavior: "smooth" })
          }
        >
          →
        </button>
      </div>
    </div>
  </div>
</section>

      <section className="final-cta-section">
        <div className="section-shell">
          <div className="final-cta-card">
            <p className="section-eyebrow">Final Call to Action</p>
            <h2>Design Systems That Scale.</h2>
            <p>
              Whether digital, AI-driven, or industrial — we engineer systems
              built for growth.
            </p>

            <div className="final-cta-actions">
              <button className="primary-btn">Start the Conversation</button>
              <button className="secondary-btn">
                Explore Our Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}