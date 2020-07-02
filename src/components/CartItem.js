import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext'
import { Button } from 'react-bootstrap'
// import { Paper, Button } from '@material-ui/core'
const CartItem = ({ product }) => {
    const { removeFromCart, increase, decrease } = useContext(GlobalContext);

    const remove = () => {
        console.log(product.id)
        removeFromCart(product.id)
    }

    const increaseQtty = () => {
        // increase(product.id);
        increase(product.id)
    }

    const decreaseQtty = () => {
        if (product.quantity <= 1) {
            remove()
        } else {
            decrease(product.id);
        }
    }
    return (
        <tr>
            <td><Button variant="outline-danger" onClick={remove}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </Button></td>
                <td>
                    { product.name }
                </td>

                <td>${ product.price }</td>
                
                <td>{ product.quantity }</td>
                
                <td>
                    <Button variant="outline-primary" onClick={increaseQtty}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                    <Button variant="outline-secondary" onClick={decreaseQtty}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </Button>
                </td>
                
                
        </tr>
    )
}

export default CartItem
