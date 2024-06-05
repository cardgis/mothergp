"use client";
import React from "react";
import Image from "next/image";
import { initFirebase } from "../../firebase";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession, status } from "next-auth/react";
import { getAuth } from "firebase/auth";

initFirebase();
const auth = getAuth();
function Header() {
  //const { session } = useSession();
  const { data: session, status } = useSession();
  return (
    <>
      <header>
        <div className="flex items-center flex-grow p-1 py-2 bg-amazon_blue">
          <div className="flex items-center flex-grow mt-2 mr-6 sm:flex-grow-0">
            <Image
              src={
                "https://png.pngtree.com/png-clipart/20200709/original/pngtree-delivery-retail-truck-association-logo-symbol-png-image_3570987.jpg"
              }
              height={"150"}
              width={"40"}
              alt="logo"
              objectFit="contain"
              className="cursor-pointer "
            />
          </div>
          <div className="items-center flex-grow hidden h-10 bg-green-200 rounded-md cursor-pointer hover:bg-green-300 sm:flex">
            <input
              className="flex-grow flex-shrink w-6 h-full p-2 px-4 rounded rounded-l-md focus:outline-none"
              type="text"
            />
            <SearchIcon className="h-12 p-4 " />
          </div>
          <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
            <div onClick={signIn} className="link">
              <p className="font-extrabold cursor-pointer md:text-sm link">
                Connexion
              </p>
              <div>
                <div>
                  {status === "loading" && <p>Vérification de la session...</p>}
                  {status === "authenticated" && (
                    <>
                      <h1>Bonjour, {session.user.email}</h1>
                      <button onClick={() => signOut()}>Déconnexion</button>
                    </>
                  )}
                  {status === "unauthenticated" && (
                    <p>Veuillez vous connecter.</p>
                  )}
                </div>

                {/* {session && (
                  <>
                    <h1>Bonjour {session.user.email}</h1>
                    <button onClick={signOut}>Deconnexion</button>
                  </>
                )} */}
              </div>
            </div>

            <div className="link">
              <p>Return</p>
              <p className="font-extrabold cursor-pointer md:text-sm link">
                Orders
              </p>
            </div>
            <div className="relative flex items-center link">
              <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-green-500 rounded-full md:right-10">
                0
              </span>
              <ShoppingCartIcon className="h-10 " />
              <p className="hidden mt-2 font-extrabold cursor-pointer md:inline md:text-sm link">
                Panier
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center p-2 pl-6 space-x-3 text-sm text-white bg-amazon_blue-light">
          <p className="flex items-center link">
            <MenuIcon className="h-6 mr-1 " />
            All
          </p>
          <p className="link">Mes favoris</p>
          <p className="link">Mes orders</p>
          <p className="hidden link lg:inline-flex">Mes infos</p>
        </div>
      </header>
    </>
  );
}

export default Header;
