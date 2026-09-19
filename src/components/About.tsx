function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-number">01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">

          <div className="about-main">
            <p className="about-intro">
              I am a final-year Computer Science engineering student
              specializing in Cybersecurity at UIR, currently completing
              an academic exchange at ESILV in France.
            </p>

            <p>
              My cybersecurity interests cover both offensive and
              defensive security, with a focus on penetration testing,
              vulnerability assessment, security monitoring, detection
              and incident response.
            </p>

            <p>
              Through academic projects, internships and CTF
              competitions, I have developed practical experience
              working with security tools, infrastructure and
              real-world security scenarios.
            </p>

            <p>
              I am currently looking for a 4–6 month final-year
              internship where I can contribute to cybersecurity
              projects while continuing to develop my technical skills.
            </p>
          </div>

          <div className="about-info">

            <div className="info-item">
              <span>Education</span>
              <strong>Computer Science Engineering</strong>
            </div>

            <div className="info-item">
              <span>Specialization</span>
              <strong>Cybersecurity</strong>
            </div>

            <div className="info-item">
              <span>University</span>
              <strong>UIR</strong>
            </div>

            <div className="info-item">
              <span>Academic Exchange</span>
              <strong>ESILV — France</strong>
            </div>

            <div className="info-item">
              <span>Graduation</span>
              <strong>June 2027</strong>
            </div>

            <div className="info-item">
              <span>Availability</span>
              <strong>4–6 Month PFE</strong>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;