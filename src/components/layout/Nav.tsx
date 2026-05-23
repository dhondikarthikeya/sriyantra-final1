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
  Briefcase,
  Factory,
  Car,
  Landmark,
  ShoppingBag,
  Clapperboard,
  Sparkles,
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
  { label: "About", href: "/marketing/about" },
];

export default function Nav() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const dropdownWrapRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const lastScrollYRef = useRef(0);
  const lockedScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [pointerLeft, setPointerLeft] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopDropdown(null);
    setPointerLeft(null);
    setMobileExpanded({});
    setNavHidden(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    lockedScrollYRef.current = window.scrollY;

    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyWidth = document.body.style.width;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollYRef.current}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.width = originalBodyWidth;
      document.body.style.overflow = originalBodyOverflow;
      window.scrollTo({ top: lockedScrollYRef.current, left: 0, behavior: "auto" });
    };
  }, [mobileOpen]);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      if (mobileOpen || tickingRef.current) return;

      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const previousY = lastScrollYRef.current;
        const delta = currentY - previousY;

        if (currentY <= 24) {
          setNavHidden(false);
        } else if (delta > 8 && currentY > 120) {
          setNavHidden(true);
          setDesktopDropdown(null);
        } else if (delta < -8) {
          setNavHidden(false);
        }

        lastScrollYRef.current = currentY;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileOpen]);

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
    setNavHidden(false);
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
    <header className={`sytHeader ${navHidden ? "sytHeaderHidden" : ""}`} ref={headerRef}>
      <div className="sytShell">
        <Link href="/" className="sytLogo" onClick={closeAll} aria-label="jetsky home">
          <img src="/hero/logo.png" alt="jetsky" className="sytLogoImg" />
        </Link>

        <nav className="sytNavDesktop" onMouseLeave={closeDesktopDropdownWithDelay}>
          {links.map((item) => {
            const active = isActive(item.href, item.children);
            const hasChildren = !!item.children?.length;
            const isOpen = desktopDropdown === item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-label={item.label}
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
                  data-label={item.label}
                  className={`sytNavTrigger ${active ? "active" : ""}`}
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

        <Link href="/marketing/contact" className="sytCtaBtn">
          <Sparkles size={18} />
          <span>Start Discussion</span>
        </Link>

        <button
          className="sytMenuOrb"
          onClick={() => {
            setMobileOpen((prev) => !prev);
            setMobileExpanded({});
            setNavHidden(false);
          }}
          aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={mobileOpen}
          type="button"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={25} />}
        </button>
      </div>

      <div
        className={`sytCenteredDropdown ${desktopDropdown ? "show" : ""}`}
        onMouseEnter={keepDesktopDropdownOpen}
        onMouseLeave={closeDesktopDropdownWithDelay}
      >
        <div className="sytDropdownContainer">
          {links
            .filter((item) => item.label === desktopDropdown && item.children?.length)
            .map((item) => (
              <div key={item.href} className="sytCenteredDropdownWrap" ref={dropdownWrapRef}>
                <div
                  className="sytCenteredDropdownPointer"
                  style={pointerLeft !== null ? { left: `${pointerLeft}px` } : undefined}
                />

                <div className="sytMegaMenuInner">
                  <div className="sytMegaMenuTop">
                    <p className="sytMegaEyebrow">{item.label}</p>
                    <h4 className="sytMegaTitle">Explore {item.label}</h4>
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
