import { useRef, useEffect, useState } from 'react';
import './App.css';

// DEBUG: after adding a third name, the id's multiply by 5... WHY?
//

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // current value associated with reference 'current'
  }, []); // automatically set focus to this input

  const idRef = useRef(1);  // increment ids
  const [names, setNames] = useState([
    { id: idRef.current++, name: "John" },
    { id: idRef.current++, name: "Jane" },
  ]);

  const onAddName = () => {
    setNames([
      ...names,
      {
        id: idRef.current++,
        name: inputRef.current.value,
      },
    ]);
    inputRef.current.value = "";
    // UNCONTROL INPUT
  };

  return (
    <div>
      <div>
        {names.map((name) => (
          <div key={name.name}>
            {name.id} - {name.name}
          </div>
        ))}
      </div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

export default App
