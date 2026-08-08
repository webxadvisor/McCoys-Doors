import React from 'react';
import { whyChooseUs } from '../data/companyData';

export default function WhyMcCoys() {
  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
            TRUSTED EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#292526]">
            Why McCoy's
          </h2>
        </div>

        {/* 4 Minimalist Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item) => (
            <div key={item.number} className="p-6 bg-white border border-[#E6DED5] rounded-xl space-y-3 shadow-subtle">
              <div className="text-xl font-serif font-semibold text-[#582A47]">
                {item.number}
              </div>
              <h3 className="text-lg font-serif text-[#292526]">
                {item.title}
              </h3>
              <p className="text-xs text-[#6F6865] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
