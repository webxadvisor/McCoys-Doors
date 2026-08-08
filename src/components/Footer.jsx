import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer() {
  return (
    <footer className="bg-[#FCFAF7] border-t border-[#E6DED5] pt-16 pb-24 md:pb-16 text-xs text-[#6F6865]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/images/logo.png" 
                alt="McCoy's Doors & Windows (Pty) Ltd" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="max-w-sm leading-relaxed text-[#6F6865]">
              Custom timber, aluminium and glass doors and windows, crafted in Johannesburg since 1995.
            </p>
          </div>

          {/* Products Column */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-[#292526] text-[11px]">
              PRODUCTS
            </h4>
            <ul className="space-y-2">
              <li><Link to="/timber-doors" className="hover:text-[#582A47] transition-colors">Timber Doors</Link></li>
              <li><Link to="/aluminium-doors" className="hover:text-[#582A47] transition-colors">Aluminium Doors</Link></li>
              <li><Link to="/windows" className="hover:text-[#582A47] transition-colors">Windows</Link></li>
              <li><Link to="/frameless-doors" className="hover:text-[#582A47] transition-colors">Frameless Doors</Link></li>
              <li><Link to="/garage-doors" className="hover:text-[#582A47] transition-colors">Garage Doors</Link></li>
              <li><Link to="/glass-solutions" className="hover:text-[#582A47] transition-colors">Glass Solutions</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-[#292526] text-[11px]">
              COMPANY
            </h4>
            <ul className="space-y-2">
              <li><a href="/#about" className="hover:text-[#582A47] transition-colors">About</a></li>
              <li><a href="/#gallery" className="hover:text-[#582A47] transition-colors">Projects</a></li>
              <li><Link to="/custom-doors" className="hover:text-[#582A47] transition-colors">Custom Solutions</Link></li>
              <li><Link to="/repairs" className="hover:text-[#582A47] transition-colors">Repairs</Link></li>
              <li><Link to="/quote" className="hover:text-[#582A47] transition-colors">Contact & Quote</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-[#292526] text-[11px]">
              CONTACT
            </h4>
            <div className="space-y-2">
              <a href={`tel:${companyInfo.phone}`} className="hover:text-[#582A47] font-mono text-[#292526] font-semibold block">
                {companyInfo.phone}
              </a>
              <p className="leading-relaxed">
                Jura Shopping Centre, Shop 12<br />
                4753 Malibongwe Drive<br />
                Kya Sand, Johannesburg<br />
                2169, South Africa
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E6DED5] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6F6865]">
          <p>© {new Date().getFullYear()} McCoy's Doors & Windows (Pty) Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#582A47]">Privacy Policy</a>
            <a href="#" className="hover:text-[#582A47]">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
