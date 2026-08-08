import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function MajorCTA() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=Hi%20McCoy's%20Team,%20I'm%20interested%20in%20a%20quote%20for%20custom%20doors/windows.`, '_blank');
  };

  return (
    <section className="py-24 md:py-32 bg-[#582A47] text-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-8">
        
        <h2 className="text-4xl sm:text-5xl font-serif leading-tight">
          Let's create something made for your space.
        </h2>

        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Tell us what you're looking for and our team will help you find the right custom timber, aluminium or glass solution.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/quote"
            className="px-8 py-4 bg-white text-[#582A47] hover:bg-[#F5F0E8] font-semibold text-sm rounded shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Request a Quote</span>
            <ArrowRight size={16} />
          </Link>

          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-transparent border border-white/40 hover:bg-white/10 text-white font-semibold text-sm rounded transition-all inline-flex items-center gap-2"
          >
            <MessageSquare size={16} />
            <span>WhatsApp Us</span>
          </button>
        </div>

      </div>
    </section>
  );
}
