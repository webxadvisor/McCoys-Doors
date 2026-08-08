import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TimberSection() {
  const timberProducts = [
    'Solid Timber Doors',
    'Meranti Doors',
    'Barn Doors',
    'Pivot Doors',
    'Folding Doors',
    'Sliding Doors'
  ];

  return (
    <section className="py-20 md:py-28 bg-[#E8DCCB] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (6 Cols) - Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
              TIMBER COLLECTION
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#292526] leading-tight">
              Natural timber.<br />
              Distinctive character.
            </h2>

            <p className="text-[#292526]/80 text-base leading-relaxed">
              From solid timber and Meranti doors to elegant folding, sliding and pivot systems, our timber range brings warmth and character to residential and commercial spaces across Johannesburg.
            </p>

            {/* Product List Pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {timberProducts.map((item, idx) => (
                <div key={idx} className="bg-white/80 border border-[#292526]/10 px-4 py-2.5 rounded text-xs font-semibold text-[#292526] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#582A47]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/timber-doors" className="btn-maroon text-sm py-3.5 px-7">
                <span>Explore Timber Doors</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column (6 Cols) - Timber Image */}
          <div className="lg:col-span-6">
            <div className="bg-white p-3 rounded-xl shadow-subtle">
              <div className="rounded-lg overflow-hidden h-[420px] sm:h-[480px]">
                <img
                  src="/images/mccoy-timber-entrance-double-door-01.webp"
                  alt="McCoy's Crafted Meranti Hardwood Double Entrance Doors"
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
