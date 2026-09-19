import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">05</span>
          <h2>Certifications</h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <article
              className="certification-card"
              key={`${certification.title}-${index}`}
            >
              <div className="certification-icon">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3>{certification.title}</h3>

                <p className="certification-issuer">
                  {certification.issuer}
                </p>

                {certification.date && (
                  <p className="certification-date">
                    {certification.date}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
