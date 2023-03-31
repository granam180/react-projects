import { useState, useEffect } from 'react';
import './App.css';

// useEffect is used A LOT for API requests

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(time);
      setTime((t) => {
        console.log(t);
        return t + 1
      });
    }, 1000);
    return () => clearInterval(interval) // clears value, starts again
  }, []);  // only setInterval ONCE!

  return <div>Time: {time}</div>;
};

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedName, setSelectedName] = useState(null);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  // useEffect(() => {
  //   // only get the data if there's a selectedName
  //   if (selectedName) {
  //     fetch(`/${selectedName}.json`)
  //     .then((response) => response.json())
  //     .then((data) => setSelectedNameDetails(data));
  //   }
  // }, [selectedName]);


  // Limiting the use of useEffect()
  const onSelectedNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  }

  return (
    <div>
      <Stopwatch />
      <div>
        {names.map((name) => (
          <button onClick={() => onSelectedNameChange(name)}>{name}</button>
        ))}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
}

export default App
