import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FCFAF7] border-b border-[#E6DED5]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 Cols) - Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Label */}
            <div className="text-[11px] uppercase font-bold tracking-widest text-[#582A47]">
              ESTABLISHED 1995 · JOHANNESBURG
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#292526] leading-[1.12]">
              Doors & Windows,<br />
              <span className="italic text-[#582A47]">Made for Your Space.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6F6865] max-w-xl font-normal leading-relaxed">
              Custom timber, aluminium and glass solutions crafted with experience, precision and care. From distinctive entrance doors to elegant folding systems and architectural glass, McCoy's creates products designed around the way you live and build.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/quote" className="btn-maroon text-sm py-3.5 px-7">
                <span>Request a Quote</span>
                <ArrowRight size={16} />
              </Link>

              <a href="#collection" className="btn-secondary-architectural text-sm py-3.5 px-7">
                Explore Our Products
              </a>
            </div>

            {/* Materials Tagline */}
            <div className="pt-4 text-xs font-semibold text-[#6F6865] tracking-wider uppercase flex items-center gap-3">
              <span>Timber</span>
              <span className="text-[#582A47]">·</span>
              <span>Aluminium</span>
              <span className="text-[#582A47]">·</span>
              <span>Glass</span>
            </div>

          </div>

          {/* Right Column (5 Cols) - Sand Framed Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-3 bg-[#E8DCCB] rounded-xl shadow-sm">
              <div className="rounded-lg overflow-hidden h-[420px] sm:h-[480px]">
                <img
                  src="/images/mccoy-timber-pivot-door-01.webp"
                  alt="McCoy's Custom Timber Door Installation Johannesburg"
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
