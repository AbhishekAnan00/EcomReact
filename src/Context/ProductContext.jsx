import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer"

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  SingleProduct: {}
};

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({type:"SET_LOADING"})
  try {
      const res = await axios.get(url);
      //  console.log(res);
      const products = await res.data;
      // console.log(products);
      dispatch({type:"SET_API_DATA",payload:products})
  } catch (error) {
    dispatch({type:"API_ERROR"})
  }
  };

  //for single product
  const getSingleProduct = async (url) => {
    dispatch({type:"SET_SINGLE_LOADING"})
    try {
      const res = await axios.get(url);
      const SingleProduct = await res.data;
      dispatch({type: "SET_SINGLE_PRODUCT",payload:SingleProduct})
    }catch(error){
     dispatch({type: "SET_SINGLE_ERROR"})
    }
  }
  
  useEffect(() => {
    getProducts(API);
  }, []);

  return <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>;
};

//custom hook
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
