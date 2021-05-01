import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ImCDULGERAP7OZVXwu4yy99KjS26zA0GQGd1UsLbNX00Ur9y7ldYglVDmlk0WwioRKnaWntn5cFfOy7VGiGcpMk000egN5Ees';
    const onToken = token => {
        console.log(token);
        window.alert('Payment Done Successfully');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN CLOTHING Ltd'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;