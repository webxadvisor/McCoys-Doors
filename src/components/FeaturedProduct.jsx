import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export default function FeaturedProduct() {
  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (6 Cols) - Large Image */}
          <div className="lg:col-span-6">
            <div className="p-3 bg-[#E8DCCB] rounded-xl">
              <div className="rounded-lg overflow-hidden h-[450px] sm:h-[520px]">
                <img
                  src="/images/mccoy-timber-pivot-door-02.webp"
                  alt="Custom McCoy's Grand Timber Pivot Front Entrance Door"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column (6 Cols) - Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
              CUSTOM-MADE DOORS
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#292526] leading-tight">
              Designed around your entrance.
            </h2>

            <p className="text-[#6F6865] text-base leading-relaxed">
              Every entrance has its own character. Our custom doors are made to complement the architecture, proportions and personality of your property.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-[#292526]">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#582A47]/10 text-[#582A47] flex items-center justify-center text-xs shrink-0">
                  <Check size={13} />
                </span>
                <span>Millimetre-accurate custom dimensions</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#582A47]/10 text-[#582A47] flex items-center justify-center text-xs shrink-0">
                  <Check size={13} />
                </span>
                <span>Choice of solid Meranti, hardwoods & aluminium</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#582A47]/10 text-[#582A47] flex items-center justify-center text-xs shrink-0">
                  <Check size={13} />
                </span>
                <span>SANS compliant safety glass & double glazing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#582A47]/10 text-[#582A47] flex items-center justify-center text-xs shrink-0">
                  <Check size={13} />
                </span>
                <span>Wide range of stainless steel & iron hardware</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link to="/custom-doors" className="btn-maroon text-sm py-3.5 px-7">
                <span>Explore Custom Doors</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
