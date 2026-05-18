"use client";

import "./page.css";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  FaIndustry,
  FaRobot,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
  FaBoxes,
  FaTruck,
  FaDatabase,
  FaUsers,
  FaCloud,
  FaGlobe,
  FaCodeBranch,
} from "react-icons/fa";

import {
  MdPrecisionManufacturing,
  MdInsights,
  MdSecurity,
  MdTrendingUp,
  MdOutlineInventory2,
} from "react-icons/md";

type Challenge = {
  number: string;
  title: string;
  icon: ReactNode;
  description: string;
};

type Solution = {
  title: string;
  icon: ReactNode;
  description: string;
};

type Capability = {
  title: string;
  icon: ReactNode;
};

type Insight = {
  category: string;
  title: string;
  description: string;
};

const challenges: Challenge[] = [
  {
    number: "01",
    title: "Smart Factory Modernization",
    icon: <MdPrecisionManufacturing color="#6366F1" />,
    description:
      "Transforming legacy manufacturing systems into connected, intelligent, and automated production environments.",
  },
  {
    number: "02",
    title: "Supply Chain Resilience",
    icon: <FaTruck color="#F59E0B" />,
    description:
      "Improving visibility, forecasting, and operational continuity across global supply chain networks.",
  },
  {
    number: "03",
    title: "Operational Efficiency",
    icon: <FaChartLine color="#06B6D4" />,
    description:
      "Reducing downtime and improving throughput through real-time monitoring and predictive analytics.",
  },
  {
    number: "04",
    title: "Industrial Cybersecurity",
    icon: <FaShieldAlt color="#EF4444" />,
    description:
      "Protecting manufacturing infrastructure, connected systems, and industrial data from cyber threats.",
  },
  {
    number: "05",
    title: "Workforce Transformation",
    icon: <FaUsers color="#8B5CF6" />,
    description:
      "Empowering industrial teams with digital tools, automation, and connected workforce platforms.",
  },
  {
    number: "06",
    title: "Inventory Optimization",
    icon: <MdOutlineInventory2 color="#22C55E" />,
    description:
      "Enhancing inventory visibility and demand planning to improve operational agility and reduce waste.",
  },
];

const solutions: Solution[] = [
  {
    title: "Industrial Automation",
    icon: <FaRobot color="#6366F1" />,
    description:
      "Implement automation and intelligent manufacturing systems to improve productivity and scalability.",
  },
  {
    title: "Connected Supply Chains",
    icon: <FaTruck color="#2563EB" />,
    description:
      "Create integrated supply chain ecosystems with real-time visibility and predictive planning capabilities.",
  },
  {
    title: "Manufacturing Analytics",
    icon: <FaDatabase color="#06B6D4" />,
    description:
      "Leverage AI and analytics to optimize production performance, quality control, and forecasting.",
  },
  {
    title: "Cloud Manufacturing Platforms",
    icon: <FaCloud color="#8B5CF6" />,
    description:
      "Modernize manufacturing infrastructure using scalable and resilient cloud-native technologies.",
  },
  {
    title: "Process Optimization",
    icon: <FaCodeBranch color="#F59E0B" />,
    description:
      "Improve operational efficiency through workflow automation and connected industrial systems.",
  },
  {
    title: "Industrial Security",
    icon: <MdSecurity color="#EF4444" />,
    description:
      "Strengthen OT and IT security frameworks to ensure resilience across industrial operations.",
  },
];

const outcomes: string[] = [
  "Reduced operational downtime",
  "Improved production efficiency",
  "Higher supply chain visibility",
  "Scalable industrial operations",
];

const capabilities: Capability[] = [
  { title: "Smart Manufacturing", icon: <FaIndustry color="#06B6D4" /> },
  { title: "Industrial Automation", icon: <FaRobot color="#8B5CF6" /> },
  { title: "Supply Chain Systems", icon: <FaTruck color="#2563EB" /> },
  { title: "Manufacturing Analytics", icon: <FaChartLine color="#6366F1" /> },
  { title: "Industrial Cybersecurity", icon: <FaShieldAlt color="#EF4444" /> },
  { title: "Cloud Infrastructure", icon: <FaCloud color="#F59E0B" /> },
  { title: "Global Operations", icon: <FaGlobe color="#14B8A6" /> },
  { title: "Connected Workforce", icon: <FaUsers color="#3B82F6" /> },
  { title: "Industrial Data", icon: <FaDatabase color="#0EA5E9" /> },
  { title: "Inventory Intelligence", icon: <FaBoxes color="#DC2626" /> },
  { title: "Predictive Insights", icon: <MdTrendingUp color="#22C55E" /> },
  { title: "Factory Optimization", icon: <FaCogs color="#F97316" /> },
];

