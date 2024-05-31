// @ts-nocheck
"use client"; // Indique un composant client
// src/components/ProductFeed.js

import React, { useState, useEffect } from "react";

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
    <div>
      <h1>Liste des produits</h1>
      <ul>
        {products.map(
          (
            product // product est maintenant inféré comme étant de type Product
          ) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>{product.category}</p>
              <p>{product.description}</p>
              <p>{product.image}</p>
            </div>
          )
        )}
      </ul>
    </div>
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
