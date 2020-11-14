import { FORM } from './formTypes'

const initialState = {
  vistaForm: false,
  t1Form : '',
  t2Form : ''
}


const formReducer =  (state = initialState, action) => {
  switch (action.type) {
      case FORM: 

    return {
      ...state,
      vistaForm: action.vistaForm,
      t1Form: action.t1Form,
      t2Form: action.t2Form

    }

    default: return state
  }
}

export default formReducer
