import React from "react";
import Pessoa from "./components/Pessoas";
const App = () => {
  let list = [
    { name: 'alife', age: 90 },
    { name: 'João', age: 50 },
    { name: 'Richard', age: 15 },
    { name: 'Maria', age: 35 }
  ]

  return (
    <div>
      <h2>Lista de prensença</h2>
      <ul>
        {list.map((item, index) => (
          <Pessoa key={index} data={item} />
        ))}
      </ul>
    </div>
  )
}

export default App