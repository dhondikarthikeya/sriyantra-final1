"use client";

import "./page.css";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  FaUniversity,
  FaShieldAlt,
  FaChartLine,
  FaMobileAlt,
  FaLock,
  FaDatabase,
  FaCloud,
  FaMoneyCheckAlt,
  FaGlobe,
  FaUsers,
  FaCodeBranch,
  FaCoins,
} from "react-icons/fa";

import {
  MdAccountBalance,
  MdSecurity,
  MdTrendingUp,
  MdOutlinePayments,
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
    title: "Digital Banking Transformation",
    icon: <MdAccountBalance color="#6366F1" />,
    description:
      "Modernizing banking experiences through digital-first platforms, mobile services, and intelligent customer engagement.",
  },
  {
    number: "02",
    title: "Fraud & Cybersecurity",
    icon: <FaShieldAlt color="#EF4444" />,
    description:
      "Strengthening security frameworks to protect customer data, payment systems, and financial transactions.",
  },
  {
    number: "03",
    title: "Regulatory Compliance",
    icon: <FaLock color="#06B6D4" />,
    description:
      "Managing evolving compliance requirements while maintaining operational agility and governance standards.",
  },
  {
    number: "04",
    title: "Payments Modernization",
    icon: <MdOutlinePayments color="#8B5CF6" />,
    description:
      "Transforming payment ecosystems to support real-time transactions, digital wallets, and embedded finance.",
  },
  {
    number: "05",
    title: "Data & Risk Intelligence",
    icon: <FaDatabase color="#22C55E" />,
    description:
      "Using analytics and AI-driven insights to improve decision-making, credit assessment, and risk management.",
  },
  {
    number: "06",
    title: "Customer Experience",
    icon: <FaUsers color="#F59E0B" />,
    description:
      "Delivering seamless omnichannel financial experiences that improve customer trust and retention.",
  },
];

const solutions: Solution[] = [
  {
    title: "Core Banking Modernization",
    icon: <FaUniversity color="#6366F1" />,
    description:
      "Transform legacy banking systems into scalable digital platforms designed for agility and growth.",
  },
  {
    title: "Digital Payments & FinTech",
    icon: <FaMoneyCheckAlt color="#2563EB" />,
    description:
      "Build secure payment ecosystems, digital banking services, and embedded financial experiences.",
  },
  {
    title: "Cloud & Infrastructure",
    icon: <FaCloud color="#06B6D4" />,
    description:
      "Modernize financial infrastructure with secure cloud-native architectures and resilient platforms.",
  },
  {
    title: "Data & AI Enablement",
    icon: <FaChartLine color="#8B5CF6" />,
    description:
      "Implement analytics and AI solutions to improve customer intelligence, fraud detection, and operational performance.",
  },
  {
    title: "Risk & Compliance Automation",
    icon: <FaCodeBranch color="#F59E0B" />,
    description:
      "Automate governance, reporting, and compliance workflows for greater operational efficiency.",
  },
  {
    title: "Cybersecurity Architecture",
    icon: <MdSecurity color="#EF4444" />,
    description:
      "Strengthen financial security frameworks and digital trust through enterprise-grade protection systems.",
  },
];

const outcomes: string[] = [
  "Faster digital banking adoption",
  "Improved transaction security",
  "Enhanced customer engagement",
  "Scalable financial operations",
];

const capabilities: Capability[] = [
  { title: "Digital Banking", icon: <FaUniversity color="#06B6D4" /> },
  { title: "Fraud Detection", icon: <FaShieldAlt color="#8B5CF6" /> },
  { title: "Payments Modernization", icon: <FaMoneyCheckAlt color="#2563EB" /> },
  { title: "Financial Analytics", icon: <FaChartLine color="#6366F1" /> },
  { title: "Cybersecurity", icon: <FaLock color="#EF4444" /> },
  { title: "Cloud Banking", icon: <FaCloud color="#F59E0B" /> },
  { title: "Global Transactions", icon: <FaGlobe color="#14B8A6" /> },
  { title: "Customer Platforms", icon: <FaUsers color="#3B82F6" /> },
  { title: "Risk Intelligence", icon: <FaDatabase color="#0EA5E9" /> },
  { title: "Mobile Banking", icon: <FaMobileAlt color="#DC2626" /> },
  { title: "Wealth Management", icon: <MdTrendingUp color="#22C55E" /> },
  { title: "Digital Assets", icon: <FaCoins color="#F97316" /> },
];

