function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-number">03</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          {/* PROJECT 01 */}
          <article className="project-card">
            <div className="project-header">
              <span>01</span>
              <span>CYBER DEFENSE</span>
            </div>

            <h3>SIEM & Intrusion Detection</h3>

            <p>
              Deployed a complete Wazuh SIEM environment with Sysmon
              for security event collection, attack simulation,
              detection and MITRE ATT&CK classification.
            </p>

            <div className="technology-list">
              <span>Wazuh</span>
              <span>Sysmon</span>
              <span>MITRE ATT&CK</span>
              <span>Nmap</span>
              <span>Windows</span>
              <span>Linux</span>
            </div>

            <div className="project-divider"></div>

            <div className="project-key-work">
              <span>KEY WORK</span>

              <ul>
                <li>Wazuh Manager, Indexer and Dashboard deployment</li>
                <li>Attack simulation and event collection</li>
                <li>Detection rules and real-time dashboards</li>
                <li>MITRE ATT&CK technique classification</li>
              </ul>
            </div>
          </article>


          {/* PROJECT 02 */}
          <article className="project-card">
            <div className="project-header">
              <span>02</span>
              <span>OFFENSIVE SECURITY</span>
            </div>

            <h3>Active Directory Hardening & Pentesting</h3>

            <p>
              Built an Active Directory environment and performed
              penetration testing and security hardening across
              Windows Server and Linux systems.
            </p>

            <div className="technology-list">
              <span>Active Directory</span>
              <span>Windows Server 2022</span>
              <span>Nmap</span>
              <span>Hydra</span>
              <span>SMB</span>
              <span>GPO</span>
            </div>

            <div className="project-divider"></div>

            <div className="project-key-work">
              <span>KEY WORK</span>

              <ul>
                <li>Active Directory environment deployment</li>
                <li>SMB enumeration</li>
                <li>Password attack simulation</li>
                <li>Privileged account analysis</li>
                <li>System and network log analysis</li>
              </ul>
            </div>
          </article>


          {/* PROJECT 03 */}
          <article className="project-card">
            <div className="project-header">
              <span>03</span>
              <span>APPLICATION SECURITY</span>
            </div>

            <h3>DataRoom Enterprise</h3>

            <p>
              Developed a deliberately vulnerable web application
              illustrating OWASP Top 10 security risks, followed by
              vulnerability analysis, CVSS risk assessment and
              secure remediation.
            </p>

            <div className="technology-list">
              <span>Python</span>
              <span>OWASP</span>
              <span>CVSS</span>
              <span>Web Security</span>
              <span>Secure Coding</span>
            </div>

            <div className="project-divider"></div>

            <div className="project-key-work">
              <span>KEY WORK</span>

              <ul>
                <li>Directory Traversal vulnerability analysis</li>
                <li>Command Injection analysis</li>
                <li>OWASP Top 10 mapping</li>
                <li>CVSS risk assessment</li>
                <li>Implementation of security fixes</li>
              </ul>
            </div>
          </article>


          {/* PROJECT 04 */}
          <article className="project-card">
            <div className="project-header">
              <span>04</span>
              <span>AI & FULL-STACK</span>
            </div>

            <h3>CarBot — AI Recommendation Engine</h3>

            <p>
              Developed a full-stack vehicle recommendation
              application using an LLM-based approach, similarity
              scoring and a vector database for intelligent
              recommendation.
            </p>

            <div className="technology-list">
              <span>React</span>
              <span>Django REST</span>
              <span>LLM</span>
              <span>ChromaDB</span>
              <span>Python</span>
            </div>

            <div className="project-divider"></div>

            <div className="project-key-work">
              <span>KEY WORK</span>

              <ul>
                <li>Full-stack application architecture</li>
                <li>LLM-based recommendation system</li>
                <li>Similarity scoring</li>
                <li>Vector database integration</li>
                <li>REST API development</li>
              </ul>
            </div>
          </article>


          {/* PROJECT 05 */}
          <article className="project-card">
            <div className="project-header">
              <span>05</span>
              <span>CLOUD & SECURITY</span>
            </div>

            <h3>Cloud Deployment & Security Architecture</h3>

            <p>
              Designed a scalable cloud architecture combining
              containers, serverless services and cloud storage,
              with implementation of RSA cryptographic algorithms.
            </p>

            <div className="technology-list">
              <span>Azure</span>
              <span>GCP</span>
              <span>Docker</span>
              <span>Python</span>
              <span>RSA</span>
              <span>Cloud Security</span>
            </div>

            <div className="project-divider"></div>

            <div className="project-key-work">
              <span>KEY WORK</span>

              <ul>
                <li>Scalable cloud architecture design</li>
                <li>Container-based deployment</li>
                <li>Serverless architecture</li>
                <li>Cloud storage integration</li>
                <li>RSA cryptographic implementation</li>
              </ul>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Projects;