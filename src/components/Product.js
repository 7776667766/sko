import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link  } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const Product = ({ product }) => {
    const { cart, addToCart, increase } = useContext(GlobalContext);

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
        <div className="product">
            <Card border="light">
            {/* <img src={product.img} /> */}
            
            
            <Link to={`products/${product.id}`} >
            <Card.Img className="cardimage" variant="top" src={product.img} />
            </Link>
            <Card.Body className="d-flex ">
                <div>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    
                ${product.price}
                </Card.Text>
                </div>
                <Button className="addbtn ml-4" variant="outline" onClick={add}><i className="fa fa-plus" aria-hidden="true"></i>  Add to cart</Button>
            </Card.Body>
            
            </Card>
        </div>
        // <div className="product">
        //     <Card variant="outlined">
        //             <CardContent>
        //                 <Typography variant="h5">{ product.name }</Typography>
        //                 <Typography variant="h6">${ product.price }</Typography>
        //                 <Button variant="outlined" color="primary" size="small" onClick={add}>Add to Cart</Button>
        //             </CardContent>
        //     </Card>
        //     {/* <h1>{ product.name }</h1>
        //     <p>${ product.price }</p>
        //     {/* <p>${Math.floor(Math.random()*100)}</p> */}
        //     {/* <button onClick={add}>Add to Cart</button> */}
        // </div>
    )
}

export default Product
