import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Todo.css";

export function Todo() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []); // saving local sessions... as long as the user doesn't close the app??
  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="Todo">
      <Router>
        <nav>
          <ul>
            <li>
            <Link to="/add">ADD THINGS</Link>              
            </li>
            <li>
              /
            </li>
            <li>
            <Link to="/">TODOS</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <div>
              <h1>Todos</h1>
              <ul>
                {todos.map((todo, index) => (
                  <li key={index}>
                    {todo}
                    <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          } />
          <Route path="/add" element={
            <div>
              <h1>Add Todo</h1>
              <input type="text" 
              value={todo} onChange={(e) => setTodo(e.target.value)} 
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddTodo();
                }
              }}
              />
              <button onClick={handleAddTodo}>Add</button>
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}
