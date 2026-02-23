import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="bg-effects">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div className="bg-grid" />
      </div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        Built by <span>Giorgi Kostava</span>
      </footer>
    </div>
  );
}
