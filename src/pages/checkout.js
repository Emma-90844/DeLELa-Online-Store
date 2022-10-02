import Image from "next/image";
import React from "react";
import Header from "../components/Header";

function checkout() {
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
              Your Shopping Basket
            </h1>
          </div>
        </div>

        {/* right hand */}
        <div></div>
      </main>
    </div>
  );
}

export default checkout;
