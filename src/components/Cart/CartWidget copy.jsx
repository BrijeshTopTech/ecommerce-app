import { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useCart } from "react-use-cart";

import { IoIosAddCircleOutline,IoIosRemoveCircleOutline } from "react-icons/io";


export default function Cart({ isToggled, toggleState }) {
  
  // let openstatus = CartContainer;
  // console.log("openstatus = ",openstatus);

  const [open, setOpen] = useState(isToggled);
  console.log("Cart Status =" , isToggled);
  
  useEffect(() => {
    setOpen(isToggled);
  }, [isToggled])
  
  // console.log("Cart Status = ", props.cartStatus);
  // console.log("Cart Box = ", open);

  const handleSetOpen = (status) => {
    setOpen(false)
    isToggled = false;
    console.log("open ",status);    
  }
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
  
  // console.log(items);

  const IncreaseQuantity = (prodId,qty) => {
    updateItemQuantity(prodId, qty+1);
  }

  const DecreaseQuantity = (prodId,qty) => {
    updateItemQuantity(prodId, qty-1);
  }
  
  return (
    !isEmpty &&   
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Shopping Cart
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => handleSetOpen(open)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {items.map((item) => (
                          <li key={item.id} className="flex py-6">
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
                                <p className=" text-sm text-gray-500">
                                  {item.brand}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end text-sm">
                                  <p className="mr-10 text-xs line-through text-gray-500">${(item.originalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                  <p className="mr-10 font-medium text-sm">
                                    $
                                    {item.price
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </p>
                                  <p className="text-xs text-red-500">({item.discount}%)</p>
                                
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                Qty:
                                <IoIosRemoveCircleOutline className="text-red-500 cursor-pointer" onClick={() => DecreaseQuantity(item.id, item.quantity)} />
                                {item.quantity}
                                <IoIosAddCircleOutline className="text-green-500 cursor-pointer" onClick={() => IncreaseQuantity(item.id, item.quantity)} />
                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
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
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${cartTotal}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}