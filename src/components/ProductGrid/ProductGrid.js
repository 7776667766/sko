import React, { useContext } from 'react'
import './productGrid.css'
import Product from '../Product'
import { GlobalContext } from '../../context/GlobalContext'

const ProductGrid = () => {
    const { products } = useContext(GlobalContext);
    
    return (
        <div className="productGrid justify-content-center">
            {products.map(product => (<Product key={product.id} product={product} />))}
        </div>
    )
}

export default ProductGrid
