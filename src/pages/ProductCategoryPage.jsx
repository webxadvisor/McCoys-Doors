import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, HelpCircle } from 'lucide-react';
import { productCategories, companyInfo } from '../data/companyData';

export default function ProductCategoryPage({ categoryId }) {
  const { category: urlCat } = useParams();
  const currentId = categoryId || urlCat || 'timber-doors';

  const category = productCategories.find(c => c.id === currentId) || productCategories[0];

  const categoryDetails = {
    'timber-doors': {
      heroImg: '/images/mccoy-timber-pivot-door-01.webp',
      intro: 'Our custom timber doors combine traditional artisan woodworking with contemporary architectural design. Solid Meranti, Oak, and custom hardwoods built for beauty, strength, and structural durability.',
      benefits: ['Natural warm wood grain aesthetics', 'High acoustic and thermal insulation', '100% custom sizing for non-standard openings', 'Silkwood oil factory treatment'],
      galleryImages: [
        '/images/mccoy-timber-pivot-door-01.webp',
        '/images/mccoy-timber-entrance-double-door-01.webp',
        '/images/mccoy-timber-bifold-stacker-door-01.webp',
        '/images/mccoy-timber-sliding-patio-door-01.webp',
        '/images/mccoy-timber-barn-door-01.webp'
      ],
      faqs: [
        { q: "What timber types do you manufacture with?", a: "We primarily manufacture with solid Meranti and premium hardwoods, offering excellent stability in South African weather." },
        { q: "Can you make custom pivot doors?", a: "Yes, grand pivot doors are one of our key specialities, manufactured with heavy-duty floor springs and handles." }
      ]
    },
    'aluminium-doors': {
      heroImg: '/images/mccoy-aluminium-bifold-patio-door-01.webp',
      intro: 'Modern architectural aluminium door systems engineered for slim sightlines, smooth glide, and long-term durability in residential homes and commercial buildings.',
      benefits: ['Virtually zero maintenance required', 'Powder-coated in matte black, charcoal, bronze, and white', 'Sleek thin sightlines for maximum glass area', 'Weatherproof sealing and corrosion resistance'],
      galleryImages: [
        '/images/mccoy-aluminium-bifold-patio-door-01.webp',
        '/images/mccoy-aluminium-sliding-glass-door-01.webp',
        '/images/mccoy-aluminium-casement-window-01.webp'
      ],
      faqs: [
        { q: "Are your aluminium doors powder coated?", a: "Yes, all aluminium extrusions receive architectural powder-coating in custom colours including matte black, charcoal, bronze, and white." }
      ]
    },
    'windows': {
      heroImg: '/images/mccoy-timber-casement-cottage-window-01.webp',
      intro: 'Custom timber and aluminium window solutions designed for thermal performance, acoustic isolation, and architectural harmony.',
      benefits: ['Custom side-hung, top-hung awning, and sliding sash', 'Double glazing for thermal insulation', 'Arched and cottage window configurations', 'SANS glass compliance'],
      galleryImages: [
        '/images/mccoy-timber-casement-cottage-window-01.webp',
        '/images/mccoy-aluminium-casement-window-01.webp'
      ],
      faqs: [
        { q: "Do you supply double glazed windows?", a: "Yes, we supply sealed double glazed units to insulate against winter cold and summer heat." }
      ]
    },
    'frameless-doors': {
      heroImg: '/images/mccoy-frameless-glass-entrance-01.webp',
      intro: 'Frameless glass folding and sliding door systems that maximise natural light and create seamless transitions between patio and indoor lounge spaces.',
      benefits: ['Heavy-duty toughened safety glass', 'Minimalist architectural appearance', 'Panoramic uninterrupted garden views', 'Stainless steel floor springs and patch fittings'],
      galleryImages: [
        '/images/mccoy-frameless-glass-entrance-01.webp',
        '/images/mccoy-frameless-glass-balustrade-01.webp'
      ],
      faqs: [
        { q: "Are frameless glass doors weather sealed?", a: "Yes, we integrate UV-stabilized inter-panel clear seals to ensure wind and rain protection." }
      ]
    },
    'garage-doors': {
      heroImg: '/images/mccoy-garage-door-timber-slatted-01.webp',
      intro: 'Sectional garage doors crafted in horizontal slatted timber, aluminium cladding, glass panels, and Chromadek to match your home\'s main entrance.',
      benefits: ['Automated sectional opening action', 'Custom timber match to front pivot door', 'Available in double charcoal, bronze, and slatted Meranti', 'Durable hardware and tension springs'],
      galleryImages: [
        '/images/mccoy-garage-door-timber-slatted-01.webp',
        '/images/mccoy-garage-door-chromadek-sectional-01.webp'
      ],
      faqs: [
        { q: "Can you match the garage door to my timber front door?", a: "Yes, we custom build wooden sectional garage doors using matching Meranti slats and oil finishes." }
      ]
    },
    'glass-solutions': {
      heroImg: '/images/mccoy-frameless-glass-balustrade-01.webp',
      intro: 'Architectural glass solutions including laminated safety glass, double glazing, Low-E thermal glass, shower enclosures, and glass balustrades.',
      benefits: ['Glass balustrades with stainless steel spigots', 'Low-E energy efficient glass options', 'Laminated safety glass compliance', 'Shower enclosures and partition walls'],
      galleryImages: [
        '/images/mccoy-frameless-glass-balustrade-01.webp',
        '/images/mccoy-frameless-glass-entrance-01.webp'
      ],
      faqs: [
        { q: "What glass thickness do you use for balustrades?", a: "We use 12mm to 15mm toughened or laminated safety glass meeting all SANS structural safety codes." }
      ]
    }
  };

  const details = categoryDetails[currentId] || categoryDetails['timber-doors'];

  return (
    <main className="pt-28 pb-20 bg-[#FCFAF7]">
      
      {/* Category Hero */}
      <section className="py-16 md:py-24 bg-[#F5F0E8] border-b border-[#E6DED5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
                PRODUCT CATEGORY
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif text-[#292526]">
                {category.title}
              </h1>
              <p className="text-[#6F6865] text-base leading-relaxed max-w-xl">
                {details.intro}
              </p>
              <div className="pt-4 flex items-center gap-4">
                <Link to="/quote" className="btn-maroon text-sm py-3 px-6">
                  <span>Request Quote for {category.title}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-3 bg-[#E8DCCB] rounded-xl">
                <div className="rounded-lg overflow-hidden h-80 sm:h-96">
                  <img src={details.heroImg} alt={category.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Product Types & Specs */}
      <section className="py-20 max-w-7xl mx-auto px-5 sm:px-8 border-b border-[#E6DED5]">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#292526] mb-8">
          Available Configurations & Specifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {category.items.map((item, idx) => (
            <div key={idx} className="p-4 bg-white border border-[#E6DED5] rounded-lg flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#582A47]/10 text-[#582A47] flex items-center justify-center text-xs shrink-0">
                <Check size={14} />
              </span>
              <span className="text-sm font-medium text-[#292526]">{item}</span>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <h3 className="text-xl font-serif text-[#292526] mb-6">
          Key Advantages
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {details.benefits.map((b, i) => (
            <div key={i} className="p-5 bg-[#F5F0E8] border border-[#E6DED5] rounded-lg space-y-2">
              <ShieldCheck size={20} className="text-[#582A47]" />
              <p className="text-xs font-semibold text-[#292526] leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        {/* Gallery Showcase */}
        <h3 className="text-xl font-serif text-[#292526] mb-6">
          {category.title} Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {details.galleryImages.map((img, idx) => (
            <div key={idx} className="h-64 rounded-xl overflow-hidden border border-[#E6DED5] bg-white">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* FAQs */}
        {details.faqs && (
          <div className="max-w-3xl space-y-6">
            <h3 className="text-xl font-serif text-[#292526] flex items-center gap-2">
              <HelpCircle size={20} className="text-[#582A47]" />
              <span>Frequently Asked Questions</span>
            </h3>
            {details.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-white border border-[#E6DED5] rounded-xl space-y-2">
                <h4 className="font-semibold text-sm text-[#292526]">{faq.q}</h4>
                <p className="text-xs text-[#6F6865] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* Quote Banner */}
      <section className="py-16 bg-[#582A47] text-white text-center">
        <div className="max-w-3xl mx-auto px-5 space-y-6">
          <h2 className="text-3xl font-serif">Ready to order custom {category.title}?</h2>
          <p className="text-sm text-white/80">Contact Cindy and our team at McCoy's Kya Sand workshop for site measurement and official quote.</p>
          <Link to="/quote" className="inline-block px-8 py-3.5 bg-white text-[#582A47] font-semibold text-sm rounded shadow hover:bg-[#F5F0E8] transition-colors">
            Request Quote Now
          </Link>
        </div>
      </section>

    </main>
  );
}
