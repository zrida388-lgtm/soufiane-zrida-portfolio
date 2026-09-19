import { education } from "../data/education";

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-number">06</span>
          <h2>Education</h2>
        </div>

        <div className="education-list">
          {education.map((item, index) => (
            <article
              className="education-card"
              key={`${item.institution}-${index}`}
            >
              <div className="education-period">
                {item.period}
              </div>

              <div className="education-content">
                <h3>{item.degree}</h3>

                <p className="education-specialization">
                  {item.specialization}
                </p>

                <p className="education-institution">
                  {item.institution}
                </p>

                <p className="education-location">
                  {item.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
