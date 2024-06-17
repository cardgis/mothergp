import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useRecoilValue } from "recoil";
import { calculateTotal } from "../utils/cart";
import { cartState } from "../atoms/cartState";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cart = useRecoilValue(cartState);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        address: {
          line1: formData.address,
          city: formData.city,
          postal_code: formData.postalCode,
        },
      },
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: calculateTotal(cart) * 100, // Montant en centimes
        }),
      });

      const paymentResult = await response.json();

      if (paymentResult.error) {
        setPaymentError(paymentResult.error.message);
        setPaymentSuccess(null);
      } else {
        setPaymentSuccess("Paiement réussi!");
        setPaymentError(null);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-group">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          Prénom
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Nom
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Adresse Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Adresse
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          Ville
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="postalCode"
          className="block text-sm font-medium text-gray-700"
        >
          Code Postal
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-700">
          Informations de Carte
        </label>
        <CardElement className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Payer {calculateTotal(cart).toFixed(2)} €
      </button>
      {paymentError && <div className="mt-2 text-red-500">{paymentError}</div>}
      {paymentSuccess && (
        <div className="mt-2 text-green-500">{paymentSuccess}</div>
      )}
    </form>
  );
};

export default CheckoutForm;

// // components/CheckoutForm.js

// import React, { useState } from "react";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import { useRecoilValue } from "recoil";
// import { cartState } from "../atoms/cartState";
// import { calculateTotal } from "../utils/cart";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const cartItems = useRecoilValue(cartState);
//   const total = calculateTotal(cartItems);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     address: "",
//     postalCode: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//       billing_details: {
//         name: `${formData.firstName} ${formData.lastName}`,
//         email: formData.email,
//         address: {
//           line1: formData.address,
//           postal_code: formData.postalCode,
//         },
//       },
//     });

//     if (error) {
//       console.error(error);
//       return;
//     }

//     // You would then send the paymentMethod.id and other details to your server to create a charge
//     console.log("PaymentMethod", paymentMethod);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="payment-form">
//       <div className="form-group">
//         <label htmlFor="firstName">Prénom</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="lastName">Nom</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Adresse Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="address">Adresse</label>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           value={formData.address}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="postalCode">Code Postal</label>
//         <input
//           type="text"
//           id="postalCode"
//           name="postalCode"
//           value={formData.postalCode}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Informations de Carte</label>
//         <CardElement />
//       </div>
//       <button type="submit" disabled={!stripe}>
//         Payer {total.toFixed(2)} €
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;

// // src/components/CheckoutForm.js
// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useRecoilValue } from "recoil";
// import { calculateTotal } from "../utils/cart";
// import { cartState } from "../atoms/cartState";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [paymentError, setPaymentError] = useState(null);
//   const [paymentSuccess, setPaymentSuccess] = useState(null);
//   const cart = useRecoilValue(cartState);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       setPaymentError(error.message);
//       setPaymentSuccess(null);
//     } else {
//       const response = await fetch("/api/create-payment-intent", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           paymentMethodId: paymentMethod.id,
//           amount: calculateTotal(cart) * 100, // Montant en centimes
//         }),
//       });

//       const paymentResult = await response.json();

//       if (paymentResult.error) {
//         setPaymentError(paymentResult.error.message);
//         setPaymentSuccess(null);
//       } else {
//         setPaymentSuccess("Paiement réussi!");
//         setPaymentError(null);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Payer {calculateTotal(cart)} €
//       </button>
//       {paymentError && <div>{paymentError}</div>}
//       {paymentSuccess && <div>{paymentSuccess}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;

// src/components/CheckoutForm.js
// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [paymentError, setPaymentError] = useState(null);
//   const [paymentSuccess, setPaymentSuccess] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       setPaymentError(error.message);
//       setPaymentSuccess(null);
//     } else {
//       const response = await fetch("/api/create-payment-intent", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
//       });

//       const paymentResult = await response.json();

//       if (paymentResult.error) {
//         setPaymentError(paymentResult.error.message);
//         setPaymentSuccess(null);
//       } else {
//         setPaymentSuccess("Paiement réussi!");
//         setPaymentError(null);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Payer
//       </button>
//       {paymentError && <div>{paymentError}</div>}
//       {paymentSuccess && <div>{paymentSuccess}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;
