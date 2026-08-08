import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Image */}
          <div className="lg:col-span-6">
            <div className="p-3 bg-[#E8DCCB] rounded-xl">
              <div className="rounded-lg overflow-hidden h-[420px] sm:h-[480px]">
                <img
                  src="/images/mccoy-repairs-craftsman-assembly-01.webp"
                  alt="McCoy's Doors & Windows Kya Sand Workshop Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
              OUR HERITAGE
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#292526] leading-tight">
              More than three decades of craftsmanship.
            </h2>

            <p className="text-[#292526] text-base font-normal leading-relaxed">
              Established in 1995, McCoy's Doors & Windows has built its reputation through quality products, personal service and attention to detail.
            </p>

            <p className="text-[#6F6865] text-sm leading-relaxed">
              Today, we continue to manufacture custom timber, aluminium and glass solutions for residential estates, architectural homes, and commercial clients who value quality and individuality.
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
