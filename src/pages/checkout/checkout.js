import React from 'react';
import './checkout.scss';
import CheckoutItem from '../../components/checkout-item/checkoutItem';
import StripeCheckoutButton from '../../components/stripe-button/stripeButton';

const CheckoutPage = ({cartItem, setCartItem, togle, setTogle}) => {
    
    const TotalQuantityItem = () => ( // return total item/quantity
        cartItem.reduce((accumulatedQunatity, cartITEM) => accumulatedQunatity + (cartITEM.quantity * cartITEM.price), 0)
    );
    const TOTAL_QUANTITY = TotalQuantityItem();

    

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItem.map(item => (<CheckoutItem key={item.id} item={item} cartItem={cartItem} setCartItem={setCartItem} />))
            }
            <div className='total'>
                <span>TOTAL: ${TOTAL_QUANTITY}</span>
            </div>
            <div className='test-warning'>
                *Please use the following for payment*
                <br />
                4242 4242 4242 4242 - EXP: current (mm/yy) - CVV: 123
            </div>
            <StripeCheckoutButton price={TOTAL_QUANTITY} />
        </div>
    )
};

export default CheckoutPage;