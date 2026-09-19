import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import CertificationsPage from "./pages/CertificationsPage";
import EducationPage from "./pages/EducationPage";
import CTFPage from "./pages/CTFPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  switch (path) {
    case "/":
      return <Home />;

    case "/about":
      return <AboutPage />;

    case "/experience":
      return <ExperiencePage />;

    case "/projects":
      return <ProjectsPage />;

    case "/skills":
      return <SkillsPage />;

    case "/certifications":
      return <CertificationsPage />;

    case "/education":
      return <EducationPage />;

    case "/ctf":
      return <CTFPage />;

    case "/contact":
      return <ContactPage />;

    default:
      return <NotFound />;
  }
}

export default App;