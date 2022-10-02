import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { Star } from "heroicons-react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

//

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  // redux
  const dispatch = useDispatch();

  // Ratings demo ramdomizing
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  //   Has Prime Delievery
  const [hasPrime] = useState(Math.random() < 0.5);

  // redux
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    // sending items to the redux store
    dispatch(addToBasket(product))
  };

  return (
    //   Each Product
    <div className="relative flex flex-col rounded-md  bg-white m-5 bg-red z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3 line-clamp-1">{title}</h4>
      {/* Rating */}
      <div className="flex ">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <Star key={i} className="h-5 text-yellow-400 " />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <b>
          <Currency quantity={price} currency="UGX" /> K
        </b>
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 mt-5">
          <img
            className="w-12 h-5"
            src="https://links.papareact.com/fdw"
            alt=""
          />
          <p className="text-xs text-gray-500">FREE Next-day Delievery</p>
        </div>
      )}
      <button
        onClick={addItemToBasket}
        className="mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
