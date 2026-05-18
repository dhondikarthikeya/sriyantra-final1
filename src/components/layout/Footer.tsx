import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Sriyantra Tech</h2>
          <p>
            Engineering intelligent digital, AI and industrial systems
            built for scale, resilience and performance.
          </p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Capabilities</a>
            </li>
            <li>
              <a href="#">Operating Model</a>
            </li>
            <li>
              <a href="#">Insights</a>
            </li>
          </ul>
        </div>

        <div className="footer-links industries">
          <h4>Industries</h4>
          <ul>
            <li>
              <a href="#">Technology &amp; SaaS</a>
            </li>
            <li>
              <a href="#">Manufacturing</a>
            </li>
            <li>
              <a href="#">Automotive &amp; Mobility</a>
            </li>
            <li>
              <a href="#">Energy &amp; Utilities</a>
            </li>
            <li>
              <a href="#">Infrastructure &amp; Construction</a>
            </li>
            <li>
              <a href="#">Banking &amp; Financial Services</a>
            </li>
            <li>
              <a href="#">Healthcare</a>
            </li>
            <li>
              <a href="#">Retail &amp; E-Commerce</a>
            </li>
            <li>
              <a href="#">Logistics</a>
            </li>
          </ul>
        </div>

        <div className="footer-links services">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#">Strategic Technology Consulting</a>
            </li>
            <li>
              <a href="#">Product &amp; Digital Engineering</a>
            </li>
            <li>
              <a href="#">AI &amp; Agentic Systems</a>
            </li>
            <li>
              <a href="#">Data &amp; Analytics Engineering</a>
            </li>
            <li>
              <a href="#">Cloud &amp; Infrastructure Engineering</a>
            </li>
            <li>
              <a href="#">Experience &amp; Interface Design</a>
            </li>
            <li>
              <a href="#">Industrial Systems Engineering</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sriyantra Tech. All rights reserved.</p>
      </div>

      <div className="footer-brand-bg">Sriyantra Tech</div>
    </footer>
  );
}