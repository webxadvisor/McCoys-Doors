import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Introduction from '../components/Introduction';
import ProductCollection from '../components/ProductCollection';
import FeaturedProduct from '../components/FeaturedProduct';
import TimberSection from '../components/TimberSection';
import AluminiumSection from '../components/AluminiumSection';
import FramelessSection from '../components/FramelessSection';
import CustomSolutionsSection from '../components/CustomSolutionsSection';
import RepairServiceSection from '../components/RepairServiceSection';
import ProjectGallery from '../components/ProjectGallery';
import WhyMcCoys from '../components/WhyMcCoys';
import CustomerReviews from '../components/CustomerReviews';
import AboutSection from '../components/AboutSection';
import ServiceArea from '../components/ServiceArea';
import MajorCTA from '../components/MajorCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Introduction />
      <ProductCollection />
      <FeaturedProduct />
      <TimberSection />
      <AluminiumSection />
      <FramelessSection />
      <CustomSolutionsSection />
      <RepairServiceSection />
      <ProjectGallery />
      <WhyMcCoys />
      <CustomerReviews />
      <AboutSection />
      <ServiceArea />
      <MajorCTA />
    </main>
  );
}
