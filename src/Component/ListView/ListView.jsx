import React from "react";
import { Link } from "react-router-dom";
export const ListView = ({ products }) => {
  return (
    <div className="listview">
      {products.map((curElem) => {
  const { id, name, price, image, description } = curElem;
        return (
          <div key={curElem.id} className="grid grid-cols-2 w-2/3 gap-20 mb-10 ml-80  border border-black-500 items-center">
            <figure>
              <img src={image} alt={name} />
            </figure>
            <div className="container p-5 text-wrap text-left">
              <p className="mb-5">{name}</p>
              <p className="mb-5">Price:{price}</p>
              <p className="mb-5">{description.slice(0, 90)}...</p>
              <Link to={`/singleproduct/${id}`}>
                <button className="mb-5 border border-slate-700 bg-slate-500 text-white p-1 rounded-sm">read more</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
