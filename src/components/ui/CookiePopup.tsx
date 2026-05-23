"use client";

import { useEffect, useState } from "react";
import "./cookie-popup.css";

export default function CookiePopup() {
  const [show, setShow] = useState(false);

  // REAL PRODUCTION MODE
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    // Show popup only if no consent exists
    if (!consent) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 5000); // 5 sec delay

      return () => clearTimeout(timer);
    }
  }, []);

  // ACCEPT ALL
  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  // DENY
  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "denied");
    setShow(false);
  };

  // SETTINGS
  const managePreferences = () => {
    localStorage.setItem("cookie-consent", "customized");
    setShow(false);
  };

  return (
    <div className={`cookie-popup ${show ? "show" : ""}`}>
      <div className="cookie-container">

        {/* LEFT CONTENT */}
        <div className="cookie-content">

          <h2 className="cookie-title">
            Cookie Preferences & Privacy Settings
          </h2>

          <p className="cookie-description">

            Cookies and similar technologies are necessary
            for this website to function. With your consent,
            additional cookies are used to provide optional
            features, improve performance, analyze traffic,
            and personalize your experience.

            <br /><br />

            You can manage your preferences at any time via
            <span className="cookie-link">
              {" "}More settings
            </span>

            {" "}and you can refuse non-essential cookies
            by selecting{" "}

            <strong>
              “Deny and continue”
            </strong>.

            <br /><br />

            Further details about the cookies used and how
            your data is processed are available in the{" "}

            <a href="/privacy-policy" className="cookie-link">
              privacy notice
            </a>.

          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="cookie-buttons">

          {/* DESKTOP LEFT / MOBILE BOTTOM */}
          <button
            onClick={managePreferences}
            className="cookie-btn outline-btn"
          >
            More settings
          </button>

          {/* DESKTOP CENTER / MOBILE MIDDLE */}
          <button
            onClick={declineCookies}
            className="cookie-btn secondary-btn"
          >
            Deny and continue
          </button>

          {/* DESKTOP RIGHT / MOBILE TOP */}
          <button
            onClick={acceptCookies}
            className="cookie-btn primary-btn"
          >
            Accept all cookies
          </button>

        </div>
      </div>
    </div>
  );
}