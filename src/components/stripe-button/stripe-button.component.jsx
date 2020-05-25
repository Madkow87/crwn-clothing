import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


//seems li
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pXXXX';
    
const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        BillingAddress
        shippingAddress
        image='http://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;