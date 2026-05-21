"use client";

import "./page.css";
import { useEffect, useRef, useState } from "react";
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

const slides: Slide[] = [
  {
    title: "Engineering Intelligent Digital Experiences",
    description:
      "Helping enterprises modernize operations through cloud-native engineering, AI systems, enterprise platforms, and scalable digital transformation.",
    desktopImage: "/hero/bg13.png",
    mobileImage: "/hero/13.png",
  },
  {
    title: "Building AI & Agentic Systems for Modern Enterprises",
    description:
      "Designing intelligent platforms, automation ecosystems, and enterprise AI solutions that accelerate innovation and operational efficiency.",
    desktopImage: "/hero/bg14.png",
    mobileImage: "/hero/14.png",
  },
  {
    title: "Accelerating Manufacturing & Mobility Transformation",
    description:
      "Empowering industries with connected systems, industrial automation, mobility engineering, and advanced analytics solutions.",
    desktopImage: "/hero/bg13.png",
    mobileImage: "/hero/24.png",
  },
  {
    title: "Modern Technology Consulting for Scalable Growth",
    description:
      "Supporting organizations with product engineering, data modernization, enterprise platforms, and strategic technology consulting.",
    desktopImage: "/hero/bg13.png",
    mobileImage: "/hero/bg13.png",
  },
];

const capabilities: Capability[] = [
  {
    title: "Strategic Technology Consulting",
    image: "/hero/14.png",
    href: "/strategic-technology-consulting",
    points: [
      { text: "Enterprise Modernization", icon: Rocket },
      { text: "Digital Transformation Strategy", icon: Workflow },
      { text: "Cloud Migration Roadmaps", icon: Cloud },
      { text: "Architecture Advisory", icon: ShieldCheck },
    ],
  },
  {
    title: "Product & Digital Engineering",
    image: "/hero/17.png",
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
    points: [
      { text: "GenAI Integration", icon: Brain },
      { text: "AI Agents & Automation", icon: Cpu },
      { text: "Workflow Intelligence", icon: Activity },
      { text: "Decision Systems", icon: Settings2 },
    ],
  },
  {
    title: "Data & Analytics Engineering",
    image: "/hero/15.png",
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
    image: "/industries/automotive-mobility.jpg",
    href: "/automotive-mobility",
  },
  {
    id: 2,
    title: "Technology & SaaS",
    icon: Monitor,
    description:
      "Building scalable cloud-native applications, SaaS platforms, AI-driven systems, and digital infrastructure.",
    image: "/industries/technology-saas.jpg",
    href: "/technology-saas",
  },
  {
    id: 3,
    title: "Manufacturing & Industrial Operations",
    icon: Factory,
    description:
      "Optimizing industrial workflows with automation, predictive maintenance, and real-time analytics.",
    image: "/industries/manufacturing.jpg",
    href: "/manufacturing-industrial-operations",
  },
  {
    id: 4,
    title: "Banking & Financial Services",
    icon: Landmark,
    description:
      "Delivering secure and compliant fintech experiences with scalable banking platforms and automation.",
    image: "/industries/banking.jpg",
    href: "/banking-financial-services",
  },
  {
    id: 5,
    title: "Retail & E-Commerce",
    icon: ShoppingCart,
    description:
      "Creating personalized omnichannel commerce experiences with scalable retail platforms.",
    image: "/industries/retail.jpg",
    href: "/retail-ecommerce",
  },
  {
    id: 6,
    title: "Media & Entertainment",
    icon: Clapperboard,
    description:
      "Building engaging digital media platforms, streaming ecosystems, and audience analytics systems.",
    image: "/industries/media.jpg",
    href: "/media-entertainment",
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
  const stickyBoxRef = useRef<HTMLDivElement | null>(null);
  const [stickyMode, setStickyMode] = useState<"normal" | "fixed" | "bottom">(
    "normal"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const section = stickySectionRef.current;
      const box = stickyBoxRef.current;

      if (!section || !box) return;

      if (window.innerWidth <= 1200) {
        setStickyMode("normal");
        return;
      }

      const rect = section.getBoundingClientRect();
      const boxHeight = box.offsetHeight;
      const offset = 110;

      if (rect.top > offset) setStickyMode("normal");
      else if (rect.bottom > offset + boxHeight) setStickyMode("fixed");
      else setStickyMode("bottom");
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
          >
            <Image
              src={slide.desktopImage}
              alt={slide.title}
              fill
              priority={index === 0}
              className="hp7-a3 hp7-desk"
            />
            <Image
              src={slide.mobileImage}
              alt={slide.title}
              fill
              priority={index === 0}
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
          <div className="hp7-b3">
            <div ref={stickyBoxRef} className={`hp7-b4 hp7-${stickyMode}`}>
              <span className="hp7-label">Strategic Technology Partner</span>
              <h2>
                Driving Enterprise Innovation Through Scalable Digital
                Engineering
              </h2>
              <p>
                We help enterprises modernize platforms, accelerate AI adoption,
                build cloud-native systems, and transform operations with
                scalable engineering solutions.
              </p>
            </div>
          </div>

          <div className="hp7-b5">
            {[
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
            ].map((card, index) => {
              const Icon = card.icon;

              return (
                <div key={card.title} className="hp7-b6">
                  <img src={card.image} alt={card.title} />
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
              End-to-end digital engineering across AI, cloud, data, and product
              development.
            </p>
          </div>

          <div className="hp7-c3">
            {capabilities.map((capability) => {
              const content = (
                <>
                  <img src={capability.image} alt={capability.title} />
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
    </main>
  );
}

function FullWidthVideoSection() {
  const [loaded, setLoaded] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev === videoTitles.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeTitle = videoTitles[titleIndex];

  return (
    <section className="hp7-v1">
      <video
        className="hp7-v2"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setLoaded(true)}
      >
        <source src="/hero/v1.mp4" type="video/mp4" />
      </video>

      <div className="hp7-v3" />

      <div className="hp7-v4">
        <h2 key={activeTitle} className="hp7-v5" data-text={activeTitle}>
          {activeTitle}
        </h2>
      </div>

      {!loaded && <div className="hp7-load">Loading video...</div>}
    </section>
  );
}

function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="hp7-i1">
      <div className="hp7-wrap hp7-i2">
        <div className="hp7-i3">
          <span className="hp7-label">Industries</span>
          <h2>Explore Industries</h2>
          <p>
            We partner with sector leaders to build intelligent systems,
            connected platforms, and scalable digital operations.
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
                  onMouseEnter={() => setActiveIndustry(industry)}
                  onFocus={() => setActiveIndustry(industry)}
                  onClick={() => setActiveIndustry(industry)}
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

          <div className="hp7-i10">
            <Link href={activeIndustry.href} className="hp7-i11">
              <img src={activeIndustry.image} alt={activeIndustry.title} />
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