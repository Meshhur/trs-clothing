import { Link, Outlet } from 'react-router-dom';
import "./Navigation.styles.scss"
import { Fragment, useContext } from 'react';
import { ReactComponent as TrsLogo } from "../../assets/crown.svg"
import { UserContext } from '../../context/User';
import { signOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/Cart-dropdown';
import { CartContext } from '../../context/Cart';

export const Navigation = () => {
    const user = useContext(UserContext)
    const { dropdownStatus, setDropdownStatus } = useContext(CartContext)

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <TrsLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {
                        user.currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>Sign out</span>
                        ) :
                            <Link className='nav-link' to='/auth'>
                                Sign-in
                            </Link>
                    }
                    <CartIcon />
                </div>
                {dropdownStatus && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}