const insights: Insight[] = [
  {
    category: "Perspective",
    title: "Future of Smart Manufacturing",
    description:
      "How industrial organizations are using automation and AI to modernize production ecosystems.",
  },
  {
    category: "Point of View",
    title: "Industrial AI & Analytics",
    description:
      "Using predictive intelligence to optimize operations, quality, and supply chain performance.",
  },
  {
    category: "Executive Insight",
    title: "Building Resilient Supply Chains",
    description:
      "Why visibility, connected systems, and automation are essential for industrial growth.",
  },
  {
    category: "Research",
    title: "Scaling Intelligent Manufacturing",
    description:
      "Balancing operational efficiency, sustainability, and digital transformation in manufacturing.",
  },
];

const capabilityColumnA = [
  capabilities[0],
  capabilities[3],
  capabilities[6],
  capabilities[9],
  capabilities[0],
  capabilities[3],
  capabilities[6],
  capabilities[9],
];

const capabilityColumnB = [
  capabilities[1],
  capabilities[4],
  capabilities[7],
  capabilities[10],
  capabilities[1],
  capabilities[4],
  capabilities[7],
  capabilities[10],
];

const capabilityColumnC = [
  capabilities[2],
  capabilities[5],
  capabilities[8],
  capabilities[11],
  capabilities[2],
  capabilities[5],
  capabilities[8],
  capabilities[11],
];

