import { FORM } from './formTypes'

export const form = (vista=false,t1='',t2='') => {
  return {
    type: FORM,
    vistaForm:vista,
    t1Form: t1,
    t2Form: t2
  }
}
