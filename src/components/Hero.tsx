function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-container">

        {/* =========================
            LEFT — HERO CONTENT
           ========================= */}
        <div className="hero-content">

          <p className="hero-label">
            CYBERSECURITY ENGINEERING
          </p>

          <h1>
            Soufiane
            <span>Zrida</span>
          </h1>

          <p className="hero-description">
            Cybersecurity Engineering Student focused on
            Offensive Security, Cyber Defense and Security Engineering.
          </p>

          <div className="hero-actions">

            <a href="/projects" className="button primary">
  View My Work
</a>

            <a
              href="/cv/Soufiane_Zrida_CV.pdf"
              className="button secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>

          </div>

          <div className="hero-status">
            <span className="status-dot"></span>

            Available for a 4–6 month PFE
          </div>

        </div>

        {/* =========================
            RIGHT — VISUAL
           ========================= */}
        <div className="hero-visual">

          {/* Profile picture */}
          <div className="profile-photo-wrapper">
            <img
              src="/images/profile.jpg"
              alt="Soufiane Zrida"
              className="profile-photo"
            />
          </div>

          {/* Terminal card */}
          <div className="hero-card">

            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-content">

              <p>
                <span className="terminal-green">$</span>{" "}
                whoami
              </p>

              <p className="terminal-output">
                soufiane@cybersecurity
              </p>

              <p>
                <span className="terminal-green">$</span>{" "}
                focus
              </p>

              <p className="terminal-output">
                Red Team / Blue Team
              </p>

              <p>
                <span className="terminal-green">$</span>{" "}
                status
              </p>

              <p className="terminal-output">
                ready_to_secure
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;