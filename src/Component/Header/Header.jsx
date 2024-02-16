import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useCartContext } from "../../Context/CartContext";

export const Header = () => {
  const { totalItem } = useCartContext();
  return (
    <>
      <div className="header">
        <nav className="nav flex justify-between p-4 h-15 bg-slate-400 ">
          <div className="left-nav">Ecom</div>
          <div className="right-nav flex">
            <ul className="flex gap-4 mr-6">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Product</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className=" mt-1 ">
                <Link to="/cart">
                  <FaCartPlus />
                </Link>
              </li>
            </ul>
            <div className="absolute top-2 right-8 text-white ">
              {totalItem}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
