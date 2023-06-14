import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const ChackOutFrom = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        } else {
            console.log('payment Method', paymentMethod);
            setCardError('')
        }
    }
    return (
        <>
            <form className="w-1/2" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mt-3 btn-sm" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 mt-3">{cardError}</p>}
        </>
    );
};

export default ChackOutFrom;