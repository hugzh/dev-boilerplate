import { ADD_TODO } from './actionType';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    obj: text
  }
}