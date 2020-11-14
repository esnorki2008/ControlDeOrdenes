import { combineReducers } from 'redux'

import sessionReducer from './session/sessionReducer'
import formReducer from './form/formReducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  form: formReducer
})

export default rootReducer
