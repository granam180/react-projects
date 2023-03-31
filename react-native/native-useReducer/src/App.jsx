import { useReducer } from 'react';  // manage more COMPLEX STATE
import './App.css';

function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
    // combine the existing STATE with whatever comes in on the ACTION
      ...state,
      ...action,
    }),  // this does the same thing as RETURN()
    {
      first: "",
      last: "",
    }
  );
  return (
    <div>
      <input type="text" 
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })} />
      <input type="text" 
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })} />
        <div>
          First: {state.first}
          <div>
          Last: {state.last}
          </div>
        </div>
    </div>
  )
}

function NameList() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {  // type is a KEY
      case "SET_NAME":
        // create a new OBJECT, then MUTATE!!
        return { ...state, name: action.payload };  // payload is a KEY
      case "ADD_NAME":
        return {
          ...state,
          names: [...state.names, state.name],
          name: "",
        };

    }
  }, {  // returns an array, creates a 'dispatch' to invoke the useReducer function
    names: [],
    name: "",
  });

  return (
    <div className="App">
      <div>
        {state.names.map((name, index) => (
          <div key={index}>{name}</div> // lookup index, output name
        ))}
      </div>
      <input
        type="text"
        value={state.name}
        // tartegt of the 'target value' is this payload
        // the value is going to give the current value
        onChange={e => dispatch({ type: "SET_NAME", payload: e.target.value })}
      />
      <button
        onClick={() => dispatch({ type: "ADD_NAME" })}
      >Add Name</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <UserForm />
      <NameList />
    </div>
  );
}

export default App
