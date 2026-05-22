"use client";

import "./page.css";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Cloud,
  Boxes,
  BarChart3,
  Rocket,
  Workflow,
  Layers,
  ShieldCheck,
  Database,
  Activity,
  Settings2,
  Brain,
  Zap,
  User,
  Car,
  Monitor,
  Factory,
  Landmark,
  ShoppingCart,
  Clapperboard,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

type Slide = {
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
};

type Capability = {
  title: string;
  image: string;
  href?: string;
  points: { text: string; icon: LucideIcon }[];
};

type Industry = {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
  image: string;
  href: string;
};

type WhyFeature = {
  title: string;
  description: string;
  image: string;
};

type WhyPrinciple = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    title: "Engineering Intelligent Digital Experiences",
    description:
      "Sri Yantra Tech helps enterprises modernize operations through cloud-native engineering, AI systems, enterprise platforms, and scalable digital transformation.",
    desktopImage: "/hero/bg13.png",
    mobileImage: "/hero/13.png",
  },
  {
    title: "Building AI & Agentic Systems for Modern Enterprises",
    description:
      "Sri Yantra Tech designs intelligent platforms, automation ecosystems, and enterprise AI solutions that accelerate innovation and operational efficiency.",
    desktopImage: "/hero/bg14.png",
    mobileImage: "/hero/14.png",
  },
  {
    title: "Accelerating Manufacturing & Mobility Transformation",
    description:
      "Sri Yantra Tech empowers industries with connected systems, industrial automation, mobility engineering, and advanced analytics solutions.",
    desktopImage: "/hero/bg13.png",
    mobileImage: "/hero/24.png",
  },
  {
    title: "Modern Technology Consulting for Scalable Growth",
    description:
      "Sri Yantra Tech supports organizations with product engineering, data modernization, enterprise platforms, and strategic technology consulting.",
    desktopImage: "/hero/bg13.png",
    mobileImage: "/hero/bg13.png",
  },
];

const capabilities: Capability[] = [
  {
    title: "Strategic Technology Consulting",
    image: "/hero/14.png",
    href: "/marketing/services/strategic",
    points: [
      { text: "Enterprise Modernization", icon: Rocket },
      { text: "Digital Transformation Strategy", icon: Workflow },
      { text: "Cloud Migration Roadmaps", icon: Cloud },
      { text: "Architecture Advisory", icon: ShieldCheck },
    ],
  },
  {
    title: "Product & Digital Engineering",
    image: "/hero/15.png",
    href: "/marketing/services/product",
    points: [
      { text: "SaaS Platforms", icon: Layers },
      { text: "Enterprise Applications", icon: Boxes },
      { text: "UX Engineering", icon: Settings2 },
      { text: "Full-Stack Development", icon: Cpu },
    ],
  },
  {
    title: "AI & Agentic Systems",
    image: "/hero/16.png",
     href: "/marketing/services/Ai-Agentic",
    points: [
      { text: "GenAI Integration", icon: Brain },
      { text: "AI Agents & Automation", icon: Cpu },
      { text: "Workflow Intelligence", icon: Activity },
      { text: "Decision Systems", icon: Settings2 },
    ],
  },
  {
    title: "Data & Analytics Engineering",
    image: "/hero/17.png",
    href: "/marketing/services/Data",
    points: [
      { text: "Data Pipelines", icon: Database },
      { text: "Real-time Analytics", icon: Activity },
      { text: "BI Platforms", icon: BarChart3 },
      { text: "Data Modernization", icon: Cloud },
    ],
  },
];

