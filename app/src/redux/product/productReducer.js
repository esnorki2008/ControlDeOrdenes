import {FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE,
  INPUT_PRODUCT,SELECT_PRODUCT,INPUT_PRODUCT_UPDATE} 
from './productTypes'
const initialState = {
    loadingProduct: false,
    products: [],
    error: '',
    productT1:'',
    productT2:'',
    productT3:'',
    productT1Update:'',
    productT2Update:'',
    productT3Update:'',
    idProduct: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_REQUEST:
        return {
          ...state,
          loadingProduct: true
        }
      case FETCH_PRODUCT_SUCCESS:
        return {
          ...state,
          loadingProduct: false,
          products: action.value,
          error: ''
        }
      case FETCH_PRODUCT_FAILURE:
        return {
          ...state,
          loadingProduct: false,
          products: [],
          error: action.value
        }
      case INPUT_PRODUCT:
        return {
          ...state,
          productT1: action.value.prodT1,
          productT2: action.value.prodT2,
          productT3: action.value.prodT3
        }
        case INPUT_PRODUCT_UPDATE:
          return {
            ...state,
            productT1Update: action.value.prodT1,
            productT2Update: action.value.prodT2,
            productT3Update: action.value.prodT3
          }
        
      case SELECT_PRODUCT:
          return {
            ...state,
            idProduct: action.value
          }
      default: return state
    }
  }
  
  export default reducer