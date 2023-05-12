import { ActionTypes } from "../actions/action-types"

const initialState={
   products:[],
   category:[],
   items:[],
};
export const productReducer = (state=initialState, {type,payload}) =>{
   switch(type){
      case ActionTypes.SET_PRODUCT:
         return {...state,products:payload};
         case ActionTypes.FILTER_PRODUCTS_BY_SIZE:
            return {
              ...state,
              products: payload.items,
              category: payload.category,
            };
         
      default:
         return state;
   }
}