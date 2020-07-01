import React, { useContext } from 'react'
// import './Cart.css'
// import { GlobalContext } from '../context/GlobalContext'

// import CartItem from './CartItem'

const Cart = () => {
    // const { cart } = useContext(GlobalContext);

    return (
        <div className="cart">
            <h1>Cart</h1>
            {/* {cart.map(item => (<CartItem key={item.id} product={item} />))} */}
            {/* <table id="cartTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {cart.map(item => (<CartItem key={item.id} product={item} />))}
            </tbody>
            </table> */}
        </div>
    )
}

export default Cart
