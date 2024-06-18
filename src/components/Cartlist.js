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
