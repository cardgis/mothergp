// import React from "react";
// import Image from "next/image";
// import { StarIcon } from "@heroicons/react/solid";
// import CurrencyFormat from "react-currency-format";

// function CartList({ product, quantity }) {
//   // Recevez la quantité en prop
//   return (
//     <div className="flex flex-col p-4 border" key={product.id}>
//       <Image
//         src={product.image}
//         height={300}
//         width={350}
//         objectFit="contain"
//         loading="lazy"
//         alt={product.title} // Utilisez le titre du produit pour l'accessibilité
//       />

//       <h4 className="font-bold">{product.title}</h4>
//       <p className="my-2 text-xs line-clamp-2">{product.description}</p>

//       {/* Étoiles (si nécessaire) */}
//       <div className="flex">
//         {/* Logique pour afficher les étoiles en fonction de la note du produit */}
//       </div>

//       {/* Prix et quantité */}
//       <div className="flex items-center justify-between">
//         <CurrencyFormat
//           value={product.price}
//           displayType={"text"}
//           thousandSeparator={true}
//           prefix={"€"}
//           decimalScale={2}
//           fixedDecimalScale={true}
//         />
//         <p className="font-semibold">Quantité: {quantity}</p>
//       </div>

//       {/* Actions (facultatif) */}
//       <div>
//         {/* Boutons pour supprimer l'article ou modifier la quantité */}
//       </div>
//     </div>
//   );
// }

// export default CartList;

// import React from "react";

// const cartList = ({ product, quantity, onRemove, onQuantityChange }) => (
//   <div className="flex items-center justify-between p-4 border-b">
//     <div className="flex items-center space-x-4">
//       <Image
//         height={500}
//         width={500}
//         src={product.image}
//         alt={product.name}
//         className="object-cover w-20 h-20"
//       />
//       <div className="flex flex-col">
//         <span className="text-lg font-medium">{product.name}</span>
//         <span className="text-gray-500">{product.description}</span>
//         <div className="text-gray-500">
//           Quantité:
//           <input
//             type="number"
//             value={quantity}
//             min="1"
//             className="w-16 ml-2 text-center border rounded quantity-input"
//             onChange={(e) =>
//               onQuantityChange(product.id, parseInt(e.target.value))
//             }
//           />
//         </div>
//       </div>
//     </div>
//     <div className="text-right">
//       <span className="text-lg">{(product.price * quantity).toFixed(2)} €</span>
//       <button
//         className="ml-4 text-red-500 remove-item"
//         onClick={() => onRemove(product.id)}
//       >
//         Supprimer
//       </button>
//     </div>
//   </div>
// );

// export default cartList;

import React from "react";
import Image from "next/image";

const CartList = ({ product, quantity, onRemove, onQuantityChange }) => (
  <div className="flex items-center justify-between p-4 border-b">
    <div className="flex items-center space-x-4">
      <Image
        height={300}
        width={300}
        src={product.image}
        alt={product.name}
        className="object-cover w-20 h-20"
      />
      <div className="flex flex-col">
        <span className="text-lg font-medium">{product.name}</span>
        <span className="text-gray-500">{product.description}</span>
        <div className="text-gray-500">
          Quantité:
          <input
            type="number"
            value={quantity}
            min="1"
            className="w-16 ml-2 text-center border rounded quantity-input"
            onChange={(e) =>
              onQuantityChange(product.id, parseInt(e.target.value))
            }
          />
        </div>
      </div>
    </div>
    <div className="text-right">
      <span className="text-lg">{(product.price * quantity).toFixed(2)} €</span>
      <button
        className="ml-4 text-red-500 remove-item"
        onClick={() => onRemove(product.id)}
      >
        Supprimer
      </button>
    </div>
  </div>
);

export default CartList;
