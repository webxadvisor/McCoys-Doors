import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Compass, Ruler, Hammer, ShieldCheck } from 'lucide-react';
import { processSteps, companyInfo } from '../data/companyData';

export default function CustomDoorsPage() {
  return (
    <main className="pt-28 pb-20 bg-[#FCFAF7]">
      
      {/* Hero */}
      <section className="py-16 md:py-24 bg-[#F5F0E8] border-b border-[#E6DED5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
              CUSTOM SOLUTIONS
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#292526]">
              Made Around Your Architectural Blueprint.
            </h1>
            <p className="text-[#6F6865] text-base leading-relaxed">
              Standard sizes don't fit every property. At McCoy's, we design, manufacture, and install custom-made timber, aluminium, and glass doors and windows built around your dimensions, materials, and functional requirements.
            </p>
            <div className="pt-4">
              <Link to="/quote" className="btn-maroon text-sm py-3.5 px-7">
                <span>Start Your Custom Order</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="py-20 max-w-7xl mx-auto px-5 sm:px-8 border-b border-[#E6DED5]">
        <h2 className="text-3xl font-serif text-[#292526] mb-12 text-center">
          Our 4-Step Custom Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step) => (
            <div key={step.number} className="bg-white p-6 border border-[#E6DED5] rounded-xl space-y-3 shadow-subtle">
              <div className="text-2xl font-serif text-[#582A47] font-semibold">{step.number}</div>
              <h3 className="text-lg font-serif text-[#292526]">{step.title}</h3>
              <p className="text-xs text-[#6F6865] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Custom Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-serif text-[#292526]">What We Can Customise:</h3>
            <ul className="space-y-3 text-sm text-[#292526]">
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#582A47]" />
                <span>Custom opening heights up to 3.2m and widths up to 6m</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#582A47]" />
                <span>Solid Meranti timber, Oak, and custom timber slats</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#582A47]" />
                <span>Matte black, charcoal, bronze powder-coated aluminium</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#582A47]" />
                <span>Single, double glazed, Low-E, and frosted glass panes</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={16} className="text-[#582A47]" />
                <span>Stainless steel floor springs, long bar handles, & ironmongery</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="p-3 bg-[#E8DCCB] rounded-xl">
              <div className="h-80 rounded-lg overflow-hidden">
                <img src="/images/mccoy-timber-pivot-door-02.webp" alt="McCoy's Custom Doors" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
