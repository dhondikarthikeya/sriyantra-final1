"use client";

import "./page.css";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  FaCar,
  FaRobot,
  FaChargingStation,
  FaShieldAlt,
  FaIndustry,
  FaCloud,
  FaDatabase,
  FaGlobe,
  FaTruckMoving,
  FaUsers,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

import {
  MdElectricCar,
  MdDirectionsCar,
  MdOutlinePrecisionManufacturing,
  MdTrendingUp,
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
    title: "Electric Vehicle Transformation",
    icon: <MdElectricCar color="#6366F1" />,
    description:
      "Accelerating EV innovation, battery ecosystems, and charging infrastructure modernization.",
  },
  {
    number: "02",
    title: "Connected Mobility",
    icon: <FaGlobe color="#06B6D4" />,
    description:
      "Creating seamless connected vehicle experiences powered by intelligent mobility platforms.",
  },
  {
    number: "03",
    title: "Supply Chain Resilience",
    icon: <FaTruckMoving color="#F59E0B" />,
    description:
      "Improving operational visibility and supply chain agility across global automotive ecosystems.",
  },
  {
    number: "04",
    title: "Autonomous Innovation",
    icon: <FaRobot color="#8B5CF6" />,
    description:
      "Enabling autonomous driving systems with AI, sensors, and advanced vehicle intelligence.",
  },
  {
    number: "05",
    title: "Manufacturing Modernization",
    icon: <FaIndustry color="#22C55E" />,
    description:
      "Transforming factory operations through smart manufacturing and industrial automation.",
  },
  {
    number: "06",
    title: "Vehicle Cybersecurity",
    icon: <FaShieldAlt color="#EF4444" />,
    description:
      "Protecting connected vehicles, digital systems, and customer data from evolving cyber threats.",
  },
];

const solutions: Solution[] = [
  {
    title: "Connected Vehicle Platforms",
    icon: <MdDirectionsCar color="#6366F1" />,
    description:
      "Build scalable connected mobility ecosystems with intelligent digital experiences.",
  },
  {
    title: "EV & Charging Solutions",
    icon: <FaChargingStation color="#2563EB" />,
    description:
      "Accelerate electric mobility transformation with smart charging and battery technologies.",
  },
  {
    title: "Smart Manufacturing",
    icon: <MdOutlinePrecisionManufacturing color="#06B6D4" />,
    description:
      "Modernize automotive production through automation, IoT, and digital factory systems.",
  },
  {
    title: "Cloud & Data Platforms",
    icon: <FaCloud color="#8B5CF6" />,
    description:
      "Enable real-time insights and scalable mobility operations with cloud-native platforms.",
  },
  {
    title: "Mobility Analytics & AI",
    icon: <FaChartLine color="#F59E0B" />,
    description:
      "Leverage AI-driven analytics to improve operational efficiency and customer experiences.",
  },
  {
    title: "Automotive Cybersecurity",
    icon: <MdSecurity color="#EF4444" />,
    description:
      "Strengthen automotive ecosystems with enterprise-grade security and compliance frameworks.",
  },
];

const outcomes: string[] = [
  "Faster EV innovation cycles",
  "Improved manufacturing efficiency",
  "Connected mobility experiences",
  "Scalable automotive operations",
];

const capabilities: Capability[] = [
  { title: "Electric Mobility", icon: <MdElectricCar color="#06B6D4" /> },
  { title: "Connected Vehicles", icon: <FaCar color="#8B5CF6" /> },
  { title: "Industrial Automation", icon: <FaRobot color="#2563EB" /> },
  { title: "Mobility Analytics", icon: <FaChartLine color="#6366F1" /> },
  { title: "Vehicle Security", icon: <FaShieldAlt color="#EF4444" /> },
  { title: "Cloud Mobility", icon: <FaCloud color="#F59E0B" /> },
  { title: "Global Supply Chain", icon: <FaGlobe color="#14B8A6" /> },
  { title: "Customer Platforms", icon: <FaUsers color="#3B82F6" /> },
  { title: "Automotive Data", icon: <FaDatabase color="#0EA5E9" /> },
  { title: "Factory Systems", icon: <FaCogs color="#DC2626" /> },
  { title: "Mobility Innovation", icon: <MdTrendingUp color="#22C55E" /> },
  { title: "Smart Infrastructure", icon: <FaChargingStation color="#F97316" /> },
];

