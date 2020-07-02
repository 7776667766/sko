import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap'
// import { Card, Typography, CardContent, Button } from '@material-ui/core'
import './product.css'
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
            <Card.Img variant="top" src={product.img} />
            <Card.ImgOverlay>
                {/* <Card.Title>{product.name}</Card.Title> */}
                <Button variant="outline-dark" className="addbtn" onClick={add}><i className="fa fa-plus" aria-hidden="true"></i></Button>
            </Card.ImgOverlay>
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
