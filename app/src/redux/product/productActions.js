import axios from 'axios'
import store from '../store';
import {
  FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS,INPUT_PRODUCT_UPDATE,
  FETCH_PRODUCT_FAILURE, INPUT_PRODUCT,SELECT_PRODUCT
}
  from './productTypes'

export const fetchProduct = () => {
  return (dispatch) => {
    dispatch(fetchProductRequest())
    axios
      .get('http://localhost:8000/product/')
      .then(response => {
        const product = response.data
        dispatch(fetchProductSuccess(product))
      })
      .catch(error => {
        dispatch(fetchProductFailure(error.message))
      })
  }
}


export const fetchProductSuccess = product => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    value: product
  }
}

export const fetchProductFailure = error => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    value: error
  }
}

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST
  }
}


export const inputProduct = product => {
  return {
    type: INPUT_PRODUCT,
    value: product
  }
}

export const selectProductId = productId => {
  return {
    type: SELECT_PRODUCT,
    value: productId
  }
}

export const createProduct = () => {
  return (dispatch) => {
    let state = store.getState()

    var bodyFormData = new FormData();
    bodyFormData.append('nombre', state.product.productT1);
    bodyFormData.append('descripcion', state.product.productT2);
    try {
      bodyFormData.append('precio', parseInt(state.product.productT3));
      bodyFormData.append('cod_vendedor_producto', state.session.userId);  
    } catch (error) {
      return ;
    }
    axios({
      method: 'post',
      url: 'http://localhost:8000/product/',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(res => {
        dispatch(fetchProduct())
        console.log(res.data);
      }).catch(error => {
        console.log(error)
      })


  }
}


export const deleteProduct = () => {
  return (dispatch) => {
    let state = store.getState()
    let idProduct = state.product.idProduct
    
    var bodyFormData = new FormData();
    bodyFormData.append('cod_producto', idProduct);
    
    


    axios({
      method: 'delete',
      url: 'http://localhost:8000/product/',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(res => {
        dispatch(fetchProduct())
        console.log(res.data);
      }).catch(error => {
        console.log(error)
      })


  }
}

export const inputProductUpdate = product => {
  return {
    type: INPUT_PRODUCT_UPDATE,
    value: product
  }
}


export const updateProduct = () => {
  return (dispatch) => {
    let state = store.getState() 
    var bodyFormData = new FormData();
    bodyFormData.append('nombre', state.product.productT1Update);
    bodyFormData.append('descripcion', state.product.productT2Update);
    try {
      bodyFormData.append('cod_producto', state.product.idProduct);
      bodyFormData.append('precio', parseInt(state.product.productT3Update));
      bodyFormData.append('cod_vendedor_producto', state.session.userId);  
    } catch (error) {
      return ;
    }
    
    axios({
      method: 'put',
      url: 'http://localhost:8000/product/',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(res => {
        dispatch(fetchProduct())
        console.log(res.data);
      }).catch(error => {
        console.log(error)
      })


  }
}