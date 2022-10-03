import Image from "next/image";
import React from "react";
import { Star } from "heroicons-react";
import Currency from "react-currency-formatter";
// import { useSelector } from "react-redux";
// import { selectItems } from "./../slices/basketSlice";
import {addToBasket, removeFromBasket} from "../slices/basketSlice"
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  price,
  title,
  description,
  category,
  rating,
  image,
  hasPrime,
}) {
    const dispatch = useDispatch()
    const addItemToBasket = () => {
        const product = {
            id,
            price,
            title,
            description,
            category,
            rating,
            image,
            hasPrime,
        }
        // push item into redux store
       dispatch(addToBasket(product))
    }
    // remove item
    const removeItemFromBasket =() => {
        // remove item from redux
        dispatch(removeFromBasket({id}))
    }
  return (
    <div className=" md:grid grid-cols-5">
      {/* left */}
      <Image src={image} height={200} width={200} objectFit="contain" />
      {/* middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex ">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Star key={i} className="h-5 text-yellow-400 " />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency className="text-bold" quantity={price} currency="UGX" />K
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
             <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
       
      </div>
     
      {/* right */}
      <div className="flex flex-col space-y-2 my-auto justify-items-end">
        <button onClick={addItemToBasket} className="button">Add to Basket</button>
        <button onClick={removeItemFromBasket} className="button">Remove </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
