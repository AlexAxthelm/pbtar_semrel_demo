import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart3 } from "lucide-react";
import pkg from "../../package.json";

const pkgVersion = (pkg as { version: string | undefined }).version;

const Header: React.FC = () => {
  const location = useLocation();

  const bgColor: string = "alexgreen";
  const textColor: string = "alexpurple";

  const COLOR_CLASS: Record<string, string> = {
    alexgreen: "alexgreen",
    alexpurple: "alexpurple",
    rmipurple: "rmipurple-800",
    rmiblue: "bluespruce",
    white: "white",
    // add others you need
  };

  return (
    <header
      className={`${"bg-" + COLOR_CLASS[bgColor]} ${"text-" + COLOR_CLASS[textColor]} shadow-md`}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-3 group transition-all duration-300"
        >
          <BarChart3
            size={32}
            className="text-white group-hover:scale-110 transition-transform duration-300"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              SEMREL DEMO {pkgVersion}
            </h1>
            <p className="text-xs md:text-sm">Graphic design is my passion</p>
          </div>
        </Link>

        <nav className="flex mt-4 md:mt-0">
          <Link
            to="/"
            className={`px-4 py-2 text-sm md:text-base font-medium transition-colors duration-200 hover:text-energy ${
              location.pathname === "/"
                ? "text-energy border-b-2 border-energy"
                : "text-white"
            }`}
          >
            Scenarios
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 text-sm md:text-base font-medium transition-colors duration-200 hover:text-energy ${
              location.pathname === "/about"
                ? "text-energy border-b-2 border-energy"
                : "text-white"
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
