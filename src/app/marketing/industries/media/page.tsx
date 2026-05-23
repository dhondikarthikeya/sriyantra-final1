"use client";

import "./page.css";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  FaFilm,
  FaVideo,
  FaCloud,
  FaChartLine,
  FaMobileAlt,
  FaLock,
  FaDatabase,
  FaGlobe,
  FaUsers,
  FaCodeBranch,
  FaBroadcastTower,
  FaPlayCircle,
} from "react-icons/fa";

import {
  MdMovie,
  MdSecurity,
  MdTrendingUp,
  MdOutlineLiveTv,
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
    title: "Streaming Platform Growth",
    icon: <FaPlayCircle color="#6366F1" />,
    description:
      "Scaling OTT and streaming ecosystems to support global audiences and seamless content delivery.",
  },
  {
    number: "02",
    title: "Content Personalization",
    icon: <FaUsers color="#06B6D4" />,
    description:
      "Using AI and analytics to deliver personalized media experiences and improve audience engagement.",
  },
  {
    number: "03",
    title: "Digital Rights & Security",
    icon: <FaLock color="#EF4444" />,
    description:
      "Protecting media assets, customer data, and digital entertainment platforms from piracy and cyber threats.",
  },
  {
    number: "04",
    title: "Cross-Platform Experiences",
    icon: <FaMobileAlt color="#8B5CF6" />,
    description:
      "Delivering immersive entertainment experiences across web, mobile, smart TV, and connected devices.",
  },
  {
    number: "05",
    title: "Live Media Delivery",
    icon: <MdOutlineLiveTv color="#22C55E" />,
    description:
      "Optimizing live-streaming reliability, real-time broadcasting, and global content distribution.",
  },
  {
    number: "06",
    title: "Audience Monetization",
    icon: <FaChartLine color="#F59E0B" />,
    description:
      "Driving subscription growth, ad revenue, and customer retention through digital innovation.",
  },
];

const solutions: Solution[] = [
  {
    title: "Streaming Platform Engineering",
    icon: <FaVideo color="#6366F1" />,
    description:
      "Build scalable OTT and streaming platforms optimized for performance, reliability, and engagement.",
  },
  {
    title: "Digital Media Experiences",
    icon: <MdMovie color="#2563EB" />,
    description:
      "Create immersive customer experiences across digital entertainment and media platforms.",
  },
  {
    title: "Cloud Media Infrastructure",
    icon: <FaCloud color="#06B6D4" />,
    description:
      "Modernize media ecosystems with cloud-native architectures and intelligent delivery systems.",
  },
  {
    title: "Audience Analytics & AI",
    icon: <FaChartLine color="#8B5CF6" />,
    description:
      "Use AI and analytics to improve personalization, audience intelligence, and engagement strategies.",
  },
  {
    title: "Broadcast & Live Operations",
    icon: <FaBroadcastTower color="#F59E0B" />,
    description:
      "Optimize live broadcasting workflows and digital operations with scalable automation.",
  },
  {
    title: "Media Security Architecture",
    icon: <MdSecurity color="#EF4444" />,
    description:
      "Strengthen platform security, content protection, and digital trust across media ecosystems.",
  },
];

const outcomes: string[] = [
  "Higher streaming engagement",
  "Improved audience retention",
  "Scalable media operations",
  "Faster global content delivery",
];

const capabilities: Capability[] = [
  { title: "OTT Platforms", icon: <FaVideo color="#06B6D4" /> },
  { title: "Media Analytics", icon: <FaChartLine color="#8B5CF6" /> },
  { title: "Cloud Streaming", icon: <FaCloud color="#2563EB" /> },
  { title: "Digital Entertainment", icon: <FaFilm color="#6366F1" /> },
  { title: "Media Security", icon: <FaLock color="#EF4444" /> },
  { title: "Live Broadcasting", icon: <FaBroadcastTower color="#F59E0B" /> },
  { title: "Global Distribution", icon: <FaGlobe color="#14B8A6" /> },
  { title: "Audience Platforms", icon: <FaUsers color="#3B82F6" /> },
  { title: "Media Infrastructure", icon: <FaDatabase color="#0EA5E9" /> },
  { title: "Mobile Entertainment", icon: <FaMobileAlt color="#DC2626" /> },
  { title: "Viewer Insights", icon: <MdTrendingUp color="#22C55E" /> },
  { title: "Digital Operations", icon: <FaCodeBranch color="#F97316" /> },
];

