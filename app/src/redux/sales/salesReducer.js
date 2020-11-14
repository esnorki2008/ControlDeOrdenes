import { SALES }
    from './salesTypes'

const initialState = {
    r1: null,
    r2: null,
    r3: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SALES:
        return {
          ...state,
          r1: action.r1,
          r2: action.r2,
          r3: action.r3
        }
      
      default: return state
    }
  }
  
  export default reducer