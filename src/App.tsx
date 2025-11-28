
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-white selection:bg-primary selection:text-white cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
