import React from "react";
import { Product } from "../Product/Product";

export const GridView = ({ products }) => {
  return (
    <div className="gridview">
      <div className="grid grid-cols-3 w-3/5 ml-80 gap-10 ">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};
