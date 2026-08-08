import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#E6DED5] py-4 shadow-sm' 
        : 'bg-[#FCFAF7] border-b border-[#E6DED5]/60 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/images/logo.png" 
            alt="McCoy's Doors & Windows (Pty) Ltd" 
            className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase font-semibold tracking-wider text-[#292526]">
          <Link to="/" className={`hover:text-[#582A47] transition-colors ${location.pathname === '/' ? 'text-[#582A47] font-bold' : ''}`}>
            Home
          </Link>

          <div className="relative group/dropdown">
            <Link to="/timber-doors" className="hover:text-[#582A47] transition-colors py-2 inline-flex items-center gap-1">
              <span>Products</span>
            </Link>
            <div className="absolute top-full left-0 w-56 bg-white border border-[#E6DED5] rounded-md shadow-lg p-2 hidden group-hover/dropdown:block animate-fade-in text-xs capitalize font-normal">
              <Link to="/timber-doors" className="block px-3 py-2 hover:bg-[#F5F0E8] hover:text-[#582A47] rounded">Timber Doors</Link>
              <Link to="/aluminium-doors" className="block px-3 py-2 hover:bg-[#F5F0E8] hover:text-[#582A47] rounded">Aluminium Doors</Link>
              <Link to="/windows" className="block px-3 py-2 hover:bg-[#F5F0E8] hover:text-[#582A47] rounded">Windows</Link>
              <Link to="/frameless-doors" className="block px-3 py-2 hover:bg-[#F5F0E8] hover:text-[#582A47] rounded">Frameless Doors</Link>
              <Link to="/garage-doors" className="block px-3 py-2 hover:bg-[#F5F0E8] hover:text-[#582A47] rounded">Garage Doors</Link>
              <Link to="/glass-solutions" className="block px-3 py-2 hover:bg-[#F5F0E8] hover:text-[#582A47] rounded">Glass Solutions</Link>
            </div>
          </div>

          <Link to="/custom-doors" className={`hover:text-[#582A47] transition-colors ${location.pathname === '/custom-doors' ? 'text-[#582A47] font-bold' : ''}`}>
            Custom Solutions
          </Link>

          <Link to="/repairs" className={`hover:text-[#582A47] transition-colors ${location.pathname === '/repairs' ? 'text-[#582A47] font-bold' : ''}`}>
            Repairs
          </Link>

          <a href="/#gallery" className="hover:text-[#582A47] transition-colors">
            Projects
          </a>

          <a href="/#about" className="hover:text-[#582A47] transition-colors">
            About
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a href={`tel:${companyInfo.phone}`} className="text-xs font-mono font-medium text-[#6F6865] hover:text-[#582A47] flex items-center gap-1.5">
            <Phone size={13} className="text-[#582A47]" />
            <span>{companyInfo.phone}</span>
          </a>

          <Link to="/quote" className="btn-maroon text-xs">
            <span>Request a Quote</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded text-[#292526] hover:text-[#582A47]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FCFAF7] border-b border-[#E6DED5] p-6 shadow-xl space-y-4 text-sm">
          <nav className="flex flex-col gap-3 font-medium text-[#292526]">
            <Link to="/" className="py-2 border-b border-[#E6DED5]/60 hover:text-[#582A47]">Home</Link>
            <Link to="/timber-doors" className="py-2 border-b border-[#E6DED5]/60 hover:text-[#582A47]">Timber Doors</Link>
            <Link to="/aluminium-doors" className="py-2 border-b border-[#E6DED5]/60 hover:text-[#582A47]">Aluminium Doors</Link>
            <Link to="/windows" className="py-2 border-b border-[#E6DED5]/60 hover:text-[#582A47]">Windows</Link>
            <Link to="/frameless-doors" className="py-2 border-b border-[#E6DED5]/60 hover:text-[#582A47]">Frameless Doors</Link>
            <Link to="/garage-doors" className="py-2 border-b border-[#E6DED5]/60 hover:text-[#582A47]">Garage Doors</Link>
            <Link to="/glass-solutions" className="py-2 border-b border-[#E6DED5]/60 hover:text-[#582A47]">Glass Solutions</Link>
            <Link to="/custom-doors" className="py-2 border-b border-[#E6DED5]/60 hover:text-[#582A47]">Custom Solutions</Link>
            <Link to="/repairs" className="py-2 border-b border-[#E6DED5]/60 hover:text-[#582A47]">Repairs & Maintenance</Link>

            <div className="pt-3 flex flex-col gap-3">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center justify-center gap-2 py-2.5 rounded border border-[#E6DED5] text-xs font-mono font-medium">
                <Phone size={14} className="text-[#582A47]" />
                <span>Call {companyInfo.phone}</span>
              </a>
              <Link to="/quote" className="btn-maroon w-full text-center">
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
