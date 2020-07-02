import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import { Nav, Button, Container, Row, Col } from 'react-bootstrap'

import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart'
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Nav className="justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link ><Link as="Button" to="/"><i class="fa fa-home"></i></Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link><Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link></Nav.Link>
          </Nav.Item>
        </Nav>
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
