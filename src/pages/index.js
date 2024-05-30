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
        <ProductFeed />
      </main>

      {/* ---- ---- */}
    </div>
  );
}