const industries: Industry[] = [
  {
    id: 1,
    title: "Automotive & Mobility",
    icon: Car,
    description:
      "Empowering the future of mobility with connected solutions, EV ecosystems, telematics, and intelligent transportation systems.",
    image: "/hero/bg15.png",
    href: "/automotive-mobility",
  },
  {
    id: 2,
    title: "Technology & SaaS",
    icon: Monitor,
    description:
      "Building scalable cloud-native applications, SaaS platforms, AI-driven systems, and digital infrastructure.",
    image: "/hero/16.png",
    href: "/technology-saas",
  },
  {
    id: 3,
    title: "Manufacturing & Industrial Operations",
    icon: Factory,
    description:
      "Optimizing industrial workflows with automation, predictive maintenance, and real-time analytics.",
   image: "/hero/1.png",
    href: "/manufacturing-industrial-operations",
  },
  {
    id: 4,
    title: "Banking & Financial Services",
    icon: Landmark,
    description:
      "Delivering secure and compliant fintech experiences with scalable banking platforms and automation.",
   image: "/hero/bg18.jpg",
    href: "/banking-financial-services",
  },
  {
    id: 5,
    title: "Retail & E-Commerce",
    icon: ShoppingCart,
    description:
      "Creating personalized omnichannel commerce experiences with scalable retail platforms.",
   image: "/hero/9.png",
    href: "/retail-ecommerce",
  },
  {
    id: 6,
    title: "Media & Entertainment",
    icon: Clapperboard,
    description:
      "Building engaging digital media platforms, streaming ecosystems, and audience analytics systems.",
    image: "/hero/11.png",
    href: "/media-entertainment",
  },
];

const highlightCards = [
  {
    title: "AI & Intelligent Systems",
    icon: Cpu,
    desc: "AI platforms, automation ecosystems, GenAI workflows.",
    image: "/hero/h1.png",
  },
  {
    title: "Cloud & Platform Engineering",
    icon: Cloud,
    desc: "Kubernetes, DevOps, scalable architectures.",
    image: "/hero/h2.png",
  },
  {
    title: "Digital Product Engineering",
    icon: Boxes,
    desc: "SaaS, enterprise apps, connected ecosystems.",
    image: "/hero/h3.png",
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    desc: "BI, real-time analytics, data modernization.",
    image: "/hero/h4.png",
  },
];

const whyFeatures: WhyFeature[] = [
  {
    title: "Product-Driven Engineering",
    description:
      "We build solutions that are intuitive, impactful, and designed around real user needs.",
    image: "/hero/h1.png",
  },
  {
    title: "Modern Technology Stack",
    description:
      "Leveraging cloud-native, AI-powered, and modern frameworks to build future-ready products.",
    image: "/hero/h2.png",
  },
  {
    title: "Scalable Architecture",
    description:
      "Our solutions are architected for performance, security, and long-term scalability.",
    image: "/hero/h3.png",
  },
  {
    title: "Innovation-Focused Mindset",
    description:
      "We blend creativity, strategy, and engineering excellence to solve meaningful problems.",
    image: "/hero/h4.png",
  },
];

const whyPrinciples: WhyPrinciple[] = [
  {
    icon: Zap,
    title: "Speed & Performance",
    description: "Fast, optimized and reliable solutions that scale.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description: "Enterprise-grade security in everything we build.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description: "Building adaptable systems for tomorrow's challenges.",
  },
  {
    icon: User,
    title: "User Experience Focused",
    description: "Intuitive, accessible and impactful digital experiences.",
  },
];

