import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import { Nav, Button, Container, Row, Col } from 'react-bootstrap'

import Navigation from './components/Navigation'
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart'

import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
