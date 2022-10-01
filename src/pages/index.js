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
  const products =  await fetch("https://fakestoreapi.com/products/").then((res) => res.json());
  return {props: {
    products:products
  }}
}

//1.Added next auth credential.
//2.On sign in the error requires on to go to google console add in the localhost 5000 another url with 3000.
//3.Add in the redirect below the call back url in the google console.
//4.Added in the _app a piece of code that shall allow us access the authenticated of the app.
//5.Wrap AuthProvider over the redux state Provider in the store in _app