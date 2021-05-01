import React, {useState, useEffect} from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { connect, useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header = ({ currentUser, cartItem, setCartItem, togle, setTogle}) => {

    const [cartHidden, setCartHidden] = useState(true); // to toggle cart dropdown

    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {
                    currentUser ?
                    <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon CartToggle={cartHidden} setCartToggle={setCartHidden} cartItems={cartItem} setCartItems={setCartItem} />
            </div>
            {/*{!cartHidden && <CartDropdown />}*/}
            {cartHidden? null: <CartDropdown cartItems={cartItem} setCartItems={setCartItem} toggle={togle} setToggle={setTogle}/>}
            
        </div>
    )
};

// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser
// });

// export default connect(mapStateToProps)(Header);

export default Header;