"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
  FaMobileAlt,
  FaCodeBranch,
  FaCubes,
  FaFigma,
  FaGithub,
  FaAndroid,
  FaApple,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiAngular,
  SiVuedotjs,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiPython,
  SiDotnet,
  SiGraphql,
//   SiMicrosoftazure,
  SiGooglecloud,
  SiKubernetes,
  SiTerraform,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
//   SiPowerbi,
//   SiTableau,
  SiApachekafka,
} from "react-icons/si";
import "./page.css";

export default function ProductEngineeringPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const engineeringCards = [
    {
      title: "Product Architecture Design",
      description:
        "Designing scalable, modular, and future-ready system architectures.",
    },
    {
      title: "Product Development",
      description:
        "Engineering enterprise-grade digital products from concept to launch with strong technical foundations and roadmap alignment.",
    },
    {
      title: "App Development",
      description:
        "Building responsive web applications and mobile apps with modern frameworks, strong usability, and scalable delivery practices.",
    },
    {
      title: "MVP & Platform Development",
      description:
        "Rapid development of high-quality MVPs and scalable platforms.",
    },
    {
      title: "SaaS Engineering",
      description:
        "Multi-tenant, cloud-native SaaS product development.",
    },
    {
      title: "API & Microservices",
      description:
        "Distributed systems using API-first and microservices architecture.",
    },
    {
      title: "DevOps & CI/CD",
      description:
        "Automated pipelines, faster releases, and reliable deployments.",
    },
    {
      title: "Performance Engineering",
      description:
        "Systems optimized for speed, scale, and reliability.",
    },
  ];

  const approachPoints = [
    {
      step: "01",
      title: "Architect with clarity",
      description:
        "We shape product structure, define boundaries, and establish scalable technical foundations before development begins.",
    },
    {
      step: "02",
      title: "Engineer with discipline",
      description:
        "We build web platforms, applications, and product systems using modern frameworks, reusable patterns, and delivery rigor.",
    },
    {
      step: "03",
      title: "Optimize continuously",
      description:
        "We improve speed, reliability, release quality, and platform resilience through measurement, refinement, and engineering feedback loops.",
    },
  ];

  const techStacks = [
    { name: "React", icon: <FaReact />, tileClass: "tile-react", iconClass: "brand-react" },
    { name: "Next.js", icon: <SiNextdotjs />, tileClass: "tile-next", iconClass: "brand-next" },
    { name: "TypeScript", icon: <SiTypescript />, tileClass: "tile-typescript", iconClass: "brand-typescript" },
    { name: "JavaScript", icon: <SiJavascript />, tileClass: "tile-javascript", iconClass: "brand-javascript" },
    { name: "HTML5", icon: <SiHtml5 />, tileClass: "tile-html", iconClass: "brand-html" },
    { name: "CSS3", icon: <SiCss />, tileClass: "tile-css", iconClass: "brand-css" },
    { name: "Tailwind", icon: <SiTailwindcss />, tileClass: "tile-tailwind", iconClass: "brand-tailwind" },
    { name: "Angular", icon: <SiAngular />, tileClass: "tile-angular", iconClass: "brand-angular" },
    { name: "Vue.js", icon: <SiVuedotjs />, tileClass: "tile-vue", iconClass: "brand-vue" },
    { name: "Flutter", icon: <SiFlutter />, tileClass: "tile-flutter", iconClass: "brand-flutter" },
    { name: "React Native", icon: <FaMobileAlt />, tileClass: "tile-react-native", iconClass: "brand-react-native" },
    { name: "Kotlin", icon: <SiKotlin />, tileClass: "tile-kotlin", iconClass: "brand-kotlin" },
    { name: "Swift", icon: <SiSwift />, tileClass: "tile-swift", iconClass: "brand-swift" },
    { name: "Android", icon: <FaAndroid />, tileClass: "tile-android", iconClass: "brand-android" },
    { name: "iOS", icon: <FaApple />, tileClass: "tile-ios", iconClass: "brand-ios" },
    { name: "Node.js", icon: <FaNodeJs />, tileClass: "tile-node", iconClass: "brand-node" },
    { name: "Java", icon: <FaJava />, tileClass: "tile-java", iconClass: "brand-java" },
    { name: "Python", icon: <SiPython />, tileClass: "tile-python", iconClass: "brand-python" },
    { name: ".NET", icon: <SiDotnet />, tileClass: "tile-dotnet", iconClass: "brand-dotnet" },
    { name: "GraphQL", icon: <SiGraphql />, tileClass: "tile-graphql", iconClass: "brand-graphql" },
    { name: "AWS", icon: <FaAws />, tileClass: "tile-aws", iconClass: "brand-aws" },
    // { name: "Azure", icon: <SiMicrosoftazure />, tileClass: "tile-azure", iconClass: "brand-azure" },
    { name: "GCP", icon: <SiGooglecloud />, tileClass: "tile-gcp", iconClass: "brand-gcp" },
    { name: "Docker", icon: <FaDocker />, tileClass: "tile-docker", iconClass: "brand-docker" },
    { name: "Kubernetes", icon: <SiKubernetes />, tileClass: "tile-kubernetes", iconClass: "brand-kubernetes" },
    { name: "GitHub", icon: <FaGithub />, tileClass: "tile-github", iconClass: "brand-github" },
    { name: "Terraform", icon: <SiTerraform />, tileClass: "tile-terraform", iconClass: "brand-terraform" },
    { name: "PostgreSQL", icon: <SiPostgresql />, tileClass: "tile-postgresql", iconClass: "brand-postgresql" },
    { name: "MongoDB", icon: <SiMongodb />, tileClass: "tile-mongodb", iconClass: "brand-mongodb" },
    { name: "Redis", icon: <SiRedis />, tileClass: "tile-redis", iconClass: "brand-redis" },
    { name: "Firebase", icon: <SiFirebase />, tileClass: "tile-firebase", iconClass: "brand-firebase" },
    // { name: "Power BI", icon: <SiPowerbi />, tileClass: "tile-powerbi", iconClass: "brand-powerbi" },
    // { name: "Tableau", icon: <SiTableau />, tileClass: "tile-tableau", iconClass: "brand-tableau" },
    { name: "Kafka", icon: <SiApachekafka />, tileClass: "tile-kafka", iconClass: "brand-kafka" },
  ];

  const foundationCards = [
    {
      title: "Frontend",
      icon: <FaReact />,
      iconClass: "foundation-frontend",
      description:
        "React, Next.js, modern UI systems, responsive experiences, and scalable interface architecture.",
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      iconClass: "foundation-backend",
      description:
        "Node.js, Java, Python, APIs, business logic layers, and distributed services engineering.",
    },
    {
      title: "Cloud",
      icon: <FaAws />,
      iconClass: "foundation-cloud",
      description:
        "AWS, Azure, GCP, resilient environments, observability, and infrastructure readiness.",
    },
    {
      title: "DevOps",
      icon: <FaCodeBranch />,
      iconClass: "foundation-devops",
      description:
        "Docker, Kubernetes, CI/CD tools, release automation, and deployment consistency.",
    },
    {
      title: "Data",
      icon: <FaDatabase />,
      iconClass: "foundation-data",
      description:
        "Modern data stack integration supporting analytics, intelligence, and system interoperability.",
    },
  ];

  const operatingModel = [
    "Strategy",
    "Architecture",
    "Development",
    "Deployment",
    "Optimization",
  ];

  const outcomes = [
    "Scalable SaaS Platforms",
    "Enterprise Digital Products",
    "High-performance Applications",
    "Platform Modernization",
    "Cloud Migration",
  ];

  const heroCards = [
    {
      title: "Architecture-Led",
      description:
        "Product systems engineered with long-term scalability, maintainability, and integration in mind.",
    },
    {
      title: "Cloud-Native",
      description:
        "Modern platforms built for flexibility, resilience, and high-performance delivery environments.",
    },
    {
      title: "Enterprise-Ready",
      description:
        "Digital systems aligned with structured engineering, governance, and operational maturity.",
    },
  ];

  const marqueeItems = [...techStacks, ...techStacks];

  return (
    <main className="product-page">
      <section className="product-hero">
        <div className="product-hero-overlay" />
        <div className="product-hero-grid-lines" />

        <div className="product-shell product-hero-layout">
          <div className="product-hero-copy">
            {/* <p className="product-eyebrow product-eyebrow-light">
              Product &amp; Digital Engineering
            </p> */}

            <h1 className="product-hero-title">
              Product &amp; Digital Engineering
            </h1>

            <p className="product-hero-text">
              We design and build high-performance digital products, SaaS
              platforms, enterprise applications, and cloud-native systems using
              modern architectures and engineering excellence.
            </p>

            {/* <div className="product-hero-actions">
              <Link href="/contact" className="product-btn product-btn-primary">
                Build Your Product
              </Link>

              <Link
                href="/contact"
                className="product-btn product-btn-secondary"
              >
                Talk to an Architect
              </Link>
            </div> */}
          </div>

          <div className="product-hero-panel">
            <div className="product-panel-top">
              <div>
                <p className="product-eyebrow product-eyebrow-light">
                  Digital System Blueprint
                </p>

                <h2 className="product-panel-title">
                  Enterprise engineering structured across product, platform,
                  cloud, and delivery layers
                </h2>
              </div>

              <span className="product-panel-dot" />
            </div>

            <div className="product-system-visual">
              <div className="product-system-node product-node-a">
                Product Layer
              </div>
              <div className="product-system-node product-node-b">
                API Layer
              </div>
              <div className="product-system-node product-node-c">
                Cloud Layer
              </div>
              <div className="product-system-node product-node-d">
                Delivery Layer
              </div>

              <span className="product-system-line product-line-1" />
              <span className="product-system-line product-line-2" />
              <span className="product-system-line product-line-3" />
              <span className="product-system-line product-line-4" />
            </div>

            <div className="product-hero-card-grid">
              {heroCards.map((item) => (
                <article key={item.title} className="product-hero-card">
                  <h3 className="product-hero-card-title">{item.title}</h3>
                  <p className="product-hero-card-text">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      <section className="product-section">
  <div className="product-shell">

    {/* HEADER WITH IMAGE */}
    <div className="product-deliver-header">

      {/* LEFT CONTENT */}
      <div className="product-section-head">
        <p className="product-eyebrow">What We Engineer</p>

        <h2 className="product-section-title">
          End-to-End Product Engineering
        </h2>

        <p className="product-section-text">
          We engineer digital products across architecture, product
          development, app development, platform design, integration,
          DevOps, and performance optimization with a focus on long-term
          enterprise value.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="product-deliver-image">
        <img
          src="/hero/15.png"
          alt="Product Engineering"
        />
      </div>

    </div>

    {/* CARDS */}
    <div className="product-card-grid product-card-grid-4">
      {engineeringCards.map((item) => (
        <article
          key={item.title}
          className="product-card product-card-hover"
        >
          <div className="product-card-bar" />
          <h3 className="product-card-title">{item.title}</h3>
          <p className="product-card-text">{item.description}</p>
        </article>
      ))}
    </div>

  </div>
</section>

      <section className="product-section product-section-muted">
        <div className="product-shell">
          <div className="product-approach-head">
            <div className="product-section-head product-section-head-wide">
              <p className="product-eyebrow">Engineering Approach</p>

              <h2 className="product-section-title">
                Architecture-First Engineering
              </h2>

              <p className="product-section-text">
                We don&apos;t just build applications. We engineer systems
                designed for scale, performance, and long-term evolution.
              </p>
            </div>
          </div>

          <div className="product-approach-layout-enhanced">
            <div className="product-approach-timeline">
              {approachPoints.map((item) => (
                <article key={item.step} className="product-approach-card">
                  <div className="product-approach-card-top">
                    <span className="product-approach-step">{item.step}</span>
                    {/* <span className="product-approach-badge">Methodology</span> */}
                  </div>

                  <h3 className="product-approach-title">{item.title}</h3>
                  <p className="product-approach-text">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="product-approach-visual-panel">
              <div className="product-architecture-diagram">
                <div className="product-architecture-layer product-layer-strong">
                  <span className="product-layer-label">Experience Layer</span>
                  <span className="product-layer-subtext">
                    Web platforms, applications, interfaces
                  </span>
                </div>
                <div className="product-architecture-layer">
                  <span className="product-layer-label">
                    Application Layer
                  </span>
                  <span className="product-layer-subtext">
                    Product logic, workflows, modular services
                  </span>
                </div>
                <div className="product-architecture-layer">
                  <span className="product-layer-label">
                    API &amp; Services Layer
                  </span>
                  <span className="product-layer-subtext">
                    Integrations, orchestration, microservices
                  </span>
                </div>
                <div className="product-architecture-layer">
                  <span className="product-layer-label">
                    Cloud &amp; Infrastructure Layer
                  </span>
                  <span className="product-layer-subtext">
                    Delivery, observability, scaling foundations
                  </span>
                </div>
              </div>

              <div className="product-approach-summary">
                <div className="product-summary-item">
                  <FaCubes />
                  <span>Modular system design</span>
                </div>
                <div className="product-summary-item">
                  <FaMobileAlt />
                  <span>Web &amp; app development</span>
                </div>
                <div className="product-summary-item">
                  <FaCodeBranch />
                  <span>API-driven architecture</span>
                </div>
                <div className="product-summary-item">
                  <FaFigma />
                  <span>Experience-led delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-shell">
          <div className="product-section-head product-section-head-wide">
            <p className="product-eyebrow">Technology Foundation</p>

            <h2 className="product-section-title">
              Built on Modern Technology Stacks
            </h2>

            <p className="product-section-text">
              Our engineering teams work across frontend, backend, cloud,
              DevOps, and data systems to create scalable platforms engineered
              for maintainability, reliability, and business growth.
            </p>
          </div>

          <div className="product-card-grid product-card-grid-5">
            {foundationCards.map((item) => (
              <article key={item.title} className="product-tech-card">
                <div
                  className={`product-tech-icon ${item.iconClass}`}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3 className="product-card-title">{item.title}</h3>
                <p className="product-card-text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section product-section-dark">
        <div className="product-shell">
          <div className="product-section-head product-section-head-centered">
            <p className="product-eyebrow product-eyebrow-light">
              Operating Model
            </p>

            <h2 className="product-section-title product-section-title-light">
              Structured Engineering Execution
            </h2>

            <p className="product-section-text product-section-text-light">
              Every product is built using a structured, scalable engineering
              lifecycle.
            </p>
          </div>

          <div className="product-operating-flow">
            {operatingModel.map((item, index) => (
              <div key={item} className="product-flow-item">
                <div className="product-flow-card">
                  <span className="product-flow-number">0{index + 1}</span>
                  <h3 className="product-flow-title">{item}</h3>
                </div>

                {index < operatingModel.length - 1 && (
                  <div className="product-flow-arrow" aria-hidden="true">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-shell">
          <div className="product-section-head">
            <p className="product-eyebrow">Use Cases / Outcomes</p>

            <h2 className="product-section-title">What We Enable</h2>

            <p className="product-section-text">
              We help organizations launch stronger products, modernize digital
              platforms, improve application performance, and strengthen cloud
              and platform readiness.
            </p>
          </div>

          <div className="product-card-grid product-card-grid-5">
            {outcomes.map((item, index) => (
              <article key={item} className="product-outcome-card">
                <span className="product-outcome-number">0{index + 1}</span>
                <h3 className="product-card-title-1">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
<section className="product-marquee-section">
        <div className="product-shell">
          <div className="product-marquee-head">
            <p className="product-eyebrow">
              Technologies, Platforms &amp; Engineering Tools
            </p>
            <h2 className="product-section-title product-section-title-sm product-section-title-light">
              Engineering Stack, Platforms & Tools
            </h2>
          </div>
        </div>

        <div className="product-marquee-wrap">
          <div className="product-marquee-track">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="product-marquee-item"
              >
                <span
                  className={`product-marquee-icon ${item.tileClass}`}
                  aria-hidden="true"
                >
                  <span className={item.iconClass}>{item.icon}</span>
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-cta-wrap">
        <div className="product-shell">
          <div className="product-cta">
            <div className="product-cta-copy">
              <p className="product-cta-eyebrow">Build Products That Scale</p>

              <h2 className="product-cta-title">
                From idea to scalable platform — we engineer systems built for
                performance and growth
              </h2>

              <p className="product-cta-text">
                Partner with Sri Yantra Tech to design, build, and optimize
                digital products with enterprise-grade architecture and
                engineering depth.
              </p>
            </div>

            <div className="product-cta-action">
              <Link href="/contact" className="product-btn product-btn-white">
                Start Your Product Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}