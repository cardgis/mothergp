// // Fonction pour ajouter un produit au panier
// export const addToCart = (cart, setCart, product) => {
//   const productInCart = cart.find((item) => item.id === product.id);
//   if (productInCart) {
//     setCart(
//       cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   } else {
//     setCart([...cart, { ...product, quantity: 1 }]);
//   }
// };

// // Fonction pour supprimer un produit du panier
// export const removeFromCart = (cart, setCart, productId) => {
//   setCart(cart.filter((item) => item.id !== productId));
// };

// // Fonction pour mettre à jour la quantité d'un produit
// export const updateQuantity = (cart, setCart, productId, quantity) => {
//   setCart(
//     cart
//       .map((item) => (item.id === productId ? { ...item, quantity } : item))
//       .filter((item) => item.quantity > 0)
//   );
// };

// //Fonction pour calculer le total du panier
// // export const calculateTotal = (cart) => {
// //   return cart
// //     .reduce((acc, item) => acc + item.price * item.quantity, 0)
// //     .toFixed(2);
// // };
// // src/utils/cart.js
// export const calculateTotal = (cartState) => {
//   return cartState.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
// };

export const calculateTotal = (cart) => {
  return cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
};

export const addToCart = (cart, setCart, product) => {
  setCart([...cart, { product, quantity: 1 }]);
};

export const updateQuantity = (cart, setCart, productId, quantity) => {
  setCart(
    cart.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    )
  );
};

export const removeFromCart = (cart, setCart, productId) => {
  setCart(cart.filter((item) => item.product.id !== productId));
};
