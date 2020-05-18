import React from 'react';
import PropTypes from 'prop-types'
import * as style from './Todo.scss';

const Todo = ({ todoList }) => (
  <section>
    <ul>
      {
      todoList.map((item, index) => {
        return <li key={index}>{item}</li>
      })
      }
    </ul>
  </section>
);

Todo.propTypes = {
  todoList: PropTypes.array.isRequired
};

export default Todo;
