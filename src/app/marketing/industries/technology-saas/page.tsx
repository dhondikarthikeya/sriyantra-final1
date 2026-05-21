"use client";

import "./page.css";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
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
  FaLock,
  FaChartLine,
  FaCubes,
} from "react-icons/fa";
import {
  MdArchitecture,
  MdTrendingUp,
  MdCloudQueue,
  MdInsights,
  MdSecurity,
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
    title: "Platform Scalability",
    icon: <MdArchitecture color="#6366F1" />,
    description:
      "Building resilient digital foundations capable of supporting global growth, rising transaction volumes, and always-on customer expectations.",
  },
  {
    number: "02",
    title: "Product Innovation",
    icon: <FaRocket color="#F59E0B" />,
    description:
      "Accelerating roadmap delivery while preserving platform stability, engineering quality, and customer experience.",
  },
  {
    number: "03",
    title: "Cloud Optimization",
    icon: <MdCloudQueue color="#06B6D4" />,
    description:
      "Balancing performance, security, and cost efficiency across increasingly complex multi-cloud environments.",
  },
  {
    number: "04",
    title: "Data & AI Integration",
    icon: <FaBrain color="#8B5CF6" />,
    description:
      "Embedding advanced analytics and intelligent capabilities into products, operations, and decision-making workflows.",
  },
  {
    number: "05",
    title: "Cybersecurity & Compliance",
    icon: <FaShieldAlt color="#EF4444" />,
    description:
      "Protecting platforms, customer data, and intellectual property while meeting evolving regulatory and enterprise requirements.",
  },
  {
    number: "06",
    title: "Monetization & Pricing",
    icon: <MdTrendingUp color="#22C55E" />,
    description:
      "Designing subscription, usage-based, and platform-led revenue models that scale with customer adoption and market demand.",
  },
];

const solutions: Solution[] = [
  {
    title: "Digital Product Strategy",
    icon: <MdInsights color="#6366F1" />,
    description:
      "Define product vision, market positioning, and roadmap priorities aligned to growth, differentiation, and long-term value creation.",
  },
  {
    title: "Platform Engineering",
    icon: <FaCogs color="#2563EB" />,
    description:
      "Build scalable cloud-native architectures, modern application layers, and microservices ecosystems designed for speed and resilience.",
  },
  {
    title: "SaaS Transformation",
    icon: <FaCloud color="#06B6D4" />,
    description:
      "Transition legacy software models into modern SaaS platforms with repeatable delivery, flexible pricing, and stronger customer retention.",
  },
  {
    title: "Data & AI Enablement",
    icon: <FaBrain color="#8B5CF6" />,
    description:
      "Implement analytics, machine learning, and intelligent automation capabilities that improve product intelligence and enterprise decision quality.",
  },
  {
    title: "DevOps & Agile Engineering",
    icon: <FaRocket color="#F59E0B" />,
    description:
      "Accelerate release cycles, improve software quality, and increase organizational agility through modern engineering practices.",
  },
  {
    title: "Cybersecurity Architecture",
    icon: <MdSecurity color="#EF4444" />,
    description:
      "Strengthen digital trust through enterprise-grade security frameworks, identity controls, and architecture-led risk reduction.",
  },
];

const outcomes: string[] = [
  "Faster product releases",
  "Scalable global platforms",
  "Improved customer engagement",
  "Higher SaaS revenue growth",
];

const capabilities: Capability[] = [
  { title: "Cloud Platforms", icon: <FaCloud color="#06B6D4" /> },
  { title: "AI & Machine Learning", icon: <FaBrain color="#8B5CF6" /> },
  { title: "Data Engineering", icon: <FaDatabase color="#2563EB" /> },
  { title: "Platform Architecture", icon: <FaCubes color="#6366F1" /> },
  { title: "Cybersecurity", icon: <FaShieldAlt color="#EF4444" /> },
  { title: "DevOps Automation", icon: <FaCodeBranch color="#F59E0B" /> },
  { title: "API Ecosystems", icon: <FaNetworkWired color="#14B8A6" /> },
  { title: "Product Engineering", icon: <FaCogs color="#3B82F6" /> },
  { title: "Scalable Infrastructure", icon: <FaServer color="#0EA5E9" /> },
  { title: "Identity & Access", icon: <FaLock color="#DC2626" /> },
  { title: "Analytics & Insights", icon: <FaChartLine color="#22C55E" /> },
  { title: "Microservices Design", icon: <FaRocket color="#F97316" /> },
];

