import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "./../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

function checkout({}) {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal)
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-6xl mx-auto mt-5 ">
        {/* left hand */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 mb-3 space-y-10 bg-white">
            <h1 className="border-b pb-4 text-2xl ">
              {items.length === 0
                ? "Sorry your Basket is Empty"
                : "Shoping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* right hand */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="">
                SUBTOTAL{" "}
                <p className="">
                  ({items.length} items) 
                  <br/>
                  <span className="font-bold">
                    <Currency quantity={total} currency="UGX"/>
                  </span>
                </p>
              </h2>
              <button
              disabled={!session}
                className={`button mt-3 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-yellow-400 text-gray-300 cursor-not-allowed "
                } `}
              >
                {!session ? "Signin To Checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
