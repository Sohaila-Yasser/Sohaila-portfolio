import "./styles.css";

import { Navbar } from "./components/header/header";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
