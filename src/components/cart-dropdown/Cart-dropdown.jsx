import React, { useContext, } from 'react'
import Button from '../button/Button'
import "./Cart-dropdown.scss"
import { CartContext } from '../../context/Cart'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    
    const navigate = useNavigate()

    const cartContext = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {
                    cartContext.cartItems.map(item => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                }
            </div>
            <Button onClick={() => navigate('/checkout')}>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown