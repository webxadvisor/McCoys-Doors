import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Phone, Check, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function RepairsPage() {
  const repairServices = [
    { title: "Track & Roller Replacements", desc: "Restore smooth sliding and folding action for patio doors and sliding stackers." },
    { title: "Hinge & Pivot Realignment", desc: "Fix sagging doors, sticking frames, and worn pivot bearings for effortless operation." },
    { title: "Glass Pane & Rubber Seal Replacement", desc: "Replace cracked glass, damaged seals, misted double glazing, and rubber gaskets." },
    { title: "Timber Sanding & Silkwood Oil Refurbishment", desc: "Strip weather-beaten timber doors, sand down, and re-treat with Silkwood oil to restore factory sheen." },
    { title: "Lock & Handle Hardware Upgrades", desc: "Replace faulty mortise locks, multipoint locks, stainless steel handles, and weatherstrips." },
    { title: "Garage Door Sectional Maintenance", desc: "Repair warped timber panels, replace rollers, cables, and spring tensioners." }
  ];

  return (
    <main className="pt-28 pb-20 bg-[#FCFAF7]">
      
      {/* Hero */}
      <section className="py-16 md:py-24 bg-[#E8DCCB] border-b border-[#E6DED5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase font-bold tracking-widest text-[#582A47] flex items-center gap-2">
              <Wrench size={16} />
              <span>REPAIR & MAINTENANCE SERVICES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#292526]">
              Door & Window Repairs in Johannesburg.
            </h1>
            <p className="text-[#292526]/80 text-base leading-relaxed">
              McCoy's doesn't only manufacture new products. We provide professional repairs, refurbishment, hinge realignments, glass replacements, and Silkwood oil sealing to extend the lifespan of your existing installations.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link to="/quote" className="btn-maroon text-sm py-3.5 px-7">
                <span>Book a Repair Technician</span>
              </Link>
              <a href={`tel:${companyInfo.phone}`} className="btn-secondary-architectural text-sm py-3.5 px-7">
                <Phone size={14} className="text-[#582A47]" />
                <span>Call {companyInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-5 sm:px-8 border-b border-[#E6DED5]">
        <h2 className="text-3xl font-serif text-[#292526] mb-12 text-center">
          Comprehensive Repair Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {repairServices.map((srv, idx) => (
            <div key={idx} className="bg-white p-6 border border-[#E6DED5] rounded-xl space-y-3 shadow-subtle">
              <div className="w-8 h-8 rounded bg-[#582A47]/10 text-[#582A47] flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-serif text-[#292526]">{srv.title}</h3>
              <p className="text-xs text-[#6F6865] leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
