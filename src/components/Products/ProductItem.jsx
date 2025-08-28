import React from "react";
import { useCart } from "react-use-cart";
import CurrencyDisplay from "../CurrencyDisplay/CurrencyDisplay";
import { toast } from 'react-toastify';

const ProductItem = (props) => {
  const { addItem } = useCart();
  const addItemToCart = (itemDetails) => {
    toast.success("Item added to cart !");
    addItem(itemDetails);
  }
  return (
    <>
    <a href={props.href} className="group">
      <img
        alt={props.title}
        src={props.thumbnail}
        className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-700">
        {props.brand}
      </h3>
      <h4 className=" text-xs text-gray-700">{props.title}</h4>
      <div className="mt-1 pricing-block">
        <p className="text-base font-medium text-gray-900">
          <CurrencyDisplay amount={props.price} />
        </p>
        <p className="text-xs font-medium text-gray-400 line-through">
          <CurrencyDisplay amount={props.originalPrice} />
        </p>
        <p className="text-xs text-red-500">({props.discount}% OFF)</p>
      </div>
      <button
        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 cursor-pointer mt-2"
        onClick={() => addItemToCart(props)}
      >
        Add to Cart
      </button>
    </a>
    </>
  );
};

export default ProductItem;
