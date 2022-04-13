import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey= 'pk_test_51KoFB5L6GcHC1MoxFIsHlMRiEcNEq7zsdCudvskIqAccNIb6tARPq8jWEi7wYKPuEUdqJgQUI75L7udDKjYD0ENx00Qn28eHS9';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='ZOSHOP'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/gBp.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
