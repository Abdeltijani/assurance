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
          <Features />
          <Testimonials />
          <HowItWorks />
          <Faq />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
