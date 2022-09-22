
import React from "react";
import  {Search } from 'heroicons-react'
import {Menu} from 'heroicons-react'
import {ShoppingCart} from 'heroicons-react'
import {User} from 'heroicons-react'
import {Wifi} from 'heroicons-react'




function Header() {
  return (
    <header>
      {/* LEFT HEADER AND SEARCH */}
      <div className="flex flex-grow item-center bg-dax_blue p-1  py-2 ">
        <div className=" flex  flex-grow  items-center sm:flex-grow-0 ">
          <span className="text-green-300 mr-5 text-2xl   ">
            <b className="ml-5 flex sm:text-sm items-center">DiLELa <span className="hidden sm:flex  text-center items-center "><Wifi/> <b className="hidden sm:flex">Store</b></span></b>
          </span>
          {/* <span className="rounded-full ml-2 h-5 w-5 bg-green-500 "></span>{" "} */}
          {/* <span className="text-green-300 text-2xl mr-5">
            <b>Store</b>
          </span> */}
        </div>
        

        {/* custom search bar */}
        <div className=" hidden sm:flex flex-grow items-center rounded-md h-10 bg-green-400 hover:bg-green-500 cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none p-5"
          />
          <Search className="h-12 p-4 text-white" />
        </div>

        {/* RIGHT HEADER*/}
        <div className="text-white flex items-center text-xs space-x-6 mx-6">
          <div className="link">
            <p className="flex items-center ">
              {" "}
              <span>
                <User className="h-3  text-green-400" />
              </span>
              Thadius Alimo
            </p>
            <p className="font-extrabold hidden sm:flex  pl-6 md:text-small">Account-Lssts</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-small">Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute  top-0 right-0 md:right-10 text-dax_blue bg-yellow-500 rounded-full h-4 w-4 text-center font-bold ">
              0
            </span>
            <ShoppingCart className="h-10" />
            <p className=" hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>


       {/* BOTTOM NAV */}
        <div className="flex items-center text-sm space-x-3 p-2 pl-6 bg-dax_blue-light text-white text-small ">
          <p className="  link flex items-center">
            <Menu className="h-6 mr-1" />
            ALL
          </p>
          <p className="link ">Prime</p>
          <p className="link">Business</p>
          <p className="link">Gadgets</p>
          <p className="link hidden lg:inline-flex">Fashion</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Transport</p>
          <p className="link hidden lg:inline-flex">Sports</p>

        </div>
    </header>
  );
}

export default Header;
