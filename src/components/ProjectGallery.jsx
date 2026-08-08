import React, { useState } from 'react';
import { galleryItems } from '../data/companyData';

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Timber', 'Aluminium', 'Glass', 'Windows', 'Garage Doors', 'Repairs'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
            PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#292526]">
            Selected Work
          </h2>
          <p className="text-[#6F6865] text-base">
            A look at some of the doors, windows and architectural solutions we've created.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
                activeFilter === cat
                  ? 'bg-[#582A47] text-white shadow-sm'
                  : 'bg-[#F5F0E8] text-[#292526] hover:bg-[#E8DCCB] border border-[#E6DED5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-[#E6DED5] rounded-xl overflow-hidden shadow-subtle hover:border-[#582A47] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-[#F5F0E8]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-[#582A47] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-serif text-[#292526] group-hover:text-[#582A47] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6F6865] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
