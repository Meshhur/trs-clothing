import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import "./CartIcon.scss"
import { CartContext } from '../../context/Cart'

const CartIcon = () => {
    const { dropdownStatus, setDropdownStatus, cartCount } = useContext(CartContext)

    const toogleDropdownStatus = () => setDropdownStatus(!dropdownStatus);
    
    return (
        <div className='cart-icon-container' onClick={toogleDropdownStatus}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;