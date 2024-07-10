import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as TrsLogo } from "../../assets/crown.svg"
import { signOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/Cart-dropdown';
import { CartContext } from '../../context/Cart';
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from './Navigation.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/User.selector';

export const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
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