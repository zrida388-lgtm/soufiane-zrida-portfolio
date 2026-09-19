import { experiences } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-number">02</span>
          <h2>Experience</h2>
        </div>

        <div className="experience-list">

          {experiences.map((experience, index) => (
            <article
              className="experience-card"
              key={`${experience.company}-${index}`}
            >

              <div className="experience-date">
                {experience.period}
              </div>

              <div className="experience-content">

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p className="experience-location">
                  {experience.location}
                </p>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="technology-list">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;