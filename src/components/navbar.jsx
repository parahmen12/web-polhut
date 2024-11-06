  import React, { useState, useEffect } from 'react';

  const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // Function to handle smooth scrolling
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    };

    return (
      <nav
        className={`fixed w-full top-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 transition-all duration-300 ${
          scrolled ? 'bg-green-950/80 shadow-md' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className="logo ml-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Lambang_Polhut.png"
            alt="Logo Polhut"
            className="h-10 md:h-14"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-gray-100 md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation items for Desktop */}
        <ul className="hidden md:flex space-x-10 font-bold text-lg items-center text-gray-100 mr-4 mb-5 ">
        <li>
          <button
            onClick={() => scrollToSection('home')}
            className={`nav-link transition-colors ${
              scrolled ? 'hover:text-white hover:border-b-2 hover:border-white' : 'hover:text-black'
            }`}
          >
            HOME
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('forrestTeam')}
            className={`nav-link transition-colors ${
              scrolled ? 'hover:text-white hover:border-b-2 hover:border-white' : 'hover:text-black'
            }`}
          >
            TEAM KAMI
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('forrestNews')}
            className={`nav-link transition-colors ${
              scrolled ? 'hover:text-white hover:border-b-2 hover:border-white' : 'hover:text-black'
            }`}
          >
            BERITA KAMI
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('forrestActivities')}
            className={`nav-link transition-colors ${
              scrolled ? 'hover:text-white hover:border-b-2 hover:border-white' : 'hover:text-black'
            }`}
          >
            KEGIATAN KAMI
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('forrestContact')}
            className={`nav-link transition-colors ${
              scrolled ? 'hover:text-white hover:border-b-2 hover:border-white' : 'hover:text-black'
            }`}
          >
            CONTACT
          </button>
        </li>
        <li className="ml-4">
          <a href="https://kawal-desa.lskk.co.id/login"
             className="px-6 py-3 text-white font-semibold bg-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </a>
        </li>
      </ul>


        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-green-950/90 transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button
            className="text-white absolute top-5 right-5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="flex flex-col items-center justify-center h-full space-y-6 text-2xl font-semibold text-white">
            <li>
              <button onClick={() => scrollToSection('home')}>HOME</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('forrestTeam')}>TEAM KAMI</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('forrestNews')}>BERITA KAMI</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('forrestActivities')}>KEGIATAN KAMI</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('forrestContact')}>CONTACT</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;