const insights: Insight[] = [
  {
    category: "Perspective",
    title: "Future of Digital Banking",
    description:
      "How financial institutions are reimagining customer experiences through intelligent banking ecosystems.",
  },
  {
    category: "Point of View",
    title: "AI in Financial Services",
    description:
      "Using AI and analytics to improve fraud detection, customer engagement, and operational performance.",
  },
  {
    category: "Executive Insight",
    title: "Modernizing Financial Infrastructure",
    description:
      "Why cloud transformation and platform modernization are central to the future of banking.",
  },
  {
    category: "Research",
    title: "The New Economics of FinTech Growth",
    description:
      "Balancing innovation, compliance, and customer trust in a rapidly evolving financial landscape.",
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

export default function BankingFinancialPage() {
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
          backgroundImage: "url('/hero/bg18.jpg')",
        }}
      >
        <div className="hero-overlay" />

        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Banking &amp; Financial Services</h1>

            <p className="hero-subheadline">
              Sri Yantra tech helps financial institutions modernize banking
              platforms, strengthen digital trust, and accelerate intelligent
              financial transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div className="left-content">
            <p className="section-label">Industry Overview</p>

            <h2>Banking &amp; Financial Services Industry Transformation</h2>

            <Image
              src="/hero/7.png"
              alt="Banking Industry"
              className="industry-image"
              width={700}
              height={500}
              priority
              quality={90}
            />
          </div>

          <div className="text-stack">
            <p>
              Financial institutions are rapidly evolving to meet growing
              customer expectations, digital adoption, and regulatory demands.
            </p>

            <p>
              Banks and financial organizations need modern core systems,
              improved digital experiences, and resilient financial ecosystems.
            </p>

            <p>
              Sri Yantra Tech combines banking expertise, digital engineering, and
              data-driven intelligence to enable operational agility and
              innovation at scale.
            </p>

            <p>
              Banks, insurers, and financial service providers can accelerate
              transformation, improve trust, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Industry Challenges</p>

            <h2>Strategic priorities shaping financial transformation</h2>
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
                <p className="section-label">Solutions</p>

                <h2>
                  Consulting capabilities designed for banking and financial
                  institutions
                </h2>

                <p className="solutions-intro">
                  Strategy, technology modernization, and financial expertise
                  help organizations scale securely and innovate confidently.
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
              Tangible impact for modern banking and financial organizations
            </h2>

            <div className="left-image">
              <Image
                src="/hero/8.png"
                alt="Financial growth"
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
              <p className="section-label">Financial Capabilities</p>

              <h2>
                Core domains supporting intelligent banking and financial scale
              </h2>

              <p className="capabilities-description">
                Banking strategy, digital engineering, and modernization
                expertise help financial organizations deliver secure growth.
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

      {/* <section className="section case-study-section">
        <div className="container two-column">
          <div>
            <p className="section-label section-label-light">Case Study</p>

            <h2>How Financial Institutions Scale</h2>
          </div>

          <div className="case-study-card">
            <p className="case-study-tag">
              Global Banking Platform Transformation
            </p>

            <p className="case-study-description">
              A leading financial institution modernized its digital banking
              ecosystem and improved customer engagement across channels.
            </p>

            <div className="stats-grid">
              <div className="stat-box">
                <h3>65%</h3>
                <p>Increase in digital adoption</p>
              </div>

              <div className="stat-box">
                <h3>45%</h3>
                <p>Reduction in fraud response time</p>
              </div>

              <div className="stat-box">
                <h3>8M+</h3>
                <p>Customers supported globally</p>
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
                Thought leadership for banking and financial leaders
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
      </section> */}

      <section className="cta-wrapper">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <p className="section-label section-label-light">Let's Talk</p>

              <h2>
                Partner with Sri Yantra Tech to Accelerate Financial Transformation
              </h2>

              <p>
                Work with experts to modernize banking operations, improve
                customer trust, and scale intelligent financial platforms.
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