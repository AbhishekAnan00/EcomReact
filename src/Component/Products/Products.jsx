import React from "react";
import { FilterSection } from "../FilterSection/FilterSection";
import { Sort } from "../Sort/Sort";
import ProductList from "../ProductList/ProductList"

export const Products = () => {
  return (
    <div className="sort flex justify-around">
      <div className="filter-products">
        <FilterSection />
      </div>
      <div className="product-view-sort">
        <div className="filter-sort">
          <Sort />
        </div>
        <div className="product-list">
          <ProductList />
        </div>
      </div>
    </div>
  );
};
