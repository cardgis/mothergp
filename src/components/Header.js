"use client";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { getAuth } from "firebase/auth";
import { useRecoilValue } from "recoil";
import { totalItemsSelector } from "../atoms/cartState";
import { initFirebase } from "../../firebase";

initFirebase();
const auth = getAuth();

function Header() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const totalItems = useRecoilValue(totalItemsSelector);

  return (
    <header>
      <div className="flex items-center flex-grow p-1 py-2 bg-amazon_blue">
        {/* Logo */}
        <div className="flex items-center flex-grow mt-2 mr-6 sm:flex-grow-0 hover:scale-125">
          <Image
            // src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-delivery-retail-truck-association-logo-symbol-png-image_3570987.jpg"
            src="/favicon.ico"
            height={20}
            width={40}
            alt="logo"
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push("/")} // Rediriger vers la page d'accueil
          />
        </div>

        {/* Barre de recherche */}
        <div className="items-center flex-grow hidden h-10 bg-green-200 rounded-md cursor-pointer hover:bg-green-300 sm:flex">
          <input
            className="flex-grow flex-shrink w-6 h-full p-2 px-4 rounded rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Liens de navigation */}
        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
          {/* Connexion/Déconnexion */}
          <div onClick={!session ? signIn : signOut} className="link">
            <div className="font-extrabold cursor-pointer md:text-sm link">
              {status === "loading" && <p>Connexion...</p>}
              {status === "authenticated" && (
                <>
                  <h1>Bonjour, {session.user.name}</h1>
                  <button onClick={signOut}>Déconnexion</button>
                </>
              )}
              {status === "unauthenticated" && <p>Connexion</p>}
            </div>
          </div>

          {/* Retours et commandes */}
          <div className="link">
            <p>Retours</p>
            <p className="font-extrabold cursor-pointer md:text-sm link">
              &amp; Commandes
            </p>
          </div>

          {/* Panier */}

          <div
            onClick={() => router.push("/checkout")}
            className="relative flex items-center link"
          >
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-green-500 rounded-full md:right-10">
                {totalItems}
              </span>
            )}
            <ShoppingCartIcon className="h-10" />
            <p className="hidden mt-2 font-extrabold cursor-pointer md:inline md:text-sm link">
              Panier
            </p>
          </div>
        </div>
      </div>

      {/* Menu inférieur */}
      <div className="flex items-center p-2 pl-6 space-x-3 text-sm text-white bg-amazon_blue-light">
        <p
          onClick={() => router.push("gp")}
          className="flex items-center text-3xl link"
        >
          <MenuIcon className="h-6 mr-1" />
          Pour tout envoi et reception d'articles (GP) PARIS-DAKAR (THIES)
        </p>
        {/* ... autres liens ... */}
      </div>
    </header>
  );
}

export default Header;
