import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function MobileBottomBar() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=Hi%20McCoy's%20Team,%20I'd%20like%20to%20enquire%20about%20a%20quote.`, '_blank');
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E6DED5] px-4 py-2 flex items-center justify-between shadow-xl pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <a
        href={`tel:${companyInfo.phone}`}
        className="flex items-center gap-2 py-2 px-3 text-[#292526] hover:text-[#582A47] text-xs font-semibold rounded bg-[#F5F0E8] border border-[#E6DED5]"
      >
        <Phone size={15} className="text-[#582A47]" />
        <span>Call</span>
      </a>

      <button
        onClick={handleWhatsApp}
        className="flex items-center gap-2 py-2 px-3 text-[#292526] hover:text-[#582A47] text-xs font-semibold rounded bg-[#F5F0E8] border border-[#E6DED5]"
      >
        <MessageSquare size={15} className="text-[#582A47]" />
        <span>WhatsApp</span>
      </button>

      <Link
        to="/quote"
        className="flex items-center gap-1.5 py-2 px-4 bg-[#582A47] hover:bg-[#451F37] text-white rounded text-xs font-semibold shadow-sm"
      >
        <FileText size={14} />
        <span>Get Quote</span>
      </Link>
    </div>
  );
}
