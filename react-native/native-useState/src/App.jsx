import { useState } from 'react';
import './App.css';

function NameList() {
  const [list, setList] = useState(["Dylan", "Sam", "Jay", "Marissa", "Kiera"]) // holds a REFERENCE
  // can be used as a placeholder in the <input
  const [name, setName] = useState("") // SCALAR STRING

  const onAddName = () => {
    // list.push(name); // this will create cuplicate copies on runtime
    setList([...list, name]); // spread operator over list will eliminate duplicate 'id' copies
    setName("");
  }                           
  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}> {name} </li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e => setName(e.target.value))}
      />
      <button
        onClick={onAddName}
      >
        Add Name
      </button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);

  function addOne() {
    // count++; // won't work and will only read as a COPY!
    const Counter = setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={addOne}>Count = {count}</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  )
}



export default App
