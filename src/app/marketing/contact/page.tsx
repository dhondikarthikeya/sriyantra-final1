"use client";

import React, { useEffect, useRef } from "react";
import "./page.css";

export default function StartDiscussionPage() {
  const formSectionRef = useRef<HTMLElement | null>(null);

  /* FORCE PAGE TO START FROM TOP */
  useEffect(() => {
    window.scrollTo(0, 0);

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="sd-page">
      {/* HERO */}
      <section className="sd-hero">
        <div className="sd-hero-overlay" />

        <div className="sd-container">
          <div className="sd-hero-content">
            <h1 className="sd-title">Build Intelligent Digital Systems</h1>

            <p className="sd-subtitle">
              Sri Yantra Tech delivers architecture-first consulting across AI
              systems, cloud platforms, product engineering, and enterprise
              transformation.
            </p>

            {/* HERO BUTTON */}
            <div className="sd-hero-actions">
              <button
                type="button"
                className="sd-contact-btn"
                onClick={scrollToForm}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="sd-capability-section">
        <div className="sd-container">
          <div className="sd-capability-grid">
            {/* LEFT */}
            <div className="sd-capability-main">
              <div className="sd-section-head">
                <span className="sd-section-label">Capabilities</span>

                <h2 className="sd-section-title">
                  Strategic engineering capabilities designed for modern
                  enterprise systems
                </h2>
              </div>

              <div className="sd-capability-list">
                <div className="sd-capability-item">
                  Strategic Technology Consulting
                </div>

                <div className="sd-capability-item">
                  Product & Digital Engineering
                </div>

                <div className="sd-capability-item">AI & Agentic Systems</div>

                <div className="sd-capability-item">
                  Data & Analytics Engineering
                </div>

                <div className="sd-capability-item">
                  Cloud Infrastructure & Platform Systems
                </div>

                <div className="sd-capability-item">
                  Enterprise Architecture & Transformation
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="sd-side-stack">
              <div className="sd-side-box">
                <span className="sd-side-label">What We Build</span>

                <ul>
                  <li>AI-driven operational platforms</li>
                  <li>Enterprise digital ecosystems</li>
                  <li>Cloud-native engineering systems</li>
                  <li>Data and intelligence platforms</li>
                </ul>
              </div>

              <div className="sd-side-box">
                <span className="sd-side-label">What We Explore</span>

                <ul>
                  <li>Agentic workflows & orchestration</li>
                  <li>Enterprise AI integration</li>
                  <li>Autonomous intelligence systems</li>
                  <li>Connected industrial operations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sd-contact-section" ref={formSectionRef}>
        <div className="sd-container">
          <div className="sd-contact-grid">
            {/* LEFT IMAGE */}
            <div className="sd-contact-image-wrap">
              <img
                src="/hero/24.png"
                alt="Strategic Discussion"
                className="sd-contact-image"
              />

              <div className="sd-contact-image-overlay" />

              <div className="sd-image-content">
                <span className="sd-image-label">
                  Enterprise Transformation
                </span>

                <h3>
                  Engineering scalable systems for AI, cloud, data, and digital
                  operations
                </h3>

                <p>
                  Structured technology ecosystems designed for long-term
                  operational scale and intelligent execution.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="sd-form-card">
              <div className="sd-form-head">
                <span className="sd-section-label">Start a Conversation</span>

                <h2 className="sd-form-title">
                  Discuss your next technology initiative
                </h2>

                <p className="sd-form-copy">
                  Share your business objectives, architecture priorities, or
                  transformation goals with Sri Yantra Tech.
                </p>
              </div>

              <form className="sd-form">
                <div className="sd-form-grid">
                  <div className="sd-input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" />
                  </div>

                  <div className="sd-input-group">
                    <label>Company</label>
                    <input type="text" placeholder="Organization name" />
                  </div>
                </div>

                <div className="sd-form-grid">
                  <div className="sd-input-group">
                    <label>Business Email</label>
                    <input type="email" placeholder="name@company.com" />
                  </div>

                  <div className="sd-input-group">
                    <label>Industry</label>

                    <select>
                      <option>Select industry</option>
                      <option>Technology</option>
                      <option>Manufacturing</option>
                      <option>Healthcare</option>
                      <option>Finance</option>
                      <option>Retail</option>
                    </select>
                  </div>
                </div>

                <div className="sd-input-group">
                  <label>Areas of Interest</label>

                  <select>
                    <option>Select capability</option>
                    <option>AI & Agentic Systems</option>
                    <option>Cloud Engineering</option>
                    <option>Digital Engineering</option>
                    <option>Enterprise Architecture</option>
                    <option>Data Platforms</option>
                  </select>
                </div>

                <div className="sd-input-group">
                  <label>Project Overview</label>

                  <textarea
                    rows={6}
                    placeholder="Describe your business goals, transformation initiatives, or technical priorities..."
                  />
                </div>

                <button type="submit" className="sd-submit-btn">
                  Start Strategic Discussion
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}