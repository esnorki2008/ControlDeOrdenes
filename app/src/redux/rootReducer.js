import { combineReducers } from 'redux'

import sessionReducer from './session/sessionReducer'
import formReducer from './form/formReducer'
import productReducer from './product/productReducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  form: formReducer,
  product: productReducer
})

export default rootReducer
