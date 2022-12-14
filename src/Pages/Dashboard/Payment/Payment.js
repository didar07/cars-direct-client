import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading/Loading';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
console.log(stripePromise)
const Payment = () => {
    const booking = useLoaderData()
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    console.log(booking)
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>payment for {booking.bookingName}</h2>
            <br />
            <p className='font-bold text-center'>Please pay ${booking.resalePrice} for Buying your Car</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;