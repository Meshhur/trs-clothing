import React from 'react'
import Button from '../button/Button'
import "./Cart-dropdown.scss"

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items" />
            <Button>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown