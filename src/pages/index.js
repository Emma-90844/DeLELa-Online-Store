import Head from "next/head";
import Header from './../components/Header';
import Banner from './../components/Banner'
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>DiLEla</title>
      </Head>
      {/* header component */}
      <Header />
      {/* max-w-screen-2xl mx-auto  */}
   
      <main className="max-w-6xl mx-auto mt-5">
  
        <Banner/>
        <ProductFeed products={products}/>
      </main>
   
    </div>
  );
}

// Next JS Server side Rendering
export async function getServerSideProps(context){
  const products =  await fetch("https://fakestoreapi.com/products").then((res) => res.json());
  return {props: {
    products: products
  }}
}

