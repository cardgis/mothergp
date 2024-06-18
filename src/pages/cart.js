// import React from "react";
// import { useRecoilState } from "recoil";
// import {
//   cartState,
//   addToCart,
//   removeFromCart,
//   updateQuantity,
//   calculateTotal,
// } from "../utils/cart";
// import { calculateTotal } from "../utils/cart";
// import CartList from "../components/CartList";

// const Cart = () => {
//   const [cart, setCart] = useRecoilState(cartState);

//   const handleAddToCart = (product) => {
//     addToCart(cart, setCart, product);
//   };

//   const handleRemoveFromCart = (productId) => {
//     removeFromCart(cart, setCart, productId);
//   };

//   const handleUpdateQuantity = (productId, quantity) => {
//     updateQuantity(cart, setCart, productId, quantity);
//   };

//   return (
//     <div className="container p-4 mx-auto">
//       <h1 className="mb-4 text-2xl font-bold">Votre Panier</h1>
//       <div id="cart-items" className="space-y-4">
//         {cart.length === 0 ? (
//           <h1>Votre panier est vide</h1>
//         ) : (
//           cart.map((item) => (
//             <CartList
//               key={item.id}
//               product={item}
//               quantity={item.quantity}
//               onRemove={handleRemoveFromCart}
//               onQuantityChange={handleUpdateQuantity}
//             />
//           ))
//         )}
//       </div>
//       <div className="mt-4 text-right">
//         <span id="cart-total" className="text-xl font-bold">
//           Total: {calculateTotal(cart)} €
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Cart;
// import React from "react";
// import { useRecoilState } from "recoil";
// import {
//   cartState,
//   addToCart,
//   removeFromCart,
//   updateQuantity,
//   calculateTotal,
// } from "../utils/cart";
// import CartList from "../components/CartList";

// const Cart = () => {
//   const [cart, setCart] = useRecoilState(cartState);

//   const handleAddToCart = (product) => {
//     addToCart(cart, setCart, product);
//   };

//   const handleRemoveFromCart = (productId) => {
//     removeFromCart(cart, setCart, productId);
//   };

//   const handleUpdateQuantity = (productId, quantity) => {
//     updateQuantity(cart, setCart, productId, quantity);
//   };

//   return (
//     <div className="container p-4 mx-auto">
//       <h1 className="mb-4 text-2xl font-bold">Votre Panier</h1>
//       <div id="cart-items" className="space-y-4">
//         {cart.length === 0 ? (
//           <h1>Votre panier est vide</h1>
//         ) : (
//           cart.map((item) => (
//             <CartList
//               key={item.product.id}
//               product={item.product}
//               quantity={item.quantity}
//               addToCart={handleAddToCart}
//               onRemove={handleRemoveFromCart}
//               onQuantityChange={handleUpdateQuantity}
//             />
//           ))
//         )}
//       </div>
//       <div className="mt-4 text-right">
//         <span id="cart-total" className="text-xl font-bold">
//           Total: {calculateTotal(cart)} €
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// src/pages/cart.js
import React from "react";
import { useRecoilState } from "recoil";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  calculateTotal,
} from "../utils/cart";
import cartState from "../atoms/cartState";
import CartList from "../components/CartList";
import { useRouter } from "next/router";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const router = useRouter();

  const handleAddToCart = (product) => {
    addToCart(cart, setCart, product);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(cart, setCart, productId);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    updateQuantity(cart, setCart, productId, quantity);
  };

  const handleProceedToPayment = () => {
    router.push("/checkout");
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Votre Panier</h1>
      <div id="cart-items" className="space-y-4">
        {cart.length === 0 ? (
          <h1>Votre panier est vide</h1>
        ) : (
          cart.map((item) => (
            <CartList
              key={item.id}
              product={item}
              quantity={item.quantity}
              onRemove={handleRemoveFromCart}
              onQuantityChange={handleUpdateQuantity}
            />
          ))
        )}
      </div>
      <div className="mt-4 text-right">
        <span id="cart-total" className="text-xl font-bold">
          Total: {calculateTotal(cart)} €
        </span>
        <button onClick={handleProceedToPayment} className="mt-4 btn-primary">
          Procéder au paiement
        </button>
      </div>
    </div>
  );
};

export default Cart;
