// app/atoms/cartState.js
import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [], // Tableau vide initial pour le panier
});

export const totalItemsSelector = selector({
  key: "totalItemsSelector",
  get: ({ get }) => {
    const cartItems = get(cartState);
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  },
});

export default cartState;

// Sélecteur pour calculer le nombre total d'articles dans le panier
// export const totalItemsSelector = selector({
//   key: "totalItemsSelector",
//   get: ({ get }) => {
//     const cartItems = get(cartState);
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   },
// });
// atoms/cartState.js
