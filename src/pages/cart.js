import React from "react";
import { useRecoilValue } from "recoil";
import cartState from "../atoms/cartState";
import CartList from "./cartList"; // Assuming you have a CartList component

export default function Cart() {
  const cartItems = useRecoilValue(cartState);

  return (
    <div>
      {cartItems.length === 0 ? (
        <h1>Votre panier est vide</h1>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              <CartList product={item.product} quantity={item.quantity} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// import React from "react";
// import { useRecoilState } from "recoil";
// import cartState from "../atoms/cartState";

// export const cart = () => {
//   const [cartItem, setCartItem] = useRecoilState(cartState);

//   return (
//     <>
//       <div>
//         {cartItem.length <= 0 ? (
//           <h1>Votre panier est vide</h1>
//         ) : (
//           cartItem.map((item) => <cartList key={item.id} data={item} />)
//         )}
//       </div>
//     </>
//   );
// };

// export default cart;
