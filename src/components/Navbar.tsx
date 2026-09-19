import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  const toggleMore = () => {
    setMoreOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="/"
          className="logo"
          onClick={closeMenu}
          aria-label="Go to home"
        >
          SZ
        </a>

        {/* NAVIGATION */}
        <nav
          className={`nav-links ${
            menuOpen ? "nav-links-open" : ""
          }`}
        >
          <a href="/about" onClick={closeMenu}>
            About
          </a>

          <a href="/experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="/projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="/skills" onClick={closeMenu}>
            Skills
          </a>

          {/* MORE */}
          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-dropdown-button"
              onClick={toggleMore}
              aria-expanded={moreOpen}
            >
              More
              <span
                className={`dropdown-arrow ${
                  moreOpen ? "open" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {moreOpen && (
              <div className="dropdown-menu">
                <a
                  href="/certifications"
                  onClick={closeMenu}
                >
                  Certifications
                </a>

                <a
                  href="/education"
                  onClick={closeMenu}
                >
                  Education
                </a>

                <a
                  href="/ctf"
                  onClick={closeMenu}
                >
                  CTF & Competitions
                </a>
              </div>
            )}
          </div>

          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* LET'S TALK */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=zrida388@gmail.com&su=PFE%20Cybersecurity%20Internship%20Application"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
          onClick={closeMenu}
        >
          Let's Talk
        </a>

        {/* MOBILE MENU */}
        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "menu-toggle-open" : ""
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;