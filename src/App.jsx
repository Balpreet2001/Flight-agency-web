import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count -1)}>Minus</button>
    </>
  );
}

export default App
