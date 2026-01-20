import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
        <a
  href="#home"
  className="flex items-center gap-8 font-mono font-bold text-white"
>
  <img
   src={`${import.meta.env.BASE_URL}favicon.ico.png`}
    alt="logo"
    className="w-12 h-12 object-contain scale-[2.5] origin-left"
  />
  <span className="text-2xl">
    Yashika<span className="text-blue-500"></span>
  </span>
</a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>
          <div className="hidden md:flex item-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
