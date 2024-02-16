import React from "react";
import { Link } from "react-router-dom";

export const PageNavigation = ({ title }) => {
  return<>
  <div  className= "w-60 mt-10 ml-20 p-3">
   <Link to="/" className="bg-slate-300 p-2 rounded-md">Home</Link> / { title }
   </div>
  </>
};
