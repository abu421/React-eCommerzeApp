import React, { useState } from 'react';
import './cart-dropdown.scss';
import CustomButton from '../button/button';
import CartIcon from '../cart-icon/cart-icon';
import CartItem from '../cart-item/cart-item';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({cartItems, setCartItems, history, toggle, setToggle}) => {
    const routre = () => {
        history.push('/checkout'); 
    }
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>)) :
                <span className='empty-message'>Your cart is empty</span>
            }
            </div>
            <CustomButton onClick={/*() => {history.push('/checkout'); setTogle(!togle)*/ routre}>GO TO CHECKOUT</CustomButton>
        </div>
    )
};

export default withRouter(CartDropdown);