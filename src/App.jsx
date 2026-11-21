import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Booking from "./sections/Booking";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
