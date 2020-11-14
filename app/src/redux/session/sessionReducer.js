import { SESSION } from './sessionTypes'
import axios from 'axios';

const initialState = {
  logged: false
}


const sessionReducer =  (state = initialState, action) => {
  switch (action.type) {
      case SESSION: 

    return {
      ...state,
      logged: action.value
    }

    default: return state
  }
}

export default sessionReducer
