import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import { Nav, Container, Row, Col } from 'react-bootstrap'

import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart'

function App() {
  return (
    <Router>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link as="Link"><Link to="/cart">Cart</Link></Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
// function Home() {
//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col md>Product</Col>
//           <Col md>Product</Col>
//           <Col md>Product</Col>
//         </Row>
//         <Row>
//           <Col md>Product</Col>
//           <Col md>Product</Col>
//           <Col md>Product</Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// function Cart() {
//   return (
//     <div>
//       <h1>Cart</h1>
//     </div>
//   )
// }

export default App;
