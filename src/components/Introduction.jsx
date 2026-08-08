import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Introduction() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="w-12 h-0.5 bg-[#582A47] mb-4" />
            <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
              THE McCOY'S DIFFERENCE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#292526] leading-tight">
              Craftsmanship with a sense of place.
            </h2>
          </div>

          {/* Right Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#6F6865] text-base leading-relaxed">
            <p className="text-lg text-[#292526] font-normal">
              Established in 1995, McCoy's Doors & Windows manufactures exclusive standard and custom-made products in timber, aluminium and glass.
            </p>

            <p>
              From residential homes to commercial projects across Johannesburg, our focus is on quality workmanship, thoughtful design and solutions made to suit each individual space.
            </p>

            <div className="pt-2">
              <Link to="/custom-doors" className="inline-flex items-center gap-2 text-sm font-semibold text-[#582A47] hover:underline">
                <span>Learn More About McCoy's</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
