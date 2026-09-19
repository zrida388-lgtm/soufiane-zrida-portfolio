function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* =========================
            FOOTER TOP
        ========================== */}
        <div className="footer-top">

          {/* LEFT — BRAND */}
          <div className="footer-brand">
            <span className="footer-logo">SZ</span>

            <div className="footer-brand-content">
              <p className="footer-name">
                Soufiane Zrida
              </p>

              <p className="footer-role">
                Cybersecurity Engineering Student
              </p>

              <p className="footer-availability">
                Available for a 4–6 month PFE
              </p>
            </div>
          </div>

          {/* CENTER — CONTACT */}
          <div className="footer-contact">

            <span className="footer-label">
              GET IN TOUCH
            </span>

            <a
              href="mailto:zrida388@gmail.com"
              className="footer-contact-link"
            >
              zrida388@gmail.com
            </a>

            <a
              href="tel:+33753339174"
              className="footer-contact-link"
            >
              +33 7 53 33 91 74
            </a>

            <a
              href="https://www.linkedin.com/in/soufiane-zrida-3934442b5"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              LinkedIn ↗
            </a>

            <span className="footer-location">
              France
            </span>

          </div>

          {/* RIGHT — NAVIGATION */}
          <div className="footer-navigation">

            <span className="footer-label">
              NAVIGATION
            </span>

            <a href="/about">
              About
            </a>

            <a href="/experience">
              Experience
            </a>

            <a href="/projects">
              Projects
            </a>

            <a href="/skills">
              Skills
            </a>

            <a href="/certifications">
              Certifications
            </a>

            <a href="/education">
              Education
            </a>

            <a href="/ctf">
              CTF & Competitions
            </a>

            <a href="/contact">
              Contact
            </a>

          </div>

        </div>

        {/* =========================
            FOOTER BOTTOM
        ========================== */}
        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Soufiane Zrida
          </span>

          <span className="footer-status">
            <span className="footer-status-dot"></span>
            Open to PFE opportunities
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;