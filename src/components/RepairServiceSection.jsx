import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Wrench } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function RepairServiceSection() {
  return (
    <section className="py-16 md:py-20 bg-[#E8DCCB] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="bg-white p-8 sm:p-12 border border-[#292526]/10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-subtle">
          
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs uppercase font-bold tracking-widest text-[#582A47] flex items-center gap-1.5">
              <Wrench size={14} />
              <span>REPAIR & RESTORATION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-[#292526] leading-snug">
              Already have a door or window that needs attention?
            </h2>

            <p className="text-[#6F6865] text-sm leading-relaxed">
              We also repair existing doors and windows across Johannesburg, helping restore functionality, track alignment, weather-sealing, and Silkwood oil timber appearance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0 w-full md:w-auto">
            <Link to="/repairs" className="btn-maroon text-sm py-3.5 px-6 w-full sm:w-auto">
              <span>Enquire About Repairs</span>
              <ArrowRight size={16} />
            </Link>

            <a href={`tel:${companyInfo.phone}`} className="btn-secondary-architectural text-sm py-3.5 px-6 w-full sm:w-auto">
              <Phone size={14} className="text-[#582A47]" />
              <span>Call {companyInfo.phone}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
