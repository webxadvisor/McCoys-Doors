import React from 'react';
import { Star, Quote } from 'lucide-react';
import { customerReviews } from '../data/companyData';

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#F5F0E8] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#292526]">
            Trusted by Our Customers
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-[#E6DED5] rounded-xl flex flex-col justify-between shadow-subtle relative"
            >
              <Quote size={32} className="text-[#582A47]/10 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#582A47] text-[#582A47]" />
                  ))}
                </div>

                <p className="text-sm font-serif italic text-[#292526] leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E6DED5]/60 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[#292526]">
                    {rev.author}
                  </h3>
                  <span className="text-[11px] text-[#6F6865]">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
