import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-number">04</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div
              className="skill-group"
              key={group.title}
            >
              <h3>{group.title}</h3>

              <div className="skills-list">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;