// src/pages/api/create-payment-intent.js
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { paymentMethodId } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: 5000, // Montant en centimes (5000 = 50.00 €)
        currency: "eur",
        payment_method: paymentMethodId,
        confirmation_method: "manual",
        confirm: true,
      });

      res.send({ paymentIntent });
    } catch (error) {
      res.send({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
