import { SESSION,SHOW_CRUD } from './sessionTypes'


const initialState = {
  logged: false,
  userId: null,
  userRealId: null,
  userName: '',
  crud:false
}


const sessionReducer =  (state = initialState, action) => {
  switch (action.type) {
      case SESSION: 

    return {
      ...state,
      logged: action.value,
      userId: action.userId,
      userRealId: action.userRealId,
      userName: action.userName
    }

    case SHOW_CRUD: 

    return {
      ...state,
      crud: !state.crud
    }

    default: return state
  }
}

export default sessionReducer
