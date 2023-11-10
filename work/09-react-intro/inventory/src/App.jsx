import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';

function App() {
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount(count + 1);
  };

  const minusOne = () => {
    setCount(count - 1);
  };

  const doReorder = () => {
    setCount(5);
  }

  return (
    <div className = 'app-container'>
      <p>Count is {count}</p> 
      <button onClick = {minusOne} disabled={!count}>-</button>
      <button onClick = {addOne}>+</button>
      {count === 0 && <Reorder onReorder = {doReorder} />}  
    </div> 
  )
}

export default App
