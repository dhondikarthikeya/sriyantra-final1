"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Lightbulb,
  Cog,
  Bot,
  Database,
  Cloud,
  MonitorSmartphone,
  Cpu,
  Radio,
  Shield,
  Briefcase,
  Factory,
  Car,
  Zap,
  Building2,
  Landmark,
  ShoppingBag,
  Clapperboard,
} from "lucide-react";
import "./nav.css";

type ChildLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  colorClass: string;
};

type NavLinkItem = {
  label: string;
  href: string;
  children?: ChildLink[];
};

const links: NavLinkItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Capabilities",
    href: "/services",
    children: [
      {
        label: "Strategic Technology Consulting",
        href: "/marketing/services/strategic",
        icon: Lightbulb,
        colorClass: "iconBlue",
      },
      {
        label: "Product & Digital Engineering",
        href: "/marketing/services/product",
        icon: Cog,
        colorClass: "iconIndigo",
      },
      {
        label: "AI & Agentic Systems",
        href: "/marketing/services/Ai-Agentic",
        icon: Bot,
        colorClass: "iconViolet",
      },
      {
        label: "Data & Analytics Engineering",
        href: "/marketing/services/Data",
        icon: Database,
        colorClass: "iconCyan",
      },
      // {
      //   label: "Cloud & Infrastructure Engineering",
      //   href: "/services/cloud-infrastructure-engineering",
      //   icon: Cloud,
      //   colorClass: "iconSky",
      // },
      // {
      //   label: "Experience & Interface Design",
      //   href: "/services/experience-interface-design",
      //   icon: MonitorSmartphone,
      //   colorClass: "iconTeal",
      // },
      // {
      //   label: "Industrial & Physical Systems Engineering",
      //   href: "/services/industrial-physical-systems-engineering",
      //   icon: Cpu,
      //   colorClass: "iconOrange",
      // },
      // {
      //   label: "Edge AI & IoT Systems",
      //   href: "/services/edge-ai-iot-systems",
      //   icon: Radio,
      //   colorClass: "iconPink",
      // },
      // {
      //   label: "Cybersecurity Engineering",
      //   href: "/services/cybersecurity-engineering",
      //   icon: Shield,
      //   colorClass: "iconGreen",
      // },
    ],
  },
  { label: "Operating Model", href: "/marketing/operating-model" },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Technology & SaaS",
        href: "/marketing/industries/technology-saas",
        icon: Briefcase,
        colorClass: "iconBlue",
      },
      {
        label: "Manufacturing & Industrial Operations",
        href: "/marketing/industries/manufacturing",
        icon: Factory,
        colorClass: "iconOrange",
      },
      {
        label: "Automotive & Mobility",
        href: "/marketing/industries/automotive",
        icon: Car,
        colorClass: "iconRed",
      },
      // {
      //   label: "Energy & Utilities",
      //   href: "/industries/energy-utilities",
      //   icon: Zap,
      //   colorClass: "iconYellow",
      // },
      // {
      //   label: "Infrastructure & Construction",
      //   href: "/industries/infrastructure-construction",
      //   icon: Building2,
      //   colorClass: "iconSky",
      // },
      {
        label: "Banking & Financial Services",
        href: "/marketing/industries/banking",
        icon: Landmark,
        colorClass: "iconIndigo",
      },
      {
        label: "Retail & E-Commerce",
        href: "/marketing/industries/retial&e-com",
        icon: ShoppingBag,
        colorClass: "iconPink",
      },
      {
        label: "Media & Entertainment",
        href: "/marketing/industries/media",
        icon: Clapperboard,
        colorClass: "iconViolet",
      },
    ],
  },
  { label: "Insights", href: "/marketing/insights" },
  { label: "About", href: "/marketing/about" },
];

