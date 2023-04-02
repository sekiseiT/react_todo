import { useState, useRef, useEffect } from "react";
import "./App.css"
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import {v4 as uuidv4} from "uuid";


const App = () => {
  //変数を監視するためのuseState
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("keepTodo")) || []);
  // const [project, setProjects] = useState([]);

  //要素の取得
  const todoNameRef = useRef();

  // useEffect(() => {
  //   const temp = localStorage.getItem("keepTodo");
  //   const loadedTodo = JSON.parse(temp);
  //   if (loadedTodo) {
  //     setTodos(loadedTodo);
  //     console.log(loadedTodo)
  //   }
  // }, []);
  
  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("keepTodo", temp);
  }, [todos]);
  


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
    <div className="container">
      <div className="inputContainer">

      <input type="text" id="inputText" placeholder="タスクを記入" ref={todoNameRef} />
      
      <button onClick={handleAddTodo} className="submitButton">タスクを追加</button>
      </div>
      
      {/* filter関数を検索 */}
      <div class="remain">残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
      
      <div className="taskLIst">
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
      </div>
      <button className="delButton" onClick={handleClear}>完了したタスクの削除</button>
    </div>
  );
}

export default App;
