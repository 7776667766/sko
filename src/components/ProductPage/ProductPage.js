import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Image, Button} from 'react-bootstrap'
import { GlobalContext } from '../../context/GlobalContext'

const ProductPage = () => {
    const { productID } = useParams();
    const { products, addToCart, cart, increase } = useContext(GlobalContext);
    const product = products[products.findIndex(item => item.id == productID)]
    // console.log(productID)
    console.log(product)
    // console.log(products.find(p => p.id == productID))

    const add = () => {
        if (cart.find(item => item.id === product.id)) {
            // product.quantity++;
            increase(product.id)
        } else {
            product.quantity=1;
            addToCart({product});
        }
    }

    return (
        <div className="text-center">
            <Image className="m-5" src={product.img} fluid />
            <h3>Name: {product.name}</h3>
            <h4>Price: {product.price}</h4>
            <Button variant="outline-dark" onClick={add}>Add to Cart</Button>
        </div>
    )
}

export default ProductPage
