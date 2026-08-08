import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AluminiumSection() {
  const aluminiumProducts = [
    'Aluminium Doors',
    'Aluminium Windows',
    'Aluminium Pivot Doors',
    'Aluminium Folding Doors',
    'Aluminium Garage Doors',
    'Aluminium Louvres'
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (6 Cols) - Image */}
          <div className="lg:col-span-6">
            <div className="p-3 bg-[#E8DCCB] rounded-xl">
              <div className="rounded-lg overflow-hidden h-[420px] sm:h-[480px]">
                <img
                  src="/images/mccoy-aluminium-bifold-patio-door-01.webp"
                  alt="McCoy's Black Powder Coated Aluminium Bifold Stacker Patio Doors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column (6 Cols) - Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
              ALUMINIUM
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#292526] leading-tight">
              Contemporary lines.<br />
              Built to perform.
            </h2>

            <p className="text-[#6F6865] text-base leading-relaxed">
              Our aluminium systems combine clean modern aesthetics with practical performance, making them suitable for contemporary residential and commercial applications across Johannesburg.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {aluminiumProducts.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#E6DED5] px-4 py-2.5 rounded text-xs font-semibold text-[#292526] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#582A47]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/aluminium-doors" className="btn-maroon text-sm py-3.5 px-7">
                <span>Explore Aluminium</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
