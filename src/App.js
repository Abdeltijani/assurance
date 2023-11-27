import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero-section/HeroSection";
import Features from "./components/features-section/Features";
import Testimonials from "./components/testimonials/Testimonials";
import HowItWorks from "./components/how-it-works/HowItWorks";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <div id="hero">
          {/* <HeroSection /> */}
          <div id="features">
            <Features />
          </div>

          <div id="testimonials">
            <Testimonials />
          </div>

          <div id="howitworks">
            <HowItWorks />
          </div>
          <div id="faq">
            <Faq />
          </div>

          <div id="footer">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
