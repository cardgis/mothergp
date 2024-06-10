"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";
import { useRecoilState } from "recoil";
import cartState from "../atoms/cartState";
//import toast from "react-hot-toast";
/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} category
 * @property {string} description
 * @property {string} image
 */

export default function ProductFeed({}) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating] = useState(5);
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const addItemToCart = (product) => {
    const existingProductIndex = cartItem.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingProductIndex === -1) {
      // Le produit n'est pas encore dans le panier
      setCartItem((prevCartItems) => [
        ...prevCartItems,
        { product: product, quantity: 1 }, // Ajout du produit avec quantité 1
      ]);
    } else {
      // Le produit est déjà dans le panier, incrémente la quantité
      setCartItem((prevCartItems) =>
        prevCartItems.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };

  // const addItemToCart = (product) => {
  //   // Pass the whole product object
  //   if (cartItem.findIndex((pro) => pro.id === product.id) === -1) {
  //     setCartItem((prevState) => [...prevState, product]);
  //     toast(`${product.title} ajouté au panier`); // Assuming toast is defined
  //   } else {
  //     setCartItem((prevState) => {
  //       return prevState.map((item) => {
  //         return item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item;
  //       });
  //     });
  //     toast(`${product.title} est déjà dans le panier`); // Example toast message
  //   }
  // };

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
      {/* <h4>Profitez de nos meilleures offres du moment</h4> */}
      <div className="relative z-30 flex flex-col p-10 m-5 bg-white">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:-mt-52">
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

                <button
                  onClick={() => addItemToCart(product)}
                  className="mt-auto mb-6 button"
                >
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
