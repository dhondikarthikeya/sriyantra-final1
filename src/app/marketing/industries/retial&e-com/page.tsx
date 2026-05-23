"use client";

import "./page.css";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import {
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaChartLine,
  FaStore,
  FaDatabase,
  FaUsers,
  FaCodeBranch,
  FaBoxes,
  FaLock,
  FaGlobe,
  FaMobileAlt,
} from "react-icons/fa";

import {
  MdStorefront,
  MdTrendingUp,
  MdOutlineInventory2,
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
    title: "Omnichannel Commerce",
    icon: <MdStorefront color="#6366F1" />,
    description:
      "Creating seamless customer experiences across physical stores, marketplaces, mobile applications, and digital commerce channels.",
  },
  {
    number: "02",
    title: "Supply Chain Visibility",
    icon: <FaTruck color="#F59E0B" />,
    description:
      "Improving fulfillment speed, inventory transparency, and logistics efficiency across increasingly complex retail ecosystems.",
  },
  {
    number: "03",
    title: "Customer Personalization",
    icon: <FaUsers color="#06B6D4" />,
    description:
      "Leveraging customer data and behavioral insights to deliver personalized shopping experiences at scale.",
  },
  {
    number: "04",
    title: "Digital Commerce Growth",
    icon: <FaChartLine color="#8B5CF6" />,
    description:
      "Scaling eCommerce operations while balancing customer acquisition costs, retention, and profitability.",
  },
  {
    number: "05",
    title: "Retail Security & Compliance",
    icon: <FaShieldAlt color="#EF4444" />,
    description:
      "Protecting customer data, payment systems, and digital commerce infrastructure from evolving cyber threats.",
  },
  {
    number: "06",
    title: "Inventory Optimization",
    icon: <MdOutlineInventory2 color="#22C55E" />,
    description:
      "Reducing stock inefficiencies and improving forecasting accuracy to support demand-driven retail operations.",
  },
];

const solutions: Solution[] = [
  {
    title: "Retail Experience Strategy",
    icon: <MdInsights color="#6366F1" />,
    description:
      "Design customer-centric retail strategies that unify digital and physical commerce experiences.",
  },
  {
    title: "eCommerce Platform Engineering",
    icon: <FaStore color="#2563EB" />,
    description:
      "Build scalable commerce platforms, marketplace ecosystems, and high-performance digital storefronts.",
  },
  {
    title: "Supply Chain Modernization",
    icon: <FaTruck color="#06B6D4" />,
    description:
      "Transform fulfillment, logistics, and inventory operations through automation and connected retail systems.",
  },
  {
    title: "Data & Customer Analytics",
    icon: <FaDatabase color="#8B5CF6" />,
    description:
      "Implement advanced analytics and AI-driven insights to improve customer engagement and purchasing decisions.",
  },
  {
    title: "Retail Operations Automation",
    icon: <FaCodeBranch color="#F59E0B" />,
    description:
      "Increase operational agility and reduce manual workflows through integrated retail technologies.",
  },
  {
    title: "Commerce Security Architecture",
    icon: <MdSecurity color="#EF4444" />,
    description:
      "Strengthen payment security, customer trust, and compliance across digital retail platforms.",
  },
];

const outcomes: string[] = [
  "Higher online conversion rates",
  "Faster fulfillment operations",
  "Improved customer retention",
  "Scalable omnichannel growth",
];

const capabilities: Capability[] = [
  { title: "Digital Commerce", icon: <FaShoppingBag color="#06B6D4" /> },
  { title: "Retail Analytics", icon: <FaChartLine color="#8B5CF6" /> },
  { title: "Inventory Intelligence", icon: <FaBoxes color="#2563EB" /> },
  { title: "Omnichannel Retail", icon: <FaStore color="#6366F1" /> },
  { title: "Retail Cybersecurity", icon: <FaShieldAlt color="#EF4444" /> },
  { title: "Supply Chain Systems", icon: <FaTruck color="#F59E0B" /> },
  { title: "Marketplace Integration", icon: <FaGlobe color="#14B8A6" /> },
  { title: "Customer Platforms", icon: <FaUsers color="#3B82F6" /> },
  { title: "Retail Infrastructure", icon: <FaDatabase color="#0EA5E9" /> },
  { title: "Payment Security", icon: <FaLock color="#DC2626" /> },
  { title: "Consumer Insights", icon: <MdTrendingUp color="#22C55E" /> },
  { title: "Mobile Commerce", icon: <FaMobileAlt color="#F97316" /> },
];

