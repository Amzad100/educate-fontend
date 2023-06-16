import { Helmet } from "react-helmet-async";
import ChackOutFrom from "./ChackOutFrom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelected from "../../../Hooks/useSelected";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gatway_pk)
const Payment = () => {
    const [selected] = useSelected();
    const total = selected.reduce((sum, item) => item.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className="w-full max-w-4xl">
            <Helmet>
                <title>EDUcate | Payment</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-5">Payment:</h1>
            <Elements stripe={stripePromise}>
                <ChackOutFrom selected={selected} price={price}></ChackOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;