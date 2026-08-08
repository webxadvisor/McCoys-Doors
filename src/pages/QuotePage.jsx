import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential',
    material: 'Timber',
    service: 'New Door',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Hi McCoy's Team, I would like to request a quote:%0A%0A` +
      `- Name: ${formData.name}%0A` +
      `- Phone: ${formData.phone}%0A` +
      `- Project Type: ${formData.projectType}%0A` +
      `- Material: ${formData.material}%0A` +
      `- Service: ${formData.service}%0A` +
      `- Message: ${formData.message}`;

    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <main className="pt-28 pb-20 bg-[#FCFAF7]">
      
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs uppercase font-bold tracking-widest text-[#582A47]">
            REQUEST A QUOTE
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#292526]">
            Tell Us About Your Project
          </h1>
          <p className="text-[#6F6865] text-base leading-relaxed">
            Send us your architectural blueprints, measurements, or project requirements and Cindy and our technical team in Kya Sand will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Quote Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#E6DED5] rounded-xl shadow-subtle">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle size={48} className="text-[#582A47] mx-auto" />
                <h3 className="text-2xl font-serif text-[#292526]">Quote Request Received</h3>
                <p className="text-sm text-[#6F6865]">Thank you, {formData.name}! Our team in Kya Sand will review your request and contact you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-maroon text-xs py-2.5 px-5 mt-4"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs text-[#292526]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold uppercase tracking-wider text-[#6F6865]">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sanele Zondo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-[#FCFAF7] border border-[#E6DED5] rounded text-sm focus:outline-none focus:border-[#582A47]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold uppercase tracking-wider text-[#6F6865]">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+27 72 221 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-[#FCFAF7] border border-[#E6DED5] rounded text-sm focus:outline-none focus:border-[#582A47]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold uppercase tracking-wider text-[#6F6865]">Email Address</label>
                  <input
                    type="email"
                    placeholder="info@example.co.za"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-[#FCFAF7] border border-[#E6DED5] rounded text-sm focus:outline-none focus:border-[#582A47]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold uppercase tracking-wider text-[#6F6865]">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full p-3 bg-[#FCFAF7] border border-[#E6DED5] rounded text-xs focus:outline-none focus:border-[#582A47]"
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>New Build</option>
                      <option>Renovation</option>
                      <option>Repair</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold uppercase tracking-wider text-[#6F6865]">Material</label>
                    <select
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="w-full p-3 bg-[#FCFAF7] border border-[#E6DED5] rounded text-xs focus:outline-none focus:border-[#582A47]"
                    >
                      <option>Timber</option>
                      <option>Aluminium</option>
                      <option>Glass</option>
                      <option>Not Sure</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold uppercase tracking-wider text-[#6F6865]">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3 bg-[#FCFAF7] border border-[#E6DED5] rounded text-xs focus:outline-none focus:border-[#582A47]"
                    >
                      <option>New Door</option>
                      <option>New Window</option>
                      <option>Custom Solution</option>
                      <option>Repair</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold uppercase tracking-wider text-[#6F6865]">Message / Dimensions / Special Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, opening sizes, or timber preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#FCFAF7] border border-[#E6DED5] rounded text-sm focus:outline-none focus:border-[#582A47]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button type="submit" className="btn-maroon py-3.5 px-7 text-sm">
                    <span>Submit Quote Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="btn-secondary-architectural py-3.5 px-7 text-sm flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16} className="text-[#582A47]" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#F5F0E8] p-8 border border-[#E6DED5] rounded-xl space-y-6">
            <h3 className="text-2xl font-serif text-[#292526]">
              Kya Sand Workshop & Showroom
            </h3>

            <div className="space-y-4 text-xs text-[#6F6865] leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#582A47] shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#582A47] shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-[#582A47] font-mono text-[#292526] font-semibold text-sm">
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#582A47] shrink-0" />
                <span>{companyInfo.email}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6DED5] text-xs text-[#292526]">
              <p className="font-semibold mb-1">Working Hours:</p>
              <p className="text-[#6F6865]">{companyInfo.workingHours}</p>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}
