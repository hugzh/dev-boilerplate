import React from 'react';
import Todo from '@comp/Todo/Todo.jsx';
import { connect } from 'react-redux';
import { addTodo } from '@/actions/todoAction';
import { Button } from 'antd-mobile';

class TodoList extends React.Component {

onTodoAdd() {
    let text = this.refs.input.value;
    if (!text) {
      alert('no value');
      return;
    }
    this.props.dispatch(addTodo(text));
    this.refs.input.value = '';
  }

  componentDidMount() {
    console.log(this.props.todoList)
  }

  render() {
      return(
        <div>
          <h1 className="dispatch">TodoList</h1>
          <input type="text" ref="input"/>
          <Button onClick={this.onTodoAdd.bind(this)}>add</Button>
          <Todo todoList={this.props.todoList} />
        </div>
      );
  }
};

export default connect(
  state => ({
    todoList: state.todoList
  })
)(TodoList);
