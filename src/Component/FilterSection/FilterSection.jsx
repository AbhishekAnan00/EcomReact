import React from "react";
import { useFilterContext } from "../../Context/FilterContext";
import { IoIosCheckmark } from "react-icons/io";
import { FormatPrice } from "../FormatPrice/FormatPrice";
export const FilterSection = () => {
  const {
    updateFilterValue,
    filters: { text },
    allProducts,
    color,
    ResetFilter,
    maxPrice,
    minPrice,
    price,
  } = useFilterContext();
  //get unique data
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    if (property === "colors") {
      newVal = newVal.flat();
    }
    return (newVal = [...new Set(newVal)]);
  };

  //need unique data
  const getCategoryData = getUniqueData(allProducts, "category");
  const getCompanyData = getUniqueData(allProducts, "company");
  const getColorsData = getUniqueData(allProducts, "colors");
  return (
    <>
      <div className="filter-section ml-20 mt-10 max-w-20">
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={updateFilterValue}
              placeholder="Search Products"
              className="border"
            />
          </form>
        </div>

        <div className="category">
          <p className="mb-3 mt-4 text-black-500 font-semibold">Category</p>
          {getCategoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
                className="flex flex-col mb-1 "
              >
                {curElem}
              </button>
            );
          })}
        </div>
        <div className="company">
          <p className="mb-3 mt-3 text-black-500 font-semibold">Company</p>
          <select
            className="border mt-1 outline-none"
            name="company"
            onClick={updateFilterValue}
          >
            {getCompanyData.map((curElem, index) => {
              return (
                <option name="company" value={curElem} key={index}>
                  {curElem}
                </option>
              );
            })}
          </select>
        </div>
        <div className="color w-60">
          <p className="mb-4 mt-3 text-black-500 font-semibold">Colors</p>
          {getColorsData.map((curColor, index) => {
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                onClick={updateFilterValue}
                className="w-4 h-4 rounded-full mr-1"
              >
                {color === curColor ? (
                  <IoIosCheckmark className="text-white" />
                ) : null}
              </button>
            );
          })}
        </div>
        {/* <div className="price">
          <p>Price</p>
          <FormatPrice price={price} />
        </div> */}
        <div className="filter-button">
          <button
            onClick={ResetFilter}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-32 mt-5 "
          >
            Reset Filter
          </button>
        </div>
      </div>
    </>
  );
};
