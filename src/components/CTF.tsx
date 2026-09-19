function CTF() {
  return (
    <section id="ctf" className="section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">07</span>
          <h2>CTF & Competitions</h2>
        </div>

        <div className="ctf-grid">
          <article className="ctf-card">
            <div className="ctf-header">
              <span>01</span>
              <span>May 2026</span>
            </div>

            <h3>S.H.I.E.L.D Cyber Academy CTF</h3>

            <p>
              Team competition focused on penetration testing,
              web reconnaissance, IDOR exploitation, SQL injection
              and privilege escalation.
            </p>

            <div className="technology-list">
              <span>Web Recon</span>
              <span>IDOR</span>
              <span>SQL Injection</span>
              <span>Privilege Escalation</span>
            </div>
          </article>

          <article className="ctf-card">
            <div className="ctf-header">
              <span>02</span>
              <span>April 2026</span>
            </div>

            <h3>CYBrAIn CTF</h3>

            <p>
              Cybersecurity competition involving digital forensics,
              networking and cryptography challenges under time pressure.
            </p>

            <div className="technology-list">
              <span>Digital Forensics</span>
              <span>Networking</span>
              <span>Cryptography</span>
            </div>

            <div className="ctf-result">
              Top 10 — Final Leaderboard
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CTF;
