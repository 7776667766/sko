import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalContext'

import CartItem from './CartItem'

const Cart = () => {
    const { cart } = useContext(GlobalContext);

    return (
        <div className="cart">
            <Table id="cartTable">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {cart.map(item => (<CartItem key={item.id} product={item} />))}
            </tbody>
            </Table>
        </div>
    )
}

export default Cart
