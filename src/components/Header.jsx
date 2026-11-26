import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Catálogo", href: "#catalog" },
    { label: "Qualidade", href: "#quality" },
  ];

  const baseClasses =
    "font-body px-5 py-2 rounded-4xl transition-colors duration-300 cursor-pointer text-sm lg:text-base";
  const activeClasses = "bg-details text-background";
  const inactiveClasses = "text-black hover:text-details/70";

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 md:px-10 lg:px-16 pointer-events-none">

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex items-center justify-between gap-4">

        <div className="pointer-events-auto flex-1 flex items-center justify-between h-15 px-6 md:px-8 lg:px-12 rounded-4xl bg-[#f5f5f5] shadow-sm border border-black/5">
          <a
            href="#"
            onClick={() => {
              setActiveLink("Home");
              setMenuOpen(false);
            }}
            className="flex gap-2.5 items-center shrink-0"
          >
            <img src={logo} alt="logotipo-villa-cherie" className="h-5" />
            <span className="text-logo text-[21px] lg:text-[23px] font-body tracking-tight">
              Villa Chérie
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => {
              const isActive = activeLink === item.label;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveLink(item.label)}
                  className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            className="md:hidden p-2 text-logo hover:text-details transition-colors cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>

        </div>

        <a
          href="#catalog"
          onClick={() => setActiveLink("Catálogo")}
          className="pointer-events-auto group hidden sm:flex items-center gap-3.5 h-15 px-7 lg:px-8 rounded-4xl bg-[#f5f5f5] shadow-sm border border-black/5 hover:bg-details transition-all duration-300 shrink-0 cursor-pointer"
        >

          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-details group-hover:bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-details group-hover:bg-white transition-colors"></span>
          </span>

          <span className="font-body text-sm lg:text-base text-logo group-hover:text-white transition-colors whitespace-nowrap">
            Explore <strong className="font-semibold">VillaChérie</strong>
          </span>

          <svg
            className="w-4 h-4 text-details group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>

      </div>

      {menuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 max-w-6xl mx-auto rounded-3xl bg-[#f5f5f5] shadow-lg border border-black/5 p-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeLink === item.label;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveLink(item.label);
                  setMenuOpen(false);
                }}
                className={`${baseClasses} text-center ${isActive ? activeClasses : inactiveClasses
                  }`}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href="#catalog"
            onClick={() => {
              setActiveLink("Catálogo");
              setMenuOpen(false);
            }}
            className="sm:hidden mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-4xl bg-details text-white font-body text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
            Explore VillaChérie
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
