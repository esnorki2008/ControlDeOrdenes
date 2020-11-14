import { SESSION,SHOW_CRUD } from './sessionTypes'

export const session = (value = false,userId = null,userRealId = null,userName = '') => {
  return {
    type: SESSION,
    value: value,
    userId: userId,
    userRealId: userRealId,
    userName: userName
  }
}

export const crud = () => {
  return {
    type: SHOW_CRUD
  }
}
