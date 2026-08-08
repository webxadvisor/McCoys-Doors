import React from 'react';

export default function TrustStrip() {
  return (
    <section className="bg-[#E8DCCB] py-6 border-y border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center text-center divide-y md:divide-y-0 md:divide-x divide-[#292526]/10">
          
          <div className="pt-2 md:pt-0">
            <div className="font-serif text-2xl md:text-3xl text-[#582A47]">30+</div>
            <div className="text-xs uppercase font-medium tracking-wider text-[#292526]/80 mt-0.5">
              Years of Experience
            </div>
          </div>

          <div className="pt-2 md:pt-0 md:pl-6">
            <div className="font-serif text-2xl md:text-3xl text-[#582A47]">1995</div>
            <div className="text-xs uppercase font-medium tracking-wider text-[#292526]/80 mt-0.5">
              Established
            </div>
          </div>

          <div className="pt-2 md:pt-0 md:pl-6">
            <div className="font-serif text-2xl md:text-3xl text-[#582A47]">Custom</div>
            <div className="text-xs uppercase font-medium tracking-wider text-[#292526]/80 mt-0.5">
              Made to Specification
            </div>
          </div>

          <div className="pt-2 md:pt-0 md:pl-6">
            <div className="font-serif text-xl md:text-2xl text-[#292526]">Craftsmanship</div>
            <div className="text-xs uppercase font-medium tracking-wider text-[#292526]/80 mt-0.5">
              Timber · Aluminium · Glass
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
