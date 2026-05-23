"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBrain,
  FaRobot,
  FaComments,
  FaProjectDiagram,
  FaChartLine,
  FaShieldAlt,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaSearch,
  FaClipboardCheck,
  FaArrowRight,
  FaUsers,
  FaLock,
  FaNetworkWired,
  FaSlidersH,
  FaHeadset,
  FaBookOpen,
  FaFileSignature,
  FaServer,
  FaCalculator,
  FaChartBar,
  FaFileAlt,
  FaRegChartBar,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiOpenai,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiPython,
  SiNextdotjs,
  SiTypescript,
  SiLangchain,
} from "react-icons/si";
import "./page.css";

export default function AIAndAgenticSystemsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilityCards = [
    {
      title: "AI Agent Development",
      description:
        "Sri Yantra Tech designs and builds autonomous and semi-autonomous agents that execute multi-step business workflows with context, tools, and decision logic.",
      icon: <FaRobot />,
      iconClass: "ai-capability-icon-agent",
    },
    {
      title: "Conversational AI Systems",
      description:
        "Sri Yantra Tech creates enterprise assistants for customer support, operations enablement, internal knowledge access, and workflow interactions.",
      icon: <FaComments />,
      iconClass: "ai-capability-icon-conversation",
    },
    {
      title: "LLM Integration & Orchestration",
      description:
        "Sri Yantra Tech connects large language models with enterprise data, APIs, business rules, and orchestration layers for reliable execution.",
      icon: <FaProjectDiagram />,
      iconClass: "ai-capability-icon-llm",
    },
    {
      title: "Workflow Automation",
      description:
        "Sri Yantra Tech replaces fragmented manual processes with AI-assisted execution pipelines, approval routing, and intelligent operational workflows.",
      icon: <FaCogs />,
      iconClass: "ai-capability-icon-workflow",
    },
    {
      title: "Predictive Intelligence",
      description:
        "Sri Yantra Tech applies machine learning and intelligent reasoning systems for forecasting, anomaly detection, optimization, and decision acceleration.",
      icon: <FaChartLine />,
      iconClass: "ai-capability-icon-predictive",
    },
    {
      title: "Decision Support Systems",
      description:
        "Sri Yantra Tech delivers context-aware AI interfaces that help teams interpret information, evaluate options, and act with better operational clarity.",
      icon: <FaBrain />,
      iconClass: "ai-capability-icon-decision",
    },
    {
      title: "RAG & Knowledge Systems",
      description:
        "Sri Yantra Tech builds retrieval-enhanced AI systems grounded in enterprise content, governed data access, and trusted knowledge layers.",
      icon: <FaDatabase />,
      iconClass: "ai-capability-icon-rag",
    },
    {
      title: "AI Governance & Deployment",
      description:
        "Sri Yantra Tech engineers secure, observable, and production-ready AI systems with human oversight, governance controls, and operational guardrails.",
      icon: <FaShieldAlt />,
      iconClass: "ai-capability-icon-governance",
    },
  ];

  const challengePoints = [
    "AI pilots that never move beyond isolated experimentation",
    "Disconnected tools, data silos, and fragmented handoffs",
    "LLM usage without workflow design, oversight, or governance",
    "Automation that fails at exceptions and breaks under complexity",
    "Intelligence trapped inside dashboards instead of execution",
    "Operational teams without trusted, integrated AI support",
  ];

  const differentiators = [
    {
      title: "Architecture-First AI",
      description:
        "Sri Yantra Tech designs AI inside enterprise systems, workflows, and operating environments, not as isolated experiments.",
      icon: <FaNetworkWired />,
    },
    {
      title: "Agentic Workflow Design",
      description:
        "Sri Yantra Tech engineers multi-step reasoning, execution logic, approval paths, and tool usage across business functions.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Human + AI Collaboration",
      description:
        "Sri Yantra Tech creates systems with oversight, intervention points, explainability, and accountability where business risk requires it.",
      icon: <FaUsers />,
    },
    {
      title: "Enterprise Integration",
      description:
        "Sri Yantra Tech connects AI with CRMs, ERPs, APIs, cloud platforms, internal tools, and data systems to drive usable outcomes.",
      icon: <FaCloud />,
    },
    {
      title: "Scalable Deployment",
      description:
        "Sri Yantra Tech builds for reliability, observability, governance, security, and long-term production performance.",
      icon: <FaSlidersH />,
    },
  ];

  const operatingModel = [
    {
      step: "01",
      title: "Discovery",
      description:
        "Sri Yantra Tech identifies high-value workflows, operational friction, data readiness, and the right AI opportunities.",
      icon: <FaSearch />,
    },
    {
      step: "02",
      title: "Blueprint",
      description:
        "Sri Yantra Tech defines architecture, agent roles, model strategy, integrations, governance, and measurable success criteria.",
      icon: <FaProjectDiagram />,
    },
    {
      step: "03",
      title: "Build",
      description:
        "Sri Yantra Tech develops agents, orchestration logic, interfaces, knowledge layers, automation workflows, and supporting services.",
      icon: <FaCogs />,
    },
    {
      step: "04",
      title: "Deploy",
      description:
        "Sri Yantra Tech integrates AI into enterprise environments with security, controls, observability, testing, and rollout discipline.",
      icon: <FaCloud />,
    },
    {
      step: "05",
      title: "Optimize",
      description:
        "Sri Yantra Tech continuously improves outputs, workflow quality, adoption, accuracy, and operational value through feedback loops.",
      icon: <FaChartLine />,
    },
  ];

  const useCases = [
    {
      title: "Customer Support Automation",
      description:
        "Sri Yantra Tech builds AI agents and conversational systems that resolve requests, guide service workflows, and reduce support friction.",
      icon: <FaHeadset />,
    },
    {
      title: "Internal Knowledge Assistants",
      description:
        "Sri Yantra Tech creates retrieval-based assistants that help employees access policies, technical knowledge, documentation, and SOPs.",
      icon: <FaBookOpen />,
    },
    {
      title: "Sales & Proposal Workflows",
      description:
        "Sri Yantra Tech automates research, response drafting, qualification workflows, and proposal support across revenue teams.",
      icon: <FaFileSignature />,
    },
    {
      title: "IT & Operations Copilots",
      description:
        "Sri Yantra Tech develops intelligent assistants that support diagnostics, task resolution, service workflows, and operational execution.",
      icon: <FaServer />,
    },
    {
      title: "Finance Process Support",
      description:
        "Sri Yantra Tech improves document handling, approvals, exception management, reporting support, and process consistency.",
      icon: <FaCalculator />,
    },
    {
      title: "Analytics & Decision Intelligence",
      description:
        "Sri Yantra Tech enables teams with AI-guided interpretation, forecasting support, and faster access to relevant business insights.",
      icon: <FaChartBar />,
    },
    {
      title: "Document Processing & Routing",
      description:
        "Sri Yantra Tech classifies, extracts, validates, and routes business documents across systems and teams with workflow intelligence.",
      icon: <FaFileAlt />,
    },
    {
      title: "Executive Reporting Automation",
      description:
        "Sri Yantra Tech combines enterprise data, summarization, and insight generation to accelerate leadership reporting and visibility.",
      icon: <FaRegChartBar />,
    },
  ];

  const governancePoints = [
    {
      title: "Human-in-the-loop controls",
      description:
        "Sri Yantra Tech implements approval checkpoints, escalation paths, and review layers where confidence, compliance, or judgment matter.",
      icon: <FaUsers />,
    },
    {
      title: "Auditability & observability",
      description:
        "Sri Yantra Tech tracks prompts, tools, outputs, decisions, system behavior, and workflow performance with operational visibility.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Security-aware architecture",
      description:
        "Sri Yantra Tech designs role-based access, controlled data exposure, and enterprise deployment models aligned to security expectations.",
      icon: <FaLock />,
    },
    {
      title: "Guardrails & governance",
      description:
        "Sri Yantra Tech defines model usage boundaries, workflow rules, validation layers, and operational controls for responsible adoption.",
      icon: <FaShieldAlt />,
    },
  ];

  const ecosystem = [
    {
      name: "OpenAI",
      sub: "Foundation models",
      icon: <SiOpenai />,
      cardClass: "ecosystem-openai",
      iconClass: "ecosystem-icon-openai",
    },
    {
      name: "Google Cloud",
      sub: "Cloud AI infrastructure",
      icon: <SiGooglecloud />,
      cardClass: "ecosystem-gcloud",
      iconClass: "ecosystem-icon-gcloud",
    },
    {
      name: "LangChain",
      sub: "Agent orchestration",
      icon: <SiLangchain />,
      cardClass: "ecosystem-langchain",
      iconClass: "ecosystem-icon-langchain",
    },
    {
      name: "Docker",
      sub: "Containerized deployment",
      icon: <SiDocker />,
      cardClass: "ecosystem-docker",
      iconClass: "ecosystem-icon-docker",
    },
    {
      name: "Kubernetes",
      sub: "Scalable workloads",
      icon: <SiKubernetes />,
      cardClass: "ecosystem-kubernetes",
      iconClass: "ecosystem-icon-kubernetes",
    },
    {
      name: "Python",
      sub: "AI application layer",
      icon: <SiPython />,
      cardClass: "ecosystem-python",
      iconClass: "ecosystem-icon-python",
    },
    {
      name: "Next.js",
      sub: "Frontend delivery",
      icon: <SiNextdotjs />,
      cardClass: "ecosystem-nextjs",
      iconClass: "ecosystem-icon-nextjs",
    },
    {
      name: "TypeScript",
      sub: "Type-safe systems",
      icon: <SiTypescript />,
      cardClass: "ecosystem-typescript",
      iconClass: "ecosystem-icon-typescript",
    },
    {
      name: "PostgreSQL",
      sub: "Structured data",
      icon: <SiPostgresql />,
      cardClass: "ecosystem-postgresql",
      iconClass: "ecosystem-icon-postgresql",
    },
    {
      name: "MongoDB",
      sub: "Document workflows",
      icon: <SiMongodb />,
      cardClass: "ecosystem-mongodb",
      iconClass: "ecosystem-icon-mongodb",
    },
    {
      name: "Redis",
      sub: "Caching & sessions",
      icon: <SiRedis />,
      cardClass: "ecosystem-redis",
      iconClass: "ecosystem-icon-redis",
    },
    {
      name: "Kafka",
      sub: "Event streaming",
      icon: <SiApachekafka />,
      cardClass: "ecosystem-kafka",
      iconClass: "ecosystem-icon-kafka",
    },
  ];

  const heroHighlights = [
    {
      title: "Intelligent Agents",
      description:
        "Sri Yantra Tech builds multi-step systems that reason, act, and coordinate across tools and workflows.",
    },
    {
      title: "Workflow Orchestration",
      description:
        "Sri Yantra Tech integrates AI into business processes, not isolated behind standalone interfaces.",
    },
    {
      title: "Production-Ready AI",
      description:
        "Sri Yantra Tech delivers governed, observable, secure systems designed for enterprise deployment and scale.",
    },
  ];

  return (
    <main className="ai-page">
      <section className="ai-hero">
        <div className="ai-hero-overlay" />
        <div className="ai-hero-grid-lines" />

        <div className="ai-shell ai-hero-layout">
          <div className="ai-hero-copy">
            <h1 className="ai-hero-title">AI &amp; Agentic Systems</h1>

            <p className="ai-hero-text">
              Sri Yantra Tech designs AI-powered systems, intelligent agents,
              workflow automation layers, and LLM-integrated enterprise
              solutions that transform fragmented operations into coordinated,
              intelligent execution.
            </p>
          </div>

          <div className="ai-hero-panel">
            <div className="ai-panel-top">
              <div>
                <p className="ai-eyebrow ai-eyebrow-light">
                  Intelligent System Blueprint
                </p>

                <h2 className="ai-panel-title">
                  Enterprise AI structured across agents, workflows, models,
                  and governance layers
                </h2>
              </div>

              <span className="ai-panel-dot" />
            </div>

            <div className="ai-hero-card-grid">
              {heroHighlights.map((item) => (
                <article key={item.title} className="ai-hero-card">
                  <h3 className="ai-hero-card-title">{item.title}</h3>
                  <p className="ai-hero-card-text">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-section ai-challenge-section">
        <div className="ai-shell">
          <div className="ai-rail-layout">
            <div className="ai-left-rail">
              <div className="ai-sticky-box">
                <p className="ai-eyebrow">The Challenge</p>
                <h2 className="ai-section-title">
                  AI Is Valuable Only When It Operates Inside Real Systems
                </h2>
                <p className="ai-section-text">
                  Enterprise AI creates real value when it connects to
                  workflows, data, decisions, systems, and operating models.
                  Without that foundation, pilots remain isolated, automation
                  becomes brittle, and intelligence never reaches execution.
                </p>

                <div className="ai-rail-image-wrap">
                  <Image
                    src="/hero/16.png"
                    alt="Enterprise illustration showing disconnected systems and fragmented workflow paths before AI orchestration"
                    width={760}
                    height={420}
                    className="ai-rail-image"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    quality={75}
                  />
                </div>
              </div>
            </div>

            <div className="ai-right-stack">
              <div className="ai-challenge-card-grid">
                {challengePoints.map((point, index) => (
                  <article key={point} className="ai-challenge-card">
                    <div className="ai-challenge-card-top">
                      <span className="ai-challenge-index">0{index + 1}</span>
                      <span className="ai-challenge-icon">
                        <FaCheckCircle />
                      </span>
                    </div>
                    <p className="ai-challenge-card-text">{point}</p>
                  </article>
                ))}
              </div>

              <div className="ai-challenge-summary-card">
                <h3>Operational AI requires system-level design</h3>
                <p>
                  Sri Yantra Tech engineers AI systems that integrate with
                  business workflows, data platforms, and enterprise
                  architecture for measurable operational outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="ai-shell">
          <div className="ai-section-head ai-section-head-wide">
            <p className="ai-eyebrow">What We Deliver</p>
            <h2 className="ai-section-title">
              AI &amp; Agentic Capabilities Built for Enterprise Execution
            </h2>
            <p className="ai-section-text">
              Sri Yantra Tech builds practical AI systems that combine
              intelligent agents, model orchestration, enterprise integrations,
              automation design, and governance controls to support scalable
              business execution.
            </p>
          </div>

          <div className="ai-card-grid ai-card-grid-4 ai-mt-large">
            {capabilityCards.map((item) => (
              <article key={item.title} className="ai-card ai-card-hover">
                <div className={`ai-card-icon ${item.iconClass}`}>
                  {item.icon}
                </div>
                <h3 className="ai-card-title">{item.title}</h3>
                <p className="ai-card-text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section ai-section-muted">
        <div className="ai-shell">
          <div className="ai-section-head ai-section-head-wide">
            <p className="ai-eyebrow">Why It Works</p>
            <h2 className="ai-section-title">
              From AI Features to Intelligent Operating Systems
            </h2>
            <p className="ai-section-text">
              Sri Yantra Tech helps organizations move from disconnected AI
              features toward orchestrated intelligence systems that support
              real execution, oversight, and integration across the enterprise.
            </p>
          </div>

          <div className="ai-differentiator-grid ai-mt-large">
            {differentiators.map((item) => (
              <article key={item.title} className="ai-differentiator-card">
                <div className="ai-differentiator-icon">{item.icon}</div>
                <h3 className="ai-card-title">{item.title}</h3>
                <p className="ai-card-text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="ai-shell">
          <div className="ai-section-head ai-section-head-centered">
            <p className="ai-eyebrow">Operating Model</p>
            <h2 className="ai-section-title">
              Structured Delivery for AI That Reaches Production
            </h2>
            <p className="ai-section-text">
              Sri Yantra Tech&apos;s delivery model is designed to turn
              promising ideas into production-ready AI systems with strong
              architecture, measurable outcomes, and operational reliability.
            </p>
          </div>

          <div className="ai-operating-layout">
            <div className="ai-operating-flow">
              {operatingModel.map((item, index) => (
                <article key={item.step} className="ai-operating-card">
                  <div className="ai-operating-card-top">
                    <span className="ai-operating-step">{item.step}</span>
                    <span className="ai-operating-icon">{item.icon}</span>
                  </div>
                  <h3 className="ai-operating-title">{item.title}</h3>
                  <p className="ai-operating-text">{item.description}</p>

                  {index < operatingModel.length - 1 && (
                    <div className="ai-operating-arrow" aria-hidden="true">
                      <FaArrowRight />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-section ai-section-dark">
        <div className="ai-shell">
          <div className="ai-usecase-header">
            <div className="ai-section-head">
              <p className="ai-eyebrow ai-eyebrow-light">
                Use Cases / Business Impact
              </p>
              <h2 className="ai-section-title ai-section-title-light">
                Applied AI for High-Value Enterprise Workflows
              </h2>
              <p className="ai-section-text ai-section-text-light">
                We apply AI where workflows, knowledge, decisions, and execution
                can be materially improved through integrated, governed
                intelligent systems.
              </p>
            </div>

            <div className="ai-usecase-image">
              <Image
                src="/hero/17.png"
                alt="Enterprise AI dashboard showing workflow automation, insights, and intelligent agent activity"
                width={860}
                height={360}
                className="ai-usecase-image-file"
                sizes="(max-width: 1024px) 100vw, 48vw"
                quality={75}
              />
            </div>
          </div>

          <div className="ai-card-grid ai-card-grid-4">
            {useCases.map((item) => (
              <article key={item.title} className="ai-usecase-card">
                <div className="ai-usecase-icon">{item.icon}</div>
                <h3 className="ai-usecase-title">{item.title}</h3>
                <p className="ai-usecase-text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="ai-shell">
          <div className="ai-section-head ai-section-head-wide">
            <p className="ai-eyebrow">Trust &amp; Governance</p>
            <h2 className="ai-section-title">
              Designed for Responsible Enterprise Adoption
            </h2>
            <p className="ai-section-text">
              Responsible AI adoption requires more than model access. Sri
              Yantra Tech designs systems that support visibility, control,
              security, governance, and operational trust at every stage.
            </p>
          </div>

          <div className="ai-governance-grid ai-mt-large">
            {governancePoints.map((item) => (
              <article key={item.title} className="ai-governance-card">
                <div className="ai-governance-icon">{item.icon}</div>
                <div>
                  <h3 className="ai-governance-title">{item.title}</h3>
                  <p className="ai-governance-text">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section ai-section-soft">
        <div className="ai-shell">
          <div className="ai-section-head ai-section-head-centered">
            <p className="ai-eyebrow">Integration Ecosystem</p>
            <h2 className="ai-section-title">
              Built to Integrate Across Your Existing Ecosystem
            </h2>
            <p className="ai-section-text">
              Sri Yantra Tech engineers AI systems that connect across cloud
              platforms, model layers, data environments, knowledge systems,
              APIs, and enterprise tooling without creating operational
              fragmentation.
            </p>
          </div>

          <div className="ai-ecosystem-grid ai-mt-large">
            {ecosystem.map((item) => (
              <div
                key={item.name}
                className={`ai-ecosystem-chip ${item.cardClass}`}
              >
                <div className="ai-ecosystem-chip-glow" />
                <span className={`ai-ecosystem-icon ${item.iconClass}`}>
                  {item.icon}
                </span>
                <div className="ai-ecosystem-content">
                  <span className="ai-ecosystem-label">{item.name}</span>
                  <span className="ai-ecosystem-sub">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-cta-wrap">
        <div className="ai-shell">
          <div className="ai-cta">
            <div className="ai-cta-copy">
              <p className="ai-cta-eyebrow">Build AI Beyond the Demo</p>
              <h2 className="ai-cta-title">
                Build AI Systems That Work Beyond the Demo
              </h2>
              <p className="ai-cta-text">
                Partner with Sri Yantra Tech to engineer intelligent agents,
                conversational platforms, workflow automation, and predictive
                systems that fit real enterprise environments.
              </p>
            </div>

            <div className="ai-cta-actions">
              <Link href="/marketing/contact" className="ai-btn ai-btn-white">
                Start the Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}