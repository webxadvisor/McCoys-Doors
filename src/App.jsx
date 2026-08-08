import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

import HomePage from './pages/HomePage';
import ProductCategoryPage from './pages/ProductCategoryPage';
import CustomDoorsPage from './pages/CustomDoorsPage';
import RepairsPage from './pages/RepairsPage';
import QuotePage from './pages/QuotePage';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#292526] flex flex-col justify-between">
      <Header />
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timber-doors" element={<ProductCategoryPage categoryId="timber-doors" />} />
          <Route path="/aluminium-doors" element={<ProductCategoryPage categoryId="aluminium-doors" />} />
          <Route path="/windows" element={<ProductCategoryPage categoryId="windows" />} />
          <Route path="/frameless-doors" element={<ProductCategoryPage categoryId="frameless-doors" />} />
          <Route path="/garage-doors" element={<ProductCategoryPage categoryId="garage-doors" />} />
          <Route path="/glass-solutions" element={<ProductCategoryPage categoryId="glass-solutions" />} />
          <Route path="/custom-doors" element={<CustomDoorsPage />} />
          <Route path="/repairs" element={<RepairsPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </div>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
