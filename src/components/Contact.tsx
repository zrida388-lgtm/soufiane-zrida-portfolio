function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-number">08</span>
          <h2>Contact</h2>
        </div>

        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-main">

            <p className="contact-label">
              LOOKING FOR A PFE OPPORTUNITY?
            </p>

            <h3>
              Let's build something
              <span> secure.</span>
            </h3>

            <p className="contact-description">
              I am currently looking for a 4–6 month final-year
              internship in cybersecurity, with interests in
              offensive security, cyber defense, vulnerability
              management and incident response.
            </p>

            <div className="contact-actions">

              {/* EMAIL */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zrida388@gmail.com&su=PFE%20Cybersecurity%20Internship%20Application"
                target="_blank"
                rel="noopener noreferrer"
                className="button primary"
              >
                Send an Email
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/soufiane-zrida-3934442b5"
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-info">

            {/* EMAIL */}
            <div className="contact-item">
              <span>Email</span>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zrida388@gmail.com&su=PFE%20Cybersecurity%20Internship%20Application"
                target="_blank"
                rel="noopener noreferrer"
              >
                zrida388@gmail.com
              </a>
            </div>

            {/* PHONE */}
            <div className="contact-item">
              <span>Phone</span>

              <a href="tel:+33753339174">
                +33 7 53 33 91 74
              </a>
            </div>

            {/* LINKEDIN */}
            <div className="contact-item">
              <span>LinkedIn</span>

              <a
                href="https://www.linkedin.com/in/soufiane-zrida-3934442b5"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/soufiane-zrida-3934442b5
              </a>
            </div>

            {/* AVAILABILITY */}
            <div className="contact-item">
              <span>Availability</span>

              <strong>
                4–6 month PFE
              </strong>
            </div>

            {/* LOCATION */}
            <div className="contact-item">
              <span>Location</span>

              <strong>
                France
              </strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;