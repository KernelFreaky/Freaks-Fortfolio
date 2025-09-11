import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // icons

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      {/* Top Navbar (desktop only) */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 w-full">
        <div className="w-full max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Frequemarf Paculba Jr.
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/frequemarf-paculba-90b3b327b/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              LinkedIn
            </a>
            <a
              href="FREQUEMARF_PACULBA_JR_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Download CV
            </a>
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>

          {/* Hamburger (mobile/tablet) */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Sidebar (mobile/tablet only) */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col space-y-4"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          <button
            className="self-end text-gray-700 dark:text-gray-200 mb-4"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>

          <a
            href="https://www.linkedin.com/in/frequemarf-paculba-90b3b327b/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            LinkedIn
          </a>
          <a
            href="FREQUEMARF_PACULBA_JR_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Download CV
          </a>
          <button
            onClick={toggleTheme}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
