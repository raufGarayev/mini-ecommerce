import React from 'react';
import {Link} from 'react-router-dom'
import {BsFillHandbagFill} from 'react-icons/bs'
import {useSelector} from "react-redux";

const Navbar = () => {
    const {cartTotalQuantity} = useSelector(state => state.cart)
    return (
        <nav className={'nav-bar'}>
            <Link to={'/'}><h2>LOGO</h2></Link>

            <Link to={'/cart'}>
                <div className={'nav-bag'}>
                    <BsFillHandbagFill className={'bag-icon'} />
                    <span className={'bag-quantity'}>
                    <span>{cartTotalQuantity}</span>
                </span>
                </div>
            </Link>

        </nav>
    );
};

export default Navbar;