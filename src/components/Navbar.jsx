import { Moon, Sun, User, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-1 py-3 text-white">
        {/* LOGO */}
        <div className="flex items-center gap-3 ">
          <img src="/image.png" alt="logo" className="h-14" />
          <div className="gap-5">
            <h1 className="font-bold text-3xl  tracking-widest ">JOGARC</h1>
            <p className="text-xs text-gray-400 -mt-1 font-medium text-wide">
              Architecture Redefined
            </p>
          </div>
        </div>

        {/* NAVLINKS */}
        <nav className="hidden md:flex items-center gap-10 font-sm  ">
          <Link
            to="/"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="border-l-3 border-transparent pl-1 hover:border-yellow-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/explore"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="border-l-3 border-transparent pl-1 hover:border-yellow-400 transition-colors"
          >
            Work
          </Link>
          <Link
            to="/about"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className=" border-l-3 border-transparent pl-1 hover:border-yellow-400 transition-colors"
          >
            About
          </Link>

          <Link
            to="/services"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="border-l-3 border-transparent pl-1 hover:border-yellow-400 transition-colors"
          >
            Services
          </Link>

          <Link
            to="/blog"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className=" border-l-3 border-transparent pl-1 hover:border-yellow-400 transition-colors"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className=" border-l-3 border-transparent pl-1 hover:border-yellow-400 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className=" hidden md:flex items-center justify-between  gap-1">
          <button className="p-2 hover:bg-white/10 rounded-full transition">
            <Moon size={20} />
          </button>

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded-md font-medium hover:bg-yellow-400 transition"
          >
            <User size={16} />
            Sign Up
          </Link>
        </div>
        {/* MOBILE */}
        <button className="md:hidden mr-4 " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div
          className={`md:hidden fixed top-22.5 right-4 w-50 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto py-6"
              : "opacity-0 -translate-y-5 pointer-events-none py-0"
          }`}
        >
          <div className="flex flex-col gap-5 px-6 text-base text-white">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="border-l-2 border-transparent hover:border-yellow-400 pl-2 transition-colors"
            >
              Home
            </Link>

            <Link
              to="/explore"
              onClick={() => setIsOpen(false)}
              className="border-l-2 border-transparent hover:border-yellow-400 pl-2 transition-colors"
            >
              Work
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="border-l-2 border-transparent hover:border-yellow-400 pl-2 transition-colors"
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="border-l-2 border-transparent hover:border-yellow-400 pl-2 transition-colors"
            >
              Services
            </Link>

            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="border-l-2 border-transparent hover:border-yellow-400 pl-2 transition-colors"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="border-l-2 border-transparent hover:border-yellow-400 pl-2 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 px-6">
            <div className="flex items-center justify-between">
              <button className="p-2 hover:bg-white/10 rounded-full transition">
                <Moon size={18} />
              </button>
              /{" "}
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded-md font-medium hover:bg-yellow-400 transition"
              >
                <User size={16} />
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