const videoTitles = [
  "Experience the Future",
  "Intelligent Engineering",
  "Scalable Digital Transformation",
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const stickySectionRef = useRef<HTMLDivElement | null>(null);
  const stickyRailRef = useRef<HTMLDivElement | null>(null);
  const stickyBoxRef = useRef<HTMLDivElement | null>(null);
  const [stickyMode, setStickyMode] = useState<"normal" | "fixed" | "bottom">(
    "normal"
  );
  const [stickyBoxStyle, setStickyBoxStyle] = useState<CSSProperties>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const section = stickySectionRef.current;
      const rail = stickyRailRef.current;
      const box = stickyBoxRef.current;

      if (!section || !rail || !box) return;

      if (window.innerWidth <= 1200) {
        setStickyMode("normal");
        setStickyBoxStyle(undefined);
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const railRect = rail.getBoundingClientRect();
      const boxHeight = box.offsetHeight;
      const topOffset = 110;

      const shouldFix = sectionRect.top <= topOffset;
      const shouldStop = sectionRect.bottom <= topOffset + boxHeight;

      if (!shouldFix) {
        setStickyMode("normal");
        setStickyBoxStyle(undefined);
      } else if (!shouldStop) {
        setStickyMode("fixed");
        setStickyBoxStyle({
          left: railRect.left,
          width: railRect.width,
          maxWidth: railRect.width,
        });
      } else {
        setStickyMode("bottom");
        setStickyBoxStyle(undefined);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <main className={`${inter.className} hp7-root`}>
      <section className="hp7-a1">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hp7-a2 ${index === currentSlide ? "hp7-on" : ""}`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.desktopImage}
              alt={slide.title}
              fill
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              quality={72}
              sizes="100vw"
              className="hp7-a3 hp7-desk"
            />
            <Image
              src={slide.mobileImage}
              alt={slide.title}
              fill
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              quality={72}
              sizes="100vw"
              className="hp7-a3 hp7-mob"
            />
          </div>
        ))}

        <div className="hp7-a4" />

        <div className="hp7-wrap hp7-a5">
          <div className="hp7-a6">
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].description}</p>

            <div className="hp7-a7">
              <button className="hp7-btn1">Explore Capabilities</button>
              <button className="hp7-btn2">Explore Industries</button>
            </div>
          </div>
        </div>

        <div className="hp7-a8">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hp7-a9 ${currentSlide === index ? "hp7-on" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section ref={stickySectionRef} className="hp7-b1">
        <div className="hp7-wrap hp7-b2">
          <div ref={stickyRailRef} className="hp7-b3">
            <div
              ref={stickyBoxRef}
              className={`hp7-b4 hp7-${stickyMode}`}
              style={stickyBoxStyle}
            >
              <span className="hp7-label">Strategic Technology Partner</span>
              <h2>
                Driving Enterprise Innovation Through Scalable Digital
                Engineering
              </h2>
              <p>
                Sri Yantra Tech helps enterprises modernize platforms,
                accelerate AI adoption, build cloud-native systems, and
                transform operations with scalable engineering solutions.
              </p>
            </div>
          </div>

          <div className="hp7-b5">
            {highlightCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div key={card.title} className="hp7-b6">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    quality={70}
                    sizes="(max-width: 991px) 100vw, (max-width: 1200px) 50vw, 340px"
                    className="hp7-img-cover"
                  />
                  <div className="hp7-b9" />

                  <div className="hp7-b7">
                    <div className="hp7-b8">
                      <span>0{index + 1}</span>
                      <Icon size={28} />
                    </div>

                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="hp7-c1">
        <div className="hp7-wrap">
          <div className="hp7-c2">
            <span className="hp7-label hp7-dark">Capabilities</span>
            <h2>Explore Capabilities</h2>
            <p>
              Sri Yantra Tech delivers end-to-end digital engineering across AI,
              cloud, data, and product development.
            </p>
          </div>

          <div className="hp7-c3">
            {capabilities.map((capability) => {
              const content = (
                <>
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    quality={70}
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="hp7-img-cover"
                  />
                  <div className="hp7-c4" />

                  <div className="hp7-c5">
                    <div className="hp7-c6">{capability.title}</div>

                    <div className="hp7-c7">
                      {capability.points.map((point) => {
                        const Icon = point.icon;

                        return (
                          <div key={point.text} className="hp7-c8">
                            <span>
                              <Icon size={18} strokeWidth={2.2} />
                            </span>
                            <span>{point.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              );

              return capability.href ? (
                <Link
                  key={capability.title}
                  href={capability.href}
                  className="hp7-card"
                >
                  {content}
                </Link>
              ) : (
                <div key={capability.title} className="hp7-card">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FullWidthVideoSection />

      <IndustriesSection />

      <WhySriyantraTech />

      <CTASection />
    </main>
  );
}

function FullWidthVideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [canLoadVideo, setCanLoadVideo] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCanLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev === videoTitles.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeTitle = videoTitles[titleIndex];

  return (
    <section ref={sectionRef} className="hp7-v1">
      {canLoadVideo && (
        <video
          className="hp7-v2"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero/v1.mp4" type="video/mp4" />
        </video>
      )}

      <div className="hp7-v3" />

      <div className="hp7-v4">
        <h2 key={activeTitle} className="hp7-v5" data-text={activeTitle}>
          {activeTitle}
        </h2>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  const selectIndustry = useCallback(
    (industry: Industry, shouldScroll = false) => {
      setActiveIndustry(industry);

      if (!shouldScroll) return;

      requestAnimationFrame(() => {
        if (window.matchMedia("(max-width: 1200px)").matches) {
          previewRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    },
    []
  );

  return (
    <section className="hp7-i1">
      <div className="hp7-wrap hp7-i2">
        <div className="hp7-i3">
          <span className="hp7-label">Industries</span>
          <h2>Explore Industries</h2>
          <p>
            Sri Yantra Tech partners with sector leaders to build intelligent
            systems, connected platforms, and scalable digital operations.
          </p>
        </div>

        <div className="hp7-i4">
          <div className="hp7-i5">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <button
                  key={industry.id}
                  type="button"
                  className={`hp7-i6 ${
                    activeIndustry.id === industry.id ? "hp7-on" : ""
                  }`}
                  onMouseEnter={() => selectIndustry(industry)}
                  onFocus={() => selectIndustry(industry)}
                  onClick={() => selectIndustry(industry, true)}
                >
                  <span className="hp7-i7">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  <span className="hp7-i8">{industry.title}</span>
                  <ArrowRight size={17} className="hp7-i9" />
                </button>
              );
            })}
          </div>

          <div ref={previewRef} className="hp7-i10">
            <Link href={activeIndustry.href} className="hp7-i11">
              <Image
                src={activeIndustry.image}
                alt={activeIndustry.title}
                fill
                quality={72}
                sizes="(max-width: 1200px) 100vw, 55vw"
                className="hp7-img-cover"
                priority={false}
              />
              <div className="hp7-i12" />
              <div className="hp7-i13">
                <h3>{activeIndustry.title}</h3>
                <p>{activeIndustry.description}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySriyantraTech() {
  const whySectionRef = useRef<HTMLDivElement | null>(null);
  const whyBoxRef = useRef<HTMLDivElement | null>(null);
  const [whyMode, setWhyMode] = useState<"normal" | "fixed" | "bottom">(
    "normal"
  );

  useEffect(() => {
    const handleScroll = () => {
      const section = whySectionRef.current;
      const box = whyBoxRef.current;

      if (!section || !box) return;

      if (window.innerWidth <= 1200) {
        setWhyMode("normal");
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const boxHeight = box.offsetHeight;
      const topOffset = 110;

      const shouldFix = sectionRect.top <= topOffset;
      const shouldStop = sectionRect.bottom <= topOffset + boxHeight;

      if (!shouldFix) {
        setWhyMode("normal");
      } else if (!shouldStop) {
        setWhyMode("fixed");
      } else {
        setWhyMode("bottom");
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
    <section className="why-section">
      <div className="why-container">
        <div ref={whySectionRef} className="why-grid">
          <div className="why-left-rail">
            <div ref={whyBoxRef} className={`why-left why-${whyMode}`}>
              <span className="section-tag">WHY SRI YANTRA TECH</span>

              <h2 className="why-title">
                Engineering the Future
                <br />
                of <span>Traditional Innovation.</span>
              </h2>

              <p className="why-description">
                At Sri Yantra Tech, we blend deep engineering expertise with
                modern technology and product thinking to build intelligent,
                scalable, and impactful digital solutions.
              </p>

              <div className="why-image-wrapper">
                <img
                  src="/hero/14.png"
                  alt="Sri Yantra Tech"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="why-right">
            <div className="cards-top-space" />

            {whyFeatures.map((item) => (
              <div
                className="feature-card"
                key={item.title}
                style={{ "--feature-bg": `url(${item.image})` } as CSSProperties}
              >
                <div className="feature-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="principles-bar">
          <div className="principles-head">
            <span className="section-tag">OUR PRINCIPLES</span>
            <h3 className="principles-title">Our Principles, Our Advantages</h3>
          </div>

          <div className="principles-grid">
            {whyPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <div className="principle-item" key={item.title}>
                  <span className="principle-icon">
                    <Icon size={30} strokeWidth={1.9} />
                  </span>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-overlay">
        <div className="cta-left">
          <span className="cta-tag">LET&apos;S BUILD THE FUTURE</span>

          <h2 className="cta-title">
            Transform Ideas Into
            <br />
            Scalable Digital Solutions
          </h2>

          <p className="cta-description">
            Partner with Sri Yantra Tech to create intelligent, future-ready
            technology solutions designed to accelerate innovation, performance,
            and long-term business growth.
          </p>
        </div>

        <div className="cta-right">
          <button className="cta-button">Talk to Our Team</button>
        </div>
      </div>
    </section>
  );
}
