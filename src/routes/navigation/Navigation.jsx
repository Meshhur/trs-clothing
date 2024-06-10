import { Link, Outlet } from 'react-router-dom';
import "./Navigation.styles.scss"
import { Fragment } from 'react';
import { ReactComponent as TrsLogo } from "../../assets/crown.svg"

export const Navigation = () => {
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
                    <Link className='nav-link' to='/auth'>
                        Sign-in
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}