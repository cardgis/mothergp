// pages/checkout.js

import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../atoms/cartState";
import { calculateTotal } from "../utils/cart";
import Header from "../components/Header";
import Cartlist from "../components/cartList";
import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY");

const Checkout = () => {
  const cartItems = useRecoilValue(cartState);
  const total = calculateTotal(cartItems);

  return (
    <>
      <Header />
      <div className="container p-4 mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Panier</h1>
        {cartItems.length === 0 ? (
          <h1>Votre panier est vide</h1>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.product.id}>
                  <Cartlist product={item.product} quantity={item.quantity} />
                </li>
              ))}
            </ul>
            <div className="my-8 total">
              <h2 className="text-xl font-bold">Total: {total.toFixed(2)} €</h2>
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
