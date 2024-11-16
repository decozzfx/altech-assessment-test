import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ContactUs } from "./components/ContactUs";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";

import "./App.css";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
