import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTF from "../components/CTF";

function CTFPage() {
  return (
    <>
      <Navbar />

      <main>
        <CTF />
      </main>

      <Footer />
    </>
  );
}

export default CTFPage;