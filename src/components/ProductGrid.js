import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import './productGrid.css'
import Product from './Product'
// import { GlobalContext } from '../context/GlobalContext'

const ProductGrid = () => {
    // const { products } = useContext(GlobalContext);
    
    return (
        <div>
        <Container>
            <Row>
            <Col md><h1>Product</h1></Col>
            <Col md><h1>Product</h1></Col>
            <Col md><h1>Product</h1></Col>
            </Row>
            <Row>
            <Col md><h1>Product</h1></Col>
            <Col md><h1>Product</h1></Col>
            <Col md><h1>Product</h1></Col>
            </Row>
            <Row>
            <Col md><h1>Product</h1></Col>
            <Col md><h1>Product</h1></Col>
            <Col md><h1>Product</h1></Col>
            </Row>
        </Container>
        </div>
        // <div className="productGrid">
            
        //     {products.map(product => (<Product key={product.id} product={product} />))}
        // </div>
    )
}

export default ProductGrid
