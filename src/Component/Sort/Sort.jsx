import React from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { useFilterContext } from "../../Context/FilterContext";
export const Sort = () => {
  const { setGridView, setListView, filterProducts , sorting } = useFilterContext();
  return (
    <div className="sort grid grid-cols-3 mt-5 mb-5 ml-80">
      {/* 1st column */}
      <div className=" text-2xl">
        <button className="mr-4" onClick={setGridView}>
          <IoGrid />
        </button>
        <button onClick={setListView}>
          <FaThList />
        </button>
      </div>
      {/* 2nd column */}
      <div>{`${filterProducts.length}`} Products Available</div>
      {/* 3rd colmn */}
      <div>
        <form action="#">
          <label htmlFor="sort">
          </label>
            <select id="sort" className=" outline-none border" onClick={sorting}>
              <option value="lowest">lowest</option>
              <option value="#" disabled></option>
              <option value="highest">highest</option>
              <option value="#" disabled></option>
              <option value="a-z">a-z</option>
              <option value="#" disabled></option>
              <option value="z-a">z-a</option>
            </select>
        </form>
      </div>
    </div>
  );
};
