import React, { useState } from "react";

const Topbar = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState("slider");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

  const handleNavigation = (section) => {
    setActiveSection(section);
    scrollToSection(section);
    setIsMobileMenuOpen(false); 
  };

  return (
    <div className="topBarSection">
      <header className="text-gray-600 body-font fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
          <a className="flex title-font font-medium items-center text-gray-900">
            <img
              src="/title.png"
              alt="Logo"
              className="w-auto h-10 sm:h-14 md:h-16 object-contain ml-20"
            />
          </a>

          <nav className="hidden sm:flex space-x-4 md:space-x-6 lg:space-x-8">
            {[
              { name: "Home", id: "slider" },
              { name: "About", id: "about" },
              { name: "Programs", id: "programs" },
              { name: "Gallery", id: "gallery" },
              { name: "Contact", id: "contact" },
            ].map(({ name, id }) => (
              <a
                key={id}
                onClick={() => handleNavigation(id)}
                className={`relative px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold cursor-pointer transition-all duration-500 ease-in-out ${
                  activeSection === id
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                <span className="relative z-10">{name}</span>
                {activeSection === id && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-100 transition-transform duration-500 ease-in-out"></span>
                )}
                {activeSection !== id && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-500 ease-in-out hover:scale-x-100"></span>
                )}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/919948388222"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <img className="w-14 sm:w-16" src="wap.png" alt="WhatsApp" />
          </a>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
  <nav className="sm:hidden bg-white shadow-md">
    <ul className="flex flex-col space-y-2 py-4 px-6">
      {[
        { name: "Home", id: "slider" },
        { name: "About", id: "about" },
        { name: "Programs", id: "programs" },
        { name: "Gallery", id: "gallery" },
        { name: "Contact", id: "contact" },
      ].map(({ name, id }) => (
        <li key={id}>
          <a
            onClick={() => handleNavigation(id)}
            className={`block px-4 py-2 text-sm font-semibold cursor-pointer transition-all duration-300 ${
              activeSection === id
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {name}
          </a>
        </li>
      ))}
      {/* WhatsApp Icon for Mobile Menu */}
      <li>
        <a
          href="https://wa.me/919948388222"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300"
        >
          <img className="w-6 h-6" src="wap.png" alt="WhatsApp" />
          <span>WhatsApp</span>
        </a>
      </li>
    </ul>
  </nav>
)}

      </header>
      <div className="h-16 sm:h-20"></div>
    </div>
  );
};

export default Topbar;
