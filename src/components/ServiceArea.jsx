import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ServiceArea() {
  const suburbs = [
    'Kya Sand',
    'Bryanston',
    'Sandton',
    'Fourways',
    'Randburg',
    'Dainfern',
    'Northcliff',
    'Lonehill',
    'Waterfall Estate',
    'Midrand'
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
              LOCATION & SERVICE AREA
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#292526]">
              Proudly Serving Greater Johannesburg
            </h2>

            <p className="text-[#6F6865] text-base leading-relaxed">
              Based at our workshop and showroom in <strong className="text-[#292526]">Kya Sand, Johannesburg</strong>, McCoy's provides manufacturing, on-site measurement, installation, and repair services across Gauteng.
            </p>

            {/* Suburbs Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {suburbs.map((sub, idx) => (
                <span key={idx} className="bg-[#F5F0E8] border border-[#E6DED5] px-3 py-1.5 rounded text-xs font-medium text-[#292526] flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#582A47]" />
                  <span>{sub}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 border border-[#E6DED5] rounded-xl space-y-6 shadow-subtle">
            <h3 className="text-xl font-serif text-[#292526]">
              Kya Sand Workshop & Showroom
            </h3>

            <div className="space-y-4 text-sm text-[#6F6865]">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#582A47] shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#582A47] shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-[#582A47] font-mono text-[#292526] font-semibold">
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#582A47] shrink-0" />
                <span>{companyInfo.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-architectural text-xs w-full justify-center"
              >
                <span>Get Driving Directions to Kya Sand</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
