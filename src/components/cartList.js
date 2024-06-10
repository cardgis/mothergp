import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";

function CartList({ product, quantity }) {
  // Recevez la quantité en prop
  return (
    <div className="flex flex-col p-4 border" key={product.id}>
      <Image
        src={product.image}
        height={300}
        width={350}
        objectFit="contain"
        loading="lazy"
        alt={product.title} // Utilisez le titre du produit pour l'accessibilité
      />

      <h4 className="font-bold">{product.title}</h4>
      <p className="my-2 text-xs line-clamp-2">{product.description}</p>

      {/* Étoiles (si nécessaire) */}
      <div className="flex">
        {/* Logique pour afficher les étoiles en fonction de la note du produit */}
      </div>

      {/* Prix et quantité */}
      <div className="flex items-center justify-between">
        <CurrencyFormat
          value={product.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"€"}
          decimalScale={2}
          fixedDecimalScale={true}
        />
        <p className="font-semibold">Quantité: {quantity}</p>
      </div>

      {/* Actions (facultatif) */}
      <div>
        {/* Boutons pour supprimer l'article ou modifier la quantité */}
      </div>
    </div>
  );
}

export default CartList;
