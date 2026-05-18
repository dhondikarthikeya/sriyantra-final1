"use client";

import { useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./page.css";

export default function StrategicPage() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const html = document.documentElement;
    const body = document.body;

    html.style.overflowX = "clip";
    body.style.overflowX = "clip";

    return () => {
      html.style.overflowX = "";
      body.style.overflowX = "";
    };
  }, []);

  const deliverables = [
    {
      title: "Technology Strategy & Roadmapping",
      description:
        "Define a pragmatic technology direction that aligns business ambition, operating priorities, and execution realities across the enterprise.",
    },
    {
      title: "Enterprise Architecture Advisory",
      description:
        "Establish resilient architectural foundations that improve interoperability, governance, scalability, and long-term decision quality.",
    },
    {
      title: "Digital Transformation Planning",
      description:
        "Shape transformation programs with clear sequencing, measurable milestones, and operating-model alignment to reduce friction in delivery.",
    },
    {
      title: "Innovation & Investment Prioritization",
      description:
        "Evaluate opportunities through a business-value lens to focus investment on initiatives that strengthen competitiveness and unlock growth.",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Assess",
      description:
        "We evaluate current-state architecture, delivery maturity, investment posture, and organizational constraints to establish a clear strategic baseline.",
    },
    {
      step: "02",
      title: "Align",
      description:
        "We align stakeholders around business priorities, target-state capabilities, and a practical roadmap that supports enterprise-wide execution.",
    },
    {
      step: "03",
      title: "Execute",
      description:
        "We translate strategy into action through governance structures, transformation sequencing, and decision frameworks that sustain momentum.",
    },
  ];

  const outcomes = [
    "Faster decision-making",
    "Reduced technology risk",
    "Better investment alignment",
    "Scalable operating foundations",
  ];

  const priorities = [
    {
      title: "Architecture Modernization",
      description:
        "Rationalize platforms, improve resiliency, and enable scalable delivery foundations.",
      number: "01",
    },
    {
      title: "Investment Governance",
      description:
        "Prioritize initiatives against business value, execution readiness, and risk exposure.",
      number: "02",
    },
    {
      title: "Transformation Roadmap",
      description:
        "Sequence change in a way that balances strategic ambition with operational continuity.",
      number: "03",
    },
  ];

  return (
    <main className="strategic-page">
      <section className="strategic-hero strategic-hero-bg">
        <Image
          src="/hero/bg12.png"
          alt=""
          fill
          priority
          quality={70}
          sizes="100vw"
          className="strategic-hero-image"
          aria-hidden="true"
        />

        <div className="strategic-hero-overlay" />

        <div className="strategic-shell strategic-hero-grid strategic-hero-content">
          <div className="strategic-hero-copy">
            <h1 className="strategic-hero-title">
              Strategic Technology Consulting
            </h1>

            <p className="strategic-hero-text">
              Sri Yantra Tech helps enterprises define technology strategy,
              modernize architecture, and align digital investments with
              measurable business outcomes. We bring structured advisory
              thinking to complex transformation decisions, enabling leadership
              teams to move with greater clarity, control, and confidence.
            </p>
          </div>

          <div className="strategic-panel strategic-panel-dark">
            <div className="strategic-panel-top">
              <div>
                <p className="strategic-eyebrow strategic-eyebrow-light">
                  Strategic Priorities
                </p>

                <h2 className="strategic-panel-title strategic-panel-title-light">
                  Enterprise transformation, structured with intent
                </h2>
              </div>

              <div className="strategic-panel-dot" />
            </div>

            <div className="strategic-priority-list">
              {priorities.map((item) => (
                <div
                  key={item.title}
                  className="strategic-priority-card strategic-priority-card-dark"
                >
                  <div className="strategic-priority-row">
                    <div>
                      <p className="strategic-priority-title strategic-priority-title-light">
                        {item.title}
                      </p>

                      <p className="strategic-priority-text strategic-priority-text-light">
                        {item.description}
                      </p>
                    </div>

                    <span className="strategic-priority-number">
                      {item.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="strategic-stats">
              <div className="strategic-stat-card strategic-stat-card-dark">
                <p className="strategic-stat-value strategic-stat-value-light">
                  360°
                </p>

                <p className="strategic-stat-text strategic-stat-text-light">
                  Advisory view across technology, operations, risk, and
                  business priorities.
                </p>
              </div>

              <div className="strategic-stat-card strategic-stat-card-dark">
                <p className="strategic-stat-value strategic-stat-value-light">
                  CXO
                </p>

                <p className="strategic-stat-text strategic-stat-text-light">
                  Executive-ready communication and structured decision support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strategic-section">
        <div className="strategic-shell">
          <div className="strategic-deliver-header">
            <div className="strategic-section-head">
              <p className="strategic-eyebrow">What We Deliver</p>

              <h2 className="strategic-section-title">
                Strategic advisory tailored for complex enterprise environments
              </h2>

              <p className="strategic-section-text">
                We help leadership teams make sharper technology decisions
                across architecture, transformation, and investment planning—
                grounded in business priorities and built for long-term
                resilience.
              </p>
            </div>

            <div className="strategic-deliver-image">
              <Image
                src="/hero/13.png"
                alt="Technology strategy consulting"
                width={760}
                height={360}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 92vw, 42vw"
                quality={65}
                loading="lazy"
                className="strategic-deliver-img"
              />
            </div>
          </div>

          <div className="strategic-grid strategic-grid-4">
            {deliverables.map((item) => (
              <article
                key={item.title}
                className="strategic-card strategic-card-hover"
              >
                <div className="strategic-card-line" />

                <h3 className="strategic-card-title">{item.title}</h3>

                <p className="strategic-card-text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="strategic-section strategic-section-muted">
        <div className="strategic-shell strategic-work-layout">
          <div className="strategic-work-left">
            <p className="strategic-eyebrow">How We Work</p>

            <h2 className="strategic-section-title">
              A disciplined consulting approach built for enterprise execution
            </h2>

            <div className="strategic-work-image">
              <Image
                src="/hero/14.png"
                alt="Consulting process"
                width={720}
                height={420}
                sizes="(max-width: 768px) 100vw, (max-width: 992px) 420px, 42vw"
                quality={65}
                loading="lazy"
                className="strategic-work-img"
              />
            </div>
          </div>

          <div className="strategic-work-right">
            {approach.map((item) => (
              <article key={item.step} className="strategic-work-card">
                <div className="strategic-card-top">
                  <span className="strategic-step">{item.step}</span>
                  <span className="strategic-method">Methodology</span>
                </div>

                <h3 className="strategic-card-title strategic-card-title-lg">
                  {item.title}
                </h3>

                <p className="strategic-card-text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="strategic-section">
        <div className="strategic-shell strategic-outcomes-layout">
          <div className="strategic-section-head strategic-section-head-narrow">
            <p className="strategic-eyebrow">Business Outcomes</p>

            <h2 className="strategic-section-title">
              Strategy that strengthens business performance, not just
              technology posture
            </h2>

            <p className="strategic-section-text">
              Our advisory work is designed to improve how enterprises make
              decisions, govern investments, and build the operational
              foundations required for sustainable transformation.
            </p>
          </div>

          <div className="strategic-grid strategic-grid-2">
            {outcomes.map((outcome, index) => (
              <div key={outcome} className="strategic-card">
                <p className="strategic-outcome-number">0{index + 1}</p>

                <h3 className="strategic-card-title strategic-card-title-spaced">
                  {outcome}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="strategic-cta-wrap">
        <div className="strategic-shell">
          <div className="strategic-cta">
            <div className="strategic-cta-copy">
              <p className="strategic-cta-eyebrow">Let’s Start with Strategy</p>

              <h2 className="strategic-cta-title">
                Turn technology strategy into measurable business value
              </h2>

              <p className="strategic-cta-text">
                Work with Sri Yantra Tech to shape a technology agenda that is
                aligned, executable, and built to support long-term enterprise
                outcomes.
              </p>
            </div>

            <div className="strategic-cta-action">
              <Link href="/contact" className="strategic-btn strategic-btn-white">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}