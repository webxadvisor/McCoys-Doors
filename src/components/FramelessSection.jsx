import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FramelessSection() {
  const glassHighlights = [
    'Frameless Folding Doors',
    'Frameless Entrance Units',
    'Sliding Systems',
    'Glass Balustrading',
    'Double Glazing',
    'Low-E Glass',
    'Laminated Safety Glass'
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (6 Cols) - Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
              ARCHITECTURAL GLASS
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#292526] leading-tight">
              Bring more light into the space.
            </h2>

            <p className="text-[#6F6865] text-base leading-relaxed">
              Our frameless and glass solutions create clean transitions between interior and exterior spaces while allowing natural light to become part of the architecture.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {glassHighlights.map((item, idx) => (
                <span key={idx} className="bg-[#F5F0E8] border border-[#E6DED5] px-3.5 py-1.5 rounded text-xs font-medium text-[#292526]">
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/glass-solutions" className="btn-maroon text-sm py-3.5 px-7">
                <span>Explore Glass Solutions</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column (6 Cols) - Architectural Image */}
          <div className="lg:col-span-6">
            <div className="p-3 bg-[#E8DCCB] rounded-xl">
              <div className="rounded-lg overflow-hidden h-[420px] sm:h-[480px]">
                <img
                  src="/images/mccoy-frameless-glass-entrance-01.webp"
                  alt="McCoy's Frameless Glass Balustrade & Entrance Wall"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