const insights: Insight[] = [
  {
    category: "Perspective",
    title: "Future of SaaS Platforms",
    description:
      "How leading technology firms are redesigning product, pricing, and platform architecture for the next phase of growth.",
  },
  {
    category: "Point of View",
    title: "AI-Driven Product Development",
    description:
      "A practical approach to embedding intelligence into product strategy, engineering workflows, and customer experiences.",
  },
  {
    category: "Executive Insight",
    title: "Building Cloud-Native Technology Companies",
    description:
      "Why operating model alignment, engineering discipline, and cloud modernization are central to sustainable scale.",
  },
  {
    category: "Research",
    title: "The New Economics of Platform Scaling",
    description:
      "Why cost optimization, product velocity, and experience quality must be managed together to drive healthy SaaS growth.",
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

export default function TechnologySaaSPage() {
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
          backgroundImage: "url('/hero/bg24.png')",
        }}
      >
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Technology &amp; SaaS</h1>
            <p className="hero-subheadline">
              Helping technology companies accelerate innovation, scale
              platforms, and build resilient digital businesses.
            </p>
            
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div className="left-content">
            <p className="section-label">Industry Overview</p>
            <h2>Technology &amp; SaaS Industry Transformation</h2>

            <img
              src="/hero/1.png"
              alt="Technology and SaaS Industry"
              className="industry-image"
            />
          </div>

          <div className="text-stack">
            <p>
              Technology companies face constant pressure to innovate faster
              while maintaining scalable and secure platforms.
            </p>
            <p>
              We help software companies modernize their technology stack,
              optimize product engineering, and adopt cloud-native operating
              models that support rapid growth.
            </p>
            <p>
              Our consultants combine product strategy, engineering excellence,
              and data-driven decision making to enable technology organizations
              to deliver continuous innovation.
            </p>
            <p>
              We partner with software companies, cloud platforms, and digital
              innovators to design scalable architectures, accelerate product
              development, and unlock new revenue streams.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Industry Challenges</p>
            <h2>Strategic priorities shaping technology transformation</h2>
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
                <h2>Consulting capabilities designed for technology companies</h2>
                <p className="solutions-intro">
                  We combine strategy, engineering, and modernization expertise
                  to help technology businesses scale products, platforms, and
                  growth.
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
              Tangible impact for growth-focused technology organizations
            </h2>

            <div className="left-image">
              <img src="/hero/2.png" alt="Technology growth" />
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
              <p className="section-label">Technology Capabilities</p>
              <h2>
                Core domains supporting platform modernization and digital scale
              </h2>
              <p className="capabilities-description">
                Our teams integrate strategic advisory, engineering execution,
                and modernization capabilities to help technology businesses
                deliver performance at scale.
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
            <h2>How We Help Technology Companies Scale</h2>
          </div>

          <div className="case-study-card">
            <p className="case-study-tag">Global SaaS Platform Transformation</p>
            <p className="case-study-description">
              A rapidly growing SaaS provider partnered with Jetsky to modernize
              its platform architecture and transition to a cloud-native
              infrastructure.
            </p>

            <div className="stats-grid">
              <div className="stat-box">
                <h3>60%</h3>
                <p>Faster deployment cycles</p>
              </div>
              <div className="stat-box">
                <h3>40%</h3>
                <p>Infrastructure cost reduction</p>
              </div>
              <div className="stat-box">
                <h3>5M+</h3>
                <p>Users supported globally</p>
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
                Thought leadership for technology leaders and transformation
                teams
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
              <p className="section-label section-label-light">Let’s Talk</p>
              <h2>Partner with Jetsky to Accelerate Technology Innovation</h2>
              <p>
                Work with our experts to design scalable platforms, launch
                innovative digital products, and grow your technology business.
              </p>
            </div>

            <div className="cta-action">
              <button className="btn btn-white">Start Discussion</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}