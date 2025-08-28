import React from "react";
// import { useCart } from "../context/CartProvider";
import {useCart} from 'react-use-cart';



const AddToCartButton = ({props}) => {
  const { addItem } = useCart();
  
  return (
    <div>
      <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 cursor-pointer mt-2"
        onClick={() => addItem(props)}>
        Add to Cart
      </button>
      {/* <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 cursor-pointer mt-2"
        onClick={ () => cart.setItems([...cart.items, { name: props.title, price: props.currentPrice }, ]) }>
        Add to Cart
      </button> */}
    </div>
  );
};

export default AddToCartButton;
