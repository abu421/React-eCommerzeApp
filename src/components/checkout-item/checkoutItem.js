import React from 'react';
import CheckoutPage from '../../pages/checkout/checkout';
import './checkouItem.scss';

const CheckoutItem = ({item, cartItem, setCartItem}) => {

    const ClearItem = (itemID) => {
        setCartItem(cartItem.filter(items => items.id !== itemID));
    }

    const IncrementItem = (itemID) => {
        return cartItem.map(
            cartIt => cartIt.id === itemID ?
            { ...cartIt, quantity: cartIt.quantity + 1} :
            cartIt
        );
    }
    const DecrementItem = (itemID) => {
        console.log(itemID);

        const existingItem = cartItem.find(item => item.id === itemID);

        if(existingItem.quantity === 1){
            return cartItem.filter(Item => Item.id !== itemID)
        }

        return cartItem.map(
            cartIt => cartIt.id === itemID ?
            { ...cartIt, quantity: cartIt.quantity - 1} :
            cartIt
        );
        
    }

    const addOneMoreItem = () => {
        setCartItem(IncrementItem(item.id));
    }
    const removeOneItem = () => {
        setCartItem(DecrementItem(item.id));
    }

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={item.imageUrl}  alt='item'/>
            </div>
            <span className='name'>{item.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeOneItem}>&#10094;</div>
                <span className='value'>{item.quantity}</span>
                <div className='arrow' onClick={addOneMoreItem}>&#10095;</div>
            </span>
            <span className='price'>{item.price}</span>
            <span className='remove-button' onClick={() => ClearItem(item.id)}>&#10005;</span>
        </div>
    )
};

export default CheckoutItem;