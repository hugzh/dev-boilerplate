import { ADD_TODO } from '../actions/actionType';

const initialState = {
  todoList: ['one', 'two']
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return Object.assign({}, state, { todoList: state.todoList.concat([action.obj]) });
    }
    default:
      return state;
  }
};

export default todoReducer;