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

// // pages/checkout.js

// import React from "react";
// import { useRecoilValue } from "recoil";
// import { cartState } from "../atoms/cartState";
// import { calculateTotal } from "../utils/cart";
// import Header from "../components/Header";
// import CartList from "../components/CartList";
// import CheckoutForm from "../components/CheckoutForm";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   "sk_test_51PSh1tEkJNki03eoLpRSxvLda55DL6K8BuMcFWO49AtEV7yZw6kr8xMhiLAtOBbIvU6hpGrlcdlxltl8wLVRpwCj00q5aRKVkP"
// );

// const Checkout = () => {
//   const cartItems = useRecoilValue(cartState);
//   const total = calculateTotal(cartItems);

//   return (
//     <>
//       <div>
//         <Header />
//       </div>
//       <div className="container p-4 mx-auto">
//         <h1 className="mb-4 text-2xl font-bold">Panier</h1>
//         {cartItems.length === 0 ? (
//           <h1>Votre panier est vide</h1>
//         ) : (
//           <div>
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.product.id}>
//                   <CartList product={item.product} quantity={item.quantity} />
//                 </li>
//               ))}
//             </ul>
//             <div className="total">
//               <h2>Total: {total.toFixed(2)} €</h2>
//             </div>
//             <Elements stripe={stripePromise}>
//               <CheckoutForm />
//             </Elements>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Checkout;

// // src/pages/checkout.js
// import React from "react";
// import { useRecoilValue } from "recoil";
// import { calculateTotal } from "../utils/cart";
// import { cartState } from "../atoms/cartState";
// import CartList from "../components/CartList";
// import CheckoutForm from "../components/CheckoutForm";
// import Header from "../components/Header";

// const Checkout = () => {
//   const cartItems = useRecoilValue(cartState);
//   const total = calculateTotal(cartItems);

//   return (
//     <>
//       <div>
//         <Header />
//       </div>
//       <div className="container p-4 mx-auto">
//         <h1 className="mb-4 text-2xl font-bold">Panier</h1>
//         {cartItems.length === 0 ? (
//           <h1>Votre panier est vide</h1>
//         ) : (
//           <div>
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.product.id}>
//                   <CartList product={item.product} quantity={item.quantity} />
//                 </li>
//               ))}
//             </ul>
//             <div className="total">
//               <h2>Total: {total.toFixed(2)} €</h2>
//             </div>
//             {/* <CheckoutForm /> */}
//           </div>
//         )}
//       </div>
//       <CheckoutForm />
//     </>
//   );
// };

// export default Checkout;

// import React from "react";
// import { useRecoilValue } from "recoil";
// import { cartState } from "../atoms/cartState";
// import CartList from "../components/CartList";
// import { calculateTotal } from "../utils/cart";
// import Header from "../components/Header";

// const Checkout = () => {
//   const cartItems = useRecoilValue(cartState);
//   const total = calculateTotal(cartItems);

//   return (
//     <>
//       <div>
//         <Header />
//       </div>
//       <div className="container p-4 mx-auto">
//         <h1 className="mb-4 text-2xl font-bold">Panier</h1>
//         {cartItems.length === 0 ? (
//           <h1>Votre panier est vide</h1>
//         ) : (
//           <div>
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.product.id}>
//                   <CartList product={item.product} quantity={item.quantity} />
//                 </li>
//               ))}
//             </ul>
//             <div className="total">
//               <h2>Total: {total.toFixed(2)} €</h2>
//             </div>
//             <button className="p-2 mt-5 text-white bg-blue-500 rounded">
//               Procéder au paiement
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Checkout;

// import React from "react";
// import Header from "../components/Header";
// import Image from "next/image";

// function checkout() {
//   return (
//     <>
//       <div className="bg-gray-100 ">
//         <Header />

//         <section className="mx-auto max-w-screen-2xl lg:flex">
//           <div className="flex-grow m-5 shadow-sm ">
//             <Image src="" width={1020} height={250} objectFit="contain" />
//             <div className="flex flex-col p-5 space-y-10 bg-white">
//               <h1 className="pb-4 text-3xl border-b">
//                 Votre panier de produits
//               </h1>
//             </div>
//           </div>
//           <div>Votre selection de produits</div>
//         </section>
//       </div>
//     </>
//   );
// }
// export default checkout;

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import "../styles/ProductFeed.css"; // Importez vos styles si nécessaire

// const Checkout = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//     updateTotal(storedCart);
//   }, []);

//   const updateTotal = (cart) => {
//     const newTotal = cart.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );
//     setTotal(newTotal);
//   };

//   const updateQuantity = (productId, quantity) => {
//     const updatedCart = cart
//       .map((item) => {
//         if (item.id === productId) {
//           item.quantity = quantity;
//         }
//         return item;
//       })
//       .filter((item) => item.quantity > 0);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     updateTotal(updatedCart);
//   };

//   return (
//     <div className="container p-4 mx-auto">
//       <h1 className="mb-4 text-2xl font-bold">Votre Panier</h1>
//       <div id="checkout-items" className="space-y-4">
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between p-4 border-b checkout-item"
//           >
//             <div className="flex items-center space-x-4">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="object-cover w-20 h-20"
//               />
//               <div className="flex flex-col">
//                 <span className="text-lg font-medium">{item.name}</span>
//                 <span className="text-gray-500">{item.description}</span>
//                 <span className="text-gray-500">
//                   Quantité:
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     min="1"
//                     className="w-16 ml-2 text-center border rounded quantity-input"
//                     onChange={(e) =>
//                       updateQuantity(item.id, parseInt(e.target.value))
//                     }
//                   />
//                 </span>
//               </div>
//             </div>
//             <div className="text-right">
//               <span className="text-lg">
//                 {(item.price * item.quantity).toFixed(2)} €
//               </span>
//               <button
//                 className="ml-4 text-red-500 remove-item"
//                 onClick={() => updateQuantity(item.id, 0)}
//               >
//                 Supprimer
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-4 text-right">
//         <span id="cart-total" className="text-xl font-bold">
//           Total: {total.toFixed(2)} €
//         </span>
//       </div>
//       <button
//         id="checkout-button"
//         className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
//       >
//         Payer
//       </button>
//       <Link href="/">
//         <a className="px-4 py-2 mt-4 text-white bg-gray-500 rounded">
//           Continuer vos achats
//         </a>
//       </Link>
//     </div>
//   );
// };

// export default Checkout;
