import React from "react";
import Header from "../components/Header";
import Image from "next/image";

function checkout() {
  return (
    <>
      <div className="bg-gray-100 ">
        <Header />

        <section className="mx-auto max-w-screen-2xl lg:flex">
          <div className="flex-grow m-5 shadow-sm ">
            <Image src="" width={1020} height={250} objectFit="contain" />
            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="pb-4 text-3xl border-b">
                Votre panier de produits
              </h1>
            </div>
          </div>
          <div>Votre selection de</div>
        </section>
      </div>
    </>
  );
}

export default checkout;