const insights: Insight[] = [
  {
    category: "Perspective",
    title: "Future of Electric Mobility",
    description:
      "How EV ecosystems and intelligent mobility are reshaping the automotive industry.",
  },
  {
    category: "Point of View",
    title: "AI in Automotive Manufacturing",
    description:
      "Using AI and automation to improve production efficiency and operational agility.",
  },
  {
    category: "Executive Insight",
    title: "Connected Vehicle Transformation",
    description:
      "Why connected platforms are central to the future of automotive experiences.",
  },
  {
    category: "Research",
    title: "The Economics of Smart Mobility",
    description:
      "Balancing innovation, sustainability, and operational efficiency in modern mobility ecosystems.",
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

export default function AutomotiveMobilityPage() {
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
          backgroundImage: "url('/hero/bg17.png')",
        }}
      >
        <div className="hero-overlay" />

        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Automotive &amp; Mobility</h1>

            <p className="hero-subheadline">
              Sri Yantra Tech helps automotive and mobility companies accelerate
              digital transformation, connected mobility, and intelligent
              manufacturing.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div className="left-content">
            <p className="section-label">Industry Overview</p>

            <h2>Automotive &amp; Mobility Industry Transformation</h2>

            <Image
              src="/hero/5.png"
              alt="Automotive Industry"
              className="industry-image"
              width={700}
              height={500}
              priority
              quality={90}
            />
          </div>

          <div className="text-stack">
            <p>
              Automotive companies are evolving rapidly as electric mobility,
              connected vehicles, and autonomous technologies reshape the
              industry.
            </p>

            <p>
              Mobility organizations need modern operations, stronger
              manufacturing agility, and intelligent connected experiences to
              stay competitive.
            </p>

            <p>
              Sri Yantra Tech combines automotive expertise, digital
              engineering, and advanced analytics to support innovation at
              scale.
            </p>

            <p>
              OEMs, suppliers, and mobility providers can accelerate
              transformation while creating more sustainable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Industry Challenges</p>

            <h2>Strategic priorities shaping mobility transformation</h2>
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
                  Consulting capabilities designed for automotive and mobility
                  leaders
                </h2>

                <p className="solutions-intro">
                  Strategy, mobility engineering, and digital modernization
                  expertise help organizations innovate faster and scale
                  globally.
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
              Tangible impact for modern automotive and mobility organizations
            </h2>

            <div className="left-image">
              <Image
                src="/hero/6.png"
                alt="Mobility growth"
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
              <p className="section-label">Mobility Capabilities</p>

              <h2>
                Core domains supporting intelligent automotive innovation
              </h2>

              <p className="capabilities-description">
                Mobility strategy, engineering excellence, and digital
                transformation help automotive organizations scale efficiently.
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

            <h2>How Automotive Companies Scale</h2>
          </div>

          <div className="case-study-card">
            <p className="case-study-tag">
              Global Connected Mobility Transformation
            </p>

            <p className="case-study-description">
              A leading automotive manufacturer modernized connected vehicle
              systems and optimized global production operations.
            </p>

            <div className="stats-grid">
              <div className="stat-box">
                <h3>70%</h3>
                <p>Increase in operational efficiency</p>
              </div>

              <div className="stat-box">
                <h3>40%</h3>
                <p>Reduction in manufacturing downtime</p>
              </div>

              <div className="stat-box">
                <h3>10M+</h3>
                <p>Connected vehicles supported globally</p>
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
                Thought leadership for automotive and mobility leaders
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
              <p className="section-label section-label-light">Let’s Talk</p>

              <h2>
                Partner with Sri Yantra Tech to Accelerate Mobility Innovation
              </h2>

              <p>
                Work with experts to modernize automotive operations, improve
                connected mobility experiences, and scale intelligent
                manufacturing systems.
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