import React, {useState,useEffect} from 'react';
import './cart-icon.scss';
import{ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({CartToggle, setCartToggle, cartItems, setCartItems}) => {

    // const [cartHidden, setCartHidden] = useState(true); // to toggle cart dropdown
    console.log(CartToggle);

    const TotalQuantityItem = () => ( // return total item/quantity
            cartItems.reduce((accumulatedQunatity, cartITEM) => accumulatedQunatity + cartITEM.quantity, 0)
        );
    const TOTAL_QUANTITY = TotalQuantityItem();
        
    return (
        <div className='cart-icon' onClick={() => setCartToggle(!CartToggle)}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{TOTAL_QUANTITY}</span>
        </div>
    )
}

export default CartIcon;