// app/api/products/route.ts
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany(); // Récupérer tous les produits
    console.log(NextResponse);
    return NextResponse.json(products);
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Fermer la connexion Prisma
  }
}

// import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// export async function GET(rows) {
//   try {
//     const { rows } = await sql`SELECT * FROM product`; // Assurez-vous que le nom de la table est correct
//     return NextResponse.json(rows);
//   } catch (error) {
//     console.log("Erreur lors de la récupération des produits :", error);
//     return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
//   }
// }

// import { sql } from "@vercel/postgres";
// import React from "react";

// export default async function Articles({
//   params,
// }: {
//   params: { id: number };
// }): Promise<JSX.Element> {
//   try {
//     const { rows } = await sql`SELECT * FROM Product`;
//     console.log(params);
//     if (rows.length === 0) {
//       return <div>Aucun produit trouvé</div>;
//     }
//     return (
//       <div>
//         {rows.map((row) => (
//           <div key={row.id}>
//             <p>
//               {row.id} - {row.title} - {row.price} - {row.category} -
//               {row.description} - {row.image}
//             </p>
//           </div>
//         ))}
//       </div>
//     );
//   } catch (error) {
//     console.error("Erreur lors de la récupération du produit:", error);
//     return <div>Erreur lors du chargement du produit</div>;
//   }
// }

// import { PrismaClient } from "@prisma/client";
// import React from "react";

// const prisma = new PrismaClient(); // Initialisez Prisma

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     try {
//       const Products = await prisma.product.findMany();
//       console.log(Products);
//       res.status(200).json(Products);
//     } catch (error) {
//       console.error(error);
//       res
//         .status(500)
//         .json({ error: "Erreur lors de la récupération des données" });
//     } finally {
//       await prisma.$disconnect(); // Déconnectez Prisma après utilisation
//     }
//   } else {
//     res.status(405).end(); // Méthode non autorisée

//     return (
//       <>
//         {Product.map((Products) => (
//           <div key={Products.id}>
//             <p>{Products.title}</p>
//             <p>{Products.price}</p>
//             <p>{Products.category}</p>
//             <p>{Products.description}</p>
//             <p>{Products.image}</p>
//           </div>
//         ))}
//       </>
//     );
//   }
// }
