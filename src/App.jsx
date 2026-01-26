import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import IngredientsGlossary from './pages/IngredientsGlossary';
import OurImpact from './pages/OurImpact';
import Animals from './pages/Animals';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

import OurBrand from './pages/OurBrand';
import Leadership from './pages/Leadership';
import LeadershipDetail from './pages/LeadershipDetail';
import Governance from './pages/Governance';
import GiftCard from './pages/GiftCard';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:slug" element={<ProductListing />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/glossary" element={<IngredientsGlossary />} />
              <Route path="/about/our-brand" element={<OurBrand />} />
              <Route path="/about/our-impact" element={<OurImpact />} />
              <Route path="/about/animals" element={<Animals />} />
              <Route path="/about/leadership" element={<Leadership />} />
              <Route path="/about/leadership/:slug" element={<LeadershipDetail />} />
              <Route path="/about/governance" element={<Governance />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-success/:orderId" element={<OrderSuccess />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/gift-card" element={<GiftCard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
