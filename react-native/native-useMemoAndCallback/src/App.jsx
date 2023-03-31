import { useState, useMemo, useCallback } from 'react'
import './App.css';;

// useMemo  = use 'Calculated Value' -- use it to store calculated values
// it recomputes the 'memoized' value when on of the dependecies change
//
// Memoized: an optimization technique used primarily to speed up computer programs 
// by storing the results of expensive function calls and returning the cached result 
// when the same inputs occur again

//
// useCallback = use if callback that's being created (onClick, onChange) is going on to a NESTED COMPONENT as a PROPERTY

function SortedList({ list, sortFunc }) {
  console.log("SortedList render");
  const sortedList = useMemo(() => {
    console.log("Running sort");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);
  return <div>{sortedList.join(", ")}</div>
}

function App() {
  const [numbers] = useState([10,20,30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  //const sortedNames = useMemo(() => [...names].sort(), [names]);

  const [count1, setCount1] =  useState(0);
  const [count2, setCount2] =  useState(0);

  // don't really need to use useMemo() here
  // const countTotal = useMemo(() => count1 + count2, [count1, count2]);
  const countTotal = count1 + count2;

  // creates a NEW FUNCTION each render at runtime
  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []); // compare the two strings

  return (
    <>
    <div>Total: {total}</div>
    <div>Names: {names.join(', ')}</div>
    <SortedList list={names} sortFunc={sortFunc} />
    <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
    <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
    <div>Total: {countTotal}</div>
    </>

  )
}

export default App
