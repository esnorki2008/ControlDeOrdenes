import { FORM } from './formTypes'

const initialState = {
  vistaForm: false
}


const formReducer =  (state = initialState, action) => {
  switch (action.type) {
      case FORM: 

    return {
      ...state,
      vistaForm: !state.vistaForm
    }

    default: return state
  }
}

export default formReducer
