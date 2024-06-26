import React, { useContext } from 'react'
import { CartContext } from '../../context/Cart'

import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIcon.styles';

const CartIcon = () => {
    const { dropdownStatus, setDropdownStatus, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setDropdownStatus(!dropdownStatus);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;