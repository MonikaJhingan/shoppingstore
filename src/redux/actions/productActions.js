import { ActionTypes } from "../actions/action-types";


export const setProducts=(products) =>{
   return{
   type:ActionTypes.SET_PRODUCT,
   payload:products,
}};

export const selectedProduct=(product) =>{
   return{
   type:ActionTypes.SELECTED_PRODUCT,
   payload:product,
}};
export const FilterProduct=(product,category) =>{
   return{
   type:ActionTypes.SELECTED_PRODUCT,
   payload:product,
}};
export const filterProducts = (products, category) => (dispatch) => {
   dispatch({
     type: ActionTypes.FILTER_PRODUCTS_BY_CATEGORY,
     payload: {
       category: category,
       items:
         category === ""
           ? products
           : products.filter(
               (x) => x.availableCategories.indexOf(category.toUpperCase()) >= 0
             ),
     },
   });
 };