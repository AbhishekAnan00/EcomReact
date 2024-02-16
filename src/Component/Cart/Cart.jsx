import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalPrice, shippingFees, clearCart } = useCartContext();
  // console.log(cart);

  if (cart.length === 0) {
    return <div className="absolute top-20 fond-semibold text-4xl ">cart is empty!</div>;
  }
  return (
    <>
      <p className="font-semibold ml-10 text-2xl">Item In Your Cart</p>
      <div className="cartitem">
        {cart.map((curElem) => {
          return <CartItem key={curElem.id} {...curElem} />;
        })}
      </div>
      <hr className="mt-4" />
      <div className=" w-3/5 flex justify-between ml-10">
        <Link to="/products">
          {" "}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 mt-4 ">
            continue shopping
          </button>
        </Link>
        <button
          onClick={clearCart}
          className="bg-red-500 hover:bg-red-700 text-white font-bold rounded p-2 mt-4 "
        >
          Clear Cart
        </button>
      </div>
      <div className="price-section w-60 absolute right-10 top-24 bg-slate-100 p-4 ">
        <div className="flex justify-between mb-1">
          <p>subtotal:</p>
          <p>
            <FormatPrice price={totalPrice} />
          </p>
        </div>
        <hr />
        <div className="flex justify-between mb-1">
          <p>shipping fee:</p>
          <p>
            <FormatPrice price={shippingFees} />
          </p>
        </div>
        <hr />
        <div className="flex justify-between mb-1">
          <p className="font-semibold">order total:</p>
          <p className="font-semibold">
            <FormatPrice price={totalPrice + shippingFees} />
          </p>
        </div>
      </div>
    </>
  );
};
