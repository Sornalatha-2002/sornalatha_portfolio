import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Beyond from './sections/Beyond.jsx';
import Stack from './sections/Stack.jsx';
import Process from './sections/Process.jsx';
import Education from './sections/Education.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Beyond />
        <Stack />
        <Process />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