export default function Nav() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const dropdownWrapRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [pointerLeft, setPointerLeft] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMobileOpen(false);
    setDesktopDropdown(null);
    setPointerLeft(null);
    setMobileExpanded({});
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(event.target as Node)) {
        setDesktopDropdown(null);
        setMobileOpen(false);
        setMobileExpanded({});
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopDropdown(null);
        setMobileOpen(false);
        setMobileExpanded({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const updatePointerPosition = () => {
    if (!desktopDropdown) return;

    const trigger = triggerRefs.current[desktopDropdown];
    const dropdownWrap = dropdownWrapRef.current;

    if (!trigger || !dropdownWrap) return;

    const wrapRect = dropdownWrap.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const center = triggerRect.left - wrapRect.left + triggerRect.width / 2;

    setPointerLeft(center);
  };

  useLayoutEffect(() => {
    if (!desktopDropdown) return;
    const raf = requestAnimationFrame(() => updatePointerPosition());
    return () => cancelAnimationFrame(raf);
  }, [desktopDropdown]);

  useEffect(() => {
    const handleResize = () => updatePointerPosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopDropdown]);

  const isActive = (href: string, children?: ChildLink[]) => {
    if (pathname === href) return true;
    return !!children?.some((child) => pathname === child.href);
  };

  const closeAll = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setDesktopDropdown(null);
    setMobileOpen(false);
    setMobileExpanded({});
  };

  const openDesktopDropdown = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setDesktopDropdown(label);
  };

  const closeDesktopDropdownWithDelay = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setDesktopDropdown(null);
    }, 140);
  };

  const keepDesktopDropdownOpen = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const toggleMobileSection = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header className="sytHeader" ref={headerRef}>
      <div className="sytContainer">
        <div className="sytRow">
          <Link href="/" className="sytLogo">
            jetsky
          </Link>

          <nav
            className="sytNavDesktop"
            onMouseLeave={closeDesktopDropdownWithDelay}
          >
            {links.map((item) => {
              const active = isActive(item.href, item.children);
              const hasChildren = !!item.children?.length;
              const isOpen = desktopDropdown === item.label;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`sytNavLink ${active ? "active" : ""}`}
                    onMouseEnter={() => {
                      if (desktopDropdown) closeDesktopDropdownWithDelay();
                    }}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.href}
                  className={`sytNavItem ${isOpen ? "open" : ""}`}
                  onMouseEnter={() => openDesktopDropdown(item.label)}
                >
                  <button
                    ref={(el) => {
                      triggerRefs.current[item.label] = el;
                    }}
                    type="button"
                    className={`sytNavTrigger ${active ? "active" : ""}`}
                    onMouseEnter={() => openDesktopDropdown(item.label)}
                    aria-expanded={isOpen}
                    aria-label={`Toggle ${item.label} menu`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className="sytNavChevron" />
                  </button>
                </div>
              );
            })}
          </nav>

          <div className="sytCtaDesktop">
            <Link href="/marketing/contact" className="sytCtaBtn">
              Start Discussion
            </Link>
          </div>

          <button
            className="sytMobileBtn"
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setMobileExpanded({});
            }}
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
            type="button"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`sytCenteredDropdown ${desktopDropdown ? "show" : ""}`}
        onMouseEnter={keepDesktopDropdownOpen}
        onMouseLeave={closeDesktopDropdownWithDelay}
      >
        <div className="sytContainer sytDropdownContainer">
          {links
            .filter((item) => item.label === desktopDropdown && item.children?.length)
            .map((item) => (
              <div key={item.href} className="sytCenteredDropdownWrap" ref={dropdownWrapRef}>
                <div
                  className="sytCenteredDropdownPointer"
                  style={pointerLeft !== null ? { left: `${pointerLeft}px` } : undefined}
                />
                <div className="sytMegaMenuInner">
                  <div className="sytMegaMenuTop sytMegaMenuTopNoButton">
                    <div>
                      <p className="sytMegaEyebrow">{item.label}</p>
                      <h4 className="sytMegaTitle">Explore {item.label}</h4>
                    </div>
                  </div>

                  <div className="sytMegaGrid">
                    {item.children?.map((child) => {
                      const Icon = child.icon;

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`sytMegaRow ${pathname === child.href ? "active" : ""}`}
                          onClick={closeAll}
                        >
                          <span className={`sytMegaRowIcon ${child.colorClass}`}>
                            <Icon size={19} strokeWidth={1.9} />
                          </span>

                          <span className="sytMegaRowTitle">{child.label}</span>

                          <span className="sytMegaRowArrow">
                            <ChevronRight size={17} strokeWidth={1.9} />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {mobileOpen && <div className="sytBackdrop" onClick={closeAll} />}

      <div className={`sytMobileDrawer ${mobileOpen ? "show" : ""}`}>
        <div className="sytMobileDrawerBody">
          <div className="sytMobileMenu">
            {links.map((item) => {
              const active = isActive(item.href, item.children);
              const hasChildren = !!item.children?.length;
              const expanded = !!mobileExpanded[item.label];

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className={`sytMobileLink ${active ? "active" : ""}`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              }

              return (
                <div key={item.href} className="sytMobileAccordion">
                  <div className={`sytMobileAccordionTop ${active ? "active" : ""}`}>
                    <button
                      type="button"
                      className={`sytMobileAccordionTitle ${active ? "active" : ""}`}
                      onClick={() => toggleMobileSection(item.label)}
                      aria-expanded={expanded}
                    >
                      {item.label}
                    </button>

                    <button
                      type="button"
                      className={`sytMobileAccordionToggle ${expanded ? "open" : ""}`}
                      onClick={() => toggleMobileSection(item.label)}
                      aria-expanded={expanded}
                      aria-label={`Toggle ${item.label}`}
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>

                  <div className={`sytMobileAccordionPanel ${expanded ? "show" : ""}`}>
                    <div className="sytMobileAccordionPanelInner">
                      {item.children?.map((child) => {
                        const Icon = child.icon;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`sytMobileSubItem ${
                              pathname === child.href ? "active" : ""
                            }`}
                            onClick={closeAll}
                          >
                            <span className={`sytMegaRowIcon ${child.colorClass}`}>
                              <Icon size={16} strokeWidth={1.9} />
                            </span>
                            <span className="sytMobileSubItemText">{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link href="/marketing/contact" onClick={closeAll} className="sytMobileCta">
              Start Discussion
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}