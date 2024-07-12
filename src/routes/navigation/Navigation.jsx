import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as TrsLogo } from "../../assets/crown.svg"
import { signOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/Cart-dropdown';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/User.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { LogoContainer, NavLink, NavLinks, NavigationContainer } from './Navigation.styles';

export const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const dropdownStatus = useSelector(selectIsCartOpen)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <TrsLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>Sign out</NavLink>
                        ) :
                            <NavLink to='/auth'>
                                Sign-in
                            </NavLink>
                    }
                    <CartIcon />
                </NavLinks>
                {dropdownStatus && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}