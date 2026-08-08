import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '../data/companyData';

export default function CustomSolutionsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E6DED5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
            CUSTOM MANUFACTURING
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#292526]">
            Made around your requirements.
          </h2>
          <p className="text-[#6F6865] text-base leading-relaxed">
            Not every opening is standard. McCoy's specialises in custom-made doors and windows designed around your dimensions, materials, finishes and functional requirements.
          </p>
        </div>

        {/* 4-Step Process Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {processSteps.map((step) => (
            <div key={step.number} className="bg-white p-6 border border-[#E6DED5] rounded-xl space-y-3">
              <div className="text-2xl font-serif font-semibold text-[#582A47]">
                {step.number}
              </div>
              <h3 className="text-lg font-serif text-[#292526]">
                {step.title}
              </h3>
              <p className="text-xs text-[#6F6865] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Link to="/quote" className="btn-maroon text-sm py-3.5 px-7">
            <span>Discuss Your Project</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
