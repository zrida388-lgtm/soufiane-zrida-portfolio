import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <>
      <Navbar />

      <main className="section">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-number">404</span>
            <h1>Page Not Found</h1>
          </div>

          <p>
            The page you are looking for does not exist.
          </p>

          <a href="/" className="button primary">
            Back to Home
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;