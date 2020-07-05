import React, { useContext } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import './productGrid.css'
import Product from '../Product'
import { GlobalContext } from '../../context/GlobalContext'

const ProductGrid = () => {
    const { products } = useContext(GlobalContext);
    
    return (
        // <div>
        // <Container>

        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        //     <Col sm><h1>Product</h1></Col>
        // </Container>
        // </div>
        <div className="productGrid justify-content-center">
            
            {products.map(product => (<Product key={product.id} product={product} />))}
        </div>
    )
}

export default ProductGrid
