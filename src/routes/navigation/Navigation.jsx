import { Link, Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as TrsLogo } from "../../assets/crown.svg"
import { UserContext } from '../../context/User';
import { signOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/Cart-dropdown';
import { CartContext } from '../../context/Cart';
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from './Navigation.styles';

export const Navigation = () => {
    const user = useContext(UserContext)
    const { dropdownStatus } = useContext(CartContext)

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
                        user.currentUser ? (
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