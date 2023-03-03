import React from 'react';
//componentsのimpprt
import Todo from './Todo';


const TodoList = ({ todos, toggleTodo }) => {
  //App.jsから値を渡す
  //{}はjsx記法 jsのような記述ができる
  //map関数で取り出した要素に、componentsを与える
  //uniqueキーの設定が必要 uuidで検索して使うとよい
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>);
};

export default TodoList