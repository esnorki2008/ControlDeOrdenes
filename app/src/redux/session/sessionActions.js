import { SESSION } from './sessionTypes'

export const session = (value = false) => {
  return {
    type: SESSION,
    value: value
  }
}