export default function ManufacturingIndustrialPage() {
  const solutionsSectionRef = useRef<HTMLDivElement | null>(null);
  const solutionsBoxRef = useRef<HTMLDivElement | null>(null);

  const [solutionsMode, setSolutionsMode] = useState<
    "normal" | "fixed" | "bottom"
  >("normal");

  useEffect(() => {
    const handleScroll = () => {
      const section = solutionsSectionRef.current;
      const box = solutionsBoxRef.current;

      if (!section || !box) return;

      if (window.innerWidth <= 991) {
        setSolutionsMode("normal");
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const boxHeight = box.offsetHeight;
      const topOffset = 110;

      const shouldFix = sectionRect.top <= topOffset;
      const shouldStop = sectionRect.bottom <= topOffset + boxHeight;

      if (!shouldFix) {
        setSolutionsMode("normal");
      } else if (shouldFix && !shouldStop) {
        setSolutionsMode("fixed");
      } else {
        setSolutionsMode("bottom");
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
    <main className="technology-page">
      <section
        className="hero-section"
        style={{
          backgroundImage: "url('/hero/bg19.jpg')",
        }}
      >
        <div className="hero-overlay" />

        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Manufacturing &amp; Industrial Operations</h1>

            <p className="hero-subheadline">
              Helping manufacturing organizations modernize operations,
              strengthen supply chains, and scale intelligent industrial
              transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div className="left-content">
            <p className="section-label">Industry Overview</p>

            <h2>
              Manufacturing &amp; Industrial Transformation
            </h2>

            <Image
              src="/hero/3.png"
              alt="Manufacturing Industry"
              className="industry-image"
              width={700}
              height={500}
              priority
              quality={90}
            />
          </div>

          <div className="text-stack">
            <p>
              Industrial and manufacturing organizations are accelerating
              digital transformation to improve efficiency, resilience, and
              operational visibility.
            </p>

            <p>
              We help manufacturers modernize production systems, optimize
              supply chains, and implement intelligent automation strategies.
            </p>

            <p>
              Our teams combine industrial expertise, engineering capabilities,
              and data-driven insights to improve operational performance and
              scalability.
            </p>

            <p>
              We partner with global manufacturers and industrial enterprises to
              build connected operations and future-ready manufacturing
              ecosystems.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Industry Challenges</p>

            <h2>Strategic priorities shaping industrial transformation</h2>
          </div>

          <div className="card-grid three-col">
            {challenges.map((item) => (
              <article key={item.title} className="info-card">
                <div className="card-top">
                  <span className="card-number">{item.number}</span>

                  <span className="card-icon">{item.icon}</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section solutions-section">
        <div className="container">
          <div className="solutions-shell" ref={solutionsSectionRef}>
            <div className="solutions-left-rail">
              <div
                ref={solutionsBoxRef}
                className={`solutions-fixed-box solutions-${solutionsMode}`}
              >
                <p className="section-label">Our Solutions</p>

                <h2>
                  Consulting capabilities designed for manufacturing and
                  industrial organizations
                </h2>

                <p className="solutions-intro">
                  We combine industrial expertise, engineering innovation, and
                  digital transformation strategies to help organizations scale
                  efficiently.
                </p>
              </div>
            </div>

            <div className="solutions-right-stack">
              {solutions.map((item) => (
                <article key={item.title} className="solution-card">
                  <div className="solution-icon">{item.icon}</div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blue-soft">
        <div className="container two-column outcomes-layout">
          <div className="left-section">
            <p className="section-label">Business Outcomes</p>

            <h2>
              Tangible impact for modern manufacturing enterprises
            </h2>

            <div className="left-image">
              <Image
                src="/hero/4.png"
                alt="Manufacturing growth"
                width={700}
                height={450}
                quality={90}
              />
            </div>
          </div>

          <div className="outcomes-grid">
            {outcomes.map((item, index) => (
              <div key={item} className="outcome-card">
                <span className="card-number">0{index + 1}</span>

                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="container capabilities-shell">
          <div className="capabilities-left">
            <div className="capabilities-sticky">
              <p className="section-label">Industrial Capabilities</p>

              <h2>
                Core domains supporting intelligent manufacturing operations
              </h2>

              <p className="capabilities-description">
                Our teams integrate manufacturing expertise, industrial
                automation, and operational modernization to help enterprises
                scale with confidence.
              </p>
            </div>
          </div>

          <div className="capabilities-right">
            <div className="capabilities-marquee desktop-capabilities">
              <div className="capabilities-columns">
                <div className="capability-column capability-column-a">
                  {capabilityColumnA.map((item, index) => (
                    <div
                      key={`col-a-${item.title}-${index}`}
                      className="capability-card capability-card-left"
                    >
                      <span className="capability-icon">{item.icon}</span>

                      <span className="capability-text">{item.title}</span>
                    </div>
                  ))}
                </div>

                <div className="capability-column capability-column-b">
                  {capabilityColumnB.map((item, index) => (
                    <div
                      key={`col-b-${item.title}-${index}`}
                      className="capability-card capability-card-center"
                    >
                      <span className="capability-icon">{item.icon}</span>

                      <span className="capability-text">{item.title}</span>
                    </div>
                  ))}
                </div>

                <div className="capability-column capability-column-c">
                  {capabilityColumnC.map((item, index) => (
                    <div
                      key={`col-c-${item.title}-${index}`}
                      className="capability-card capability-card-right"
                    >
                      <span className="capability-icon">{item.icon}</span>

                      <span className="capability-text">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="capabilities-mobile-grid">
              {capabilities.map((item) => (
                <div key={item.title} className="capability-mobile-card">
                  <span className="capability-icon">{item.icon}</span>

                  <span className="capability-text">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section case-study-section">
        <div className="container two-column">
          <div>
            <p className="section-label section-label-light">Case Study</p>

            <h2>How We Help Industrial Enterprises Scale</h2>
          </div>

          <div className="case-study-card">
            <p className="case-study-tag">
              Global Smart Manufacturing Transformation
            </p>

            <p className="case-study-description">
              A leading industrial enterprise partnered with Jetsky to modernize
              factory operations, improve automation, and optimize supply chain
              performance across global facilities.
            </p>

            <div className="stats-grid">
              <div className="stat-box">
                <h3>58%</h3>
                <p>Improvement in operational efficiency</p>
              </div>

              <div className="stat-box">
                <h3>42%</h3>
                <p>Reduction in production downtime</p>
              </div>

              <div className="stat-box">
                <h3>12+</h3>
                <p>Global facilities modernized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section insights-section">
        <div className="container">
          <div className="section-header-row insights-header">
            <div className="section-heading section-heading-no-margin">
              <p className="section-label">Insights</p>

              <h2>
                Thought leadership for manufacturing and industrial leaders
              </h2>
            </div>

            <button className="btn btn-outline insights-btn">
              View All Insights
            </button>
          </div>

          <div className="insights-scroll-row">
            {insights.map((item) => (
              <article
                key={item.title}
                className="insight-card insight-scroll-card"
              >
                <div className="insight-image">
                  <span>{item.category}</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="read-link">Read Insight →</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-wrapper">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <p className="section-label section-label-light">
                Let’s Talk
              </p>

              <h2>
                Partner with Jetsky to Accelerate Industrial Transformation
              </h2>

              <p>
                Work with our experts to modernize manufacturing operations,
                improve industrial resilience, and scale intelligent factory
                ecosystems.
              </p>
            </div>

            <div className="cta-action">
              <button className="btn btn-white">
                Start Discussion
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}