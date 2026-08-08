import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { productCategories } from '../data/companyData';

export default function ProductCollection() {
  return (
    <section id="collection" className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
            OUR RANGE
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#292526]">
            Our Product Collection
          </h2>
          <p className="text-[#6F6865] text-base">
            From timeless timber craftsmanship to contemporary aluminium and glass systems.
          </p>
        </div>

        {/* 6-Card Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.route}
              className="group bg-white border border-[#E6DED5] rounded-xl overflow-hidden shadow-subtle hover:border-[#582A47] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden bg-[#F5F0E8]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-mono font-bold text-[#582A47]">
                  {cat.number}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif text-[#292526] group-hover:text-[#582A47] transition-colors mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-medium text-[#582A47] mb-2 uppercase tracking-wider">
                    {cat.subtitle}
                  </p>
                  <p className="text-xs text-[#6F6865] leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6DED5]/60 flex items-center justify-between text-xs font-semibold text-[#582A47]">
                  <span>Explore {cat.title}</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
