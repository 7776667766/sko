import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import ProductGrid from './components/ProductGrid/ProductGrid';
import Cart from './components/Cart'
import ProductPage from './components/ProductPage/ProductPage'
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products/:productID" element={<ProductPage />} /> 
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
