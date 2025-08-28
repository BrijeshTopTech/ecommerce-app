import React from "react";
import CheckoutContactInfo from "../CheckoutContactInfo/CheckoutContactInfo";
import CurrencyDisplay from "../CurrencyDisplay/CurrencyDisplay";
import { useCart } from "react-use-cart";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";

const Checkout = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  let originalPriceTotal = 0;
  let priceTotal = 0;

  const IncreaseQuantity = (prodId, qty) => {
    updateItemQuantity(prodId, qty + 1);
  };

  const DecreaseQuantity = (prodId, qty) => {
    updateItemQuantity(prodId, qty - 1);
  };
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="products-section-heading mb-6 text-3xl text-black-900 text-center">
            <hr />
            Checkout
            <hr />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-4 ">
            <div className="p-4 py-6 bg-white shadow-xl">
              <h2 className=" text-gray-500 uppercase font-medium font-semibold pb-2 border-b border-gray-200">
                Contact Information
              </h2>
              <CheckoutContactInfo />
            </div>
            <div className="p-4 py-6 bg-white shadow-xl">
              <h2 className=" text-gray-500 uppercase font-medium font-semibold pb-2 border-b border-gray-200">
                Order Summary
              </h2>
              {items.forEach((item) => {
                originalPriceTotal += item.originalPrice * item.quantity;
                priceTotal += item.price * item.quantity;
              })}
            <div className="border-b border-gray-200">
              <ul role="list" className=" divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.id} className="flex py-2">
                    <div className="size-20 shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        alt={item.title}
                        src={item.thumbnail}
                        className="size-full object-cover"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base text-gray-900">
                          <h3 className="font- text-sm">
                            <a href={item.href}>{item.title}</a>
                          </h3>
                        </div>
                        <p className=" text-sm text-gray-500">{item.brand}</p>
                      </div>
                      <div className="flex flex-1 items-end text-sm">
                        {/* <p className="md:mr-10 mr-5 text-xs line-through text-gray-500">
                          <CurrencyDisplay amount={item.originalPrice} />
                        </p> */}
                        <p className="md:mr-10 mr-5 font-medium text-sm">
                          <CurrencyDisplay amount={item.price} />
                        </p>
                        {/* <p className="text-xs text-red-500">
                          ({item.discount}%)
                        </p> */}
                      </div>
                      <div className="flex flex-1 items-end md:gap-5 gap-3 text-sm">
                        Qty:
                        <IoIosRemoveCircleOutline
                          className="text-red-500 cursor-pointer"
                          onClick={() =>
                            DecreaseQuantity(item.id, item.quantity)
                          }
                        />
                        {item.quantity}
                        <IoIosAddCircleOutline
                          className="text-green-500 cursor-pointer"
                          onClick={() =>
                            IncreaseQuantity(item.id, item.quantity)
                          }
                        />
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

              <div className="flex justify-between text-base text-gray-900 mt-4">
                <p>Subtotal</p>
                <p>
                  <CurrencyDisplay amount={originalPriceTotal} />
                </p>
              </div>
              <div className="flex justify-between text-base text-gray-900 mt-4">
                <p>Discount</p>
                <p className="text-red-600">
                  -
                  <CurrencyDisplay amount={originalPriceTotal - priceTotal} />
                </p>
              </div>
              <div className="flex justify-between text-base text-gray-900 mt-4 pb-5 border-b border-dashed border-gray-200">
                <p>Delivery Charges</p>
                <p>
                  <span className="line-through text-gray-400">
                    <CurrencyDisplay amount={50} />
                  </span>{" "}
                  <span className="text-green-600">Free</span>
                </p>
              </div>
              <div className="flex justify-between text-base uppercase font-semibold text-gray-900 mt-5 pb-5 border-b border-dashed border-gray-200">
                <p>Total</p>
                <p>
                  <CurrencyDisplay amount={cartTotal} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