const insights: Insight[] = [
  {
    category: "Perspective",
    title: "Future of Omnichannel Retail",
    description:
      "How modern retailers are aligning physical and digital experiences to drive long-term customer loyalty.",
  },
  {
    category: "Point of View",
    title: "AI in Customer Commerce",
    description:
      "A practical approach to using AI and analytics to personalize shopping journeys and improve conversion.",
  },
  {
    category: "Executive Insight",
    title: "Building Resilient Retail Supply Chains",
    description:
      "Why operational visibility and connected fulfillment systems are critical for modern retail growth.",
  },
  {
    category: "Research",
    title: "The New Economics of eCommerce Scaling",
    description:
      "Balancing acquisition costs, operational efficiency, and customer experience in digital retail.",
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

export default function RetailEcommercePage() {
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
    <main className="technology-page retail-page">
      {/* HERO */}
      <section
        className="hero-section"
        style={{
          backgroundImage: "url('/hero/bg12.png')",
        }}
      >
        <div className="hero-overlay" />

        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Retail &amp; eCommerce</h1>

            <p className="hero-subheadline">
              Sri Yantra Tech helps retail and eCommerce companies modernize
              customer experiences, optimize operations, and scale digital
              commerce.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <div className="container two-column">
          <div className="left-content">
            <p className="section-label">Industry Overview</p>

            <h2>Retail &amp; eCommerce Industry Transformation</h2>

            <Image
              src="/hero/9.png"
              alt="Retail and eCommerce Industry"
              className="industry-image"
              width={700}
              height={500}
              priority
              quality={80}
            />
          </div>

          <div className="text-stack">
            <p>
              Retail businesses are rapidly evolving as customer expectations,
              digital shopping behaviors, and omnichannel experiences continue
              to reshape the industry landscape.
            </p>

            <p>
              Retailers need modern commerce platforms, optimized supply chain
              operations, and seamless shopping experiences across digital and
              physical channels.
            </p>

            <p>
              Sri Yantra Tech combines retail strategy, technology engineering,
              and analytics-driven insights to improve operational agility and
              customer engagement.
            </p>

            <p>
              Retailers, marketplaces, and consumer brands can accelerate
              eCommerce innovation, increase fulfillment efficiency, and drive
              sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Industry Challenges</p>

            <h2>Strategic priorities shaping retail transformation</h2>
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

      {/* SOLUTIONS */}
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
                  Consulting capabilities designed for retail and eCommerce
                  companies
                </h2>

                <p className="solutions-intro">
                  Strategy, digital commerce, and operational transformation
                  expertise help retailers scale growth and customer engagement.
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

      {/* OUTCOMES */}
      <section className="section section-blue-soft">
        <div className="container two-column outcomes-layout">
          <div className="left-section">
            <p className="section-label">Business Outcomes</p>

            <h2>
              Tangible impact for modern retail and commerce organizations
            </h2>

            <div className="left-image">
              <Image
                src="/hero/10.png"
                alt="Retail growth"
                width={700}
                height={450}
                priority
                quality={80}
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

      {/* CAPABILITIES */}
      <section className="section capabilities-section">
        <div className="container capabilities-shell">
          <div className="capabilities-left">
            <div className="capabilities-sticky">
              <p className="section-label">Retail Capabilities</p>

              <h2>
                Core domains supporting digital commerce and retail scale
              </h2>

              <p className="capabilities-description">
                Retail strategy, technology modernization, and operational
                execution help commerce businesses deliver measurable growth.
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

      {/* CASE STUDY */}
      {/* <section className="section case-study-section">
        <div className="container two-column">
          <div>
            <p className="section-label section-label-light">Case Study</p>

            <h2>How Retail Brands Scale</h2>
          </div>

          <div className="case-study-card">
            <p className="case-study-tag">
              Global eCommerce Platform Transformation
            </p>

            <p className="case-study-description">
              A fast-growing retail brand modernized its commerce
              infrastructure and created a seamless omnichannel customer
              experience.
            </p>

            <div className="stats-grid">
              <div className="stat-box">
                <h3>55%</h3>
                <p>Increase in online conversions</p>
              </div>

              <div className="stat-box">
                <h3>35%</h3>
                <p>Reduction in fulfillment delays</p>
              </div>

              <div className="stat-box">
                <h3>3M+</h3>
                <p>Customers supported globally</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* INSIGHTS */}
      {/* <section className="section insights-section">
        <div className="container">
          <div className="section-header-row insights-header">
            <div className="section-heading section-heading-no-margin">
              <p className="section-label">Insights</p>

              <h2>
                Thought leadership for retail and digital commerce leaders
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

      {/* CTA */}
      <section className="cta-wrapper">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <p className="section-label section-label-light">Let’s Talk</p>

              <h2>
                Partner with Sri Yantra Tech to Accelerate Retail Innovation
              </h2>

              <p>
                Work with experts to modernize retail operations, optimize
                commerce platforms, and deliver connected customer experiences.
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