// @ts-nocheck
"use client"; // Indique un composant client
// src/components/ProductFeed.js

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} category
 * @property {string} description
 * @property {string} image
 */

export default function ProductFeed() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating] = useState(5);
  // Pas besoin de typage explicite ici
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError("Erreur lors du chargement des produits.");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* <p className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3"></p> */}
      {/* <p className="relative z-30 flex flex-col p-10 m-5 bg-white "></p> */}

      <div className="relative z-30 flex flex-col p-10 m-5 bg-white">
        <h1 className="mb-5 text-xs font-bold text-center">
          {" "}
          Profitez de nos meilleures offres du moment
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map(
            (
              product // product est maintenant inféré comme étant de type Product
            ) => (
              <div className="flex flex-col p-4 border" key={product.id}>
                {/* <p>{product.category}</p> */}

                <p>
                  <Image
                    src={product.image}
                    height={300}
                    width={350}
                    objectFit="contain"
                    loading="lazy"
                    alt="deco"
                  />
                </p>
                <h4 className="font-bold">{product.title}</h4>
                <p className="my-2 text-xs line-clamp-2">
                  {product.description}
                </p>
                <div className="flex ">
                  {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <StarIcon className="h-5 text-yellow-500" />
                    ))}
                </div>
                <div className="mb-5 ">
                  <CurrencyFormat
                    value={product.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"€"}
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </div>

                <button className="mt-auto mb-6 button">
                  Ajouter au Panier
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

// app/page.tsx
// "use client";

// import React, { useEffect } from "react";

// export default function ProductFeed({ products }) {
//   // ... (votre code existant)

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();
//         setProducts(data);
//       } catch (error) {
//         setError("Erreur lors du chargement des produits.");
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // ... (le reste de votre code)

//   return (
//     <div>
//       <h1>Liste des produits</h1>
//       <ul>
//         {products.map((product) => (
//           <div key={product.id}>
//             <h3>{product.title}</h3>
//             <p>{product.price}</p>
//             <p>{product.category}</p>
//             <p>{product.description}</p>
//             <p>{product.image}</p>
//           </div>
//         ))}
//       </ul>
//     </div>

//   );
// }
