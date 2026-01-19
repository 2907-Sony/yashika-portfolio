import { LoadingScreen } from "./components/loadingScreen.jsx";
import "./index.css";
import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import { Home } from "./components/sections/Home.jsx";
import { About } from "./components/sections/About.jsx";
import { Projects } from "./components/sections/project.jsx";
import { Contact } from "./components/sections/Contact.jsx";

function App() {
  const [isLoaded, setisLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">

      <div className="background" aria-hidden="true">
        {Array.from({ length: 17 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      {!isLoaded && <LoadingScreen onComplete={() => setisLoaded(true)} />}

      
      <div
        className={`relative min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-transparent text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
