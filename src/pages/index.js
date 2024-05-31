import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
export default function Home() {
  return (
    <div>
      <Head>
        <title>EGP</title>
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
      <Header />
      <main className="mx-auto max-w-screen-2xl">
        <Banner />
      </main>
      <div>
        <ProductFeed />
      </div>

      {/* ---- ---- */}
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const Product = await fetch(
//     "ep-snowy-union-a4t26bx0-pooler.us-east-1.aws.neon.tech"
//   ).then((res) => res.json());
// }
