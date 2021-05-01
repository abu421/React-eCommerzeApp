import React, {useState} from 'react';
import './collectionItem-Compo.scss';
import CustomButton from '../button/button';

const CollectionItem = ({ itemsDATA , cartItem, setCartItem}) => {
    // const [cartItems, setCartItems] = useState([]); // setCartItems[...cartItems]
    const {name, price, imageUrl} = itemsDATA;

    const AddItemQuantity = (cartItems, ItemToAdd) => {
        const existingItems = cartItems.find(
            cartItem => cartItem.id === ItemToAdd.id
        );
    
        if(existingItems){
            return cartItems.map(
                cartItem => cartItem.id === ItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1} :
                cartItem
            )
        }
    
        return [...cartItems, { ...ItemToAdd, quantity: 1}]
    }
    const addToCart = () => {
        
        // 
        setCartItem(AddItemQuantity(cartItem, itemsDATA));
    }

    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={addToCart} inverted>Add to cart</CustomButton>
        </div>
    )
};

export default CollectionItem;