const insights: Insight[] = [
  {
    category: "Perspective",
    title: "Future of Streaming Platforms",
    description:
      "How entertainment companies are transforming digital experiences through intelligent streaming ecosystems.",
  },
  {
    category: "Point of View",
    title: "AI in Entertainment",
    description:
      "Using AI and analytics to personalize content experiences and improve viewer engagement.",
  },
  {
    category: "Executive Insight",
    title: "Scaling Global Media Delivery",
    description:
      "Why cloud-native infrastructure and real-time streaming are shaping the future of entertainment.",
  },
  {
    category: "Research",
    title: "Economics of Digital Entertainment",
    description:
      "Balancing audience growth, monetization, and operational efficiency in modern media ecosystems.",
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

export default function MediaEntertainmentPage() {
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
          backgroundImage: "url('/hero/bg20.png')",
        }}
      >
        <div className="hero-overlay" />

        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Media &amp; Entertainment</h1>

            <p className="hero-subheadline">
              Sri Yantra Tech helps media and entertainment companies modernize
              digital experiences, scale streaming ecosystems, and engage
              audiences globally.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div className="left-content">
            <p className="section-label">Industry Overview</p>

            <h2>Media &amp; Entertainment Industry Transformation</h2>

            <Image
              src="/hero/11.png"
              alt="Media Industry"
              className="industry-image"
              width={700}
              height={500}
              priority
              quality={90}
            />
          </div>

          <div className="text-stack">
            <p>
              Media and entertainment organizations are rapidly evolving as
              streaming, digital experiences, and audience expectations continue
              to reshape the industry.
            </p>

            <p>
              Companies need modern platforms, stronger content delivery, and
              connected entertainment ecosystems across channels.
            </p>

            <p>
              Sri Yantra Tech combines media expertise, digital engineering, and
              analytics-driven intelligence to enable scalable audience growth
              and engagement.
            </p>

            <p>
              Broadcasters, publishers, streaming providers, and entertainment
              brands can accelerate innovation and improve customer experiences
              globally.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Industry Challenges</p>

            <h2>Strategic priorities shaping media transformation</h2>
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
                  Consulting capabilities designed for media and entertainment
                  organizations
                </h2>

                <p className="solutions-intro">
                  Strategy, digital media expertise, and technology
                  modernization help entertainment companies scale audience
                  engagement and innovation.
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
              Tangible impact for modern media and entertainment organizations
            </h2>

            <div className="left-image">
              <Image
                src="/hero/12.png"
                alt="Media growth"
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
              <p className="section-label">Media Capabilities</p>

              <h2>
                Core domains supporting intelligent entertainment ecosystems
              </h2>

              <p className="capabilities-description">
                Media strategy, digital engineering, and operational
                modernization help entertainment businesses scale globally.
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

            <h2>How Entertainment Brands Scale</h2>
          </div>

          <div className="case-study-card">
            <p className="case-study-tag">
              Global Streaming Platform Transformation
            </p>

            <p className="case-study-description">
              A leading entertainment company modernized its streaming ecosystem
              and improved audience engagement across digital platforms.
            </p>

            <div className="stats-grid">
              <div className="stat-box">
                <h3>70%</h3>
                <p>Increase in streaming engagement</p>
              </div>

              <div className="stat-box">
                <h3>50%</h3>
                <p>Reduction in content delivery latency</p>
              </div>

              <div className="stat-box">
                <h3>12M+</h3>
                <p>Global viewers supported</p>
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
                Thought leadership for media and entertainment leaders
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
                Partner with Sri Yantra Tech to Accelerate Media Transformation
              </h2>

              <p>
                Work with experts to modernize entertainment platforms, optimize
                audience engagement, and scale connected digital media
                experiences.
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