import { useState, useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid";

function App() {
  //変数を監視するためのuseState
  const [todos, setTodos] = useState([]);
  const [project, setProjects] = useState([]);

  //要素の取得
  const todoNameRef = useRef();
  


  const handleAddTodo = () => {
    //タスク追加
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      //スプレッド構文 ...prevTodosは、追加されたタスクたち
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    //必ず空の要素かdivでかこむ
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      {/* filter関数を検索 */}
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
