import { combineReducers } from 'redux'

import sessionReducer from './session/sessionReducer'
import formReducer from './form/formReducer'
import productReducer from './product/productReducer'
import salesReducer from './sales/salesReducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  form: formReducer,
  product: productReducer,
  sales: salesReducer
})

export default rootReducer
