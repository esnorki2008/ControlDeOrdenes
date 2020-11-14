import { SALES } from './salesTypes'
import axios from 'axios'
import store from '../store';

export const buyData = (r1=null,r2=null,r3=null) => {
  return {
    type: SALES,
    r1: r1,
    r2: r2,
    r3: r3
  }
}

export const buy = () =>{
  return (dispatch) => {
    let state = store.getState()
    var bodyFormData = new FormData();
   
    try {
      bodyFormData.append('cod_producto_venta', state.product.idProduct);
      bodyFormData.append('cod_vendedor_venta', state.session.userId);  
    } catch (error) {
      return ;
    }
    axios({
      method: 'post',
      url: 'http://localhost:8000/sales/',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(res => {
        //dispatch(fetchProduct())
        //console.log(res.data);
        console.log("COMPRADO")
      }).catch(error => {
        //console.log(error)
      })


  }
}

export const statistics = () =>{
  return (dispatch) => {
    let state = store.getState()
    var bodyFormData = new FormData();
   
    try {
      bodyFormData.append('user', state.session.userRealId);  
    } catch (error) {
      return ;
    }
    axios({
      method: 'post',
      url: 'http://localhost:8000/statistics/',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(res => {
        console.log(res.data);
        dispatch(buyData(res.data.u,res.data.d,res.data.t))
      }).catch(error => {
        console.log(error)
      })


  }
}