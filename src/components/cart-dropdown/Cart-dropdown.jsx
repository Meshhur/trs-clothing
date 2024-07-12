import { useNavigate } from 'react-router-dom';

import Button from '../button/Button.jsx';
import CartItem from '../cart-item/CartItem.jsx';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
} from './Cart-dropdown.styles';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;